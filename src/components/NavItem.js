import React from 'react';

class NavItem extends React.Component {
  render() {
    return (
      <li className="nav-item"><a className={`nav-link js-scroll-trigger ${this.props.className}`} href={`#${this.props.href}`}>{this.props.children}</a></li>
    )
  }
}
export default NavItem;
