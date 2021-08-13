/***********************************************************
What_is_your_tag? v 1.1.0
Made by Wonkook Lee (oneook)
© All Rights Reserved
************************************************************/


const dataModule = (function() {

  const DOM = {
    addTag: document.querySelector('.addTag'),
    container: document.querySelector('.container'),
    tagContainer: document.querySelector('.container__tag'),
    tags: document.querySelectorAll('.tag'),
  };

  return {
    
    getDOM() {
      return DOM;
    },

  }
})();



const controller = (function() {

  const tagHTML = function (keyword, [R, G, B]) {
    return `<article style="background-color: rgba(${R}, ${G}, ${B}, 0.7);" class="tag" data-keyword="${keyword}">#${keyword}</article>`
  };

  const randomRGB = function(min, max) {
    return Math.floor(Math.random() * (max - min) + 1) + min;
  }

  const getRandomRGB = function(min, max) {
    let arrRGB = [];
    arrRGB.push(randomRGB(min, max));
    arrRGB.push(randomRGB(min, max));
    arrRGB.push(randomRGB(min, max));
    return arrRGB;
  }

  return {

    searchByTag(event, keyword) {
      fetch(`https://source.unsplash.com/featured/?${keyword.toLowerCase()}`)
      .then((response) => {
        document.body.style.backgroundImage = `url(${response.url})`;
      });
    },

    addNewTag(target, parentNode) {
      const newColor = getRandomRGB(180, 230);
      const newHTML = tagHTML(target.value, newColor);
      parentNode.insertAdjacentHTML('beforeend', newHTML);
      this.searchByTag(null, target.value);
      target.value = '';
      target.focus();
    },

  }

})();




const UIController = (function() {

  const DOM = dataModule.getDOM();
  DOM.tagContainer.addEventListener('click', event => {
    if (!event.target.classList.contains('tag')) return;
    const keyword = event.target.dataset.keyword;
    controller.searchByTag(event, keyword)
  });

  DOM.addTag.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      controller.addNewTag(e.target, DOM.tagContainer);
    }
  })

  DOM.addTag.focus();

})();


const msg = "%cWonkook Lee ⓒ oneook";
const css = "font-size: 2em; color: #FEDC45; background-color: #000;font-family: 'Noto Sans KR';";
console.log(msg, css);
