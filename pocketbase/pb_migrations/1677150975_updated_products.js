migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jp5xmgqr6w2y7yq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2e8irgig",
    "name": "positive_count",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tmxbzkbo",
    "name": "negative_count",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kshjhkkm",
    "name": "neutral_count",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jp5xmgqr6w2y7yq")

  // remove
  collection.schema.removeField("2e8irgig")

  // remove
  collection.schema.removeField("tmxbzkbo")

  // remove
  collection.schema.removeField("kshjhkkm")

  // remove
  collection.schema.removeField("jlhsa7rx")

  return dao.saveCollection(collection)
})
