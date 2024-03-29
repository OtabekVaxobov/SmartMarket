import React, { useState, useEffect } from 'react';
import { Idata } from '../types/types';

export function Fetcher() {
  // const itemList = [
  //   'Apple',
  //   'Orange',
  //   'Banana',
  //   'Cherry',
  //   'Milk',
  //   'Peanuts',
  //   'Butter',
  //   'Tomato',
  // ];

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredList, setFilteredList] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
        setFilteredList(actualData);
        //console.log(actualData)
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filterBySearch = (event) => {
    if (event.target.value == '') {
      setData(data);
      return;
    }
    event.preventDefault();
    // Access input value
    const query = event.target.value;
    let filteredList = [...data];
    // Create copy of item list

    // Include all elements which includes the search query
    filteredList = filteredList.filter((item) => {
      return (
        item.body.toLowerCase().includes(query.toLowerCase()) ||
        item.title.toLowerCase().includes(query.toLowerCase())
      );
    });
    // Trigger render with updated values
    setFilteredList(filteredList);

    // Trigger render with updated values
  };

  // const filterBySearch = (event) => {
  //   // Access input value
  //   const query = event.target.value;
  //   // Create copy of item list
  //   var updatedList = [...itemList];
  //   // Include all elements which includes the search query
  //   updatedList = updatedList.filter((item) => {
  //     return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  //   });
  //   // Trigger render with updated values
  //   setFilteredList(updatedList);
  // };

  return (
    <>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
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
            className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-blue-400"
            onChange={filterBySearch}
          />
        </div>
      </form>
      <ul>
        {data &&
          filteredList.map(({ id, title, body }: Idata) => (
            <div className="px-4" key={id}>
              <p className=" bg-slate-200">{title}</p>
              <p>{body}</p>
            </div>
          ))}
      </ul>
    </>
  );
}
