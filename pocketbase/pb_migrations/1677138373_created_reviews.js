migrate((db) => {
  const collection = new Collection({
    "id": "5taw317qabbbztz",
    "created": "2023-02-23 07:46:13.988Z",
    "updated": "2023-02-23 07:46:13.988Z",
    "name": "reviews",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3edbazis",
        "name": "text",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      },
      {
        "system": false,
        "id": "klfgyy5b",
        "name": "sentiment",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("5taw317qabbbztz");

  return dao.deleteCollection(collection);
})
