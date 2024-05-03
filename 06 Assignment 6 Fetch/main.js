const article = document.getElementsByClassName('container')

const fetchAlbum = async ()=>{
    const pictures = await fetch("https://jsonplaceholder.typicode.com/albums")

    const slide = await pictures.json()

    slide.forEach((data)=>{
        div.innerHTML += `
        <div class="card">
        <h1>${data.userId}</h1>
        <h4>${data.Id}</h4>
        <p>${data.title}</p>
        <button class="btn">Slides</button>
        </div>
        `
    })
}
fetchAlbum()