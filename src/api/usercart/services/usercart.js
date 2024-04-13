'use strict';

/**
 * usercart service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::usercart.usercart');
