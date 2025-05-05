import { Helmet } from 'react-helmet';

type Props = {
  isDarkMode: boolean;
};

export default function AppMetaTags({ isDarkMode }: Props) {
  return (
    <Helmet>
      <title>.note</title>
      <meta name='theme-color' content={isDarkMode ? '#2d3f2d' : '#f0f2f0'} />
      <meta name='description' content='awesome note app' />
    </Helmet>
  );
}
