window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // stop the function from running all together
    audio.currentTime = 0; // umozni spustit audo znova aj ked este prebieha
    audio.play();
    console.log(key);
    key.classList.add('playing');
});
function removeTransition(e){
    if(e.propertyName !== 'transform') return; // skip if its not transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
