import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom'

import SearchBar from '@/components/SearchBar'

describe('SearchBar', () => {
  it('renders the SearchBox', () => {
    const mockFtn = () => {}

    render(<SearchBar onSubmit={mockFtn} />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Search for album number/i))
  })

  it('switchs between photo search and album search', async () => {
    let user = userEvent.setup()
    const mockFtn = () => {}

    render(<SearchBar onSubmit={mockFtn} />)
    await act(async () => {
      await user.click(screen.getByRole('button', {name: /this/i}))
    })

    expect(screen.getByPlaceholderText(/Search for photo number/i))
      .toBeInTheDocument()
  })

  it('submits search terms', () => {
    let succeedTest:boolean = false
    const mockFtn = (searchType:boolean, searchTerm:string) => {
      succeedTest = !searchType && searchTerm == '1' 
    }

    render(<SearchBar onSubmit={mockFtn} />)
    const input = screen.getByRole('textbox')
    fireEvent.change(input, {target: {value: '1'}})
    fireEvent.submit(input)
    expect(succeedTest).toBe(true)
  })
})