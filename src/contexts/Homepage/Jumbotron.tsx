import Image from 'next/image'
import Image1 from '@src/assets/images/logo.svg'
import Image2 from '@src/assets/images/pita.svg'

const Jumbotron = (): JSX.Element => {
  const handleExplore = () => {
    if (window !== undefined) {
      window.scrollTo({
        top: window.innerHeight * 1.05,
        behavior: 'smooth'
      })
    }
  }


  return (
    <div className="bg-purple">
       
      <div className="relative m-3 flex flex-wrap mx-auto justify-center">
      
          <div className='items-center justify-center'>
              <Image src={Image1} />
          <p 
          className="mb-10 mx-auto text-base md:text-base text-center text-white"
          style={{
          width: '953px',
          height: '145px',
          left: '244px',
          top: '674px',  
          fontFamily: 'Market Deco',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '16px' }}
          >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias adipisci architecto. Odit totam quis fugiat unde eos itaque expedita natus nemo qui eius eveniet, optio rerum quisquam, a nisi!
          </p>
          </div>     
      </div>
    </div>
  )
}

export default Jumbotron
