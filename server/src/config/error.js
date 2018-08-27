import buildError from '@ofa2/ofa2-error';

global.Errors = buildError({
  Unknown: 'unknown error, need feedback',
  ParamsRequired: 'params required',
});
