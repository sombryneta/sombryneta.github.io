document.addEventListener("DOMContentLoaded", function () {

    // Atualiza todos os elementos com a classe 'year'
    document.querySelectorAll('.year').forEach(el => {
        el.textContent = new Date().getFullYear();
    });

    // Desativa zoom com CTRL+scroll
    document.addEventListener("wheel", function (event) {
        if (event.ctrlKey) {
            event.preventDefault();
        }
    }, { passive: false });

    function setupSlider(galeriaSelector) {
        const galeria = document.querySelector(galeriaSelector);
        if (!galeria) return;

        const prevBtn = galeria.querySelector(".slider-prev");
        const nextBtn = galeria.querySelector(".slider-next");
        const itemsContainer = galeria.querySelectorAll(".item");

        let items = Array.from(itemsContainer);

        function render() {
            let sliderContent = galeria.querySelector(".slider-content");
            if (!sliderContent) {
                sliderContent = document.createElement("div");
                sliderContent.className = "slider-content";
                galeria.insertBefore(sliderContent, nextBtn);
            }
            sliderContent.innerHTML = ""; // Limpa conteúdo anterior
            items.forEach(item => sliderContent.appendChild(item));
        }

        nextBtn.addEventListener("click", () => {
            items.push(items.shift()); // Avança
            render();
        });

        prevBtn.addEventListener("click", () => {
            items.unshift(items.pop()); // Retrocede
            render();
        });

        render();
    }

    setupSlider(".musica-galeria");
    setupSlider(".videos-galeria");

const menuToggle = document.querySelector(".menu-toggle");
const navContainer = document.querySelector(".nav-container");

menuToggle.addEventListener("click", () => {
  navContainer.classList.toggle("active");
});
});



