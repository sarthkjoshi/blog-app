"use client";
function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-pink-400 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
    >
      {children}
    </button>
  );
}

export default Button;
