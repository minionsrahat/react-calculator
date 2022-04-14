
import { useReducer } from 'react';
import './App.css';
import Digit from './Components/Digits/Digit';

export const ACTIONS={
  ADD_DIGIT:'add-digit',
  CLEAR:'clear',
  DELETE_DIGIT:'delete-digit',
  CHOOSE_OPERATION:'choose-operation',
  EVALUATION:'evaluation'
}
const reducer=(state,{type,payload})=>{

  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {...state,currenOperend:`${state.currenOperend||""}${payload.digit}`}

    default:
      return state;
      
     
  
  }

}

function App() {
  const [{previousOperend,currenOperend,operation},dispatch]=useReducer(reducer,{});
  return (
   <>

   <div class="container mt-5">
     <div class="row my-5">
       <div class="col-8 mx-auto">

         <div className="grid-container">
           <div className="output">
             <div className="previous-operend">
               {previousOperend}{operation}
             </div>
             <div className="current-operend">
               {currenOperend}
             </div>
           </div>
           <button className='span-2'>AC</button>
             <button>DEL</button>
             <button>÷</button>
             <Digit digit='1' dispatch={dispatch}></Digit>
             <Digit digit='2' dispatch={dispatch}></Digit>
             <Digit digit='3' dispatch={dispatch}></Digit>
             <button>+</button>
             <Digit digit='4' dispatch={dispatch}></Digit>
             <Digit digit='5' dispatch={dispatch}></Digit>
             <Digit digit='6' dispatch={dispatch}></Digit>
             <button>-</button>
             <Digit digit='7' dispatch={dispatch}></Digit>
             <Digit digit='8' dispatch={dispatch}></Digit>
             <Digit digit='9' dispatch={dispatch}></Digit>
             <button>*</button>
             <button>.</button>
             <Digit digit='0' dispatch={dispatch}></Digit>
             <button className='span-2'>=</button>     
         </div>
         
       </div>
       
     </div>
   </div>
   </>
  );
}

export default App;
