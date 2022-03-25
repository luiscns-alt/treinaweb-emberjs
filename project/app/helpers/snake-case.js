import { helper } from '@ember/component/helper';

export function snakeCase([params]/*, hash*/) {
  return params.toLowerCase().replace(/\s/g, '_');
}

export default helper(snakeCase);
