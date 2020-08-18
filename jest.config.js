module.exports = {
    roots: ["<rootDir>/src"],
    transform: {
        "^.+\\.(js|ts|tsx)$": "ts-jest",
    },
    testMatch: ["**/src/**/*.test.+(ts|tsx|js)"],
};
