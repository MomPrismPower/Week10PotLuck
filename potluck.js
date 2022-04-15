// Leah Nassar
// This assignment is late becauase of some personal issues in my life.
// What I originally intended but scaled back to:
// I wanted to make a sign up sheet where you enter names into a pick list and then you can select from those pick lists on dates in a table and type in some text
// however, doing things like creating an array of Fridays in 2022 (meaning getDay() is 5) but traversing to the 
// next day in a loop in js was much much harder than in perl.  Days are tricky in JS.
// I also had some issues arround drop downs and DOM. Items were dissappearing never to appear again. 
// ha ha ha !
// so here we are with a very simple potluck signup, a throwback to my previous cookbook.

let id =0;

// when you click the "Create" button, you add the volunteer, the food cat, and the food.  there is absolutely no error checking

document.getElementById('add').addEventListener(('click'), () => {
    //let createdDate = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('vol-name').value;
    row.insertCell(1).innerHTML = document.getElementById('type-food').value;
    row.insertCell(2).innerHTML = document.getElementById('new-food').value;
    let actions = row.insertCell(3);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('vol-name').value = '';
    document.getElementById('type-food').value = '';
    document.getElementById('new-food').value = '';


});

// then you can delete it all
// too bad if you didnt mean to do it - there's no confirmation

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    
    };
    return btn;


}