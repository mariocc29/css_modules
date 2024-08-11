const jestConfig = {
  transform: {
    // "\\.(scss|svg)$": "jest-transform-stub",
    "^.+\\.jsx?$": "babel-jest",
  },
  setupFilesAfterEnv: ["@testing-library/react", "@testing-library/jest-dom"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  roots: ["<rootDir>/src/tests"],
};

module.exports = jestConfig;
