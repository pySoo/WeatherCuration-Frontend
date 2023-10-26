export default function Description({
  className,
  ...props
}: React.ComponentProps<'h1'>) {
  return (
    <p
      {...props}
      className={`text-gray-200 font-semibold text-xl ${className}`}
    >
      {props.children}
    </p>
  );
}
