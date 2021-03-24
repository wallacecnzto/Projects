/*

Desenvolva um programa que leia um núemero e o mostre 20 vezes

*/

#include <stdio.h>
#include <stdlib.h>

int main()
{
    int num, cont;
    printf("Digite um número: ");
    scanf("%d", &num);
    for (cont = 0; cont < 21; cont++)
    {
        printf("\n Número = %d\n", num);
    }
    
    return 0;
}