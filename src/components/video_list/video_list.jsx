import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

const VideoList = ({ videos, onVideoClick, display }) => (
	<ul className={styles.videos}>
		{videos.map((video) => (
			<VideoItem
				key={video.id} //포스트맨에서 보면 key가 아이디로 안들어가있어서
				video={video}
				onVideoClick={onVideoClick} //app에 selectVideo로 연결
				display={display}
			/>
		))}
	</ul>
);

export default VideoList;
