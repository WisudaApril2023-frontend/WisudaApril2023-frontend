import Image from 'next/image'
import kipas from '@src/assets/backgrounds/kipasmatahari.svg'

import formula from '@src/assets/images/sponsornmedpar/ry-logo-without-glow-rgb-01-1-copy.svg'
import fullo from '@src/assets/images/sponsornmedpar/fullo-black-logo-1.svg'
import macito from '@src/assets/images/sponsornmedpar/logo-macito-png-2.svg'
import mintz from '@src/assets/images/sponsornmedpar/logo-mintz-soft-candy-1.svg'
import tango from '@src/assets/images/sponsornmedpar/logo-tango-2021-01-1.svg'
import BRI from '@src/assets/images/sponsornmedpar/BRI.svg'
import BNI from '@src/assets/images/sponsornmedpar/BNI.svg'
import ayam from '@src/assets/images/sponsornmedpar/ayaman.svg'
import lps from '@src/assets/images/sponsornmedpar/lps.svg'

import acarakita from '@src/assets/images/sponsornmedpar/acarakita-logo.svg'
import skillUp from '@src/assets/images/sponsornmedpar/skillup-logo.svg'
import aisec from '@src/assets/images/sponsornmedpar/aiesec-logo.svg'
import tribun from '@src/assets/images/sponsornmedpar/tribunjabar-logo.svg'
import inilah from '@src/assets/images/sponsornmedpar/logo-inilah.svg'
import parah from '@src/assets/images/sponsornmedpar/parah-logo.svg'
import infobandung from '@src/assets/images/sponsornmedpar/infobandung-logo.svg'

const Sponsor = (): JSX.Element => {
  return (
    <div>
      <div className='h-auto'>
        <div className= 'flex flex-col font-[Excalibur-Nouveau] text-center text-white text-[40px] mt-[150px]'>
          SPONSORS
        </div>
        <div className='flex xl:mt-[70px] mt-[10px] sm:mt-[20px] md:mt-[30px] lg:mt-[50px]'>
          <div className='relative w-[49%] flex flex-col xl:ml-[200px] ml-[20px] sm:ml-[50px] md:ml-[100px] lg:ml-[150px] items-center justify-center'>
              <Image src = {BNI}/>
          </div>
          <div className='relative w-[2%] flex flex-col xl:mx-[100px] mx-[10px] sm:mx-[25px] md:mx-[50px] lg:mx-[75px] items-center justify-center'>
          </div>
          <div className='relative w-[49%] flex flex-col xl:mr-[200px] mr-[20px] sm:mr-[50px] md:mr-[100px] lg:mr-[150px] items-center justify-center'>
              <Image src = {lps}/>
          </div>
        </div>
        <div className='flex xl:mt-[70px] mt-[10px] sm:mt-[20px] md:mt-[30px] lg:mt-[50px]'>
          <div className='relative w-[32%] flex flex-col xl:ml-[200px] ml-[20px] sm:ml-[50px] md:ml-[100px] lg:ml-[150px] items-center justify-center'>
          </div>
          <div className='relative w-[36%] flex flex-col xl:mx-[100px] mx-[10px] sm:mx-[25px] md:mx-[50px] lg:mx-[75px] items-center justify-center'>
            <Image src = {BRI}/>
          </div>
          <div className='relative w-[32%] flex flex-col xl:mr-[200px] mr-[20px] sm:mr-[50px] md:mr-[100px] lg:mr-[150px] items-center justify-center'>
          </div>
        </div>
        <div className='flex xl:mt-[50px] mt-[10px] sm:mt-[20px] md:mt-[30px] lg:mt-[50px]'>
          <div className='relative w-1/6 flex flex-col xl:ml-[200px] ml-[20px] sm:ml-[50px] md:ml-[100px] lg:ml-[150px] items-center justify-center'>
              <Image src = {mintz}/>
          </div>
          <div className='relative w-1/6 flex flex-col mx-[10px] items-center justify-center'>
            <Image src = {formula}/>
          </div>
          <div className='relative w-1/6 flex flex-col mx-[10px] items-center justify-center'>
            <Image src = {fullo}/>
          </div>
          <div className='relative w-1/6 flex flex-col mx-[10px] items-center justify-center'>
            <Image src = {macito}/>
          </div>
          <div className='relative w-1/6 flex flex-col mx-[10px] items-center justify-center'>
            <Image src = {tango}/>
          </div>
          <div className='relative w-1/6 flex flex-col xl:mr-[200px] mr-[20px] sm:mr-[50px] md:mr-[100px] lg:mr-[150px] items-center justify-center'>
              <Image src = {ayam}/>
          </div>
        </div>
      </div>
      <div className="relative items-center overflow-hidden">
        <div className="relative mt-[150px]">
          <Image src={kipas}/>
        </div>
        <div className='absolute top-0'>
          <div className= 'flex flex-col font-[Excalibur-Nouveau] text-center text-white text-[40px] mt-[100px]'>
            MEDIA PARTNERS
          </div>
          <div className='flex xl:mt-[70px] mt-[10px] sm:mt-[20px] md:mt-[30px] lg:mt-[50px]'>
            <div className='relative w-1/3 flex flex-col xl:ml-[200px] ml-[20px] sm:ml-[50px] md:ml-[100px] lg:ml-[150px] items-center justify-center'>
                <Image src = {acarakita}/>
            </div>
            <div className='relative w-1/3 flex flex-col xl:mx-[100px] mx-[10px] sm:mx-[25px] md:mx-[50px] lg:mx-[75px] items-center justify-center'>
                <Image src = {skillUp}/>
            </div>
            <div className='relative w-1/3 flex flex-col xl:mr-[200px] mr-[20px] sm:mr-[50px] md:mr-[100px] lg:mr-[150px] items-center justify-center'>
                <Image src = {aisec}/>
            </div>
          </div>
          <div className='flex xl:mt-[50px] mt-[10px] sm:mt-[20px] md:mt-[30px] lg:mt-[50px]'>
            <div className='relative w-1/3 flex flex-col xl:ml-[200px] ml-[20px] sm:ml-[50px] md:ml-[100px] lg:ml-[150px] items-center justify-center'>
                <Image src = {tribun}/>
            </div>
            <div className='relative w-1/3 flex flex-col xl:mx-[100px] mx-[10px] sm:mx-[25px] md:mx-[50px] lg:mx-[75px] items-center justify-center'>
                <Image src = {inilah}/>
            </div>
            <div className='relative w-1/3 flex flex-col xl:mr-[200px] mr-[20px] sm:mr-[50px] md:mr-[100px] lg:mr-[150px] items-center justify-center'>
                <Image src = {parah}/>
            </div>
          </div>
          <div className='flex xl:mt-[50px] mt-[10px] sm:mt-[20px] md:mt-[30px] lg:mt-[50px]'>
            <div className='relative w-1/3 flex flex-col xl:ml-[200px] ml-[20px] sm:ml-[50px] md:ml-[100px] lg:ml-[150px] items-center justify-center'>
            
            </div>
            <div className='relative w-1/3 flex flex-col xl:mx-[100px] mx-[10px] sm:mx-[25px] md:mx-[50px] lg:mx-[75px] items-center justify-center'>
              <Image src = {infobandung}/>
            </div>
            <div className='relative w-1/3 flex flex-col xl:mr-[200px] mr-[20px] sm:mr-[50px] md:mr-[100px] lg:mr-[150px] items-center justify-center'>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsor
