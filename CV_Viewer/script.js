
// Array of objects which contains information about the Candidates
const data = [
    {
        name: "Sharik",
        age: 19,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },
    {
        name: "Shakir",
        age: 18,
        city: 'Banglore',
        language: 'Javascript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/34.jpg'
    },
    {
        name: "Danish",
        age: 19,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/67.jpg'
    },
    {
        name: "Billie Eilish ",
        age: 45,
        city: 'Mumbia',
        language: 'Python',
        framework: 'flask',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },
    {
        name: "Kristen Stervert ",
        age: 23,
        city: 'Mumbia',
        language: 'Java',
        framework: 'Spring Boot ',
        image: 'https://randomuser.me/api/portraits/women/65.jpg'
    },
    {
        name: "Rohit Sharma",
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Frame',
        image: 'https://randomuser.me/api/portraits/men/65.jpg'
    },

]

// CV Iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ? {
                value: profiles[nextIndex++],
                done: false
            } : { done: true }
        }
    }
}
const candidates = cvIterator(data)

nextCV();
// Button Listener for next Button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);

function nextCV() {
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile')
    if (currentCandidate != undefined) {
        image.innerHTML = `<img src='${currentCandidate.image}'  >`

        profile.innerHTML = `
            <ul class="list-group">
        <li class="list-group-item list-group-item-dark">Name: ${currentCandidate.name}</li>
        <li class="list-group-item">${currentCandidate.age} years old</li>
        <li class="list-group-item list-group-item-dark" > Lives in ${currentCandidate.city}</li>
        <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
        <li class="list-group-item list-group-item-dark">uses ${currentCandidate.framework} framework </li>
       
        </ul>
    `;
    }
    else {
        alert("End of Candidate applications")
        window.location.reload();
    }
}