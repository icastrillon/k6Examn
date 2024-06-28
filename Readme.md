#Reame


Clonar el proyecto 

git clone https://github.com/icastrillon/k6Examn.git

1. Para ejecutar la prueba se ejecutar el siguiente comando

 K6_BROWSER_HEADLESS=false k6 run script.js

2. Para obtener resultados en json 

k6 run --out csv=test_result.json tests/scripts.js 

3. Para obtener resultados en csv
k6 run --out csv=test_result.csv tests/scripts.js 


#Resultados: 
![imagen](https://github.com/icastrillon/k6Examn/assets/33946503/f898faa0-6166-4dc7-b400-c5dc83dab05f)




Resultados 

El browser_data_received: El navegador recibió un total de 1.4 MB de datos a una velocidad promedio de 357 kB/s.
El browser_data_sent: El navegador envió un total de 74 kB de datos a una velocidad promedio de 18 kB/s.


Duración de las Solicitudes HTTP:

  El  browser_http_req_duration:
avg: Duración promedio de las solicitudes HTTP realizadas por el navegador es de 166.79ms.
min: Duración mínima observada es poco con 14 microsegundos.
med: Duración mediana  de 11.86ms.
max: Duración máxima se observada de 596ms.
p(90) y p(95): Duración en los percentiles 90 y 95 respectivamente, indicando tiempos más largos de 395.63ms y 405.46ms.

Análisis General:

1    Rendimiento de Solicitudes: La mayoría de las solicitudes HTTP tienen tiempos de respuesta bastante buenos, aunque algunas alcanzaron tiempos máximos significativos (596ms).

2.   Core Web Vitals: Los valores reportados son dentro de rangos aceptables, lo que indica un buen rendimiento general de la página web en términos de carga y respuesta.

3.   Comprobaciones Exitosas: No se detectaron fallas en las comprobaciones realizadas, lo que sugiere que la aplicación cumplió con todos los criterios esperados durante la prueba.





