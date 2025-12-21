export default function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex space-x-4 rounded-lg bg-gray-100 p-3">{children}</div>
  );
}
