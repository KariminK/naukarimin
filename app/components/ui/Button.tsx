type props = {
  children: string;
  classname?: string;
};

const Button = ({ children, classname }: props) => {
  return (
    <button
      className={
        "py-2 px-5 rounded-xl border-2 border-sky-500 text-sky-500 hover:text-white hover:bg-sky-500 cursor-pointer transition-colors " +
        classname
      }>
      {children}
    </button>
  );
};

export default Button;
