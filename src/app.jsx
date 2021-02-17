import React, { useCallback, useEffect, useState } from "react";
import styles from "./app.module.css";
import VideoList from "./components/video_list/video_list";
import SearchHeader from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";

//youtube props를 - index.js에서 설정해주기
// app은 펀션 컴포넌트이기 떄문에  관련된 state나 props이 바뀌면 우리가 정의한 맴버변수(아래 콜백함수들)가 다시 만들어 진다.
function App({ youtube }) {
	const [videos, setVideos] = useState([]); // 리액트훅 function component에서 state 사용하기
	const [selectedVideo, setSelectedVideo] = useState(null); // 처음에는 null 선택된게 없으니

	//VideoList onVideoClick이 발생되면 selectvideo를 받아온다
	const selectVideo = (video) => {
		setSelectedVideo(video);
	};

	//SearchHeader에서 input,button이벤트 발생시 onSearch에 입력값을 가져와서 실행
	const search = useCallback(
		(query) => {
			//useCallback써준이유 ? app은 펀션 컴포넌트이기 떄문에 search_header에 memo를 해줘도 계속 랜더링 되서 이를 방지하기위해 (하지만 메모리에 저장해놓기 때문에 메모리에 영향을 줄수있다)
			// 자식 컴포넌트에 prop으로 전달할때 계속 새로운 콜백을 전달하면 자식 컴포넌트가 계속 리랜더링이 발생하기 떄문에 꼭 필요할때만 사용해야한다
			setSelectedVideo(null); // 상태 업데이트, 항상 먼저 초기화 되기. 검색이 됐다면 다시 검색시 이전 목록이 뜨게하기
			youtube //index에 있는 youtbue key 연결 , youtube.js에 class search 사용
				.search(query) //
				.then((videos) => {
					setVideos(videos);
				});
		},
		[youtube]
	); //[dependency list] 비어놓으면 한번만 만들고 계속 동일한 object를 반복해서 쓴다

	// useEffect:리액트에게 렌더링 후 컴포넌트가 무언가를 해야 한다고 지시.
	useEffect(() => {
		youtube
			.mostPopular() // youtube클래스에서 가져온 mostpopular변수에서 videos를 가져온다
			.then((videos) => setVideos(videos)); //vidoes에 저장
	}, [youtube]);
	return (
		<div className={styles.app}>
			<SearchHeader onSearch={search} />
			<section className={styles.content}>
				{selectedVideo && ( //selectedVideo 있다면 선택된 videodetail을 보여준다
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
