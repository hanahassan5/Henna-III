// list
document.getElementById('menu-button').onclick = function () {
  var menu = document.getElementById('navigation');
  if (menu.style.display == 'flex') { menu.style.display = ''; }
  else { menu.style.display = 'flex'; }
};

// search
var search = document.getElementById('search');
var cards = document.getElementsByClassName('service-card');

search.onkeyup = function () {
  for (var i = 0; i < cards.length; i++) {
    if (cards[i].getAttribute('data-name').indexOf(search.value.toLowerCase()) != -1) {
      cards[i].style.display = 'block';
    } else {
      cards[i].style.display = 'none';
    }
  }
};

// favorites
var favorites = document.getElementsByClassName('favorite');

for (var i = 0; i < favorites.length; i++) {
  favorites[i].onclick = function () {
    if (this.getAttribute('aria-pressed') == 'true') {
      this.setAttribute('aria-pressed', 'false');
      this.innerHTML = '♡';
    } else {
      this.setAttribute('aria-pressed', 'true');
      this.innerHTML = '♥';
    }
  };
}

// form
var newsletter = document.getElementById('newsletter-form');

newsletter.onsubmit = function () {
  document.getElementById('newsletter-message').innerHTML = 'Thank you!';
  return false;
};

// dialog
var demoButtons = document.getElementsByClassName('demo-button');
var dialog = document.getElementById('details');

for (var i = 0; i < demoButtons.length; i++) {
  demoButtons[i].onclick = function () {
    document.getElementById('details-title').innerHTML = this.getAttribute('data-title');
    document.getElementById('details-text').innerHTML = this.getAttribute('data-text');
    dialog.showModal();
  };
}

document.getElementById('close-details').onclick = function () {
  dialog.close();
};