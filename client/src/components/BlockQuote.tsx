import { faker } from "@faker-js/faker";
import { Sentiment } from "./Sentiment";

function text_truncate(
  str: string,
  length: number | null,
  ending: string | any[] | null
) {
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = "...";
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
}

export const BlockQuote = ({
  text,
  sentiment,
}: {
  text: string;
  sentiment: string;
}) => {
  return (
    <blockquote className="flex h-72 flex-col justify-between bg-white p-12">
      <div>
        <div className="flex gap-0.5 text-green-500">
          <Sentiment sentiment={sentiment} />
        </div>

        <div className="mt-4 h-f">
          <h3 className="text-xl font-bold text-pink-600 sm:text-2xl"></h3>

          <p className="mt-4 text-gray-600">
            {text_truncate(text, 200, "...")}
          </p>
        </div>
      </div>

      <footer className="mt-8 text-gray-500">{faker.name.fullName()}</footer>
    </blockquote>
  );
};
