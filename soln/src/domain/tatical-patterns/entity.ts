import * as  uid from "uuid";


export class Entity {


    private uuid: string;

    public constructor() {
        this.uuid = uid.v4()
    }

    public getUUID(): string{
        return this.uuid;
    }

}