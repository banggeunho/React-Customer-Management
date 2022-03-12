import './App.css';
import { Component } from 'react';
import Customer from './components/Customer'
import { TableRow, TableBody, TableCell, TableHead,Table } from '@mui/material';
import { withStyles } from '@mui/styles';
import { Paper } from '@mui/material';
import { CircularProgress } from '@mui/material';
import CustomerAdd from './components/CustomerAdd';

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: "auto"
  },

  table: {
    minWidth: 1080
  },
  progress:{
    // 위쪽으로 이만큼 margin을 줄  것
    // margin: theme.spacing.unit*2
  }
});

/* React Lift Cycle

1) constructor()

2) componentWillMount()

3) render()

4) componentDifMount()

# props 와 state를 변경하는 경우
props or state => shouldComponentUpdate() 

*/

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      customer: '',
      completed: 0
    }
  }

  stateRefresh = () => {
    this.setState({
      customers: '',
      completed: 0
    });
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 20); // 0.02초 마다 반복적으로 수행
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  callApi = async() => {
    const response = await fetch('http://localhost:5001/api/customers');
    const body = await response.json();
    return body;
  }
  
  progress = () => {
    const {completed} = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed+1})
  }

  render() {
    const {classes} = this.props;
    return (
      <div>
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
              {this.state.customers ? this.state.customers.map(c=> { return( <Customer key = {c.id} id = {c.id} image = {c.image} name = {c.name} birthday = {c.birthday} gender = {c.gender} job = {c.job}/>);
              }): 
              <TableRow>
                <TableCell colspan="6" align="center">
                  <CircularProgress className = {classes.progress} variant="determinate" value={this.state.completed}/>
                </TableCell>
              </TableRow>
              }
            </TableBody>
          </Table>                
        </Paper>
        <CustomerAdd stateRefresh={this.stateRefresh}/>
      </div>
    );
  }
}

export default withStyles(styles)(App);
