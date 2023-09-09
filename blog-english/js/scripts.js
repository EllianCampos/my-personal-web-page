const example = Array.from(document.querySelectorAll(".example-container"));

for (const item of example) {
    item.addEventListener("click", () => {
        const elemento = item.childNodes[3]

        if (elemento.classList.contains("d-none")) {
            elemento.classList.remove("d-none")
        } else {
            elemento.classList.add("d-none")

        }


    })
    
}

