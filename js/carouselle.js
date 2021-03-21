((d) => {
    // get arrows
    const carouselle_prev = d.getElementById('carouselle_prev');
    const carouselle_next = d.getElementById('carouselle_next');

    // get articles
    const carouselle_container = d.getElementById('carouselle_container');

    // get visible articles
    let left = carouselle_container.children[0];
    let right = carouselle_container.children[1];

    
    // hide other articles
    let hide = () => {
        console.log("hello");
        let current = 2;

        while (current <= carouselle_container.children.length-1) {
            carouselle_container.children[current].style.display = "none";
            current +=1;
        }
    }
    hide();










    // cycling backwards
    // let prev = () => {

    // };

})(document)