export default function SubTitle({
  className,
  ...props
}: React.ComponentProps<'h1'>) {
  return (
    <h2
      {...props}
      className={`mb-4 text-2xl font-semibold shadowed-text tracking-tight sm:text-3xl ${className}`}
    >
      {props.children}
    </h2>
  );
}
