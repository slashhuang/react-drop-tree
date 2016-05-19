/**
 * Created by slashhuang on 16/5/19.
 * js编写输入框取消按钮
 */
import React, { Component ,PropTypes} from 'react';

export default class Drawing extends Component {
    constructor(){
        super();
    }
    static defaultProps={
        size:19,
        show:false
    };
    calculateSize(delta=0){
        let {size,show}=this.props;

        return {width:(size+delta)+'px',height:(size+delta)+'px',visibility:show?'visible':'hidden'}
    }
    render(){
        let inlineStyle={width:this.calculateSize(-5).width};
        return (
          <div style={this.calculateSize()} className='common-input-cancel-button' {...this.props}>
              <i style={inlineStyle} className={'left-rotate'}></i>
              <i style={inlineStyle} className={'right-rotate'}></i>
          </div>
          )
    }
}