

class Axios {
  defaults:any
  interceptors:any

  constructor(instanceConfig:any) {
    this.defaults = instanceConfig;
    this.interceptors = {
    
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
  }
}
