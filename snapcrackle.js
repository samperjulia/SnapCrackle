function snapCrackle(maxValue){
    const n = maxValue;
    const arr = [];
    for(let i = 1; i <= n; i ++){
        if(i %2 !=0 && i %5 !=0){
            arr.push("Snap");   //somente os ímpares, excluindo os múltiplos de 5
        }
        else if(i %5 ===0) {    // múltiplos de 5
            
            if(i %2 === 0){
                arr.push("Crackle");    //se for par
            }
            if(i %2 != 0){
                arr.push("SnapCrackle");    //se for ímpar
            }
        }
        else {
            arr.push(i)
        }
        
    }
    console.log(arr);
}

snapCrackle();
 