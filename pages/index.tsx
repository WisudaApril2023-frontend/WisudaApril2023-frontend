import getConfig from 'next/config';
import Image from 'next/image';

import ImageTes0 from '@src/assets/images/under-construction.svg'
import ImageTes1 from '@src/assets/backgrounds/background-titik.svg'
import ImageTes2 from '@src/assets/backgrounds/background-matahari.svg'
import ImageTes5 from '@src/assets/backgrounds/layer tes.png'
import ImageTes3 from '@src/assets/images/biru-kiri-bawah.svg'
import ImageTes4 from '@src/assets/images/biru-kanan-bawah.svg'
import ImageTes6 from '@src/assets/images/bola-biru.svg'
import ImageTes7 from '@src/assets/images/bola-ijo.svg'
import ImageTes8 from '@src/assets/images/benteng.svg'
import ImageTes9 from '@src/assets/images/gajah.svg'
import ImageTes10 from '@src/assets/images/pion-kuning.svg'
import ImageTes11 from '@src/assets/images/pion-pink.svg'
import ImageTes12 from '@src/assets/images/dadu-ungu.svg'
import ImageTes13 from '@src/assets/images/dadu-biru.svg'
import ImageTes14 from '@src/assets/images/ular-merah.svg'
import ImageTes15 from '@src/assets/images/ular-ungu.svg'
import ImageTes16 from '@src/assets/images/ular-kuning.svg'
import ImageTes17 from '@src/assets/images/pita1.svg'
import ImageTes18 from '@src/assets/images/pita2.svg'
import ImageTes19 from '@src/assets/images/tangga.svg'
import ImageTes20 from '@src/assets/images/papan.svg'
import ImageTes21 from '@src/assets/images/kipas.svg'
import Layout from '@src/components/Navigation/Layout';

const { publicRuntimeConfig } = getConfig();
const { name } = publicRuntimeConfig.site;

const Home = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-white to-[#913175] relative">
        <div className="w-max">
          <Image src={ImageTes0} />
        </div>
        <div className="font-[Marker-Felt] text-[#674188] font-medium text-[15px]">
          We’re currently working on something glorious, we’ll be launching soon.
        </div>
        <div className="font-[Heavy-Heap] text-[#674188] text-[25px]">
          Roll your dice, be the ace.
        </div>
        <div className="w-[200px]">
          <Image src={ImageTes2} />
        </div>
        <div className="w-[200px]">
          <Image src={ImageTes3} />
        </div>
        <div className="w-[200px]">
          <Image src={ImageTes4} />
        </div>
        <div className="w-full">
          <Image src={ImageTes5} />
        </div>
        <div className="w-[200px]">
          <Image src={ImageTes6} />
        </div>
        <div className="w-[200px]">
          <Image src={ImageTes7} />
        </div>
        <div className="w-[200px]">
          <Image src={ImageTes8} />
        </div>
        <div className="w-[200px]">
          <Image src={ImageTes9} />
        </div>
        <div className="w-[200px]">
          <Image src={ImageTes10} />
        </div>
        <div className="w-[200px]">
          <Image src={ImageTes11} />
        </div>
        <div className="w-[200px]">
          <Image src={ImageTes12} />
        </div>
        <div className="w-[200px]">
          <Image src={ImageTes13} />
        </div>
        <div className="w-[200px]">
          <Image src={ImageTes14} />
        </div>
        <div className="w-[200px]">
          <Image src={ImageTes15} />
        </div>
        <div className="w-[200px]">
          <Image src={ImageTes16} />
        </div>
        <div className="w-[200px]">
          <Image src={ImageTes17} />
        </div>
        <div className="w-[200px]">
          <Image src={ImageTes18} />
        </div>
        <div className="w-[200px]">
          <Image src={ImageTes19} />
        </div>
        <div className="w-[200px]">
          <Image src={ImageTes20} />
        </div>
        <div className="w-[200px]">
          <Image src={ImageTes21} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
