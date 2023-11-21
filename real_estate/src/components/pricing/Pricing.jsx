import React from "react"
import Back from "../common/Back"
import PriceCard from "../home/price/PriceCard"
import img from "../images/ru.jpg"
import "../home/price/price.css"

const Pricing = () => {
  return (
    <>
      <section className='pricing mb'>
        <Back name='Pricing 30 days money back guarantee' title='Your Success, Your Price - Discover Budget.' cover={img} />
        <div className='price container'>
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Pricing
