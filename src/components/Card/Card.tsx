// import Image from 'next/image'
// import CardBox from '@src/assets/images/Card.svg'
// import Dice from '@src/assets/images/dadu-biru.svg'
// import Left from '@src/assets/images/button-arrow-left.svg'
// import Right from '@src/assets/images/button-arrow-right.svg'
// import CardButton from '@src/assets/images/card-button.svg'
// import { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Autoplay, Pagination } from 'swiper'

const cards =
[{
  header: '',
  description: 'Dalam menggapai sebuah perjalanan tidak akan selamanya bergerak mendapatkan sesuatu yang diinginkan. Akan ada waktunya untuk berhadapan dengan sesuatu yang tidak mudah, akan ada turun ataupun naik. Akan dihadapkan kebahagiaan, pun juga kesedihan. Selain itu, memutar memori dari sebuah hal yang pernah terjadi menjadi bagian dari sebuah perjalanan, untuk bisa meningkatkan rasa semangat, atau bahkan rasa motivasi dalam menggapai sebuah perjalanan tersebut untuk menggapai kemenangan. Namun, hal tersebut dapat dimaknai yaitu memutar memori dari sebuah perjalanan yang untuk menelisik sesuatu ke belakang dalam menggapai sebuah perjalanan yang baik kedepannya.'
},
{
  header: '',
  description: 'Tema boardgames disini membawa makna sebuah perjalanan seseorang yang berawal dari sebuah titik yang sama yaitu saat awal mulai masuk ke ITB. Berikutnya seseorang tersebut akan dihadapkan dengan realita kemahasiswaan bahwa kehidupan di perkuliahan tidak selamanya maju. Akan ada dadu yang menjadi sebuah penunjuk untuk membawa seseorang tersebut sampai nantinya mencapai titik kemenangannya. Sepanjang itu pula, tidak hanya jalan naik dalam mencapai titik tertingginya. Namun, akan ada saatnya dihadapkan dengan tantangan yang membuat turun, capek, dan tak  salah lagi untuk melihat kebelakang. Hal tersebut bukan berarti membuat sebuah perjuangan berhenti, melainkan terus berlanjut dimana nilai progresif terus bertumbuh seiring jalannya perjuangan.'
},
{
  header: '',
  description: 'Hingga akhirnya seseorang tersebut mencapai sebuah kemenangan yaitu menjadi seorang wisudawan yang mengakhiri purna studinya di ITB.  Namun, hal tersebut bukan merupakan akhir dari sebuah perjuangan, melainkan akan dihadapkan dengan tantangan-tantangan yang baru didepan. Pada permainananya setiap individu dapat menjadi wadah introspeksi dari memaknai naik turunnya sebuah perjalanan dalam menggapai sebuah kemenangan dan impian. Perjalanan yang panjang tersebut akan mencapai sebuah puncak besar apresiasi yaitu menjadi seorang wisudawan.'
}]

const Card = (): JSX.Element => {
  // const [currentCardIndex, setCurrentCardIndex] = useState(0)

  // const handleNextClick = () => {
  //   if (currentCardIndex === cards.length - 1) {
  //     setCurrentCardIndex(0)
  //   } else {
  //     setCurrentCardIndex(currentCardIndex + 1)
  //   }
  // }

  // const handlePreviousClick = () =>
  // {
  //   if (currentCardIndex === 0)
  //   {
  //     setCurrentCardIndex(cards.length - 1)
  //   }
  //   else
  //   {
  //     setCurrentCardIndex(currentCardIndex - 1)
  //   }
  // }

  // const handleJumpToSlide = (index: number) => {
  //   setCurrentCardIndex(index)
  // }

  // const currentCard = cards[currentCardIndex]

  return (
    <div>
      <Swiper
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{
        delay: 4000,
        disableOnInteraction: true
      }}
      pagination={{
        clickable: true
      }}
      modules={[Autoplay, Pagination]}>

      {cards.map((currentCard, idx) => {
        return (
        <SwiperSlide key={idx}>
          <div className='relative rounded-2xl bg-[#ECA829] xl:mx-[250px] lg:mx-[200px] md:mx-[150px] sm:mx-[100px] mx-[50px] overflow-hidden'>
            <div
              className='p-4 flex flex-col justify-start items-start sm:px-14 px-7 pt-5 z-1'
            >
              <h2 className='m-0 sm:text-[40px] text-[30px] font-[Heavy-Heap] font-normal text-[#FFFFFF] leading-100 tracking-widest'>
                {currentCard.header}
              </h2>
              <p className='m-0 mt-6 mb-6 text-base font-[Market-Deco] font-normal text-[#FFF1D7] sm:text-[16px] text-[12px] leading-140 tracking-wide text-justify'>
                {currentCard.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
        )
      })}
      </Swiper>
    </div>
  )
}

export default Card
