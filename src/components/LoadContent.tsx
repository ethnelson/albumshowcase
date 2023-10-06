"use client"
import Photo from '@/utilities/PhotoObject'
import PhotoThumbnail from './PhotoThumbnail'
import styles from './LoadContent.module.css'
import Image from 'next/image'
import arrowLeft from '../../public/Arrow_left.svg'
import arrowRight from '../../public/Arrow_right.svg'

export default function LoadContent(props:{content:Array<Photo>, onClickPhoto:Function }) {

  return(
    <div className={styles.albumContainer}>
      <Image className={styles.arrow} src={arrowLeft} width={24} height={24} alt='scroll left' />
      <div className={styles.album}>
        { props.content !== undefined && 
          props.content.map((photo:Photo, index) => 
            <div className={styles.photoContainer} key={index}>
              <PhotoThumbnail photoObj={photo} onClick={props.onClickPhoto}/>
            </div> ) }     
      </div>
      <Image className={styles.arrow} src={arrowRight} width={24} height={24} alt='scroll right' />
    </div>
  )
}