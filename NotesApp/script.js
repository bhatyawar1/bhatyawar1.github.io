// add note to local Storage 
let addBtn = document.getElementById('addBtn');
showNotes();
addBtn.addEventListener('click', (e) => {
    let addTxt = document.getElementById('addTxt');
    let addTitle = document.getElementById('addTitle');
    let notes = localStorage.getItem('notes')
    if (notes === null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes)
    }
    let myObj = {
        title: addTitle.value,
        text: addTxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = ''
    addTitle.value = ''
    showNotes();
})



function showNotes() {
    let notes = localStorage.getItem('notes')
    if (notes === null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes)
    }
    let html = ''
    notesObj.forEach((element, index) => {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 15rem;">
        <div class="card-body">
            <h5 class="card-title">${element.title} </h5>
            <p class="card-text">${element.text}</p>
            <button onclick="deleteNote(this.id)" id="${index}" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`
    })
    let notesEln = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesEln.innerHTML = html;
    }
    else {
        notesEln.innerHTML = `Nothing to Show "Add a Note" section above to add  notes`
    }
}

// Function to delete a Note 
function deleteNote(index) {

    let notes = localStorage.getItem('notes')
    if (notes === null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes)
    }

    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById('searchTxt');
search.addEventListener('input', () => {
    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard')
    Array.from(noteCards).forEach((element) => {
        let cardTxt = element.getElementsByTagName('p')[0].innerText
        if (cardTxt.includes(inputVal)) {
            element.style.display = 'block'

        } else {
            element.style.display = 'none';
        }

    })

})