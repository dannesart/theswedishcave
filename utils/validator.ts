import { z } from "zod";

export type ValidatorOptions = {
  required?: boolean;
  min?: number;
  max?: number;
};

export default function (
  value: string | number | undefined,
  type: string,
  options: ValidatorOptions
) {
  const defaults = { max: 999999, min: 1 };
  const { min, max, required } = options || defaults;
  let schema;
  switch (type) {
    case "number":
      schema = z
        .number()
        .min(min || defaults.min)
        .max(max || defaults.max);
      break;
    case "email":
      schema = z
        .string()
        .email()
        .min(min || defaults.min)
        .max(max || defaults.max);
      break;
    default:
      schema = z
        .string()
        .min(min || defaults.min)
        .max(max || defaults.max);
      break;
  }
  if (!required) schema = schema.min(0).optional();
  return schema.safeParse(value);
}
