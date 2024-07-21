import { useState } from 'react'
import axios from 'axios'

export default function ContactUsForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

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

    if (data.topic === '') {
      errors.topic = 'Topic is required'
    }

    if (!data.message) {
      errors.message = 'Message is required'
    }
    return errors
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newErrors = validation(formData)
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) {
      //Save the contact us record to the contactus.json file in the server/data folder
      await axios
        .post('/api/contactus', formData)
        .then((response) => alert(response.data))
        .catch((error) => console.error(error))
    } else {
      alert(`Form submission failed due to validation errors.`)
    }
  }

  return (
    <>
      <div class="container pt-4 pb-4 mt-1">
        <div class="row g-4 row-cols-1 mt-1">
          <div>
            <h1 class="process-h1 text-center">Contact us</h1>
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
                name="firstName"
                value={formData.firstName}
                onChange={(e) => handleChange(e)}
                class="form-control"
                id="firstName"
                placeholder="First name"
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
                name="lastName"
                value={formData.lastName}
                onChange={(e) => handleChange(e)}
                class="form-control"
                id="lastName"
                placeholder="Last name"
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
                name="email"
                value={formData.email}
                onChange={(e) => handleChange(e)}
                class="form-control"
                id="email"
                placeholder="Email"
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
                name="phone"
                value={formData.phone}
                onChange={(e) => handleChange(e)}
                class="form-control"
                id="phone"
                placeholder="Mobile or phone number"
              />
              {errors.phone && (
                <span style={{ color: 'red' }}>{errors.phone}</span>
              )}
            </div>
          </div>

          <div class="row mb-3">
            <div class="col">
              <label
                for="topic"
                class="form-label"
              >
                Choose a topic
              </label>
              <select
                id="topic"
                name="topic"
                value={formData.topic}
                onChange={(e) => handleChange(e)}
                class="form-select"
              >
                <option value="">Select a topic</option>
                <option value="How to booking a ticket?">
                  How to booking a ticket?
                </option>
                <option value="How to cancel a booking?">
                  How to cancel a booking?
                </option>
                <option value="Inquiry about other services">
                  Inquiry about other services
                </option>
                <option value="Feed back">Feed back</option>
              </select>
            </div>
            {errors.topic && (
              <span style={{ color: 'red' }}>{errors.topic}</span>
            )}
          </div>
          <div class="row mb-3">
            <div class="col">
              <label
                for="message"
                class="form-label"
              >
                Message
              </label>
              <textarea
                class="form-control"
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => handleChange(e)}
                rows="6"
                placeholder="Type your message..."
              ></textarea>
            </div>
            {errors.message && (
              <span style={{ color: 'red' }}>{errors.message}</span>
            )}
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
