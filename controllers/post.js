import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
    const q = req.query.cat
      ? "SELECT * FROM posts WHERE cat=?"
      : "SELECT * FROM posts";
  
    db.query(q, [req.query.cat], (err, data) => {
      if (err) return res.status(500).send(err);
  
      return res.status(200).json(data);
    });
  };

export const addPost = (req, res)=>{
    const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Não autenticado!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token invalido!");

    const q =
      "INSERT INTO posts(`title`, `desc`, `img`, `date`,`uid`) VALUES (?)";

    const values = [
      req.body.title,
      req.body.desc,
      req.body.img,
      req.body.date,
      userInfo.id,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Post criado com sucesso.");
    });
  });
}

export const getPost = (req, res)=>{
    const q =
    "SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg,`date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? ";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
}

export const deletePost = (req, res)=>{
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Usuario não autenticado");
  
    jwt.verify(token, "jwtkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token invalido!");
  
      const postId = req.params.id;
      const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?";
  
      db.query(q, [postId, userInfo.id], (err, data) => {
        if (err) return res.status(403).json("Apenas você pode deletar seu post!");
  
        return res.json("Post deletado!");
      });
    });
  };

export const updatePost = (req, res)=>{
    
        const token = req.cookies.access_token;
        if (!token) return res.status(401).json("Não autenticado!");
      
        jwt.verify(token, "jwtkey", (err, userInfo) => {
          if (err) return res.status(403).json("Token invalido!");
      
          const postId = req.params.id;
          const q =
            "UPDATE posts SET `title`=?,`desc`=?,`img`=? WHERE `id` = ? AND `uid` = ?";
      
          const values = [req.body.title, req.body.desc, req.body.img, req.body.cat];
      
          db.query(q, [...values, postId, userInfo.id], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.json("Post atualizado.");
          });
        });
    }
