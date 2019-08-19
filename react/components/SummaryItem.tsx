import React, { FunctionComponent } from 'react'
import { FormattedCurrency } from 'vtex.format-currency'

interface Props {
  label: string
  large: boolean
  value: number
}

const SummaryItem: FunctionComponent<Props> = ({ label, large, value }) => (
  <div
    className={`flex w-100 c-on-base lh-copy items-center ${
      large ? 'f4 mt4 pb6' : 'mt3'
    }`}
  >
    <div className="flex-none fw6 fw5-l">{label}</div>
    <div className={`flex-auto tr ${large ? 'fw6 fw5-l' : ''}`}>
      <FormattedCurrency value={value / 100} />
    </div>
  </div>
)

export default SummaryItem
