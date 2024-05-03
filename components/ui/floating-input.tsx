import { cn } from "@/lib/utils";

const FloatingInput = ({
  className,
  labelClassName,
  inputClassName,
  value,
  onChange,
  placeholder,
  label,
  type,
  id,
  name,
  required,
}: {
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label: string;
  type?: string;
  id?: string;
  name?: string;
  required?: boolean;
}) => {
  return (
    <div className={cn("relative z-0 w-full group", className)}>
      <input
        type={type || "text"}
        name={name}
        id={id}
        className={cn(
          "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer",
          inputClassName
        )}
        placeholder={placeholder || " "}
        required={required}
        value={value}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className={cn(
          "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
          labelClassName
        )}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    </div>
  );
};

export default FloatingInput;
