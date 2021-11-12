const fs = require("fs");
import config from '../config.js'



class Contenedor {
  constructor(route) {
    this.route = `${config.fs.path}/${route}`;
  }

  async read() {
		try {
			let data = await fs.promises.readFile(this.route, "utf-8");
      return data;
    } catch (error) {
      throw Error("Error al leer el archivo");
    }
  };

  async write (datos){
    try {
      fs.promises.writeFile(this.route, datos,"utf-8")
    } catch (error) {
      throw Error("Error al escribir")
    }
  };

  async save(product){
    let newId = 1;

    let objs = this.getAll()

    if(objs.length == 0){
      newId = 1
    }else{
      newId = objs[objs.length - 1].id + 1;
    }
    const newObj = {...product, id: newId}
		datos.push(newObj);

    try {
			await this.write(objs);
    } catch (error){
      throw Error("Error al guardar" + error)
    }
		
  };

  async getById (id){
    const obj = await this.read();
    const objById = JSON.parse(obj);
    try {
      let productById = objById.filter((prod) => prod.id == id);
      return(productById);
    } catch (error) {
      throw Error("Error al encontrar Id");
    }
  };

  async getAll (){
    try {
      const data = await this.read();
      if (data.length) {
        const dataParsed = JSON.parse(data);
        return(dataParsed);
      } else {
        return null;
      }
    } catch (err) {
      throw err;
    }
  };

  async deleteById(id){
    let data = await this.read();
    let datos = JSON.parse(data);

    let product = datos.find((prod) => prod.id == id);

    if (product) {
      let index = datos.indexOf(product);
      console.log(index);
      datos.splice(index, 1);
      await this.write(datos);
      console.log(`Producto con ID: ${id} eliminado`);
    } else {
      console.log(`No existe el id`);
    }
  };

  async deleteAll() {
    try {
      await fs.promises.writeFile(this.route, JSON.stringify({}));
      console.log("se borraron todos los productos");
    } catch (err) {
      throw err;
    }
  };
}


module.exports = Contenedor;