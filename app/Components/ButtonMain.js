import Link from "next/link";

const ButtonMain = ({ label, onClick, extclass }) => {
  return (
    <button
      className={`bg-grad text-light btnmain ${extclass}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ButtonMain;
