migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5taw317qabbbztz")

  // remove
  collection.schema.removeField("2igzy59v")

  // remove
  collection.schema.removeField("efg5fibn")

  // remove
  collection.schema.removeField("sj7zxyn2")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5taw317qabbbztz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2igzy59v",
    "name": "rating",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 5
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "efg5fibn",
    "name": "product_title",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sj7zxyn2",
    "name": "product_id",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
