import React, {useState} from 'react';
import './App.css';
import Movies from "./components/Movies";
import Header from "./components/Header";

function App() {
  const [refreshFlag, setRefreshFlag] = useState(false);
  return <>
    <Header refreshMoviesFlag={() => setRefreshFlag(!refreshFlag)}/>
    <Movies refreshFlag={refreshFlag}/>
  </>;
}

export default App;
