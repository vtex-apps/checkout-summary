import React from 'react'
import { render } from '@vtex/test-tools/react'

import SummarySmall from './SummarySmall'

const totalizers = [
  {
    id: 'Items',
    name: 'Total dos Itens',
    value: 32999,
  },
]

test('should render shipping disclaimer if shipping totalizer is not shown', () => {
  const { queryByText } = render(
    <SummarySmall total={32999} totalizers={totalizers} />
  )

  const disclaimer = queryByText('Shipping and taxes calculated in the Cart.')

  expect(disclaimer).toBeInTheDocument()
})

test('should not render shipping disclaimer if shipping totalizer is shown', () => {
  const { queryByText } = render(
    <SummarySmall
      total={32999}
      totalizers={totalizers}
      totalizersToShow={['Shipping']}
    />
  )

  const disclaimer = queryByText('Shipping and taxes calculated at the Cart.')

  expect(disclaimer).not.toBeInTheDocument()
})
