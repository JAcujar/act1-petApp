import { regularExp } from "../../../config/reggex"

export class RegisterUserDto {
  constructor(
    public name: string,
    public email: string,
    public password: string,
  ) {}

  static execute(object: { [ key: string ]: any }) : [string?, RegisterUserDto?] {
    const { name, email, password } = object

    if (!name) return ['Name is required']
    if (!email) return ['Email is required']
    if (!regularExp.email.test(email)) return ['Email is invalid']
    if (!password) return ['Password is required']
    if (!regularExp.password.test(password)) return ['Invalid format Email']

    return [undefined, new RegisterUserDto(
      name.trim().toLowerCase(),
      email.trim(),
      password.trim(),
    )]
  }
}