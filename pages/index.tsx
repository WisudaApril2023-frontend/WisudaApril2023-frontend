import getConfig from 'next/config';
import Image from 'next/image';

import title from '@src/assets/images/under-construction.svg'
import ImageTes1 from '@src/assets/backgrounds/background-titik.svg'
import matahari from '@src/assets/backgrounds/background-matahari.svg'
import layer from '@src/assets/backgrounds/layer tes.png'
import blueObjectLeft from '@src/assets/images/biru-kiri-bawah.svg'
import blueObjectRight from '@src/assets/images/biru-kanan-bawah.svg'
import marbleblue from '@src/assets/images/bola-biru.svg'
import marblegreen from '@src/assets/images/bola-ijo.svg'
import goldenrook from '@src/assets/images/benteng.svg'
import bluepawn from '@src/assets/images/gajah.svg'
import goldenpawn from '@src/assets/images/pion-kuning.svg'
import pinkpawn from '@src/assets/images/pion-pink.svg'
import pinkdice from '@src/assets/images/dadu-ungu.svg'
import bluedice from '@src/assets/images/dadu-biru.svg'
import redsnake from '@src/assets/images/ular-merah.svg'
import pinksnake from '@src/assets/images/ular-ungu.svg'
import yellowsnake from '@src/assets/images/ular-kuning.svg'
import ImageTes17 from '@src/assets/images/pita1.svg'
import ImageTes18 from '@src/assets/images/pita2.svg'
import ImageTes19 from '@src/assets/images/tangga.svg'
import ImageTes20 from '@src/assets/images/papan.svg'
import ImageTes21 from '@src/assets/images/kipas.svg'
import Layout from '@src/components/Navigation/Layout';
import ComingSoonComponents from '@src/components/monopoly/ComingSoonComponents';

const ComingSoon = (): JSX.Element => {
  return (
    <div className="bg-gradient-to-r from-white to-[#913175] h-screen relative overflow-hidden">
      <div className="w-[130px] pt-[436px] left-0 bottom-0 absolute z-10 top-[-450px] ml-[200px] rotate-[-30deg]">
        <Image src={marbleblue} />
      </div>
      <div className="w-[140px] pt-[436px] z-0 left-0 bottom-0 absolute top-[-390px] ml-[0px] rotate-[10deg]">
        <Image src={marblegreen} />
      </div>
      <div className="w-[100px] absolute z-10 mb-[400px] rotate-[15deg] ml-[400px] top-20">
        <Image src={goldenrook} />
      </div> 
      <div className="mt-[100px] ml-[100px] z-20 relative">
        <Image src={title} />
        <div className="w-1/4">
          <div className="font-[Marker-Felt] text-[#674188] font-medium text-[18px] mt-[10px]">
            We’re currently working on something glorious, we’ll be launching soon.
          </div>
          <div className="font-[Heavy-Heap] text-[#674188] text-[30px]">
            Roll your dice, be the ace.
          </div>
        </div>
      </div>
      <div className="right-0 absolute top-[-2px] h-screen overflow-hidden z-[1]">
        <Image src={layer} />
      </div>
      <div className="w-[350px] left-0 bottom-0 absolute z-10 mb-[-5px]">
        <Image src={blueObjectLeft} />
      </div>
      <div className="w-screen place-items-center grid z-0">
        <div className="w-[700px] bottom-0 mb-[-5px] absolute">
          <Image src={matahari} />
        </div>
      </div>
      <div className="w-[350px] right-0 bottom-0 absolute z-10 mb-[-5px]">
        <Image src={blueObjectRight} />
      </div> 
      <div className="w-[150px] right-0 top-0 mr-[730px] absolute z-10 mt-[450px]">
        <Image src={bluedice} />
      </div>
      <div className="w-[80px] left-0 bottom-0 absolute z-10 rotate-[-15deg] ml-[20px] mb-[150px]">
        <Image src={bluepawn} />
      </div>
      <div className="w-[400px] bottom-0 right-0 mr-[600px] absolute z-10 mb-[-70px]">
        <Image src={redsnake} />
      </div>
      {/* <div className="w-[350px] transform scale-x-[-1] left-0 bottom-0 absolute z-10 rotate-[-10deg] ml-[700px] mb-[200px]">
        <Image src={pinksnake} />
      </div> */}
      <div className="w-[300px] left-0 bottom-0 absolute z-10 rotate-[-10deg] ml-[0px] mb-[-150px]">
        <Image src={yellowsnake} />
      </div>
      <div className='w-[50px] absolute z-[5] bottom-0 mb-[160px] right-0 mr-[1500px]'>
        <ComingSoonComponents />
      </div>
    </div>
  )
}

export default ComingSoon
