` <div class="col-md-4"
        <div class="products-center">
          <!--List Of Characters-->
          <div class="product">
            <div class="img-container">
              <img
                src=${src}
                alt=${char.name}
                class="product-img"
              />
              <button onclick="showDetails('myDiv${index}')" class="bag-btn getInfo">Info</button>
            </div>

            <div class="character-info-set" style='display:none' id="myDiv${index}">
            <p>Name: ${char.name}</p>
            <p>Height: ${char.height}</p>
            <p>Gender: ${char.gender}</p>
            </div>
          </article>
          <!--End of List Of Characters-->
        </div>
        </div>
      
      `;
