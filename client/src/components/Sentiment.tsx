export const Sentiment = ({ sentiment }: { sentiment: string }) => {
  const classes =
    "inline-block px-2 py-1 leading-none  rounded-full font-semibold uppercase tracking-wide text-xs";
  let finalClass = classes;
  let icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
    >
      <path
        fill="currentColor"
        d="M2 16h5v14H2zm21 14H9V15.197l3.042-4.563l.845-5.917A2.01 2.01 0 0 1 14.867 3H15a3.003 3.003 0 0 1 3 3v6h8a4.005 4.005 0 0 1 4 4v7a7.008 7.008 0 0 1-7 7z"
      ></path>
    </svg>
  );

  if (sentiment === "positive") {
    finalClass = `${classes} bg-green-200 text-green-800`;
  } else if (sentiment === "neutral") {
    icon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 15 15"
      >
        <path
          fill="currentColor"
          d="M6.5 0a6.5 6.5 0 1 0 4.23 11.436l3.416 3.418l.708-.708l-3.418-3.417A6.5 6.5 0 0 0 6.5 0Z"
        ></path>
      </svg>
    );

    finalClass = `${classes}  bg-gray-200 text-gray-800`;
  } else {
    icon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 32 32"
      >
        <path
          fill="currentColor"
          d="M2 2h5v14H2zm21 0H9v14.803l3.042 4.563l.845 5.917A2.01 2.01 0 0 0 14.867 29H15a3.003 3.003 0 0 0 3-3v-6h8a4.005 4.005 0 0 0 4-4V9a7.008 7.008 0 0 0-7-7z"
        ></path>
      </svg>
    );
    finalClass = `${classes}  bg-red-200 text-red-800`;
  }
  return (
    <div className={`${finalClass} flex items-center`}>
      {icon}

      <span className={finalClass}>{sentiment}</span>
    </div>
  );
};
