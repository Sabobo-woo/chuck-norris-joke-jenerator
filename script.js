let button = document.querySelector('.button')
button.addEventListener("click", () => {
    const loadData = async () => {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        const ItemElem = document.querySelector('div');
        ItemElem.innerHTML = '';

        console.log(data.value)


        const joke = document.querySelector('.jokes');
        let p = document.createElement("p");

        joke.appendChild(p);
        p.textContent = data.value

        // joke.innerHTML += `<p>${data.value}</p>`

    }

    loadData()
})