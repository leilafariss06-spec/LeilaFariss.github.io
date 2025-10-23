function jouer(choixUtilisateur) {
  const options = ['Pierre', 'Feuille', 'Ciseaux'];
  const choixOrdi = options[Math.floor(Math.random() * 3)];

  let resultat = '';

  if (choixUtilisateur === choixOrdi) {
    resultat = `Égalité ! 🤝 Vous avez choisi ${choixUtilisateur} et l'ordi a choisi ${choixOrdi}`;
  } else if (
    (choixUtilisateur === 'Pierre' && choixOrdi === 'Ciseaux') ||
    (choixUtilisateur === 'Feuille' && choixOrdi === 'Pierre') ||
    (choixUtilisateur === 'Ciseaux' && choixOrdi === 'Feuille')
  ) {
    resultat = `Bravo ! 🎉 Vous gagnez ! Vous avez choisi ${choixUtilisateur} et l'ordi a choisi ${choixOrdi}`;
  } else {
    resultat = `Perdu 😢 Vous avez choisi ${choixUtilisateur} et l'ordi a choisi ${choixOrdi}`;
  }

  document.getElementById('resultat').innerText = resultat;
}
