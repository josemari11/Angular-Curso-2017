// Importo la interfaz InMemoryDbService, que sirve para trabajar
// con bbdd en memoria (añade soporte para operaciones CRUD, p.ej)
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		let noticias = [
			{
			"id": "1",
			"fecha": "2017-05-22 17:38:20",
			"estado": "3",
			"titulo": "Apple presenta el nuevo chino que fabricará el nuevo iPhone",
			"entradilla": "ES MÁS DELGADO, TIENE MÁS MEMORIA Y SU AUTONOMÍA PERMITE JORNADAS DE MÁS DE 20 HORAS",
			"cuerpo": "El director ejecutivo de Apple ha presentado hoy en una esperada “keynote” el chino que se encargará de fabricar el próximo modelo de iPhone. Definiéndolo como “el mejor chino de la historia de la subcontratación en el extranjero”, Cook ha mostrado el fabricante después de quitarle el plástico protector y todos los presentes han podido comprobar que es “un 30% más fino y ligero y mucho más suave”. Como todos los chinos, viene con cámara integrada colgando del cuello con una correa.\r\n\r\nOculto hasta ahora en un callejón en los alrededores de Taipei, Chang Chieh-Kuan (???) está listo para comenzar la fabricación del dispositivo estrella de la marca, que podría presentarse ya el próximo mes de septiembre o incluso antes porque, según Cook, “es el chino más rápido que hemos tenido nunca”.\r\n\r\nEl nuevo fabricante dispone también del doble de memoria, lo que le permite fabricar de forma ininterrumpida sin tener que consultar los planos cada cinco minutos. Es también resistente a las salpicaduras y a las caídas.\r\n\r\nEn cuanto a la autonomía, Tim Cook ha querido destacar que Chang Chieh-Kuan puede estar funcionando hasta veinte horas seguidas, cuarenta si está en reposo.\r\n\r\nLa presentación ha terminado con una divertida muestra de los comandos por voz, en la que Tim Cook daba órdenes al nuevo chino y éste, simplemente oyendo las palabras clave, se disponía a ejecutarlas con una rapidez nunca vista.\r\n",
			"foto": "http://emtstatic.com/2017/05/chinorris.jpg",
			"url": "http://www.elmundotoday.com/2017/05/apple-presenta-el-nuevo-chino-que-fabricara-el-nuevo-iphone/"
			},
			
			{
			"id": "15",
			"fecha": "2017-05-11 17:41:57",
			"estado": "3",
			"titulo": "La comunión de la infanta Sofía ya está disponible en Netflix",
			"entradilla": "LLEVA POR TÍTULO \"SOFÍA, LA INFANTA FANTÁSTICA\"",
			"cuerpo": "Sólo una semana después de su celebración, la comunión de la infanta Sofía ya está disponible para todo el mundo en la plataforma de vídeo Netflix bajo el nombre de “Sofía, la infanta fantástica”, un largometraje de 90 minutos en el que se narra la historia de una niña que celebra una fiesta pagada por todos los españoles.\r\n\r\nEl director de Netflix España, Jesús Expósito, afirma que es una de las producciones estrella de esta temporada. “Nos costó mucho reunir a un elenco como este”, explica. Aun así, lamenta ausencias notables como la de la tía de la protagonista, Cristina. “Hubo un problema de caché”, explica Expósito. En su lugar, sustituyeron su personaje por un poni mágico muy respondón, pero con un gran corazón.\r\n\r\nEl guión corre a cargo de un desconocido autor, de iniciales F. F. y del que poco se conoce. Lo único que Expósito ha desvelado es que el autor lo escribió hace varias décadas aunque apenas se note, pues el guión está “atado y muy bien atado”.\r\n\r\nLa película es apta para todos los públicos y contiene momentos de comedia, protagonizados por el primo Froilán, divertidos equívocos amorosos entre los abuelos de Sofía e intriga, centrada en la trama secundaria de Letizia, que no sabé qué vestido ponerse.\r\n\r\nLa banda sonora la firma Joaquín Sabina, que además actúa en la escena del banquete.\r\n\r\nCon “Sofía, la infanta fantástica”, Netflix vuelve a apostar por la ficción española y ya ha anunciado que está adaptando una película para adultos de la que poco se sabe, pero que tiene por título provisional “Exuperancia”.\r\n",
			"foto": "http://emtstatic.com/2017/05/netflix.jpg",
			"url": "http://www.elmundotoday.com/2017/05/la-comunion-de-la-infanta-sofia-ya-esta-disponible-en-netflix/"
			},
			
			{
			"id": "16",
			"fecha": "2017-05-10 17:43:22",
			"estado": "3",
			"titulo": "Jordi Cruz empieza a pagar a sus becarios con cheques restaurante",
			"entradilla": null,
			"cuerpo": "Tras las quejas que despertaron sus declaraciones, en las que admitía que no pagaba a los becarios de su restaurante, el chef Jordi Cruz empezará a remunerar a sus trabajadores en prácticas con cheques restaurante que los becarios podrán canjear por comidas completas.\r\n\r\nEn el restaurante de Jordi Cruz, una sola comida equivale a los cheques restaurante de un mes, así que muchos becarios se están planteando canjear los vales en otro establecimiento más económico con el fin de poder comer caliente cada día. “No me lo tomaré como un desprecio, que no se preocupen, haré la vista gorda”, ha aclarado Cruz esta mañana.\r\n",
			"foto": null,
			"url": "http://www.elmundotoday.com/2017/05/jordi-cruz-empieza-a-pagar-a-sus-becarios-con-cheques-restaurante/"
			},
			
			{
			"id": "17",
			"fecha": "2017-05-04 17:44:03",
			"estado": "3",
			"titulo": "Demandan a IKEA y se tienen que montar el juicio en casa",
			"entradilla": "AL JUEZ LE FALTA UN TORNILLO",
			"cuerpo": "“Es lo habitual. Incluso cuando nuestros clientes tienen problemas con nuestra compañía, nos gusta que se sientan como en casa a lo largo de todo el proceso judicial”, explica el abogado de IKEA en España. “Según el protocolo, el demandante suele adquirir todos los artilugios necesarios en una de nuestras tiendas y, luego, lleva a un juez hasta allí”. A modo opcional, los clientes insatisfechos también pueden contratar un abogado en la misma tienda. El modelo Häns dispone de una completa gama de maletines complementarios en diversos colores y con fundas lavables.\r\n\r\n“Encima que les demandamos porque los muebles no nos han quedado como ellos te los ponen en sus tiendas, la sala para el juicio que hemos montado en casa también ha quedado muy pobre y triste. No hay una silla que no cojee y el martillo del juez se ha roto al primer golpe”, explica indignada la joven Marisa. “El modelo de juzgado que ellos tienen en sus tiendas -el modelo Vista Oräl- es súper bonito. Al verlo te sientes listo para sentencia, pero luego en casa te sale una cosa como de juzgado de guardia soviético”.\r\n",
			"foto": "http://emtstatic.com/2010/03/vistaoral.jpg",
			"url": "http://www.elmundotoday.com/2010/03/demandan-a-ikea-y-se-tienen-que-montar-el-juicio-en-casa/"
			}
		];
		return {noticias};
	}
}