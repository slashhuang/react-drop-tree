/**
 * Created by slashhuang on 16/5/12.
 *
 * 下拉多选框菜单
 */
import React, { Component ,PropTypes} from 'react';
export default class DropDownSelect extends Component {
    constructor(props,context){
        super(props,context);
        this.state={
            formGroup:[],
            idGroup:[]
        };
        this.formData=this.state.formGroup
    }
    static defaultProps={
        dropDownData:[],
        title:'单层下拉列表'
    };
    static propTypes= {
        /**
         * ui展示的数据结构中的键值
         * */
        title:PropTypes.string,
        /**
         * 初始化展示头部文字
         * */
        dropDownData:PropTypes.array
    };

    checkboxHandler(ele){
        var cachedFormGroup=this.state.formGroup;
        var cachedidGroup = this.state.idGroup;
        var name = ele.name, id = ele.id;
        /**
         * 按照如下格式存取对外调用的数据，确保完备
         * [ele]//ele为数组中的每一项
         */
        var targetIndex= cachedFormGroup.indexOf(name);
        if(targetIndex>-1){
            cachedFormGroup.splice(targetIndex,1);
            cachedidGroup.splice(targetIndex,1);
        }else{
            cachedFormGroup.push(name);
            cachedidGroup.push(id);
        }
        this.setState({
            formGroup:cachedFormGroup,
            idGroup:cachedidGroup
        })
        this.formGroup= this.state.formGroup;
    }
    renderChildMenu(dropDownData){
        let {formGroup}= this.state;
        let XML =  <ul className="select-drop-down-list">
            {
                dropDownData&&dropDownData.map((ele)=>{
                    let name = ele.name;
                    return <li className="select-drop-down-input"
                               key={ele.name}
                               onClick={()=>{this.checkboxHandler(ele)}}>
                        <i className={formGroup.indexOf(name)<0?'check-box':'check-box active'}>
                            <b></b>
                        </i>
                        <div className='select-drop-down-check-content '>{name}</div>
                    </li>
                })
            }
        </ul>;
        return XML;
    }

    render(){
        let {dropDownData,title}= this.props;
        let {formGroup}=this.state;
        return(
            <div className='question-multi-menu'>
                <div className="question-multi-menu-head">
                    <span className="drop-down-hint">
                        {formGroup&&formGroup.join(";")||title}
                    </span>
                    <i className='drop-down-arrow'></i>
                </div>
                <div className="question-multi-menu-body">
                    {this.renderChildMenu(dropDownData)}
                </div>
            </div>
        );
    }
}