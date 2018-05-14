export const mmToPx = (size, dpi = 72) => {
  const MM_IN_INCH = 25.4
  return size * dpi / MM_IN_INCH
}
