const section = document.getElementById("root");

function getStars() {
  fetch("https://swapi.dev/api/people")
    .then((res) => res.json())
    .then((data) => {
      let output='';
      data.results.forEach((char, index) => {

        let {name, height, gender} = char
        let src = `img/${index}.jpg` || `img/${index}.png`;

        output += `
        <div class="col-lg-3 col-md-4 col-sm-4"
        <div class="products-center">
          <!--List Of Characters-->
          <div class="product">
            <div class="img-container">
              <img
                src=${src}
                alt=${name}
                class="product-img"
              />
              <button onclick="showDetails('myDiv${index}')" class="bag-btn getInfo">Info</button>
            </div>

            <div class="character-info-set" style='display:none' id="myDiv${index}">
            <p>Name: ${name}</p>
            <p>Height: ${height}</p>
            <p>Gender: ${gender}</p>
            </div>
          </article>
          <!--End of List Of Characters-->
        </div>
        </div>
      
      `;
      });

      section.innerHTML += output;
    });
}

getStars();

function showDetails(index) {
  const getInfo = document.getElementById(index);
  console.log(getInfo.style.display);
  if (getInfo.style.display == "none") {
    getInfo.style.display = "block";
  } else {
    getInfo.style.display = "none"
  }
}
