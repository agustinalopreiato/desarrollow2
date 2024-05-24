let products = [ 
    { name: "microondas" , precio: 300000 , stock:  10             },
    { name: "cafetera", precio:  80000  , stock:     23         },
    { name: "smart tv", precio:  700000 , stock:     1           }
]

for (let index = 0; index < products.length; index++) 
    {console.log (`${products [index].name  } - precio : $${ products[index].precio  }
    - stock : ${products [index].stock   }` );}

products.pop ();

for (let index = 0; index < products.length; index++) {
    console.log (`${products [index].name  } - precio : $${ products[index].precio  }
    - stock : ${products [index].stock }` );}