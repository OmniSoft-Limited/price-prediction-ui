import { URL } from './load_env';
import PocketBase from 'pocketbase';

const contacts = new PocketBase(URL);

export default contacts;