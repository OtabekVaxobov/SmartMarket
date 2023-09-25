import ListOfData from './components/ListOfData.jsx';
import Login from './components/Login.jsx';
import SearchBox from './components/SearchBox.jsx';

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
