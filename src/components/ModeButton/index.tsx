import DarkModeIcon from '../../assets/icon_dark_mode.svg';

export default function ModeButton() {
  return (
    <>
      <button className='bg-primary flex w-28 max-w-full cursor-pointer items-center justify-center gap-2 rounded-md p-2 text-xs font-semibold text-white duration-200 hover:opacity-90 focus:opacity-90 sm:w-36 sm:text-base'>
        <div className='flex h-4 w-4 items-center justify-center rounded-full bg-white sm:h-5 sm:w-5'>
          <img
            src={DarkModeIcon}
            alt='dark mode icon'
            className='h-2.5 w-2.5 sm:h-3.5 sm:w-3.5'
          />
        </div>
        Dark Mode
      </button>
    </>
  );
}
