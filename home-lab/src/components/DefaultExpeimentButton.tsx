import { useNavigate } from "react-router-dom";
import type ButtonProps from "../types/ButtonProps";
// TODO: Rewrite the entire Component 
export default function DefaultExperimentButton(props: ButtonProps) {
  // const b_width: number = props.b_height;
  // const b_height: number = props.b_height;

  const navigate = useNavigate();

  const sizeClasses: Record<string, string> = {
    rectangle: "w-240 h-10",
    b_square: "h-120 w-120",
  };

  return (
    <div className="p-10 ">
      <button
        type="button"
        onClick={() => {
          navigate(props.to);
        }}
        className={`bg-blue-500 hover:bg-blue-400 text-white font-bold p-10
          ${sizeClasses[props.b_type]} 
          border-b-4 border-blue-700 hover:border-blue-500 rounded-xl `}
      >
        {props.text}
      </button>
    </div>
  );
}
