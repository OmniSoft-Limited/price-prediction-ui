import contacts from './pocketbase';
import { COLNAME } from './load_env';
import type { Contact } from '../../types/contact';


async function createContact(data: Contact) {
    const contact = await contacts.collection(COLNAME).create(data);
    return contact;
}

async function getContacts() {
    const contacts_list = await contacts.collection(COLNAME).getFullList();
    return contacts_list;
}

export default {
    createContact,
    getContacts,
};