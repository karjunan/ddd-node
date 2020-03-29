import { ValueObject } from "../tatical-patterns/valueObject";


export class Tenant extends ValueObject {

    private tenantId: string;

    private constructor(tenantId: string) {
        super()
        this.tenantId = tenantId;
    }

    public static create(tenantId: string) {
        const tenant = new Tenant(tenantId);
        return tenant;
    }

}