'use strict'

const adv = document.querySelectorAll('.promo__adv img'),
  wrapper = document.querySelector('.promo__bg'),
  genre = wrapper.querySelector('.promo__genre'),
  seriesList = document.querySelector('.promo__interactive-list')

const seriesDB = {
  series: [
    'Omar',
    'The Final Legacy',
    'Ertugrul',
    'Magnificent Century',
    'The Great Seljuks: Guardians...',
  ],
}

adv.forEach(ad => {
  ad.remove()
})

wrapper.style.backgroundImage = 'url("img/1.jpg")'

genre.innerHTML = "Comedy"

seriesDB.series.forEach((serie, index) => {
  seriesList.innerHTML += `
  <li class="promo__interactive-item">
    ${index + 1}. ${serie}
  <div class="delete"></div>
</li> `
})