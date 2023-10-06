import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom'

import PhotoFull from '@/components/PhotoFull'
import Photo from '@/utilities/PhotoObject'

describe('PhotoFull', () => {
  const photoObj:Photo = {  
    albumId: 1, 
    id: 1, 
    title: 'photo number 1', 
    url: 'https://via.placeholder.com/600/24f355', 
    thumbnailUrl: '' }
  
  
  
  it('renders the photo', () => {
    render(<PhotoFull photoObj={photoObj} />)

    expect(screen.getByRole('img', {name: 'photo number 1'})).toBeInTheDocument()
    expect(screen.getByText(/Album #: 1/i)).toBeInTheDocument()
    expect(screen.getByText(/Photo #: 1/i)).toBeInTheDocument()
    expect(screen.getByText(/photo number 1/i)).toBeInTheDocument()
  })
})
