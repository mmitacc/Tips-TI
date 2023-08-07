Una secuencia de ADN se puede representar como una cadena que consta de las letras A , C , G y T , que corresponden a los tipos de nucleótidos sucesivos en la secuencia. Cada nucleótido tiene un factor de impacto , que es un número entero. Los nucleótidos de tipo A , C , G y T tienen factores de impacto de 1, 2, 3 y 4, respectivamente. Vas a responder a varias preguntas de la forma: ¿Cuál es el factor de impacto mínimo de los nucleótidos contenidos en una parte particular de la secuencia de ADN dada?

La secuencia de ADN se proporciona como una cadena no vacía S = S[0]S[1]...S[N-1] que consta de N caracteres. Hay M consultas, que se dan en matrices no vacías P y Q, cada una de las cuales consta de M enteros. La consulta K-ésima (0 ≤ K < M) requiere que encuentre el factor de impacto mínimo de los nucleótidos contenidos en la secuencia de ADN entre las posiciones P[K] y Q[K] (inclusive).

Por ejemplo, considere la cadena S = CAGCCTA y las matrices P, Q tales que:                           CAAAAAA
                                      AAAAAA
                                       GCCCA
                                        CCCA
                                         CCA
                                          TA
                                           A
                                     0123456

    P[0] = 2 Q[0] = 4
    P[1] = 5 Q[1] = 5
    P[2] = 0 Q[2] = 6
Las respuestas a estas M = 3 consultas son las siguientes:

La parte del ADN entre las posiciones 2 y 4 contiene los nucleótidos G y C (dos veces), cuyos factores de impacto son 3 y 2 respectivamente, por lo que la respuesta es 2.
La parte entre las posiciones 5 y 5 contiene un solo nucleótido T , cuyo factor de impacto es 4, por lo que la respuesta es 4.
La parte entre las posiciones 0 y 6 (la cadena completa) contiene todos los nucleótidos, en particular el nucleótido A cuyo factor de impacto es 1, por lo que la respuesta es 1.
Escribe una función:

solución de funciones (S, P, Q);

que, dada una cadena S no vacía que consiste en N caracteres y dos matrices P y Q no vacías que consisten en M enteros, devuelve una matriz que consta de M enteros que especifica las respuestas consecutivas a todas las consultas.

La matriz de resultados debe devolverse como una matriz de enteros.

Por ejemplo, dada la cadena S = CAGCCTA y las matrices P, Q tales que:

    P[0] = 2 Q[0] = 4
    P[1] = 5 Q[1] = 5
    P[2] = 0 Q[2] = 6
la función debe devolver los valores [2, 4, 1], como se explicó anteriormente.

Escriba un algoritmo eficiente para las siguientes suposiciones:

N es un número entero dentro del rango [ 1 .. 100,000 ];
M es un número entero dentro del rango [ 1 .. 50,000 ];
cada elemento de los arreglos P y Q es un número entero dentro del rango [ 0 .. N - 1 ];
P[K] ≤ Q[K], donde 0 ≤ K < M;
la cadena S consta solo de letras mayúsculas en inglés A, C, G, T .