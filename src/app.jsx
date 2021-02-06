import React, { useEffect, useState } from "react";
import SearchHeader from "./components/serch_header/serch_header";
import VideoList from "./components/video_list/video_list";
import styles from "./app.module.css";
function App() {
	const [videos, setVideos] = useState([]); //펑션에서 state를 사용하게 하는 usestate API [변수데이터저장, 업데이트 함수]
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
			<SearchHeader />
			<VideoList videos={videos} />;
		</div>
	);
}

export default App;
