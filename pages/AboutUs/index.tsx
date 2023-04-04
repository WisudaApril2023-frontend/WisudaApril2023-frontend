import Navbar from '@src/components/Navigation/Navbar'
// import Footer from '@src/components/Navigation/Footer'

import UnderConstruction from '@src/contexts/UnderConstruction/Page'
import confetti from '@src/assets/backgrounds/confetti.svg'

const AboutUs = (): JSX.Element => {
  const backgroundImageStyle = {
    backgroundImage: `url(${confetti.src})`,
    backgroundRepeat: 'repeat',
    backgroundSize: '1130px 1000px'
  }
  return (
    <div className="h-auto relative overflow-x-hidden" style={backgroundImageStyle}>
      <Navbar />
      <div className='h-[90px]'></div>
      <UnderConstruction />
      {/* <Footer /> */}
    </div>
  )
}

export default AboutUs
