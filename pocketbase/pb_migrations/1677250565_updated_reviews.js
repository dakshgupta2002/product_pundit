migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5taw317qabbbztz")

  // remove
  collection.schema.removeField("qxtw2bh4")

  // remove
  collection.schema.removeField("ktjcnhkx")

  // remove
  collection.schema.removeField("8o4z5cfc")

  // remove
  collection.schema.removeField("yuow1knr")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5taw317qabbbztz")

  // add
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ktjcnhkx",
    "name": "upvotes",
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
    "id": "8o4z5cfc",
    "name": "downvotes",
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
    "id": "yuow1knr",
    "name": "rating",
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
