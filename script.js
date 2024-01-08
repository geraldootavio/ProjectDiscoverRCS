function toggleMode() {
  const html = document.documentElement

  // if(html.classList.contains('light')) {
  // html.classList.remove('light')
  //  } else {
  //    html.classList.add('light')
  //  }

  html.classList.toggle('light')
//pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if(html.classList.contains('light')) {
    //se tiver em light mode, usar a imagem light
    img.setAttribute('src', './assets/avatar-light.png')
 } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/gerah.imageredonda.png')
 }

  const alt = document.querySelector("#profile img")
  if(html.classList.contains('light')) {
    img.setAttribute('alt', "Foto de Geraldo modo Light")
  } else {
    img.setAttribute('alt', "Foto de Geraldo")
  }


}
