import React from 'react'
import NoResults from '../assets/search-icon.png'
import styles from '../styles/NotFound.module.css'
import Asset from './Asset'

const NotFound = () => {
  return (
    <div className={styles.NotFound}>
        <Asset src={NoResults} message="Oops... the page you're looking for doesn't exist"/>
    </div>
  )
}

export default NotFound