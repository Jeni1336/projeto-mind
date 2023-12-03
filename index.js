const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require ("cors");
const bcrypt = require ("bcrypt");
const saltRounds = 10;

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Jeni2210@",
    database: "cursosmind"
});

app.use(express.json());
app.use(cors());

app.post("/Cadastro", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword =req.body.confirmPassword;
    const nameprof = req.body.nameprof;
    const categoria = req.body.categoria;
    const descricao = req.body.descricao;

    db.query("SELECT*FROM login WHERE email = ?",  [email],
    (err, res) => {
        if (err){
            res.send(err);
        }
        res.send(res);
        {
            if (result.length == 0){ 
                bcrypt.hash(password, saltRounds, (erro, hash) => {
                    db.query(
                        "INSERT INTO login (email, password) VALUES (?,?)",
                        [email, hash], 
                        (err, response) => {
                            if (err){
                                res.send(err);
                            }
    
                            res.send({ msg: "Cadastrado com sucesso"});
                        }
                    );
                })
            
            } else {
                res.send ({msg: "Usuário já cadastrado"});
            }
        }
    });

});

app.post("/Login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
});

    
app.post("/Login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query("SELECT * FROM login WHERE email = ? ", 
    [email], (err, result) => {
        if (err){
            res.send (err);
        }
        if(result.length > 0){
            bcrypt.compare(password, result [0].password,
                (erro, result)=> {
                   if(result){
                    res.send("Uusário logado com sucesso")
                   } else{
                    res.send("Senha incorreta");
                   }
                });
        } else {
            res.send({msg: "Conta não encontrada, realize o cadastro"})
        }
    });
});




app.listen(3000, () => {
    console.log("rodando na porta 3000")
});