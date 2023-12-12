searchStringDate1.js
Este codigó permite buscar dentro una "Texto", los registros (separados por "_______"), que se encuentren dentro de un rango inicial y final de una fecha y hora, retornando el número de registros que cumplan tal condición.
Ejemplo:
 registers = "200.26.15.64_12/01/1998:16:55:18_http://costumer/rol/12_get:201_______201.66.15.12_10/01/1999:16:55:18_http://costumer/rol/11_get:200_______200.51.15.00_06/06/1980:10:15:08_http://costumer/rol/5_get:500_______200.26.14.112_26/06/1998:12:05:28_http://costumer/rol/1_get:305_______201.216.105.14_23/12/1996:16:55:18_http://costumer/rol/20_get:200_______199.111.115.14_19/11/1995:12:12:59_http://costumer/rol/2_get:401_______200.200.19.123_14/07/1995:20:13:18_http://costumer/rol/13_get:200_______200.26.15.64_12/01/1996:16:55:18_http://costumer/rol/12_get:501_______201.66.15.12_10/01/1997:16:55:18_http://costumer/rol/11_get:500_______200.51.15.00_06/06/1988:19:15:08_http://costumer/rol/5_get:500_______200.26.14.112_26/06/1999:12:35:08_http://costumer/rol/1_get:205_______201.216.105.14_23/12/1995:09:55:18_http://costumer/rol/20_get:200_______199.111.115.14_19/11/1996:11:12:59_http://costumer/rol/2_get:201_______200.200.19.123_14/07/1999:09:13:18_http://costumer/rol/13_get:300_______";
 dateInit = "01/01/1999";
 dateEnd = "31/12/1999";
 hourInit = "12:00:00";
 hourEnd = "24:00:00";
==> Retorna, 3

searchStringDate2.js
Este codigó permite buscar dentro un archivo TXT que tiene la siguiente distribución interna:
------------------------------------------------
  N      ===> Número de registros 
  R1___  ╗
  R2___  ║
  R3___  ║
  .      ╠==> Registros
  .      ║
  .      ║
  RN___  ╝
  Range  ===> Rango de fechas a consultar
------------------------------------------------
Cada una de estos, esta separado por un salto de línea (\n). Extrayendo los datos de este archivo, se prodra contabilizar las fechas de los registros que cumplan el rango a consultar.
Ejemplo:
Sea el archivo: dates.txt; con la siguiente estructura:
------------------------------------------------
  14                     ===> Número de registros 
  200.26.15.64_12/01...  ╗
  201.66.15.12_10/01...  ║
  200.51.15.00_06/06...  ║
  .                      ╠==> Registros
  .                      ║
  .                      ║
  200.200.19.123_14/07...╝
  FechaInicio_FechaFin   ===> Rango de fechas a consultar
------------------------------------------------
==> Retorna, 3