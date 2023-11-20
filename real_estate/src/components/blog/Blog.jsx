import React from "react"
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
import img from "../images/about.avif"

const Blog = () => {
  return (
    <>
      <section className='blog-out mb'>
        <Back name='Blog' title='We are Guide to Finding the Perfect Home.' cover={img}  />
        <div className='container recent' >
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Blog
