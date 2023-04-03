// import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'

import BlueButton from '../Button/BlueButton'
import bg from '@src/assets/images/Card.png'
import pp from '@src/assets/images/ppCard.png'

interface destButton {
  name: string
  nim: string
  prodi: string
  title: string
  image?: string
}

const TACard = (props: destButton): JSX.Element => {
  const { name, nim, prodi, title, image } = props

  const [isImage, setIsImage] = useState(image? image : pp.src)
  // if (image) {
  //   setIsImage(image)
  // }

  return (
    <div>
      <div className="flex flex-col items-center justify-center w-[306px] h-[502px]" style={{ fontFamily: 'Heavy-Heap', color: '#FFE8C3' }}>
        <div className="bg-no-repeat bg-center text-center w-[306px] h-[502px]" style={{ backgroundImage: `url(${bg.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', filter: 'drop-shadow(5px 10px 7px rgba(255,255,0, 0.25))' }}>
          <h1 className="text-4xl font-normal tracking-widest mt-5">{name}</h1>
          <h2 className="text-2xl  font-thin tracking-widest mb-8">{nim} - {prodi}</h2>
            <img src={isImage} alt="Image" className="rounded-full w-[180px] h-[180px]" style={{ margin: '0 auto' }} />
          <h2 className="text-4xl font-normal leading-10 tracking-wider mb-4 tracking-0.1 mt-5">{title}</h2>
          <div className="cardButton flex justify-center items-center mt-12">
            <BlueButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TACard
