import Image from 'next/image'
import logo from '@src/assets/images/logo.svg'

const Jumbotron = (): JSX.Element => {
  return (
    <div className='h-screen flex flex-col justify-center mt-8'>
      <div className='flex flex-col items-center'>
        <div className='relative'>
          <Image src={logo} width={500} height={350} style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}/>
        </div>
      </div>
      <div className="flex font-[Market-Deco] text-center text-white mt-[20px]
      xl:mx-[300px] lg:mx-[150px] md:mx-[50px] mx-[20px]
      md:text-[16px] text-[13px]">
        Perayaan Wisuda April ITB 2023 sebagai wadah apresiasi terbuka untuk seluruh wisudawan, massa kampus dan masyarakat. Memiliki tujuan untuk menciptakan sebuah acara yang dapat meningkatkan rasa kepemilikan adan suasana wisuda.  Perayaan Wisuda April ITB 2023 mengangkat tema,
      </div>
      <div className="font-[Market-Deco] text-center text-white mt-[20px] font-extrabold
      xl:mx-[300px] lg:mx-[150px] md:mx-[50px] mx-[20px]
      md:text-[20px] text-[15px]">
        &quot;Roll the Memory Attain the Journey&quot;
      </div>
    </div>
  )
}

export default Jumbotron
