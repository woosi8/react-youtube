import React, { useEffect, useState } from "react";
import "./app.css";
import VideoList from "./components/video_list/video_list";

function App() {
	const [videos, setVideos] = useState([]); //API
	useEffect(() => {
		// 콜백 (마운트 될때, 업데이트델때마다 호출되는 콜백함수)
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
	return <VideoList videos={videos} />;
}
export default App;
