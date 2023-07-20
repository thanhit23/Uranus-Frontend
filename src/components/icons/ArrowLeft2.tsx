export default function ArrowLeft2({
  classNames,
  width = 16,
  height = 16,
  color = 'none',
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      height={height}
      width={width}
      fill={color}
      className={classNames}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5 6.59985H3.3L8.2 1.69985C8.39148 1.51735 8.49985 1.26437 8.49985 0.99985C8.49985 0.735326 8.39148 0.482349 8.2 0.29985C8.0175 0.108364 7.76452 0 7.5 0C7.23548 0 6.9825 0.108364 6.8 0.29985L0.299997 6.79985C-0.100731 7.25791 -0.100731 7.94179 0.299998 8.39985L6.8 14.8998C6.9825 15.0913 7.23547 15.1997 7.5 15.1997C7.76452 15.1997 8.0175 15.0913 8.2 14.8998C8.39148 14.7173 8.49985 14.4644 8.49985 14.1998C8.49985 13.9353 8.39148 13.6823 8.2 13.4998L3.3 8.59985H14.5C14.7699 8.61607 15.0338 8.51594 15.2249 8.32477C15.4161 8.1336 15.5162 7.86971 15.5 7.59985C15.5162 7.32999 15.4161 7.0661 15.2249 6.87493C15.0338 6.68376 14.7699 6.58363 14.5 6.59985Z"
        fill="#212529"
      />
    </svg>
  );
}