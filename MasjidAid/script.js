// function displayNavs() {
//     document.get`
// }
document.querySelector('.nav-icon').addEventListener('click', (e)=>{
    document.querySelector('.nav-links').style.display = 'flex'
    document.querySelector('.nav-links').style.flexDirection = 'column'
    document.querySelector('.nav-icon').style.display = 'none'
    document.querySelector('.nav-close').style.display = 'block'
})
document.querySelector('.nav-close').addEventListener('click', (e)=>{
    document.querySelector('.nav-links').style.display = 'none'
    document.querySelector('.nav-icon').style.display = 'block'
    document.querySelector('.nav-close').style.display = 'none'
})