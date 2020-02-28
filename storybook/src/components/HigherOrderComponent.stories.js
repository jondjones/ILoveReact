import React, { Fragment } from 'react';

const withDuck = (WrappedComponent) => {
  class HOC extends React.Component {
    render() {
      return (
        <Fragment>
          <div>
            I AM A DUCK
          </div>
          <WrappedComponent {...this.props}/>
        </Fragment>
      );
    } 
  }
    
  return HOC;
}; 


const Dog = props => (
  <div>
    I AM DOG
  </div>
);

const DogWithDuck = withDuck(Dog);

export const HigherOrderComponent = () => <DogWithDuck />;

export default {
  component: HigherOrderComponent,
  title: 'Higher Order Component',
};

