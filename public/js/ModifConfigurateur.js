function AjoutLigne(nbr) {
    //json

    $.getJSON('http://localhost:8080/js/equipment.json', (data) => {
        //code
        const ElementID = "mat" + nbr;
        var doc = document.getElementById(ElementID);
        var selected_id =  'equipement-select-' + nbr;
        var selected = document.getElementById(selected_id).value;

        for(i = 0; i < data.length; i++) {
            if(data[i].Name == selected) {
                slots = data[i].slot;
            }
        }
        if (slots !== 0 ) {
            const id = 'select-' + nbr + '-0';
            const NameClass = 'select-' + nbr;
            const nbrClass = document.getElementsByClassName(NameClass).length;
            if(document.getElementById(id) !== null) {
                for(j = 0; j < nbrClass; j++) {
                    const idDEL = 'select-' + nbr + '-' + j;
                    console.log(idDEL);
                    document.getElementById(idDEL).remove();
                }
            }
            for(j = 0; j < slots; j++) {
                const select = document.createElement('select');
                    select.type = "select";
                    select.name = 'select-' + nbr + '-' + j;
                    select.id = 'select-' + nbr + '-' + j;
                    select.className = 'select-' + nbr;
                    
                const option = document.createElement('option');
                    option.type = 'option';
                    option.value = 'test' + nbr + '-' + j;
                    option.text = "test";

                doc.appendChild(select);
                select.appendChild(option);
            }
        }
    })
}