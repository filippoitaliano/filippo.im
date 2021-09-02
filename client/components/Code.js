class Code extends Component {

  /**
   * @param {Object} props
   * @param {string} props.source
   * @param {string} props.type
   */
  constructor(props) {
    super(props, null, { source: (source) => {
      console.log(source);
      return source.split('\n');
    } });
  }

  appendTo(parentNode) {
    super.appendTo(parentNode);

    const codeWrapper = createNode('code-wrapper');
    parentNode.appendChild(codeWrapper);
    
    this._props.source.forEach((line, index) => {
      const sourceLine = createNode('code-source-line', 'span');
      sourceLine.innerHTML = line;
      codeWrapper.appendChild(sourceLine);
    }); 

    const codeType = createNode('code-type-ribbon');
    codeType.innerHTML = this._props.type;
    codeWrapper.appendChild(codeType);
  }
}
