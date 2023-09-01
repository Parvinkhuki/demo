const dataHandler=async()=>{
    try {
    const res=await fetch(` https://openapi.programming-hero.com/api/videos/categories`)
    const datas=await res.json()
    const data=datas.data
    tabHendler(data)
    }
    catch (err) {
        const body=document.getElementById("body")
        const mess=document.createElement("h1")
        mess.classList="text-bold text-center item-center"
        mess.innerText=`data not found!`
        body.appendChild(mess) }
}
const tabHendler=data=>{
    data.forEach(category => {

        const tabContainer=document.getElementById("tab-container")
        const tab=document.createElement('div')
        tab.innerHTML=`<a onclick="handleVideo('${category.category_id}')" class="bg-[#FF1F3D] text-white px-5 py-3 font-bold rounded">${category.category}</a>`
        tabContainer.appendChild(tab)
    });
}
const handleVideo=async(id)=>{
    try {
    const res =await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const categoryId =await res.json()
   const categoryInfo=categoryId.data
   console.log(categoryInfo);
   cardHandelar(categoryInfo)
   
    }
    catch (err) {
         const body=document.getElementById("body")
         const mess=document.createElement("div")
         mess.classList="text-bold text-center item-center"
         mess.innerHTML=`data not found!!!`
         body.appendChild(mess) }
}
  const cardHandelar =categoryInfo=>{
    const cardDiv=document.getElementById("card-container")
    cardDiv.classList="w-[90%] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8"
    cardDiv.textContent='';
 if (categoryInfo.length!==0) {  categoryInfo.forEach(info => {
  console.log(info); 
  secToHrs (`${info.others.posted_date
  }`)
  const div=document.createElement("div")
  
  div.classList="card bg-gray shadow-2xl "
  div.innerHTML=`  <figure class="px-10 pt-10 mx-auto">
  <img class="w-full h-56" src='${info.thumbnail

  }' alt="videos not found" />
</figure>
<p></p>
<div class="card-body ">
 <div class="flex justify-start
  gap-5 "> 
 <img class="w-[50px] h-[50px] rounded-full" src='${info.authors[0].profile_picture}'>
 <div>

 <h2 class="font-bold text-2xl">${info.title}</h2>
 <div class="flex justify-start
  gap-5 ">
  <h3 class=" mt-3 text-xl" >${info.authors[0].profile_name}</h3>
 <div  class=" mt-4" >
${info.authors[0]?.verified?"<img src='./fi.png'>":""}
 
  </div>
</div>
<p>
<span>${info.others.views}<span> views
 </p>
</div>
 </div>
 `
cardDiv.appendChild(div)


 });
  
 } else {
  const body=document.getElementById("body")
  
  const mess=document.createElement("div")
  mess.classList="text-bold text-center my-40 mx-auto lg:col-span-4 md:col-span-4 "
  mess.innerHTML=`<img class="flex m-auto justify-center item-center" src="./icon.png">
  <h2 class="text-5xl font-bold">Oops!! Sorry, There is no <br> content here</h2>`
  body.appendChild(mess) 
 }
  
  }

  const secToHrs=(sec)=>{
    const secs=parseInt(sec)
    const hours =Math.floor (secs/3600);
  const leftSecond =Math.floor (secs % 3600);;
  const min =Math.floor (leftSecond/3600);
  
  }
  



dataHandler()
handleVideo("1000")
