((d) => {
    // get arrows
    const carouselle_prev = d.getElementById('carouselle_prev');
    const carouselle_next = d.getElementById('carouselle_next');

    // get articles
    const carouselle_container = d.getElementById('carouselle_container');

    // get visible articles
    let currentLeft = 0;
    let currentRight = 1;
    let left = carouselle_container.children[currentLeft];
    let right = carouselle_container.children[currentRight];

    
    // hide other articles
    let hide = () => {
        let current = 2;
        console.log("yo");
        
        while (current <= carouselle_container.children.length-1) {
            carouselle_container.children[current].style.display = "none";
            current +=1;
        }
    }
    // hide();

    // cycling backwards
    let prev = () => {
        // hide left
        left.style.display = "none";

        // show next child. if right is last, show first


        
    };


    carouselle_prev.addEventListener("click", prev);

})(document)
((d) => {
    
})(document)