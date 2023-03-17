import { useState } from 'react'
import Image from 'next/image'
import rb1Default from '@src/assets/images/redbutton1_default.svg'
import rb1Clicked from '@src/assets/images/redbutton1_clicked.svg'
import rb1hovered from '@src/assets/images/redbutton1_hovered.svg'

const RedButton1 = (): JSX.Element => {
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

  let buttonImage = rb1Default
  if (isClicked) {
    buttonImage = rb1Clicked
  } else if (isHovered) {
    buttonImage = rb1hovered
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
      <Image src={ buttonImage } alt="Red Button 1" width={200} height={60} />
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

export default RedButton1
