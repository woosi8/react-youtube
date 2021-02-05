import React from "react";
import styles from "./video_item.module.css";

// const VideoItem = (props) => <h1>{props.video.snippet.title}</h1>; //여기서 video는 list에 있는 보라 video
const VideoItem = (
	// props.video.snippet을 생략한것
	{ video: { snippet } } //props 반복 하기 싫을때 (디컨스트럭팅)
) => (
	<li className={styles.container}>
		<div className={styles.video}>
			<img
				className={styles.thumbnail}
				src={snippet.thumbnails.medium.url}
				alt="video thumbnail"
			/>
			<div className={styles.metadata}>
				<p className={styles.title}>{snippet.title}</p>
				<p className={styles.channel}>{snippet.channelTitle}</p>
			</div>
		</div>
	</li>
);

export default VideoItem;
