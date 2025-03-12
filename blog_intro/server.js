const express = require('express');
const app = express()
const port = 3001

app.use('/asset', express.static('asset'))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

app.get('/', (req, res) => {

    res.send(`Server del mio blog`)
})

app.get('/api/v1/dolci', (req, res) => {
    const dolci = [
        {
            Title: 'Ciambellone',
            img: '/asset/img/ciambellone.jpeg',
            Tags: ["ciambellone", "dolci", "colazione", "merenda", "soffice"],
                
        },
        {
            Title: 'Cracker_barbabietola',
            img: '/asset/img/cracker_barbabietola.jpeg',
            Tags: ["cracker", "dolci", "colazione", "merenda", "soffice"],
                
        },
        {
            Title: 'Pane fritto dolce',
            img: '/asset/img/pane_fritto_dolce.jpeg',
            Tags: ["pane fritto", "dolci", "colazione", "merenda", "soffice"],
                
        },
        {
            Title: 'Pasta barbabietola',
            img: '/asset/img/pasta_barbabietola.jpeg',
            Tags: ["pasta", "barbabietola", "dolci", "colazione", "merenda"],
                
        },
        {
            Title: 'Torta paesana',
            img: '/asset/img/torta_paesana.jpeg',
            Tags: ["torta", "paesana", "dolci", "colazione", "merenda"],
                
        },
          
        
    ]
    
    res.json(dolci);
        
})

app.get("/bacheca", (req, res) => {
        res.json(dolci);
      });    
    
    

