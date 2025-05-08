type Props = {
  title: string;
  textColor: string;
};

export default function SectionTitle({ title, textColor }: Props) {
  return (
    <h2 className={`text-center text-2xl font-bold ${textColor}`}>{title}</h2>
  );
}
