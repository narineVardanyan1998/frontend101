import data from './data.js';
console.log(data)
const productList = document.getElementById("productList")
data.map((products => {
     const card = document.createElement("div")
     card.classList.add("card")
     card.classList.add("col-4")
     card.innerHTML = `
     ${
        products.image.map((image)=> {
            return `<img src="${image.url}" class="card-img-top"alt="${image.alt}">`
        })
     }
     <div class="card-img-overlay d-flex justify-content-end">
       <a href="#" class="card-link text-danger like">
         <i class="fas fa-heart"></i>
       </a>
     </div>
     <div class="card-body">
       <h4 class="card-title">${products.name}</h4>
        ${products.categories.map((category) => {
           if (category.categoryName === "Electronics") {
             return `<span class="badge bg-danger">${category.categoryName}</span>`
            } else {
            return `<span class="badge bg-primary">${category.categoryName}</span>`
            }
        })}
       <p class="card-text">
        ${products.details.description} 
       </p>
       <div class="options d-flex flex-fill">
       <table class="table">
         <tr class="d-flex justify-content-between">
         ${products.details.specs.map((spec) => {
                return `<td><i class="fas fa-microchip"></i> ${spec.specName}</td>
                <td>${spec.specValue}</td>`
         })}
        </tr>
        </table>
       </div>
       <div class="buy d-flex justify-content-between align-items-center">
         <div class="price text-success"><h5 class="mt-4">$${products.price}</h5></div>
          <a href="#" class="btn btn-danger mt-3"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
       </div>
     </div>
     `
     card.addEventListener("click" , () => {
        console.log(products)
        // localStorage.setItem("product", JSON.stringify(products))
        window.location.href = `description.html?product=${JSON.stringify(products)}`
     } )
     productList.appendChild(card)
}))
