/*
Implement a URL shortener with the following methods:

1. shorten(url), which shortens the url into a six-character alphanumeric string, such as zLg6wl.
2. restore(short), which expands the shortened string into the original url.
If no such shortened string exists, return null.
*/

class UrlShortener {
  constructor() {
    this.map = {};
    this.count = 1000;
    this.baseUrl = 'http://short-url.com/'
  }

  /**
   * @param {string} url
   * @return {string} shortened url
   */
  shorten(url) {
    let id = this.count;
    let shortTail = '';
    let alphanum = 'abcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXY0123456789';

    while (id > 0) {
      shortTail = alphanum[id % 62] + shortTail;
      id = Math.floor(id / 62);
    }

    let shortUrl = this.baseUrl + shortTail;
    this.map[this.count] = {
      url: url,
      shortUrl: shortUrl
    }

    this.count += 1;
    return shortUrl;
  }

  /**
   * @param {string} shortUrl
   * @return {string} url
   */
  restore(shortUrl) {
    var id = 0;
    var shortTail = shortUrl.match(/(?<=\/)\w+$/)[0];

    for (var char of shortTail) {
      if ('a' <= char && char <= 'z') {
        id = id * 62 + (char.charCodeAt(0) - 97);
      }
      if ('A' <= char && char <= 'Z') {
        id = id * 62 + (char.charCodeAt(0) - 65 + 26);
      }
      if (0 <= parseInt(char) && parseInt(char) <= 9) {
        id = id * 62 + parseInt(char) + 52;
      }
    }

    return this.map[id].url;
  }
}

var urlShortener = new UrlShortener();
var url1 = 'https://spot1find.herokuapp.com/auth/favorites/29asdfe12423q=fine%20fun';
var url2 = 'https://spot1find/herokuapp.com'
var shortUrl1 = urlShortener.shorten(url1);
var shortUrl2 = urlShortener.shorten(url2)
console.log(shortUrl1);
console.log(shortUrl2);
console.log(url1 === urlShortener.restore(shortUrl1));
console.log(url2 === urlShortener.restore(shortUrl2));
