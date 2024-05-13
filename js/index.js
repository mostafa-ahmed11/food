    var htmlContiner = document.getElementById("fill");
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then((res) => res.json())
    .then((json) => {  
        var contaner = ``;
        for (const item of json.meals.slice(0,10)) {
            contaner += `<div class="swiper-slide text-light">
                <div>
                    <a href="info.html?item=${item.strMeal}"><img src="${item.strMealThumb}" class="w-100 p-1 border border-light rounded-circle" alt=""></a>
                    <h3 class="text-center p-4">${item.strMeal}</h3>
                </div>
            </div>`;
        }
        htmlContiner.innerHTML = contaner;

        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 4,
            centeredSlides: true,
            spaceBetween: 30,
            grabCursor: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            autoplay: {
                delay: 2000, 
                disableOnInteraction: false, 
            },
            
        });
    });
function call(){
    var choose = document.getElementById("select").value;
    var page ="info.html?item=";
    location.href=page+choose;
}


