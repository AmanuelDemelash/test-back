import { TestmidMiddleware } from './testmid.middleware';

describe('TestmidMiddleware', () => {
  it('should be defined', () => {
    expect(new TestmidMiddleware()).toBeDefined();
  });
});
