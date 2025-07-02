export default function SectionComponent({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="bg-gray-800 text-gray-100 p-4 rounded-md shadow-md border border-gray-700 max-w-md">
      <h2 className="text-xl font-semibold text-cyan-400 mb-2">{title}</h2>
      <p className="text-sm text-gray-300">{body}</p>
    </div>
  );
}
