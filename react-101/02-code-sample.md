
# Code Samples

## Hello World

Below shows the smallest react app you can make

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Hello World</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
</head>

<body>
    <div class="container">
        <div id="react-target">
        </div>
    </div>
</body>

<script src="https://fb.me/react-0.14.6.js"></script>
<script src="https://fb.me/react-dom-0.14.6.js"></script>

<script>
    var displayHtml = React.createElement('h1', {}, 'Hello World');
    ReactDOM.render(displayHtml, document.getElementById('react-target'))
</script>
</html>
```  

## Higher Order Components

HOC names usually start with the term with as it adds on extra information

```javascript
import React from 'react';

const withValidation = (WrappedComponent, validations) => {
  class HOC extends React.Component {
    render() {
      return (
        <WrappedComponent
          {...this.props}
          validations={validations}
        />
      );
    } 
  }
    
  return HOC;
}; 

export default withValidation;
```

```javascript
import React from 'react';
import withValidation from './with-validation';

const DisplayTheSecret = props => (
  <div>
    The secret to life is {props.secret} {props.secret}.
  </div>
);

const WrappedComponent = withValidation(DisplayTheSecret, 'this');
export default WrappedComponent;
```

## Filter import React from 'react'

This component will take in an array of data and filter it.  This component shows the benefit of using componentWillMount()

```javascript
import React from 'react';

export default class MyFilteringComponent extends React.Component {
    state = {
        initialItems: [],
        items: []
    }

    filterList = (event) => {
      let items = this.state.initialItems;
      items = items.filter((item) => {
        return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
      });
      this.setState({items: items});
    }

    componentWillMount = () => {
      this.setState({
          initialItems: this.props.content,
          items: this.props.content
      })
    }

    render() {
      return (
        <div>
          <h3>
            Filtering Example
          </h3>
          <form>
                <input type="text" placeholder="Search" onChange={this.filterList}/>
          </form>
          <div>
            {
                this.state.items.map(function(item) {
                    return <div key={item}>{item}</div>
                })
            }
            </div>
        </div>
      );
    }
};
```

## JSON Form Example

JSON form allows you to create a web form in a react app.  When you use JSON form you do not need to write much code yourself, as it allows you to build your form through a JSON schema.  Lets say you have the JSON schema defined as below

```javascript
const mySchema ={
  "title": "My Form",
  "description": "My Form",
  "type": "object",
  "required": [
    "name"
  ],
  "properties": {
    "name": {
      "type": "string",
      "title": "Name"
    }
  }
};
```

You could then use this code to render a form

```javascript
import React, { Component } from 'react';
import Form from 'react-jsonschema-form'

export default class MyForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit({formData}) {
        console.log(formData);
    }

    render() {
        return (
            <Form schema={mySchema} onSubmit={this.handleSubmit} />
        )
    }
}
```

## Redux 101

Basic example of how to get data in and out of redux

```javascript
import { createStore } from 'redux';


const incrementCount = ({increaseBy = 1} = {}) => ({
    type: 'ADD',
    increaseBy: increaseBy    
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'MINUS',
    decrementBy: decrementBy
});

const mulitplyCount = ({multiplyBy = 1} = {}) => ({
    type: 'MULTIPLY',
    multiplyBy: multiplyBy
});

const resetCount = ({Payload} = {}) => ({
    type: 'RESET'
});

const setCount = ({count} = {}) => ({
    type: 'SET',
    count: count
});

const countReducer = (state = {count: 0}, action) => {
    switch(action.type) {
        case 'ADD':
            return {
                count: state.count + action.increaseBy
            } 
        case 'MINUS':
            return {
                count: state.count - action.decrementBy
            }
        case 'MULTIPLY':
            return {
                count: state.count + action.multiplyBy
            }
         case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
    }

    return state;
};
```

You can talk to the store, by:

```javascript
const store = createStore(countReducer);
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount());
store.dispatch(mulitplyCount({multiplyBy: 5}));
store.dispatch(decrementCount({decrementBy: 2}));
store.dispatch(resetCount());
store.dispatch(setCount({count:101}));
unsubscribe(); 
store.dispatch(mulitplyCount());
```