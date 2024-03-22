import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components 
import Form from './Components/Form';
import Success from './Components/Success';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/*'} element={<Form />} />
          <Route path={'/form'} element={<Form />}/>
          <Route path={'/success'} element={<Success />} />        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
