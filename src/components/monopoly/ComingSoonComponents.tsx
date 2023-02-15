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
      <div className="w-[150px] mt-[-300px] ml-[1080px]">
        <Image src={convetti} />
      </div>
      <div className="w-[120px] mt-[250px] ml-[900px] rotate-[220deg]">
        <Image src={convetti2} />
      </div>
      <div className="w-[360px] mt-[-700px] ml-[630px] rotate-[-90deg]">
        <Image src={ladder} />
      </div>
      <div className="w-[340px] mt-[-50px] ml-[950px] absolute z-10">
        <Image src={board} />
      </div>
      <div className="w-[400px] mt-[-150px] ml-[950px] rotate-[10deg] z-5">
        <Image src={feather} />
      </div>
      <div className="w-[300px] mt-[-230px] ml-[680px] rotate-[-20deg] z-5 transform -scale-x-100">
        <Image src={pinksnake} />
      </div>
      <div className="w-[200px] mt-[-270px] ml-[1150px] rotate-[20deg]">
        <Image src={convetti2} />
      </div>
      <div className="w-[100px] mt-[-60px] ml-[1270px] rotate-[30deg]">
        <Image src={goldenpawn} />
      </div>
      <div className="w-[150px] mt-[50px] ml-[1080px] transform -scale-x-100">
        <Image src={convetti} />
      </div>
      <div className="w-[150px] mt-[-450px] ml-[950px] absolute z-10">
        <Image src={pinkdice} />
      </div>
      <div className="w-[110px] mt-[-500px] ml-[880px] absolute z-10">
        <Image src={marbleblue} />
      </div>
      <div className="w-[100px] mt-[-330px] ml-[1270px] rotate-[40deg]">
        <Image src={pinkpawn} />
      </div>
    </div>
  )
}

export default ComingSoonComponents
