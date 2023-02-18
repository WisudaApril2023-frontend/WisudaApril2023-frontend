import Image from 'next/image'

import marbleblue from '@src/assets/images/bola-biru.svg'
import goldenpawn from '@src/assets/images/pion-kuning.svg'
import pinkpawn from '@src/assets/images/pion-pink.svg'
import pinkdice from '@src/assets/images/dadu-ungu.svg'
import pinksnake from '@src/assets/images/ular-ungu.svg'
import convetti from '@src/assets/images/pita1.svg'
import convetti2 from '@src/assets/images/pita2.svg'
import ladder from '@src/assets/images/tangga.svg'
import board from '@src/assets/images/papan.svg'
import feather from '@src/assets/images/kipas.svg'

const ComingSoonComponents = (): JSX.Element => {
  return (
    <div className="">
      <div className="absolute top-0 right-0 mr-[90px] mt-[360px] w-[100px] rotate-[45deg] z-[3]">
        <Image src={pinkpawn} />
      </div>
      <div className="absolute top-0 right-0 mr-[95px] mt-[290px] w-[100px] rotate-[30deg] z-[2]">
        <Image src={goldenpawn} />
      </div>
      <div className="absolute top-0 right-0 w-[500px] mr-[120px] mt-[100px] rotate-[10deg] z-[1]">
        <Image src={feather} />
      </div>
      <div className="absolute top-0 right-0 w-[400px] mr-[180px] mt-[280px] z-[3]">
        <Image src={board} />
      </div>
      <div className="absolute top-0 right-0 w-[150px] mr-[430px] mt-[240px] z-[4]">
        <Image src={pinkdice} />
      </div>
      <div className="absolute top-0 right-0 w-[270px] mr-[500px] mt-[230px] z-[2] rotate-[-20deg] transform -scale-x-100">
        <Image src={pinksnake} />
      </div>
      <div className="absolute top-0 right-0 w-[110px] mr-[560px] mt-[210px] z-[4]">
        <Image src={marbleblue} />
      </div>
      <div className="absolute top-0 right-0 w-[300px] mr-[540px] mt-[-100px] z-[0] rotate-[-90deg]">
        <Image src={ladder} />
      </div>
      <div className="absolute top-0 right-0 w-[130px] mr-[330px] mt-[0px] z-[1]">
        <Image src={convetti} />
      </div>
      <div className="absolute top-0 right-0 w-[150px] mr-[130px] mt-[220px] z-[1] rotate-[20deg]">
        <Image src={convetti2} />
      </div>
      <div className="absolute top-0 right-0 w-[150px] mr-[380px] mt-[550px] z-[1] transform -scale-x-100">
        <Image src={convetti} />
      </div>
      <div className="absolute top-0 right-0 w-[130px] mr-[530px] mt-[500px] z-[1] rotate-[230deg]">
        <Image src={convetti2} />
      </div>
    </div>
  )
}

export default ComingSoonComponents
