
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';

function App() {
  return (
    <>
       <Navbar />
       <Hero />
       <Card 
       img="kz.jpg" 
       rating="5.0"
       reviewCount={6}
       country="USA"
       title="Life lessons with Kate Zaferes"
       price={136}/>
    </>
  
  );
}

export default App;
