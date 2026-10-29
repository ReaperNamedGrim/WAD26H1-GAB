import { getPosts } from './getPosts.js'

const rawPosts = await getPosts()
const posts = rawPosts.sort((a, b) => new Date(b.time_created) - new Date(a.time_created))
const main = document.querySelector(".js-index-main")

export function renderPosts () {
    if (posts.length > 0) {
        const postContainer = document.createElement("ul")
        postContainer.className = "js-post-list"

        for (const post of posts) {
            const imgSrc = post.img_url || post.img_local
            const li = document.createElement("li")
            li.innerHTML = `
                <article>
                    <div>
                        <img src="./res/images/profile.png" alt="user profile" class="js-post-list-author">
                        <time></time>
                    </div>

                    ${imgSrc ? `<img class="js-post-list-img">` : ""}

                    <p></p>

                    <img src="./res/images/thumb.png" alt="like icon">
                </article>
            `
            // Safety measures to prevent injection points from being used
            const elArticle = li.querySelector("article")
            const elP = li.querySelector("p")
            const elTime = li.querySelector("time")
            const elAuthorImg = li.querySelector(".js-post-list-author")
            const elPostImg = li.querySelector(".js-post-list-img")

            elArticle.id = `postID-${post.id}`
            elP.textContent = post.post
            elTime.textContent = new Date(post.time_created).toLocaleDateString("et-EE", {dateStyle: "medium"})
            elTime.dateTime = post.time_created
            elAuthorImg.title = post.author

            if (elPostImg) {
                elPostImg.src = imgSrc
                elPostImg.alt = post.img_alt ?? ""
                elPostImg.loading = "lazy"
            }

            postContainer.appendChild(li)
        }

        main.appendChild(postContainer)
    } else {
        const div = document.createElement("div")
        div.className = "js-render-error-message"
        div.innerHTML = `
            <h4>An error occurred when loading posts...</h4>
            <p>Try again later!</p>
        `

        main.appendChild(div)
    }
}