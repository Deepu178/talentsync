export default function BlockQuote({
  children,
}: {
  children: React.ReactNode;
}) {
  return <blockquote className="rounded-r-lg p-3">{children}</blockquote>;
}
