# **Youtube** (React)

## Introduction

\*components

- search_header
  onSearch로 App에 전달
  input에 onKeyPress 발생 시 onClick에 handleSearch(입력값을 onSearch에 전달하는 함수) 함수 실행
  button에 onClick 발생 시 onClick입력값을 전달하는 handleSearch 함수 실행

- video_list
  videos, selectVideo, 그리고 selectedVideo 선택시 list를 아니면 grid를 보이는 display 전달
  serch or mostPopular의 데이터를 map으로 하나씩 VideoItem.jsx에 전달

- video_item

- video_detail

\*service
-youtube.js

App

- vidoes : 비디오 리스트 API로 받아와서 펼치기(useEffect)
  useEffect:리액트에게 렌더링 후 컴포넌트가 무언가를 해야 한다고 지시.
  랜더링 후 mostPopular(youtube클래스)를 실행한다

- selectedVide : 선택된 비디오 보여주기
- search : SearchHeader에서 input,button이벤트(검색) 발생시 onSearch에 입력값을 가져와서 const search가 실행되어 selectedVideo에 저장

## ☎️ Contacts

- E-mail: [tmfvmehek@gmail.com](mailto:tmfvmehek@gmail.com)
- LinkedIn: [Hyuck Choi](https://www.linkedin.com/in/hyuck-choi-77923512b/)
- **Github** : [woosi8](https://github.com/woosi8)
- Portfolio : [FrontEnd](https://woosi8.github.io/Frontend_Web_Developer/)

## 📁 My Work

### - HTML,CSS

- [CSS_Compilation](https://github.com/woosi8/css_compilation/tree/master/Simple_Css): compile simple css examples
- [Scroll Show](https://github.com/woosi8/css_compilation/tree/master/scroll-show): Scroll animation by Jquery
- [Clone Web Site with Jquery](https://github.com/woosi8/Css-Waxom): clone a desined site with Jquery
- [Grid](https://github.com/woosi8/css_compilation/tree/master/Grid): WinForm basic grid sample and responsive web

### - JavaScript

- [JS_Compilation](https://github.com/woosi8/js_compilation/tree/master/Examples): compile Accordian,Drag and Drop and Hover by Vanila Javascript
- [JS_Games](https://github.com/woosi8/js_compilation/tree/master/Games): built Games(lottery,baseball, rock scissor paper) by Vanila Javascript
- [JS_ChracterShow](https://github.com/woosi8/js_compilation/tree/master/Character%20Show): working on
