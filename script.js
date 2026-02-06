const mouseFollower = document.querySelector(".mouse-follwer");
let x = 0, y = 0;
addEventListener("mousemove", (e) => {
    const {clientX, clientY} = e;
    
    x = clientX;
    y = clientY;
   

})

function far(){
    mouseFollower.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(far)
}

far()