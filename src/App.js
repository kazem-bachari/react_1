import './App.css';
import 'jquery.js';
import 'animate.css';
import Carousel from './components/carousel/carousel';

const { JSDOM } = require("jsdom");
const { window } = new JSDOM("");
const $ = require("jquery")(window);
function App() {
  const categoris = [
    {id:1,categoty:'pc'},
    {id:2,categoty:'phone'},
    {id:3,categoty:'laptob'},
    {id:4,categoty:'tablet'},
  ]
  return (
    <>
      <div className="App">
        {categoris.map((category) =>
          <p className={`bg-blue-400 capitalize m-3 p-2 animate__bounceInLeft  text-white  tracking-widest text-center cursor-pointer hover:bg-red-400 }}} transition-all duration-500  ${category.id == 1 ? 'border border-3' : null}}`}>{category.categoty}</p>
        )}
      </div>
      <Carousel />
    </>
  );
 
}

export default App;
