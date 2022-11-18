interface ICars
{
    brand:string,
    cost:number,
    registration_number?:string,
    size?:string,
    number_seats:number
}

let CarArray:ICars[]=[
    {
        brand:'Mercedes',
        cost:40000,
        registration_number:'TM-28-AAA',
       // size:'big',
        number_seats:8
    },
    {
       brand:'Audi',
        cost:30500,
        registration_number:'TM-02-BBB',
        size:'big',
        number_seats:8
    },
    {

        brand:'Ford',
        cost:20000,
      //  registration_number:'TM-28-AA',
       // size:'big',
        number_seats:5
    }
    ,
    {
        brand:'BMW',
        cost:10500,
       // registration_number:'CS-18-CCC',
        //size:'big',
        number_seats:5
    }
]
function correction(c:ICars[] ):void{
    c.forEach((cA:ICars)=>{

    if(cA.registration_number ==undefined ) 
    {
        cA.registration_number='unregister';
    }

    if(cA.size==undefined ) 
    {   if(cA.number_seats>5)
        {

            cA.size='big';
        }else{
            cA.size='small'
        }
    }

    if(cA.brand=='Mercedes'||cA.brand=='Audi'||cA.brand=='BMW')
    {
        cA.cost+=2500
    }
}  )
}
function displayCars(c:ICars[]):void{
console.log(c);
}
displayCars(CarArray)
correction(CarArray)
displayCars(CarArray)