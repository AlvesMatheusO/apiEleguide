import user from "../models/user.js";


class UserController {


  static async getUsers (req, res)  {
    try {
      const listUsers = await user.find({});
      res.status(200).json(listUsers); 
    } catch (erro) {
      res.status(500).json({message: `${erro.message} - Falha na requisição`});
    }        
  };

  static async getUserById (req, res)  {
    try {
      const id = req.params.id;
      const listarUser = await user.findById(id);
      res.status(200).json(listarUser);      
    } catch (error) {
      res.status(500).json({message: `${erro.message} - Falha na requisição do usuário Pesquisado`}); 
    }

    };


  static async criarUser (req, res) {  
    try { 
      const novoUser = await user.create(req.body);
      res.status(201).json({ message: "Usuario cadastrado com sucesso", user: novoUser });
    } catch(erro){
      res.status(500).json({message:`${erro.message} - falha ao cadastrar usuario`});
    }
   
  };

  static async editarUser(req, res) {
    try {
      const id = req.params.id;
      const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
  
      if (!updatedUser) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }
  
      res.status(200).json({ message: "Usuário atualizado", user: updatedUser });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao atualizar usuário` });
    }
  }


  static async deleteUser (req, res) {
    try {
      const id = req.params.id;
      await user.findByIdAndDelete(id, req.body);
      res.status(200).json({ message: "Usuario Deletado com sucesso" });
    } catch (error) {
      res.status(500).json({message:`${error.message} - falha ao Deletar usuário`});
    }
  }

}

export default UserController;



  