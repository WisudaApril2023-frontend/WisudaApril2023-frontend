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
    nim: 1,
    title: 'Card 1',
  },
  {
    nim: 2,
    title: 'Card 2',
  },
  {
    nim: 3,
    title: 'Card 3',
  },
  {
    nim: 4,
    title: 'Card 4',
  },
  {
    nim: 5,
    title: 'Card 5',
  },
  {
    nim: 6,
    title: 'Card 6',
  },
  {
    nim: 7,
    title: 'Card 7',
  },
  {
    nim: 8,
    title: 'Card 8',
  },
  {
    nim: 9,
    title: 'Card 9',
  },
  {
    nim: 10,
    title: 'Card 10',
  },
  {
    nim: 11,
    title: 'Card 11',
  },
  {
    nim: 12,
    title: 'Card 12',
  },
  {
    nim: 13,
    title: 'Card 13',
  },
  {
    nim: 14,
    title: 'Card 14',
  },
  {
    nim: 15,
    title: 'Card 15',
  },
  {
    nim: 16,
    title: 'Card 16',
  },
  {
    nim: 17,
    title: 'Card 17',
  },
  {
    nim: 18,
    title: 'Card 18',
  },
  {
    nim: 19,
    title: 'Card 19',
  },
  {
    nim: 20,
    title: 'Card 20',
  },
]

type Card = {
  nim: number
  title: string
}

type GroupedCards = Card[][]

const groupedCards: GroupedCards = []
for (let i = 0 ; i < cards.length ; i += 9) {
  groupedCards.push(cards.slice(i, i + 9))
}

const TAFair = (): JSX.Element => {
  return (
    <div className='relative flex h-auto justify-center overflow-hidden'>
      <div className='absolute w-[150px] h-[323px] top-20 right-0 rotate-[-19.71deg]'>
        <Image src={gajah} style={{filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'}}/>
      </div>
      <div className='absolute top-20 left-0 rotate-[1.44deg]'>
        <Image src={queen} style={{filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'}}/>
      </div>
      <div className='absolute left-20 z-0'>
        <Image src={yellowSnake}/>
      </div>
      <div className='xl:absolute top-5'>
        <Image src={TAGate}/>       
      </div>
      <div className='absolute right-20 z-0'>
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
                    <TACard title={card.title} destination={card.nim.toString()} />
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