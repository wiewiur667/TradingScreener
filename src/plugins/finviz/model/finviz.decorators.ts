/* eslint-disable @typescript-eslint/ban-types */
// eslint-disable-next-line @typescript-eslint/no-namespace

export function mapString(fieldName: string): PropertyDecorator {
  return function (target: Object, propertyKey: string | symbol) {
    const field = "finviz:mapping";
    const keys = Reflect.getMetadata(field, target) || [];
    keys.push({key: propertyKey, mapping: fieldName, type: "string"});
    Reflect.defineMetadata(field, keys, target);
  };
}

export function mapNumber(fieldName: string): PropertyDecorator {
  return function (target: Object, propertyKey: string | symbol) {
    const field = "finviz:mapping";
    const keys = Reflect.getMetadata(field, target) || [];
    keys.push({key: propertyKey, mapping: fieldName, type: "number"});
    Reflect.defineMetadata(field, keys, target);
  };
}

export function mapRange(fieldName: string, order: number): PropertyDecorator {
  return function (target: Object, propertyKey: string | symbol) {
    const field = "finviz:mapping";
    const keys = Reflect.getMetadata(field, target) || [];
    keys.push({key: propertyKey, mapping: fieldName, type: "range", order: order});
    Reflect.defineMetadata(field, keys, target);
  };
}

export function mapBool(fieldName: string): PropertyDecorator {
  return function (target: Object, propertyKey: string | symbol) {
    const field = "finviz:mapping";
    const keys = Reflect.getMetadata(field, target) || [];
    keys.push({key: propertyKey, mapping: fieldName, type: "boolean"});
    Reflect.defineMetadata(field, keys, target);
  };
}
