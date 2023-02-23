migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jp5xmgqr6w2y7yq")

  // remove
  collection.schema.removeField("jlhsa7rx")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jp5xmgqr6w2y7yq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jlhsa7rx",
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
