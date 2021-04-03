import { render, screen } from '@testing-library/react'
import Main from '.'

describe('', () => {
  it('should render header', () => {
    render(<Main />)

    expect(screen.getByRole('heading', { name: /NextJs/i })).toBeInTheDocument()
  })
})
