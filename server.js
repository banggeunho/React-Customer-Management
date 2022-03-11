const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended : true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/any',
            'name': '이정맹',
            'birthday': '971819',
            'gender': '남자',
            'job': '대학생'
        },
        {
            'id': 2,
            'image': 'https://placeimg.com/64/64/1',
            'name': '기면수',
            'birthday': '911118',
            'gender': '여자',
            'job': '페미니스트'
        },
        {
            'id': 3,
            'image': 'https://placeimg.com/64/64/2',
            'name': '춘길동',
            'birthday': '922228',
            'gender': '남자',
            'job': '프로게이'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));