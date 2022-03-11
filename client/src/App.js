import './App.css';
import { Component } from 'react';
import Customer from './components/Customer'
import { TableRow, TableBody, TableCell, TableHead,Table } from '@mui/material';
import { withStyles } from '@mui/styles';
import { Paper } from '@mui/material';

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: "auto"
  },

  table: {
    minWidth: 1080
  }
})

const customers = [
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/any',
  'name': '이정맹',
  'birthday': '971819',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/1',
  'name': '기면수',
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
    const {classes} = this.props;
    return (
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map(c=> { return( <Customer key = {c.id} id = {c.id} image = {c.image} name = {c.name} birthday = {c.birthday} gender = {c.gender} job = {c.job}/>);})}
            </TableBody>
          </Table>                
        </Paper>
    );
  }
}

export default withStyles(styles)(App);
