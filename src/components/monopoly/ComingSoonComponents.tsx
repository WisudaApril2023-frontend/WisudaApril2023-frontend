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
import convetti from '@src/assets/images/pita1.svg'
import convetti2 from '@src/assets/images/pita2.svg'
import ladder from '@src/assets/images/tangga.svg'
import board from '@src/assets/images/papan.svg'
import feather from '@src/assets/images/kipas.svg'

const ComingSoonComponents = (): JSX.Element => {
  return (
    <div className="">
      <div className="w-[150px] mt-[-460px] ml-[1080px] z-[10] absolute">
        <Image src={convetti} />
      </div>
      <div className="w-[120px] mt-[250px] ml-[900px] rotate-[220deg] z-[10]">
        <Image src={convetti2} />
      </div>
      <div className="w-[360px] mt-[-700px] ml-[630px] rotate-[-90deg] z-0">
        <Image src={ladder} />
      </div>
      <div className="w-[340px] mt-[-30px] ml-[980px] absolute z-10">
        <Image src={board} />
      </div>
      <div className="w-[500px] mt-[-200px] ml-[920px] rotate-[10deg] z-[5]">
        <Image src={feather} />
      </div>
      <div className="w-[280px] mt-[-200px] ml-[750px] rotate-[-20deg] z-[2] transform -scale-x-100">
        <Image src={pinksnake} />
      </div>
      <div className="w-[200px] mt-[-270px] ml-[1150px] rotate-[20deg] z-[10]">
        <Image src={convetti2} />
      </div>
      <div className="w-[100px] mt-[-60px] ml-[1320px] rotate-[30deg]">
        <Image src={goldenpawn} />
      </div>
      <div className="w-[150px] mt-[50px] ml-[1080px] transform -scale-x-100 z-[10]">
        <Image src={convetti} />
      </div>
      <div className="w-[150px] mt-[-430px] ml-[960px] absolute z-10">
        <Image src={pinkdice} />
      </div>
      <div className="w-[110px] mt-[-500px] ml-[880px] absolute z-10">
        <Image src={marbleblue} />
      </div>
      <div className="w-[100px] mt-[-330px] ml-[1320px] rotate-[50deg]">
        <Image src={pinkpawn} />
      </div>
    </div>
  )
}

export default ComingSoonComponents
