conn = Mongo();
db = conn.getDB("adviz");

db.createCollection("contacts", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                firstName: {
                    bsonType: "string",
                    description: "contact's first name"
                },
                lastName: {
                    bsonType: "string",
                    description: "contacts last name"
                },
                streetNumber: {
                    bsonType: "string",
                    description: "Street and House Number of a contact"
                },
                city: {
                    bsonType: "string",
                },
                state: {
                    bsonType: "string",
                },
                country: {
                    bsonType: "string",
                },
                isPublic: {
                    bsonType: "bool",
                },
                owner: {
                    bsonType: "string",
                },
                lat: {
                    bsonType: "string",
                    description: "geo lat"
                },
                lon: {
                    bsonType: "string",
                    description: "geo lon"
                },
                createdAt: {
                    bsonType: "string",
                    description: "RFC3339 time stamp, that shows when the entry was last created."
                },
                modifiedAt: {
                    bsonType: "string",
                    description: "RFC3339 time stamp, that shows when the entry was last modified."
                },
            },
        },
    },
});
