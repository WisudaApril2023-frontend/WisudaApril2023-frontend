// import Image from 'next/image'
import YellowButton2 from '@src/components/Button/YellowButton2'

const Contents = (): JSX.Element => {
  return (
    <div className='h-[500px]'>
      <div className='sm:flex overflow-hidden'>
        <div className='sm:w-1/3 sm:flex sm:justify-center'> 
          <YellowButton2 />
        </div>
        <div className='sm:w-1/3 sm:flex sm:justify-center'> 
          <YellowButton2 />
        </div>
        <div className='sm:w-1/3 sm:flex sm:justify-center'> 
          <YellowButton2 />
        </div>
      </div>
    </div>
  )
}

export default Contents
