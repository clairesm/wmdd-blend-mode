const btnMode = document.querySelector('.btn-mode');
const pictures = document.querySelectorAll('.picture');
const picturesBox = document.querySelector('.pictures');
const colorMode = document.querySelector('.color-mode');
const root = document.documentElement; /*this is root from css line 1*/

// to toggle/open menu ==========
btnMode.addEventListener('click', function() {
    document.body.classList.toggle('menu-open');
});

colorMode.addEventListener('change', function(e){
    // console.log('this');
    // console.log(e);
    
    if (e.target.id == "color-picker") {
        // console.log('picker');
        const bgc = e.target.value; /*value of color picked*/
        pictures.forEach((picture) => {
            picture.style.backgroundColor = bgc;
        });
    }
    else {
    //     console.log('not picker');


    // IMPORTANT! ========== 
    // this is the form - querySelector input checked that are inside/descendants of form
    const blendMode = this.querySelector('input:checked').value;
    console.log(blendMode);
    // root.style.setProperty('margin', '20px');
    root.style.setProperty('--bmode', blendMode);
    // --bmode is frm css line 1, it changes its value to blendMode selected from input check box
    }
});

pictures.forEach((picture) => {
    // console.log(picture);
    picture.style.backgroundColor = randColor();
});



function randColor() {
    function rand() {
        return Math.floor(Math.random() * 200);
    } 
    const rgb = `rgb(${rand()}, ${rand()}, ${rand()})`;
    return rgb;
}



// SECRET MESSAGES
picturesBox.addEventListener('click', function(e){
    // console.log(e.target);
    // console.log(e.target.parentElement);
    e.target.parentElement.classList.toggle('message-up');
});