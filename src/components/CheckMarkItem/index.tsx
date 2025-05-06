type Props = {
  children: React.ReactNode;
};

export default function CheckMarkItem({ children }: Props) {
  return (
    <li className='before:border-secondary relative pl-6 before:absolute before:top-1 before:left-0.5 before:h-2.5 before:w-3.5 before:-rotate-45 before:border-b-3 before:border-l-3 before:content-[""]'>
      {children}
    </li>
  );
}
