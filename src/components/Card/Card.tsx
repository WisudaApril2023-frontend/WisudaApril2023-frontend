	import Image from 'next/image';
	import CardBox from '@src/assets/images/Card.svg';
	import Dice from '@src/assets/images/dadu-biru.svg';
	import Left from '@src/assets/images/button-arrow-left.svg';
	import Right from '@src/assets/images/button-arrow-right.svg';
	import CardButton from '@src/assets/images/card-button.svg';
	import { useState } from 'react';

	const cards = 
	[
		{
			header: "CONTENT 1",
			description: "This is the first card.",
			},
		{
			header: "CONTENT 2",
			description: "This is the second card.",
		},
		{
			header: "CONTENT 3",
			description: "This is the third card.",
		},
		{
			header: "CONTENT 4",
			description: "This is the fourth card.",
		},
		{
			header: "CONTENT 5",
			description: "This is the fifth card.",
		}
	];

	const Card = (): JSX.Element => 
	{
		const [currentCardIndex, setCurrentCardIndex] = useState(0);

		const handleNextClick = () => {
			if (currentCardIndex === cards.length - 1) {
				setCurrentCardIndex(0);
			} else {
				setCurrentCardIndex(currentCardIndex + 1);
			}
		};

		const handlePreviousClick = () => 
		{
			if (currentCardIndex === 0)
			{
				setCurrentCardIndex(cards.length - 1);
			} 
			else
			{
				setCurrentCardIndex(currentCardIndex - 1);
			}
		};

		const handleJumpToSlide = (index: number) => {
			setCurrentCardIndex(index);
		};

		const currentCard = cards[currentCardIndex];

		return (
			<div className="relative inline-block">
				<Image src={CardBox} />
				<div
					className="absolute top-0 left-0 p-4 flex flex-col justify-start items-start px-10 pt-5"
				>
					<h2 className="m-0 text-[40px] font-[Heavy-Heap] font-normal text-[#FFFFFF] leading-100 tracking-widest">
						{currentCard.header}
					</h2>
					<p className="m-0 mt-1 text-base font-[Market-Deco] font-normal text-[#FFF1D7] text-[16px] leading-140 tracking-wide text-justify">
						{currentCard.description}
					</p>
				</div>
				
				<div className="absolute bottom-20 right-20 w-[113px] rotate-[-60.3deg]">
					<Image src={Dice} />
				</div>

				<div className="absolute bottom-0 right-0 w-[167px]">
					<Image src={Dice} />
				</div>

				<div className="absoluteflex">
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
		);
	};

	export default Card;