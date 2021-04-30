import './App.css';
import {useState} from 'react';


var message = " ";

const inventory ={ flipflops:[
                              {Location: "Sainikpuri",   name: "Bata Shoes", available:true}, 
                              {Location: "Secunderabad", name:"Happy Shoes", available:false}, 
                              {Location: "Madhapur",     name: "Max Store", available:true}, 
                            ],
                   laptops:[
                              {Location: "Secunderabad", name: "Satyam Electronics", available:false}, 
                              {Location: "Madhapur",     name: "Chroma Enterprises", available:true}, 
                              {Location:"Kukatpally" ,   name: "Nextgen Computers", available:true},
                            ],
                   sanitizers:[
                              {Location:"Sainikpuri" ,   name: "Appolo Medicals", available: true}, 
                              {Location: "Banjara",      name: "Reddy labs", available:true}, 
                              {Location: "Gachibowli",   name: "Freshman Drugs", available:true},
                            ]
                  }



function App() {
  const [item, setItem] = useState("flipflops");

  var options =[];


    function itemHandler(event){
      const newItem = event.target.value;
      //console.log("input:> "+event.target.value)
      setItem(newItem);
      //console.log("newItem< "+item);
      message ="Hold on we are searching for the nearest store selling ";
      
      
    }

    function storeSearch(event){
      //console.log(item);
      //console.log(event.target.value);
     // const loc = event.target.value;
      const goodsfun = Object.keys(inventory).map((goods)=>{
        if(goods === item){
          console.log(inventory[goods]);
          //var options = goods;
         inventory[item].map((store) => (
            console.log(store.name)
         ))
          
        }
        return(0)
        
      });
          
      
      
    }

  return (
    <div className="App">
      <h1>Welcome to stock-and-stores</h1>
      <input onChange ={itemHandler} placeholder="item you are looking for"></input> 
      <input onChange ={storeSearch} placeholder="your location"></input>
      <h5> {message} </h5> {item}

      
    </div>
  );
}

export default App;
