import logo from './logo.svg';
import './App.css';
import Home from './components/Home';

import { UserContextProvider } from './store/UserContext';

function App() {
  return (
    <div className="App">
    <UserContextProvider>
      <Home />
    </UserContextProvider>
    </div>
  );
}

export default App;
