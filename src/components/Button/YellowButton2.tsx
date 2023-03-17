import { useState } from 'react'
import Image from 'next/image'
import yb2Default from '@src/assets/images/yellowbutton2_default.svg'
import yb2Clicked from '@src/assets/images/yellowbutton2_clicked.svg'
import yb2hovered from '@src/assets/images/yellowbutton2_hovered.svg'

const YellowButton2 = (): JSX.Element => {
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

  let buttonImage = yb2Default
  if (isClicked) {
    buttonImage = yb2Clicked
  } else if (isHovered) {
    buttonImage = yb2hovered
  }

  return (
    <div
      onClick = { handleClick }
      onMouseEnter = { handleMouseEnter }
      onMouseLeave = { handleMouseLeave }
      style = {{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        userSelect: 'none'
      }}
    >
      <Image src={ buttonImage } alt="Yellow Button 2" width={200} height={60} />
      <div
        style = {{
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

export default YellowButton2
