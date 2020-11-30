export function FormattedPrice({ value }: { value: number }) {
  if (value === 0) {
    return 'Free'
  }

  return value
}
