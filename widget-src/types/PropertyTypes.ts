export const PropertyTypes = [
  "string",
  "boolean",
  "number",
  "timestamp",
  "object",
  "array",
  "function",
  "enum",
  "id",
  "richtext",
  "media",
  "link",
] as const

export type PropertyType = typeof PropertyTypes[number]
