// let btn = document.querySelector('button')
// btn.addEventListener('mouseover',function(){
//   console.log('is working')
//   let height = Math.floor(Math.random() * window.innerHeight)
//   let width = Math.floor(Math.random() * window.innerWidth);
//   btn.style.left = `${width}px`
//   btn.style.top= `${height}px`
// })
// btn,addEventListener('click',function(){
//   btn.innerText = 'you  caught me congratulation'
//   btn.style.backgroundColor = 'green'
  
// })
const colors = [
  "yellow",
  "red",
  "brown",
  "orange",
  "green",
  "blue",
  "black",
  "gray",
  "silver",
  "maroon",
  "red",
  "purple",
  "green",
  "lime",
  "olive",
  "yellow",
  "navy",
  "blue",
  "teal",
];
const container = document.createElement('div')
container.classList.add('parentdiv')
let h1 = document.querySelector('h1')
const pickColor = function(){
  console.log(this)
   h1.style.color = this.style.backgroundColor;
}
for(let color of colors){
  let boxes = document.createElement('div')
  boxes.style.backgroundColor = color
  boxes.classList.add('box')
  container.appendChild(boxes)
  document.body.insertAdjacentElement('beforeend',container)
  boxes.addEventListener('click',pickColor)

}

