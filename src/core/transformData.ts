'use strict';

import * as utils from './../utils'

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
export default function transformData(data:any, headers:any, fns:any) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn:any) {
    data = fn(data, headers);
  });

  return data;
};
