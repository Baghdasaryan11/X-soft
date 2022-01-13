import Product from "../models/Product.js";
import FileService from '../service/FileService.js';

class ProductService {
  async createProduct(product, picture) {

    const fileName = FileService.saveFile(picture);
    const createdProduct = await Product.create({ ...product, picture: fileName });

    return createdProduct;
  }

  async getAllProducts() {
    const products = await Product.find();
    return products;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("id is required");
    }
    const product = await Product.findById(id);
    return product;
  }

  async updateProduct(product) {
    if (!product._id) {
      throw new Error("id is empty ");
    }
    const updatedProduct = await Product.findByIdAndUpdate(
      product._id,
      product,
      { new: true }
    );
    return updatedProduct;
  }

  async deleteProduct(id) {
    if (!id) {
      throw new Error("id is empty");
    }
    const delProduct = await Product.findByIdAndDelete(id);

    return delProduct;
  }
}


export default new ProductService();