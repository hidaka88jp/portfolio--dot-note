import HeroImage from '../HeroImage';
import HeroContent from '../HeroContent';

export default function Hero() {
  return (
    <div>
      <div className='bg-bg-top-light dark:bg-bg-top-dark'>
        <div className='mx-auto -mb-[1px] flex w-full max-w-96 flex-col items-center justify-center gap-8 p-5 sm:max-w-5xl sm:flex-row-reverse sm:justify-between'>
          <HeroImage />
          <HeroContent />
        </div>
      </div>
      <div className='w-full'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 160'>
          <path
            className='fill-bg-top-light dark:fill-bg-top-dark'
            fillOpacity='1'
            d='M0,160L80,138.7C160,117,320,75,480,80C640,85,800,139,960,149.3C1120,160,1280,128,1360,112L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'
          ></path>
        </svg>
      </div>
    </div>
  );
}
