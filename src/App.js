import './App.css';
import Bmilist from './components/Bmilist';
import Bmiscore from './components/Bmiscore';
import Form from './components/form'

function App() {
let bmi = 18;
const changeBmi = () =>{
  bmi = 19;
 }
  return (
    <>
   <div>BMI calculator</div>
   <div>my bmi is {bmi} </div>
   <botton onClick={changeBmi} >click</botton>
   <Form/>
   <Bmiscore/>
   <Bmilist/>
   </> 
  );
}

export default App;
