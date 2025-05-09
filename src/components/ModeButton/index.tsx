import { MdLightMode } from 'react-icons/md';
import { IoIosMoon } from 'react-icons/io';

type Props = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

export default function ModeButton({ isDarkMode, toggleDarkMode }: Props) {
  return (
    <>
      <button
        className='bg-primary dark:bg-secondary flex w-28 max-w-full cursor-pointer items-center justify-center gap-2 rounded-md p-2 text-xs font-medium text-white select-none hover:opacity-90 focus:opacity-90 sm:w-36 sm:text-base'
        onClick={toggleDarkMode}
      >
        <div className='flex h-4 w-4 items-center justify-center rounded-full bg-white sm:h-5 sm:w-5'>
          {isDarkMode ? (
            <MdLightMode className='text-secondary h-3.5 w-3.5 sm:h-4.5 sm:w-4.5' />
          ) : (
            <IoIosMoon className='text-primary h-3.5 w-3.5 sm:h-4.5 sm:w-4.5' />
          )}
        </div>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </>
  );
}
