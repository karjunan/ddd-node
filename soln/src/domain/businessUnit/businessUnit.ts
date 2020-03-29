import { Entity } from "../tatical-patterns/entity";


export class BusinessUnit extends Entity {

    private businessUnitName: string;

    private taggedValueName: [];

    private constructor(businessUnitName: string, taggedValueName: []) {
        super();
        this.businessUnitName = businessUnitName;
        this.taggedValueName = taggedValueName;
    }

    public static create(businessUnitName: string, taggedValueName: []): BusinessUnit {

        const businessUnit = new BusinessUnit(businessUnitName,taggedValueName);
    
        return businessUnit;
    }
}