import Product from "../models/Product.js";
import ProductService  from "../service/ProductService.js";

class ProductController {
  async create(req, res) {
    try {
      const product = await ProductService.createProduct(req.body, req.files.picture);
      res.json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAll(req, res) {
    try {
      const products = await ProductService.getAllProducts();
      return res.json(products);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getById(req, res) {
    try {
      const product = await ProductService.getOne(req.params.id);
      return res.json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async update(req, res) {
    try {
      const updatedProduct = await ProductService.updatedProduct(req.body);
      return res.json(updatedProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async delete(req, res) {
    try {
      const delProduct = await ProductService.deleteProduct(req.params.id);
      res.json(delProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new ProductController();
