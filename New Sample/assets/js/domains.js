//technical  

const iconElements = document.querySelectorAll('[data-icon]');
const slideElements = document.querySelectorAll('[data-slide]');
const cardElements = document.querySelectorAll('[data-card]');

iconElements.forEach(icon => {
    
    
    
    icon.addEventListener('click', handleClick)
    
  })




function handleClick(e){
    const icon = e.target;
    iconElements.forEach(icon =>{
        icon.classList.remove('active');
    })
    
    slideElements.forEach(slide => {
        slide.classList.remove('active')
            
      })
    cardElements.forEach(card => {
        if(card.classList=='card-active'){
            card.classList.remove('card-active')
            card.classList.add('card')
        }
            
      })
      
    
    if(icon.classList!='icon' || icon.classList==""){
      icon.parentElement.classList.add('active');
      
    }
    else{
      icon.classList.add('active');
    }
    
    slideElements.forEach(slide => {
        if(icon.id==slide.id || icon.parentElement.id==slide.id){
            slide.classList.add('active');

            
        }
        
        
      })
    cardElements.forEach(card => {
        if(icon.id==card.id || icon.parentElement.id==card.id){
            card.classList.remove('card');
            card.classList.add('card-active');
        }
        
        
      })

    

}



