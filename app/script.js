function moviesCounter(moviesData) {
  let all = moviesData.length;
  let viewed = 0;

  function moviesCounterSeen(item) {
    if (item.seen === 'T') {
      viewed++;
    }
  }

  moviesData.forEach(moviesCounterSeen);

  document.getElementById('moviesCounterAll').innerHTML = all;
  document.getElementById('moviesCounterSeen').innerHTML = viewed;
}

function generateNewListElement(item) {
  var li = document.createElement('li');
  li.setAttribute('id', 'movie-list');

  var containerDiv = document.createElement('div');
  containerDiv.setAttribute('id', item.id);
  containerDiv.setAttribute('class', 'container-div')

  var titleAndYear = document.createElement('div');
  titleAndYear.textContent = item.title + ' ' + '( ' + item.year + ' )';

  var genre = document.createElement('span');
  genre.textContent = item.genre;

  var summary = document.createElement('p');
  summary.textContent = item.summary;

  var isSeen = document.createElement('span');
  isSeen.textContent = 'have I seen ?';
  isSeen.setAttribute('style', 'margin: 0 20px 0 0;');

  var seen = document.createElement('button');
  seen.setAttribute('onclick', 'handleIconChange('+ item.id +')');

  if (item.seen === 'T') {
    seen.setAttribute('class', 'seen');
  } else {
    seen.setAttribute('class', 'not-seen');
  }

  containerDiv.appendChild(titleAndYear);
  containerDiv.appendChild(genre);
  containerDiv.appendChild(summary);
  containerDiv.appendChild(isSeen);
  containerDiv.appendChild(seen);

  li.appendChild(containerDiv);
  document.getElementById('moviesList').appendChild(li);
}

function handleIconChange(item) {
  for (var i = 0; i < moviesData.length; i++) {
    if (moviesData[i].id === item) {
      break;
    }
  }

  let button = document.getElementsByTagName('button')[i];

  if (moviesData[i].seen === 'T') {
    moviesData[i].seen = 'F';
    button.setAttribute('class', 'not-seen');
  } else {
    moviesData[i].seen = 'T';
    button.setAttribute('class', 'seen');
  }

  moviesCounter(moviesData);
}

moviesCounter(moviesData);
moviesData.forEach(generateNewListElement);
