import Navbar from '@src/components/Navigation/Navbar'
import TimeLine from '@src/contexts/Timeline/Timeline'
import Footer from '@src/components/Navigation/Footer'

import confetti from '@src/assets/backgrounds/confetti.svg'

const Timeline = (): JSX.Element => {
  const backgroundImageStyle = {
    backgroundImage: `url(${confetti.src})`,
    backgroundRepeat: 'repeat',
    backgroundSize: '1130px 1000px'
  }
    return (
      <div className="bg-[#8C4975] h-auto relative overflow-x-hidden" style={backgroundImageStyle}>
        <Navbar />
        <div className='h-[100px]'></div>
        <TimeLine />
        <Footer />
    </div>
  )
}

export default Timeline
