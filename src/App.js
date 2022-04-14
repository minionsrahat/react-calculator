
import './App.css';

function App() {
  return (
   <>

   <div class="container mt-5">
     <div class="row my-5">
       <div class="col-8 mx-auto">

         <div className="grid-container">
           <div className="output">
             <div className="previous-operend">
               12345
             </div>
             <div className="current-operend">
               6789
             </div>
           </div>
           <button className='span-2'>AC</button>
             <button>DEL</button>
             <button>÷</button>
             <button>1</button>
             <button>2</button>
             <button>3</button>
             <button>+</button>
             <button>4</button>
             <button>5</button>
             <button>6</button>
             <button>-</button>
             <button>7</button>
             <button>8</button>
             <button>9</button>
             <button>*</button>
             <button>.</button>
             <button>0</button>
             <button className='span-2'>=</button>     
         </div>
         
       </div>
       
     </div>
   </div>
   </>
  );
}

export default App;
