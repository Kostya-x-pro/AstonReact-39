import Form from '../form/form';

import './app.css';


// функциональный компонент
function App() {
  return (
    <div className="app">
      <Form access="Клиент" age={18}/>
    </div>
  )
}

export default App;

