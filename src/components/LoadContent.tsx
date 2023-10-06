"use client"
import Photo from '@/utilities/PhotoObject'
import React from 'react'
import PhotoThumbnail from './PhotoThumbnail'
import styles from './LoadContent.module.css'
import { Method } from '@testing-library/react'

export default function LoadContent(props:{content:Array<Photo>, onClickPhoto:Function }) {
  /*if (props.content !== undefined) {
    //console.log(props.content[0])
  }*/

  return(
    <>
      <div className={styles.album}>
        { props.content !== undefined && 
          props.content.map((photo:Photo, index) => 
            <div key={index}><PhotoThumbnail photoObj={photo} onClick={props.onClickPhoto}/></div> ) }     
      </div>
    </>
  )
}


/**
 * {props.album !== null && <PhotoThumbnail photoObj={props.album[0]} />}
 */