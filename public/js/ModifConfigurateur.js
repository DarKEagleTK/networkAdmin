function AjoutLigne(nbr) {
    //json

    $.getJSON('http://localhost:8080/js/equipment.json', (data) => {
        //code
        var doc = document.getElementById(nbr.toString());
        var selected_id =  'equipement-select-' + nbr;
        var selected = document.getElementById(selected_id).value;

        for(i = 0; i < data.length; i++) {
            if(data[i].Name == selected) {
                slots = data[i].slot;
                
            }
        }
        if (slots !== 0 ) {
            
        }
        
    })
}