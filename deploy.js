/* eslint-env node */
'use strict';
module.exports = function(deployTarget) {
  let ENV = {
    build: {
        localDir: 'build/',
        deleteRemoved: false,
        s3Params: {
          Bucket: 'dighr-react'
        },
    },
    s3:{
      accessKeyId:<IAM USER ACCESS KEY ID>,
      secretAccessKey: <IAM USER ACCESS KEY>,
      region: 'us-east-1',
      sslEnabled: true,
      Bucket:'dighr-react'
    }
    // include other plugin configuration that applies to all deploy targets here
  };
if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }
if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }
if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here
  }
// Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
