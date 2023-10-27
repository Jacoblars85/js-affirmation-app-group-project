onReady();

function onReady() {
  console.log('Javascript is working!');
}

let count = 0;



function clickFire(event) {
  console.log('click fire');

  let fireEmoji = document.getElementById('emojis');

  fireEmoji.innerHTML += "<span>☄️</span>"

  count++;

  console.log(count);
}


function clickIce(event) {
  console.log('click ice');

  let iceEmoji = document.getElementById('emojis');

  iceEmoji.innerHTML += "<span>💎</span>"

  count--;

  console.log(count);
}

function deleteButton(event) {
  if (count >= 0) {
    return;
  }
  console.log('we try');
  event.target.parentElement.parentElement.remove();
}


function submitButt(event) {
  console.log('trying to butt');
  event.preventDefault();

  if (count <= 0) {
    return;
  }

  //gets the input
  let getText = document.getElementById('affInput').value;
  let getAuthor = document.getElementById('authorInput').value;

  //resests the inputs
  document.getElementById('affInput').value = '';
  document.getElementById('authorInput').value = '';

  console.log(getText, getAuthor);

  let tableBod = document.getElementById('tableBod');

  tableBod.innerHTML += 
  `  
    <tr>
      <td>${getText}</td>
      <td>${getAuthor}</td>
      <td><button onclick='deleteButton(event)'>⌫</button></td>
    </tr>
  `

  console.log('we are table bod', tableBod);
}


