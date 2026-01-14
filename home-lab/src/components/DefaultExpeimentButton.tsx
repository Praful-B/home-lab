import type ButtonProps from "../types/ButtonProps";

export default function DefaultExperimentButton(props: ButtonProps) {
  // const b_width: number = props.b_height;
  // const b_height: number = props.b_height;

  const sizeClasses: Record<string, string> = {
    rectangle: "w-240 h-10",
    b_square: "h-120 w-120",
  };
  return (
    <>
      <button
        type="button"
        className={`bg-blue-500 hover:bg-blue-400 text-white font-bold p-10s
          ${sizeClasses[props.b_type]} 
          border-b-4 boder-blue-700 hover:boder-blue-500 rounded`}
      >
        {props.text}
      </button>
    </>
  );
}
