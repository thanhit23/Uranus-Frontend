export default function ArrowRight3({
  classNames,
  width = 23,
  height = 23,
  color = 'none',
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 9 16"
      height={height}
      width={width}
      fill={color}
      className={classNames}
    >
      <path
        d="M1 1L8 8L1 15"
        stroke="#2C3038"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
