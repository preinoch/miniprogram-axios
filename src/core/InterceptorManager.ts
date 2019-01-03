'use strict';
class InterceptorManager {
  handlers:Array<any> = [];

  use(fulfilled:Function, rejected:any) {
    this.handlers.push({
      fulfilled: fulfilled,
      rejected: rejected
    })
    return this.handlers.length-1
  }

  forEach() {
    
  }
}


export default InterceptorManager;
