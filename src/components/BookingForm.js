import * as helper from '../helper'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { Store } from '../store'


export default function BookingForm(props) {
  //Declare the formData state to bound the form fields to it's properties
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    screen: '0',
    seat: '0',
    seats: [],
    seniorCitizen: false,
    kid: false,
    student: false,
    wednesday: false,
    weekend: false,
    waitangiDay: false,
  })

  //Declare a errors state to store the validation errors
  const [errors, setErrors] = useState({})

  //Dispatch the new selected screen to update
  //the screenId in the global state of the store
  const {state, dispatch } = useContext(Store)

  
  const screenTimes = helper.getMovieScreenTimes(props.movieId)

  useEffect(() => {
    if (state.screenId !== 0) {
      const screenTime = screenTimes.find((s) => s.id === state.screenId)
      setFormData({
        ...formData,
        screen: state.screenId.toString(),
        seats: screenTime.seats,
      })
    }
  }, [])


  //When a form field is changed, this handler will be fired
  const handleChange = (e) => {
    const { type, name, value, checked } = e.target

    //when the screen times is changed, dispatch the new
    //selected screen to update screenId in the state of the store
    if (name === 'screen') {
      dispatch({ type: 'UPDATE_SCREEN_ID', payload: value })

      if (value.toString() !== '0' && value !== null && value !== '') {
        const screenTime = screenTimes.find((s) => s.id.toString() === value)
        setFormData({
          ...formData,
          screen: value, //update the screen property of the formData
          seats: screenTime.seats, //update the available seat options of the selected screen time
          seat: '0', //when a screen time is changed, no seat should be selected. The seat needs to be reselected
        })
      } else {
        setFormData({
          ...formData,
          screen: '0', //when no screen time is selected
          seats: [], //no available seat option
          seat: '0', //no seat selected
        })
      }
    } else {
      if (type === 'checkbox') {
        //handle when a check box is changed
        setFormData({
          ...formData,
          [name]: checked,
        })
      } else {
        setFormData({
          //handle changes from other fields
          ...formData,
          [name]: value,
        })
      }
    }
  }

  //This function is to validate the booking form
  const validation = (data) => {
    const errors = {}

    if (!data.firstName.trim()) {
      errors.firstName = 'First name is required'
    }
    if (!data.lastName.trim()) {
      errors.lastName = 'Last name is required'
    }
    if (!data.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid'
    }
    if (!data.phone.trim()) {
      errors.phone = 'Phone number is required'
    }

    if (
      data.screen === null ||
      data.screen === '' ||
      data.screen.toString() === '0'
    ) {
      errors.screen = 'Screen time is required'
    }

    if (data.seat === null || data.seat === '' || data.seat === '0') {
      errors.seat = 'Seat is required'
    }
    return errors
  }

  const handleSubmit = async (event) => {

    event.preventDefault()

    const newErrors = validation(formData)

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {

      //Submit the booking details and
      //update the seats availability 
      await helper.submitBookingAsync(props.movieId, formData)

      //Send book confirmation to the customer
      helper.sendBookingEmail(props.movieId, formData)

     
    } else {
      alert(`Form submission failed
             due to validation errors.`)
    }
  }


  return (
    <>
      <div class="container pt-5 pb-4 mt-3">
        <div class="row g-4 row-cols-1 mt-4">
          <div>
            <h1 class="process-h1 text-center">Booking</h1>
          </div>
        </div>
      </div>
      <div class="container form pt-3 pb-5 mb-4 mt-2">
        <form onSubmit={handleSubmit}>
          <div class="row mb-2">
            <div class="col">
              <label
                for="firstName"
                class="form-label"
              >
                First name
              </label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                placeholder="First name"
                onChange={(e) => handleChange(e)}
              />
              {errors.firstName && (
                <span style={{ color: 'red' }}>{errors.firstName}</span>
              )}
            </div>
            <div class="col">
              <label
                for="lastName"
                class="form-label"
              >
                Last name
              </label>
              <input
                type="text"
                class="form-control"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                placeholder="Last name"
                onChange={(e) => handleChange(e)}
              />
              {errors.lastName && (
                <span style={{ color: 'red' }}>{errors.lastName}</span>
              )}
            </div>
          </div>
          <div class="row mb-2">
            <div class="col-sm-6">
              <label
                for="email"
                class="form-label"
              >
                Email
              </label>
              <input
                type="text"
                class="form-control"
                id="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={(e) => handleChange(e)}
              />
              {errors.email && (
                <span style={{ color: 'red' }}>{errors.email}</span>
              )}
            </div>
            <div class="col-sm-6">
              <label
                for="phone"
                class="form-label"
              >
                Phone number
              </label>
              <input
                type="text"
                class="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                placeholder="Phone or mobile number"
                onChange={(e) => handleChange(e)}
              />
              {errors.phone && (
                <span style={{ color: 'red' }}>{errors.phone}</span>
              )}
            </div>
          </div>
          <div class="row mb-2">
            <div class="col">
              <label
                for="schedule"
                class="form-label"
              >
                Choose a scheduled time
              </label>
              <select
                id="screen"
                name="screen"
                value={formData.screen}
                class="form-select"
                onChange={(e) => handleChange(e)}
              >
                <option value="0">Select one...</option>
                {screenTimes.map((s) => {
                  return (
                    <option
                      key={s.id}
                      value={`${s.id}`}
                    >
                      {s.from} {s.date}
                    </option>
                  )
                })}
              </select>
              {errors.screen && (
                <span style={{ color: 'red' }}>{errors.screen}</span>
              )}
            </div>
          </div>
          <div class="row mb-2">
            <div class="col">
              <label
                for="seat"
                class="form-label"
              >
                Choose an available seat
              </label>
              <select
                id="seat"
                name="seat"
                value={formData.seat}
                class="form-select"
                onChange={(e) => handleChange(e)}
              >
                <option
                  key="0"
                  value="0"
                >
                  Select one...
                </option>
                {formData.seats.map((s) => {
                  return (
                    <option
                      key={s}
                      value={s}
                    >
                      {s}
                    </option>
                  )
                })}
              </select>
              {errors.seat && (
                <span style={{ color: 'red' }}>{errors.seat}</span>
              )}
            </div>
          </div>
          <div class="row mb-2">
            <div class="col">
              <label
                for="discount"
                class="form-label"
              >
                Select all qualified discounts
              </label>
              <div class="row row-cols-2 row-cols-md-2 row-cols-lg-3 px-4 my-2">
                <div class="col form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="seniorCitizen"
                    name="seniorCitizen"
                    value={formData.seniorCitizen}
                    onChange={(e) => handleChange(e)}
                  />
                  <label
                    class="form-check-label"
                    for="seniorCitizen"
                  >
                    Senior Citizen
                  </label>
                </div>
                <div class="col form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="kid"
                    name="kid"
                    checked={formData.kid}
                    // onChange={(e) => handleChange(e)}
                    onChange={(e) => handleChange(e)}
                  />
                  <label
                    class="form-check-label"
                    for="kid"
                  >
                    Kid
                  </label>
                </div>
                <div class="col form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="student"
                    name="student"
                    value={formData.student}
                    onChange={(e) => handleChange(e)}
                  />
                  <label
                    class="form-check-label"
                    for="student"
                  >
                    Student
                  </label>
                </div>
                <div class="col form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="wednesday"
                    name="wednesday"
                    value={formData.wednesday}
                    onChange={(e) => handleChange(e)}
                  />
                  <label
                    class="form-check-label"
                    for="wednesday"
                  >
                    Wednesday
                  </label>
                </div>
                <div class="col form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="weekend"
                    name="weekend"
                    value={formData.weekend}
                    onChange={(e) => handleChange(e)}
                  />
                  <label
                    class="form-check-label"
                    for="weekend"
                  >
                    Weekend
                  </label>
                </div>
                <div class="col form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="waitangiDay"
                    name="waitangiDay"
                    value={formData.waitangiDay}
                    onChange={(e) => handleChange(e)}
                  />
                  <label
                    class="form-check-label"
                    for="waitangiDay"
                  >
                    Waitangi Day
                  </label>
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            class="btn btn-dark submit-btn d-block mt-5"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  )
}
