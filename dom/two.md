# DOM Selection — Quick Notes
querySelector() → returns Element
querySelectorAll() → returns NodeList
element.children → returns HTMLCollection
getElementsByClassName() → returns HTMLCollection

Example:

const parent = document.querySelector('.parent');
parent.children; // HTMLCollection

If using querySelectorAll():

const parent = document.querySelectorAll('.parent');
parent[0].children; // HTMLCollection

Remember:
NodeList ≠ Element → so NodeList.children ❌.