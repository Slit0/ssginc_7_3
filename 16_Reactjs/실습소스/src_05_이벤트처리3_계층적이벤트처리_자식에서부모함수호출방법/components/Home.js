// Home.js


// 자식 컴포넌트
function Home1(props){
    console.log(props)//{onHandleEvent: ƒ}
    const parent_fun = props.onHandleEvent;

    function handleButtonEvent(){
        parent_fun("홍길동");
    }

    return(
       <>
        <h2>Home 컴포넌트</h2>
        <button onClick={handleButtonEvent}>부모호출</button>
       </> 
    );
}
function Home({onHandleEvent}){
    function handleButtonEvent(){
        onHandleEvent("홍길동");
    }
    return(
       <>
        <h2>Home 컴포넌트</h2>
        <button onClick={handleButtonEvent}>부모호출</button>
       </> 
    );
}
export default Home;