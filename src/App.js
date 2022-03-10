import './App.css';
import { Component } from 'react';
import Customer from './components/Customer'

const customers = [
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/any',
  'name': '홍길동',
  'birthday': '980218',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/1',
  'name': '김길동',
  'birthday': '911118',
  'gender': '여자',
  'job': '페미니스트'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/2',
  'name': '춘길동',
  'birthday': '922228',
  'gender': '남자',
  'job': '프로게이'
}

]


class App extends Component{
  render() {
    return (
      <div>
        {
          customers.map(c=> {
            return(
              <Customer
                key = {c.id}
                id = {c.id}
                image = {c.image}
                name = {c.name}
                birthday = {c.birthday}
                gender = {c.gender}
                job = {c.job}
              />
            );
          })
        }
  </div>
    );
  }
}

export default App;
