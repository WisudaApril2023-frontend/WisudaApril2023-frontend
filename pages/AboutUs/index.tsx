import Navbar from '@src/components/Navigation/Navbar'
import UnderConstruction from '@src/contexts/UnderConstruction/Page'

const AboutUs = (): JSX.Element => {
  return (
    <div className='overflow-hidden'>
        <Navbar />
        <div className='h-[80px]'>
        </div>
        <UnderConstruction />
    </div>
  )
}

export default AboutUs
