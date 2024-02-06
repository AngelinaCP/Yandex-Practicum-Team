import { ZodObject, ZodRawShape, ZodTypeAny } from 'zod'
import z from 'zod'

export const formValidator = <
  T extends ZodRawShape = Record<string, ZodTypeAny>
>(
  schema: ZodObject<T>
) => {
  const getInputsErrors = (formData: {
    [key in keyof z.infer<typeof schema>]: unknown
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
