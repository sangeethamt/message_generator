
let choicesOfDishes={
    dish_type:['Solid','Liquid','Semi-solid/Semi-liquid'],
    cereals:['Rice','Wheat','Ragi'],
    vegetables:['Carrot','Potato','Onion']
}

let generateRandomNumber=num=>{
    return Math.floor(Math.random()*num);
}

let createADish=[];

for(let prop in choicesOfDishes) {
    let propIndex = generateRandomNumber(choicesOfDishes[prop].length)
  
    switch(prop) {
      case 'dish_type':
        createADish.push(`Make a ${choicesOfDishes[prop][propIndex]} type of dish`)
        break
      case 'cereals':
        createADish.push(`using ${choicesOfDishes[prop][propIndex]}`)
        break
      case 'vegetables':
        createADish.push(`and ${choicesOfDishes[prop][propIndex]}.`)
        break
      default:
        createADish.push('Please provide correct values')
    }
  }
 
  function messageGenerator(message){
    const dishInstruction=message.join(' ')
    console.log(dishInstruction);
  }

  messageGenerator(createADish);
