import React from 'react'
import AddOption from './AddOption'
import Options from './Options'
import Action from './Action'
import Header from './Header'
import OptionModel from './OptionModal'

export default class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleClearDisplyModalState = this.handleClearDisplyModalState.bind(this);
        this.state = {
            options: props.options,
            displyModal: undefined
        };

        this.title = props.title;
        this.subtitle = props.subtitle;
    }
    componentDidMount(prevProps, prevState) {
        try {
            console.log('Get Data');
            const optionAsJson = localStorage.getItem('options');
            const optionObject = JSON.parse(optionAsJson);

            if (optionObject) {
                console.log('Setting data from cache');
                this.setState(() => ({options:optionObject}));
            }
        } catch(e) {
            // Do Nothing.
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.options.length > 0) {
            console.log('Saving Data');
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json);
        }
    }
    handleDeleteOptions() {
        this.setState(() => ({options: []}));
    }
    handleClearDisplyModalState() {
        this.setState(() => ({displyModal: undefined}));
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToRemove)
        }));
    }
    handlePick() {
         const randomOption = this.state.options[Math.floor(Math.random() * this.state.options.length)]
         this.setState(() => ({displyModal: randomOption}));
    }
    handleAddOption(option) {
        if (!option) {
            return 'Add A Todo';
        }
        else if(this.state.options.indexOf(option) > -1) {
            return 'Todo already exists.. stupids';
        }

        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    }
    render() {
        return (
            <div>
                <Header title={this.title} subtitle={this.subtitle} />
                <div className="container">
                    <OptionModel 
                        displyModal={this.state.displyModal} 
                        handleClearDisplyModalState={this.handleClearDisplyModalState}
                    />
                    <Action
                        hasoptions={this.state.options.length > 0}
                        handlepick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            myoptions={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOoption={this.handleAddOption}
                        />
                    </div>
                 </div>
            </div>
        );
    }
}

TodoApp.defaultProps= {
    options: ['test'],
    title: 'TODO APP',
    subtitle:'Todays Todos'
};