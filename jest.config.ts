import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  coverageDirectory: '<rootDir>/coverage/',
  coveragePathIgnorePatterns: ['node_modules', '<rootDir>/packages/**/tests'],
  projects: [
    {
      displayName: 'conversation',
      testMatch: ['<rootDir>/packages/conversation/tests/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', 'tests'],
    },
    {
      displayName: 'sms',
      testMatch: ['<rootDir>/packages/sms/tests/**/*.test.ts'],
      coveragePathIgnorePatterns: ['node_modules', 'tests'],
    },
  ],
  moduleNameMapper: {
    '@eckm/(.+)': '<rootDir>/packages/$1/src',
  },
};

export default config;
