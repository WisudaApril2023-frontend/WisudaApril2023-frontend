import Navbar from '@src/components/Navigation/Navbar'
import Footer from '@src/components/Navigation/Footer'

import UnderConstruction from '@src/contexts/UnderConstruction/Page'
import confetti from '@src/assets/backgrounds/confetti.svg'

import ViewMore1 from '@src/contexts/Event/ViewMore/ViewMore1'
import ViewMore2 from '@src/contexts/Event/ViewMore/ViewMore2'

const AboutUs = (): JSX.Element => {
  const backgroundImageStyle = {
    backgroundImage: `url(${confetti.src})`,
    backgroundRepeat: 'repeat',
    backgroundSize: '1130px 1000px'
  }
  return (
    <div className="bg-[#376692] h-auto relative overflow-x-hidden" style={backgroundImageStyle}>
      <div className='h-[100px]'></div>
      <Navbar />
      <ViewMore2 />
      <Footer />
    </div>
  )
}

export default AboutUs
