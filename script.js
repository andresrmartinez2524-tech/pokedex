async function pokemones() {
  

    const mostrar = document.getElementById("contenedor");
    
   

    try {
          mostrar.innerHTML = "";

        for (let index = 1; index <20; index++) {
        
        const respuesta = await fetch ("https://pokeapi.co/api/v2/pokemon/"+index);
        const datos = await respuesta.json();
        let tipos = datos.types.map(type=> `<h2>${type.type.name}</h2>`)
        
        tipos = tipos.join('');


               mostrar.innerHTML += `

               <div class="tarjeta">
               <div class="informacion-tarjeta">
                <h1> ${datos.name} </h1>
                <img src="${datos.sprites.other["home"].front_shiny}" alt="">
                <p> ID: ${datos.id}</p>
                
                <div class="tipos"> 
                ${tipos}
                </div>
             </div>
               
            `
        }
        
        
   
    } catch (error) {
        
    }
    
}
pokemones();



async function buscar() {
    
     
    const mostrar = document.getElementById("contenedor");
    const buscar2 = document.getElementById("buscar").value.toLowerCase();

try {
     

        const respuesta = await fetch (`https://pokeapi.co/api/v2/pokemon/${buscar2}`);
        const datos = await respuesta.json();
        let tipos = datos.types.map(type=> `<h2>${type.type.name}</h2>`)
        
        tipos = tipos.join('');

               mostrar.innerHTML = `

               <div class="tarjeta">
               <div class="informacion-tarjeta">
                <h1> ${datos.name} </h1>
                <img src="${datos.sprites.other["home"].front_shiny}" alt="">
                <p>ID:${datos.id}</p>
                <div class="tipos">
                 ${tipos}
                </div>
                
               
            </div>
             </div>
               
            `


    
} catch (error) {
     
   pokemones()
}
}

