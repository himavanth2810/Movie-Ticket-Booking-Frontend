var theatres = {
    Mumbai: ['INOX R-City Ghatkopar', 'Miraj Anupam Cinemas', 'Prithvi Theatre', 'Maratha Mandir Cinema', 'Regal Theatre'],
    Chennai: ['Sathyam Cinemas, Peters Colony', 'Escape Multiplex, Royapettah', 'INOX Chennai, Mylapore'],
    Telangana: ['Prasads Cinema', 'AMB Cinemas', 'PVR Forum Sujana Mall', 'RK Cineplex', 'LV Prasad Theatre', 'S2 Cinemas, Mallapur', 'PVR Inorbit Cyberabad'],
    Delhi: ['PVR Anupam', 'M2k Cinemas', 'PVR - Fun City Mall', 'Movietime - North Square Mall'],
    Banglore: ['PVR - Orion Mall', 'Urvashi Theatre', 'Gopalan Cinemas', 'Lakshmi Theatre', 'INOX - Galleria Mall']
}

var main = document.getElementById('main_menu');
var sub = document.getElementById('sub_menu');

main.addEventListener('change', function() {
    
    //getting a selected option
    var selected_option = theatres[this.value];

    //removing sub menu options using while loop
    while(sub.options.length > 0){
        sub.options.remove(0);
    }

    Array.from(selected_option).forEach(function(el){
        let option = new Option(el, el);

        //append child option in sub menu
        sub.appendChild(option);
    });

});