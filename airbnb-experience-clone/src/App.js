
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';
import data from './data';
function App() {
  // console.log(data);
  const newCard= data.map(item=>{
    return (<Card 
    key={item.key}
    img={item.coverImg} 
    rating={item.stats.rating}
    reviewCount={item.stats.reviewCount}
    location={item.location}
    title={item.title}
    price={item.price}
    openSpots={item.openSpots} />);
  })
  return (
    <>
       <Navbar />
       <Hero />
       <div className='cardContainer'>
       {newCard}
       </div>
      
    </>
  
  );
}

export default App;
