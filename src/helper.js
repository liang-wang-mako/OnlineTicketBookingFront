import movieData from './data/Movie.json'
import scheduleData from './data/MovieSchedule.json'
import axios from 'axios'

export const getMovie = (id) => {
  return movieData.movies.find((movie) => movie.id.toString() === id.toString())
}

export const getMovieName = (id) => {
  return getMovie(id).name ?? ''
}

export const getMovieScreenTimes = (id) => {
  return scheduleData.schedules.find((ms) => ms.movieId.toString() === id)
    .screenTimes
}

export const getMovieFromScheduleId = (scheduleId) => {
  const movieId = scheduleData.schedules.find((m) =>
    m.screenTimes.find((s) => s.id.toString() === scheduleId.toString())
  ).movieId
  return getMovie(movieId)
}

//This function is used to send booking confirmation email to the customer
export const sendBookingEmail = (movieId, formData) => {
  //Get the movie
  const movie = getMovie(movieId)

  //Get the booked movie schedule
  const schedule = scheduleData.schedules
    .find((s) => s.movieId.toString() === movieId.toString())
    .screenTimes.find((s) => s.id.toString() === formData.screen.toString())

  // Prepare the email body
  let emailBody = `<p>Hi ${formData.firstName} ${formData.lastName},</p>
    <p>Thanks for your booking the movie ticket for Tongariro Cinema! Below are your confirmed ticket booking details:</p>
    <strong>Movie Title:</strong> ${movie.name}<br/>
    <strong>Screening Time:</strong> ${schedule.from} ${schedule.date}<br/>
    <strong>Seat:</strong> ${formData.seat}<br/>
    <strong>Price:</strong> $${movie.price.toFixed(2)}<br/>`

  let price = movie.price

  //Apply the biggest discount
  if (formData.seniorCitizen) {
    price = price * (1 - 0.2) //Apply 20% discount
    emailBody =
      emailBody +
      `<strong>Discount:</strong> Senior Citizen Discount 20%<br />
      <strong>Discounted Price:</strong> $${price.toFixed(2)}<br />`
  } else if (formData.kid || formData.student) {
    price = price * (1 - 0.15) //Apply 15% discount
    emailBody =
      emailBody +
      `<strong>Discount:</strong> ${
        formData.kid ? 'Kid' : 'Student'
      } Discount 15%<br />
      <strong>Discounted Price:</strong> $${price.toFixed(2)}<br />`
  } else if (formData.wednesday || formData.weekend || formData.waitangiDay) {
    price = price * (1 - 0.1) //Apply 10% discount
    emailBody =
      emailBody +
      `<strong>Discount:</strong> ${
        formData.wednesday
          ? 'Wednesday'
          : formData.weekend
          ? 'Weekend'
          : 'Waitangi Day'
      } Discount 10%<br />
      <strong>Discounted Price:</strong> $${price.toFixed(2)}<br />`
  }

  //Continue to prepare the email body
  emailBody =
    emailBody +
    '<br />Please make a payment for the booking through bank transfer or credit card.<br /><br />' +
    'Our bank details are:<br />' +
    '<strong>Bank Name:</strong> ASB Bank<br />' +
    '<strong>Account Name:</strong> Tongariro Cinemas<br />' +
    '<strong>Account Number:</strong> 12-3034-0241784-00<br /><br />' +
    'Should you have any questions, feel free to conract us.<br /><br /><br /><br />' +
    'Kind regards,<br /><br />' +
    'Customer Service<br />' +
    'Tongariro Cinemas Ltd'

  //Prepare the email
  let preparedEmail = {
    SecureToken: 'c5bbcf5a-3081-418f-96a6-5f11701d6aea', //Encript secure token from Elastic Email service provider
    To: formData.email,
    From: 'lwang@micro-wang.com',
    Subject: 'Online Ticket Booking Confirmation',
    Body: emailBody,
  }

  //Send the booking email to the customer
  if (window.Email) {
    window.Email.send(preparedEmail)
    alert('The ticket booking confirmation email has been sent to you.')
  }
}

//This function is used to post the booking
//details to the /api/booking web api on the server,
//which will save the booking detail to the bookings.json
//file in the data folder on the server, and update the seat availability
export const submitBookingAsync = async (movieId, formData) => {

  //Prepare data
  const data = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    phone: formData.phone,
    movieId: movieId,
    screenId: formData.screen,
    seat: formData.seat,
  }

  //Check discount checked and apply the biggest dicount checked
  const discount = formData.seniorCitizen
    ? 'Senior Citizen Discount'
    : formData.kid
    ? 'Kid Discount'
    : formData.student
    ? 'Student Discount'
    : formData.wednesday
    ? 'Wednesday Discount'
    : formData.weekend
    ? 'Weekend Discount'
    : formData.waitangiDay
    ? 'Waitangi Day Discount'
    : ''

  if (discount) {
    data.discount = discount
  }

  //Post the booking and update the seats availability
  await axios
    .post('/api/booking', data)
    .then((response) => alert(response.data))
    .catch((error) => console.error(error))
}
