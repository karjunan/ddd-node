import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({name:"vendor" })
export class Vendor {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

}