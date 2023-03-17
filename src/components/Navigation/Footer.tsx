import copyright_logo from '@src/assets/images/copyright.svg'
import instagram_logo from '@src/assets/images/instagram.svg'
import twitter_logo from '@src/assets/images/twitter.svg'
import youtube_logo from '@src/assets/images/youtube.svg'
import linkedin_logo from '@src/assets/images/linkedin.svg'
import tiktok_logo from '@src/assets/images/tiktok.svg'

const Copyright = (): JSX.Element => {
  return (
    <img src={copyright_logo.src} alt='Copyright' className='w-3 sm:w-4 lg:w-5 xl:w-6 mb-0.5 lg:-mb-0.5 xl:mb-0.5' />
  )
}

const TextFooter = (): JSX.Element => {
  return (
    <div className='absolute
                    top-3 text-xs tracking-wide
                    sm:top-4 sm:text-base sm:tracking-wider
                    md:top-3.5 md:text-lg
                    lg:top-5 lg:text-xl lg:tracking-widest
                    xl:top-6 xl:text-2xl xl:tracking-widest'
          style={{fontFamily: 'Excalibur-Nouveau', color: '#8E4B72'}}>
      © PARADE WISUDA APRIL ITB 2023
    </div>
  )
}

const InstagramButton = (): JSX.Element => {
  return (
    <a href="https://www.instagram.com/paradewisudaitb">
      <img src={instagram_logo.src} alt='Instagram' className='w-5 sm:w-8 lg:w-9 hover:scale-125 ease-in-out duration-200' />
    </a>
  )
}

const TwitterButton = (): JSX.Element => {
  return (
    <a href="https://twitter.com/paradewisudaitb">
      <img src={twitter_logo.src} alt='Twitter' className='w-5 sm:w-8 lg:w-9 hover:scale-125 ease-in-out duration-200 ' />
    </a>
  )
}

const YoutubeButton = (): JSX.Element => {
  return (
    <a href='https://www.youtube.com/@ParadeWisudaAprilITB-rt2ss'>
      <img src={youtube_logo.src} alt='Youtube' className='w-5 sm:w-8 lg:w-9 hover:scale-125 ease-in-out duration-200 ' />
    </a>
  )
}

const LinkedinButton = (): JSX.Element => {
  return (
    <a href='https://www.linkedin.com/company/parade-wisuda-itb'>
      <img src={linkedin_logo.src} alt='Linkedin' className='w-5 sm:w-8 lg:w-9 hover:scale-125 ease-in-out duration-200 ' />
    </a>
  )
}

const TiktokButton = (): JSX.Element => {
  return (
    <a href='https://www.tiktok.com/@paradewisudaitb'>
      <img src={tiktok_logo.src} alt='Tiktok' className='w-5 sm:w-8 lg:w-9 hover:scale-125 ease-in-out duration-200 ' />
    </a>
  )
}

const Footer = (): JSX.Element => {
  return (
    <nav>
      <div className="absolute bottom-0 bg-[#ECA829] w-full filter pl-0 pr-2.5 py-1 h-10 sm:h-14 lg:h-16 xl:h-20 items-center border-solid border-1 border-black flex justify-between">
        <div className='ml-2 xl:ml-5 pl-1'>
          <div className='ml-1 pt-0'><Copyright /></div>
          <div className='ml-2.5 lg:ml-4'><TextFooter /></div>
        </div>
        <div className='flex items-center mr-2 md:mr-4 xl:mr-7'>
          <div className='ml-2.5 sm:ml-5 lg:ml-7 xl:ml-9'><InstagramButton /></div>
          <div className='ml-2.5 sm:ml-5 lg:ml-7 xl:ml-9'><TwitterButton /></div>
          <div className='ml-2.5 sm:ml-5 lg:ml-7 xl:ml-9'><YoutubeButton /></div>
          <div className='ml-2.5 sm:ml-5 lg:ml-7 xl:ml-9'><LinkedinButton /></div>
          <div className='ml-2.5 sm:ml-5 lg:ml-7 xl:ml-9'><TiktokButton /></div>
        </div>
      </div>
    </nav>
  )
}

export default Footer
