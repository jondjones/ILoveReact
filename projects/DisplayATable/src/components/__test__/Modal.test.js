import React from 'react';
import Modal from '../Modal';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Modal></Modal>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});