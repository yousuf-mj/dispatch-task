module.exports = {
    roots: ["<rootDir>/src"],
    transform: {
        "^.+\\.(js|ts|tsx)$": "ts-jest",
    },
    testMatch: ["**/**/*.test.+(ts|tsx|js)"],
};
