import Category from './Category'
import Recommends from './Recommends'
import PopularMenu from './PopularMenu'
import Feature from './Feature'
import Layout from '../../Layout'
import Testimonial from './Testimonial'
import CTA from './CTA'
import About from './Service'
import BannerSlider from './Banner/BannerSlider'
import DynamicTitle from '../../components/DynamicTitle'
const Home = () => {
  return (
    <div className=''>
      <DynamicTitle title='Bristo Boss | Home' />
      <BannerSlider />
      <Layout>
        <Category />
        <About />
        <PopularMenu />
        <CTA />
        <Recommends />
      </Layout>
      <Feature />
      <Layout>
        <Testimonial />
      </Layout>
    </div>
  )
}

export default Home