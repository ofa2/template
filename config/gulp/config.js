/** **** start: 用户配置********** */
let alterableSetting = {
  // prod 的 基础路径
  basePath: 'dist/',
  publicPath: 'dist/public/',
  viewPath: 'dist/views/',
};

function getCommonConfig() {
  return {
    clean: {
      // 清除生成文件的路径
      src: [`${alterableSetting.basePath}**/*`],
    },
    server: {
      src: ['**/*', '!public/**/*', '!views/**/*', '!index.html'],
      opt: {
        cwd: 'src/',
        base: 'src/',
      },
      dest: alterableSetting.basePath,
    },
    nodemon: {
      config: {
        script: 'src/index.js',
        ext: 'js',
        watch: ['src/'],
        env: {
          NODE_ENV: 'development',
        },
        exec: 'babel-node',
      },
      events: {
        crash: true,
        start: false,
      },
    },
  };
}

module.exports = {
  alterableSetting,
  getCommonConfig,
};
