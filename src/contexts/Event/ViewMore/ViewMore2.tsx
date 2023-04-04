import Image from 'next/image';

import YellowButton1 from '@src/components/Button/YellowButton1';
import birukananbawah from '@src/assets/images/biru-kanan-bawah.svg';
import Birukiribawah from '@src/assets/images/biru-kiri-bawah.svg';
import ularkuning from '@src/assets/images/ular-kuning.svg';

const ViewMore2 = (): JSX.Element => {
  return (
    <div className="relative h-auto overflow-hidden">
      <div className="sm:ml-16 mt-10 ml-[20px]">
        <YellowButton1 />
      </div>
      <div className="sm:ml-60 mt-7 w-8 h-5 ml-[200px]">
        <Image src={ularkuning} alt="image" />
      </div>
      <div className="font-[Excalibur-Nouveau] text-center text-white text-5xl mt-20 mb-1 tracking-widest" style={{ filter: 'drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.25))' }}>
        JUDUL
      </div>

      <div className="font-[Excalibur-Nouveau] text-center text-white text-2xl tracking-widest mb-[300px] sm:mb-[500px]" style={{ filter: 'drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.25))' }}>
        oleh nim - nama prodi
        <div className='h-[50px]'></div>
        <div className='mx-[50px]'>
          <img src='https://i.kym-cdn.com/entries/icons/mobile/000/031/003/cover3.jpg' style={{ margin: '0 auto', filter: 'drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.25))' }}/>
        </div>
        <div
          className="flex font-[Market-Deco] text-white mt-20
            xl:mx-[300px] lg:mx-[150px] md:mx-[50px] mx-[20px] xl:text-base lg:text-sm md:text-xs
           text-base overflow-y-auto text-justify p-5" style={{ filter: 'drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.25))' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          necessitatibus, eius quibusdam molestias nisi ab libero unde maiores
          ipsam porro consequuntur ex nobis asperiores qui suscipit earum ad
          ducimus, exercitationem labore est dolorem delectus voluptatum
          laudantium ipsa. Molestias, eum. Sapiente accusamus accusantium
          expedita aspernatur praesentium dolores tempora, deserunt magnam,
          rerum, tenetur quidem distinctio. Labore excepturi quis eligendi
          aspernatur, laborum assumenda facere reprehenderit doloremque, animi
          libero neque corrupti, tempora velit amet. Laborum vero qui quas earum
          culpa autem odio dignissimos explicabo optio, veritatis molestias
          facilis, eaque quam, blanditiis ratione? Dolorem cumque vero magnam
          soluta voluptates error distinctio ducimus. Id temporibus fuga quas
          exercitationem ipsam minima laudantium voluptate maiores doloribus
          ducimus eveniet, velit perferendis natus reprehenderit adipisci
          itaque! Hic sint exercitationem reprehenderit delectus explicabo
          cupiditate odit quisquam, porro veritatis sapiente at eius illo magni
          quos non vero soluta! Adipisci laudantium doloribus nesciunt possimus
          velit cupiditate repellendus labore neque placeat, illum officiis
          officia odio? Esse numquam, dolor aut fuga facilis quod periam culpa
          laborum quidem tempora sint, labore corrupti ducimus!
        </div>
      </div>
      <div className=" absolute left-0 bottom-0 w-1/2 mb-[10px]">
        <Image src={Birukiribawah} />
      </div>
      <div className="absolute right-0 bottom-0 w-1/2 mb-[10px]">
        <Image src={birukananbawah} />
      </div>
    </div>
  );
};
export default ViewMore2;
