const result = document.getElementById("result");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
    let input = document.getElementById("input").value;
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `
                <div class="result">
                    <p>${data[0].word}</p>
                    <p>${data[0].meanings[0].definitions[0].definition}</p>
                </div>`;
        });
});

