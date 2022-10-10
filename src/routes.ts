import express from 'express';
import { prisma } from './prisma';
export const routes = express.Router();

routes.post("/novoaluno", async (req, res) => {
    const {nome, email, idade} = req.body;
    const NovoAluno = await prisma.aluno.create({
        data: {
            nome: nome,
            email: email,
            idade: idade
        }
    })
    return res.status(201).json({data: NovoAluno})
})

routes.get("/veralunos", async (req, res) => {
    const VerAlunos = await prisma.aluno.findMany({

    });
    return res.status(200).json(VerAlunos)
})
