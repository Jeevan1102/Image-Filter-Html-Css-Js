 const searchForm=document.getElementById("search-form");
const searchBox=document.getElementById("search-Box");
const searchResult=document.getElementById("search-result");
const showMore=document.getElementById("show-more-btn");

const AccessKey="UhbD_qieCbLr7BDG2sQWc7pWbtTiABRbzU8Uq4hqzZ0";

let keyword="";
let page=1;
async function searchImages(){
    keyword=searchBox.value;
    const url=`https://api.unsplash.com/search/photos?pages=${page}&query=${keyword}&client_id=${AccessKey}&per_page=12`;

 const resp=await fetch (url);
 const Res=await resp.json();

 if(page===1){
    searchResult.innerHTML="";
 }


const rest=Res.results;
rest.map((res)=>{
    const image=document.createElement("img");
    image.src=res.urls.small;
    const link=document.createElement("a");
    link.href=res.links.html;
    link.target="_blank";
    link.appendChild(image);
    searchResult.appendChild(link);

})
showMore.style.display="block";
}

searchForm.addEventListener("submit",(e)=>{
     e.preventDefault();
    page=1;
    searchImages();
})

showMore.addEventListener("click",()=>{
    page++;
    searchImages();
})