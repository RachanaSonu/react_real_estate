import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle='Exciting news! Were pleased to announce that all of our available properties have been officially listed. Explore our comprehensive listings below and find your dream home today.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
