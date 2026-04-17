'use strict'

import express, { json } from 'express';
import cors from "cors";
import { readFileSync, writeFileSync } from "fs";

const app = express();

app.use(cors());
app.use(json());


// LOGIN
app.post("/api/login", (req, res) => {

    const { email, senha } = req.body;

    const users = JSON.parse(
        readFileSync("./api/usuarios.json", "utf-8")
    );

    const user = users.find(
        (u) => u.email === email && u.senha === senha
    );

    if (user) {
        res.json({
            success: true,
            user
        });
    } else {
        res.json({
            success: false,
            message: "Credenciais inválidas"
        });
    }
});


// REGISTER (para testar)
app.post("/api/register", (req, res) => {

    const users = JSON.parse(
        readFileSync("./api/usuarios.json", "utf-8")
    );

    const newUser = {
        id: Date.now(),
        ...req.body,
        tipo: "cliente"
    };

    users.push(newUser);

    writeFileSync(
        "./api/usuarios.json",
        JSON.stringify(users, null, 2)
    );

    res.json({
        success: true
    });
});


// GET IMOVEIS
app.get("/api/imoveis", (req, res) => {

  const imoveis = JSON.parse(
    readFileSync("./api/imoveis.json")
  );

  res.json(imoveis);
});


// RESERVAR IMOVEL
app.post("/api/reservar", (req, res) => {

  const reservas = JSON.parse(
    readFileSync("./api/reservas.json")
  );

  const novaReserva = {
    id: Date.now(),
    ...req.body,
    status: "pendente"
  };

  reservas.push(novaReserva);

  writeFileSync(
    "./api/reservas.json",
    JSON.stringify(reservas)
  );

  res.json({
    success: true
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});