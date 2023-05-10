import React, { useState, useEffect } from "react";
import { Idata } from "../types/types";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  QueryCache,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import axios from "axios";

// function Fetcher() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/posts`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(
//             `This is an HTTP error: The status is ${response.status}`
//           );
//         }
//         return response.json();
//       })
//       .then((actualData) => {
//         setData(actualData);
//         //console.log(actualData)
//         setError(null);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setData(null);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>API Posts</h1>
//       {loading && <div>A moment please...</div>}
//       {error && (
//         <div>{`There is a problem fetching the post data - ${error}`}</div>
//       )}
//       <ul>
//         {data &&
//           data.map(({ id, title }: Idata) => (
//             <li key={id}>
//               <h3>{title}</h3>
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// }

// export default Fetcher;

export default function DataFetcher() {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.data)
        .then(setFilteredList(data)),
  });

  const [filteredList, setFilteredList] = useState(data);

  const filterBySearch = (event: { target: { value: any } }) => {
    // Access input value
    const query = event.target.value;
    // Create copy of item list
    let updatedList = [...filteredList];

    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return (
        item.body.toLowerCase().includes(query.toLowerCase()) ||
        item.title.toLowerCase().includes(query.toLowerCase())
      );
    });
    // Trigger render with updated values

    setFilteredList(updatedList);
  };
  if (isLoading) return <>{"Loading..."}</>;

  if (error) return <>{"An error has occurred: " + error}</>;

  console.log({ filteredList });
  return (
    <>
      <form className="max-w-sm px-4 m-10">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
            onChange={filterBySearch}
          />
        </div>
      </form>
      {filteredList &&
        filteredList.map(({ id, title, body }: Idata) => (
          <div className="" key={id}>
            <p className="">{title}</p>
            <p>{body}</p>
          </div>
        ))}
    </>
  );
}
