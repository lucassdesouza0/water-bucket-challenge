// eslint-disable-next-line import/no-anonymous-default-export
module.exports = {
	preset: "ts-jest",
	testEnvironment: "jest-environment-jsdom",
	verbose: true,
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
	},
	testPathIgnorePatterns: ["/node_modules/", "/.next/"],
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	moduleNameMapper: {
		"@/(.*)": "<rootDir>/src/$1",
		"\\.(css|less|scss|sass)$": "identity-obj-proxy",
		"\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
	},
	setupFilesAfterEnv: ["./jestSetup.ts"],
};
