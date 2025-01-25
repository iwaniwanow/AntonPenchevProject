document.addEventListener("DOMContentLoaded", () => { 
    const ctaButton = document.querySelector(".cta-btn"); 

    ctaButton.addEventListener("mouseover", () => { 
        ctaButton.style.boxShadow = "0px 5px 15px rgba(0,0,0,0.2)"; 
    }); 

    ctaButton.addEventListener("mouseout", () => { 
        ctaButton.style.boxShadow = "none"; 
    }); 

    console.log("Сайтът е зареден успешно!"); 
});
