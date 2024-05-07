import { Component } from "react";

import './form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surename: '',
      age: this.props.age,
    }
    console.log('constructor');
  }

  // хук подходит для инициализации компонента и сетевых запросов
  componentDidMount() {
    console.log('mount');
  }
  
  // хук подходит для обновления состояния компонента
  componentDidUpdate() {
    console.log('update');
  }
  
  // хук подходит для остановки интервала и для отписок
  componentWillUnmount() {
    // 
    console.log('willUnmount');
  }

  //Функция установки имени (не зависит от предыдущего состояния) 
  setName = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  //Функция установки фамилии
  setSurename = (e) => {
    this.setState({
      surename: e.target.value
    })
  }
  //Функция установки возраста
  setAge = (e) => {
    const userAge = e.target.value;
    if (userAge > 70) {
      this.setState({
        age: 'Вам пора на пенсию...'
      })
    }
    if (userAge > 18 && userAge < 70) {
      this.setState({
        age: +userAge
      })
    }
  }

  // Метод изменения возраста с деструктурезацией
  plusAge = (e) => {
    e.preventDefault();
    if (this.state.age < 70) {
      this.setState(({age}) => ({
        age: +age + 1
      }))
    }
  }
  // Метод изменения возраста без деструктурезации
  minusAge = (e) => {
    e.preventDefault();
    if (this.state.age > 18) {
      this.setState(state => ({
        age: +state.age - 1
      }))
    }
  }

  // Очистить форму
  resetForm = (e) => {
    e.preventDefault();
    this.setState({
      name: '',
      surename: '',
      age: '',
    })
  }


  render() {

    console.log('render');

    // статус прокинул через props
    const {access} = this.props;
    // Остальные данные из state
    const {name, surename, age} = this.state;

    return (
      <form className="form">
        <h1 className="form_title">Ваша персональная анкета:</h1>
        <div className="user_status">Ваш статус: {access}</div>
        <div className="form_user_info"> Ваше имя:
          <span className="form_user_name"> {name}</span>
        </div>
        <div className="form_user_info"> Ваша фамилия:
          <span className="form_user_surename"> {surename}</span>
        </div>
        <div className="form_user_info"> Ваш возраст:
          <span className="form_user_age"> {age}</span>
        </div>
        <input 
          className="input"
          type="text" 
          placeholder="Введите ваше имя" 
          name="name"
          onChange={this.setName} />
        <input 
          className="input" 
          type="text" 
          placeholder="Введите вашу фамилию"
          name="surename"
          onChange={this.setSurename} />
        <input 
          className="input" 
          type="number" 
          placeholder="Введите ваш возраст"
          name="age"
          onChange={this.setAge} />
        <button onClick={this.minusAge} className="minus_age">возраст - </button>
        <button onClick={this.plusAge} className="plus_age">возраст + </button>
        <button onClick={this.resetForm} className="btn_form">Очистить</button>
      </form>
    )
  }
}

export default Form;