const btn = document.querySelector('button');
btn.addEventListener('click', function(evt) {
    const li = document.createElement('li');
    const inp = document.querySelector('input');
    li.textcontent = inp.value;
    document.querySelector('ul').appendChild(li);
  });