export const formatNum = (num: number, max = 2, min?: number, percent = false) => {
  if (num === null) return '?????'
  const newNum = num.toLocaleString(undefined, {
    maximumFractionDigits: max,
    minimumFractionDigits: min,
  })
  if (percent) return `${newNum}%`
  else return `$${newNum}`
}
