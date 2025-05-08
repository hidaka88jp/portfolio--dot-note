import FAQItem from '../FAQItem';
import SectionTitle from '../SectionTitle';
import BottomWaveSP from '../../assets/faq-wave-top-sp.png';
import BottomWavePC from '../../assets/faq-wave-top-pc.png';

export default function FAQ() {
  return (
    <div>
      <img
        src={BottomWaveSP}
        alt='wave-sp'
        className='-mb-px w-full sm:hidden'
      />
      <img
        src={BottomWavePC}
        alt='wave-pc'
        className='-mb-px hidden w-full sm:block'
      />
      <div className='bg-bg-bottom'>
        <div className='mx-auto flex w-full max-w-96 flex-col items-center justify-center gap-10 p-5 sm:max-w-5xl sm:gap-20'>
          <SectionTitle title='FAQ' textColor='text-text-light' />
          <FAQItem />
          <FAQItem />
        </div>
      </div>
    </div>
  );
}
