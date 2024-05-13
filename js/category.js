var htmlContiner = document.getElementById("viwecategory");
var showMore = document.getElementById("showMore");
var x =8;
call();
function call(){
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
.then((res)=>res.json() )
.then((json)=>{
    
    contaner = ``;
    for (const item of json.categories.slice(0,x)) {
        contaner += `<div class="col-md-3">
        <div class="text-center">
         <a href="singlcategory.html?item=${item.strCategory}"> <img class="img-fluid rounded-1" src="${item.strCategoryThumb}" alt=""></a>
          <h2 class="text-light">${item.strCategory}</h2>
        </div>
        </div>`
    }
 htmlContiner.innerHTML=contaner;
})
}
function viweallCateogry(){
    x=1000;
    call();
    showMore.classList.add("d-none");
}
function calls(){
    var choose = document.getElementById("select").value;
    var page ="info.html?item=";
    location.href=page+choose;
}

