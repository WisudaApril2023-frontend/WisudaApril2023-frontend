import Image from 'next/image'
// import CardBox from '@src/assets/images/Card.svg'
import Dice from '@src/assets/images/dadu-biru.svg'
import Left from '@src/assets/images/button-arrow-left.svg'
import Right from '@src/assets/images/button-arrow-right.svg'
import CardButton from '@src/assets/images/card-button.svg'
import { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Autoplay, Pagination } from 'swiper'


const cards = 
[
	{
		header: "CONTENT 1",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		},
	{
		header: "CONTENT 2",
		description: "This is the second card."
	},
	{
		header: "CONTENT 3",
		description: "This is the third card."
	},
	{
		header: "CONTENT 4",
		description: "This is the fourth card."
	},
	{
		header: "CONTENT 5",
		description: "This is the fifth card."
	}
]

const Card = (): JSX.Element => 
{
	const [currentCardIndex, setCurrentCardIndex] = useState(0)

	const handleNextClick = () => {
		if (currentCardIndex === cards.length - 1) {
			setCurrentCardIndex(0)
		} else {
			setCurrentCardIndex(currentCardIndex + 1)
		}
	}

	const handlePreviousClick = () => 
	{
		if (currentCardIndex === 0)
		{
			setCurrentCardIndex(cards.length - 1)
		} 
		else
		{
			setCurrentCardIndex(currentCardIndex - 1)
		}
	}

	const handleJumpToSlide = (index: number) => {
		setCurrentCardIndex(index)
	}
	
	const currentCard = cards[currentCardIndex]


	return (
		<div>
			<Swiper
			spaceBetween={30}
			slidesPerView={1}
			autoplay={{
			  delay: 4000,
			  disableOnInteraction: false
			}}
			pagination={{
				clickable: true
			  }}
			  modules={[Autoplay, Pagination]}>
			{cards.map((currentCard, idx) => {
			  return (
				<SwiperSlide key={idx}>
					<div className="relative rounded-xl bg-[#ECA829] xl:mx-[250px] lg:mx-[200px] md:mx-[150px] sm:mx-[100px] mx-[50px] overflow-hidden"
						style={{ boxShadow: '0px 10px 15px rgba(255, 194, 97, 0.25)' }}
					>
						{/* <div className="absolute w-[113px] bottom-5 right-10 z-10 rotate-[-60.3deg]">
							<Image src={Dice} />
						</div> */}
						<div
							className="p-4 flex flex-col justify-start items-start px-14 pt-5 z-1"
						>
							<h2 className="m-0 text-[40px] font-[Heavy-Heap] font-normal text-[#FFFFFF] leading-100 tracking-widest">
								{currentCard.header}
							</h2>
							<p className="m-0 mt-1 mb-5 text-base font-[Market-Deco] font-normal text-[#FFF1D7] text-[16px] leading-140 tracking-wide text-justify">
								{currentCard.description}
							</p>
						</div>
					</div>
				</SwiperSlide>
			  )
			})}
		  </Swiper>
			<div className="absolute mt-[50px] justify-center w-full">
				<div className="flex justify-center">
					<button onClick={handlePreviousClick}>
						<Image src={Left} />
					</button>
					<div className="flex px-5">
						{cards.map((_, index) => (
							<div className="relative px-5">
								<button key={index} onClick={() => handleJumpToSlide(index)}>
									<Image src={CardButton} />
									<span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#FFF1D7] font-[Excalibur-Nouveau] text-[20px]">
										{index + 1}
									</span>
								</button>
							</div>
						))}
					</div>
					<button onClick={handleNextClick}>
						<Image src={Right} />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Card
