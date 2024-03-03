// Assumi che dataset.json sia il tuo file con i dati dei centri vaccinali
const urlDataset = './data/dataset.json';

async function caricaDataset() {
    try {
        const response = await fetch(urlDataset);
        const dataset = await response.json();
        return dataset;
    } catch (error) {
        console.error("Errore nel caricamento del dataset:", error);
    }
}

async function trovaCentriVaccinali() {
    const comuneInput = document.getElementById('comuneInput').value.trim().toLowerCase();
    const risultatiDiv = document.getElementById('risultati');
    risultatiDiv.innerHTML = ''; // Pulisce i risultati precedenti

    const dataset = await caricaDataset();

    const comuneTrovato = dataset.find(d => d.Comune.toLowerCase() === comuneInput);

    if (!comuneTrovato) {
        risultatiDiv.innerHTML = 'Nessun centro vaccinale trovato per il comune inserito.';
        return;
    }

    comuneTrovato.CentriVaccinali.forEach((centro, index) => {
        risultatiDiv.innerHTML += `<div><h3>Centro Vaccinale ${index + 1}</h3><p>Nome: ${centro.Nome}<br>Indirizzo: ${centro.Indirizzo}<br>Telefono: ${centro.Telefono}<br>Email: ${centro.Email}</p></div>`;
    });
}

document.getElementById('cercaButton').addEventListener('click', trovaCentriVaccinali);
