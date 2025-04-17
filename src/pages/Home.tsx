import React, { Component } from 'react'
import Button from "../components/Button"
export default class Home extends Component {
  render() {
    return (
        <div>
            <h1>Главная страница</h1>
            <br />
            <p >Добро пожаловать на мой сайт!</p>
            <div className="max-w-[400px] w-[100%] rounded-[10px] p-[25px] z-[1000] m-[auto] mt-[25px]">
              <input name="name" type="text" className="w-full focus-within:outline-none border-2 px-2 bg-gray-800 border-gray-500 rounded-md" />
            </div>
            <Button type="submit" className="mt-[25px] m-[auto]"  width="200px" height={'h-[35px]'}  text={'Перейти дальше'} />

        </div>
    )
  }
}


