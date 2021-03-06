/**
 * Created by josh.welham on 09/06/16.
 */

/* eslint no-unused-expressions: ["off"] */
/* eslint no-shadow: ["error", {"allow": ["doc"]}] */

const {describe, it} = global;
import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import Errors from '../src/errors';

describe('meteor-react-autoform.errors', () =>
{
  it('Should display the h3 title', () =>
  {
    const el = mount(
      <Errors errors={errors} />
    );

    expect(el.find('h3').text()).to.equal('There was an error submitting the form:');
  });

  it('Should display name and description error', () =>
  {
    const el = mount(
      <Errors errors={errors} />
    );

    expect(el.find('ul li').length).to.equal(5);
    expect(el.find('ul li').at(0).key()).to.equal('name');
    expect(el.find('ul li').at(0).text()).to.equal('Name is required');
    expect(el.find('ul li').at(1).key()).to.equal('description');
    expect(el.find('ul li').at(1).text()).to.equal('Description is required');
    expect(el.find('ul li').at(4).key()).to.equal('dogOrCat');
    expect(el.find('ul li').at(4).text()).to.equal('Dogs are the best');
  });

  it('Should display a custom error h3 title', () =>
  {
    const el = mount(
      <Errors errors={errors} title="My custom error title" />
    );

    expect(el.find('h3').text()).to.equal('My custom error title');
  });
});

const errors = {
  name: {
    message: 'Name is required'
  },
  description: {
    message: 'Description is required'
  },
  address: {
    message: 'There seems to be an error in your address'
  },
  colour: {
    message: 'You must select red'
  },
  dogOrCat: {
    message: 'Dogs are the best'
  }
};
