# Git Workflow

La idea de desarrollar con flujos definidos, es mantener el balance entre los desarrolladores y evitar al máximos errores en la aplicación, para eso el flujo de desarrollo es el siguiente: 

El repositorio deberia estar dividido de la siguiente manera

 * __master__
 * [release](#release)
 * [feat](#feat)
 * [enhance](#enhance)
 * [fix](#fix)
 * [test](#test)

# release
 
 Todos los anteriores son troncos que perduran en el tiempo y no deberian perderse, pero siempre tienen que estar igual es decir estables.
 Entendiendo esto, pasamos a especificar lo siguiente.
 
 # feat
 Es un tronco que contiene una epica por ejemplo feat/vuelos -> pero esa epica puede contener una cantidad n de historias las cuales, se verian de la siguiente manera.
 ------------
    $ feat/vuelos/calendar-cheaper-days
    
asi entendemos que dentro de la épica de vuelos hay una historia que esta dedicada exclusivamente a calendar-cheaper-days, una vez todas las historias queden validadas se hace un merge a la epica y cuando la epica este completa almenos al mvp enfocado se hace un merge a master y se sale a produccion, con ese nuevo feature.

# fix
 Es un tronco que contiene una epica al igual que feat por ejemplo fix/vuelos y a su vez esa epica puede contener una cantidad n de historias las cuales, se verian de la siguiente manera.
 ------------
    $ fix/vuelos/resultado-vuelos || fix/vuelos/busqueda-vuelos
    
asi entendemos que dentro de la épica de vuelos hay una historia que esta dedicada exclusivamente a resultados-vuelos y que actualmente esta fallando y que en ese branch se esta corrigiendo el error producido, una vez el bug esta resuelto y validado, se merge a fix y luego a master, asi podemos salir a produccion o hacer un code-push.

# enhance
 Es un tronco que contiene una epica o no puede contener ninguna, pero da por sentado que siempre trabaja solo el tema de mejoras.
 ------------
    $ enhance/responsive-app || enhance/appsee/handler-event
    
asi entendemos cualquier historia dentro de este tronco es especificamente para mejorar, NO para cambiar, algún feature de la app.

# test
 Es un tronco que contiene una variedad de test, perteneciente a desarrollo de una epica.
 ------------
    $ test/login-flow
    
asi entendemos cualquier historia dentro de este tronco es especificamente para crear test, NO para cambiar, algo directamente de la app.

## Notas: 
_____
Los branches siempre deben estar en minúscula asi evitamos alguna confusión y usar la notación dasherize/kebab-case que consiste en separar palabras por medio de un -, asi todos escribimos igual y mantenemos un flujo homogéneo.

### Nota: 
Cuando se complete un feature o se haga un fix y se haga el merge request, activar la opcion de **eliminar el branch automáticamente**, en caso de omitir esta opción, **eliminar el branch manualmente** al estar merged, para asi no tener branches innecesarios o viejos.