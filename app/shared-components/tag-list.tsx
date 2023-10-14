interface TagListProps {
  tags: string[];
}

export default function TagList(props: TagListProps) {
  const { tags } = props;
  return (
    <div className="flex flex-wrap">
      {tags.map((tag, index) => {
        return (
          <span
            key={index}
            className="bg-blue-600/70 py-1 px-2 text-sm text-white me-3 mb-3"
          >
            {tag}
          </span>
        );
      })}
    </div>
  );
}
