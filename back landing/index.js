const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000
app.use(cors())
app.use(express.json())

app.get('/test', (req, res) => {
  res.json({ })
})

app.post('/test', (req, res) => {
    console.log (req.body);
    res.json({ msg: 'Success' })

}
    
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


