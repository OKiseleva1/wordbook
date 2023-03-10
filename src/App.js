import './App.css';
import data from './components/data.json';
import Card from './components/card/Card';
import Footer from './components/footer/footer';
import Header from './components/header/Header';

console.log(data);




function App() {
  return (
    <div className="App">
      <Header />
      {data.map(item =>
        <Card item={item} key={item.id} />)}
      <Footer />
    </div>
  );
}

export default App;
