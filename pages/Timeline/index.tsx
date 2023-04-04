import Navbar from '@src/components/Navigation/Navbar'
import Timeline1 from '@src/contexts/Timeline/Timeline1'

const Timeline = (): JSX.Element => {
  return (
    <div className='overflow-hidden'>
        <Navbar />
        <div className='h-[100px]'>
        </div>
        <Timeline1 />
    </div>
  )
}

export default Timeline
