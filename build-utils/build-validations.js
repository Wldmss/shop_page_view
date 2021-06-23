// 앞으로 package.json 수정할때 스크립트에 -env.env플래그가 필요함- 플래그가 있는지 유효성 판단, 플래그 없다면 오류 발생
const chalk = require('chalk'); 
const ERR_NO_ENV_FLAG = chalk.red(
  `You must pass an --env.env flag into your build for webpack to work!`
);

module.exports = {
  ERR_NO_ENV_FLAG
};