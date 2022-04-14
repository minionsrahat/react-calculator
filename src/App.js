
import { useReducer } from 'react';
import './App.css';
import Digit from './Components/Digits/Digit';
import Operand from './Components/Operand/Operand';

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  CHOOSE_OPERATION: 'choose-operation',
  EVALUATION: 'evaluation'
}
const reducer = (state, { type, payload }) => {

  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currenOperend: payload.digit,
          overwrite: false
        }
      }
      if (payload.digit === '0' && state.currenOperend === '0') {
        return state;
      }
      if (payload.digit === '.' && state.currenOperend.includes('.')) {
        return state;
      }
      return { ...state, currenOperend: `${state.currenOperend || ""}${payload.digit}` }
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currenOperend == null && state.previousOperend == null) {
        return state;
      }
      if (state.previousOperend == null) {
        return {
          ...state, operation: payload.operation,
          previousOperend: state.currenOperend,
          currenOperend: null
        }

      }
      if (state.currenOperend == null) {
        return {
          ...state,
          operation: payload.operation
        }

      }
      return {
        ...state,
        currenOperend: null,
        previousOperend: evaluate(state),
        operation: payload.operation
      }

    case ACTIONS.CLEAR:
      return {}
    case ACTIONS.EVALUATION:
      if (state.currenOperend == null || state.previousOperend == null || state.operation == null) {
        return state;
      }
      return {
        ...state,
        overwrite: true,
        currenOperend: evaluate(state),
        operation: null,
        previousOperend: null,

      }

    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currenOperend: null,
          overwrite: false
        }
      }
      if (state.currenOperend === null) {
        return state
      }
      if (state.currenOperend.length === 1) {
        return {
          ...state,
          currenOperend: null
        }
      }
  
      return {
        ...state,
        currenOperend: state.currenOperend.slice(0, -1)

      }
    default:
      return state;



  }

}
const evaluate = ({ currenOperend, previousOperend, operation }) => {
  currenOperend = parseFloat(currenOperend)
  previousOperend = parseFloat(previousOperend)
  if (isNaN(currenOperend) || isNaN(previousOperend)) {
    return ''
  }
  let computation = ""
  switch (operation) {
    case "+":
      computation = currenOperend + previousOperend
      break;

    case "-":
      computation = previousOperend - currenOperend
      break;
    case "*":
      computation = currenOperend * previousOperend
      break;
    case "÷":
      computation = previousOperend / currenOperend
      break;
    default:
      break;
  }
  return computation.toString();


}

function App() {
  const [{ previousOperend, currenOperend, operation }, dispatch] = useReducer(reducer, {});
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
              <button className='span-2' onClick={() => dispatch({ type: ACTIONS.CLEAR })}>AC</button>
              <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>DEL</button>
              <Operand operation='÷' dispatch={dispatch}></Operand>
              <Digit digit='1' dispatch={dispatch}></Digit>
              <Digit digit='2' dispatch={dispatch}></Digit>
              <Digit digit='3' dispatch={dispatch}></Digit>
              <Operand operation='*' dispatch={dispatch}></Operand>
              <Digit digit='4' dispatch={dispatch}></Digit>
              <Digit digit='5' dispatch={dispatch}></Digit>
              <Digit digit='6' dispatch={dispatch}></Digit>
              <Operand operation='+' dispatch={dispatch}></Operand>
              <Digit digit='7' dispatch={dispatch}></Digit>
              <Digit digit='8' dispatch={dispatch}></Digit>
              <Digit digit='9' dispatch={dispatch}></Digit>
              <Operand operation='-' dispatch={dispatch}></Operand>
              <Digit digit='.' dispatch={dispatch}></Digit>
              <Digit digit='0' dispatch={dispatch}></Digit>
              <button className='span-2' onClick={() => dispatch({ type: ACTIONS.EVALUATION })}>=</button>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default App;
