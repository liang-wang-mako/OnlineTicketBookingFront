import * as helper from '../helper'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Store } from '../store'

export default function MovieSchedule(props) {
  const screenTimes = helper.getMovieScreenTimes(props.movieId)
  const {dispatch } = useContext(Store)

  const navigate = useNavigate()
  const handleOnClick = (id) => {
    dispatch({ type: 'UPDATE_SCREEN_ID', payload: id })
    navigate(`/movies/${props.movieId}/booking`)
  }

  return (
    <div class="mt-5 pb-5 table-wrapper">
      <table class="table border-black">
        <thead>
          <tr>
            <th
              scope="col"
              class="td"
            >
              Schedule:
            </th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
          <tr>
            <th
              scope="col"
              class="th fw-normal"
            >
              Date
            </th>
            <th
              scope="col"
              class="th fw-normal"
            >
              Start
            </th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {screenTimes.map((s) => {
            return (
              <tr key={s.id}>
                <td class="td">{s.date}</td>
                <td class="td">{s.from}</td>
                <td class="td fw-bold text-end">
                  <button
                    // href={`/movies/${props.movieId}/${s.id}`}
                    class="link-dark link-underline-opacity-0"
                    onClick={() => handleOnClick(s.id)}
                  >
                    Book
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
