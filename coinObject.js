const coin = {
  state: 0,
  flip: function() {
    this.state = Math.floor(Math.random() * 2);
    return this.state;
  },

  toString: function() {
    if (this.state === 0) {
      return "Tails! ";
    } else {
      return "Heads! ";
    }
  },

  toHTML: function() {
    const image = document.createElement("img");

    if (this.state === 0) {
      image.src = "images/tails.png";
    } else {
      image.src = "images/heads.jpg";
    }
    return image;
  }
};
function display20Flips() {
  const results = [];
  for (flips = 0; flips < 20; flips++) {
    results.push(coin.flip());
    let flipResult = document.createElement("span");
    flipResult.textContent = coin.toString();
    document.body.appendChild(flipResult);
  }
  console.log(results);
  return results;
}

function display20Images() {
  const results = [];
  for (display = 0; display < 20; display++) {
    results.push(coin.flip());
    let displayHtml = coin.toHTML();
    document.body.appendChild(displayHtml);
  }
  console.log(results);
  return results;
}

function flipAgain() {
  window.location.reload();
}
display20Flips();
display20Images();
