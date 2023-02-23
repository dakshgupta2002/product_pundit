migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jp5xmgqr6w2y7yq")

  // remove
  collection.schema.removeField("qkmupjz3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zpt6g20y",
    "name": "product_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "jp5xmgqr6w2y7yq",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jp5xmgqr6w2y7yq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qkmupjz3",
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

  // remove
  collection.schema.removeField("zpt6g20y")

  return dao.saveCollection(collection)
})
