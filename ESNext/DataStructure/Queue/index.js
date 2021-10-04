module.exports = class Queue {
  #_data;
  constructor() {
    this._data = [];
  }
  pop() {
    return this._data.shift();
  }

  size() {
    return this._data.length;
  }

  contains(v) {
    return this._data.includes(v);
  }

  push(d) {
    this._data.push(d);
    return this;
  }
};
