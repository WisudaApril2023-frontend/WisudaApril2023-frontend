import { useState } from 'react'
import Image from 'next/image'
import yb3Default from '@src/assets/images/yellowbutton3_default.svg'
import yb3Clicked from '@src/assets/images/yellowbutton3_clicked.svg'
import yb3Hovered from '@src/assets/images/yellowbutton3_hovered.svg'

const YellowButton3 = (): JSX.Element => {
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
    setTimeout(() => {
      setIsClicked(false)
    }, 200)
  }

  let buttonImage = yb3Default
  if (isClicked) {
    buttonImage = yb3Clicked
  } else if (isHovered) {
    buttonImage = yb3Hovered
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
      <Image src={ buttonImage } alt="Yellow Button 3" width={200} height={60} />
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
        Button
      </div>
    </div>
  )
}

export default YellowButton3
