import { useState, useEffect, useRef } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);

  // 업데이트가 되는 순간에만 콜백 함수를 실행하고 싶다면 useRef를 이용해서 사용하면 된다.
  const isMount = useRef(false);

  // 1. 마운트 : 탄생 / 마운트 되었을 때만 딱 최초로 한 번 실행시키고 시픈 코드가 있다면 useEffect를 호출하고, 빈배열은 전달하면 된다.
  useEffect(() => {
    console.log("Mount");
  }, []);

  // 2. 업데이트 : 변화, 리렌더링 / 마운트 될때 한 번 실행하고 리렌더링 될 때마다 실행된다. 아무것도 전달하지 않으면 된다.
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }

    console.log("Update");
  });
  // 3. 언마운드 : 죽음

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
