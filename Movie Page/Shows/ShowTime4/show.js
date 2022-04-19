var theatres = {
    Mumbai: ['INOX R-City Ghatkopar', 'Miraj Anupam Cinemas'],
    Chennai: ['Sathyam Cinemas, Peters Colony', 'INOX Chennai, Mylapore'],
    Telangana: ['Prasads Cinema', 'AMB Cinemas', 'PVR Forum Sujana Mall', 'LV Prasad Theatre', 'PVR Inorbit Cyberabad'],
    Delhi: ['PVR Anupam', 'INOX Cinemas, Janakpuri', 'M2k Cinemas'],
    Banglore: ['PVR - Orion Mall', 'Rockline Cinemas', 'INOX - Galleria Mall']
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