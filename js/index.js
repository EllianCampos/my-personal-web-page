// const DIV_UniversityProy = document.getElementById('DIV_UniversityProy')
// const DIV_AutodidactProy = document.getElementById('DIV_AutodidactProy')

// DIV_UniversityProy.addEventListener('click', () => {
//     if (DIV_UniversityProy.querySelector('div').classList.contains('hide')) {
//         DIV_UniversityProy.querySelector('div').classList.remove('hide')
//     }else{
//         DIV_UniversityProy.querySelector('div').classList.add('hide')
//     }
// })

// DIV_AutodidactProy.addEventListener('click', () => {
//     if (DIV_AutodidactProy.querySelector('div').classList.contains('hide')) {
//         DIV_AutodidactProy.querySelector('div').classList.remove('hide')
//     }else{
//         DIV_AutodidactProy.querySelector('div').classList.add('hide')
//     }
// })

const button = document.getElementById('button')

addEventListener('load', () => {
    fetch('https://api.github.com/users/EllianCampos/repos')
    .then(res=>res.json())
    .then(res=>{
        console.log(res)
        const container_githubproyects = document.getElementById('container_githubproyects')
        for (const proyect of res){
            const article = document.createElement('article')
            const title = document.createElement('a')
            const description = document.createElement('p')

            article.classList.add('proyect')
            title.classList.add('proyect__title')
            description.classList.add('proyect__description')

            title.href = proyect.html_url

            title.textContent = proyect.name
            description.textContent = proyect.description

            article.appendChild(title)
            article.appendChild(description)

            container_githubproyects.appendChild(article)        
        }
    })
})