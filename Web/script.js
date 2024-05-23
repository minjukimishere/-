/*for(let i=2; i<10; i++){
    console.log(i+"단");
    for(let j=1; j<10; j++){
        console.log(i+"X"+j+"="+(i*j));
    }
    console.log("\n");
}*/

function gugudan(dan){
    for(let i=1; i<=9; i++){
        console.log('${dan}*${i}=${dan*i}');
    }
}

gugudan(3);
gugudan(5);
gugudan(9);