import React from 'react'
import Posts from '../../components/post'
import Header from '../../components/Header'

import "./home.css"

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
      </div>
    </>
  )
}
