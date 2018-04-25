import * as request from './request';

const CONFIG = { request };

export const config = key => {
  if (!key) {
    return;
  }
  const map = key
    .split('.')
    .map(name => `['${name}']`)
    .join('');
  const reader = new Function(
    'data',
    ['var ret', 'try{', `   ret = data${map}`, `}catch(e){}`, 'return ret'].join('\n')
  );
  return reader(CONFIG);
};

export default CONFIG;
