import data from './data.js';

const sortedData = data.sort((a, b) => b.rating - a.rating);

const top6Products = sortedData.slice(0, 6);

console.log(top6Products);

const productList = document.getElementById("productList");

top6Products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("col-4");
    card.innerHTML = `
        ${
            product.image.map((image) => {
                return `<img src="${image.url}" class="card-img-top" alt="${image.alt}">`;
            })
        }
        <div class="card-img-overlay d-flex justify-content-end">
            <a href="#" class="card-link text-danger like">
                <i class="fas fa-heart"></i>
            </a>
        </div>
        <div class="card-body">
            <h4 class="card-title">${product.name}</h4>
            ${product.categories.map((category) => {
                if (category.categoryName === "Electronics") {
                    return `<span class="badge bg-danger">${category.categoryName}</span>`;
                } else {
                    return `<span class="badge bg-primary">${category.categoryName}</span>`;
                }
            })}
            <p class="card-text">
                ${product.details.description}
            </p>
            <div class="options d-flex flex-fill">
                <table class="table">
                    <tr class="d-flex justify-content-between">
                        ${product.details.specs.map((spec) => {
                            return `<td><i class="fas fa-microchip"></i> ${spec.specName}</td>
                                    <td>${spec.specValue}</td>`;
                        })}
                    </tr>
                </table>
            </div>
            <div class="buy d-flex justify-content-between align-items-center">
                <div class="price text-success"><h5 class="mt-4">$${product.price}</h5></div>
                <a href="#" class="btn btn-danger mt-3"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
            </div>
        </div>
    `;
    card.addEventListener("click", () => {
        console.log(product);
        window.location.href = `allProducts.html?product=${JSON.stringify(product)}`;
    });
    productList.appendChild(card);
});


// var container = document.getElementById('container')
// var slider = document.getElementById('slider');
// var slides = document.getElementsByClassName('slide').length;
// var buttons = document.getElementsByClassName('btn');


// var currentPosition = 0;
// var currentMargin = 0;
// var slidesPerPage = 0;
// var slidesCount = slides - slidesPerPage;
// var containerWidth = container.offsetWidth;
// var prevKeyActive = false;
// var nextKeyActive = true;

// window.addEventListener("resize", checkWidth);

// function checkWidth() {
//     containerWidth = container.offsetWidth;
//     setParams(containerWidth);
// }

// function setParams(w) {
//     if (w < 551) {
//         slidesPerPage = 1;
//     } else {
//         if (w < 901) {
//             slidesPerPage = 2;
//         } else {
//             if (w < 1101) {
//                 slidesPerPage = 3;
//             } else {
//                 slidesPerPage = 4;
//             }
//         }
//     }
//     slidesCount = slides - slidesPerPage;
//     if (currentPosition > slidesCount) {
//         currentPosition -= slidesPerPage;
//     };
//     currentMargin = - currentPosition * (100 / slidesPerPage);
//     slider.style.marginLeft = currentMargin + '%';
//     if (currentPosition > 0) {
//         buttons[0].classList.remove('inactive');
//     }
//     if (currentPosition < slidesCount) {
//         buttons[1].classList.remove('inactive');
//     }
//     if (currentPosition >= slidesCount) {
//         buttons[1].classList.add('inactive');
//     }
// }

// setParams();

// function slideRight() {
//     if (currentPosition != 0) {
//         slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
//         currentMargin += (100 / slidesPerPage);
//         currentPosition--;
//     };
//     if (currentPosition === 0) {
//         buttons[0].classList.add('inactive');
//     }
//     if (currentPosition < slidesCount) {
//         buttons[1].classList.remove('inactive');
//     }
// };

// function slideLeft() {
//     if (currentPosition != slidesCount) {
//         slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
//         currentMargin -= (100 / slidesPerPage);
//         currentPosition++;
//     };
//     if (currentPosition == slidesCount) {
//         buttons[1].classList.add('inactive');
//     }
//     if (currentPosition > 0) {
//         buttons[0].classList.remove('inactive');
//     }
// };
