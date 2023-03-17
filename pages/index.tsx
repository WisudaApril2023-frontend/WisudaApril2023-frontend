import UnderConstruction from '@src/contexts/UnderConstruction/UnderConstruction'
import Jumbotron from '@src/contexts/Homepage/Jumbotron'
import confetti from '@src/assets/backgrounds/confetti.svg'

const Home = (): JSX.Element => {
  const backgroundImageStyle = {
    backgroundImage: `url(${confetti.src})`,
    backgroundRepeat: 'repeat',
    backgroundSize: '1130px 1000px',
  };
  return (
    <div className="bg-[#8C4975] h-auto relative overflow-x-hidden" style={backgroundImageStyle}>
      <div className='h-screen relative'>
        <Jumbotron />
      </div>
    </div>
  )
}

export default Home