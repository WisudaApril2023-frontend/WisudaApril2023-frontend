// import UnderConstruction from '@src/contexts/UnderConstruction/UnderConstruction'
import confetti from '@src/assets/backgrounds/confetti.svg'

import Navbar from '@src/components/Navigation/Navbar'
import Jumbotron from '@src/contexts/Homepage/Jumbotron'
import Contents from '@src/contexts/Homepage/Contents'
import Sponsors from '@src/contexts/Homepage/Sponsor'
import Footer from '@src/components/Navigation/Footer'

const Home = (): JSX.Element => {
  const backgroundImageStyle = {
    backgroundImage: `url(${confetti.src})`,
    backgroundRepeat: 'repeat',
    backgroundSize: '1130px 1000px'
  }
  return (
    <div className="bg-[#8C4975] h-auto relative overflow-x-hidden" style={backgroundImageStyle}>
        <Navbar />
        <Jumbotron />
        <Contents />
        <Sponsors />
        <Footer />
    </div>
  )
}

export default Home
