import logo from './logo.svg';
import './App.css';
import Member from './components/Member';

import { UserContextProvider } from './store/UserContext';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
         <Member />
      </UserContextProvider>
      
    </div>
  );
}

export default App;
