function AjoutSlots(nbr) {
    //json

    $.getJSON('http://localhost:8080/js/equipment.json', (data) => {
        //code
        const ElementID = "mat" + nbr;
        var doc = document.getElementById(ElementID);
        var selected_id =  'equipement-select-' + nbr;
        var selected = document.getElementById(selected_id).value;

        //recupère la variable slots par rapport a l'equipement selectionner
        for(i = 0; i < data.length; i++) {
            if(data[i].Name == selected) {
                slots = data[i].slot;
            }
        }
        //veriifie le nombre de slot et permet de changer dinamiquement de slot
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
            
            if (document.getElementById("supprimable_br") !== null) {
                document.getElementById("supprimable_br").remove();
                document.getElementById("supprimable_label").remove();
            }

            const br = document.createElement('br');
                br.type = "br";
                br.id = "supprimable_br";
            const label = document.createElement('label');
                label.type = "label";
                label.text = "Slots : ";
                label.id = "supprimable_label";

            doc.appendChild(br);
            doc.appendChild(label);

            //crée le nombre de slot
            for(j = 0; j < slots; j++) {
                //on crée les champs
                const select = document.createElement('select');
                    select.type = "select";
                    select.name = 'select-' + nbr + '-' + j;
                    select.id = 'select-' + nbr + '-' + j;
                    select.className = 'select-' + nbr;
                    
                const option = document.createElement('option');
                    option.type = 'option';
                    option.value = 'slot' + nbr + '-0';
                    option.text = "slot test 1";

                const option2 = document.createElement('option');
                    option2.type = 'option';
                    option2.value = 'slot' + nbr + '-1';
                    option2.text = "slot test 2";
                //on applique les champs
                doc.appendChild(select);
                select.appendChild(option);
                select.appendChild(option2);
            }
        }
    })
}