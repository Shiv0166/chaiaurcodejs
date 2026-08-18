!-- attributes like usko class de rhe hh aisa kuch 
basically dom kisi elemnt ko kaise access kre like tht  -->
<!-- the Document Object Model (DOM) is a structured way for web browsers to represent and interact with HTML pages, treating every part of a page (like tags, text, and attributes) as objects.(It's how JavaScript “talks” to HTML.)
The DOM is explained as a model that represents the structure of an HTML document as a tree of objects (head, body, p, img ). Every element, attribute, and text is considered a "node" in this tree

    Example HTML:
    <html>
    <body>
        <h1>Hello</h1>
        <p>Paragraph</p>
    </body>
    </html>

    Corresponding DOM Tree:

    Document
    └── html
        └── body
            ├── h1
            │    └── "Hello"
            └── p
                └── "Paragraph"

# Window and Document :-
-The browser creates a window object that represents the browser tab or window.
-window contains many properties and methods — one of them is document.
-The document object represents the webpage and provides access to:
    HTML elements.
    Document structure.
    Methods for DOM manipulation.

    console.log(window.document); // Outputs the entire HTML document and methods for manipulation
    console.log(document); //outputs entire document
    console.dir(windows); //Outputs the entire HTML document and methods for manipulation


!! Collections like HTMLCollection or NodeList are used to handle groups of elements, but they differ from standard arrays. -->

# innerText apko content deta hh but jis prr css na ho 
# textContent apko pura content deta hh
# querySelector apko ek hi value deta hh first wali jiska ap value manng rhe ho
document.queryselector('h1') apko first h1 diya jaiyega 
 ap quereyselector se id aur class bhi select kr skte ho 

# document.querySelector('#shivam') shivam id ka naam hh
# documnet.querySelector('.heading') heading class ka naam 
# id ko # and class ko . 
# hm querySelectorAll saare elemnt ko select karega 
// ID
document.getElementById("container");

// Class - first matching element
document.querySelector(".title");

// Class - all matching elements
document.querySelectorAll(".text");

// Tag
document.querySelector("button");

document.querySelectorAll('.box')[1]

means:

Find all boxes → take the second box.

# querySelector() → when you want the FIRST matching element
# document.querySelector("#title");     // ID
 # document.querySelector(".text");      // class
# document.querySelector("p");          // tag
# document.querySelector(".card p");    // p inside card

# nodelist array jaisa dikhta hh but array h nhi but kafi khoobiyaan milti hain forEachlaga kr style color change krskte hh

# collection aayega q.erySelectorbyclassname se to usko array me change krna aur isme foreach nhi lga skte hh 
# nodelist and collection ko kaise krna hh chatr gpt se 

# go through dom cheat sheet 
[text](../../../../Downloads/DOM_NodeList_HTMLCollection_CheatSheet.pdf)