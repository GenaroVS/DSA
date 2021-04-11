class HashTable {
  constructor(limit = 53) {
    this.map = new Array(limit);
    this.limit = limit;
    this.size = 0;
  }

  /**
   * @param {string} key
   * @param {*} value
   */
  set(key, value) {
    var idx = this.hash(key);
    var hasKey = false;

    if (!this.map[idx]) {
      this.map[idx] = [];
    }

    this.map[idx].forEach(pair => {
      if (pair[0] === key) {
        pair[1] = value;
        hasKey = true;
      }
    });

    if (!hasKey) {
      this.map[idx].push([key, value]);
      this.size += 1;
    }
    if (this.limit * .75 < this.size) {
      this.resize(2);
    }
  }

  /**
   * @param {string} key
   * @returns {* | null}
   */
  get(key) {
    var idx = this.hash(key);

    if (this.map[idx]) {
      var pairs = this.map[idx];
      for (var i = 0; i < pairs.length; i++) {
        if (pairs[i][0] === key) {
          return pairs[i][1];
        }
      }
    }

    return null;
  }

  /**
   * @param {string} key
   */
  delete(key) {
    var idx = this.hash(key);

    if (this.map[idx]) {
      var pairs = this.map[idx];
      for (var i = 0; i < pairs.length; i++) {
        if (pairs[i][0] === key) {
          pairs.splice(i, 1);
          this.size -= 1;
        }
      }
    }

    if (this.limit * .25 > this.size) {
      this.resize(0.5);
    }
  }

  /**
   * @param {number} x Multiplier of resizing
   */
  resize(x) {
    var oldMap = this.map;
    this.limit = Math.floor(this.limit * x);
    this.map = [];
    this.size = 0;

    oldMap.forEach(bucket => {
      bucket && bucket.forEach(pair => {
        this.set(pair[0], pair[1]);
      });
    });
  }

  /**
   * @returns {string[]}
   */
  keys() {
    var keys = [];

    this.map.forEach(bucket => {
      bucket && bucket.forEach(pair => {
        keys.push(pair[0]);
      });
    });

    return keys;
  }

  /**
   * @returns {any[]}
   */
  values() {
    var values = new Set();
    this.map.forEach(bucket => {
      bucket && bucket.forEach(pair => {
        values.add(pair[1]);
      });
    });

    return Array.from(values);
  }

  /**
   * @param {string} key
   * @returns {number}
   */
  hash(key) {
    var hash = 0;

    for (var i = 0; i < key.length; i++) {
        hash = (hash << 5) - hash + key.charCodeAt(i);
        hash = hash & hash; // Convert to 32bit integer
        hash = Math.abs(hash);
    }
    return hash % this.limit;
  }
}

/* const table = new HashTable(4);
table.set('genaro', 'salinas');
console.log(table.get('genaro'));
table.set('genaro', 'vidal');
table.set('alejandro', 'andres');
table.set('toddy', 5);
console.log(table.values());
console.log(table.keys());
table.delete('alejandro');
console.log(table.get('alejandro')); */


