import Image from 'next/image'
import TLLogo from '@src/assets/images/timelinelogo.svg'
import timeline1 from '@src/assets/images/timeline1.svg'
import blueObjectLeft from '@src/assets/images/biru-kiri-bawah.svg'
import blueObjectRight from '@src/assets/images/biru-kanan-bawah.svg'

const Timeline = (): JSX.Element => {
  return (
    <div className="relative h-auto overflow-hidden">
      <div className='mx-[30px] mt-[50px] sm:mt-[100px] text-center'>
        <Image src={TLLogo} style={{ margin: '0 auto', filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}/>
      </div>
      <div className='relative mx-[30px] sm:mx-[50px] mt-[30px] sm:mt-[80px] mb-[300px] sm:mb-[500px] text-center'>
        <Image src={timeline1} style={{ margin: '0 auto' }} />
      </div>
      <div className="absolute left-0 bottom-0 w-1/2 mb-[10px]">
        <Image src={blueObjectLeft} />
      </div>
      <div className="absolute right-0 bottom-0 w-1/2 mb-[10px]">
        <Image src={blueObjectRight} />
      </div>
    </div>
  )
}

export default Timeline
