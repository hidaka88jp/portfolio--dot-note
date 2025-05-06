import Hero from '../components/Hero';
import Commitment from '../components/Commitment';

type Props = {
  isDarkMode: boolean;
};

export default function Home({ isDarkMode }: Props) {
  return (
    <div className='flex flex-col gap-20'>
      <Hero isDarkMode={isDarkMode} />
      <Commitment />
    </div>
  );
}
