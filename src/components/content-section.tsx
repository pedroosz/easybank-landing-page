import { PropsWithChildren, ReactNode } from "react";

interface IContentSection {
  header: ReactNode;
  content: ReactNode;
}

export default function ContentSection(props: IContentSection) {
  return (
    <section className="w-full bg-light-grayish-blue px-4">
      <div className="mx-auto max-w-container space-y-24 pb-12 pt-32">
        {props.header}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {props.content}
        </div>
      </div>
    </section>
  );
}
