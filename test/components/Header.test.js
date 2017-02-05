import { renderComponent, expect } from '../TestHelpers';
import Header from '../../src/components/Header';

describe('Header', function() {
  let component;

  beforeEach(function() {
    component = renderComponent(Header);
  });

  it('has the correct class', function() {
    expect(component).to.have.class('header');
  });

  it('has a text area', function() {
    expect(component.find('input')).to.exist;
  });

  it('has a button', function() {
    expect(component.find('.addButton')).to.exist;
  });

  describe('entering some text', function() {
    it('shows empty input', function() {
      expect(component.find('input')).to.have.value('');
    });

    it('shows task in the textarea', function() {
      component.find('input').simulate('change', 'Task');

      expect(component.find('input')).to.have.value('Task');
    });
  });
});
