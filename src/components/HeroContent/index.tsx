import CheckMarkItem from '../CheckMarkItem';
import LinkButton from '../LinkButton';

export default function HeroContent() {
  return (
    <div className='sm:shrink-0'>
      <h1 className='text-primary dark:text-text-light mb-3.5 text-3xl font-bold sm:mb-5'>
        Instant Note Sharing
      </h1>
      <ul className='text-primary dark:text-text-light space-y-1.5 pb-6 font-semibold'>
        <CheckMarkItem>Distraction-free Writing Experience</CheckMarkItem>
        <CheckMarkItem>Password-protected Note Sharing</CheckMarkItem>
        <CheckMarkItem>Completely Free During Beta Period</CheckMarkItem>
      </ul>
      <LinkButton path={'/features'}>Learn More</LinkButton>
    </div>
  );
}
