const obj1 = {
    person : 'Chaiwat'
    weight : 88
}

const obj2 = {...obj1};
obj2.weight = 75;
console.log(obj1);
console.log(obj2);