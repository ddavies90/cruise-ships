(function exportController() { 
    class Controller {
        constructor() {
            this.initialiseSea();
        };
        initialiseSea() {
            let count = 0;
            let viewport = document.getElementById('viewport');
            window.setInterval(() => {
                if(count % 2 === 0) {
                    viewport.style.backgroundImage = "url('../images/water0.png')";
                } else {
                    viewport.style.backgroundImage = "url('../images/water1.png')";
                };
                count++;
            }, 1000)     
        };
    };
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Controller;
    } else {
        window.Controller = Controller;
    };
}());

