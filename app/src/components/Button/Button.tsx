interface ButtonProps {
  text: string;
}

const Button = (props: ButtonProps) => {
  const { text } = props;

  return (
    <button type="button" className="button">
      {text}
    </button>
  );
};

export default Button;
