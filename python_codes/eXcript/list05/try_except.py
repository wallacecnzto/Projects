''' try_except '''


def input_float(msg):
    ''' tratando o casting '''
    while True:
        try:
            return float(input(msg))
        except ValueError:
            print('Número inválido')


NUM1 = input_float('Digite o primeiro número: ')
NUM2 = input_float('Digite o segundo número: ')

try:
    print(NUM1 / NUM2)
except ZeroDivisionError:
    print('Não é possível dividir um número por zero.')
