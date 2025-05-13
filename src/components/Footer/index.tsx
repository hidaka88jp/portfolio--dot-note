export default function Footer() {
  return (
    <div className='text-primary dark:text-text-light mx-auto flex w-full max-w-96 flex-col items-center justify-center px-5 pt-10 pb-6 text-center text-sm sm:max-w-2xl sm:pt-14 xl:max-w-5xl'>
      <p className='mb-5'>© 2025 Takanori Hidaka</p>
      <p>
        Design inspiration: Implemented in React, the UI design inspired by
        HTML/CSS coding exercises from{' '}
        <a
          href='https://moshashugyo.com/lessons/dot-doc'
          className='underline transition-opacity hover:opacity-80'
          target='_blank'
          rel='noopener noreferrer'
        >
          Mosha Shugyo
        </a>
        .
      </p>
    </div>
  );
}
