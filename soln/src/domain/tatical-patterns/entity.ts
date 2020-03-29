import uuid from "uuid/v4";


export class Entity {

    protected uid: string = uuid();

    getUUid(): string {
        return uuid;
    }
}