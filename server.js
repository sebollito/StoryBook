const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname,'dist')));
app.use('/js',express.static(path.join(__dirname,'public','js')));

app.get('/', (req,res) => {
    res.sendFile('index.html',{
        root: path.join(__dirname,'dist')
    })
});


app.listen(PORT, () => {
    console.log('Server listen in port:',PORT)
})