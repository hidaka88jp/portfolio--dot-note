type Props = {
  title: string;
};

export default function SectionTitle({ title }: Props) {
  return (
    <h2 className='text-primary dark:text-text-light text-center text-2xl font-bold'>
      {title}
    </h2>
  );
}
