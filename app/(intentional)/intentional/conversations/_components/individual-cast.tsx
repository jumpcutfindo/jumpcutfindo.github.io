"use client";

interface IndividualCastProps {
  name: string;
  tag: string;
}

export default function IndividualCast(props: IndividualCastProps) {
  const { name, tag } = props;

  const id = name.replaceAll(" ", "-").toLowerCase();

  const playSound = () => {
    const audio = document.getElementById(
      `${id}-soundbite`
    ) as HTMLAudioElement;
    audio.play();
  };

  return (
    <div
      className="flex flex-col text-center space-y-0 group"
      onClick={playSound}
    >
      <audio id={`${id}-soundbite`}>
        <source src={`/intentional/conversations/soundbites/${id}.mp3`} />
      </audio>
      <h2 className="text-2xl font-semibold transition-all group-hover:drop-shadow-[0px_8px_8px_rgba(255,255,255,1.0)]">
        {name}
      </h2>
      <p className="opacity-80 text-sm transition-all group-hover:drop-shadow-[0px_8px_8px_rgba(255,255,255,1.0)]">
        {tag}
      </p>
    </div>
  );
}
