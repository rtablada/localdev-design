import { helper } from '@ember/component/helper';

export function firstLetter([str]/*, hash*/) {
  return str[0];
}

export default helper(firstLetter);
