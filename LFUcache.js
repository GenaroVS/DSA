/**
 * @param {number} capacity
 * @return {object}
 */
class LFUCache {
  constructor(capacity) {
    this.values = new Map();
    this.freq = [];
    this.minFreq = 0;
    this.cap = capacity;
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    if (!this.values.has(key)) return null;

    let { value, freq } = this.values.get(key);
    this.freq[freq].delete(key);
    this.updateMinFreq(freq);

    this.values.get(key).freq += 1;
    if (this.freq[freq + 1]) {
      this.freq[freq + 1].set(key, key);
    } else {
      this.freq[freq + 1] = new Map([[key, key]])
    }
    return value;
  }

  /**
  * @param {number} key
  * @param {number} value
  * @return {void}
  */
  set(key, value) {
    if (this.capacity === 0) return null;

    if (this.values.size === this.cap) {
      let removedKey = null;
      for (let [key, value] of this.freq[this.minFreq]) {
        this.freq[this.minFreq].delete(key);
        removedKey = key;
        break;
      }
      delete this.values.delete(removedKey);
    }

    if (this.values[key]) {
      let { freq } = this.values.get(key);
      this.freq[freq].delete(key);
      this.updateMinFreq(freq);

      this.values.get(key).freq += 1;
      if (this.freq[freq + 1]) {
        this.freq[freq + 1].set(key, key);
      } else {
        this.freq[freq + 1] = new Map([[key, key]])
      }
      this.values.get(key).value = value;
    } else {
      this.updateMinFreq();
      this.values.set(key, { value, freq: 1 });
      if (this.freq[1]) {
        this.freq[1].set(key, key)
      } else {
        this.freq[1] = new Map([[key, key]])
      }
    }
  }

  /**
   * If no parameters are passed in, default is 1
   * @param {number | null} freq
   * @returns {void}
   */
  updateMinFreq(freq) {
    if (!freq) {
      this.minFreq = 1;
      return;
    }
    if (freq === this.minFreq && this.freq[freq].size === 0) {
      this.minFreq += 1;
    }
  }
};

let cache = new LFUCache(2);
cache.set('abc', '123');
cache.set('genaro', 'salinas');
cache.get('genaro');
console.dir(cache.values);
cache.set('alex', 'andes');
console.dir(cache.values);
cache.get('alex');
cache.get('alex');
cache.get('alex');
console.dir(cache.values);
cache.set('cool', 'beans');
console.dir(cache.values);



module.exports = LFUCache;
