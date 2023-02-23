migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5taw317qabbbztz")

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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iov31fpb",
    "name": "summary",
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
    "id": "xtr4vvlm",
    "name": "location",
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
    "id": "xc8skxxx",
    "name": "review_date",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5taw317qabbbztz")

  // remove
  collection.schema.removeField("efg5fibn")

  // remove
  collection.schema.removeField("sj7zxyn2")

  // remove
  collection.schema.removeField("iov31fpb")

  // remove
  collection.schema.removeField("xtr4vvlm")

  // remove
  collection.schema.removeField("xc8skxxx")

  // remove
  collection.schema.removeField("ktjcnhkx")

  // remove
  collection.schema.removeField("8o4z5cfc")

  return dao.saveCollection(collection)
})
