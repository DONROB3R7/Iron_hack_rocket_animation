document.addEventListener("mousemove", function(e){
    var rocket = document.querySelector('.rocket');
    rocket.style.left = e.offsetX + 'px';
    rocket.style.top = e.offsetY + 'px';
})


function randomStars(){
 let count = 50;
 let scene = document.getElementById('hero-container');

 for(let i = 0; i < 100; i++ ){
    let star = document.createElement('i');
    let x = Math.floor(Math.random() * window.innerWidth);
    let duration = Math.random() * 1;
    let h = Math.random() * 100;

    star.style.left = x + 'px';
    star.style.width = 1 + 'px';
    star.style.height = h + 'px';
    star.style.animationDuration = duration + 's';
    scene.appendChild(star);
 }
}

randomStars();