// import UnderConstruction from '@src/contexts/UnderConstruction/Page'
import confetti from '@src/assets/backgrounds/confetti.svg'
import Navbar from '@src/components/Navigation/Navbar'
import Aboutus from '@src/contexts/AboutUs/AboutUs'
import Footer from '@src/components/Navigation/Footer'

const AboutUs = (): JSX.Element => {
  // const backgroundImageStyle = {
  //   backgroundImage: `url(${confetti.src})`,
  //   backgroundRepeat: 'repeat',
  //   backgroundSize: '1130px 1000px'
  // }
  // return (
  //   <div className="h-auto relative overflow-x-hidden" style={backgroundImageStyle}>
  //     <Navbar />
  //     <div className='h-[90px]'></div>
  //     <UnderConstruction />
  //     {/* <Footer /> */}
  //   </div>
  // )
  const backgroundImageStyle = {
    backgroundImage: `url(${confetti.src})`,
    backgroundRepeat: 'repeat',
    backgroundSize: '1130px 1000px'
  }
  return (
    <div className="bg-[#8C4975] h-auto relative overflow-x-hidden" style={backgroundImageStyle}>
      <Navbar />
      <div className='h-[100px]'></div>
      <Aboutus />
      <Footer />
    </div>
  )
}

export default AboutUs
