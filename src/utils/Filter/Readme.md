# Bad Word Filter
This is a simple filter that removes bad words including Bangla bad words from a given string. It takes bandh bad words from a JSON file and removes them from the input string. The file is generated using the [web crawler](../../../scripts/web-crawler) and contains a list of Bangla bad words.

## Usage
To use the filter, import it in your project and call the `clean` method with the input string. The method will return the filtered string without the Bangla bad words.

```javascript
import filter from './Filter';

const inputString = 'Hello, I am a achuda programmer.';
const filteredString = filter.clean(inputString);

console.log(filteredString); /
```
```plaintext
Output: Hello, I am a ****** programmer.
```