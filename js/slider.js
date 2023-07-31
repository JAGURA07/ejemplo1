(function(){
    
    const sliders = [...document.querySelectorAll('.testimony__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        right();
    });

    buttonBefore.addEventListener('click', ()=>{
        left();
    });

    const right = ()=>{
        const container = document.querySelector('.testimony__container')
        if(container.classList.contains('left')){
            container.classList.replace('left', 'right')
        } else {
            container.classList.add('right')
        }
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id
        const nextTestimony = document.querySelector('.testimony__body.next').dataset.id
        const prevTestimony = document.querySelector('.testimony__body.before').dataset.id
        let currentValue = Number(currentTestimony) + 1 === sliders.length+1 ? 1 : Number(currentTestimony) + 1
        let nextValue = Number(nextTestimony) + 1 === sliders.length+1 ? 1 : Number(nextTestimony) + 1
        let prevValue = Number(prevTestimony) + 1 === sliders.length+1 ? 1 : Number(prevTestimony) + 1
    
        setTimeout(() => {
            container.classList.remove('right')

            sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show')
        sliders[Number(nextTestimony)-1].classList.remove('next')
        sliders[Number(prevTestimony)-1].classList.remove('before')
        sliders[currentValue-1].classList.add('testimony__body--show')
        sliders[nextValue-1].classList.add('next')
        sliders[prevValue-1].classList.add('before')
        }, 1000);

    }
    
    const left = ()=>{
        const container = document.querySelector('.testimony__container')
        if(container.classList.contains('right')){
            container.classList.replace('right', 'left')
        } else {
            container.classList.add('left')
        }
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id
        const nextTestimony = document.querySelector('.testimony__body.next').dataset.id
        const prevTestimony = document.querySelector('.testimony__body.before').dataset.id
        let currentValue = Number(currentTestimony) - 1 === 0 ? sliders.length : Number(currentTestimony) - 1
        let nextValue = Number(nextTestimony) - 1 === 0 ? sliders.length : Number(nextTestimony) - 1
        let prevValue = Number(prevTestimony) - 1 === 0 ? sliders.length : Number(prevTestimony) - 1
    
        setTimeout(() => {
            container.classList.remove('left')

            sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show')
        sliders[Number(nextTestimony)-1].classList.remove('next')
        sliders[Number(prevTestimony)-1].classList.remove('before')
        sliders[currentValue-1].classList.add('testimony__body--show')
        sliders[nextValue-1].classList.add('next')
        sliders[prevValue-1].classList.add('before')
        }, 1000);

        
    
    }

})();