
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('ul.ranked-list')
  for(let i = 0; i<list.length; i++) {
    list[i].innerHTML = (parseInt(list[i].innerHTML)+i).toString()
  }
}

function deepestChild() {
  
}