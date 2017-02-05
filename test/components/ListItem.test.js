import { renderComponent, expect } from '../TestHelpers';
import ListItem from '../../src/components/ListItem';

describe('ListItem', function() {
  let component;

  beforeEach(function() {
    const props = {
      task: {
        newTask: 'Buy milk'
      }
    };

    component = renderComponent(ListItem, props);
  });

  it('should have the correct class', function() {
    expect(component).to.have.class('listItem');
  });

  it('should have a list item', function() {
    expect(component.find('li').length).to.equal(1);
  });

  it('should have new task as a label', function() {
    expect(component.find('label')).to.contain('Buy milk');
  });

  it('should have a remove button', function() {
    expect(component.find('.removeButton')).to.exist;
  });
});

