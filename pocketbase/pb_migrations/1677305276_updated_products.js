migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jp5xmgqr6w2y7yq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aa22hqfi",
    "name": "specs",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jp5xmgqr6w2y7yq")

  // remove
  collection.schema.removeField("aa22hqfi")

  return dao.saveCollection(collection)
})
