import Hero from '../components/Hero';
import Commitment from '../components/Commitment';

type Props = {
  isDarkMode: boolean;
};

export default function Home({ isDarkMode }: Props) {
  return (
    <>
      <Hero isDarkMode={isDarkMode} />
      <Commitment />
    </>
  );
}
