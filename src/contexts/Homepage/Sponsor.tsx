import Image from 'next/image'
import kipas from '@src/assets/backgrounds/kipasmatahari.svg'
// import matahari from '@src/assets/backgrounds/background-matahari-cropped.svg'
import acarakita from '@src/assets/images/acarakita-logo.svg'
import skillUp from '@src/assets/images/skillup-logo.svg'
import aisec from '@src/assets/images/aiesec-logo.svg'
import tribun from '@src/assets/images/tribunjabar-logo.svg'
import inilah from '@src/assets/images/logo-inilah.svg'
import parah from '@src/assets/images/parah-logo.svg'
import infobandung from '@src/assets/images/infobandung-logo.svg'

const Sponsor = (): JSX.Element => {
  return (
    <div>
        <div className="relative items-center overflow-hidden">
            {/* <div className= 'flex flex-col font-[Excalibur-Nouveau] text-center text-white text-[40px] '>
              SPONSORS
            </div> */}
            
            <div className="relative mt-[200px]">
                <Image src={kipas}/>
            </div>
            <div className='absolute top-0'>
              <div className= 'flex flex-col font-[Excalibur-Nouveau] text-center text-white text-[40px] mt-[150px]'>
                MEDIA PARTNERS
              </div>
              <div className='flex xl:mt-[70px] mt-[10px] sm:mt-[20px] md:mt-[30px] lg:mt-[50px]'>
                <div className='relative w-1/3 flex flex-col xl:ml-[100px] ml-[20px] sm:ml-[30px] md:ml-[50px] lg:ml-[70px]'>
                    <Image src = {acarakita}/>
                </div>
                <div className='relative w-1/3 flex flex-col xl:mx-[50px] mx-[10px] sm:mx-[15px] md:mx-[25px] lg:mx-[35px]'>
                    <Image src = {skillUp}/>
                </div>
                <div className='relative w-1/3 flex flex-col xl:mr-[100px] mr-[20px] sm:mr-[30px] md:mr-[50px] lg:mr-[70px]'>
                    <Image src = {aisec}/>
                </div>
              </div>
              <div className='flex xl:mt-[50px] mt-[10px] sm:mt-[20px] md:mt-[30px] lg:mt-[50px]'>
                <div className='relative w-1/3 flex flex-col xl:ml-[100px] ml-[20px] sm:ml-[30px] md:ml-[50px] lg:ml-[70px]'>
                    <Image src = {tribun}/>
                </div> 
                <div className='relative w-1/3 flex flex-col xl:mx-[50px] mx-[10px] sm:mx-[15px] md:mx-[25px] lg:mx-[35px]'>
                    <Image src = {inilah}/>
                </div>
                <div className='relative w-1/3 flex flex-col xl:mr-[100px] mr-[20px] sm:mr-[30px] md:mr-[50px] lg:mr-[70px]'>
                    <Image src = {parah}/>
                </div>
              </div>
              <div className='flex xl:mt-[50px] mt-[10px] sm:mt-[20px] md:mt-[30px] lg:mt-[50px]'>
                <div className='relative w-1/3 flex flex-col xl:ml-[100px] ml-[20px] sm:ml-[30px] md:ml-[50px] lg:ml-[70px]'>
                
                </div> 
                <div className='relative w-1/3 flex flex-col xl:mx-[50px] mx-[10px] sm:mx-[15px] md:mx-[25px] lg:mx-[35px]'>
                  <Image src = {infobandung}/>
                </div>
                <div className='relative w-1/3 flex flex-col xl:mr-[100px] mr-[20px] sm:mr-[30px] md:mr-[50px] lg:mr-[70px]'>
                  
                </div>
              </div>
              </div>
        </div>
    </div>
  )
}

export default Sponsor
