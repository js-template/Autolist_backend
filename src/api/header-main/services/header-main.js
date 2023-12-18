'use strict';

/**
 * header-main service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::header-main.header-main');
