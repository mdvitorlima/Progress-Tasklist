global.db = require('./db')
const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
//const port = 3500; //porta padrão
const port1 = 8080;
const port = process.env.PORT || port1;

app.use(require('cors')())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router()

router.get('/', (req, res) => res.json({ message: 'Funcionando!' }))

router.get('/tasks', (req, res) => global.db.findTasks((err, docs) => {
    if(err) res.status(500).json(err)
    else res.json(docs)
}))

	
	//-----------------------------------------------------------------------------------------------
    
	router.post('/tasks/:id', (req, res) => {
        const id = req.params.id
        const col = req.body

        console.log('Inicio router.post(/tasks/:id, (req, res)');
        
		global.db.updateTask(id, col, (err, result) => {
            if(err){ 
               res.status(500).json(err)
               }
            else {

                   global.db.findTask(id, (err, doc) => {
                        if(err) res.status(500).json(err)
                        else res.json(doc)
                    })
               
               }
        })
    })
    
    //-------------------------------------------------------------------------------------------------
	
	router.post('/tasks', (req, res) => {
		
        const col = req.body
        
		global.db.insertTask(col, (err, result) => {
            if(err) 
			{
				res.status(500).json(err)
			}
            else 
			{
				//res.json(result);
				res.json(result.ops[0]);
			}
        })
    })
    

app.use('/', router)


app.listen(port)
console.log('API funcionando!')
