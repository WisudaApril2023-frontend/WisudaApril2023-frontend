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
  header: 'CONTENT 1',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
},
{
  header: 'CONTENT 2',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
},
{
	header: 'CONTENT 3',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
},
{
	header: 'CONTENT 4',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
},
{
	header: 'CONTENT 5',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}]

const Card = (): JSX.Element => 
{
	// const [currentCardIndex, setCurrentCardIndex] = useState(0)

	// const handleNextClick = () => {
	// 	if (currentCardIndex === cards.length - 1) {
	// 		setCurrentCardIndex(0)
	// 	} else {
	// 		setCurrentCardIndex(currentCardIndex + 1)
	// 	}
	// }

	// const handlePreviousClick = () => 
	// {
	// 	if (currentCardIndex === 0)
	// 	{
	// 		setCurrentCardIndex(cards.length - 1)
	// 	} 
	// 	else
	// 	{
	// 		setCurrentCardIndex(currentCardIndex - 1)
	// 	}
	// }

	// const handleJumpToSlide = (index: number) => {
	// 	setCurrentCardIndex(index)
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
					<div className='relative rounded-xl bg-[#ECA829] xl:mx-[250px] lg:mx-[200px] md:mx-[150px] sm:mx-[100px] mx-[50px] overflow-hidden'
						style={{ boxShadow: '0px 10px 15px rgba(255, 194, 97, 0.25)'}}
					>
						<div
							className='p-4 flex flex-col justify-start items-start sm:px-14 px-7 pt-5 z-1'
						>
							<h2 className='m-0 sm:text-[40px] text-[30px] font-[Heavy-Heap] font-normal text-[#FFFFFF] leading-100 tracking-widest'>
								{currentCard.header}
							</h2>
							<p className='m-0 mt-1 mb-6 text-base font-[Market-Deco] font-normal text-[#FFF1D7] sm:text-[16px] text-[12px] leading-140 tracking-wide text-justify'>
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
