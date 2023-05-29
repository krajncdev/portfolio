type TInput = 'textarea' | 'text';

interface IInputProps {
  type: TInput;
  name: string;
  placeholder: string;
  className?: string;
}

const Input = ({ type, name, placeholder, className }: IInputProps) => {
  return (
    <>
      {type === 'text' && (
        <input
          type='text'
          name={name}
          placeholder={placeholder}
          className={`outline-none ${className} w-full border-b border-primary focus:border-white bg-transparent px-2 py-1.5 text-white`}
        />
      )}
      {type === 'textarea' && (
        <textarea
          name={name}
          className={`outline-none resize-none ${className} w-full border-b border-primary bg-transparent px-2 py-1.5 text-white`}
          placeholder={placeholder}
        />
      )}
    </>
  );
};

export default Input;
