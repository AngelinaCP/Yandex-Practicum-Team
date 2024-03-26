import { z } from 'zod'
import { useState } from 'react'

type errObjT<T extends z.ZodTypeAny> = { [key in keyof z.infer<T>]?: string[] }

export const useFormValidate = <T extends z.ZodTypeAny>(
  schema: T
): [errObjT<T>, (arg: z.infer<T>) => boolean] => {
  const [errors, setRes] = useState<errObjT<T>>({})

  /**
   * Check if form is valid
   * and set error messages
   * @param {z.infer<T>} data values from form inputs
   * @returns {boolean} true if form is valid
   */
  const validateForm = (data: z.infer<T>) => {
    const result = schema.safeParse(data)
    const errors = {}
    if (!result.success) {
      const errors = result.error.formErrors.fieldErrors
      setRes(errors)
      return false
    }
    setRes(errors)
    return true
  }

  return [errors, validateForm]
}
