<p>
        <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Validate if 2 objects are equal (content)

## Introducción

Dado 2 objetos con [n] niveles de profundidad, es posible validar si su contenido es igual. Tener en cuenta que cada una de los objetos tiene una "referencia" distinta. 

<p>
        <img src='https://miro.medium.com/max/1178/1*rj_4nlE4Qw_ok0P7A7chHA.png' width="300" height="300" />
</p>

## Consigna

Implementar la función equilityTwoObjects, que recibe 2 objetos y retorna un valor booleano que indica si son iguales en contenido (true), o no (false)

**input:** 
let car1 = {
        Nissan: {
            Sentra: {doors:4, transmission:"automatic"},
            Maxima: {transmission:"mecanic", doors:4}
        },
        Ford: {
            Escort: {doors:4, transmission:"mecanic"},
            Taurus: {doors:4, transmission:"automatic"}
        }
};
let car2 = {
        Nissan: {
            Sentra: {doors:4, transmission:"automatic"},
            Maxima: {doors:4, transmission:"mecanic"}
        },
        Ford: {
            Taurus: {doors:4, transmission:"automatic"},
            Escort: {doors:4, transmission:"mecanic"}
        }
};

**output:** 
true


## Consigna *

Es posible implementarlo para validar N objetos.