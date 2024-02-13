import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"User"})
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    fullName:String

    @Column({nullable:false,unique:true})
    email:String

    @Column()
    password:String

}
