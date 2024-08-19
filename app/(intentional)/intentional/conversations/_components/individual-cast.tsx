interface IndividualCastProps {
  name: string;
  tag: string;
}

export default function IndividualCast(props: IndividualCastProps) {
  const { name, tag } = props;

  return (
    <div className="flex flex-col text-center space-y-0">
      <h2 className="text-2xl font-semibold">{name}</h2>
      <span className="opacity-80 text-sm">{tag}</span>
    </div>
  );
}
