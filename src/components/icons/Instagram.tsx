export default function Instagram({
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
        d="M12 0.000488281C8.74 0.000488281 8.333 0.0154883 7.053 0.0724883C6.05752 0.093277 5.07269 0.281926 4.14 0.630488C3.33901 0.931521 2.61344 1.40386 2.014 2.01449C1.40284 2.6135 0.930422 3.3392 0.629999 4.14049C0.280956 5.07305 0.0922918 6.05796 0.0720005 7.05349C0.012 8.33349 0 8.74049 0 12.0005C0 15.2605 0.015 15.6675 0.072 16.9475C0.0928869 17.943 0.281537 18.9278 0.630011 19.8605C0.931304 20.6614 1.4036 21.3869 2.014 21.9865C2.61328 22.5973 3.3389 23.0697 4.14 23.3705C5.07275 23.7188 6.05754 23.9075 7.053 23.9285C8.333 23.9885 8.74 24.0005 12 24.0005C15.26 24.0005 15.667 23.9855 16.947 23.9285C17.9424 23.9071 18.9271 23.7185 19.86 23.3705C21.4724 22.7474 22.7469 21.4728 23.37 19.8605C23.7185 18.9278 23.9071 17.943 23.928 16.9475C23.988 15.6675 24 15.2605 24 12.0005C24 8.74049 23.985 8.33349 23.928 7.05349C23.9067 6.05808 23.7181 5.07333 23.37 4.14051C23.0686 3.33972 22.5963 2.61422 21.986 2.01449C21.3872 1.40313 20.6614 0.930679 19.86 0.630489C18.9274 0.281538 17.9425 0.0928755 16.947 0.0724888C15.667 0.0124883 15.26 0.000488281 12 0.000488281V0.000488281ZM12 2.16037C15.2 2.16037 15.585 2.17637 16.85 2.23137C17.6107 2.24054 18.3641 2.38094 19.077 2.64637C20.1254 3.04715 20.9538 3.87513 21.355 4.92337C21.6195 5.63649 21.7592 6.38983 21.768 7.15037C21.825 8.41637 21.838 8.79637 21.838 12.0004C21.838 15.2044 21.823 15.5854 21.764 16.8504C21.7501 17.6111 21.6078 18.3641 21.343 19.0774C21.1475 19.5982 20.8403 20.0699 20.443 20.4594C20.0555 20.8581 19.5841 21.1656 19.063 21.3594C18.3471 21.6238 17.5911 21.7635 16.828 21.7724C15.554 21.8294 15.179 21.8424 11.969 21.8424C8.75901 21.8424 8.38301 21.8274 7.11001 21.7684C6.34633 21.7546 5.59042 21.6123 4.87402 21.3474C4.35283 21.1543 3.88159 20.8467 3.49501 20.4474C3.0936 20.0621 2.78573 19.59 2.59501 19.0674C2.33073 18.3512 2.18875 17.5956 2.17501 16.8324C2.13001 15.5724 2.11401 15.1834 2.11401 11.9884C2.11401 8.79337 2.13001 8.40237 2.17501 7.12737C2.18994 6.36312 2.33362 5.60685 2.60001 4.89037C2.78774 4.36592 3.09602 3.89288 3.50001 3.50937C3.88276 3.1054 4.35514 2.79711 4.87901 2.60937C5.58997 2.34384 6.34118 2.20212 7.10001 2.19037C8.37501 2.14537 8.75001 2.13037 11.959 2.13037L12 2.16037ZM12 5.83838C8.59683 5.83838 5.83801 8.5972 5.83801 12.0004C5.83801 15.4036 8.59684 18.1624 12 18.1624C15.4032 18.1624 18.162 15.4036 18.162 12.0004C18.162 8.5972 15.4032 5.83838 12 5.83838L12 5.83838ZM12 16.0005C9.79086 16.0005 8 14.2096 8 12.0005C8 9.79135 9.79086 8.00049 12 8.00049C14.2091 8.00049 16 9.79135 16 12.0005C16 14.2096 14.2091 16.0005 12 16.0005H12ZM19.846 5.59549C19.8464 6.17802 19.4958 6.7034 18.9577 6.9266C18.4197 7.14979 17.8001 7.02684 17.3881 6.61508C16.9761 6.20332 16.8527 5.58387 17.0755 5.04566C17.2983 4.50744 17.8235 4.15649 18.406 4.15649C19.2007 4.15705 19.8449 4.80083 19.846 5.59549V5.59549Z"
        fill="#2C3038"
      />
    </svg>
  );
}