export default {
  async status() {
    return act({
      role: 'template',
      cmd: 'status.test',
      extra: { a: 1 },
    })
      .then((data) => {
        logger.info('========= 3');
        logger.info(data);
        return data;
      })
      .catch((e) => {
        logger.warn(e);
      });
  },
  async test(msg) {
    logger.info('msg: ', framework.seneca.plainMsg(msg));
    return { test: true };
  },
};
