import React, { Component } from 'react'
import Button from "../components/Button"
export default class Home extends Component {
  render() {
    return (
        <div>
            <h1>Главная страница</h1>
            <br />
            <p >Добро пожаловать на мой сайт!</p>
            <Button type="submit" className="mt-[25px] m-[auto]"  width="200px" height={'h-[35px]'}  text={'Перейти дальше'} />

        </div>
    )
  }
}


