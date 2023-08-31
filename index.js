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
   categoryInfo.forEach(info => {
    console.log(info);
   });
   
   }
    catch (err) {
        const body=document.getElementById("body")
        const mess=document.createElement("div")
        mess.classList="text-bold text-center item-center"
        mess.innerHTML=`data not found!!!`
        body.appendChild(mess) }
}
   
dataHandler()
