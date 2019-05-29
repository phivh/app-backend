define({ "api": [
  {
    "type": "post",
    "url": "/admin/seed",
    "title": "Seed all collections",
    "name": "SeedData",
    "group": "Admin",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "X-Admin-Secret",
            "description": "<p>Secret Key to seed DB.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Un-Authorized\n{\n \"message\": \"Un-Authorized\",\n \"status\": 401,\n \"stack\": \"Error: Un-Authorized\\n    at isAdmin (C:\\\\app\\\\app-backend\\\\src\\\\middlewares\\\\index.js:7:19)\n at Layer.handle [as handle_request] (C:\\\\app\\\\app-backend\\\\node_modules\\\\express\\\\lib\\\\router\\\\layer.js:95:5)\n at trim_prefix (C:\\\\app\\\\app-backend\\\\node_modules\\\\express\\\\lib\\\\router\\\\index.js:317:13)\n at C:\\\\app\\\\app-backend\\\\node_modules\\\\express\\\\lib\\\\router\\\\index.js:284:7\n at Function.process_params (C:\\\\app\\\\app-backend\\\\node_modules\\\\express\\\\lib\\\\router\\\\index.js:335:12)\n at next (C:\\\\app\\\\app-backend\\\\node_modules\\\\express\\\\lib\\\\router\\\\index.js:275:10)\n at Function.handle (C:\\\\app\\\\app-backend\\\\node_modules\\\\express\\\\lib\\\\router\\\\index.js:174:3)\n at router (C:\\\\app\\\\app-backend\\\\node_modules\\\\express\\\\lib\\\\router\\\\index.js:47:12)\n at Layer.handle [as handle_request] (C:\\\\app\\\\app-backend\\\\node_modules\\\\express\\\\lib\\\\router\\\\layer.js:95:5)\n at trim_prefix (C:\\\\app\\\\app-backend\\\\node_modules\\\\express\\\\lib\\\\router\\\\index.js:317:13)\n at C:\\\\app\\\\app-backend\\\\node_modules\\\\express\\\\lib\\\\router\\\\index.js:284:7\n at Function.process_params (C:\\\\app\\\\app-backend\\\\node_modules\\\\express\\\\lib\\\\router\\\\index.js:335:12)\n at next (C:\\\\app\\\\app-backend\\\\node_modules\\\\express\\\\lib\\\\router\\\\index.js:275:10)\n at jsonParser (C:\\\\app\\\\app-backend\\\\node_modules\\\\body-parser\\\\lib\\\\types\\\\json.js:110:7)\n at Layer.handle [as handle_request] (C:\\\\app\\\\app-backend\\\\node_modules\\\\express\\\\lib\\\\router\\\\layer.js:95:5)\n at trim_prefix (C:\\\\app\\\\app-backend\\\\node_modules\\\\express\\\\lib\\\\router\\\\index.js:317:13)\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/admin/admin.routes.js",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/contributors/:id",
    "title": "Get Contributor by ID",
    "name": "GetContributorByID",
    "group": "Contributor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Contributor's ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "response",
            "description": "<p>Contributor List.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.type",
            "description": "<p>Data Type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.id",
            "description": "<p>Record ID from DB.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response.attributes",
            "description": "<p>Contributor Data.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.attributes.username",
            "description": "<p>Contributor ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.attributes.name",
            "description": "<p>Contributor Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.attributes.image",
            "description": "<p>Contributor Avatar URL.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.attributes.countryCode",
            "description": "<p>Contributor Country Code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "response.attributes.active",
            "description": "<p>Contributor Active.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "response.attributes.joined",
            "description": "<p>Contributor Joined Project.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "response.attributes.teamIds",
            "description": "<p>Contributor Project Teams.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n {\n  \"type\": \"contributor\",\n  \"id\": \"w3cj\",\n  \"attributes\": {\n   \"username\": \"w3cj\",\n   \"name\": \"CJ\",\n   \"image\": \"https://avatars1.githubusercontent.com/u/14241866\",\n   \"countryCode\": \"USA\",\n   \"active\": true,\n   \"joined\": \"2018-12-16\",\n   \"teamIds\": [\n    0,\n    1,\n    2,\n    3,\n    4\n   ]\n  }\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/contributors/contributors.routes.js",
    "groupTitle": "Contributor"
  },
  {
    "type": "get",
    "url": "/contributors",
    "title": "Get all Contributors",
    "name": "GetContributors",
    "group": "Contributor",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "response",
            "description": "<p>Contributor List.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.type",
            "description": "<p>Data Type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.id",
            "description": "<p>Record ID from DB.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response.attributes",
            "description": "<p>Contributor Data.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.attributes.username",
            "description": "<p>Contributor ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.attributes.name",
            "description": "<p>Contributor Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.attributes.image",
            "description": "<p>Contributor Avatar URL.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.attributes.countryCode",
            "description": "<p>Contributor Country Code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "response.attributes.active",
            "description": "<p>Contributor Active.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "response.attributes.joined",
            "description": "<p>Contributor Joined Project.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "response.attributes.teamIds",
            "description": "<p>Contributor Project Teams.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n {\n  \"type\": \"contributor\",\n  \"id\": \"w3cj\",\n  \"attributes\": {\n   \"username\": \"w3cj\",\n   \"name\": \"CJ\",\n   \"image\": \"https://avatars1.githubusercontent.com/u/14241866\",\n   \"countryCode\": \"USA\",\n   \"active\": true,\n   \"joined\": \"2018-12-16\",\n   \"teamIds\": [\n    0,\n    1,\n    2,\n    3,\n    4\n   ]\n  }\n },\n {\n  \"type\": \"contributor\",\n  \"id\": \"spiray\",\n  \"attributes\": {\n   \"username\": \"spiray\",\n   \"name\": \"YSpira\",\n   \"image\": \"https://avatars0.githubusercontent.com/u/26689583\",\n   \"countryCode\": \"USA\",\n   \"active\": true,\n   \"joined\": \"2018-12-16\",\n   \"teamIds\": [\n    0,\n    3\n   ]\n  }\n }\n ...\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>{string}</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/contributors/contributors.routes.js",
    "groupTitle": "Contributor"
  }
] });
