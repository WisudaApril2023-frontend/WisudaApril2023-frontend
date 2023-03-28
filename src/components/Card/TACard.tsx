import Image from 'next/image';
import BlueButton from '../Button/BlueButton';
import bg from '@src/assets/images/Card.svg';
import pp from 'src/assets/images/ppCard.png';

interface destButton {
  destination: string;
}

const TACard = (props: destButton): JSX.Element => {
  const { destination } = props;

  return (
    <div className="ta-card w-[360px] h-[558px]">
      <div className="flex flex-col items-center justify-center w-[360px] h-[558px]" style={{ fontFamily: 'Heavy-Heap', color: '#FFE8C3' }}>
      <div className="bg-no-repeat bg-center text-center w-[360px] h-[558px]" style={{ backgroundImage: `url(${bg.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <h1 className="text-4xl font-normal tracking-widest mt-10">nama</h1>
        <h2 className="text-2xl  font-thin tracking-widest mb-10">nim - prodi</h2>
          <Image src={pp} alt="Image" className="rounded-full w-[180px] h-[180px]" />
        <h2 className="text-4xl font-normal leading-10 tracking-wider mb-4 tracking-0.1 mt-10">judul</h2>
        <div className="cardButton flex justify-center items-center mt-12">
          <BlueButton />
        </div>
      </div>
      </div>
    </div>
  );
};

export default TACard;

