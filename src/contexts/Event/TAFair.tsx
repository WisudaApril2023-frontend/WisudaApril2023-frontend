import Image from 'next/image'
import kipas from '@src/assets/backgrounds/kipasmatahari.svg'

import TACard from '@src/components/Card/TACard'
import TAGate from '@src/assets/images/TAGate.svg'
import yellowSnake from '@src/assets/images/yellow-snake.svg'
import blueSnake from '@src/assets/images/blue-snake.svg'
import gajah from '@src/assets/images/gajah.svg'
import queen from '@src/assets/images/queen.svg'
import TALogo from '@src/assets/images/tafairlogo.svg'


import SwiperCore, {Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Autoplay, Navigation, Pagination])

const cards = [
  {
    name: 'Maulidya Nur Sabhitayarn',
    nim: '10218053',
    prodi: 'Teknik Fisika',
    fakultas: 'FTI',
    image: 'https://yt3.googleusercontent.com/DNfVMdufPYu-o0Bf_AVC_wuNHGE-Yuf7YczMyM1dVXmM6hUqMx13xVwwuJZFHxX_Nl-5BtwR=s900-c-k-c0x00ffffff-no-rj',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis necessitatibus, eius quibusdam molestias nisi ab libero unde maioresipsam porro consequuntur ex nobis asperiores qui suscipit earum ad',
    image2: 'https://yt3.googleusercontent.com/DNfVMdufPYu-o0Bf_AVC_wuNHGE-Yuf7YczMyM1dVXmM6hUqMx13xVwwuJZFHxX_Nl-5BtwR=s900-c-k-c0x00ffffff-no-rj'
  },
  {
    name: 'Pocut Nurulya Zulisa',
    nim: '15418214',
    prodi: 'Perencanaan Wilayah dan Kota',
    fakultas: 'SAPPK',
    image: TAGate.src,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis necessitatibus, eius quibusdam molestias nisi ab libero unde maioresipsam porro consequuntur ex nobis asperiores qui suscipit earum ad'
  },
  {
    name: 'Fadilla Aziz Pustakaningrum',
    nim: '20320015',
    prodi: 'Astronomi',
    fakultas: 'FMIPA',
    image: '',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis necessitatibus, eius quibusdam molestias nisi ab libero unde maioresipsam porro consequuntur ex nobis asperiores qui suscipit earum ad'
  },
  {
    name: 'Balya Elfata',
    nim: '10217001',
    prodi: 'Teknik Fisika',
    fakultas: 'FTI',
    image: '',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis necessitatibus, eius quibusdam molestias nisi ab libero unde maioresipsam porro consequuntur ex nobis asperiores qui suscipit earum ad'
  },
  {
    name: 'Shafira Nur Azizah Mulyana',
    nim: '17018025',
    prodi: 'Seni Rupa',
    fakultas: 'FSRD',
    image: '',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis necessitatibus, eius quibusdam molestias nisi ab libero unde maioresipsam porro consequuntur ex nobis asperiores qui suscipit earum ad'
  },
  // {
  //   name: 'Ivan Bertrand Reynaldi Widagdo',
  //   nim: '12318010',
  //   prodi: 'Teknik Geofisika',
  //   fakultas: 'FTTM',
  //   image: ''
  // },
  // {
  //   name: 'Annisa Salsabiila',
  //   nim: '15817014',
  //   prodi: 'Teknik dan Pengelolaan Sumber Daya Air',
  //   fakultas: 'FTSL',
  //   image: ''
  // },
  // {
  //   name: 'Suci Nilasari Azis',
  //   nim: '11618034',
  //   prodi: 'Farmasi Klinik dan Komunitas',
  //   fakultas: 'SF',
  //   image: ''
  // },
  // {
  //   name: 'Fahmi Faisal Habib Boedhi Wiarso',
  //   nim: '13618115',
  //   prodi: 'Teknik Dirgantara',
  //   fakultas: 'FTMD',
  //   image: ''
  // },
  // {
  //   name: 'Samuel Julian Harjanto',
  //   nim: '13118131',
  //   prodi: 'Teknik Mesin',
  //   fakultas: 'FTMD',
  //   image: ''
  // },
  // {
  //   name: 'Ahmad Toifur',
  //   nim: '12318031',
  //   prodi: 'Teknik Geofisika',
  //   fakultas: 'FTTM',
  //   image: ''
  // },
  // {
  //   name: 'Radisya Daffa Rihaatul Aisy',
  //   nim: '10518099',
  //   prodi: 'Teknik Kimia',
  //   fakultas: 'FTI',
  //   image: ''
  // },
  // {
  //   name: 'Faiq Ahmad Ramadhan',
  //   nim: '13718048',
  //   prodi: 'Teknik Material',
  //   fakultas: 'FTMD',
  //   image: ''
  // },
  // {
  //   name: 'Hamidah Azzahra',
  //   nim: '17018014',
  //   prodi: 'Seni Rupa',
  //   fakultas: 'FSRD',
  //   image: ''
  // },
  // {
  //   name: 'Fatiha Agyal Shahwiya',
  //   nim: '10318003',
  //   prodi: 'Astronomi',
  //   fakultas: 'FMIPA',
  //   image: ''
  // },
  // {
  //   name: 'Mangambar Arumsari',
  //   nim: '17018009',
  //   prodi: 'Seni rupa',
  //   fakultas: 'FSRD',
  //   image: ''
  // },
  // {
  //   name: 'Advan Dwi Prayuda',
  //   nim: '15318061',
  //   prodi: 'Teknik Lingkungan',
  //   fakultas: 'FTSL',
  //   image: ''
  // },
  // {
  //   name: 'Aldy Nurhajri Sidi',
  //   nim: '15018020',
  //   prodi: 'Teknik Sipil',
  //   fakultas: 'FTSL',
  //   image: ''
  // },
  // {
  //   name: 'Muhammad Abdurrahman Jayadita',
  //   nim: '12318063',
  //   prodi: 'Teknik Geofisika',
  //   fakultas: 'FTTM',
  //   image: ''
  // },
  // {
  //   name: 'Muhammad Sultoni',
  //   nim: '15018046',
  //   prodi: 'Teknik Sipil',
  //   fakultas: 'FTSL',
  //   image: ''
  // }
]

type Card = {
  nim: string
  name: string
  prodi: string
  fakultas: string
  image: string
  image2?: string
}

type GroupedCards = Card[][]

const groupedCards: GroupedCards = []
for (let i = 0 ; i < cards.length ; i += 9) {
  groupedCards.push(cards.slice(i, i + 9))
}

const TAFair = (): JSX.Element => {
  return (
    <div className='relative flex h-auto justify-center overflow-hidden'>
      <div className='absolute w-[100px] mt-[600px] top-0 right-0 rotate-[-19.71deg]'>
        <Image src={gajah} style={{filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'}}/>
      </div>
      <div className='absolute mt-[800px] top-0 left-0 rotate-[1.44deg]'>
        <Image src={queen} style={{filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'}}/>
      </div>
      <div className='xl:absolute left-20 z-0'>
        <Image src={yellowSnake}/>
      </div>
      <div className='xl:absolute top-5'>
        <Image src={TAGate}/>       
      </div>
      <div className='xl:absolute right-20 z-0'>
        <Image src={blueSnake}/>
      </div>
      <div className='absolute mx-[30px] top-5'>
        <Image src={TALogo} style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}/>
      </div>
      <div className='relative top-0 mt-[200px] w-full h-full flex justify-center items-center mb-[300px] md:mb-[600px] lg:mb-[700px]'>
        <Swiper 
          spaceBetween={30} 
          slidesPerView={1} 
          navigation={false} 
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false
          }}
          >
          {groupedCards.map((cardsInGroup) => (
            <SwiperSlide key={cardsInGroup[0].nim}>
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 xl:mx-[210px] h-full'>
                {cardsInGroup.map((card) => (
                  <div
                    key={card.nim}
                    className='flex items-center justify-center w-full h-full'
                    >
                    <TACard nim={card.nim} name={card.name} prodi={card.prodi} fakultas={card.fakultas} image={card.image} image2={card.image2}/>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="absolute bottom-0">
          <Image src={kipas}/>
      </div>
    </div>
  )
}

export default TAFair