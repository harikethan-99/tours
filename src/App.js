import './App.css';
import Content from './content';
import Header from './header';
import Footer from './footer';
function App() {
  return (
    <div className="App">
     <Header/>
     <h2>Fabriquer Memories</h2>
     <h3>Explore with us the world.</h3>
     <Content/>
     <Footer/>
    </div>
  );
}

export default App;
