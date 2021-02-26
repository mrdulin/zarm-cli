import execa from 'execa';
import { getProjectPath } from './utils';

export interface ITestConfig {
  mode: 'native';
  updateSnapshot: boolean;
  coverage: boolean;
  setupFilesAfterEnv: string;
  testFile: string;
}

export default ({ mode, updateSnapshot, coverage, setupFilesAfterEnv, testFile }: Partial<ITestConfig>) => {
  const configFile = require.resolve(`./config/jestConfig/${mode === 'native' ? 'index.native' : 'index'}`);
  const args = [require.resolve('jest/bin/jest'), `--config=${configFile}`, `--setupFilesAfterEnv=${getProjectPath(setupFilesAfterEnv)}`];
  updateSnapshot && args.push('-u');
  coverage && args.push('--coverage');
  testFile && args.push(testFile);
  execa('node', args, { stdio: 'inherit' });
};
