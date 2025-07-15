import '@testing-library/jest-dom';

beforeAll(() => {
  jest.useFakeTimers()
});

afterAll(() => {
  jest.useRealTimers()
});