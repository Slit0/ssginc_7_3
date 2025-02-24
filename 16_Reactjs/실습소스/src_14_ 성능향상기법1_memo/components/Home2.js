import {memo} from 'react'

const Home2 = memo(({data}) =>{

  console.log("Home2");
  return (
    <div >
      <h2>Home2 컴포넌트</h2>
      값:{data}
    </div>
  );
});

export default Home2;
