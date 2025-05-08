type Props = {
  question: string;
  answer: string;
};

export default function FAQItem({ question, answer }: Props) {
  return (
    <dl className='space-y-4'>
      <dt className='flex items-center gap-3.5'>
        <div className='bg-icon-bg-mint flex h-11 w-11 shrink-0 items-center justify-center rounded-full'>
          <span className='text-primary text-xl font-bold'>Q</span>
        </div>
        <span className='text-text-light text-xl font-bold'>{question}</span>
      </dt>
      <dd className='flex items-start gap-3.5'>
        <div className='bg-icon-bg-light flex h-11 w-11 shrink-0 items-center justify-center rounded-full'>
          <span className='text-primary text-xl font-bold'>A</span>
        </div>
        <span
          className='text-text-light mt-3'
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </dd>
    </dl>
  );
}
