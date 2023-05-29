import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../lib/utils';

const iconVariants = cva('aspect-square', {
  variants: {
    size: {
      default: 'w-6',
      sm: 'w-4',
      lg: 'w-8',
      xl: 'w-8 xl:w-10',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

interface IconProps
  extends React.DetailedHTMLProps<
      React.ImgHTMLAttributes<HTMLImageElement>,
      HTMLImageElement
    >,
    VariantProps<typeof iconVariants> {
  src: string;
  alt: string;
}

const Icon = ({ className, src, alt, size, ...props }: IconProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={cn(iconVariants({ size, className }))}
      {...props}
    />
  );
};

export default Icon;
