export default function FAQItem() {
  return (
    <div className='space-y-4'>
      <div className='flex items-center gap-3.5'>
        <div className='bg-icon-bg-mint flex h-11 w-11 shrink-0 items-center justify-center rounded-full'>
          <span className='text-primary text-xl font-bold'>Q</span>
        </div>
        <h3 className='text-text-light text-xl font-bold'>
          How can I share my notes?
        </h3>
      </div>
      <div className='flex items-center gap-3.5'>
        <div className='bg-icon-bg-light flex h-11 w-11 shrink-0 items-center justify-center rounded-full'>
          <span className='text-primary text-xl font-bold'>A</span>
        </div>
        <h3 className='text-text-light'>
          Sharing notes is simple. You can set a password and share the link.
        </h3>
      </div>
    </div>
  );
}
