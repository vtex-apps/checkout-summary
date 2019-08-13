import React, { FunctionComponent } from 'react'
import FormattedPrice from './FormattedPrice'

interface Props {
  label: string
  large: boolean
  value: number
}

const SummaryItem: FunctionComponent<Props> = ({ label, large, value, }) => (
  <div className={`flex w-100 bt b--muted-3 c-on-base items-center ${large ? 'f4': ''}`}>
    <div className="flex-none pa5 fw5">
      {label}
    </div>
    <div className={`flex-auto pr5 tr ${large ? 'fw5': ''}`}>
      <FormattedPrice currency="USD" value={value} />
    </div>
  </div>
)

interface Props {
}

export default SummaryItem
