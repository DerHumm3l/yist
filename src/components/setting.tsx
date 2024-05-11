export type SettingProps = React.HTMLAttributes<HTMLDivElement>;

export type SettingLabelProps = {
  label: string;
  description?: string;
};

export type SettingInputProps = React.HTMLAttributes<HTMLDivElement>;

export function Root(props: SettingProps) {
  return (
    <section
      className="w-full grid grid-cols-2 grid-rows-1 gap-3 items-center"
      {...props}
    ></section>
  );
}

export function Label({ label, description }: SettingLabelProps) {
  return (
    <div className="justify-self-start">
      <label>{label}</label>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

export function Input(props: SettingInputProps) {
  return <div className="justify-self-end" {...props}></div>;
}
