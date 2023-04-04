import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import yb1Default from '@src/assets/images/yellowbutton1_default.svg'
import yb1Clicked from '@src/assets/images/yellowbutton1_clicked.svg'
import yb1hovered from '@src/assets/images/yellowbutton1_hovered.svg'

const YellowButton1 = (): JSX.Element => {
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const handleMouseEnter = (): void => {
    setIsHovered(true)
  }

  const handleMouseLeave = (): void => {
    setIsHovered(false)
  }

  const handleClick = (): void => {
    setIsClicked(true)
    new Promise<void>((resolve) => {
      setTimeout(() => {
        setIsClicked(false)
        router.push('/Event')
        resolve()
      }, 200)
    }).catch((error) => console.error(error))
  }

  let buttonImage = yb1Default
  if (isClicked) {
    buttonImage = yb1Clicked
  } else if (isHovered) {
    buttonImage = yb1hovered
  }

  return (
    <div
      onClick={ handleClick }
      onMouseEnter={ handleMouseEnter }
      onMouseLeave={ handleMouseLeave }
      style={{
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        userSelect: 'none'
      }}
    >
      <Image src={ buttonImage } alt="Yellow Button 1" width={200} height={60} />
      <div
        style={{
          position: 'absolute',
          width: '100px',
          height: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 500,
          fontFamily: 'Excalibur-Nouveau',
          fontStyle: 'normal',
          fontSize: '20px',
          lineHeight: '24px',
          letterSpacing: '0.1em',
          textTransform: 'capitalize',
          color: '#FFE8C4'
        }}
      >
        Back
      </div>
    </div>
  )
}

export default YellowButton1
