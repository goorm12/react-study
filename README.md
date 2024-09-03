# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## 컴포넌트 네이밍 지을 때 첫 글자는 대문자로

- 컴포넌트를 생성하는 함수의 이름은 첫 글자는 대문자로 해야함

- 리액트에서는 내부적으로 컴포넌트로 인정하지 않는다.

#### 하나의 파일에 작성하기보다는 컴포넌트 별로 모듈화로 작성해야 한다.

#### 컴포넌트를 불러올때 ES6 모듈을 쓰지만 확장자를 안써도 불러오기가 가능하다.

## JSX란?

- JavaScript Extensions 자바스크립트의 문법을 확장한 문법
- javascript 와 HTML을 혼용해서 사용할 수 있다.

## JSX 주의 사항

1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
   - 조건문, 반복문은 넣을 수 없다.
2. 숫자, 문자열, 배열 값만 정상적으로 렌더링 된다.
   - true, undefined, null은 오류는 안나지만 나오지는 않는다.
   - 객체를 넣으면 오류가 난다.(점 표기법을 이용해서 문자열이나 숫자 값을 렌더링 하게 하면 된다.)
3. 모든 태그는 닫혀있어야 한다.
   - html에서는 이미지 태그가 닫히지 않아도 문제가 없지만, jsx에서는 닫혀있어야 한다. 셀프 클로징 해야한다.
4. 최상위 태그는 반드시 하나여야만 한다.
   - return 만에 최상위 태그 하나만 허용한다.

## 스타일 설정하는 방법

- 요소에 직접 추가하기

```jsx
<div style={{ backgroundColor: "red" }}>로그인</div>
```

주의사항 : 스타일이름은 첫글자를 대문자로 변경하여 작성한다.(카멜 표기법) border-bottom X -> borderBottom O

하지만 위와 방식으로 하다보면 많아지다보면 가독성이 떨어지기 때문에 별도의 css 파일을 만들어 작업하는게 좋다.

Main.jsx / Main.css
불러오는 방법 import `"./Main.css"` 경로만 불러와도 리액트에서 제공하는 기능이다.

요소의 클래스는 `className`으로 설정하면 된다.
자바스크립트와 HTML을 함께 쓰고 있기 때문에 자바스크립트 예약어인 class를 사용할 수 없다.

## Props란?

컴포넌트에 값을 전달할 수 있음 이러한 값들을 Props(Properties)라고 한다.
이런 props를 이용하면 컴포넌트를 마치 함수를 호출하듯 전달하는 값에 따라서 각각 다른 UI를 렌더링하도록 만들수 있다.
