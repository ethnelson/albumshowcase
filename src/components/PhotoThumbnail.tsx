"use client"
import Image from 'next/image'
import Photo from '@/utilities/PhotoObject'

export default function PhotoThumbnail(props:{photoObj:Photo, onClick:any}) {

  return (
    <Image 
      src={props.photoObj.thumbnailUrl} 
      width={100} 
      height={100}
      alt={props.photoObj.title}
      onClick={() => props.onClick(props.photoObj)}/>
  )
}