/**
 * Created by slashhuang on 16/5/10.
 * 下拉菜单
 */
import React, { Component ,PropTypes} from 'react';

export default class DropDownMenu extends Component {

    constructor(props,context){
        super(props,context);
        this.state={
            title:props.title||'',
            dropDownData:props.dropDownData||[]
        }
    }
    clickCallback(hint){
        this.setState({
            hint:hint
        })
    }

    render(){
        let {title,dropDownData}= this.state;
        return(<div className='question-multi-menu'>
            <div className="question-multi-menu-head">
                    <span className="drop-down-hint">
                        {title}
                    </span>
                <i className='drop-down-arrow'></i>
            </div>
            <div className="question-multi-menu-body">
                <ul className="select-drop-down-list multi-drop-down-list">
                    {
                        dropDownData&&dropDownData.map((ele)=>{
                            return <li onClick={()=>{ele.callback(); this.clickCallback(ele.data);}}
                                       key={ele.data}>
                                        <div className="multi-drop-down-list-content">
                                        {ele.data}
                                    </div>
                                </li>
                        })
                    }
                </ul>
            </div>
        </div>)
    }
}