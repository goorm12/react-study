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
