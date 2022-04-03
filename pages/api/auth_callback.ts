import type { NextApiRequest, NextApiResponse } from 'next'
import { fetchJson } from '@/libs/apiClient'
import { firebaseAuth } from '@/libs/firebase/admin'
import { getImageUrl } from '@/libs/discord/avatar'

export type AuthCallbackResponse = {
  token: string
}
type ErrorResponse = {
  error: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<AuthCallbackResponse | ErrorResponse>) {
  const { tokenType, accessToken } = req.body
  if (!(tokenType && accessToken)) {
    res.status(400).json({ error: 'invalid request' })
    return
  }

  // const guilds = await fetchJson<Discord.Guild[]>('https://discord.com/api/users/@me/guilds', {
  //   headers: {
  //     authorization: `${tokenType} ${accessToken}`,
  //   },
  // })
  // if ('error' in guilds || !guilds.some((guild) => guild.id === process.env.GUILD_ID!)) {
  //   res.status(403).json({ error: 'Service Unavailable' })
  //   return
  // }

  // const discordUser = await fetchJson<Discord.User>('https://discord.com/api/users/@me', {
  //   headers: {
  //     authorization: `${tokenType} ${accessToken}`,
  //   },
  // })
  // if ('error' in discordUser) {
  //   res.status(403).json({ error: 'Service Unavailable' })
  //   return
  // }
  const discordUser: Discord.User = {
    id: 'test',
    username: 'test',
    email: 'test@example.com',
    discriminator: '0000',
    avatar: 'test',
    public_flags: 0,
    flags: 0,
    locale: '',
    mfa_enabled: false,
    verified: true,
  }

  try {
    await firebaseAuth.getUser(discordUser.id)
  } catch (error: any) {
    if (error.errorInfo.code === 'auth/user-not-found') {
      try {
        await firebaseAuth.createUser({
          uid: discordUser.id,
          email: discordUser.email,
          displayName: discordUser.username,
          photoURL: getImageUrl(discordUser),
        })
      } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Service Unavailable' })
        return
      }
    } else {
      console.error(error)
      res.status(500).json({ error: 'Service Unavailable' })
      return
    }
  }

  try {
    const token = await firebaseAuth.createCustomToken(discordUser.id)
    res.status(200).json({ token })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Service Unavailable' })
  }
}
