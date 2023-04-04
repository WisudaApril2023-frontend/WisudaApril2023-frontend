import Image from 'next/image'
import logo from '@src/assets/images/timelinelogo.svg'
import confetti from '@src/assets/backgrounds/confetti.svg'
import Navbar from '@src/components/Navigation/Navbar'
import timeline1 from '@src/assets/images/timeline1.svg'
import Footer from '@src/components/Navigation/Footer'
import blueObjectLeft from '@src/assets/images/biru-kiri-bawah.svg'
import blueObjectRight from '@src/assets/images/biru-kanan-bawah.svg'

const Timeline1 = (): JSX.Element => {
  const backgroundImageStyle = {
    backgroundImage: `url(${confetti.src})`,
    backgroundRepeat: 'repeat',
    backgroundSize: '1130px 1000px'
  }
  return (
    <div className="bg-[#8C4975] h-auto relative overflow-x-hidden" style={backgroundImageStyle}>
        <Navbar />
        <div className="font-[Heavy-Heap] text-center text-white mt-[150px]
        md:text-[70px] text-[50px]">
          T I M E L I N E
        </div>
        <div className='flex flex-col items-center'>
          <div className='xl:w-[1000px] lg:w-[900px] md:w-[700px] sm:w-[600px] 
          mx-[20px] mt-[50px]
          relative items-center overflow-hidden'>
            <Image src = {timeline1} />
          </div>
          <div className='absolute top-100 mr-[px] xl:mr-[900px] lg:mr-[400px] md:mr-[200px] sm:mr-[500px] mr-'>
            <div className="font-[Heavy-Heap] text-left text-white 
            md:text-[40px] text-[30px] -rotate-45">
              MARET
            </div>
          </div>
        </div>
        <div className="w-[350px] left-0 bottom-0 absolute z-[5] mb-[-5px]">
          <Image src={blueObjectLeft} />
        </div>
        <div className='mt-[100px]'>
          
          <Footer />
        </div>
    </div>
  )
}

export default Timeline1