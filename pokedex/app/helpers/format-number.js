import { helper } from '@ember/component/helper';

export function formatNumber([number]/*, hash*/) {
  return ('000' + number).slice(-3);
}

export default helper(formatNumber);
