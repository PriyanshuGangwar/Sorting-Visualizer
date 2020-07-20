import React , {Component} from 'react';
import '../App.css';
import { Navbar, NavbarBrand,Button} from 'reactstrap';
import {SelectionSortAnimations,BubbleSortAnimations,MergeSortAnimations,QuickSortAnimations,InsertionSortAnimations} from './Algorithms';

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            array : [],
            height : 0,
            flag:false
        };
    }
    componentDidMount() {
        this.reset_array();
    }

    
    selection_sort() {
       
     
        const final = SelectionSortAnimations(this.state.array);
        const animations = final[0];
        const nc = final[1];
        const ns = final[2];
        console.log(nc,ns);
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

    bubble_sort() {
        
        const animations = BubbleSortAnimations(this.state.array);
       
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('bar');
            var f=0;
            if (animations[i].length==2) {
                const [barOneIdx, barTwoIdx ,f] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                
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

    merge_sort() {
   
        const animations = MergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('bar');
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? "red" : "blue";
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * 1);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * 1);
          }
        }
    
      }

    quick_sort() {
        
        const animations = QuickSortAnimations(this.state.array);
        
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('bar');
            var f=0;
            if (animations[i].length==2) {
                const [barOneIdx, barTwoIdx ,f] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                
                
                
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
                    
                    },i*2);
            }
        }
    

    } 
    
    insertion_sort(){
        const animations = InsertionSortAnimations(this.state.array);
        
        var fg=0;
        for (let i = 0; i < animations.length; i++) {
            
            for (let j = 0; j < animations[i].length; j++) {
                const arrayBars = document.getElementsByClassName('bar');
                    
                setTimeout(() => {
                    const [f,barOneIdx,newHeight] = animations[i][j];
                    let color = "blue";
                    if(animations[i][j][0] === 1)
                        color = "red";
                    else
                        color = "green";
                        
                    if( f != -1){
                       
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                    barOneStyle.backgroundColor = color;
                    }
                    
                    else{
                        color = "blue";
                        const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                    barOneStyle.backgroundColor = color;
                    }

                   
                    
                },i*50);
            }
            
        }
        setTimeout(() =>{
            console.log("FOR");
        for (let i = 0; i < this.state.array.length; i++){
            const arrayBars = document.getElementsByClassName('bar');
                
            let color = "blue";
            const barOneStyle = arrayBars[i].style;
            barOneStyle.backgroundColor = color;

        }},animations.length*50);


    }

    reset_array() {
        const array = [];
        for(var i = 0;i<275;i++){
            array.push(getRandom(5,600));
        }
        this.setState({flag: false});
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
                        <Button color="primary" onClick = {() => this.bubble_sort()}>Bubble Sort</Button>{' '}
                        <Button color="primary" onClick = {() => this.merge_sort()}>Merge Sort</Button>{' '}
                        <Button color="primary" onClick = {() => this.quick_sort()}>Quick Sort</Button>{' '}
                        <Button color="primary" onClick = {() => this.insertion_sort()}>Insertion Sort</Button>
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