    import produto from "../models/produto.js";

    class ProdutoController {


      static async getProdutos (req, res)  {
        try {
          const listProdutos = await produto.find({});
          res.status(200).json(listProdutos); 
        } catch (erro) {
          res.status(500).json({message: `${erro.message} - Falha na requisição`});
        }        
      };

      static async getProdutoById (req, res)  {
        try {
          const id = req.params.id;
          const listarProduto = await produto.findById(id);
          res.status(200).json(listarProduto);      
        } catch (error) {
          res.status(500).json({message: `${erro.message} - Falha na requisição do Produto Pesquisado`}); 
        }
    
        };
    
    
      static async criarProduto (req, res) {  
        try { 
          const novoProduto = await produto.create(req.body);
          res.status(201).json({ message: "Produto cadastrado com sucesso", produto: novoProduto });
        } catch(erro){
          res.status(500).json({message:`${erro.message} - falha ao cadastrar Produto`});
        }
       
      };

      static async editarProduto (req, res)  {
        try {
          const id = req.params.id;
          await produto.findByIdAndUpdate(id, req.body);
          res.status(200).json({ message: "Produto Atualizado" });
        } catch (error) {
          res.status(500).json({message:`${erro.message} - falha ao Atualizar Produto`});
        }
  };



      static async deleteProduto (req, res) {
        try {
          const id = req.params.id;
          await produto.findByIdAndDelete(id, req.body);
          res.status(200).json({ message: "Produto Deletado com sucesso" });
        } catch (error) {
          res.status(500).json({message:`${erro.message} - falha ao Deletar Produto`});
        }
      }

  }

  export default ProdutoController;



      