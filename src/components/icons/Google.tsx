export default function Google({
  classNames,
  width = 24,
  height = 24,
  color = 'none',
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={height}
      width={width}
      fill={color}
      className={classNames}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 10.2858V14.4008H18.806C18.531 16.1658 16.75 19.5748 12 19.5748C7.86498 19.5076 4.54808 16.1364 4.54807 12.0009C4.54807 7.86528 7.86496 4.49404 12 4.42684C13.7761 4.38989 15.4952 5.05419 16.785 6.27584L20.039 3.13784C17.8673 1.08958 14.985 -0.0351665 12 0.000837558C5.37258 0.000838511 0 5.37342 0 12.0008C9.53674e-07 18.6283 5.37258 24.0008 12 24.0008C18.926 24.0008 23.52 19.1318 23.52 12.2748C23.5178 11.6074 23.4546 10.9417 23.331 10.2858L12 10.2858Z"
        fill="#2C3038"
      />
    </svg>
  );
}
