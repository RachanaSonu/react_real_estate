import React from "react"
import Heading from "../../common/Heading"
import "./price.css"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='Select Your Package' subtitle='Excitement awaits! It time to kickstart your journey with our exceptional packages. Select the one that suits your needs, and unlock a host of exclusive benefits designed just for you.' />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price
