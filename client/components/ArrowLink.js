class ArrowLink extends Component {

  /**
   * @param {Object} props 
   * @param {string} props.href 
   * @param {string} props.text
   * @param {boolean} props.reverse
   */
  constructor(props) {
    super(props, { reverse: false });
    this.id = `arrowlink_${getRandomNumber()}`;
  }

  _getSvgClassName() {
    if (this.props.reverse) return 'arrow-link-svg arrow-link-svg-reverse';
    return 'arrow-link-svg';
  }

  navigateToHref() {
    return navigate(this.props.href);
  }

  appendTo(parentNode) {
    super.saveParentNode(parentNode);

    const template = appendInnerHtmlTemplate(parentNode, this.id, `
      <a class="arrow-link-a" href="${this.props.href}" id="${this.id}">
        <span class="${this._getSvgClassName()}">
          <svg xmlns="http://www.w3.org/2000/svg" width="31.432" height="9.664" viewBox="234.9 304.668 31.432 9.664"><defs><style>.a{fill:none;stroke:red;stroke-linecap:round;stroke-width:1.2px;}</style></defs><line class="a" x2="30" transform="translate(235.5 309.5)"/><line class="a" x2="6" y2="4" transform="translate(259.5 305.5)"/><line class="a" y1="4" x2="6" transform="translate(259.5 309.5)"/></svg>
        </span>
        <span class="arrow-link-text">${this.props.text}</span>
      </a>
    `);

    template.onclick = this.navigateToHref.bind(this);
  }

}
