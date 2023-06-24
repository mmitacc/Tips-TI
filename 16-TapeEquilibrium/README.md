Se da una matriz A no vacía que consta de N enteros. La matriz A representa números en una cinta.

Cualquier entero P, tal que 0 < P < N, divide esta cinta en dos partes no vacías: A[0], A[1], ..., A[P − 1] y A[P], A[ P + 1], ..., A[N - 1].

La diferencia entre las dos partes es el valor de: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + .. + A[N − 1])|

En otras palabras, es la diferencia absoluta entre la suma de la primera parte y la suma de la segunda parte.

Por ejemplo, considere la matriz A tal que:

  A[0] = 3 
  A[1] = 1 
  A[2] = 2 
  A[3] = 4 
  A[4] = 3
Podemos dividir esta cinta en cuatro lugares:

P = 1, diferencia = |3 − 10| = 7
P = 2, diferencia = |4 − 9| = 5
P = 3, diferencia = |6 − 7| = 1
P = 4, diferencia = |10 − 3| = 7
Escribe una función:

solución de la función (A);

que, dada una matriz A no vacía de N enteros, devuelve la diferencia mínima que se puede lograr.

Por ejemplo, dado:

  A[0] = 3 
  A[1] = 1 
  A[2] = 2 
  A[3] = 4 
  A[4] = 3
la función debería devolver 1, como se explicó anteriormente.

Escriba un algoritmo eficiente para las siguientes suposiciones:

N es un número entero dentro del rango [ 2 .. 100,000 ];
cada elemento de la matriz A es un número entero dentro del rango [ −1,000 .. 1,000 ].

---------------------------------------------------------------------------------------
  A[0] = 3 
  A[1] = 1 
  A[2] = 2 
  A[3] = 4 
  A[4] = 3
  A[5] = 1 
  A[6] = 2 
  A[7] = 4 
  A[8] = 3

P = 1, diferencia = |3 − 20| = 7
P = 2, diferencia = |4 − 19| = 15
P = 3, diferencia = |6 − 17| = 11
P = 4, diferencia = |10 − 13| = 3
P = 5, diferencia = |13 − 10| = 3
P = 6, diferencia = |14 − 9| = 5
P = 7, diferencia = |16 − 7| = 9
P = 8, diferencia = |20 − 3| = 17
