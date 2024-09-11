
import DiscountOverview from "./DiscountOverview"
import DiscountTable from "./DiscountTable"
import DiscountTerms from "./DiscountTerms"

export default function DiscountContent() {
  return (<div class="container pt-4 pb-4 mt-1 discount-content">
    <DiscountOverview />
    <DiscountTable />
    <DiscountTerms />
  </div>)
}
