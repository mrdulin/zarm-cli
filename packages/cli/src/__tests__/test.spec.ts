import { mocked } from 'ts-jest/utils';
import execa from 'execa';
import testExecutor from '../test';

jest.mock('execa');
const execaMocked = mocked(execa);

describe('test', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('should execute jest command for web module', () => {
    testExecutor({});
    expect(execaMocked).toBeCalledWith(
      'node',
      expect.arrayContaining([
        expect.stringContaining('jest'),
        expect.stringContaining('--config='),
        expect.stringContaining('--setupFilesAfterEnv='),
      ]),
      { stdio: 'inherit' },
    );
  });
  // TODO: Not sure jest command can be used with --coverage and -u options together
  it('should execute jest command with --coverage and -u options', () => {
    testExecutor({ coverage: true, updateSnapshot: true });
    expect(execaMocked).toBeCalledWith(
      'node',
      expect.arrayContaining([
        expect.stringContaining('jest'),
        expect.stringContaining('--config='),
        expect.stringContaining('--setupFilesAfterEnv='),
        expect.stringContaining('-u'),
        expect.stringContaining('--coverage'),
      ]),
      { stdio: 'inherit' },
    );
  });

  it('should run test for a single file', () => {
    testExecutor({ coverage: true, updateSnapshot: true, testFile: './components/__tests__/index.test.js' });
    expect(execaMocked).toBeCalledWith(
      'node',
      expect.arrayContaining([
        expect.stringContaining('jest'),
        expect.stringContaining('--config='),
        expect.stringContaining('--setupFilesAfterEnv='),
        expect.stringContaining('-u'),
        expect.stringContaining('--coverage'),
        expect.stringContaining('./components/__tests__/index.test.js'),
      ]),
      { stdio: 'inherit' },
    );
  });
});
