# Youtube with React <img align="center" alt="React" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />

## Introduction

유튜브 APIs를 이용해 실제로 서버에서 데이터를 받아와 키워드 검색, 비디오 재생등 유튜브 프론트엔드를 클론코딩.

React Hooks + PostCSS를 활용하고, API 사용법, Postman, Restful API, Dependency Injection을 사용한다.

## 📁 Components

### app

- vidoes : 비디오 리스트 API로 받아와서 펼치기(useEffect)
  useEffect : 리액트에게 렌더링 후 컴포넌트가 무언가를 해야 한다고 지시.
  랜더링 후 mostPopular(youtube클래스)를 실행한다
- selectedVideo : 선택된 비디오 보여주기
- search : SearchHeader에서 input,button이벤트(검색) 발생시 onSearch에 입력값을 가져와서 const search가 실행되어 selectedVideo에 저장

### search_header

- onSearch값을 app에 전달
- input에 onKeyPress 발생 시 이벤트 함수 handleSearch(입력값을 onSearch에 전달하는 함수)실행
- button에 onClick 발생 시 onClick입력값을 전달하는 handleSearch 함수 실행

### video_list

- videos, selectVideo, 그리고 selectedVideo 선택시 list를 아니면 grid를 보이는 display 전달
- serch or mostPopular의 데이터를 맵핑으로 VideoItem에 전달

### video_item

- video, onVideoClick,display 값을 받아온다
- video thumbnails,title,channel을 받아준다.
- display가 list를 받아오면 list, 아니면 grid를 받아준다
- video onClick 클릭시 app에 selectVideo에 선택된 video값이 전달.

### video_detail

- 선택된 비디오를 보여주고 설정하는 API.
- video_item에서 onClick이 있으면 video가 video_list로 전달되서 app에 selectVideo에 설정된다. 그래서 selectedVideo에 값이 있게됨으로 VideoDetail에 video가 전달되서 VideoDetail이 실행된다.
- VideoDetail에 iframe을 youtube에서 가져와 className, src를 나의 정보로 바꿔준다.

### service

- 다른 API에서 공통적으로 쓰이는 key,getRequestOptions 값을 state로 정의한다.
- mostPopular, serch를 async로 promise를 설정 해 놓는다.
- mostPopular,search함수에 fetch되는 주소값은 Youtube API에서 가져온 값으로 key는 index.js에 변수 youtube에서 가져온다.
  env파일에 나의 고유 key 값을 넣어서 gitignore시켜서 외부에 유출되지 않게 보호해준다.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
