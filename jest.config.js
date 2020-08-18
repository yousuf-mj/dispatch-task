module.exports = {
    roots: ["<rootDir>/src"],
    testEnvironment: "node",
    transform: {
        "^.+\\.(js|ts|tsx)$": "ts-jest",
    },
    testMatch: ["**/**/*.test.+(ts|tsx|js)"],
};
