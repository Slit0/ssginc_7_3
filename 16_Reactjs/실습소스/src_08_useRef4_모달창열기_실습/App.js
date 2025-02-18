import logo from './logo.svg';
import './App.css';

import {forwardRef, useRef, useImperativeHandle} from 'react'

//자식
const Child = forwardRef(function(props, ref){

  // modal을 보여주는 자식함수(App의 handleEvent가 호출할 예정)
  function modal_show(){
    modal_dialog.current.showModal()
  }

  // 자식함수 등록
  useImperativeHandle(ref,()=>({modal_show}));

  //modal 참조하는 ref 작성
  const modal_dialog = useRef(null)

  return(
    <>
       <dialog ref={modal_dialog} >
        <p>Greetings, one and all!</p>
        <form method="dialog">
          <button>OK</button>
          <button>close</button>
        </form>
      </dialog> 
    </>
  );
});

// 부모
function App() {
  const modal_ref = useRef(null)

  function handleEvent(){
    modal_ref.current.modal_show()
  }

  return (
    <div className="App">
    <button onClick={handleEvent}>모달열기</button>
      <Child ref={modal_ref}/>
    </div>
  );
}

export default App;
