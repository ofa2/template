export default {
  async status(ctx) {
    let { body } = ctx.request;
    logger.info('body: ', body);
    return {
      success: true,
    };
  },
};
