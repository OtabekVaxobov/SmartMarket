import * as React from 'react';
import { useContext } from "react";
import ListOfData from './components/ListOfData';
import Login from './components/Login';
import SearchBox from './components/SearchBox';
function App() {
  return (
    <div className="grid h-screen place-items-center">

      <SearchBox />
      <ListOfData />
      <Login />
    </div>
  );
}
export default App;
