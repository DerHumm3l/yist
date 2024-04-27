export type HeaderProps = React.HTMLAttributes<HTMLDivElement>;

export function Root({ children, ...props }: HeaderProps) {
  return (
    <div
      className="p-4 w-screen grid grid-cols-3 grid-rows-1 items-center justify-center content-center align-middle"
      {...props}
    >
      {children}
    </div>
  );
}

export function Left(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="col-start-1 justify-self-start" {...props}></div>;
}

export function Center(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="col-start-2" {...props}></div>;
}

export function Right(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="col-start-3 justify-self-end" {...props}></div>;
}
