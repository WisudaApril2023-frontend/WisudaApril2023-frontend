import Image from 'next/image'
import kipas from '@src/assets/backgrounds/kipasmatahari.svg'

import TACard from '@src/components/Card/TACard'
import TAGate from '@src/assets/images/TAGate.svg'
import yellowSnake from '@src/assets/images/yellow-snake.svg'
import TALogo from '@src/assets/images/tafairlogo.svg'


import SwiperCore, {Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Autoplay, Navigation, Pagination])

const cards = [
  {
    name: 'Maulidya Nur Sabhitayarn ',
    nim: '10218053',
    prodi: 'TF',
    title: 'Card 1',
    image: TAGate.src
  },
  {
    name: 'Toni',
    nim: '13521001',
    prodi: 'Teknik Informatika',
    title: 'Card 2',
    image: ''
  },
  {
    name: 'Tonis',
    nim: '13521001',
    prodi: 'Teknik Informatika',
    title: 'Card 10',
    image: ''
  }
]

type Card = {
  nim: string
  name: string
  prodi: string
  title: string
  image: string
}

type GroupedCards = Card[][]

const groupedCards: GroupedCards = []
for (let i = 0 ; i < cards.length ; i += 9) {
  groupedCards.push(cards.slice(i, i + 9))
}

const TAFair = (): JSX.Element => {
  return (
    <div className='relative flex h-auto justify-center overflow-hidden'>
      <div className='xl:absolute'>
        <Image src={TAGate}/>       
      </div>
      <div className='absolute mx-[30px]'>
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
                    <TACard nim={card.nim} name={card.name} prodi={card.prodi} title={card.title} image={card.image} />
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