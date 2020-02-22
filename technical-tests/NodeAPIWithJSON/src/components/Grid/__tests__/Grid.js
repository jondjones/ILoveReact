import React from "react";
import { shallow, configure } from "enzyme";
import Grid, {truncate} from "../Grid";
import Adapter from 'enzyme-adapter-react-16';
import mockResponse from '../../../../data/conditions.json';

configure({adapter: new Adapter()});
describe("Grid", () => {
    it("renders Grid component", () => {
      const component = shallow(<Grid conditions={mockResponse.conditions}/>);
      expect(component).toMatchSnapshot();
    });
});
describe("truncateDescription", () => {
    it("truncates 50 charcters", () => {
      const result = truncate('fsxCv7ZGzi0vnTEq6b23SYmhFAJcJR7BBybfUPDfgWfRCuBeo6L');
      expect(result).toContain('...');
    });
    it("it does not truncate under 50 characters", () => {
        const test = 'fsxCv7ZGzi0vnTEq6b23SYmhFAJcJR7BBybfUPDfgWfRCuBeo6';
        const result = truncate(test);
        expect(result).toBe(test);
    });
    it("to do throw an error is not set", () => {
        const result = truncate();
        expect(result).toBeUndefined();
    });
});
