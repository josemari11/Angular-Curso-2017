"use strict";
var InMemoryDbService = (function () {
    function InMemoryDbService() {
    }
    InMemoryDbService.prototype.createDb = function () {
        var noticias = [
            {
                id: 1,
                estado: 1,
                titulo: "La comunión de la infanta Sofía ya está disponible en Netflix",
                entradilla: "Sólo una semana después de su celebración, la comunión de la infanta Sofía ya está disponible para todo el mundo en la plataforma de vídeo Netflix bajo el nombre de Sofía.",
                cuerpo: "El director de Netflix España, Jesús Expósito, afirma que es una de las producciones estrella de esta temporada. “Nos costó mucho reunir a un elenco como este”, explica. Aun así, lamenta ausencias notables como la de la tía de la protagonista, Cristina. “Hubo un problema de caché”, explica Expósito. En su lugar, sustituyeron su personaje por un poni mágico muy respondón, pero con un gran corazón.El guión corre a cargo de un desconocido autor, de iniciales F. F. y del que poco se conoce. Lo único que Expósito ha desvelado es que el autor lo escribió hace varias décadas aunque apenas se note, pues el guión está “atado y muy bien atado.",
                foto: "",
                enlace: ""
            },
            {
                id: 2,
                estado: 1,
                titulo: "Do It For Your Lover” será el lema del PSOE de Pedro Sánchez tras ganar las primarias,",
                entradilla: "Sólo una semana después de su celebración, la comunión de la infanta Sofía ya está disponible para todo el mundo en la plataforma de vídeo Netflix bajo el nombre de “Sofía.",
                cuerpo: "Para Sánchez, “coger su mano y no cerrar esa puerta” será clave para dejar que el dolor y la tristeza desaparezcan y llegar a La Moncloa.El nuevo líder de la oposición apuesta por un eslogan que conecte con la juventud, pero también con el público europeo. “A veces cuesta decir todo lo que uno piensa, a veces la vida causa estragos aunque te des cuenta”, señaló durante su última intervención pública poco después de conocerse su victoria en las primarias.",
                foto: "",
                enlace: ""
            },
            {
                id: 3,
                estado: 1,
                titulo: "Apple presenta el nuevo chino que fabricará el nuevo iPhone",
                entradilla: "El director ejecutivo de Apple ha presentado hoy en una esperada “keynote” el chino que se encargará de fabricar el próximo modelo de iPhone.",
                cuerpo: "Definiéndolo como “el mejor chino de la historia de la subcontratación en el extranjero”, Cook ha mostrado el fabricante después de quitarle el plástico protector y todos los presentes han podido comprobar que es “un 30% más fino y ligero y mucho más suave”. Como todos los chinos, viene con cámara integrada colgando del cuello con una correa.Oculto hasta ahora en un callejón en los alrededores de Taipei, Chang Chieh-Kuan (張介冠) está listo para comenzar la fabricación del dispositivo estrella de la marca, que podría presentarse ya el próximo mes de septiembre o incluso antes porque, según Cook, “es el chino más rápido que hemos tenido nunca”.El nuevo fabricante dispone también del doble de memoria, lo que le permite fabricar de forma ininterrumpida sin tener que consultar los planos cada cinco minutos. Es también resistente a las salpicaduras y a las caídas.",
                foto: "",
                enlace: ""
            }
        ];
        return { noticias: noticias };
    };
    return InMemoryDbService;
}());
exports.InMemoryDbService = InMemoryDbService;
//# sourceMappingURL=in-memory-data-services-noticias.js.map