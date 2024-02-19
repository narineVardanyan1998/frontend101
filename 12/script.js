
let toggle = document.querySelector('.toggle'); 
toggle.addEventListener('click', () => {
  console.log('clicked');
  let bottomHeader = document.querySelector('.bottomHeader');
  bottomHeader.classList.toggle('show');
});

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2M0YjA1ZjliODhiOWFmZGI3MmNjYTMwNjE0OGVmNCIsInN1YiI6IjY1Y2I0YjFkYTM0OTExMDE2NDdjZGQ4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gu3WJqa0cpM06RJV3uvvgYl0a9GnB4_IVfBlIsceSSs';


const url = 'https://api.themoviedb.org/3/discover/movie';
 

const headers = {
  'Authorization': 'Bearer ' + token,
  'Accept': 'application/json'
};

const container = document.querySelector('.container');
const showMoreButton = document.getElementById('showMore');

let currentPage = 1;
const itemsPerPage = 10;

function showNextPage() {
  currentPage++;
  showMovies(currentPage);
}

showMoreButton.addEventListener('click', showNextPage);
 
function showMovies(page) {
  fetch(`${url}?page=${page}`, {
    method: 'GET',
    headers: headers
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`An error occurred: ${response.status}`);
      }
      return response.json();
    })
    .then(movies => {
      let movieLen = movies.results.length;

      for (let j = 0; j < movieLen; j++) {
        let movie = movies.results[j];
        let movieBox = document.createElement('div');
        movieBox.className = 'box';
        movieBox.innerHTML = `<img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="Постер">
          <div class="moviesDetails">
            <div class="leftDetails">
              <h5>${movie.original_title}</h5>
              <p>${movie.release_date}</p> 
            </div>
            <div class="rightDetails">
            <p>${movie.vote_average}</p>
          </div>
          </div>`;

        movieBox.addEventListener('click', () => showMovieDetails(movie.id));

        container.appendChild(movieBox);
      }
    })
    .catch(error => console.error(error));
 
}

showMovies(currentPage);

function openMovieDetailsPage(movieDetails) {
  const detailsUrl = `moviedetails.html?id=${movieDetails.id}`;
  const newTab = window.open(detailsUrl, '_blank');


  setTimeout(() => {
    if (newTab) {
      newTab.postMessage({
        type: 'movieDetails',
        data: {
          posterPath: `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`,
          overview: movieDetails.overview
        }
      }, '*');
    } else {
      console.error('Failed to open the new tab.');
    }
  }, 1000);
}


  const seatContainer = document.querySelector('.seat-container');
  const totalPriceElement = document.getElementById('totalPrice');
  const bookButton = document.getElementById('bookButton');

   
  const rows = 10; 
  const columns = 10; 


  function generateSeats() {
     for (let i = 1; i <= rows; i++) {
       const rowElement = document.createElement('div');
       rowElement.classList.add('row');

       for (let j = 1; j <= columns; j++) {
        const seatElement = document.createElement('div');
        seatElement.classList.add('seat', 'seat-free');
        seatElement.setAttribute('data-row', i);
         seatElement.setAttribute('data-column', j);

         seatElement.addEventListener('click', handleSeatClick);

         rowElement.appendChild(seatElement);
       }

      seatContainer.appendChild(rowElement);   
      }
   }

    function handleSeatClick(event) {
    const selectedSeat = event.target;

     if (selectedSeat.classList.contains('seat-free')) {
       selectedSeat.classList.remove('seat-free');
      selectedSeat.classList.add('seat-selected');
    } else {
       selectedSeat.classList.remove('seat-selected');
      selectedSeat.classList.add('seat-free');
    }

     updateTotalPrice();
   }

     function updateTotalPrice() {
     const selectedSeats = document.querySelectorAll('.seat-selected');
     const ticketPrice = 10;

     const totalPrice = selectedSeats.length * ticketPrice;
     totalPriceElement.textContent = totalPrice;
   }


   function bookSeats() {

     console.log('Seats booked successfully!');
   }


   bookButton.addEventListener('click', bookSeats);


   generateSeats();


 bookButton.addEventListener('click', bookSeats);

function showMovieDetails(movieId) {
  fetch(`https://api.themoviedb.org/3/movie/${movieId}`, {
    method: 'GET',
    headers: headers
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`An error occurred: ${response.status}`);
      }
      return response.json();
    })
    .then(movieDetails => {
      // const detailsUrl = `https://www.themoviedb.org/movie/${movieId}`;
      // window.open(detailsUrl, '_blank');
      openMovieDetailsPage(movieDetails);
      generateSeats();
    })
    .catch(error => console.error(error));
}


// const cinemaHall = {
//   totalSeats: 100, // Общее количество мест
//   bookedSeats: [1, 5, 10], // Пример забронированных мест
//   seatPrices: {
//     standard: 10, // Стоимость стандартного места
//     vip: 20, // Стоимость VIP-места (пример)
//   },
// };


// function isSeatBooked(seatNumber) {
//   return cinemaHall.bookedSeats.includes(seatNumber);
// }


// const ticketPrices = cinemaHall.seatPrices; // Получите цены на билеты


// const priceElement = document.createElement('p');
// const seatsInfoElement = document.createElement('p');


// const seatNumber = 1;
// const seatType = isSeatBooked(seatNumber) ? 'Booked' : 'Standard';


// priceElement.innerHTML = `<p>Ticket Price: $${ticketPrices[seatType.toLowerCase()]}</p>`;
// seatsInfoElement.innerHTML = `<p>Seat Number: ${seatNumber} (${seatType})</p>`;

// movieBox.appendChild(priceElement);
// movieBox.appendChild(seatsInfoElement);

// //seats reservation
// // Add this to your moviedetails.js
// document.addEventListener('DOMContentLoaded', function () {
//   const seatContainer = document.querySelector('.seat-container');
//   const totalPriceElement = document.getElementById('totalPrice');
//   const bookButton = document.getElementById('bookButton');

//   // Assume you have seat information (rows and columns) from the server
//   const rows = 5; // Change this based on your venue
//   const columns = 10; // Change this based on your venue
// });
