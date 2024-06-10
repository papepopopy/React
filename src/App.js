// import bootstrap from "bootstrap"
// import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap.css"
import './App.css';
import Controller from "./component/Controller.js"
import Even from "./component/Even.js"
import Viewer from "./component/Viewer.js"
import { useRef, useEffect, useState } from "react"

function App() {
  // useState 변하는 값에 사용
  // useRef : DOM 요소 참조, 컴포넌트 변수

  // 멤버 변수
  const didMountRef = useRef(false);
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")

  // 함수 선언
  const handleSetCount = (value) => {
    setCount(count + value)
  }
  const handlechageText = (e) => {
    // console.log("값의 변화:", e.taget.value)
    setText(e.target.value);
  }

  // 리액트 컴포넌트의 라이프 사이클
  // uesEffect : 변경시 특정 코드 실행하는 리액트 훅
  // useEffect(수행함수, 의존성 배열)
  // useEffect(() => {
  //   console.log("count 값이 변경되었습니다.", count, text)
  // }, [count, text])

  // 업데이트 시점에만 콜백 함수
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
      }
    else {
      console.log("컴포넌트 업데이트")
    }
  })

  // 클린업(Claeanup) 기능 : 특정 함수가 실행 순서 정하기
  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log("1초마다 수행")
    }, 1000);

    return () => {
      console.log("클린업 기능 수행")
      clearInterval(intervalID); // 기존을 다시 처음으로
    }
  })

  // 마운트 시점에만 콜백함수 수행
  useEffect(()=> {console.log("컴포넌트 마운트")},[])

  return (
    <div className="App">
      <div className="container">
        <div className="alert alert-light">
          <h1>Simple Counter</h1>
        </div>
        <section className="alert alert-primary">
          <input className="form-control" value={text} onChange={handlechageText}>
          </input>
        </section>
        <section className="alert alert-warning">
          <Viewer count1={count} />
          {count % 2 == 0 && <Even />}
        </section>
        <section>
          <Controller handleSetCount1={handleSetCount} />
        </section>
      </div>
    </div>
  );
}

export default App;
