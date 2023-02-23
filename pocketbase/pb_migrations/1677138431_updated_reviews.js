migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5taw317qabbbztz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n18imqjg",
    "name": "source",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qxtw2bh4",
    "name": "username",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5taw317qabbbztz")

  // remove
  collection.schema.removeField("n18imqjg")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qxtw2bh4",
    "name": "field",
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
