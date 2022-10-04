export default class ErrorRepository {
  constructor() {
    this.errorDict = new Map();
    this.errorDict.set('01', 'error1');
    this.errorDict.set('02', 'error2');
    this.errorDict.set('03', 'error3');
  }

  translate(code) {
    return this.errorDict.get(code);
  }
}

