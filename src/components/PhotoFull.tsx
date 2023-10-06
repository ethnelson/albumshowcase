"use client"
import Image from 'next/image'
import Photo from '@/utilities/PhotoObject'
import styles from './PhotoFull.module.css'

export default function PhotoFull(props:{photoObj:Photo}) {
  
  return (
    <div className={styles.photoInfo}> 
      <h2>{props.photoObj.title}</h2>
      <div className={styles.photoContainer}>
        <Image
          src={props.photoObj.url}
          fill
          alt={props.photoObj.title}
          priority />
      </div>
      <hr/>
      <h3>Photo Information</h3>
      <ul>
        <p>Album #: {props.photoObj.albumId}</p>
        <p>Photo #: {props.photoObj.id}</p>
      </ul>
    </div>
  )

}