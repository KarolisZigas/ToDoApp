import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class ToDoApp extends React.Component{
    state = {
        options: [],
        selectedOption: undefined,
    }
    handleDeleteOptions = () => {
        this.setState(()=> ({options: []}));
    }
    handlePick = () => {
        const randNum = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[randNum];
        this.setState(() => ({
            selectedOption: option
        }));
    }
    handleSelectedOption = () => {
        this.setState(() => ({selectedOption: undefined}))
    }
    handleAddOption = (option) => {
        if(!option){
            return "Enter valid value to add item";
        } else if(this.state.options.indexOf(option) > -1){
            return "This option already exists";
        } 
        this.setState((prevState)=>({options: prevState.options.concat([option])}));
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=> optionToRemove !== option)
        }));
    }
    componentDidMount(){
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(()=>({ options: options})) 
            }
        } catch (e) {
            
        }
    }
    componentDidUpdate(prevProps, prevState){
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
        console.log(this.state.selectedOption)
    }
    render(){
        const subtitle = "Everything I should do today (in a random order)";
        return(
            <div className=''>
                <Header subtitle={subtitle}/>
                <div className='container'>
                    <Action 
                        hasOptions={this.state.options.length > 0} 
                        handlePick={this.handlePick}
                    />
                <div className='widget'>
                    <Options 
                        options={this.state.options} 
                        handleDeleteOptions={this.handleDeleteOptions} 
                        handleDeleteOption={this.handleDeleteOption}
                    />
                    <AddOption handleAddOption={this.handleAddOption}/>
                </div>
                    
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleSelectedOption={this.handleSelectedOption}
                />
            </div>
        );
    }
}