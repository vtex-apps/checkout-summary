import React, { FunctionComponent } from 'react'
import FormattedPrice from './FormattedPrice'

interface Props {
  label: string
  large: boolean
  value: number
  currency: string
}

const SummaryItem: FunctionComponent<Props> = ({
  label,
  large,
  value,
  currency,
}) => (
  <div
    className={`flex w-100 bt b--muted-3 c-on-base items-center ${
      large ? 'f4' : ''
    }`}
  >
    <div className="flex-none pa5 fw5">{label}</div>
    <div className={`flex-auto pr5 tr ${large ? 'fw5' : ''}`}>
      <FormattedPrice currency={currency} value={value} />
    </div>
  </div>
)

export default SummaryItem
