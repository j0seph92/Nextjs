import Link from "next/link";

const ButtonMain = ({ label, onClick, extclass, icon: Icon }) => {
  if (Icon) {
    return (
      <button
        className={`bg-grad text-light btnmain ${extclass}`}
        onClick={onClick}
      >
        {label}
        {Icon && <Icon className="ms-2" />}
      </button>
    );
  }
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
