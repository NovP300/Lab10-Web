
import "./App.css";
import Wish from "./components/Wish" 
import img1 from "./images/f3.png"
import img2 from "./images/f4.png"
import img3 from "./images/f5.png"

function App() {
  return (
    <div>
      <div className="info"> 
        <div className="container2">
          <div className="wrapper-inner2">
            <h2 className="question_p">Что Вам необходимо?</h2>
              <div className="blocks">
                <Wish img={img1} text="Первый блок"></Wish>
                <Wish img={img2} text="Второй блок"></Wish>
                <Wish img={img3} text="Третий блок"></Wish>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
