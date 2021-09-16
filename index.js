
let nombreCliente = prompt("ingresa tu nombre para una mejor experiencia")
alert(`Bienvenido ${nombreCliente}`)
alert(`${nombreCliente} a continuacion podras ver todas las viandas que tenemos para vos`)

let viandas = parseInt(prompt("1.Vianda Vegana \n2.Vianda Vegetariana \n3. Vianda baja en Calorias\n4.Vianda para celiacos \n5. Vianda Dulce \n elige tu vianda"))


function elegirViandas() {
    switch (viandas) {
        case 1:
            
                alert (`Hola ${nombreCliente} la vianda vegana tiene comida para veganos`);  
                dieta1()
                cobrar()
                
            break;
        
        case 2:
            
                alert (`Hola ${nombreCliente} la vianda vegetariana tiene comida para vegetarianos`);
                dieta2()
                cobrar()
                
           break;
            case 3:
            
                alert (`Hola ${nombreCliente} la vianda Baja en calorias tiene comida para adelgazar`);
                dieta3()
                cobrar()
                
            break;
            case 4:
           
                alert (`Hola ${nombreCliente} la vianda celiaca tiene comida para celiacos`);
                dieta4()
                cobrar()
                
            break;
            case 5:
            
                alert (`Hola ${nombreCliente} la vianda Dulce tiene los mejores postres bajos en calorias`);
                dieta5()
                cobrar()
               
            break;

        default:
            alert ("valor invalido")
    }
}
elegirViandas();

function dieta1(){
    let array = ["Fideos de arroz con salteado de tofu y pimiento"];
    alert (`1.${array[0]}
    `)
 }
 
 function dieta2(){
     let array = ["Pastel de verduras al horno casero"];
     alert (`1.${array[0]}
     `)
  }
 
  function dieta3(){
     let array = ["Lomo de cerdo, espárragos y coliflor"];
     alert (`1.${array[0]}
    `)
  }
 
  function dieta4(){
     let array = ["tzatziki griego"];
     alert (`1.${array[0]}
     `)
  }
 
  function dieta5(){
     let array = ["Cómo hacer manzanas asadas con arándanos"];
     alert (`1.${array[0]}
     `)
  }

  function cobrar(){

    let metodosDePago = parseInt(prompt(`${nombreCliente} elige metodo de pago\n 1. Debito \n2. Credito \n3. Transferencia\n elegi opcion de pago`))
    
    
    switch (metodosDePago) {
        case 1:
            alert (`Hola ${nombreCliente} Gracias por pagar con debito `);
                
        break;
        
        case 2:
            alert (`Hola ${nombreCliente} Gracias por pagar con credito`);
            
                
            
        break;
    
        case 3:
            alert (`Hola ${nombreCliente} Gracias por pagar con transferencia`);
                
        break;
    
        
        default:
            alert ("valor invalido")
    }
    }
    
let mailCliente = prompt("ingresa tu mail para recibir nuestras novedades")
alert(`${nombreCliente} te estaremos notificando a ${mailCliente} nuestras ofertas y nuevas viandas gracias y buen provecho`)
