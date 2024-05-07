export type HeaderProps = React.HTMLAttributes<HTMLDivElement>;

export function Root({ children, ...props }: HeaderProps) {
  return (
    <nav
      className="p-4 w-full grid grid-cols-3 grid-rows-1 items-center justify-center content-center align-middle"
      {...props}
    >
      {children}
    </nav>
  );
}

export function Left(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="col-start-1 justify-self-start" {...props}></div>;
}

export function Center(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="col-start-2 justify-self-center" {...props}></div>;
}

export function Right(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="col-start-3 justify-self-end" {...props}></div>;
}
