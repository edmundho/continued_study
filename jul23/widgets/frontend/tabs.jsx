import React from 'react';

class Headers extends React.Component {
  render () {
    let selected = this.props.selectedTab;
    let headers = this.props.panes.map((tab, index) => {
      let title = tab.title;
      let klass = "";
      if (index === selected) {
        klass = 'active';
      }

      return (
        <li
          key={index}
          className={klass}
          onClick={this.props.onTabChosen.bind(null, index)}>
          {title}{'  '}
        </li>
      );
    });

    return (
      <ul className='tabs-header'>{headers}</ul>
    );
  }
}

class Tabs extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      selected: 0,
    };

    this.switchTabs = this.switchTabs.bind(this);
  }

  switchTabs (num) {
    this.setState({ selected: num });
  }

  render () {
    const tabs = this.props.content;
    
    return (
      <div id="tabs">
        <div id="tabs-inner">
          <Headers
            selectedTab={this.state.selected}
            onTabChosen={this.switchTabs}
            panes={tabs}>
            </Headers>
          <article>
            {tabs[this.state.selected].content}
          </article>
        </div>
      </div>
    );
  }
}

export default Tabs;