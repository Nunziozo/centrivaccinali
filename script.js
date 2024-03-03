const dataset = [
  {
    "Comune": "Comune",
    "Zona": "Zona",
    "CentriVaccinali": [
      {
        "Nome": "Centro Vaccinale 1",
        "Indirizzo": "Indirizzo 1",
        "Telefono": "Tel 1",
        "Email": "Mail 1"
      },
      {
        "Nome": "Centro Vaccinale 2",
        "Indirizzo": "Indirizzo 2",
        "Telefono": "Tel 2",
        "Email": "Mail 2"
      }
      // Aggiungi fino a 9 centri vaccinali per comune se necessario
    ]
  },
  // Aggiungi altri comuni qui
];

function trovaCentriVaccinali() {
    const comuneInput = document.getElementById('comuneInput').value.trim().toLowerCase();
    const risultatiDiv = document.getElementById('risultati');
    risultatiDiv.innerHTML = ''; // Pulisce i risultati precedenti

    const comuneTrovato = dataset.find(d => d.Comune.toLowerCase() === comuneInput);

    if (!comuneTrovato) {
        risultatiDiv.innerHTML = 'Nessun centro vaccinale trovato per il comune inserito.';
        return;
    }

    comuneTrovato.CentriVaccinali.forEach((centro, index) => {
        risultatiDiv.innerHTML += `<div><h3>Centro Vaccinale ${index + 1}</h3><p>Nome: ${centro.Nome}<br>Indirizzo: ${centro.Indirizzo}<br>Telefono: ${centro.Telefono}<br>Email: ${centro.Email}</p></div>`;
    });
}
