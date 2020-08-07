import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App - renders", () => {
  const wrapper = shallow(<App />);

  it("can be mounted", () => {
    expect(wrapper.find("Fragment")).toHaveLength(1);
    expect(wrapper.find("Formulario")).toHaveLength(1);
    expect(wrapper.find("Cita")).toHaveLength(0);
  });
});
