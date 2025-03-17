import { ReactNode } from "react";

export default function Article({
  header,
  body,
  footer,
}: {
  header: ReactNode;
  body: ReactNode;
  footer: ReactNode;
}) {
  return (
    <article className="my-4 bg-mine-2 rounded-md shadow-md">
      <header className="text-2xl font-bold text-mine-7 justify-center bg-mine-3 rounded-t-md p-4">
        {header}
      </header>
      <section className="p-4">{body}</section>
      <footer className="p-4 bg-mine-3 rounded-b-md">{footer}</footer>
    </article>
  );
}
