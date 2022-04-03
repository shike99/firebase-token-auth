export const getImageUrl: (user: Discord.User) => string = ({ id, avatar, discriminator }) => {
  if (avatar) {
    const format = avatar.startsWith('a_') ? 'gif' : 'png'
    return `https://cdn.discordapp.com/avatars/${id}/${avatar}.${format}`
  } else {
    const defaultAvatarNumber = +discriminator % 5
    return `https://cdn.discordapp.com/embed/avatars/${defaultAvatarNumber}.png`
  }
}
