import Image from 'next/image'
import TACard from '@src/components/Card/TACard'
import TAGate from '@src/assets/images/TAGate.svg'
import yellowSnake from '@src/assets/images/yellow-snake.svg'
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
    <div className='relative flex justify-center'>
      <Image src={TAGate}/>
      <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
        <Swiper 
          spaceBetween={30} 
          slidesPerView={1} 
          navigation={false} 
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          >
          {groupedCards.map((cardsInGroup) => (
            <SwiperSlide key={cardsInGroup[0].nim}>
              <div className='grid grid-cols-3 gap-y-2 mx-[180px] h-full'>
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
    </div>
  )
}

export default TAFair