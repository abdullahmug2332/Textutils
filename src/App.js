
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';


function App() {
  return (
    <div className="App" >
      <Navbar about="About" home="Home" contact="Contact"/>
      <Textarea heading="Entre Text Here"/>
    </div>
  );
}

export default App;
