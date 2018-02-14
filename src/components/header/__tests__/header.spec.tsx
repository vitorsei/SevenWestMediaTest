import * as React from 'react';
import { shallow } from 'enzyme';
import Header from "../header";

describe('Header Events', () => {
  let shallowComponent: any;

  beforeEach(() => {
    shallowComponent = shallow(<Header text=""
                                            logo=""
                                            backgroundImg=""
    />);
  });

  it('Header Component', () => {
    expect(shallowComponent).toMatchSnapshot();
  });
});
