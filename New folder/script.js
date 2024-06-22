const yesButton = document.getElementById('yes');
const noButton =document.getElementById('no')
const cta = document.querySelector('.buttons');
const reply =document.getElementById('reply');
const marry =document.getElementById('marry');
var count =0;

noButton.addEventListener('mouseenter', () =>{ 
    const yesIndex = Array.from(cta.children).
    indexOf(yesButton);
    const noIndex = Array.from(cta.children).
    indexOf(noButton);

    if (yesIndex < noIndex) {
        cta.insertBefore(noButton, yesButton);}
     else {
        cta.insertBefore(yesButton, noButton);
    }

})
yesButton.addEventListener('click', () => {
    
    if(count == 0 )
    {reply.innerHTML = 'I LOVE YOU ❤️';
    count++;}
    else if(count==1)
    {reply.innerHTML='NOT AGAIN!! YOU ACTUALLY LOVE ME';
        count++;
    }
    else if(count==2)
    {reply.innerHTML="IF YOU TAP YES AGAIN love you so much";
        count++;
    }
    else if(count==3)
    {marry.innerHTML="will you be my girl?";
        count++;
    }
    else if(count==4)
    {reply.innerHTML="Mummy Bahu Milgyiiii....";
    }

});