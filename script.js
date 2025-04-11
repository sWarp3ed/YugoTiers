fetch('players.json')
  .then(response => response.json())
  .then(players => {
    console.log(players); // check that it works

    const container = document.querySelector('.container');

    // Filter only players with kit "CRYSTALS"
    const crystalsPlayers = players.filter(p => p.kit === "CRYSTALS");

    // Sort or organize however you want, here's just adding them:
    crystalsPlayers.forEach(player => {
      const box = document.createElement('div');
      box.className = 'box';
      box.innerHTML = `
        <div class="box-left">
          <div class="placement">–</div>
          <div class="player">${player.name}</div>
        </div>
        <div class="box-right">
          <div class="tier" title="${player.peakTier}">${player.tier}</div>
        </div>
      `;
      container.appendChild(box);
    });
  })
  .catch(error => {
    console.error("Failed to load players.json:", error);
  });