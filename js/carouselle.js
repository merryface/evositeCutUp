((d) => {
    // get elements
    const carouselle_container = d.getElementById('carouselle_container');
    const carouselle_prev = d.getElementById('carouselle_prev');
    const carouselle_next = d.getElementById('carouselle_next');

    // when loaded only show first two children of carouselle container
    let hide = () => {
        for (let i = 2; i < carouselle_container.children.length; i += 1) {
            carouselle_container.children[i].style.display = "none";
        }
    };

    hide();


    let next = () => {
        // save it
        let first = carouselle_container.children[0];
    
        // remove from the parent
        carouselle_container.removeChild(first);
        
        //add it to the end
        carouselle_container.appendChild(first);   
        hide();

        carouselle_container.children[0].style.display = "block";
        carouselle_container.children[1].style.display = "block";
    };

    let prev = () => {

        // save last
        let lastIndex = carouselle_container.children.length - 1;
        let last = carouselle_container.children[lastIndex];

        // remove the last from parent
        carouselle_container.removeChild(last);


        //add last to the beginning
        carouselle_container.prepend(last);

        hide();

        carouselle_container.children[0].style.display = "block";
        carouselle_container.children[1].style.display = "block";
    }

    carouselle_next.addEventListener("click", next);
    carouselle_prev.addEventListener("click", prev);

})(document);