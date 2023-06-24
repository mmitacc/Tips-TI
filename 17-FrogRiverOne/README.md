Una pequeña rana quiere llegar al otro lado de un río. La rana se encuentra inicialmente en una orilla del río (posición 0) y quiere llegar a la orilla opuesta (posición X+1). Las hojas caen de un árbol a la superficie del río.

Se le da una matriz A que consta de N enteros que representan las hojas que caen. A[K] representa la posición en la que cae una hoja en el tiempo K, medida en segundos.

El objetivo es encontrar el momento más temprano en que la rana puede saltar al otro lado del río. La rana puede cruzar solo cuando aparecen hojas en todas las posiciones del río desde 1 hasta X (es decir, queremos encontrar el momento más temprano en el que todas las posiciones desde 1 hasta X están cubiertas por hojas). Puede suponer que la velocidad de la corriente en el río es insignificantemente pequeña, es decir, las hojas no cambian de posición una vez que caen en el río.

Por ejemplo, se le da el número entero X = 5 y la matriz A tal que:

  A[0] = 1 
  A[1] = 3 
  A[2] = 1 
  A[3] = 4 
  A[4] = 2 
  A[5] = 3 
  A[6] = 5 
  A[7] = 4
En el segundo 6, una hoja cae en la posición 5. Este es el momento más temprano en que aparecen hojas en todas las posiciones al otro lado del río.

Escribe una función:

solución de la función (X, A);

que, dada una matriz A no vacía que consta de N enteros y el entero X, devuelve el momento más temprano en que la rana puede saltar al otro lado del río.

Si la rana nunca puede saltar al otro lado del río, la función debería devolver −1.

Por ejemplo, dado X = 5 y el arreglo A tal que:

  A[0] = 1 
  A[1] = 3 
  A[2] = 1 
  A[3] = 4 
  A[4] = 2 
  A[5] = 3 
  A[6] = 5 
  A[7] = 4
la función debería devolver 6, como se explicó anteriormente.

Escriba un algoritmo eficiente para las siguientes suposiciones:

N y X son números enteros dentro del rango [ 1 .. 100,000 ];
cada elemento de la matriz A es un número entero dentro del rango [ 1 .. X ].