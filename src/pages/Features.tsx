import SiteImage1 from '../assets/site-image-1.png';
import SiteImage2 from '../assets/site-image-2.png';
import SiteImage3 from '../assets/site-image-3.png';
import SectionTitle from '../components/SectionTitle';
import FeaturesCard from '../components/FeaturesCard';
import LinkButton from '../components/LinkButton';

export default function Features() {
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
    <>
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
        <div className='w-full'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 160'>
            <path
              className='fill-bg-top-light dark:fill-bg-top-dark'
              fill-opacity='1'
              d='M0,160L80,138.7C160,117,320,75,480,80C640,85,800,139,960,149.3C1120,160,1280,128,1360,112L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}
