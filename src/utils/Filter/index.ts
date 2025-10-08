import badWords from './bangla-bad-word-list.json';
import { Filter } from 'bad-words';

const words = badWords.bangla_bad_words;

const filter = new Filter();
filter.addWords(...words);

export default filter;
