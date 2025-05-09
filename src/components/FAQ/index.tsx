import FAQItem from '../FAQItem';
import SectionTitle from '../SectionTitle';

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
        'Yes, the service is completely free during the beta phase.<br />After the official release, we will offer paid plans as well.',
    },
  ];

  return (
    <div>
      <div className='-mb-px w-full'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 240'>
          <path
            className='fill-bg-bottom'
            fillOpacity='1'
            d='M0,160L80,138.7C160,117,320,75,480,80C640,85,800,139,960,149.3C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
          ></path>
        </svg>
      </div>
      <div className='bg-bg-bottom -mb-px py-5 xl:py-0'>
        <div className='mx-auto flex w-full max-w-96 flex-col items-center justify-center gap-10 p-5 sm:max-w-2xl sm:gap-20 xl:max-w-5xl'>
          <SectionTitle title='FAQ' textColor='text-text-light' />
          <div className='space-y-10 sm:w-full sm:max-w-2xl sm:space-y-20 sm:pl-20 lg:pl-30'>
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='w-full'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 160'>
          <path
            className='fill-bg-bottom'
            fillOpacity='1'
            d='M0,160L80,138.7C160,117,320,75,480,80C640,85,800,139,960,149.3C1120,160,1280,128,1360,112L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'
          ></path>
        </svg>
      </div>
    </div>
  );
}
