
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';
import data from './data';
function App() {
  // console.log(data);
  const newCard= data.map(item=>{
    return (<Card 
    img={item.coverImg} 
    rating={item.stats.rating}
    reviewCount={item.stats.reviewCount}
    location={item.location}
    title={item.title}
    price={item.price} />);
  })
  return (
    <>
       <Navbar />
       <Hero />
       {newCard}
      
    </>
  
  );
}

export default App;
