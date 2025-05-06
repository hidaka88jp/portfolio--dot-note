import HeroImage from '../HeroImage';
import HeroContent from '../HeroContent';
import TopWaveLightSp from '../../assets/top-kv-wave-bottom-light-sp.png';
import TopWaveLightPc from '../../assets/top-kv-wave-bottom-light-pc.png';
import TopWaveDarkSp from '../../assets/top-kv-wave-bottom-dark-sp.png';
import TopWaveDarkPc from '../../assets/top-kv-wave-bottom-dark-pc.png';

type Props = {
  isDarkMode: boolean;
};

export default function Hero({ isDarkMode }: Props) {
  return (
    <div>
      <div className='bg-bg-top-light dark:bg-bg-top-dark'>
        <div className='mx-auto flex w-full max-w-96 flex-col items-center justify-center gap-8 p-5 sm:max-w-5xl sm:flex-row-reverse sm:justify-between'>
          <HeroImage />
          <HeroContent />
        </div>
      </div>
      <div className='w-screen overflow-x-hidden'>
        {isDarkMode ? (
          <>
            <img
              src={TopWaveDarkSp}
              alt='wave-light-sp'
              className='w-full sm:hidden'
            />
            <img
              src={TopWaveDarkPc}
              alt='wave-light-sp'
              className='hidden w-full sm:block'
            />
          </>
        ) : (
          <>
            <img
              src={TopWaveLightSp}
              alt='wave-light-sp'
              className='w-full sm:hidden'
            />
            <img
              src={TopWaveLightPc}
              alt='wave-light-pc'
              className='hidden w-full sm:block'
            />
          </>
        )}
      </div>
    </div>
  );
}
