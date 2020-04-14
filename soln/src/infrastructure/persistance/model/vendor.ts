import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("Vendor")
export class Vendor {

    @PrimaryGeneratedColumn("uuid")
    vendorId: string;

    @Column({ type: "varchar", length: 50, nullable: true })
    vendorName: string;

    @Column({ type: "varchar", length: 1, nullable: true })
    nationallyManaged: string;

    @Column({ type: "datetime" })
    auditCreatedDateTime: Date;

    @Column({ type: "varchar", length: 50 })
    auditCreatedBy: string;

    @Column({ type: "datetime", nullable: true })
    auditModifiedDateTime?: Date;

    @Column({ type: "varchar", length: 50, nullable: true })
    auditModifiedBy?: string;

}