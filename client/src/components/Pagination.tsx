import { useState } from "react";

export default function Pagination({
  pages=0
}: any) {
  const [activePage, setActivePage] = useState(0);
  const activeListClasses = "block h-8 w-8 rounded border-blue-600 bg-indigo-500 text-center leading-8";
  return (
    <ol className="flex justify-center gap-1 text-xs text-white font-medium">
      {[...Array(pages)].map((p, i) => {
        return <li className={i == activePage? activeListClasses: ""}>
          <p
            className="block h-8 w-8 rounded border border-gray-100 text-center leading-8 cursor-pointer" 
            onClick={(e) => {
              e.stopPropagation();
              setActivePage(i);
            }}
          >
            {i+1}
          </p>
        </li>
      })}
    </ol>
  );
}
