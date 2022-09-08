import express, {json} from 'express';

let memberData = [
    {name: "Max Little", course: "Software engineering", year: "Placement year", DoB: new Date(2001, 10, 29), funFact: "Big drinker"},
    {name: "Natalie Geotenova", course: "Cyber security", year: "Third year", DoB: new Date(2001, 10, 12), funFact: "Bulgarian"}
];

const app = express();
app.use(express.static('client'));
app.listen(8080);

async function getMembers(req, res) {
    res.json(memberData);
}

app.get('/members', getMembers);