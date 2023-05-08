import * as React from "react";
import ListOfData from "./components/ListOfData";
import SearchBox from "./components/SearchBox";
function App() {
  return (
    <div className="grid h-screen place-items-center">
      <SearchBox />
      <ListOfData />
    </div>
  );
}
export default App;
