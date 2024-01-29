export const nextItem = (toLeft = false, size = 1, current = 0) => {
  if (size < 1 || current > size - 1)
    throw new Error('wrong arguments were provided')
  if (size === 1) return 0
  let next = toLeft ? current - 1 : current + 1
  if (next < size && next >= 0) return next
  next = toLeft ? size - 1 : 0
  return next
}
