import React from 'react'

export default function ContactUsBanner() {
  const myStyle = {
    backgroundImage: `url("images/banner/GetInTouch.jpg")`
  }
  return (
    <div
      class="contact-header"
      style={myStyle}
    >
      <div class="container py-5 mb-5">
        <h1 class="text-center text-white">Get in Touch</h1>
        <p class="text-center text-white">
          We're here to assist you. Fill out the form below to reach out us
          directly.
        </p>
      </div>
    </div>
  )
}
