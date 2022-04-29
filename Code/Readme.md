# API REST con JavaScript

Interfaz: es una capa de abstracción, creada para que dos sistemas se comuniquen. Por ejemplo un teclado que nos permite interactuar a los humanos con la computadora. 

API (Interfaz de Programación de Aplicaciones): es una capa de abstracción creada para que dos robots se comuniquen. 

REST (transferencia de estado representacional (en inglés representational state transfer)): es el medio para comunicar robots por medio de HTTP, o sea internet. El formato en el que se comunican es JSON, de esta forma se reciben los datos. 

Los usuarios deben de consultar las páginas web y recibir la información que están buscando. Pero no lo hacen directamente con el backend. Sino que el frontend recibe la interacción de los usuarios, y eso lo traducimos a consultas del backend. Entonces el backend que si contiene la informacion la envia al frontend, para que la despliegue a los usuarios. 

## IMPLEMENTACIÓN

Si ingresamos en google la busqueda "github public apis" podremos ir a github ir ver un repositorio donde en un indice se encuentran clasificadas las API. Vemos que hay 3 columnas, para inciar deberíamos elegir una API con CORS que sea NO, más adelante entenderemos que significa. AUTH es el método de autentificación, para iniciar deberíamos contar con una API sin método o con una que nos diga apiKey. En este caso elegimos "https://thedogapi.com/".

Ingresamos en documentación y tenemos la url que debemos de utilizar "https://api.thedogapi.com/v1/images/search". 

Creamos el archivo index.html y main.js. En el archivo html creamos una etiqueta img que será donde veremos las imagenes de los perros en este caso. Pero eliminamos el atributo src, que es donde debería encontrarse la url. 

Con fetch hacemos un llamado a la url, y luego podemos pasar la respuesta como valor del src de la imagen.

Luego cree otra forma de traer el llamado de la API con async await. También agregue que la función se ejecute cuando cargamos la página, colocamos un addEventListener al DOM. Por último coloque que cuando se de click en el boton se ejecute la función también para ir cambiando las imagenes. 

### Endpoints y Query parameters

Son otra de las formas en las que podemos modificar el resultado que nos va a dar nuestra API Rest. Una API puede tener distintas rutas y eso es lo que son los **endpoints**. Por eso las API segmentan su información para no tener que hacer un pedido a toda la base de datos en cada solicitud, sino a la parte que queremos obtener. Para esto ver la documentación de la API que estamos consumiendo es importante para ver las distintas rutas que podemos utilizar. 

Tambien existen los **query parameters** que son información extra a los enpoints, para limitar o especificar mucho mejor cual es el cotenido que queremos pedirla a nuestra API o sea a nuestro backend. Por ejemplo en el endpoint podiamos pedir traer las categorias pero con e lquery parameter podriamos agregar que traiga solo las categorias que comienzan por cierta letra, o un número limitado de categorias, etc. 

Vamos a modificar el archivo main.js para poder implementar los endpoints y query parameters en nuestra función getDog(). Para poder agregar el query parameter utilizamos el singo de interrogación ? y en este caso en la documentación nos dice que podemos utilziar *limit* para colocar la cantidad de imagenes que queremos que retornen. Debemos modificar la función para obtener cada una de las url en el json y pasarlas al html. Una cambio que hacemos es que habiamos utilizado querySelector para seleccionar la etiqueta de img en el html, pero ahora utilizaremos getElementById ya que vamos a tener varias etiquetas img, con distinto id. Por lo tanto en el html debemos crear también la cantidad de etiquetas de imagen que vamos a solicitar. 

### Status Code

Es la forma en como HTTP nos dice que paso con nuestra solicitud, con valores desde los 1xx al 5xx.  

### API Key

Es una de las formas en que el backend puede identificar quien esta haciendo cada solicitud. Para entender mejor debemos saber que es la autenticación y la autorización.  
**Autenticación** es identificar quien es cada quien, no sabe que puede o no hacer alguien, solo se dedica a identificar a alguien. 
**Autorización** es la que nos dice que permisos tiene cada uno. 
Estos trabajan en conjunto para permitir o denegar el acceso a la informacion. Las API Key entonces son una de las formas de identificar quien es cada uno. 

Para poder enviar una API Key en cada solicitud que hagamos al backend, podemos utilizar varias formas:
* query parameter
* authorization header: una forma un poco mas comoda de enviar nuestra API Key

Las API Key no son la unica forma de identificar tambien existen:
* Authorization: Basic
* Authorization: Bearer token
* OAuth 2.0
* Access KEY + Secret KEY

Tener en cuenta que en este caso estamos utilizando **Application-based authentication** es decir estamos autenticando nuestra aplicacion, o sea estamos autenticando al frontend para que pueda hacer solicitudes al backend. Pero hay aplicaciones en las que tambien necesitamos **User-based authentication**. Esto significa que si no le damos la misma informacion a todos los usuarios en nuestro frontend, debemos de especificar de alguna manera quien recibe que informacion. Solo veremos la primera forma de autenticar. 

En la documentacion de la API que estamos consultando vemos que nos muestra como podemos enviar las solicitudes con API keys. Para obtener la API Keys debemos registrarnos en la pagina inicial. 

## Maquetación

Vamos a modificar nuestro HTML para poder tener una sección en la cual guardar nuestras fotos preferidas y otra en la cual poder subir fotos. 

## Métodos HTTP

Es la forma en como el frontend le dice al backend el tipo de solicitud que vamos a realizar. Los mas comunes: 
* GET: Es el que utilizamos hasta ahora, y al ser el mas comun, fetch no nos pide colocarlo. 
* POST
* PUT
* PATCH
* DELETE

Para poder implementar el guardar fotos en una seccion de favoritos, vemos que en la documentacion nos muestra como podemos hacer solicitudes a un endpoint en particular. Tambien nos aclara que debemos de contar con una APY Key, si hacemos el llamado sin ella y hacemos un console.log vemos que nos aparece un error. 

Vamos a construir una etiqueta **span** en el html, para que si existe algun error lo puedamos visualizar alli. Dentro de la funcion getRandomDog colocamos un if para que si existe algun error (y esto lo hacemos consultando el status code de la respuesta, que sea diferente a 200) lo enviamos como valor del span. Colocamos una url sin la API Key para utilizarla en la funcion de favoritos, asi observamos como se despliega el error en el HTML.

