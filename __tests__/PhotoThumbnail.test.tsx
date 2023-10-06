import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom'

import PhotoThumbnail from '@/components/PhotoThumbnail'
import Photo from '@/utilities/PhotoObject'

describe('PhotoThumbnail', () => {
  const photoObj:Photo = {  
    albumId: 1, 
    id: 1, 
    title: 'photo number 1', 
    url: '', 
    thumbnailUrl: 'https://via.placeholder.com/150/24f355' }

  it('renders a thumbnail photo', () => {
    const mockFtn = () => {}
    render(<PhotoThumbnail photoObj={photoObj} onClick={mockFtn} />)

    expect(screen.getByRole('img', {name: 'photo number 1'})).toBeInTheDocument()
  })
})