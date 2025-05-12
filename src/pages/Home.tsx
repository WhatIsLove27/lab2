import React, { Component } from 'react'
import Button from "../components/Button"
import Input from "../components/Input";
import Text from "../components/Text";
export default class Home extends Component {
  render() {
    return (
      <div className="max-w-[800px] mx-auto p-4">
      <Text as="h1" className="text-3xl font-bold mb-4">Главная страница</Text>
      <Text className="mb-8">Добро пожаловать на мой сайт!</Text>
      
      <div className="max-w-[400px] w-full mx-auto space-y-6">
        <Input 
          name="username" 
          label="Имя пользователя" 
          placeholder="Введите ваше имя"
        />
        
        <Input 
          name="email" 
          type="email" 
          label="Email" 
          placeholder="Введите ваш email"
        />
        
        <Button 
          type="submit" 
          width="w-[200px]" 
          height="h-[45px]"
          className="mx-auto mt-6"
          text="Перейти дальше" 
        />
      </div>
    </div>
    )
  }
}


