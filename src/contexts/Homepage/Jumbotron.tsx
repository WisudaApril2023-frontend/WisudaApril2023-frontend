import Image from 'next/image'
import Image1 from '@src/assets/images/logo.svg'
import Image2 from '@src/assets/images/pita1.svg'
import confetti from '@src/assets/backgrounds/confetti.svg'

const Jumbotron = (): JSX.Element => {
  return (
    <div>
      <div className='flex flex-col items-center pt-[30px]'>
        <div className='absolute w-[500px]'>
          <Image src={Image1} />
        </div>
      </div>
      <div className="absolute top-0 font-[Market-Deco] text-center text-white mt-[420px]
      xl:mx-[300px] lg:mx-[150px] md:mx-[50px] mx-[20px]
      md:text-[16px] text-[13px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
  )
}

export default Jumbotron
