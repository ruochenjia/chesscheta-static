const clientConfig = {
	server: "https://a54.chesscheta.gq/",
	debug: true,
	cacheName: "chesscheta",
	cacheVersion: "0.2.2",
	cacheList: [],
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET",
		"Access-Control-Allow-Credentials": "true",
		"Cross-Origin-Embedder-Policy": "require-corp",
		"Cross-Origin-Opener-Policy": "same-origin",
		"Referrer-Policy": "no-referrer",
		"X-Content-Type-Options": "nosniff",
		//"X-Frame-Options": "SAMEORIGIN"
	}
};

export { clientConfig };
