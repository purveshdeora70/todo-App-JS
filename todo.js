// var h = document.createElement(`h1`)
// var myValue = document.createTextNode(`Hello world!`)
// h.appendChild(myValue)
// document.querySelector(`h1`).appendChild(h);


//While Loop

// var val = 5
// while (val > 0) {
//     console.log(val);
//     val--;
// }

var ul = document.getElementById(`list`);
var li;


var addButton = document.getElementById(`add`);
addButton.addEventListener(`click`, addItem);

var removeButton = document.getElementById(`remove`);
removeButton.addEventListener(`click`, removeItem)

var removeAllButton = document.getElementById(`removeall`);
removeAllButton.addEventListener(`click`, removeAllItem)


function addItem() {
    var input = document.getElementById(`input`);
    var item = input.value;
    ul = document.getElementById(`list`);
    var textnode = document.createTextNode(item);

    if (item === '') {
        return false;
        // Add a p tag and assign a value of "Enter your todo"

    } else {
        //Create li
        li = document.createElement(`li`);

        //Create checkbox
        var checkbox = document.createElement(`input`);
        checkbox.type = 'checkbox';
        checkbox.setAttribute(`id`, `check`);

        //create label
        var label = document.createElement(`label`);
        label.setAttribute(`for`, `item`) //optional

        //add these element on web page

        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        //ul.insertBefore(li, ul.childNodes[0]);
        ul.insertBefore(li, ul.childNodes[0]);
        //li.className = 'visual';

        setTimeout(() => {
            li.className = 'visual';

        }, 2);

        input.value = ``

    }
}

function removeItem() {
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])

        }

    }
}

function removeAllItem() {
    ul.remove();
}


//create add one more button remove every thing it shoul remove all ul list