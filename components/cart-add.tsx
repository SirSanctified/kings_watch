const CartAdd = ({ width = 24, height = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      style={{ fill: "rgb(0, 0, 0); --darkreader-inline-fill: #e8e6e3;" }}
      data-darkreader-inline-fill=""
    >
      <circle
        cx="10.5"
        cy="19.5"
        r="1.5"
      ></circle>
      <circle
        cx="17.5"
        cy="19.5"
        r="1.5"
      ></circle>
      <path d="M21 7H7.334L6.18 4.23A1.995 1.995 0 0 0 4.333 3H2v2h2.334l4.743 11.385c.155.372.52.615.923.615h8c.417 0 .79-.259.937-.648l3-8A1.003 1.003 0 0 0 21 7zm-4 6h-2v2h-2v-2h-2v-2h2V9h2v2h2v2z"></path>
    </svg>
  );
};

export default CartAdd;
