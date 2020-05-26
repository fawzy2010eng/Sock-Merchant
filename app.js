function sockMerchant(n, ar) {
    var smallarray = [];
    var bigarray = [];
    var sum = 0;
    var freq;
    for(var i = 0; i < ar.length; i++){
        if(smallarray.includes(ar[i])){
            bigarray[smallarray.indexOf(ar[i])].push(ar[i])  
        }else{
            smallarray.push(ar[i]);
            bigarray[smallarray.indexOf(ar[i])] =[];
            bigarray[smallarray.indexOf(ar[i])].push(ar[i])
        }  
    }
    for(var i = 0; i < bigarray.length; i++){
        freq = bigarray[i].length;
        if(freq%2 == 0){
            sum+= (freq*.5)
        }else{
            sum+= (freq-1)*.5  
        }  
    }
    return sum
}
