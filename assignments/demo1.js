const object1 = {
    name: 'Person1',
    age:5
  };
      
  const object2 = {
    age: 5,
    name: 'Person1'
  };
      
  JSON.stringify(object1) === JSON.stringify(object2)
console.log(object1== object2);