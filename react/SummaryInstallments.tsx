import React from 'react'
import { defineMessages, FormattedNumber } from 'react-intl'
import { Installment, InstallmentOption } from 'vtex.checkout-graphql'
import { useCssHandles } from 'vtex.css-handles'
import { FormattedCurrency } from 'vtex.format-currency'
import { IOMessageWithMarkers } from 'vtex.native-types'
import { Loading } from 'vtex.render-runtime'

import { useSummary } from './SummaryContext'

const CSS_HANDLES = [
  'installments',
  'installmentsNumber',
  'installmentValue',
  'installmentsTotalValue',
  'interestRate',
  'paymentSystemName',
] as const

function SummaryInstallments(props: SummaryInstallmentsProps) {
  const { loading, paymentData } = useSummary()
  const { message, markers } = props
  const handles = useCssHandles(CSS_HANDLES)

  const { installmentOptions } = paymentData

  if (loading) {
    return <Loading />
  }

  if (!installmentOptions) {
    return null
  }

  let maxInstallments: InstallmentOption | undefined

  installmentOptions.forEach((installmentOption) => {
    const currentValueIsEmpty =
      !maxInstallments || Object.keys(maxInstallments).length === 0

    if (
      currentValueIsEmpty ||
      installmentOption.installments.length >
        (maxInstallments?.installments.length ?? 0)
    ) {
      maxInstallments = installmentOption
    }
  })

  const maxInstallment: Installment | undefined =
    maxInstallments?.installments[maxInstallments?.installments.length - 1]

  const installmentsNumber = maxInstallment?.count
  const installmentValue = maxInstallment?.value
  const installmentsTotalValue = maxInstallment?.total
  const interestRate = maxInstallment?.interestRate
  const paymentSystemName = maxInstallments?.paymentSystem
  const hasInterest = maxInstallment?.hasInterestRate

  return (
    <span className={handles.installments}>
      <IOMessageWithMarkers
        message={message}
        markers={markers}
        handleBase="installments"
        values={{
          installmentsNumber: (
            <span
              key="installmentsNumber"
              className={handles.installmentsNumber}
            >
              {installmentsNumber && (
                <FormattedNumber value={installmentsNumber} />
              )}
            </span>
          ),
          installmentValue: (
            <span key="installmentValue" className={handles.installmentValue}>
              {installmentValue && (
                <FormattedCurrency value={installmentValue / 100} />
              )}
            </span>
          ),
          installmentsTotalValue: (
            <span
              key="installmentsTotalValue"
              className={handles.installmentsTotalValue}
            >
              {installmentsTotalValue && (
                <FormattedCurrency value={installmentsTotalValue / 100} />
              )}
            </span>
          ),
          interestRate: (
            <span key="interestRate" className={handles.interestRate}>
              {interestRate && (
                <FormattedNumber value={interestRate} style="percent" />
              )}
            </span>
          ),
          paymentSystemName: (
            <span key="paymentSystemName" className={handles.paymentSystemName}>
              {paymentSystemName}
            </span>
          ),
          hasInterest,
        }}
      />
    </span>
  )
}

const messages = defineMessages({
  title: {
    id: 'admin/editor.checkout-summary.installments.title',
  },
  description: {
    id: 'admin/editor.checkout-summary.installments.description',
  },
  default: {
    id: 'store/checkout-summary.installments.default',
  },
})

SummaryInstallments.schema = {
  title: messages.title.id,
}

interface SummaryInstallmentsProps {
  message: string
  markers: string[]
}

export default SummaryInstallments
