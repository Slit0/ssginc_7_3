import styled from 'styled-components'

const ButtonOne = styled.button`
                    color:${(props)=>props.$btnColor||'red'};
                    font-size:2rem
                  `;

function Home() {
  return (
    <div>
      <button>OK</button>
      <hr/>
      <ButtonOne>OK2</ButtonOne>
      <ButtonOne $btnColor="blue">OK3</ButtonOne>
    </div>
  );
}

export default Home;
