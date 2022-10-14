const primeiroNome = "Jaqueline";
const segundoNome = "Silva";
const anoDeNascimento = 1999;
const corPreferida = "Lilás";
const hobbie = "Ler";
const sentimento = "Saudades";
const anoAtual = 2022;
const idade = anoAtual - anoDeNascimento;
const numeroUm = 10;
const numeroDois = 2;

//Tradicional
console.log("Eu me chamo " + primeiroNome + " " + segundoNome);

//Template String
console.log(`Eu me chamo ${primeiroNome} ${segundoNome} e nasci no ano do Coelho, ${anoDeNascimento}. Sou bastante indecisa sobre uma coisa preferida, como por exemplos cores, mas no dia de hoje a minha cor preferida é ${corPreferida}. Amo fazer várias atividades, meu hobbie favorido nos últimos dias é basicamente ${hobbie} pois fui atravessada pelo sentimento de ${sentimento} nos últimos tempos, de um tempo mais simples ou da ilusão que criei que no passado as coisas eram mais simles...`);

console.log(`Minha idade é ${idade} anos`);

console.log(`A Soma é ${ numeroUm + numeroDois}`);
console.log(`A Subtração é ${ numeroUm - numeroDois}`);
console.log(`A Divisão é ${ numeroUm / numeroDois}`);
console.log(`A Multiplicação é ${ numeroUm * numeroDois}`);
console.log(`A Módulo é ${ numeroUm % numeroDois}`);