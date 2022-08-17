const contacts = require('./data.json');

// the following exercises require the data from data.json.
// you can look in that file to see the data structure you
// will be working with.

// For each exercise:
// 1. use array methods with the variable contacts to get the desired result,
// 2. store the result with a variable
// 3. appropriately log the results to the console


//You can put your solutions after each comment below:

//1. an array that contains all of the contacts that work at INSECTUS
const company = contacts.find(contact => contact.company === "INSECTUS")
//console.log(company)

// const myCompany = contacts.filter((obj) => {
//     if (obj.company === "INSECTUS") {
//         return true
//     } else {
//         return false
//     }
// })

//2. an array all of the contacts, with only the name property
const name = contacts.map((contact) => contact.name)
// console.log(name)


//3. an array of all of the contacts over the age of 50
const oldies = contacts.filter(contact => contact.age > 50)
//console.log(oldies)

//4. the first ten contacts when alphabetically ordered by name
const first = contacts.sort((a, b) =>
    a.name.localeCompare(b.name)) &&
    contacts.slice(0, 10)

// console.log(first)

//5. the oldest person's name
const oldest = contacts.find(contact => contact.age > 78)
const oldName = oldest.name
// console.log(oldName)
// contacts.reduce((a, b) => a.age > b.age ? a : b)
// console.log(contacts[0].name)
//6. the contact id with the name Isabella Burke
const isabellaName = contacts.find(contact => contact.name === "Isabella Burke")
const contactId = isabellaName.id
// console.log(contactId)

//7. an array of all of the contacts, but with the name split up into a firstName
// and lastName properties
const splitNames = contacts.map((contact) => {
    contact.firstName = contact.name.split(" ")[0]
    contact.lastName = contact.name.split(" ")[1]
    return contact
})

//console.log(splitNames)

//8. an array of all of the contacts where the friends property
// is an array with each contact that is their friend

const withFriends = contacts.map((contact) => {
    return contact.friends.map((friendId) => {
        return contacts.find((cntct) => cntct.id === friendId)
    })
})
//console.log(withFriends)

//9. the average age of the contacts

const averageAge = []
let totalAge = 0
contacts.map(
    (contact) => {
        totalAge += contact.age
    }
)
totalAge = totalAge / contacts.length
averageAge.push(totalAge)
//console.log(averageAge)

//10. the median age of the contacts

const median = []
const number = contacts.sort((a, b) => a.age - b.age)
const middle = contacts.length / 2
median.push(number[middle])


//console.log(median)