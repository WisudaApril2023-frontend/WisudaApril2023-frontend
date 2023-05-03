import Image from 'next/image';
import confetti from '@src/assets/backgrounds/confetti.svg';
import aboutUsLogo from '@src/assets/images/AboutUs/Icon/organogramLogo.svg';
import frame from '@src/assets/images/AboutUs/Icon/frame.svg';
import light from '@src/assets/images/AboutUs/Icon/ellipseLight.svg';
import flowerLeft from '@src/assets/images/AboutUs/Icon/flowerLeft.svg';
import flowerRight from '@src/assets/images/AboutUs/Icon/flowerRight.svg';
import kipas from '@src/assets/backgrounds/kipasmatahari.svg'
import Sponsors from '@src/contexts/Homepage/Sponsor'

const AboutUs = (): JSX.Element => {
  const backgroundImageStyle = {
    backgroundImage: `url(${confetti.src})`,
    backgroundRepeat: 'repeat',
    backgroundSize: '1130px 1000px',
  };
  return (
    <div className="overflow-hidden flex flex-col mb-[10rem]">
      <div className="mt-[4rem] mx-auto h-[35rem]">
        <div className="mx-[30px] text-center">
          <Image
            src={aboutUsLogo}
            style={{
              margin: '0 auto',
              filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))',
            }}
          />
        </div>
        <div className="relative text-center mr-[4rem] block">
          <div className="absolute z-2">
            <Image
              src={frame}
              style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
            />
          </div>
          <div className="absolute z-1">
            <Image
              src={light}
              style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
            />
          </div>
        </div>
      </div>
      <hr className="py-1 border-0 bg-[#ECA829] w-5/6 mx-auto"></hr>
      <div className="mt-[1rem] mx-auto h-[30rem] w-full">
        <div className="relative text-center translate-x-[33.5%]">
          <div className="absolute z-2">
            <Image
              src={frame}
              style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
            />
          </div>
          <div className="absolute z-1">
            <Image
              src={light}
              style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex-1">
          <Image
            src={frame}
            style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
          />
        </div>
        <div className="flex-1">
          <Image
            src={frame}
            style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
          />
        </div>
        <div className="flex-1">
          <Image
            src={frame}
            style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
          />
        </div>
      </div>
      <hr className="py-1 border-0 bg-[#ECA829] w-5/6 mx-auto mt-[4rem]"></hr>
      <div className="mt-[1rem] mx-auto h-[30rem] w-full">
        <div className="relative text-center translate-x-[33.5%]">
          <div className="absolute z-2">
            <Image
              src={frame}
              style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
            />
          </div>
          <div className="absolute z-1">
            <Image
              src={light}
              style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex-1">
          <Image
            src={frame}
            style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
          />
        </div>
        <div className="flex-1">
          <Image
            src={frame}
            style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
          />
        </div>
        <div className="flex-1">
          <Image
            src={frame}
            style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
          />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex-1 ml-[16rem]">
          <Image
            src={frame}
            style={{filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
          />
        </div>
        <div className="flex-1 ml-[-15rem]">
          <Image
            src={frame}
            style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
          />
        </div>
      </div>
      <hr className="py-1 border-0 bg-[#ECA829] w-5/6 mx-auto mt-[4rem]"></hr>
      <div className="mt-[1rem] mx-auto h-[30rem] w-full">
        <div className="relative text-center translate-x-[33.5%]">
          <div className="absolute z-2">
            <Image
              src={frame}
              style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
            />
          </div>
          <div className="absolute z-1">
            <Image
              src={light}
              style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex-1">
          <Image
            src={frame}
            style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
          />
        </div>
        <div className="flex-1">
          <Image
            src={frame}
            style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
          />
        </div>
        <div className="flex-1">
          <Image
            src={frame}
            style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
          />
        </div>
      </div>
      <hr className="py-1 border-0 bg-[#ECA829] w-5/6 mx-auto mt-[4rem]"></hr>
      <div className="mt-[1rem] mx-auto h-[30rem] w-full">
        <div className="relative text-center translate-x-[33.5%]">
          <div className="absolute z-2">
            <Image
              src={frame}
              style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
            />
          </div>
          <div className="absolute z-1">
            <Image
              src={light}
              style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex-1">
          <Image
            src={frame}
            style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
          />
        </div>
        <div className="flex-1">
          <Image
            src={frame}
            style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
          />
        </div>
        <div className="flex-1">
          <Image
            src={frame}
            style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
          />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex-1 ml-[32rem]">
          <Image
            src={frame}
            style={{filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
          />
        </div>
      </div>
      <hr className="py-1 border-0 bg-[#ECA829] w-5/6 mx-auto mt-[4rem]"></hr>
      <div className="mt-[1rem] mx-auto h-[30rem] w-full">
        <div className="relative text-center translate-x-[33.5%]">
          <div className="absolute z-2">
            <Image
              src={frame}
              style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
            />
          </div>
          <div className="absolute z-1">
            <Image
              src={light}
              style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex-1">
          <Image
            src={frame}
            style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
          />
        </div>
        <div className="flex-1">
          <Image
            src={frame}
            style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
          />
        </div>
        <div className="flex-1">
          <Image
            src={frame}
            style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
          />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex-1">
          <Image
            src={frame}
            style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
          />
        </div>
        <div className="flex-1">
          <Image
            src={frame}
            style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
          />
        </div>
        <div className="flex-1">
          <Image
            src={frame}
            style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
          />
        </div>
      </div>
      <hr className="py-1 border-0 bg-[#ECA829] w-5/6 mx-auto mt-[4rem]"></hr>
      <div className="mt-[1rem] mx-auto h-[30rem] w-full">
        <div className="relative text-center translate-x-[33.5%]">
          <div className="absolute z-2">
            <Image
              src={frame}
              style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
            />
          </div>
          <div className="absolute z-1">
            <Image
              src={light}
              style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex-1">
          <Image
            src={frame}
            style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
          />
        </div>
        <div className="flex-1">
          <Image
            src={frame}
            style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
          />
        </div>
        <div className="flex-1">
          <Image
            src={frame}
            style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
          />
        </div>
      </div>
      <hr className="py-1 border-0 bg-[#ECA829] w-5/6 mx-auto mt-[4rem]"></hr>
      <div className="mt-[1rem] mx-auto h-[30rem] w-full">
        <div className="relative text-center translate-x-[33.5%]">
          <div className="absolute z-2">
            <Image
              src={frame}
              style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
            />
          </div>
          <div className="absolute z-1">
            <Image
              src={light}
              style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex-1">
          <Image
            src={frame}
            style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
          />
        </div>
        <div className="flex-1">
          <Image
            src={frame}
            style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
          />
        </div>
        <div className="flex-1">
          <Image
            src={frame}
            style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
          />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex-1 ml-[32rem]">
          <Image
            src={frame}
            style={{filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
          />
        </div>
      </div>
      <hr className="py-1 border-0 bg-[#ECA829] w-5/6 mx-auto mt-[4rem]"></hr>
      <div className="mt-[1rem] mx-auto h-[30rem] w-full">
        <div className="relative text-center translate-x-[33.5%]">
          <div className="absolute z-2">
            <Image
              src={frame}
              style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
            />
          </div>
          <div className="absolute z-1">
            <Image
              src={light}
              style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex-1">
          <Image
            src={frame}
            style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
          />
        </div>
        <div className="flex-1">
          <Image
            src={frame}
            style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
          />
        </div>
        <div className="flex-1">
          <Image
            src={frame}
            style={{ filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
          />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex-1 ml-[32rem]">
          <Image
            src={frame}
            style={{filter: 'drop-shadow(0px 5px 1px rgba(0, 0, 0, 0.25))' }}
          />
        </div>
      </div>
      <hr className="py-1 border-0 bg-[#ECA829] w-5/6 mx-auto mt-[4rem]"></hr>
      <div className="absolute bottom-0">
          <Image src={kipas}/>
      </div>
      <div>
        <Sponsors />
      </div>
    </div>
  );
};

export default AboutUs;