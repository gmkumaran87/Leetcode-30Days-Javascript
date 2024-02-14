class TimeLimitedCache {
  cache = new Map();
  constructor() {}
  /**
   * @param {number} key
   * @param {number} value
   * @param {number} duration time until expiration in ms
   * @return {boolean} if un-expired key already existed
   */
  set(key, value, duration) {
    if (this.cache.has(key)) {
      const keyTimer = this.cache.get(key).timer;
      clearTimeout(keyTimer);
      this.cache.set(key, {
        value,
        timer: setTimeout(() => {
          this.clearCache(key);
        }, duration),
      });

      return true;
    } else {
      this.cache.set(key, {
        value,
        timer: setTimeout(() => {
          this.clearCache(key);
        }, duration),
      });

      return false;
    }
  }
  /**
   * @param {number} key
   * @return {number} value associated with key
   */
  get(key) {
    if (this.cache.has(key)) {
      const keyValue = this.cache.get(key);
      return keyValue.value;
    } else {
      return -1;
    }
  }
  /**
   * @return {number} count of non-expired keys
   */
  count() {
    return this.cache.size;
  }
  clearCache(key) {
    this.cache.delete(key);
  }
}

const timeLimitedCache = new TimeLimitedCache();
console.log("Time-limited cache", timeLimitedCache);
console.log("Set Key", timeLimitedCache.set(1, 42, 50)); // false
console.log("Set Key", timeLimitedCache.set(1, 50, 100)); // false

console.log("Get Key", timeLimitedCache.get(1)); // 42
console.log("Get Key", timeLimitedCache.get(1)); // 42
console.log("Get Key", timeLimitedCache.get(1)); // 42

console.log("Key count", timeLimitedCache.count()); // 1
console.log("Get Key", timeLimitedCache.get(1)); // 42
