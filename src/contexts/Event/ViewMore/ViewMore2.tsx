import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'

import YellowButton1 from '@src/components/Button/YellowButton1'
import birukananbawah from '@src/assets/images/biru-kanan-bawah.svg'
import Birukiribawah from '@src/assets/images/biru-kiri-bawah.svg'
import ularkuning from '@src/assets/images/ular-kuning.svg'



const ViewMore2 = (): JSX.Element => {

  const router = useRouter()
  
  type Data = {
    [key: number]: {
      title: string
      nim: string
      prodi: string
      desc: string
      image?: string
    }
  }
  
  const data: Data = {
    10218053 : {
      title: '',
      nim: '10218053',
      prodi: 'Teknik Fisika',
      image: 'https://yt3.googleusercontent.com/DNfVMdufPYu-o0Bf_AVC_wuNHGE-Yuf7YczMyM1dVXmM6hUqMx13xVwwuJZFHxX_Nl-5BtwR=s900-c-k-c0x00ffffff-no-rj',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis necessitatibus, eius quibusdam molestias nisi ab libero unde maioresipsam porro consequuntur ex nobis asperiores qui suscipit earum ad',
    },
    15418214 :{
      title: '',
      nim: '15418214',
      prodi: 'Perencanaan Wilayah dan Kota',
      image: '',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis necessitatibus, eius quibusdam molestias nisi ab libero unde maioresipsam porro consequuntur ex nobis asperiores qui suscipit earum ad'
    },
    20320015 :{
      title: '',
      nim: '20320015',
      prodi: 'Astronomi',
      image: '',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis necessitatibus, eius quibusdam molestias nisi ab libero unde maioresipsam porro consequuntur ex nobis asperiores qui suscipit earum ad'
    },
    10217001 :{
      title: '',
      nim: '10217001',
      prodi: 'Teknik Fisika',
      image: '',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis necessitatibus, eius quibusdam molestias nisi ab libero unde maioresipsam porro consequuntur ex nobis asperiores qui suscipit earum ad'
    },
    17018025 :{
      title: '',
      nim: '17018025',
      prodi: 'Seni Rupa',
      image: '',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis necessitatibus, eius quibusdam molestias nisi ab libero unde maioresipsam porro consequuntur ex nobis asperiores qui suscipit earum ad'
    },
  }
  const id = router.query.id as string
  const idNumber = parseInt(id as string)
  const selectedData = data[idNumber]

  const [isImgHidden] = useState(selectedData?.image == '' ? 'hidden' : '')
  
  return (
    <div className="relative h-auto overflow-hidden">
      <div className="sm:ml-16 mt-10 ml-[20px]">
        <YellowButton1 />
      </div>
      <div className="sm:ml-60 mt-7 w-8 h-5 ml-[200px]">
        <Image src={ularkuning} alt="image" />
      </div>
      <div className="font-[Excalibur-Nouveau] text-center text-white text-5xl mt-20 mb-1 tracking-widest" style={{ filter: 'drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.25))' }}>
        {selectedData?.title}
      </div>

      <div className="font-[Excalibur-Nouveau] text-center text-white text-2xl tracking-widest mb-[300px] sm:mb-[500px]" style={{ filter: 'drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.25))' }}>
        oleh {selectedData?.nim} - {selectedData?.prodi}
        <div className='h-[50px]'></div>
        <div className={`${isImgHidden} mx-[50px]`}>
          <img src={selectedData?.image} style={{ margin: '0 auto', filter: 'drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.25))' }}/>
        </div>
        <div
          className="flex font-[Market-Deco] text-white mt-20
            xl:mx-[300px] lg:mx-[150px] md:mx-[50px] mx-[20px] xl:text-base lg:text-sm md:text-xs
           text-base overflow-y-auto text-justify p-5" style={{ filter: 'drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.25))' }}>
          {selectedData?.desc}
        </div>
      </div>
      <div className=" absolute left-0 bottom-0 w-1/2 mb-[10px]">
        <Image src={Birukiribawah} />
      </div>
      <div className="absolute right-0 bottom-0 w-1/2 mb-[10px]">
        <Image src={birukananbawah} />
      </div>
    </div>
  )
}

export default ViewMore2
