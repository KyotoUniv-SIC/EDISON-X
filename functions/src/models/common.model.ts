/**
 * ランダムな整数の生成
 * @param  {Number} min min以上
 * @param  {Number} max max未満
 * @return {Number}
 */
export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
