import { useRef } from "react"

export const Hover=()=>{
      let nav =document.getElementById("nav")
let main =document.getElementById("main")
let Titelitem=document.querySelectorAll('.titleNav')
 

    nav.addEventListener("mouseenter",()=>{
        main.classList.add("Hoverin")
        main.classList.remove("main")
        Titelitem.forEach(title=>{
            title.style.visibility='visible'
            title.style.display='flex'
    
              
        })
        
        
    })
    nav.addEventListener('mouseleave',()=>{
        main.classList.add("main")
        main.classList.remove("Hoverin")
          Titelitem.forEach(title=>{
            title.style.display='none'
            
           
        })
    })
}

export const listClick=()=>{

let listItem=document.querySelectorAll('.item')
listItem.forEach(items=>{
    items.addEventListener('click',()=>{
      listItem.forEach(li=>{
        li.classList.remove('active')
      })
      items.classList.add('active')
    })
})
}
export const clickFunction=()=>{
  let HomeSection=document.getElementById("HomeSection")
  let HomeNAv=document.getElementById("HomeNav")
  let GroupNav=document.getElementById("GroupNav")
  let GroupsArticeals=document.getElementById("GroupsArticeals")
  let fontCaption=document.getElementById("fontCaption")
let fontCaptionH2 =document.getElementById('fontCaptionH2')
let fontCaptionP =document.getElementById("fontCaptionP")
let Setting =document.getElementById("Setting")
let settingNav =document.getElementById("settingNav")
let summaryBankNAV =document.getElementById("summaryBank")
let SummaryBank =document.getElementById("SummaryBank")
let itemFilter =document.getElementById("itemFilter")
let buttrnFilter =document.getElementById("buttrnFilter")

let cheak=true


buttrnFilter.addEventListener('click',()=>{
  if(cheak){
    itemFilter.classList.add("itemFilteractive")
    cheak=false
   
  }
  else{
  
      itemFilter.classList.remove("itemFilteractive")
    cheak=true
    
  }
    
})


  GroupNav.addEventListener("click",()=>{
  HomeSection.style.display="none";
  SummaryBank.style.display="none";
  Setting.style.display='none';
  GroupsArticeals.style.display="flex"
   fontCaption.classList.add("animationCaption")
   fontCaptionH2.classList.add("animationCaptionH2")
   fontCaptionP.classList.add("animationCaptionp")
  })
  HomeNAv.addEventListener("click",()=>{
    HomeSection.style.display='block';
      GroupsArticeals.style.display="none"
      SummaryBank.style.display="none"
    Setting.style.display='none';
   
   

  })
settingNav.addEventListener("click",()=>{
 HomeSection.style.display="none";
 GroupsArticeals.style.display="none";
 SummaryBank.style.display="none";
  Setting.style.display='flex';

})
summaryBankNAV.addEventListener("click",()=>{
 HomeSection.style.display="none";
 GroupsArticeals.style.display="none";
 Setting.style.display='none';
 SummaryBank.style.display='flex';

})
}

export const handlerVideo=()=>{
  let Typvideo=document.querySelectorAll('.Type-Media-video')

  Typvideo.forEach(Typvideo=>{
    let progres=Typvideo.querySelector(".progres")
    let video=Typvideo.querySelector(".video")
    let TimeVideo=Typvideo.querySelector(".TimeVideo")
    let itemvideo=Typvideo.querySelector(".item-video")
let handler;




 video.addEventListener("loadedmetadata",()=>{
  progres.max=video.duration
  TimeUpdite()
 })
video.addEventListener('timeupdate',()=>{
  progres.value=video.currentTime;
  TimeUpdite()
})
progres.addEventListener("input",()=>{
  video.currentTime=progres.value
  TimeUpdite()
})

function formattime(Secends){
const Hours=Math.floor(Secends/3600)
const minent=Math.floor((Secends%3600)/60)
const sec=Math.floor(Secends%60);
// return "1:04:4"
return `${Hours.toString().padStart(2,"0")}:${minent.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`

}

function TimeUpdite(){
const CurentTime=formattime(video.currentTime)
const Totle=formattime(video.duration)
  TimeVideo.textContent=`${CurentTime}/${Totle}`
}
function ItemVideo(){
  itemvideo.style.display="flex"
  if(handler) clearTimeout(handler)

    handler=setTimeout(()=>{
  itemvideo.style.display="none"
    },5000)
}
  video.addEventListener('mousemove',ItemVideo)
 
  })


}
// 


