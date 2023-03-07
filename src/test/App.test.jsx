import App from '../App'
import { render, screen } from '@testing-library/react'

describe('App', () => {
  it('renders title', () => {
    render(<App />)
    const title = screen.getByText(/Dog App/i)
    expect(title).toBeInTheDocument()
  })
})
