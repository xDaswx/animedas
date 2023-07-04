const url = document.URL.split('/gallery')[0]

fetch(url+'/api/v1/many/random', {
    method: 'GET',
    headers:{
        'Content-Type': 'application/json'}
}).then((response) => {
    return response.json()
}).then((json)=> {
    const divanime = document.querySelector('.api-images')
    
    for (animeimg of json.content) {

        let newdiv = document.createElement('div');
        newdiv.classList.add('image-loaded');

        let clickable =  document.createElement('a')
        clickable.setAttribute('target','_blank')
        clickable.setAttribute('href','/see/'+animeimg.id)

        let new_image = document.createElement('img');
        new_image.classList.add('anime')
        new_image.src = animeimg.url

        clickable.append(new_image)
        newdiv.append(clickable)
        divanime.append(newdiv)
}
}).then(()=> document.querySelectorAll('.anime').forEach((anime)=>{anime.addEventListener('click',(html_information)=> console.log("clicou em "+html_information))})
)
