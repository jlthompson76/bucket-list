// Feel free to message me if you want hints or are stuck. 

/////////// Part 1 (Selecting and ManipulatingDOM Elements) ///////////

/* 1.1) Set the first <li> item from the html and print the text from it. 
    Tip: Use console.log() to print result  
*/

console.log(document.querySelector("li"));

/* 1.2) Add a full-stop at the end of each item in all the bucket lists.
    Hint 1: Select All <li> elements.
    Hint 2: Use for loop.
    Hint 3: You will need to use .innerText
*/

let listItems = document.querySelectorAll(".bucket-list li");
for (let i = 0; i < listItems.length; i++) {
    let fullStop = ".";
    listItems[i].innerText += fullStop;
}

/* 1.3) Print the first list item from Gandalf's bucket list. 
    Hint 1: First select the div associated with Gandalf's bucket list.
*/

let gandalfList = document.querySelector("#gandalf-list");
console.log(gandalfList.querySelector("li"));

/* 1.4) Change the color of first list item from Gandalf's bucket list to Red.
    Hint 1: You have already selected this list element from previous part.
*/

gandalfList.querySelector("li").style.color = "red";

/* 1.5) Add a new item in Frodo's bucket list. 
        The item should 'Sail off With the Elves.'
    Hint 1: Use .createElement() method
    Hint 2: Use .append() 
*/

let frodoList = document.querySelector("#frodo-list ul");
let newItem = document.createElement("li");
newItem.innerText = "Sail Off with the Elves";
frodoList.append(newItem);

/* 1.5) Remove the first item from Frodo's bucket list.
    Hint 1: First select the item
    Hint 2: Use .remove() 
*/

let firstItem = frodoList.querySelector("li");
firstItem.remove();

////////////// Part 2 (DOM Traversal) /////////////////////

/* 2.1) Print all children of the div with id="gandalf-list"
    Hint 1: select the div first
    Hint 2: use  .children 
*/



/* 2.2) Print the first child of the div with id="frodo-list" */


/* 2.3) Print the last child of the div with id="gandalf-list" */ 


/* 2.4) Print the 2nd last child of the div with id="gandalf-list" 
    Hint 1: First select the last child as you did in Part 2.3
    Hint 2: Then use  .previousElementSibling to get the 2nd last child
*/ 


/* 2.4) Find the parent element of the div with id="frodo-list" */




////////////// BONUS /////////////////////
/*  Find out the person who has 'Become White Wizard.' in their bucket list 
    
    Hint 1: You will need to select all <li> elements
    Hint 2: Use .textContent   and === 
    Hint 3: Use .parentElement (You are looking to find the grandparent actually)
*/


