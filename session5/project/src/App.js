import logo from './logo.svg';
import './App.css';
import GitUser from './components/GitUser';
import Home from './components/Home'
import Store from './components/Store';
import News from './components/News';
import Task from './components/Task';
import SingleNews from './components/SingleNews';

function App() {
  const isSingleNewsPage = window.location.pathname.startsWith('/news');
  return (
    <>
      {/* <GitUser /> */}
      {/* <Home /> */}
      {/* <Store /> */}
      {/* <News /> */}
      {/* <Task /> */}
      <div>
        {isSingleNewsPage ? <SingleNews /> : <Task />}
      </div>
    </>
  );
}


export default App;
