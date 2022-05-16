import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AdsBanner from './Ads'

export default function Home() {
  return (
    <div>
      <AdsBanner></AdsBanner>
      <p></p>
    </div>
  )
}
