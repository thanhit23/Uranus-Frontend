export default function Spotify({
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
        d="M12 0.000490189C5.37258 0.000490189 0 5.37307 0 12.0005C9.53674e-07 18.6279 5.37258 24.0005 12 24.0005C18.6274 24.0005 24 18.6279 24 12.0005C23.9806 5.38074 18.6191 0.0195408 11.9997 0.000488281L12 0.000490189ZM17.521 17.3404C17.4227 17.5135 17.2567 17.6377 17.0629 17.6833C16.8691 17.7288 16.6651 17.6915 16.5 17.5804C13.68 15.8404 10.14 15.4804 5.93901 16.4394C5.67828 16.5141 5.39753 16.4407 5.20684 16.2478C5.01615 16.0549 4.9459 15.7733 5.02364 15.5134C5.10138 15.2536 5.31472 15.0569 5.58001 15.0004C10.14 13.9794 14.1 14.4004 17.22 16.3204C17.4017 16.4092 17.5378 16.5702 17.595 16.7641C17.6523 16.9581 17.6254 17.1672 17.521 17.3404ZM18.961 14.0405C18.8356 14.2501 18.6308 14.4001 18.3933 14.4565C18.1557 14.513 17.9053 14.4712 17.699 14.3405C14.0651 12.299 9.76381 11.8019 5.76003 12.9605C5.27926 13.1097 4.76864 12.8408 4.61952 12.36C4.47041 11.8793 4.73926 11.3687 5.22002 11.2195C9.75513 9.92517 14.6203 10.5093 18.72 12.8405C18.915 12.9645 19.0509 13.1626 19.0964 13.3892C19.1419 13.6157 19.093 13.8509 18.961 14.0405ZM19.081 10.6806C15.24 8.40055 8.82 8.16055 5.16 9.30055C4.58017 9.48279 3.96238 9.16053 3.78005 8.58073C3.59772 8.00094 3.91987 7.3831 4.49963 7.20067C8.76 5.94055 15.78 6.18055 20.221 8.82155C20.7592 9.14291 20.9448 9.83376 20.64 10.3816C20.2572 10.8386 19.6058 10.9635 19.081 10.6806Z"
        fill="#2C3038"
      />
    </svg>
  );
}