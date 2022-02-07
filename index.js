
const express = require('express')//load
const con = require("./config");
const app = express()
const port = 3000





app.use(express.json());
app.get('/:id', (req, res) => {
    const id = req.params.id;
  con.query("select * from demo where id =?", id,(err,result) =>{
      if(err){
        res.send(err);
      }else{
          res.send(result)
      }
  
  })
});


app.post('/',(req,res) => {
    const data = req.body;
    con.query("insert into demo set ?", data, (error,result) => {
        if(error) throw error;
        res.send(result)
    
    })
})


app.put('/:id',(req,res) => {

    const data =[req.body.name,req.body.gmail,req.body.salary, req.params.id];
    con.query("update demo set name =?,salary =?,gmail =? where id =?", data,(error,result) => {
        if(error) throw error;
        res.send(result)
    
    })
  
})



app.delete("/:id",(req,res) =>{
    con.query("delete from demo where id =" + req.params.id,(error,result) => {
        if(error) throw error;
        res.send(result)
    });
    
})








app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  