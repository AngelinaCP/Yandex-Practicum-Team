import { z } from 'zod'

export const formValidator = <T extends z.ZodSchema>(schema: T) => {
  const getInputsErrors = (formData: z.infer<T>) => {
    const result = schema.safeParse(formData)

    if (!result.success) {
      const errorData = result.error.formErrors.fieldErrors
      return { success: result.success, errors: errorData }
    } else {
      return { success: true, errors: {} }
    }
  }

  return getInputsErrors
}
