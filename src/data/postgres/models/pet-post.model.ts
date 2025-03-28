// Table PetPost {
//   id uuid [pk]
//   user_id int [not null]
//   pet_name varchar(255) [not null]
//   description text
//   image_url varchar(255)
//   status StatusPetPost [default: 'pending']
//   hasFounden boolean [default: false]
//   created_at timestamp [default: 'now()']
// } 

import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum StatusPost {
  PENDING = "pending",
  APPROVED = "approved",
  REJECTED = "rejected",
}

@Entity()
export class PetPost extends BaseEntity {

  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column("int", {
    nullable: false
  })
  user_id: number

  @Column("varchar",{
    length: 60,
    nullable: false
  })
  petName: string

  @Column("text")
  description: string

  @Column("varchar",{
    length: 255,
  })
  image_url: string

  @Column("enum",{
    enum: StatusPost,
    default: StatusPost.PENDING
  })
  status: StatusPost

  @Column("boolean", {
    default: true,
    nullable: false,
  })
  hasFounded: boolean

  @Column("timestamp",{
    default: () => "CURRENT_TIMESTAMP",
    nullable: false
  })
  created_at: Date
}