const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    });
readline.question('Digite o nome do herói: ', nome => {
    readline.question('Digite a quantidade de XP: ', xpInput => {
        const xp = parseInt(xpInput);
        let nivel = "";

        if (xp <= 1000){
            nivel = "ferro";
        }else if (xp <= 2000){
            nivel = "bronze";
        }else if (xp <= 5000){
            nivel = "prata";
        }else if  (xp <= 7000){
            nivel = "Ouro";
        }else if  (xp <= 8000){
            nivel = "Platina";
        }else if (xp <= 9000){
            nivel = "Ascendente"; 
        }else if (xp <= 10000){
            nivel = "Imortal";
        }else {
            nivel = "Radiante";
        }      
    
      console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
    
    readline.close();
  });
});
