import express, {json} from 'express';

let memberData = [
    {name: "Max Little", course: "Software engineering", year: "Placement year", DoB: new Date(2001, 9, 29), funFact: "Big drinker"},
    {name: "Natalie Geotenova", course: "Cyber security", year: "Third year", DoB: new Date(2001, 9, 12), funFact: "Bulgarian"},
    {name: "Ben Grave", course: "Computer science", year: "Graduated", DoB: new Date(2001, 1, 8), funFact: "He fucks Nati's mum so much he has a loyalty card for her"}
];

const app = express();
app.use(express.static('client'));
app.listen(8080);

async function getMembers(req, res) {
    res.json(memberData);
}

app.get('/members', getMembers);