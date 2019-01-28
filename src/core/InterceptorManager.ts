'use strict';
import * as utils from '../utils'

class InterceptorManager {
  handlers:Array<any> = [];

  use(fulfilled:Function, rejected:any) {
    this.handlers.push({
      fulfilled: fulfilled,
      rejected: rejected
    })
    return this.handlers.length-1
  }

  forEach(fn:Function) {
    utils.forEach(this.handlers, function forEachHandler(h:any) {
      if (h !== null) {
        fn(h);
      }
    })
  }
}

export default InterceptorManager;
