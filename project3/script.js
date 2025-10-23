function ajouterCours() {
  const matiere = document.getElementById('matiere').value.trim();
  const jour = document.getElementById('jour').value.trim();
  const heure = document.getElementById('heure').value.trim();

  if(matiere === "" || jour === "" || heure === "") {
    alert("Veuillez remplir tous les champs !");
    return;
  }

  const liste = document.getElementById('listeCours');
  const li = document.createElement('li');
  li.textContent = `${matiere} - ${jour} - ${heure}`;
  liste.appendChild(li);

  // Réinitialiser les champs
  document.getElementById('matiere').value = "";
  document.getElementById('jour').value = "";
  document.getElementById('heure').value = "";
}
