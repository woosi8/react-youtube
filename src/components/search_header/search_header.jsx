import React, { memo, useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = memo(({ onSearch }) => {
	const inputRef = useRef(); // 메모 API 랜더링되어도 동일한 참조값을 유지해준다
	const handleSearch = () => {
		const value = inputRef.current.value;
		onSearch(value);
	};
	const onClick = () => {
		handleSearch(); // 클릭하면 함수가 발생하여 입력값을 key로 전달한다
	};

	const onKeyPress = (event) => {
		if (event.key === "Enter") {
			handleSearch();
		}
	};

	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				{/* <img className={styles.img} src="./images/logo.png" alt="logo" /> */}
				<img
					className={styles.img}
					src={process.env.PUBLIC_URL + "/images/logo.png"}
					alt="logo"
				/>
				<h1 className={styles.title}>Youtube</h1>
			</div>
			<input
				ref={inputRef}
				className={styles.input}
				type="search"
				placeholder="Search..."
				onKeyPress={onKeyPress}
			/>
			<button className={styles.button} type="submit" onClick={onClick}>
				<img
					className={styles.buttonImg}
					src={process.env.PUBLIC_URL + "/images/search.png"}
					// src={"./images/search.png"}
					alt="search"
				/>
			</button>
		</header>
	);
});

export default SearchHeader;
