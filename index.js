const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var DB ={
  games: [
    {
      id: 1,
      titles: 'COD',
      price: 300
    },
    {
      id: 2,
      titles: 'Forza Horizon 5',
      price: 350
    },
    {
      id: 3,
      titles: 'GTA 5',
      price: 200
    }
  ]
}

app.get('/games', (req, res) => {
  res.statusCode = 200;
  res.json(DB.games);
})
app.get('/game/:id', (req, res) => {
  if(isNaN(req.params.id)){
    res.sendStatus(400)
  }
  else{
    var id = parseInt(req.params.id);
    var game = DB.games.find(g => g.id == id); 

    if(game != undefined){
      res.statusCode = 200;
      res.json(game);
    }
    else{
      res.sendStatus(404);
    }


  }
})

app.listen(8080, () => {
  console.log('API running');
});