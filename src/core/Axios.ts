import * as utils from '../utils'
import InterceptorManager from './InterceptorManager'
import mergeConfig from './mergeConfig'

class Axios {
  defaults:any
  interceptors:any

  constructor(instanceConfig:any) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }

  request(...args:Array<any>) {
    let config:any
    if(typeof args[0] === 'string') {
      config = args[1] || {}
      config.url = args[0]
    }else {
      config = args[0] || {}
    }

    config = mergeConfig(this.defaults, config);
    config.method = config.method ? config.method.toLowerCase() : 'get';
    
  }
}

export default Axios