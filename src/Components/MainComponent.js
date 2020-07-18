import React , {Component} from 'react';
import '../App.css';
import { Navbar, NavbarBrand,Button} from 'reactstrap';
import {SelectionSortAnimations} from './Algorithms';

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            array : [],
            height : 0
        };
    }
    componentDidMount() {
        this.reset_array();
    }
    
    selection_sort() {
       
        const animations = SelectionSortAnimations(this.state.array);
        console.log(animations);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('bar');
            if (animations[i].length==2) {
                const [barOneIdx, barTwoIdx ,f] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = "red" ;
                setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                }, i*0.5);
            } else {
                setTimeout(() => {
                    const color = "blue" ;
                    const [barOneIdx,barTwoIdx, newHeight1, newHeight2] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barOneStyle.height = `${newHeight1}px`;
                    barTwoStyle.height = `${newHeight2}px`;
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                    
                    },i*0.5);
            }
        }

    }

    reset_array() {
        const array = [];
        for(var i = 0;i<275;i++){
            array.push(getRandom(5,600));
        }

        this.setState({array: array});
    }
    
    render(){  
        const {array} = this.state;
        return (
            <div>
                 <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Sorting Visualiser</NavbarBrand>
                    
                        <Button color="primary" onClick = {() => this.reset_array()} >Reset Array</Button>{' '}
                        <Button color="primary" onClick = {() => this.selection_sort()}> Selection Sort</Button>{' '}
                        <Button color="primary">Bubble Sort</Button>{' '}
                        <Button color="primary">Merge Sort</Button>{' '}
                        <Button color="primary">Quick Sort</Button>
                    </div>
                </Navbar>
                <div className = "container">
                    {array.map((value,index) => {
                        return(
                            <div className = "bar" key = {index}  style = {{height: `${value}px`}} ></div>
                        );
                    })}
                </div>
                
            </div>
        );
        
    }
}
export default Main;