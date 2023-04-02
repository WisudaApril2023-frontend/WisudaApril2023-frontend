import confetti from '@src/assets/backgrounds/confetti.svg'

import Navbar from '@src/components/Navigation/Navbar'
import Footer from '@src/components/Navigation/Footer'
import TAFair from '@src/contexts/Event/TAFair'

const Event = (): JSX.Element => {
  const backgroundImageStyle = {
    backgroundImage: `url(${confetti.src})`,
    backgroundRepeat: 'repeat',
    backgroundSize: '1130px 1000px'
  }
  return (
    <div className="bg-[#8C4975] h-auto relative overflow-x-hidden" style={backgroundImageStyle}>
        <Navbar />
        <div className='h-[150px]'></div>
        <TAFair />
        <Footer />
    </div>
  )
}

export default Event
