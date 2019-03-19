'use strict';

/**
 * Introduce.js controller
 *
 * @description: A set of functions called "actions" for managing `Introduce`.
 */

module.exports = {

  /**
   * Retrieve introduce records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.introduce.search(ctx.query);
    } else {
      return strapi.services.introduce.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a introduce record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.introduce.fetch(ctx.params);
  },

  /**
   * Count introduce records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.introduce.count(ctx.query);
  },

  /**
   * Create a/an introduce record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.introduce.add(ctx.request.body);
  },

  /**
   * Update a/an introduce record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.introduce.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an introduce record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.introduce.remove(ctx.params);
  }
};
