const container = document.querySelector(".container")
const flowers = [
  { name: "Alstroemeria", image: "images/flower1.jpg" },
  { name: "Amaryllis", image: "images/flower2.jpg" },
  { name: "Gysophilia", image: "images/flower3.jpg" },
  { name: "Bird of Paradise", image: "images/flower4.jpg" },
  { name: "Carnation", image: "images/flower5.jpg" },
  { name: "Carnation-Mini", image: "images/flower6.jpg" },
]

const showFlowers = () => {
  let output = ""
  flowers.forEach(
    ({ name, image }) =>
      (output += `
         <div class="card">
           <img class="card--avatar" src=${image} alt=${name}/>
           <h1 class="card--title">${name}</h1>
           <a class="card--link" href="#">Pluck</a>
         </div>
          `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showFlowers)

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        //.catch(err => console.log("service worker not registered", err))
    })
  }
