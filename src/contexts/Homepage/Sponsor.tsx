import Image from 'next/image'
import kipas from '@src/assets/images/kipas.svg'
import matahari from '@src/assets/backgrounds/background-matahari.svg'
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
            <div className= 'flex flex-col font-[Excalibur-Nouveau] text-center text-white text-[40px] '>
              SPONSORS
            </div>
            <div className="abs bottom-0 xl:mb-[-200px] lg:mb-[-180px] md:mb-[-150px] sm:mb-[-110px] mb-[-80px]">
                <Image src={kipas} width={2000} height={1450} />
            </div>
            <div className='absolute bottom-0 mb-[-800px] items-center'>
                <Image src={matahari} width={1400} height={1350} />
            </div>
            <div className = 'relative'>
              <div className='absolute bottom-0 mb-[200px] ml-[70px]'>
                  <Image src = {acarakita} width={100} height={100} />
              </div>
              <div className='absolute bottom-0 mb-[200px] mx-[175px]'>
                  <Image src = {skillUp} width={85} height={100} />
              </div>
              <div className='absolute bottom-0 mb-[180px] mx-[270px]'>
                  <Image src = {aisec} width={230} height={130} />
              </div>
              <div className='absolute bottom-0 mb-[200px] ml-[520px]'>
                  <Image src = {tribun} width={260} height={100} />
              </div> 
              <div className='absolute bottom-0 mb-[200px] ml-[820px]'>
                  <Image src = {inilah} width={260} height={100} />
              </div>
              <div className='absolute bottom-0 mb-[200px] ml-[1110px]'>
                  <Image src = {parah} width={200} height={100} />
              </div>
              <div className='absolute bottom-0 mb-[200px] ml-[1325px]'>
                  <Image src = {infobandung} width={100} height={100} />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Sponsor
