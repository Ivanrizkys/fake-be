const { faker } = require('@faker-js/faker');
const crypto = require("crypto")
const fs = require("fs")

let users = []
for (let i=1; i<10; i++) {
    let user = {
        id: crypto.randomBytes(16).toString("hex"),
        name: faker.name.fullName(),
        email: faker.internet.email(),
        gender: faker.name.gender(),
        job: faker.name.jobType()
    }
    users.push(user)
}

let products = []
for (let i=1; i<10; i++) {
    let product = {
        id: crypto.randomBytes(16).toString("hex"),
        product: faker.commerce.product(),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription()

    }
    products.push(product)
}

fs.writeFileSync("ecommerce.json", JSON.stringify({
    users,
    products
}, null, 2))

console.log("data succesfully updated🚀")