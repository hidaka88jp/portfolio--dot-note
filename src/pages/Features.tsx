import TopWaveLightSp from '../assets/top-kv-wave-bottom-light-sp.png';
import TopWaveLightPc from '../assets/top-kv-wave-bottom-light-pc.png';
import TopWaveDarkSp from '../assets/top-kv-wave-bottom-dark-sp.png';
import TopWaveDarkPc from '../assets/top-kv-wave-bottom-dark-pc.png';
import SiteImage1 from '../assets/site-image-1.png';
import SiteImage2 from '../assets/site-image-2.png';
import SiteImage3 from '../assets/site-image-3.png';
import SectionTitle from '../components/SectionTitle';
import FeaturesCard from '../components/FeaturesCard';
import LinkButton from '../components/LinkButton';

type Props = {
  isDarkMode: boolean;
};

export default function Features({ isDarkMode }: Props) {
  const FeaturesCardItems = [
    {
      image: SiteImage1,
      title: 'Note Creation',
      description:
        'Styling can be done with a single click or shortcut key, making it easy to create beautiful notes.',
    },
    {
      image: SiteImage2,
      title: 'Shareable as a web page',
      description:
        'Three sharing options: Password-protected / Public (accessible with URL) / Private',
    },
    {
      image: SiteImage3,
      title: 'Manage notes with tags',
      description:
        'Notes can be organized by tagging. You can add, remove, and assign multiple tags.',
    },
  ];

  return (
    <div>
      <div className='bg-bg-top-light dark:bg-bg-top-dark pb-10 sm:pb-0'>
        <div className='mx-auto -mb-[1px] flex w-full max-w-96 flex-col items-center justify-center gap-10 px-5 pt-10 sm:max-w-5xl sm:gap-24'>
          <SectionTitle
            title='Features'
            textColor='text-primary dark:text-text-light'
          />
          {FeaturesCardItems.map((item, index) => (
            <FeaturesCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              isReversed={index % 2 === 1}
            />
          ))}
          <LinkButton path='/'>Back to Home</LinkButton>
        </div>
      </div>
      {isDarkMode ? (
        <>
          <img
            src={TopWaveDarkSp}
            alt='wave-dark-sp'
            className='w-full sm:hidden'
          />
          <img
            src={TopWaveDarkPc}
            alt='wave-dark-sp'
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
  );
}
