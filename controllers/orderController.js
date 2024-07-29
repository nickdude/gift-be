const orderService = require('../services/orderService');

exports.createOrder = async (req, res) => {
    try {
      const orderData = {
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        billingAddress:req.body.billingAddress,
        shippingAddress: req.body.shippingAddress,
        gstNumber: req.body.gstNumber,
        orderList: req.body.orderList,
        cart: req.body.cart,
        status: req.body.status,
        total: req.body.total
      };
    
      const order = await orderService.createOrder(orderData);
      res.status(201).json(order);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  
  exports.getAllOrders = async (req, res) => {
    try {
      const products = await orderService.getAllOrders();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  exports.getOrderById = async (req, res) => {
    try {
      const order = await orderService.getOrderById(req.params.id);
      res.status(200).json(order);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };
  
//   exports.updateProduct = async (req, res) => {
//     try {
//       const productData = {
//         name: req.body.name,
//         shortDis: req.body.shortDis,
//         category: req.body.category,
//         brand: req.body.brand,
//         standardPrice: req.body.standardPrice,
//         priceByCompany: req.body.priceByCompany,
//         additionalInfo: req.body.additionalInfo,
//         sku: req.body.sku,
//         tag: req.body.tag,
//         images: req.body.images
//       };
//       const product = await productService.updateProduct(req.params.id, productData);
//       res.status(200).json(product);
//     } catch (err) {
//       res.status(400).json({ message: err.message });
//     }
//   };
  
  exports.deleteOrder= async (req, res) => {
    try {
      const order = await orderService.deleteOrder(req.params.id);
      if(order){
          res.status(200).json(order);
      }else{
          res.status(204).send();
      }
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };
  