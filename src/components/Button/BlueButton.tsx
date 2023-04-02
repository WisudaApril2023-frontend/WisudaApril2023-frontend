import { useState } from 'react'
import Image from 'next/image'
import bbDefault from '@src/assets/images/bluebutton_default.svg'
import bbClicked from '@src/assets/images/bluebutton_clicked.svg'
import bbHovered from '@src/assets/images/bluebutton_hovered.svg'

const BlueButton = (): JSX.Element => {
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

  let buttonImage = bbDefault
  if (isClicked) {
    buttonImage = bbClicked
  } else if (isHovered) {
    buttonImage = bbHovered
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
      <Image src={ buttonImage } alt="Blue Button" width={200} height={60} />
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
        view more
      </div>
    </div>
  )
}

export default BlueButton
