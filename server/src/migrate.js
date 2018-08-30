import bluebird from 'bluebird';
import lodash from 'lodash';
// eslint-disable-next-line import/no-extraneous-dependencies
import migrate from 'migrate';

global.Promise = bluebird;
global.lodash = lodash;

process.chdir(__dirname);

let set = migrate.load('migrations/.migrate', 'migrations');

// eslint-disable-next-line no-console
set.up(console.info);
