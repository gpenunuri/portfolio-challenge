interface ButtonProps {
  text: string;
  type?: "button" | "link";
}

const Button = (props: ButtonProps) => {
  const { text, type } = props;

  return (
    <button type="button" className="button">
      {text}
    </button>
  );
};

export default Button;
