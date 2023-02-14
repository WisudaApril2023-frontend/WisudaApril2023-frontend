import getConfig from 'next/config';
import Image from 'next/image';

import title from '@src/assets/images/under-construction.svg'
import ImageTes1 from '@src/assets/backgrounds/background-titik.svg'
import matahari from '@src/assets/backgrounds/background-matahari.svg'
import layer from '@src/assets/backgrounds/layer tes.png'
import blueObjectLeft from '@src/assets/images/biru-kiri-bawah.svg'
import blueObjectRight from '@src/assets/images/biru-kanan-bawah.svg'
import ImageTes6 from '@src/assets/images/bola-biru.svg'
import ImageTes7 from '@src/assets/images/bola-ijo.svg'
import ImageTes8 from '@src/assets/images/benteng.svg'
import ImageTes9 from '@src/assets/images/gajah.svg'
import ImageTes10 from '@src/assets/images/pion-kuning.svg'
import ImageTes11 from '@src/assets/images/pion-pink.svg'
import ImageTes12 from '@src/assets/images/dadu-ungu.svg'
import ImageTes13 from '@src/assets/images/dadu-biru.svg'
import ImageTes14 from '@src/assets/images/ular-merah.svg'
import ImageTes15 from '@src/assets/images/ular-ungu.svg'
import ImageTes16 from '@src/assets/images/ular-kuning.svg'
import ImageTes17 from '@src/assets/images/pita1.svg'
import ImageTes18 from '@src/assets/images/pita2.svg'
import ImageTes19 from '@src/assets/images/tangga.svg'
import ImageTes20 from '@src/assets/images/papan.svg'
import ImageTes21 from '@src/assets/images/kipas.svg'
import Layout from '@src/components/Navigation/Layout';

const ComingSoon = (): JSX.Element => {
  return (
    <div className="bg-gradient-to-r from-white to-[#913175] h-screen overflow-hidden">
      <div className="mt-[100px] ml-[100px]">
        <Image src={title} />
        <div className="w-1/5">
          <div className="font-[Marker-Felt] text-[#674188] font-medium text-[18px] mt-[10px]">
            We’re currently working on something glorious, we’ll be launching soon.
          </div>
          <div className="font-[Heavy-Heap] text-[#674188] text-[30px]">
            Roll your dice, be the ace.
          </div>
        </div>
      </div>
      <div className="right-0 absolute top-[-2px] h-screen overflow-hidden z-10">
        <Image src={layer} />
      </div>
        <div className="w-[350px] left-0 bottom-0 absolute z-10 overflow-hidden">
          <Image src={blueObjectLeft} />
        </div>
      <div className="w-screen place-items-center grid z-0">
        <div className="w-[700px] bottom-0 absolute">
          <Image src={matahari} />
        </div>
      </div>
      <div className="w-[350px] right-0 bottom-0 absolute z-10">
        <Image src={blueObjectRight} />
      </div>
      
      {/* <div className="w-[500px] pt-[436px] absolute">
        <Image src={matahari} />
      </div> */}
      {/* <div className="w-[400px] pt-[440px] pl-[100px] absolute">
        <Image src={blueObjectRight} />
      </div> */}
    </div>
  )
}

export default ComingSoon
