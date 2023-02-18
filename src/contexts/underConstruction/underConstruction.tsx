import Image from 'next/image'

import title from '@src/assets/images/under-construction.svg'
import matahari from '@src/assets/backgrounds/background-matahari.svg'
import layer from '@src/assets/backgrounds/layer tes.png'
import blueObjectLeft from '@src/assets/images/biru-kiri-bawah.svg'
import blueObjectRight from '@src/assets/images/biru-kanan-bawah.svg'
import marbleblue from '@src/assets/images/bola-biru.svg'
import marblegreen from '@src/assets/images/bola-ijo.svg'
import goldenrook from '@src/assets/images/benteng.svg'
import bluepawn from '@src/assets/images/gajah.svg'
import bluedice from '@src/assets/images/dadu-biru.svg'
import redsnake from '@src/assets/images/ular-merah.svg'
import yellowsnake from '@src/assets/images/ular-kuning.svg'
import ComingSoonComponents from '@src/components/monopoly/ComingSoonComponents'

const ComingSoon = (): JSX.Element => {
  return (
    <div className="bg-gradient-to-r from-white to-[#913175] h-screen relative overflow-hidden">
      <div className="w-[130px] sm:mt-0 mt-[-50px] left-0 top-0 absolute z-[1] ml-[160px] rotate-[-30deg]">
        <Image src={marbleblue} />
      </div>
      <div className="w-[160px] sm:mt-[50px] z-[1] left-0 top-0 absolute ml-[0px] rotate-[10deg]">
        <Image src={marblegreen} />
      </div>
      <div className="w-[100px] absolute z-[1] mb-[400px] rotate-[15deg] ml-[400px] top-20">
        <Image src={goldenrook} />
      </div> 
      <div className="sm:mt-[100px] mt-[130px] sm:ml-[100px] z-[10] relative">
        <div className="ml-[10px] mr-[10px]">
          <Image src={title} />
        </div>
        <div className="sm:w-1/4 ml-[10px] mr-[10px]">
          <div className="font-[Marker-Felt] text-[#674188] font-medium text-[18px] mt-[10px]">
            We’re currently working on something glorious, we’ll be launching soon.
          </div>
          <div className="font-[Heavy-Heap] text-[#674188] text-[30px]">
            Roll your dice, be the ace.
          </div>
        </div>
      </div>
      <div className="right-0 absolute top-[-2px] lg:mr-0 md:mr-[-200px] sm:mr-[-400px] mr-[-1000px] h-screen overflow-hidden z-[1]">
        <Image src={layer} />
      </div>
      <div className="w-[350px] left-0 bottom-0 absolute z-[5] mb-[-5px]">
        <Image src={blueObjectLeft} />
      </div>
      <div className="w-screen place-items-center grid z-[0]">
        <div className="w-[550px] bottom-0 mb-[-5px] mr-[200px] absolute">
          <Image src={matahari} />
        </div>
      </div>
      <div className="w-[350px] right-0 bottom-0 absolute z-[3] mb-[-5px]">
        <Image src={blueObjectRight} />
      </div> 
      <div className="w-[150px] right-0 top-0 mr-[730px] absolute z-[1] mt-[450px]">
        <Image src={bluedice} />
      </div>
      <div className="w-[80px] left-0 bottom-0 absolute z-[6] rotate-[-15deg] ml-[20px] mb-[150px]">
        <Image src={bluepawn} />
      </div>
      <div className="w-[400px] bottom-0 right-0 mr-[600px] absolute z-[1] mb-[-70px]">
        <Image src={redsnake} />
      </div>
      <div className="w-[300px] left-0 bottom-0 absolute z-[6] rotate-[-10deg] ml-[0px] mb-[-150px]">
        <Image src={yellowsnake} />
      </div>
      <div className="absolute z-[2] top-0 right-0 lg:mr-[0px] md:mr-[-200px] sm:mr-[-400px] mr-[-1000px]">
        <ComingSoonComponents />
      </div>
    </div>
  )
}

export default ComingSoon
