Un espacio binario dentro de un entero positivo N es cualquier secuencia máxima de ceros consecutivos que está rodeada por unos en ambos extremos en la representación binaria de N.

Por ejemplo, el número 9 tiene representación binaria 1001 y contiene un espacio binario de longitud 2. El número 529 tiene representación binaria 1000010001 y contiene dos espacios binarios: uno de longitud 4 y otro de longitud 3. El número 20 tiene representación binaria 10100 y contiene un espacio binario de longitud 1. El número 15 tiene representación binaria 1111 y no tiene espacios binarios. El número 32 tiene representación binaria 100000 y no tiene espacios binarios.

Escribe una función:

Solución de clase { solución int pública (int N); }

que, dado un entero positivo N, devuelve la longitud de su brecha binaria más larga. La función debería devolver 0 si N no contiene un espacio binario.

Por ejemplo, dado N = 1041, la función debería devolver 5, porque N tiene la representación binaria 10000010001 y, por lo tanto, su intervalo binario más largo tiene una longitud de 5. Dado N = 32, la función debería devolver 0, porque N tiene la representación binaria '100000' y, por lo tanto, sin huecos binarios.

Escriba un algoritmo eficiente para las siguientes suposiciones:

N es un número entero dentro del rango [ 1 .. 2,147,483,647 ].
Copyright 2009–2023 de Codility Limited. Reservados todos los derechos. Prohibida la copia, publicación o divulgación no autorizada.