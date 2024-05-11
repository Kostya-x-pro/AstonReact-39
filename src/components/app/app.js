import Form from '../form/form';
import BankAcountsList from '../bankAcountsList/bankAcountsList';

import './app.css';


// функциональный компонент
function App() {
  return (
    <>
      <div className="app">
        <Form access="Клиент" age={18}/>
        <BankAcountsList/>
      </div>
    </>
  )
}

export default App;

