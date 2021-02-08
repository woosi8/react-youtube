import React, { useEffect, useState } from "react";
import SearchHeader from "./components/search_header/serach_header";
import VideoList from "./components/video_list/video_list";
import styles from "./app.module.css";
function App() {
	const [videos, setVideos] = useState([]); //펑션에서 state를 사용하게 하는 usestate API [변수데이터저장, 업데이트 함수]
	const search = (query) => {
		const requestOptions = {
			method: "GET",
			redirect: "follow",
		};

		fetch(
			`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyDrnkGUQDzgHrAdkFYoT1aGE7Ds_Go3P94\n`,
			requestOptions
		)
			.then((response) => response.json())
			.then(
				(result) =>
					result.items.map((item) => ({ ...item, id: item.id.videoId })) //id만 변경해준다
			) // search해서 얻어오는 item의 id를 변환해주기 (포스트맨에서 보면 item의 id를 primitive 아닌  object로 받아온다. 문자열로 변환해준다)
			// 왜냐면 mostPopluar는 문자열로 받아오기때문에 일치시켜야 한다
			// *추가설명 우리의 경우에는 mostPopular와 keyword search 두가지다 네트워크 요청으로 받아온 데이터를 동일하게 컴포넌트에서 사용하죠~?
			// 그래서 컴포넌트가 어떤 경우를 사용하더라도, 동일한 데이터를 받아서 동일한 코드로 일을 수행하기 위해서 다르게 id.videoId, id 이렇게 두지 않고 둘다 id로 접근 할 수 있게 두었어요 :)
			.then((items) => setVideos(items))
			.catch((error) => console.log("error", error));
	};

	// 콜백 (컴포넌트가 마운트 될때나 업데이트델때마다 호출되는 콜백함수)
	useEffect(() => {
		//포스트맨에서 mostpopuler 자바스크립트 패치 따오기
		const requestOptions = {
			method: "GET",
			redirect: "follow",
		};

		fetch(
			"https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDrnkGUQDzgHrAdkFYoT1aGE7Ds_Go3P94\n",
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => setVideos(result.items))
			.catch((error) => console.log("error", error));
	}, []); // 마운트가 되었을때만 호출되게 [호출되기 원하는 변수의 목록]추가 ([] 비어있으면 한번만 호출해라)
	return (
		<div className={styles.app}>
			<SearchHeader onSearch={search} />
			<VideoList videos={videos} />;
		</div>
	);
}

export default App;
