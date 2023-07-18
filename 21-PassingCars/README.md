Se da una matriz A no vacía que consta de N enteros. Los elementos consecutivos de la matriz A representan automóviles consecutivos en una carretera.

La matriz A contiene solo 0 y/o 1:

0 representa un automóvil que viaja hacia el este,
1 representa un automóvil que viaja hacia el oeste.
El objetivo es contar los coches que pasan. Decimos que un par de autos (P, Q), donde 0 ≤ P < Q < N, está pasando cuando P viaja hacia el este y Q hacia el oeste.

Por ejemplo, considere la matriz A tal que:

  A[0] = 0 
  A[1] = 1 
  A[2] = 0 
  A[3] = 1 
  A[4] = 1
Tenemos cinco pares de autos que pasan: (0, 1), (0, 3), (0, 4), (2, 3), (2, 4).

Escribe una función:

solución de la función (A);

que, dada una matriz A no vacía de N enteros, devuelve el número de pares de autos que pasan.

La función debería devolver −1 si el número de pares de autos que pasan excede 1,000,000,000.

Por ejemplo, dado:

  A[0] = 0 
  A[1] = 1 
  A[2] = 0 
  A[3] = 1 
  A[4] = 1
la función debería devolver 5, como se explicó anteriormente.

Escriba un algoritmo eficiente para las siguientes suposiciones:

N es un número entero dentro del rango [ 1 .. 100,000 ];
cada elemento de la matriz A es un número entero que puede tener uno de los siguientes valores: 0, 1.