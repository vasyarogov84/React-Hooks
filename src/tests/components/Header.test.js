import React from "react";
import Header from "../../../src/components/Header";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Will test <Header /> component", () => {
  let wrapper = shallow(<Header />);
  test("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("Should have 3 childs", () => {
    expect(wrapper.find("button").length).toBe(3);
    expect(wrapper.find(".todos").length).toBe(1);
  });
  test("Should show buttun text Todos", () => {
    expect(wrapper.find(".todos").text()).toBe("Todos");
    expect(wrapper.find("button").at(1).text()).toBe("Auth");
  });

  test("Should render context", () => {
    expect(wrapper.find(".test").text()).toBe("Viktor");
    wrapper.find(".test").simulate("click");
    expect(wrapper.find(".test").text()).toBe("Iryna");
    wrapper.find(".test").simulate("click");
    expect(wrapper.find(".test").text()).toBe("Viktor");
  });
});
