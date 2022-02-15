window.addEventListener("DOMContentLoaded", (event)=>{

    const logout = document.getElementById('logout');
    logout.addEventListener('click', (e) => {
        e.preventDefault();
        logout.innerHTML = `
        <div></div>
        `
    })
})
