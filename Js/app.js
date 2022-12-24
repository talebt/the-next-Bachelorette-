const alquds=document.querySelector("#alquds");
const naplus=document.querySelector("#naplus");
const hebron=document.querySelector("#hebron");

document.querySelector("#alquds_next").addEventListener('click',alquds_next)
document.querySelector("#naplus_2").addEventListener('click',naplus_2)
document.querySelector("#hebron_next").addEventListener('click',hebron_next)

function alquds_next(){
hebron.classList.add('hidden')
naplus.classList.add('hidden')
alquds.classList.toggle('hidden')



}
function naplus_2(){
    alquds.classList.add('hidden')
    hebron.classList.add('hidden')
    naplus.classList.toggle('hidden')
       
    
    }
    function hebron_next(){
        alquds.classList.add('hidden')
        naplus.classList.add('hidden')
        hebron.classList.toggle('hidden')
        
        
        
        }
            
