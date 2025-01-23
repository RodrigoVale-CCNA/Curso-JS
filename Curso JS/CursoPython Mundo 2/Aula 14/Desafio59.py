from time import sleep
n1 = int(input('Primeiro valor: '))
n2 = int(input('Segundo valor: '))
opcao = 0
while opcao != 5:
    print(
    '''
    [1] Somar
    [2] Multiplicar
    [3] Maior
    [4] Novos Números
    [5] Sair do Programa
    ''')
    opcao = int(input('Qual é a sua opção? '))
    if opcao == 1:
        soma = n1+n2
        print('A soma entre {} + {} é {}'.format(n1,n2,soma))
    elif opcao ==2:
        produto = n1*n2
        print('O produto entre {} x {} é {}'.format(n1,n2,produto))
    elif opcao ==3:
        if n1 > n2:
            maior = n1
            print('O número {} é o maior'.format(maior))
        elif n2 > n1:
            maior = n2
            print('O número {} é o maior'.format(maior))
        else:
            print('Os números {} e {} são iguais'.format(n1,n2))
    elif opcao ==4:
        print('Informe os números novamente:')
        n1 = int(input('Primeiro valor: '))
        n2 = int(input('Segundo valor: '))
    elif opcao ==5:
        print('Finalizando...')
    else:
        print('Opção inválida, tente novamente')
    print('=-='*10)
    sleep(2)
    print('Fim do programa, volte sempre!')