import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom'

import LoadContent from '@/components/LoadContent'
import Photo from '@/utilities/PhotoObject'

describe('LoadAlbumContent', () => {
  const album:Array<Photo> = 
      [ { albumId: 1,
          id: 1,
          title: 'photo number 1',
          url: 'https://via.placeholder.com/600/8e973b',
          thumbnailUrl: 'https://via.placeholder.com/150/8e973b' } ];

  it('render photos from an album', () => {
    const mockFtn = () => {}

    render(<LoadContent content={album} onClickPhoto={mockFtn}/>);

    const photo = screen.getByRole('img', {
      name: /photo number 1/i,
    })

    expect(photo).toBeInTheDocument()

  })
  
  it('clicks on photo and activate onClickPhoto hook', async () => {
    let user = userEvent.setup()
    let photoClicked:boolean = false
    const mockFtn = () => { photoClicked = true}

    render(<LoadContent content={album} onClickPhoto={mockFtn}/>)

    await act(async () => {
      await user.click(screen.getByRole('img', { name: /photo number 1/i }))
    })
    expect(photoClicked).toBe(true)
  })
})