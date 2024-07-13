const nav_width = $("nav").outerWidth();
const white_bar_width = $(".white_bar").outerWidth();
const xmark = $(".bars");
const bars = $(".bars");

if (window.innerWidth >= "400" && window.innerWidth <= "700") {
  $("nav").animate({ left: "-24%" }, 600);
  //   console.log("hello");
}

$(".fa-xmark ").on("click", function () {
  // $(".bars_xmark").removeClass("d-none");
  $(".bars").removeClass("d-none");
  $(".xmark").addClass("d-none");
  $("nav").animate({ left: -nav_width + white_bar_width }, 600);
  $("nav ul li").animate({ top: "300px" }, 1000);

  if (window.innerWidth <= "600") {
    $("nav").animate({ left: "-31%" }, 600);
    // console.log("hello");
  }
});

$(".fa-bars").on("click", function () {
  $("nav").animate({ left: 0 }, 600);

  if (window.innerWidth >= "400" && window.innerWidth <= "700") {
    $("nav").animate({ width: "38%" }, 600);
    console.log("hello");
  }

  $(".bars").addClass("d-none");
  $(".xmark").removeClass("d-none");
  $("nav ul li").eq(0).animate({ top: 0 }, 700);
  $("nav ul li").eq(1).animate({ top: 0 }, 800);
  $("nav ul li").eq(2).animate({ top: 0 }, 900);
  $("nav ul li").eq(3).animate({ top: 0 }, 1000);
  $("nav ul li").eq(4).animate({ top: 0 }, 1100);
  $("nav ul li").eq(5).animate({ top: 0 }, 1200);
});

async function display_meals() {
  let cartona = "";
  let api = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  let res = await api.json();
  //   console.log(res);
  for (let i = 0; i < 14; i++) {
    cartona += `
      
      
      <div class="col-md-3">


                <div class="own_col">
                    <div class="own_card  position-relative rounded-3  mt-2   ">


                        <img src="${res.categories[i].strCategoryThumb}" class="w-100 rounded-3" alt="">
                        <div class="layer w-100 h-100 rounded-3  d-flex flex-column justify-content-center align-items-center p-1  ">

                        
                        <p class="fw-bold fs-1 title  ">${res.categories[i].strCategory}</p>
                        
                        
                        
                        <p class="fw-bold fs-6 h-50 ">
                        ${res.categories[i].strCategoryDescription}
                        </p>
                        

                            
                            
                        </div>

                    </div>

                </div>
                
            </div>
                
           
    
    
    
    `;
  }
  document.querySelector(".row.g-3").innerHTML = cartona;

  //   document.querySelector(".own_card").addEventListener("click", function (e) {
  //     console.log(e.target);
  //   });

  $(".own_card").click(function (e) {
    // console.log(e.delegateTarget);
    let food_name = e.target.children[0].innerHTML;
    console.log(food_name);
    // let mahmoud = "corba";
    async function getapi() {
      let api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${food_name}`
      );
      let res = await api.json();
      console.log(res);
      let cartona = "";
      for (var i = 0; i < res.meals.length; i++) {
        cartona += `
      
      
      <div class="col-md-3">


                <div class="own_col">
                    <div class="own_card  position-relative rounded-3  mt-2   ">


                        <img src="${res.meals[i].strMealThumb}" class="w-100 rounded-3" alt="">
                        <div class="layer w-100 h-100 rounded-3  d-flex justify-content-center align-items-center  ">

                            <p class="fw-bold fs-1 ">${res.meals[i].strMeal}</p>


                        </div>

                    </div>

                </div>
                
            </div>
           
    
    
    
    `;
      }

      document.querySelector(".row.g-3").innerHTML = cartona;

      $(".own_card").click(function (e) {
        let food_name = e.target.innerText;
        console.log(food_name);
        // let mahmoud = "corba";
        async function getapi() {
          let api = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${food_name}`
          );
          let res = await api.json();
          console.log(res);

          document.querySelector(".main").innerHTML = `
    
    
    
    <div class="ingredients">


        <div class="container-md">
            <div class="row ps-4 ">
                <div class="col-md-4">
                    <div class="ing_col pt-5">
                        <img src="${res.meals[0].strMealThumb}" class="w-100 rounded-3" alt="">
                        <p class="text-white fw-bolder fs-1">Hello</p>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="ing_col pt-5">
                        <h2 class="text-white">Instructions</h2>
                        <p class="text-white">${res.meals[0].strInstructions}</p>

                        <p class="text fs-2 fw-bolder"> Area<span class=""> : ${res.meals[0].strArea}</span></p>
                        <p class="text fs-2 fw-bolder "> Category<span class=""> : ${res.meals[0].strCategory}</span></p>
                        <div class="Recipes">

                            <p class="text fs-2 fw-bolder">Recipes :</p>
                            <div class="box">
                                <p>${res.meals[0].strMeasure1} ${res.meals[0].strIngredient1}  </p>
                                <p>${res.meals[0].strMeasure2} ${res.meals[0].strIngredient2}  </p>
                                <p>${res.meals[0].strMeasure3} ${res.meals[0].strIngredient3}  </p>
                                <p>${res.meals[0].strMeasure4} ${res.meals[0].strIngredient4}  </p>
                                <p>${res.meals[0].strMeasure5} ${res.meals[0].strIngredient5}  </p>
                                <p>${res.meals[0].strMeasure6} ${res.meals[0].strIngredient6} </p>
                                <p>${res.meals[0].strMeasure7} ${res.meals[0].strIngredient7}  </p>
                                <p>${res.meals[0].strMeasure8} ${res.meals[0].strIngredient8}  </p>
                                <p>${res.meals[0].strMeasure9} ${res.meals[0].strIngredient9}  </p>
                                <p>${res.meals[0].strMeasure10} ${res.meals[0].strIngredient10}  </p>
                                <p>${res.meals[0].strMeasure11} ${res.meals[0].strIngredient11}  </p>
                                <p>${res.meals[0].strMeasure12} ${res.meals[0].strIngredient12}  </p>
                                <p>${res.meals[0].strMeasure13} ${res.meals[0].strIngredient13}  </p>
                                <p>${res.meals[0].strMeasure14} ${res.meals[0].strIngredient14}  </p>
                                <p>${res.meals[0].strMeasure15} ${res.meals[0].strIngredient15}  </p>
                                <p>${res.meals[0].strMeasure16} ${res.meals[0].strIngredient16}  </p>
                                <p>${res.meals[0].strMeasure17} ${res.meals[0].strIngredient17}  </p>
                                <p>${res.meals[0].strMeasure18} ${res.meals[0].strIngredient18}  </p>
                                <p>${res.meals[0].strMeasure19} ${res.meals[0].strIngredient19}  </p>
                                <p>${res.meals[0].strMeasure20} ${res.meals[0].strIngredient20}  </p>
                            </div>
                        </div>
                        <div class="tags">
                            <p class="text fs-2 fw-bolder">tags :</p>

                            <p class="soup">soup</p>

                            <div class="spans">
                                <a href="${res.meals[0].strSource}"><span class="source ">source</span></a>
                                <a href="${res.meals[0].strYoutube}">
                                    <span class="youtube">Youtupe</span>
                                </a>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div> 

    
    
    
    
    
    `;
        }
        getapi();
      });
    }
    getapi();
  });
}
display_meals();

window.addEventListener("load", function () {
  $(".load_screen").fadeOut(1000, function () {
    $(".load_screen").removeClass("d-flex");
    $("body").css("overflow", "visible");
  });
});
