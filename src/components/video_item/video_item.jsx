import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video, video: { snippet }, onVideoClick, display }) => {
	const displayType = display === "list" ? styles.list : styles.grid;
	return (
		<li
			className={`${styles.container} ${displayType}`}
			onClick={() => onVideoClick(video)} //클릭시  app에 selectVideo로 연결, 선택한 video가 전달됨
		>
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
};

export default VideoItem;
