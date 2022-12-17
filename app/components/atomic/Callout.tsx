export default function Callout(props: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-sm flex p-4 gap-2 rounded overflow-hidden shadow-lg bg-yellow-600/20 mt-2 mb-4">
      <div className="text-2xl">{props.icon}</div>
      <div className="">{props.children}</div>
    </div>
  );
}
