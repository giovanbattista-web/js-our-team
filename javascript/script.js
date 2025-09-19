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

// DICHIARO UNA VARIABILE CHE MI CONTERRA' LA STRINGA RAPPRESENTANTE LE CARD IN HTML
let cards = '';

// CICLO L'ARRAY DEI MEMBRI DEL TEAM 
for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i]; // PER ALLEGGERIRE LA SCRITTURA 

  // DESTRUTTURO L'ELEMENTO DEL TEAM CHE STO ATTUALMENTE CICLANDO NELLE SUE PROPRIETA'
  const { name, role, email, img } = member;

  // CREO LA CARD IN JAVASCRIPT
  cards += `<div class="col-4">
                  <div class="team-card">
                    <div class="card-img">
                      <img src="${img}" class="img-fluid h-100" alt="">
                    </div>
                    <div class="card-content">
                      <h3 class="text-uppercase">${name}</h3>
                      <div>${role}</div>
                      <a href="${email}">${email}</a>
                    </div>
                  </div>
                </div>`
}

// INSERIRE DINAMICAMENTE NEL DOM IL CONTENUTO DI cards
teamContainer.innerHTML = cards;











