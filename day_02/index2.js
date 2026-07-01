
var btn = document.getElementById("submit")
btn.addEventListener("click", handleClick)
function handleClick() {
    var img = document.getElementById("image")
    var name = document.getElementById("name")
    var rating = document.getElementById("rating")
    var inputImage = img.value
    var inputname = name.value
    var inputRating = rating.value

    var movieDiv = document.getElementById("movie-cards")
    movieDiv.innerHTML += `
        <div id="card">
            <img src="${inputImage}" alt="No image">
            <p>${inputname}</p>
            <h2 >${inputRating}</h2>
        </div>`

        img.value = ""
        name.value = ""
        rating.value= ""
}




