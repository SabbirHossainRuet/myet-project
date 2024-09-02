'use strict';

/**
 * news-and-event service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-and-event.news-and-event');
