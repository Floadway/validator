import { ValidationCallback } from "./ValidationCallback";
import { Constraint } from "./Constraint";
import { SchemaOptions } from "./SchemaOptions";
import { SchemaItem } from "./SchemaItem";
export declare class SchemaStore {
    private schemas;
    constructor();
    validate<T>(item: any, callback: ValidationCallback, group?: any, path?: any): void;
    getRepresentation(constructor: any, group: any): {
        name: string;
        mode: string;
        constraints: {};
    };
    getSchemas(): SchemaItem[];
    isPrimitive(item: any): boolean;
    populateSchema<T>(constructorT: any, data: any, group: any): T;
    getSchema(constructor: any): SchemaItem;
    addConstraint(fn: Function, name: string, constraint: Constraint): void;
    registerSchema(constructor: any, options: SchemaOptions): void;
}
declare var _default: SchemaStore;
export default _default;
