fetch('https://animedas-production.up.railway.app/api/v1/random', {
    method: 'GET',
    headers:{
        'Content-Type': 'application/json'}
}).then((response) => {
    return response.json()
}).then((json)=> {
    const divanime = document.querySelector('.api-images')
    for (animeimg of json.conteudo) {

        let newdiv = document.createElement('div');
        newdiv.classList.add('image-loaded');

        let new_image = document.createElement('img');
        new_image.classList.add('anime')
        new_image.src = animeimg.url

        newdiv.append(new_image)
        divanime.append(newdiv)
}
})