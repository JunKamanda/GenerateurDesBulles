const h3 = document.querySelector("h3");
let compteur = 0;


const bubbleMaker = ()=>{
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");
    document.body.appendChild(bubble);

    let size = Math.random() * 200 + 100 + "px";
    bubble.style.width = size;
    bubble.style.height = size;

    bubble.style.top = Math.random() * 100 + 50 + "%";
    bubble.style.left = Math.random() * 100 + "%";

    let plusMinus = Math.random() > 0.5 ? 1 : -1;
    bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

    bubble.addEventListener("click", ()=>{
        compteur++
        h3.textContent = compteur;
        bubble.remove()
    })

    setTimeout(() =>{
        bubbleMaker.remove();
    }, 8000) //A revoir

    // console.log(bubbleMaker);
}

setInterval(() =>{
    bubbleMaker()
}, 10000)
