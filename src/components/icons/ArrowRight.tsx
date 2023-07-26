import { TypeIcon } from './types';

export default function ArrowRight({
  classNames,
  width = 21,
  height = 21,
  color = 'none',
}: TypeIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 21"
      height={height}
      width={width}
      fill={color}
      className={classNames}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.27966 11.747L16.6247 11.747L10.3517 18.023C10.1063 18.2566 9.96744 18.5807 9.96744 18.9195C9.96744 19.2583 10.1063 19.5823 10.3517 19.816C10.5853 20.0613 10.9093 20.2002 11.2482 20.2002C11.587 20.2002 11.911 20.0613 12.1447 19.816L20.4677 11.491C20.9808 10.9044 20.9808 10.0286 20.4677 9.44197L12.1427 1.11697C11.909 0.871613 11.585 0.732746 11.2462 0.732746C10.9073 0.732746 10.5833 0.871613 10.3497 1.11697H10.3497C10.1043 1.35064 9.96544 1.67465 9.96544 2.01347C9.96544 2.35229 10.1043 2.67631 10.3497 2.90997L16.6247 9.18497L2.27966 9.18497C1.93392 9.16401 1.59577 9.29223 1.35085 9.53715C1.10592 9.78208 0.977703 10.1202 0.998665 10.466C0.977703 10.8117 1.10592 11.1499 1.35085 11.3948C1.59577 11.6397 1.93392 11.7679 2.27966 11.747Z"
        fill="#2C3038"
      />
    </svg>
  );
}
