export type SvgIcon = {
  width: number;
  height: number;
  color: string;
};

export function MenuIcon({ info }: { info: SvgIcon }) {
  return (
    <svg
      width={info.width}
      height={info.height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5 9.99967C5 9.07921 5.7462 8.33301 6.66667 8.33301H33.3333C34.2538 8.33301 35 9.07921 35 9.99967C35 10.9201 34.2538 11.6663 33.3333 11.6663H6.66667C5.7462 11.6663 5 10.9201 5 9.99967ZM5 19.9997C5 19.0792 5.7462 18.333 6.66667 18.333H33.3333C34.2538 18.333 35 19.0792 35 19.9997C35 20.9202 34.2538 21.6663 33.3333 21.6663H6.66667C5.7462 21.6663 5 20.9202 5 19.9997ZM5 29.9997C5 29.0792 5.7462 28.333 6.66667 28.333H33.3333C34.2538 28.333 35 29.0792 35 29.9997C35 30.9202 34.2538 31.6663 33.3333 31.6663H6.66667C5.7462 31.6663 5 30.9202 5 29.9997Z"
        fill={info.color}
      />
    </svg>
  );
}
