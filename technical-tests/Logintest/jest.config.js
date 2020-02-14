module.exports = {
    coveragePathIgnorePatterns: ['<rootDir>/build'],
    coverageThreshold: {
        global: {
            branches: 75,
            functions: 75,
            lines: 75,
            statements: 75
        }
    }
};
