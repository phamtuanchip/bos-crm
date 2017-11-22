export default class Utils{
  constructor(){
    const BASE_URL = 'http://man-std.mn.com.vn';
  } 
}

function wait(ms) {
    return (x) => {
        return new Promise(resolve => setTimeout(() => resolve(x), ms));
    };
}

export { wait }