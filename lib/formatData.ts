const handleHighNumber = (highNumber: number) => {
  const numString = highNumber.toString()
  const [one, two, three, four, five] = numString.split('')
  if (numString.length === 7) return `${one}.${two}${three}m`
  if (numString.length === 8) return `${one}${two}.${three}${four}m`
  if (numString.length === 9) return `${one}${two}${three}.${four}${five}m`
  if (numString.length === 10) return `${one}.${two}${three}b`
  if (numString.length === 11) return `${one}${two}.${three}${four}b`
  if (numString.length === 12) return `${one}${two}${three}.${four}${five}b`
  if (numString.length === 13) return `${one}.${two}${three}t`
  if (numString.length === 14) return `${one}${two}.${three}${four}t`
  if (numString.length === 15) return `${one}${two}${three}.${four}${five}t`
  if (numString.length === 16) return `${one}.${two}${three}q`
  if (numString.length === 17) return `${one}${two}.${three}${four}q`
  if (numString.length === 18) return `${one}${two}${three}.${four}${five}q`
  if (numString.length === 19) return `${one}.${two}${three}Q`
  if (numString.length === 20) return `${one}${two}.${three}${four}Q`
  if (numString.length === 21) return `${one}${two}${three}.${four}${five}Q`
}

export const formatNum = (num: number | null, max = 2, min?: number, percent = false) => {
  if (!num) return '?????'
  if (num > 999999) return handleHighNumber(num)
  const newNum = num.toLocaleString(undefined, {
    maximumFractionDigits: max,
    minimumFractionDigits: min,
  })
  if (percent) return `${newNum}%`
  else return `$${newNum}`
}

export const formatDate = (date: string | null) => {
  if (!date) return '?????'
  const dateObject = new Date(date)
  return dateObject.toLocaleString()
}
