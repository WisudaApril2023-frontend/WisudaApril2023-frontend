import confetti from '@src/assets/backgrounds/confetti.svg'

import Navbar from '@src/components/Navigation/Navbar'
import Footer from '@src/components/Navigation/Footer'
import ViewMore2 from '@src/contexts/Event/ViewMore/ViewMore2'

const viewMore = (): JSX.Element => {
  const backgroundImageStyle = {
    backgroundImage: `url(${confetti.src})`,
    backgroundRepeat: 'repeat',
    backgroundSize: '1130px 1000px'
  }
  return (
    <div className="bg-[#376692] h-auto relative overflow-x-hidden" style={backgroundImageStyle}>
        <Navbar />
        <div className='h-[150px]'></div>
        <ViewMore2 />
        <Footer />
    </div>
  )
}

export default viewMore
