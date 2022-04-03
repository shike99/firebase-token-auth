namespace Discord {
  export interface User {
    readonly id: string
    readonly username: string
    readonly discriminator: string
    readonly email: string
    readonly avatar?: string
    readonly public_flags: number
    readonly flags: number
    readonly banner?: string
    readonly banner_color?: string
    readonly accent_color?: number
    readonly locale: string
    readonly mfa_enabled: boolean
    readonly verified: boolean
  }

  export interface Guild {
    readonly id: string
    readonly name: string
    readonly icon: string
    readonly owner: boolean
    readonly permissions: number
    readonly features: string[]
    readonly permissions_new: string
  }
}
