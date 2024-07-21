

export default function CafeMenuBanner() {
  const myStyle = {
    backgroundImage: `url("images/banner/CafeHeader.jpg")`
  }
  return (
    <div
      class="cafe-header"
      style={myStyle}
    >
      <div class="container py-5 mb-5">
        <h1 class="text-center text-white">Our Menu</h1>
        <p class="text-center text-white">
          We're here to offer you the best drinks and food
        </p>
      </div>
    </div>
  )
}
