const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// RECUPERO GLI ELEMENTI DEL DOM CHE MI SERVONO 
const teamContainer = document.getElementById('team-container');
const button = document.getElementById('add-member');
const form = document.getElementById('form-member');
const nameField = document.getElementById('name');
const roleField = document.getElementById('role');
const emailField = document.getElementById('email');
const imageField = document.getElementById('img');

// FUNZIONE CHE RENDERIZZA LE CARD
const renderCards = (members, container) => {
  // DICHIARO UNA VARIABILE CHE MI CONTERRA' LA STRINGA RAPPRESENTANTE LE CARD IN HTML
  let cards = '';

  // CICLO L'ARRAY DEI MEMBRI DEL TEAM 
  for (let i = 0; i < members.length; i++) {
    const member = members[i];

  // DESTRUTTURO L'ELEMENTO DEL TEAM CHE STO ATTUALMENTE CICLANDO NELLE SUE PROPRIETA'
  const {name, role, email, img} = member;

  // CREO LA CARD IN JAVASCRIPT
  cards += `<div class="col-12 col-md-6 col-lg-4">
                  <div class="team-card">
                    <div class="card-img">
                      <img src="${img}" class="img-fluid h-100" alt="">
                    </div>
                    <div class="card-content">
                      <h3 class="text-uppercase">${name}</h3>
                      <div>${role}</div>
                      <a href="mailto:${email}">${email}</a>
                    </div>
                  </div>
                </div>`
  }

  // INSERIRE DINAMICAMENTE NEL DOM IL CONTENUTO DI cards
  container.innerHTML = cards;

}

// DEFINISCO LA FUNZIONE CHE AL CLICK DEL PULSANTE MI AGGIUNGE L'ELEMENTO ALL'ARRAY
const addMember = (members, container) =>{
// RECUPERIAMO I VALORI INSERITI DAI CAMPI INPUT
const name = nameField.value;
const role = roleField.value;
const email = emailField.value;
const img = imageField.value;

// CREO UN NUOVO OGGETTO CHE ANDRO' POI AD INSERIRE NELL'ARRAY
const newMember = {

  // SHORTENED INVECE DI name : name E COSI' VIA 
  name, 
  role,
  email,
  img
}

// AGGIUNGE IL NUOVO MEMBRO ALL'INTERNO DELL'ARRAY
members.push(newMember);

console.log(members);


// FUNZIONE CHE RENDERIZZA LE CARD 
renderCards(members,container);
}

renderCards(teamMembers,teamContainer);

// DICHIARO UNA VARIABILE CHE MI CONTERRA' LA STRINGA RAPPRESENTANTE LE CARD IN HTML
let cards = '';

// CICLO L'ARRAY DEI MEMBRI DEL TEAM 
for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];

// DESTRUTTURO L'ELEMENTO DEL TEAM CHE STO ATTUALMENTE CICLANDO NELLE SUE PROPRIETA'
const {name, role, email, img} = member;

// CREO LA CARD IN JAVASCRIPT
cards += `<div class="col-12 col-md-6 col-lg-4">
                  <div class="team-card">
                    <div class="card-img">
                      <img src="${img}" class="img-fluid h-100" alt="">
                    </div>
                    <div class="card-content">
                      <h3 class="text-uppercase">${name}</h3>
                      <div>${role}</div>
                      <a href="mailto:${email}">${email}</a>
                    </div>
                  </div>
                </div>`
}

// INSERIRE DINAMICAMENTE NEL DOM IL CONTENUTO DI cards
teamContainer.innerHTML = cards;

form.addEventListener('submit', function(e){
  e.preventDefault();
  // RICHIAMO addMember
  addMember(teamMembers, teamContainer);
})



