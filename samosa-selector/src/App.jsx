import './App.css';
import samosa from './assets/samosa.png'

const App = () => {

  return (
    <div className="App">
      <h1>Samosa Selector</h1>
      <h2>Count:</h2>
      <img className="samosa" src={samosa} />
    </div>
  )
}

export default App