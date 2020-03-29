import { ValueObject } from "../tatical-patterns/valueObject";


export class SingleClient extends ValueObject {

    private singleClientId: string;

    private clientNumber: string;

    private constructor(singleClientId: string, clientNumber: string) {
        super();
        this.singleClientId = singleClientId;
        this.clientNumber = clientNumber;
    }


    public static create(singleClientId: string, clientNumber: string): SingleClient {
        const singleClient = new SingleClient(singleClientId,clientNumber);
        return singleClient;
    }

}