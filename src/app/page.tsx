"use client"
import { useState } from 'react';
import styles from './page.module.css'
import SearchBar from '@/components/SearchBar'
import LoadContent from '@/components/LoadContent';
import Photo from '@/utilities/PhotoObject';
import PhotoFull from '@/components/PhotoFull';

export default function AlbumApp() {
  const defaultPhoto:Photo = { albumId: 1, id: 1, title: '', url: '', thumbnailUrl: '' }

  const [content, setContent] = useState<Array<Photo>>(new Array<Photo>)
  const [bigPhoto, setBigPhoto] = useState<Photo>(defaultPhoto)
  const [showBigPhoto, setShowBigPhoto] = useState<boolean>(false)
  
  async function fetchData(searchType:boolean, searchTerm:string) {
    if (searchTerm !== null) {
      let type = searchType ? 'id' : 'albumId'
      let requestPoint = `https://jsonplaceholder.typicode.com/photos?${type}=${searchTerm}`
      console.log(requestPoint)

      await fetch(requestPoint)
        .then((res) => res.json())
        .then((data) => {
        setContent(data)
        resetPhotoSpotlight()
        })
    } else {
      setContent(new Array<Photo>)
    }
  }

  const showPhoto = (photoObj:Photo) => {
    console.log(photoObj)
    console.log(showBigPhoto)

    setBigPhoto(photoObj)
    if (photoObj === bigPhoto) {
      resetPhotoSpotlight()
    } else if (photoObj !== undefined) {
      setShowBigPhoto(true)
    }
  }

  const resetPhotoSpotlight = () => {
    setShowBigPhoto(false)
    setBigPhoto(defaultPhoto)
  }

  return (
    <>
      <header className={styles.header}>
        <h1>Album Showcase</h1>
        <SearchBar onSubmit={fetchData} />
      </header>
      <main className={styles.main}>
        <LoadContent content={content} onClickPhoto={showPhoto}/>
        {showBigPhoto && <PhotoFull photoObj={bigPhoto} />}
      </main>
    </>
  )
}
