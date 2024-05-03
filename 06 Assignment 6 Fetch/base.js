const section = document.getElementsByClassName('container')

const fetchPhoto = async ()=>{
    const view = await fetch("https://jsonplaceholder.typicode.com/photos")

    const pix = await view.json()

    pix.forEach((data)=>{
        div.innerHTML += `
        <div class="card">
        <h1>${data.albumId}</h1>
        <h4>${data.title}</h4>
        <p>${data.url}</p>
        <p>${data.thumbnailUrl}</p>
        <button class="btn">See Pix</button>
        </div>
        `
    })
}
fetchPhoto()