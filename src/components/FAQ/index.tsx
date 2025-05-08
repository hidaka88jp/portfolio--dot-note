import FAQItem from '../FAQItem';
import SectionTitle from '../SectionTitle';
import TopWaveSP from '../../assets/faq-wave-top-sp.png';
import TopWavePC from '../../assets/faq-wave-top-pc.png';
import BottomWaveSp from '../../assets/faq-wave-bottom-sp.png';
import BottomWavePc from '../../assets/faq-wave-bottom-pc.png';

export default function FAQ() {
  const faqItems = [
    {
      question: 'How can I share my notes?',
      answer:
        'Sharing notes is simple. You can set a password and share the link.',
    },
    {
      question: 'Can I back up my notes?',
      answer: 'Yes, you can back up your notes using the export feature.',
    },
    {
      question: 'Is this service free?',
      answer:
        'Yes, the service is completely free during the beta phase.<br /> After the official release, we will offer paid plans as well.',
    },
  ];

  return (
    <div>
      <img src={TopWaveSP} alt='wave-sp' className='-mb-px w-full sm:hidden' />
      <img
        src={TopWavePC}
        alt='wave-pc'
        className='-mb-px hidden w-full sm:block'
      />
      <div className='bg-bg-bottom -mb-px'>
        <div className='mx-auto flex w-full max-w-96 flex-col items-center justify-center gap-10 p-5 sm:max-w-5xl sm:gap-20'>
          <SectionTitle title='FAQ' textColor='text-text-light' />
          {faqItems.map((item, index) => (
            <div key={index} className='sm:w-full sm:max-w-xl'>
              <FAQItem question={item.question} answer={item.answer} />
            </div>
          ))}
        </div>
      </div>
      <img
        src={BottomWaveSp}
        alt='bottom-wave-sp'
        className='-mb-px w-full sm:hidden'
      />
      <img
        src={BottomWavePc}
        alt='bottom-wave-pc'
        className='-mb-px hidden w-full sm:block'
      />
    </div>
  );
}
