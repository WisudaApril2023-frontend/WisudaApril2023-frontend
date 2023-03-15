import Image from 'next/image'
import Link from 'next/link'
import logoWispril from '@src/assets/images/logo.png'
import RedButton1 from '../Button/RedButton1'

const MENU_LIST = [
  { text: 'ABOUT US', href: '/' },
  { text: 'TIMELINE', href: '/' },
  { text: 'EVENT', href: '/' },
  { text: 'LOGIN', href: '/', border: true }
]

const Wispril = (): JSX.Element => {
  return (
    <a href='/'>
    <div style={{ position: 'absolute',
            width: '300px',
            height: '38px',
            left: '118px',
            top: '29px',
            fontFamily: 'Excalibur-Nouveau',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '32px',
            lineHeight: '38px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#8C4975',
            textShadow: '2.5px 1.5px 0 #FFF1D7',
            whiteSpace: 'nowrap' }}>
            WISUDA APRIL 2023
    </div>
    </a>
  )
}

const About = (): JSX.Element => {
  return (
    <a href='/'>
    <div style={{ marginLeft: '20px',
            fontFamily: 'Excalibur-Nouveau',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '32px',
            lineHeight: '38px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#8C4975',
            textShadow: '2.5px 1.5px 0 #FFF1D7',
            whiteSpace: 'nowrap' }}>
            ABOUT US
    </div>
    </a>
  )
}

const Timeline = (): JSX.Element => {
  return (
    <a href='/'>
    <div style={{ marginLeft: '20px',
            fontFamily: 'Excalibur-Nouveau',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '32px',
            lineHeight: '38px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#8C4975',
            textShadow: '2.5px 1.5px 0 #FFF1D7',
            whiteSpace: 'nowrap' }}>
            TIMELINE
    </div>
    </a>
  )
}

const Event = (): JSX.Element => {
  return (
    <a href='/'>
    <div style={{ marginLeft: '20px',
            fontFamily: 'Excalibur-Nouveau',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '32px',
            lineHeight: '38px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#8C4975',
            textShadow: '2.5px 1.5px 0 #FFF1D7',
            whiteSpace: 'nowrap' }}>
            EVENT
    </div>
    </a>
  )
}

const Login = (): JSX.Element => {
  return (
    <a href='/'>
      <RedButton1></RedButton1>
    </a>
  )
}


const Navbar = (): JSX.Element => {
  return (
      <nav className="fixed flex top-0 w-full justify-center z-50">
        <div className="bg-[#ECA829] w-full filter pl-2 pr-8 py-1 h-20 lg:h-24 items-center border-solid border-1 border-black flex justify-between">
          <div className="w-3/12 flex items-center flex-grow">
            <a href='/'>
              <Image src={logoWispril} width={110} height={80} alt="Logo Wispril"/>
            </a>
            <div className='ml-4'><Wispril /></div>
          </div>
          <div className='flex items-center'>
            <div className='ml-8'><About /></div>
            <div className='ml-8'><Timeline /></div>
            <div className='ml-8'><Event /></div>
            
            <div className='ml-8'><Login /></div>
          </div>                     
        </div>
        
        
      </nav>
  )
}

export default Navbar