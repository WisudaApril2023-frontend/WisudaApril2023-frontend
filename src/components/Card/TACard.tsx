// import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'

import BlueButton from '../Button/BlueButton'
import bg from '@src/assets/images/Card.png'
import pp from '@src/assets/images/ppCard.png'

interface destButton {
  name: string
  nim: string
  prodi: string
  fakultas: string
  image?: string
}

const TACard = (props: destButton): JSX.Element => {
  const { name, nim, prodi, fakultas, image } = props

  const [isImage, setIsImage] = useState(image? image : pp.src)
  // if (image) {
  //   setIsImage(image)
  // }

  return (
    <div>
      <div className="flex flex-col items-center justify-center w-[306px] h-[502px]" style={{ fontFamily: 'Heavy-Heap', color: '#FFE8C3' }}>
        <div className="bg-no-repeat bg-center text-center w-[306px] h-[502px]" style={{ backgroundImage: `url(${bg.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', filter: 'drop-shadow(5px 10px 7px rgba(255,255,0, 0.25))' }}>
          <h1 className="text-3xl font-normal tracking-widest mt-5" style={{ filter: 'drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.25))' }}>{fakultas}</h1>
          <h2 className="text-2xl  font-thin tracking-widest mb-5" style={{ filter: 'drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.25))' }}>{prodi}</h2>
            <img src={isImage} alt="Image" className="rounded-full w-[180px] h-[180px]" style={{ margin: '0 auto', filter: 'drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.25))' }} />
          <h2 className="text-2xl font-normal leading-10 tracking-wider tracking-0.1 mt-3" style={{ filter: 'drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.25))' }} >{name}</h2>
          <h2 className="text-1xl font-normal leading-10 tracking-wider tracking-0.1 mt-[-10px]" style={{ filter: 'drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.25))' }} >{nim}</h2>
          <div className="cardButton flex justify-center items-center mt-10" style={{ filter: 'drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.25))' }}>
            <BlueButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TACard
