import getAction from '../getAction';
import { IDefaultAction, IAnyKey } from '../interfaces';

const EXAMPLE: IDefaultAction = Object.freeze({
  firstKey: () => 'do the first thing',
  secondKey: () => 'do the second thing',
  thirdKey: () => 'do the third thing',

  default: () => 'do the default thing',
});

const EXAMPLE_2: IDefaultAction & IAnyKey = Object.freeze({
  anything: () => {
    return {
      any: 'can I do anything',
      more: 'and also more things',
    };
  },

  default: () => 'do the default thing',
});

console.log(getAction()); // throw -> 'not implemented yet'
console.log(getAction('default')); // throw -> 'not implemented yet'
console.log(getAction('nonExistentKey')); // throw -> 'not implemented yet'

console.log(getAction('firstKey', EXAMPLE)); // 'do the first thing'
console.log(getAction('secondKey', EXAMPLE)); // 'do the second thing'
console.log(getAction('thirdKey', EXAMPLE)); // 'do the third thing'
console.log(getAction('fourthKey', EXAMPLE)); // 'do the default thing'
console.log(getAction('nonExistentKey', EXAMPLE)); // 'do the default thing'
console.log(getAction('default', EXAMPLE)); // 'do the default thing'

console.log(getAction('anything', EXAMPLE_2)); // { anything: 'can I do anything', more: 'and also more things', };
console.log(getAction('nonExistentKey', EXAMPLE_2)); // 'do the default thing'
console.log(getAction('default', EXAMPLE_2)); // 'do the default thing'
