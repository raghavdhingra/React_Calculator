import React, { Component } from 'react';
class Raghav extends Component {

    render() {
        return (
            <div className='btn btn-primary m-3 p-2' onClick={this.writeNum}>{this.props.value}</div> 
        );
    } 
    writeNum = () => {
        var x = this.props.value;
        var y = document.getElementById('calc_screen');
        y.value += x;
    }
}
class Equal extends Raghav{
    render(){
        return(
            <div className='btn btn-primary m-3 p-2' onClick={this.answer}>{this.props.value}</div>
        );
    }
    answer = () => {
        var display = document.getElementById('calc_screen');
        var len = display.value.length;
        var last_val = display.value.substring(len-1);
        switch(last_val){
            case '+':
            case '-':
            case '/':
            case '*':
            case '(':
            alert('Error: Please check the syntax');
            break;
            // eslint-disable-next-line
            case '.': {display.value.concat('0');display.value = eval(display.value);};break;
            // eslint-disable-next-line
            default:display.value = eval(display.value);break;
        }
    }
}
class ClearAll extends Raghav{
    render(){
        return(
            <div className='btn btn-primary m-3 p-2' onClick={this.allClear}>{this.props.value}</div>
        );
    }
    allClear = () => {
        document.getElementById('calc_screen').value='';
    }
}
class Backspace extends Raghav{
    render(){
        return(
        <div className='btn btn-primary m-3 p-2 font-weight-bold' onClick={ this.backClear }>{this.props.value}</div>
        );
    }
    backClear = () => {
        const display = document.getElementById('calc_screen');
        var display_len = display.value.length;
        var del = display.value.substring(0,display_len-1);
        display.value = del;
    }
}
class Calculate extends Raghav{
    render(){
        return (
            <div className='calc_body'>
                <input type='text' id='calc_screen' readOnly/>
                <center className='buttons'>
                    <Raghav value='1'/> <Raghav value='2'/> <Raghav value='3'/> <Raghav value='+'/>
                    <Raghav value='4'/> <Raghav value='5'/> <Raghav value='6'/> <Raghav value='-'/>
                    <Raghav value='7'/> <Raghav value='8'/> <Raghav value='9'/> <Raghav value='*'/>
                    <Raghav value='.'/> <Raghav value='0'/> <Equal value='='/> <Raghav value='/'/>
                    <Raghav value='('/> <Raghav value=')'/> <ClearAll value='AC'/> <Backspace value='<<'/>
                </center>
            </div>
        );
    }
}
export default Calculate;