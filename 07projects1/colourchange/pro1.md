# yha pr apne ko jb button pr click kre to colour change ho jaye 
events -> cursor move kiya to ye bhi ek event hota hh 
events ko hm function me call back kra skte hh
agr events ho rha hh to koi sunne wala bhi hona chahiye usko event listener khte hh but hm saare event ko nhi sunnege jaise ki cursor move etc 
```code 
buttons.forEach(function(button){
    console.log(button)
})
yha pr saare button aayega kyon ki for each se liya hh


  button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);})
iska mtlb when this particluar buttton clicked run this function  
this e is the event object 
e.target tells you whcih elemnt actually triggered the event



```