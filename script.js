document.addEventListener('DOMContentLoaded', () => {

    const header = document.getElementById('header')
    const title = document.getElementById('title')
    const excerpt = document.getElementById('excerpt')
    const profile_img = document.getElementById('profile_img')
    const name = document.getElementById('name')
    const date = document.getElementById('date')

    const animated_bgs = document.querySelectorAll('.animated-bg')
    const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

    setTimeout(getData, 2000)

    function getData() {
        header.innerHTML = ` <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
    alt="laptop">`
        title.innerHTML = `Lorem ipsum dolor sit amet.`
        excerpt.innerHTML = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
    ipsum!`
        profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">`
        name.innerHTML = `John Doe`
        date.innerHTML = `oct, 08,20202`

        animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
        animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg'))

    }








    // console.log(2345)
})