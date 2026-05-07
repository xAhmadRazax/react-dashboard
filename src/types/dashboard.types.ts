export interface UserType {
  id: string
  name: string
  email: string
  age: number
  isVerified: boolean
  lastLoginAt: string
}

export interface addUserDTO {
  name: string
  email: string
  age: number
}
