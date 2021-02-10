import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import VideoList from "./components/video_list/video_list";
import SearchHeader from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";

//youtube props를 - index.js에서 설정해주기
function App({ youtube }) {
	const [videos, setVideos] = useState([]); // 리액트훅 function component에서 state 사용하기
	const [selectedVideo, setSelectedVideo] = useState(null); // 처음에는 null 선택된게 없으니

	const selectVideo = (video) => {
		setSelectedVideo(video);
	};

	//SearchHeader에서 input,button이벤트 발생시 onSearch에 입력값을 가져와서 실행
	const search = (query) => {
		youtube //index에 있는 youtbue key 연결 , youtube.js에 class search 사용
			.search(query) //
			.then((videos) => setVideos(videos));
	};

	useEffect(() => {
		youtube
			.mostPopular() // youtube클래스에서 가져온 mostpopular변수에서 videos를 가져온다
			.then((videos) => setVideos(videos)); //vidoes에 저장
	}, []);
	return (
		<div className={styles.app}>
			<SearchHeader onSearch={search} />
			<section className={styles.content}>
				{selectedVideo && ( //select비디오가 있다면 videodetail을 보여준다
					<div className={styles.detail}>
						<VideoDetail video={selectedVideo} />
					</div>
				)}
				<div className={styles.list}>
					<VideoList
						videos={videos}
						//비디오 클릭시
						onVideoClick={selectVideo} //vidoeList에서 videoItem으로 가서 onClick시 발생된다
						display={selectedVideo ? "list" : "grid"} //selectedVideo가 있으면 list 아니면 grid로
					/>
				</div>
			</section>
		</div>
	);
}

export default App;
