import discounts from '../data/Discount.json'

export default function DiscountTable() {
  console.log(discounts)
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
          {discounts &&
            discounts.map((d) => {
              return (
                <tr key={d.item}>
                  <td>{d.item}</td>
                  <td>{d.discount * 100}%</td>
                  <td></td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}
