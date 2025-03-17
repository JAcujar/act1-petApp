// Table User {
//   id uuid [pk]
//   name varchar(255) [not null]
//   email varchar(255) [unique, not null]
//   password varchar(255) [not null]
//   role UserRolserRol [default: 'user']
//   status boolean [default: false]
//   created_at timestamp [default: 'now()']
// }

import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum UserRole {
  ADMIND = "admin",
  USER = "user",
}

@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column("varchar", {
    length: 255,
    nullable: false
  })
  name: string

  @Column("varchar", {
    length: 255,
    nullable: false,
    unique: true,
  })
  email: string

  @Column("varchar", {
    length: 255,
    nullable: false
  })
  password: string

  @Column("enum", {
    enum: UserRole,
    default: UserRole.USER,
    nullable: false
  })
  role: UserRole

  @Column("boolean",{
    default: false,
    nullable: false
  })
  status: boolean

  @Column("timestamp",{
    default: () => "CURRENT_TIMESTAMP",
    nullable: false
  })
  created_at: Date

}