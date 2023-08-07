Se da una matriz A no vacía que consta de N enteros. Un par de números enteros (P, Q), tales que 0 ≤ P < Q < N, se denomina porción del arreglo A (observe que la porción contiene al menos dos elementos). El promedio de una rebanada (P, Q) es la suma de A[P] + A[P + 1] + ... + A[Q] dividida por la longitud de la rebanada. Para ser precisos, el promedio es igual a (A[P] + A[P + 1] + ... + A[Q]) / (Q − P + 1).

Por ejemplo, la matriz A tal que:

    A[0] = 4
    A[1] = 2
    A[2] = 2
    A[3] = 5
    A[4] = 1
    A[5] = 5
    A[6] = 8
contiene los siguientes segmentos de ejemplo:

rebanada (1, 2), cuyo promedio es (2 + 2) / 2 = 2;
rebanada (3, 4), cuyo promedio es (5 + 1) / 2 = 3;
rebanada (1, 4), cuyo promedio es (2 + 2 + 5 + 1) / 4 = 2.5.
El objetivo es encontrar la posición inicial de un corte cuyo promedio sea mínimo.

Escribe una función:

solución de la función (A);

que, dada una matriz A no vacía que consta de N enteros, devuelve la posición inicial del segmento con el promedio mínimo. Si hay más de un segmento con un promedio mínimo, debe devolver la posición inicial más pequeña de dicho segmento.

Por ejemplo, dada la matriz A tal que:

    A[0] = 4
    A[1] = 2
    A[2] = 2
    A[3] = 5
    A[4] = 1
    A[5] = 5
    A[6] = 8
la función debería devolver 1, como se explicó anteriormente.

Escriba un algoritmo eficiente para las siguientes suposiciones:

N es un número entero dentro del rango [ 2 .. 100,000 ];
cada elemento de la matriz A es un número entero dentro del rango [ −10,000 .. 10,000 ].