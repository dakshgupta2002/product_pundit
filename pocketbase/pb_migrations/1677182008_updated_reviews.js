migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5taw317qabbbztz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "maihnbqh",
    "name": "product_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "jp5xmgqr6w2y7yq",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": [
        "name",
        "id",
        "picture",
        "price",
        "positive_count",
        "negative_count",
        "neutral_count"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5taw317qabbbztz")

  // remove
  collection.schema.removeField("maihnbqh")

  return dao.saveCollection(collection)
})
