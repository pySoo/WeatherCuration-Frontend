export default function Description({
  className,
  ...props
}: React.ComponentProps<'h1'>) {
  return (
    <p {...props} className={`text-gray-200 font-semibold ${className}`}>
      {props.children}
    </p>
  );
}
