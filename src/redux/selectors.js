import { createSelector } from "reselect";

export const isFilter = (state) => state.contacts.filter;
export const getContacts = (state) => state.contacts.items;
export const isLoad = (state) => state.contacts.isload;

export const onFilteredContacts = createSelector(
  [getContacts, isFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
