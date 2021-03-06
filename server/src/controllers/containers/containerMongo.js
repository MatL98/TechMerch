const mongoose = require("mongoose");
const { asPOJO, renameField, removeField } = require("../../utils/object");


class ContainerMongo {
  constructor(collection, schema) {
    this.coleccion = mongoose.model(collection, schema)
  }

  async getById(id) {
    try {
      const docs = await this.coleccion.findOne({ _id: id });
      if (!docs) {
        throw new Error("Error al listar por id: no encontrado");
      } else {
        return docs;
      }
    } catch (error) {
      throw new Error(`Error al listar por id: ${error}`);
    }
  }
  async getAll() {
    try {
      let docs = await this.coleccion.find({}, { __v: 0 }).lean();
      return docs;
    } catch (error) {
      throw new Error(`Error al listar todo: ${error}`);
    }
  }

  async save(newObj) {
    try {
      let doc = await this.coleccion.create(newObj);
      return doc;
    } catch (error) {
      throw new Error(`Error al guardar: ${error}`);
    }
  }

  async update(id, nuevoElem) {
    try {
      //renameField(nuevoElem, "id", "_id");
      const { n, nModified } = await this.coleccion.replaceOne(
        { _id: id },
        nuevoElem
      );
      if (n == 0 || nModified == 0) {
        throw new Error("Error al actualizar: no encontrado");
      } else {
        //renameField(nuevoElem, "_id", "id");
        //removeField(nuevoElem, "__v");
        return nuevoElem
      }
    } catch (error) {
      throw new Error(`Error al actualizar: ${error}`);
    }
  }

  async deleteById(id) {
    try {
      const { n, nDeleted } = await this.coleccion.deleteOne({ _id: id });
      if (n == 0 || nDeleted == 0) {
        throw new Error("Error al borrar: no encontrado");
      }
    } catch (error) {
      throw new Error(`Error al borrar: ${error}`);
    }
  }

  async deleteAll() {
    try {
      await this.coleccion.deleteMany({});
    } catch (error) {
      throw new Error(`Error al borrar: ${error}`);
    }
  }
}
module.exports = ContainerMongo;
