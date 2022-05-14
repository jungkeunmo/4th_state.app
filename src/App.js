import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// State란 ?
// 1. 객체 또는 데이터를 저장할 수 있는 저장공간 이다.
// 2. ⭐️ 값이 변경되면, 화면이 다시 그려진다. (re-rendering)
// 3. 값을 변경하려면, 꼭! 정해진 방법대로만 할 수 있다. (set함수)

// 문법 
// import { useState } from "React"; <- 훅 
// 
// const [스테이트명, 스테이트 변경함수명] = useState(초기값); 
// => const [value, serValue] = useState(null);

// value라는 이름의 스테이트가 만들어졌고,
// value의 값을 변경하려면 setValue라는 함수를 사용해야 한다.
// value의 초기값은 null 이다.


function App() {

  const [value, setValue] = useState("Hello");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{value}</p>
        <button onClick={() => setValue("World")}>CLICK</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
