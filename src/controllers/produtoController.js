    import produto from "../models/produto.js";


    export const getProdutos = async (req, res) => {
        const listProdutos = await produto.find({});
        res.status(200).json(listProdutos);
      };

      export const criarProduto = (req, res) => {
        const novoProduto = req.body;
        produtos.push(novoProduto);
        res.status(201).json({ message: "Produto cadastrado com sucesso", novoProduto });
      };

      export const editarProduto = (req, res) => {

        const index = searchProduto(req.params.id);
        produtos[index].nome = req.body.nome;
        produtos[index].descricao = req.body.descricao;
        produtos[index].preco = req.body.preco;
        produtos[index].foto = req.body.foto;
        res.status(200).json(produtos);


    };

      export const getProdutoById = (req, res) => {
        const index = searchProduto(req.params.id);
        res.status(200).json(produtos[index]);
        };

        export const deleteProduto = (req, res) => {
          const index = searchProduto(req.params.id);
          produtos.splice(index, 1);
          res.status(200).send("Livro removido com sucesso");

        }


      