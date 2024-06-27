export default function Title(props: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-medium text-gray-800">{props.children}</h3>
  );
}
