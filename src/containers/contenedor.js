const fs = require("fs");

class Contenedor {
  constructor(file) {
    this.file = file;
  }

  read = async () => {
		try {
			let data = await fs.promises.readFile(this.file, "utf-8");
      return data;
    } catch (error) {
      throw Error("Error al leer el archivo");
    }
  };

  write = (datos) => {
		fs.promises.writeFile(this.file, datos,"utf-8")
		
  };

  save = async (product) => {
    let newId = 1;

    let data = await this.read();
    let datos = JSON.parse(data);
		datos.push(product);

    if (!data) {
			this.write(datos);
    } else {
      await fs.promises.appendFile(this.file, datos, "utf-8")
    }
		
  };

  getById = async (id) => {
    const obj = await this.read();
    const objById = JSON.parse(obj);
    try {
      let productById = objById.filter((prod) => prod.id == id);
      return(productById);
    } catch (err) {
      throw err;
    }
  };

  getAll = async () => {
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

  deleteById = async (id) => {
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

  deleteAll = async () => {
    try {
      await fs.promises.writeFile(this.file, JSON.stringify({}));
      console.log("se borraron todos los productos");
    } catch (err) {
      throw err;
    }
  };
}


module.exports = Contenedor;