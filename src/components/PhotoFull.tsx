"use client"
import Image from 'next/image'
import Photo from '@/utilities/PhotoObject'
import styles from './PhotoFull.module.css'

export default function PhotoFull(props:{photoObj:Photo}) {

  return (
    <div className={styles.PhotoContainer}> 
      <h2>{props.photoObj.title}</h2>
      <Image
        src={props.photoObj.url} 
        width={600} 
        height={600}
        alt={props.photoObj.title}  />
      <h2>Photo Information</h2>
      <ul>
        <li>Album #: {props.photoObj.albumId}</li>
        <li>Photo #: {props.photoObj.id}</li>
      </ul>
    </div>
  )

}