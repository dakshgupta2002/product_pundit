export const Sentiment = ({ sentiment }: { sentiment: string }) => {
  const classes =
    "inline-block px-2 py-1 leading-none  rounded-full font-semibold uppercase tracking-wide text-xs";
  let finalClass = classes;
  if (sentiment === "positive") {
    finalClass = `${classes} bg-green-200 text-green-800`;
  } else if (sentiment === "neutral") {
    finalClass = `${classes}  bg-orange-200 text-orange-800`;
  } else {
    finalClass = `${classes}  bg-red-200 text-red-800`;
  }
  return <span className={finalClass}>{sentiment}</span>;
};
