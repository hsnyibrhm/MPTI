import PropTypes from "prop-types";

function Button({ onClick, children, className }) {
  return (
    <button
      className={
        className +
        " bg-white rounded-[30px] text-green-600 mt-4 font-semibold text-lg"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
export default Button;
