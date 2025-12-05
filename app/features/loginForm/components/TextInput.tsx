import type { HTMLInputTypeAttribute } from "react";

type props = {
  label: string;
  name: string;
  id: string;
  type: HTMLInputTypeAttribute;
  className?: string;
};

const TextInput = ({ label, name, id, type, className }: props) => {
  return (
    <label htmlFor={id} className={"block " + className}>
      <p className="font-bold text-white mb-2">{label}</p>
      <input
        className="py-2 w-full px-4 bg-slate-800 border-2 border-slate-600 rounded-xl text-white outline-none focus:bg-slate-700 focus:border-slate-500"
        type={type}
        name={name}
        id={id}
      />
    </label>
  );
};

export default TextInput;
