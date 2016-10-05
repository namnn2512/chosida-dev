'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN: '',
  SESSION_SECRET: "chosida-secret",

  FACEBOOK_ID: '658442930940076',
  FACEBOOK_SECRET: 'e9332819c8c7e12ef78d315b1824c7cd',

  GOOGLE_ID: '403136864361-ecso61meoqqpk96ju75thjrq8tqphif4.apps.googleusercontent.com',
  GOOGLE_SECRET: 'r6JiefbC7sjcl8-FEGsvsbWn',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
