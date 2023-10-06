"use client"
import React, { useState } from 'react'
import styles from './SearchBar.module.css'

export default function SearchBar(props:{ onSubmit:any }) {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [searchType, setSearchType] = useState<boolean>(false)


  let handleSubmit = (e:any) => {
    e.preventDefault();
    props.onSubmit(searchType, searchTerm);
  }

  let handleChange = (e:any) => {
    setSearchTerm(e.target.value)
  }

  let handleSearchTypeChange = () => {
    setSearchType(searchType => !searchType)
    setSearchTerm('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          name='search'
          id='search'
          type='string'
          value={searchTerm}
          placeholder={`Search for ${searchType ? 'photo' : 'album'} number`}
          onChange={handleChange}
        />
      </form>
      <p>
      Know the {searchType ? 'album' : 'photo'} number? Use 
      <button className={styles.switchSearch} onClick={handleSearchTypeChange}>this</button> 
      instead!
      </p>
  </>
  )
}