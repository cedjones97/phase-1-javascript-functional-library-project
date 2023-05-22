function standardizeInput(collection){
    return (collection instanceof Array) ? collection.slice(): Object.values(collection)
}

function myEach(collection, cb) {
    //console.log(typeof collection)
    const newCollection = standardizeInput(collection)
    for(let i = 0; i < newCollection.length; i++){
        
         cb(newCollection[i])
        
    }
    return collection
    
}

function myMap(collection, cb){
    const newCollection = standardizeInput(collection)
    const newArr = []
    for(let i = 0; i < newCollection.length; i++){
        newArr.push(cb(newCollection[i]))
   }
   return newArr
}


function myReduce(collection, cb, acc){
    let newCollection = standardizeInput(collection)  
    const initial = 0
    if(!acc){
         acc = newCollection[0]
         newCollection = newCollection.slice(1)
    }
    
    for(let i = 0; i < newCollection.length; i++){
         acc = cb(acc, newCollection[i], newCollection)
        //acc + i, initial
   }
   return acc 
   
}

function myFind(collection, pred){
    let newCollection = standardizeInput(collection)
   
    for(let i = 0; i < newCollection.length; i++){

          
         if(pred(newCollection[i])){
            return (newCollection[i])
         }
            
        
  }
  

}

function myFilter(collection, pred){

    let newCollection = standardizeInput(collection)
    let newArr = []

    for(let i = 0; i < newCollection.length; i++){

        if(pred(newCollection[i])){

           newArr.push(newCollection[i])

        } 
           
       
    }
        return newArr
}


function mySize(collection){
    let newCollection = standardizeInput(collection)

    return newCollection.length
}

function myFirst(array, n){
    let newArr = [...array]

    if(n){
    return newArr.slice(0, n)
    }else{
    return newArr[0]
    }
}

function myLast(array, n){
    let newArr = [...array]
//console.log(n)
    if(n){
        return newArr.slice(-n)
    }else{
        return newArr.slice(-1)[0]
    }
}



function myKeys(object){
    return Object.keys(object)
}

function myValues(object){
    return Object.values(object)
}