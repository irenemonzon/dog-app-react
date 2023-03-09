import { CheckboxBreeds } from '../components/CheckboxBreeds'
import { render, screen } from '@testing-library/react'

describe('should render checkbok', () => {
  const mockdata = [{
    name: 'australian',
    value: []
  }]
  it('renders checkbox', async () => {
    render(<CheckboxBreeds listBreedsDogs={mockdata} />)

    expect(await screen.findByRole('checkbox')).toBeInTheDocument()
  })
})
