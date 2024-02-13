
let toggle = document.querySelector('.toggle'); // Добавлен символ точки перед 'toggle'
toggle.addEventListener('click', () => {
  console.log('clicked');
  let bottomHeader = document.querySelector('.bottomHeader');
  bottomHeader.classList.toggle('show');
});



const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2M0YjA1ZjliODhiOWFmZGI3MmNjYTMwNjE0OGVmNCIsInN1YiI6IjY1Y2I0YjFkYTM0OTExMDE2NDdjZGQ4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gu3WJqa0cpM06RJV3uvvgYl0a9GnB4_IVfBlIsceSSs'; // Replace 'your_access_token' with your actual access token

// URL for the authentication endpoint
const url = 'https://api.themoviedb.org/3/discover/movie';

// Headers
const headers = {
  'Authorization': 'Bearer ' + token,
  'Accept': 'application/json'
};




// Fetch request
fetch(url, {
  method: 'GET',
  headers: headers
})
  .then(response => {
    if (!response.ok) {
      

      throw new Error(`A error occurred: ${response.status}`);
    }
    return response.json();
  })
  .then((movies)=>{
    console.log(movies.results);
    let container = document.querySelector('.container');
    let movieLen = movies.results.length

    showMovies();
    
    function showMovies(){
      for(var j = 0; j < movieLen;j++){
        let movie = movies.results [j];
        container.innerHTML +=`<div class="box">
        <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path
      }" alt="Poster">
        <div class="moviesDetails">
          <div class="leftDetails">
            <h5>${movie.original_title}</h5>
            <p>${movie.release_date}</p>
          </div>
          <div class="rightDetails">
            <p>${movie.vote_average}</p>
          </div>
        </div>
      </div>`
      }
    }
  })
 

  
  
  