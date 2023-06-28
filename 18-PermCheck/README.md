Se da una matriz A no vacía que consta de N enteros.

Una permutación es una secuencia que contiene cada elemento del 1 al N una vez, y solo una vez.

Por ejemplo, la matriz A tal que:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
es una permutación, pero el arreglo A tal que:

    A[0] = 4
    A[1] = 1
    A[2] = 3
no es una permutación, porque falta el valor 2.

El objetivo es verificar si la matriz A es una permutación.

Escribe una función:
solución de la función (A);
que, dada una matriz A, devuelve 1 si la matriz A es una permutación y 0 si no lo es.

Por ejemplo, dada la matriz A tal que:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
la función debe devolver 1.

Dada la matriz A tal que:

    A[0] = 4
    A[1] = 1
    A[2] = 3
la función debe devolver 0.

Escriba un algoritmo eficiente para las siguientes suposiciones:

N es un número entero dentro del rango [ 1 .. 100,000 ];
cada elemento de la matriz A es un número entero dentro del rango [ 1 .. 1,000,000,000 ].