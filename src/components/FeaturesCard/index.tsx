type Props = {
  image: string;
  title: string;
  description: string;
  isReversed?: boolean;
};

export default function FeaturesCard({
  image,
  title,
  description,
  isReversed = false,
}: Props) {
  return (
    <div
      className={`text-primary dark:text-text-light flex flex-col gap-3.5 sm:gap-7 xl:gap-14 ${isReversed ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}
    >
      <figure className='w-full'>
        <img src={image} alt={title} className='w-ful h-auto object-cover' />
      </figure>
      <div className='xl:mt-6'>
        <h3 className='mb-2 text-lg font-bold sm:mb-4'>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
