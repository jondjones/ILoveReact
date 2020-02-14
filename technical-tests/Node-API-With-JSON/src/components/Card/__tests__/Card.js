import React from "react";
import { shallow, configure } from "enzyme";
import Card from "../Card";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe("Item", () => {
  it("renders Item component", () => {
    const component = shallow(<Card />);
    expect(component).toMatchSnapshot();
  });
});
