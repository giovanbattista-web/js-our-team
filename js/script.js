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

// FUNZIONE CHE MI CREA LE CARD 
let creazioneCard = (componenti) => {
  let card = `<div class="col">
                   
                       <div class="card-immagine">
                         <img src ="./${componenti.img}" alt="" class="img-fluid">
                       </div>
                       <div class="testo-card">
                         <h3>${componenti.name}</h3>
                         <div>${componenti.role}</div>
                         <a href="">${componenti.email}</a>
                       </div>
                   
              </div>`
  document.getElementById('componentiGruppo').innerHTML += card;
}

for (let i = 0; i < teamMembers.length; i++) {
  creazioneCard(teamMembers[i]);
}

