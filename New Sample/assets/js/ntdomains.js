//non technical
const nticonElements = document.querySelectorAll('[data-nticon]');
const ntslideElements = document.querySelectorAll('[data-ntslide]');
const ntcardElements = document.querySelectorAll('[data-ntcard]');


nticonElements.forEach(nticon => {
    
    
    
    nticon.addEventListener('click', handleClick)
    
  })




function handleClick(e){
    const nticon = e.target;
    nticonElements.forEach(nticon =>{
        nticon.classList.remove('active');
    })
    
    ntslideElements.forEach(ntslide => {
        ntslide.classList.remove('active')
            
      })
    ntcardElements.forEach(ntcard => {
        if(ntcard.classList=='card-active'){
            ntcard.classList.remove('card-active')
            ntcard.classList.add('card')
        }
            
      })
      
    
      if(nticon.classList!='nticon' || nticon.classList==""){
        nticon.parentElement.classList.add('active');
        
      }
      else{
        nticon.classList.add('active');
      }
    ntslideElements.forEach(ntslide => {
        if(nticon.id==ntslide.id || nticon.parentElement.id==ntslide.id){
            ntslide.classList.add('active');
        }
        
        
      })
    ntcardElements.forEach(ntcard => {
        if(nticon.id==ntcard.id || nticon.parentElement.id==ntcard.id){
            ntcard.classList.remove('card');
            ntcard.classList.add('card-active');
        }
        
        
      })

    

}