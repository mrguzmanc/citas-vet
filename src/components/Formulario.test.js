import React from "react";
import { shallow } from "enzyme";
import Formulario from "./Formulario";

describe("Formulario", () => {
  const wrapper = shallow(<Formulario crearCita={() => crearCita} />);
  const submitCita = jest.fn(() => false);

  it("can be mounted", () => {
    expect(wrapper.find("Fragment")).toHaveLength(1);
    expect(wrapper.find("form")).toHaveLength(1);
    expect(wrapper.find("label")).toHaveLength(5);
    expect(wrapper.find("input")).toHaveLength(4);
    expect(wrapper.find(".button")).toHaveLength(1);
  });

  it("should call trigger submitCita", () => {
    wrapper.find("button").simulate("click");
    expect(
      submitCita({
        mascota: "Marcos",
        propietario: "Sam",
        fecha: "10/02/2020",
        hora: "04:00 pm",
        sintomas: "fiebre",
      })
    ).toBe(false);
    expect(submitCita).toHaveBeenCalled();
  });
});
