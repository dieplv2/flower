let images = document.getElementsByClassName('detail-img');

for(let i = 0; i < images.length; i++) {
    images[i].onmouseover = function() {
        document.getElementById('id01').src = images[i].getAttribute('src');
    }

}