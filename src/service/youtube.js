class Youtube {
	constructor(httpClient) {
		this.youtube = httpClient;
	}

	async mostPopular() {
		const response = await this.youtube.get("videos", {
			params: {
				part: "snippet",
				chart: "mostPopular",
				maxResults: 25,
			},
		});
		return response.data.items;
		// axios 라이브러리 자체에서 json시켜준다
	}

	async search(query) {
		const response = await this.youtube.get("search", {
			params: {
				part: "snippet",
				maxResults: 25,
				type: "video",
				q: query,
			},
		});
		return response.data.items.map((item) => ({
			...item,
			id: item.id.videoId,
		}));
	}
}

export default Youtube;
