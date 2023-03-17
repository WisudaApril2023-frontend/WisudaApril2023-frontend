import Image from 'next/image'
import logo from '@src/assets/images/logo.svg'

const Jumbotron = (): JSX.Element => {
  return (
    <div>
      <div className='flex flex-col items-center pt-[120px]'>
      <div className='relative'>
          <Image src={logo} width={500} height={350} style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}/>
        </div>
      </div>
      <div className="flex font-[Market-Deco] text-center text-white mt-[20px]
      xl:mx-[300px] lg:mx-[150px] md:mx-[50px] mx-[20px]
      md:text-[16px] text-[13px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <div className='h-[200px]'>
      </div>
    </div>
  )
}

export default Jumbotron
