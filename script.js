const dataset = [
  [
  {
    "Comune": "ComuneA",
    "Zona": "Zona1",
    "Centro Vaccinale 1": "Nome Centro 1",
    "Indirizzo 1": "Indirizzo Centro 1",
    "Tel 1": "Telefono Centro 1",
    "Mail 1": "Email Centro 1",
    "Centro Vaccinale 9": "Nome Centro 9",
    "Indirizzo 9": "Indirizzo Centro 9",
    "Tel 9": "Telefono Centro 9",
    "Mail 9": "Email Centro 9"
  },
]


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
