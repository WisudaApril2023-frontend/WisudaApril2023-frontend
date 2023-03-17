// import UnderConstruction from '@src/contexts/UnderConstruction/UnderConstruction'
import confetti from '@src/assets/backgrounds/confetti.svg'

import Jumbotron from '@src/contexts/Homepage/Jumbotron'
import Footer from '@src/components/Navigation/Footer'


const Home = (): JSX.Element => {
  const backgroundImageStyle = {
    backgroundImage: `url(${confetti.src})`,
    backgroundRepeat: 'repeat',
    backgroundSize: '1130px 1000px'
  }
  return (
    <div className="bg-[#8C4975] h-[1000px] relative overflow-x-hidden" style={backgroundImageStyle}>
      <div className='h-screen relative'>
        <Jumbotron />
      </div>
      <Footer />
    </div>
  )
}

export default Home
