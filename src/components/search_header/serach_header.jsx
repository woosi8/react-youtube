import React, { useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = ({ onSearch }) => {
	//onSearch:  props로 받아와야지 ( 아래에 검색이벤트가 발생하면 onSearch 콜백함수를 불러 app에 query에 전달)
	const inputRef = useRef(); //리액트훅에서 메모를 쓰기위한 useRef
	const handleSearch = () => {
		const value = inputRef.current.value;
		onSearch(value);
	};
	const onClick = () => {
		handleSearch();
	};
	const onKeyPress = (event) => {
		if (event.key === "Enter") {
			handleSearch();
		}
	};
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<img className={styles.img} src="/images/logo.png" alt="logo" />
				<h1 className={styles.title}>Youtube</h1>
			</div>
			<input
				ref={inputRef}
				className={styles.input}
				type="serch"
				placeholder="Search..."
				onKeyPress={onKeyPress}
			/>
			<button className={styles.button} type="submit" onClick={onClick}>
				<img
					className={styles.buttonImg}
					src="/images/search.png"
					alt="search"
				/>
			</button>
		</header>
	);
};
export default SearchHeader;
