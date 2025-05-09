import Logo from '../Logo';
import ModeButton from '../ModeButton';
import { Link } from 'react-router';

type Props = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

export default function Header({ isDarkMode, toggleDarkMode }: Props) {
  return (
    <>
      <div className='bg-bg-top-light dark:bg-bg-top-dark -mb-px'>
        <div className='mx-auto flex w-full max-w-96 items-center justify-between p-5 sm:max-w-2xl xl:max-w-5xl'>
          <Link to='/'>
            <Logo isDarkMode={isDarkMode} />
          </Link>
          <ModeButton isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </div>
    </>
  );
}
