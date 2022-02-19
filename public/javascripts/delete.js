window.addEventListener('DOMContentLoaded', (event)=> {

    const deleter = document.querySelector('#delete-button')

    deleter.addEventListener('click', async (e)=> {
        const bye = e.target;
        console.log('byebye', bye)
    })

})
