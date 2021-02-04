import { mocked } from 'ts-jest/utils';
import fs from 'fs';
import { sync } from 'mkdirp';
import signale from 'signale';
import createTemplate from '../template';

jest.mock('mkdirp');

const syncMocked = mocked(sync);

describe('template', () => {
  afterAll(() => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe('#createTemplate', () => {
    it('should create react component code snippet', () => {
      const openSyncMocked = jest.spyOn(fs, 'openSync').mockReturnValue(1);
      const writeSyncMocked = jest.spyOn(fs, 'writeSync').mockReturnValue(1);
      const infoStub = jest.spyOn(console, 'info').mockReturnValue();
      const signaleSuccessStub = jest.spyOn(signale, 'success').mockReturnValue();
      createTemplate({ compName: 'primary button' });

      expect(syncMocked).toBeCalledWith('components/primary-button');
      expect(syncMocked).toBeCalledWith('components/primary-button/style');
      expect(syncMocked).toBeCalledWith('components/primary-button/__tests__');
      expect(infoStub).toBeCalledWith('   \u001B[32mcreate\u001B[39m components/primary-button/index.tsx');
      expect(infoStub).toBeCalledWith('   \u001B[32mcreate\u001B[39m components/primary-button/demo.md');
      expect(infoStub).toBeCalledWith('   \u001B[32mcreate\u001B[39m components/primary-button/primary button.tsx');
      expect(infoStub).toBeCalledWith('   \u001B[32mcreate\u001B[39m components/primary-button/style/index.tsx');
      expect(infoStub).toBeCalledWith('   \u001B[32mcreate\u001B[39m components/primary-button/style/index.scss');
      expect(infoStub).toBeCalledWith(
        '   \u001B[32mcreate\u001B[39m components/primary-button/__tests__/index.test.jsx',
      );
      expect(infoStub).toBeCalledTimes(6);
      expect(openSyncMocked).toBeCalledTimes(6);
      expect(writeSyncMocked).toBeCalledTimes(6);
      expect(signaleSuccessStub).toBeCalledWith('create component templates successfully!!');
    });
  });
});
