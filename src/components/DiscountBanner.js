import React from 'react'

export default function DiscountBanner() {
  const myStyle = {
    backgroundImage: `url("images/banner/Discount.jpg")`
  }
  return (
    <div
      class="discount-header"
      style={myStyle}
    >
      <div class="container py-5 mb-5">
        <h1 class="text-center">Discount</h1>
        <p class="text-center">We are here to help you.</p>
      </div>
    </div>
  )
}
