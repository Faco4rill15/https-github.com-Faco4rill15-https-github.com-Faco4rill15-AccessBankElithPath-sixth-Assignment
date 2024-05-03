

const div = document.getElementsByClassName('container')

const fetchComment = async ()=>{
    const oppinions = await fetch("https://jsonplaceholder.typicode.com/comments")

    const comment = await oppinions.json()

    comment.forEach((each)=>{
        div.innerHTML += `
        <div class="card">
        <h1>${each.name}</h1>
        <h4>${each.email}</h4>
        <p>${each.body}</p>
        <button class="btn">Comment</button>
        </div>
        `
    })
}
fetchComment()


