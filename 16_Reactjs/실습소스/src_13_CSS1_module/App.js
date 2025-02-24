
import styles from './App.module.css';
import Home from './components/Home';


function App() {
  return (
    <div>
      <p className={styles.menu}>App</p>
      <hr/>
      <Home />
    </div>
  );
}

export default App;
