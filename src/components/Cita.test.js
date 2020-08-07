import React from "react";
import { shallow } from "enzyme";
import Cita from "./Cita";

describe("Cita", () => {
  const wrapper = shallow(<Cita cita={{}} eliminarCita={() => eliminarCita} />);
  const guardarCita = jest.fn();
  const eliminarCita = jest.fn(() => true);

  it("can be mounted", () => {
    expect(wrapper.find(".cita")).toHaveLength(1);
    expect(wrapper.find(".button")).toHaveLength(1);
  });

  it("should call trigger eliminarCita", () => {
    wrapper.find(".button").simulate("click");
    expect(eliminarCita("1")).toBe(true);
    expect(eliminarCita).toHaveBeenCalled();
  });
});
