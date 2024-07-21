export default function DiscountTable() {
  return (
    <div class="mt-5 mb-5 pb-3">
      <table class="discount-table">
        <thead>
          <tr>
            <th
              scope="col"
              class="td"
            >
              Discount Table:
            </th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
          <tr>
            <th
              scope="col"
              class="th fw-normal"
            >
              Item
            </th>
            <th
              scope="col"
              class="th fw-normal"
            >
              Discount
            </th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="td">Senior Citizen</td>
            <td class="td">20%</td>
            <td class="td"></td>
          </tr>
          <tr>
            <td class="td">Kid</td>
            <td class="td">15%</td>
            <td class="td"></td>
          </tr>
          <tr>
            <td class="td">Student</td>
            <td class="td">15%</td>
            <td class="td"></td>
          </tr>
          <tr>
            <td class="td">Wednesday</td>
            <td class="td">10%</td>
            <td class="td"></td>
          </tr>
          <tr>
            <td class="td">Weekend</td>
            <td class="td">10%</td>
            <td class="td"></td>
          </tr>
          <tr>
            <td class="td">Waitangi Day</td>
            <td class="td">10%</td>
            <td class="td"></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
