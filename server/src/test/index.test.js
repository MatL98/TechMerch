const expect = require("chai").expect;
const request = require("supertest")("http://localhost:3001/");;
const assert = require("assert");
const db = require("../db");

describe("conexion a MongoAtlas", () => {
  it("MongoAtlas: Probando conexion", async () => {
    const testConnection = await db.connectDb();
    assert.notDeepEqual(testConnection, true);
  });

	it("MongoAtlas: Probando desconexion", async () => {
		const testDisconnect = await db.disconnectDb();
		assert.equal(testDisconnect, undefined);
	});
});
