import express, {json} from 'express';

let memberData = [
    {name: "Max Little"}
];

const app = express();
app.use(express.static('client'));
app.listen(8080);

async function getMembers(req, res) {
    res.json(memberData);
}

app.get('/members', getMembers);