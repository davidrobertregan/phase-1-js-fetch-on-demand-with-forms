const init = () => {
    const inputForm = 
    document.querySelector('form')
    inputForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.querySelector("#searchByID")

        console.log(input.value);
        const source = `http://localhost:3000/movies/${input.value}`

        fetch(source)
        .then(result => result.json())
        .then(data => { 
                console.log(data)
        })
    })
}

document.addEventListener('DOMContentLoaded', init);

