function media(nome, n1,n2,n3) {

    resultado = ((+n1)+(+n2)+(+n3))/3;

    if (resultado >= 7.5) {
        mensagem = " está aprovado!"
    } else if (resultado>=4) {
        mensagem = " está em exame!"        
    } else {
        mensagem = " está reprovado!"
    }
    alert("A media do aluno " + nome + " é: " + resultado.toFixed(2) +", "+ mensagem);
    
}