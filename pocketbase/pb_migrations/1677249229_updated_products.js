migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jp5xmgqr6w2y7yq")

  // remove
  collection.schema.removeField("bivrkbwq")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jp5xmgqr6w2y7yq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bivrkbwq",
    "name": "product_id",
    "type": "text",
    "required": false,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
