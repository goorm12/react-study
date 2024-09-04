const Button = ({ text, children }) => {
  return (
    <button
      onClick={() => {
        console.log(text);
      }}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
