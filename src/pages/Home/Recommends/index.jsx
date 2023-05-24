import Heading from "../../../components/Common/Heading"
import Card from "./Card"

const Recommends = () => {
  return (
    <div>
      <Heading title='CHEF RECOMMENDS' tagline='Try Now' />
      <div className="grid md:grid-cols-3 gap-12">
        <Card />
        <Card top={true} />
        <Card />
      </div>
    </div>
  )
}

export default Recommends