import z from 'zod'

export const formValidator = <
  T extends Record<string, unknown> = Record<string, unknown>
>(
  schema: z.ZodType<T, z.ZodTypeDef, T>
) => {
  const getInputsErrors = (formData: {
    [key in keyof T]: T[key]
  }): [
    boolean,
    (
      | { [key in keyof z.infer<typeof schema>]: string[] }
      | Record<string, unknown>
    )
  ] => {
    const result = schema.safeParse(formData)

    if (!result.success) {
      const errorData = result.error.formErrors.fieldErrors
      return [result.success, errorData]
    } else {
      return [true, {}]
    }
  }

  return getInputsErrors
}
