import React, { Component } from 'react';
import Button from "../components/Button";
import Input from "../components/Input";
import Text from "../components/Text";

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
}

export default class Home extends Component {
  state = {
    products: [
      
    ],
    isModalOpen: false,
    newProduct: {
      title: "",
      description: "",
      price: ""
    }
  };

  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    this.setState({
      newProduct: {
        ...this.state.newProduct,
        [name]: value
      }
    });
  };

  addProduct = () => {
    const { title, price } = this.state.newProduct;
    if (title && price) {
      this.setState({
        products: [
          ...this.state.products,
          {
            ...this.state.newProduct,
            id: Date.now()
          }
        ],
        newProduct: {
          title: "",
          description: "",
          price: ""
        },
        isModalOpen: false
      });
    }
  };

  render() {
    return (
      <div className="max-w-[800px] mx-auto p-4">
        <Text as="h1" className="text-3xl font-bold mb-4">Управление товарами</Text>
        <Button onClick={this.toggleModal} text="Добавить товар" width="w-[200px]" height="h-[45px]" className="m-auto"/>

        {this.state.isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-[#2B322B] p-6 rounded-[10px] w-full max-w-md">
              <Text as="h2" className="text-xl font-bold mb-4 text-white">Добавить товар</Text>
              <Input
                name="title"
                label="Название"
                value={this.state.newProduct.title}
                onChange={this.handleInputChange}
                placeholder="Введите название"
                className="mb-4"
              />
              
              <Input
                name="description"
                label="Описание"
                value={this.state.newProduct.description}
                onChange={this.handleInputChange}
                placeholder="Введите описание"
                multiline
                className="mb-4"
              />
              
              <Input
                name="price"
                label="Цена"
                value={this.state.newProduct.price}
                onChange={this.handleInputChange}
                placeholder="Введите цену"
                type="number"
                className="mb-4"
              />
              
              <div className="flex justify-end space-x-2">
                <Button
                  text="Отмена"
                  onClick={this.toggleModal}
                  width="w-[100px]"
                  height="h-[40px]"
                />
                <Button
                  text="Добавить"
                  onClick={this.addProduct}
                  width="w-[100px]"
                  height="h-[40px]"
                />
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {this.state.products.map(product => (
            <div key={product.id} className="border border-gray-500 p-4 rounded-[10px]">
              <Text as="h3" className="font-bold text-lg">{product.title}</Text>
              <Text className="text-gray-300 my-2">{product.description}</Text>
              <Text className="text-green-500 font-bold">{product.price} ₽</Text>
            </div>
          ))}
        </div>
      </div>
    );
  }
}