import React, { Component, Fragment } from "react";

import "./form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      name: "",
      surename: "",
      age: this.props.age,
    };
  }

  componentDidMount() {
    console.log("mount");
    this.inputRef.current.focus();
  }

  componentDidUpdate() {
    console.log("update");
  }

  componentWillUnmount() {
    console.log("willUnmount");
  }

  // функция для кнопки фокуса на первое поле name
  focusInput = () => {
    this.inputRef.current.focus();
  }

  // Оптимизация методов установки имени и фамилии (т.к они делают по сути одно и тоже)
  setUserInfo = (e) => {
    this.setState({
      [e.currentTarget.name]: e.target.value,
    });
  };

  //Функция установки возраста
  setAge = (e) => {
    const userAge = e.target.value;
    if (userAge > 70) {
      this.setState({
        age: "Вам пора на пенсию...",
      });
    }
    if (userAge > 18 && userAge < 70) {
      this.setState({
        age: +userAge,
      });
    }
  };

  // Метод изменения возраста с деструктурезацией
  plusAge = (e) => {
    e.preventDefault();
    if (this.state.age < 70) {
      this.setState(({ age }) => ({
        age: +age + 1,
      }));
    }
  };
  // Метод изменения возраста без деструктурезации
  minusAge = (e) => {
    e.preventDefault();
    if (this.state.age > 18) {
      this.setState((state) => ({
        age: +state.age - 1,
      }));
    }
  };

  // Очистить форму
  resetForm = (e) => {
    e.preventDefault();
    this.setState({
      name: "",
      surename: "",
      age: "",
    });
  };

  render() {
    // статус прокинул через props
    const { access } = this.props;
    // Остальные данные из state
    const { name, surename, age } = this.state;

    // вынес логику проверки кнопки отправить чуть выше (саму проверку делаю в самой кнопке)
    let disableBtn = null;
    if (name.trim().toLocaleLowerCase() == "реакт" || surename.trim().toLocaleLowerCase() == "реакт") {
      disableBtn = true;
    }

    return (
      <Fragment>
        <form className="form">
          <h1 className="form_title">Ваша персональная анкета:</h1>
          <div className="user_status">Ваш статус: {access}</div>
          <div className="form_user_info">
            {" "}
            Ваше имя:
            <span className="form_user_name"> {name}</span>
          </div>
          <div className="form_user_info">
            {" "}
            Ваша фамилия:
            <span className="form_user_surename"> {surename}</span>
          </div>
          <div className="form_user_info">
            {" "}
            Ваш возраст:
            <span className="form_user_age"> {age}</span>
          </div>
          <input
            className="input"
            type="text"
            placeholder="Введите ваше имя"
            name="name"
            value={name}
            onChange={this.setUserInfo}
            ref={this.inputRef}
          />
          <input
            className="input"
            type="text"
            placeholder="Введите вашу фамилию"
            name="surename"
            value={surename}
            onChange={this.setUserInfo}
          />
          <input
            className="input"
            type="number"
            placeholder="Введите ваш возраст"
            name="age"
            value={age}
            onChange={this.setAge}
          />
          <button onClick={this.minusAge} className="minus_age">
            возраст -{" "}
          </button>
          <button onClick={this.plusAge} className="plus_age">
            возраст +{" "}
          </button>
          <div className="btn_group">
            <button
              className="btn_form btn_form_submit"
              // отключение кнопки по введенной строке
              disabled={disableBtn ? true : null}
            >
              Отправить
            </button>
            <button onClick={this.resetForm} className="btn_form">
              Очистить
            </button>
            <a 
              className="btn_form btn_form_focus"
              onClick={this.focusInput}>Фокус</a>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default Form;
