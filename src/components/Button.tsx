import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../lib/utils';

const buttonVariants = cva('bg-primary text-white w-fit h-fit', {
  variants: {
    size: {
      default: 'rounded-lg px-3 py-2 lg:px-4 lg:py-2.5 lg:text-lg',
      sm: 'rounded-md px-2 py-1.5 lg:text-md',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

interface IButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    VariantProps<typeof buttonVariants> {}

const Button = ({
  className,
  children,
  size,
  onClick,
  ...props
}: IButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ size, className }))}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
