(function () {
    let cont = 1;
    setInterval(function () {
        document.getElementById('slide' + cont).checked = true;
        let disabled = document.getElementById('bar' + 5);
        let active = document.getElementById('bar' + cont);

        disabled.style.backgroundColor = 'transparent';
        active.style.backgroundColor = 'white';

        if (cont > 1) {
            cont--;
            let circle = document.getElementById('bar' + cont);
            circle.style.backgroundColor = 'transparent';
            cont++;
        }

        cont++;

        if (cont > 5) {
            cont = 1
        }
    }, 3000);

    
    var menu = document.getElementById('menu_List');
    var btn_menu = document.getElementById('menu');
    var js = document.querySelector('body');
    
    js.classList.remove('no-js')
    js.classList.add('js');
    
    btn_menu.addEventListener('click', function () {
        var largura = window.innerWidth;
         if ( menu.style.display == 'block') {
            menu.style.display = 'none';
         } else {
            menu.style.display = 'block';
         }
      
     
    })

})()