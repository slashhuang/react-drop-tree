/**
 * Created by slashhuang on 16/5/13.
 * 联想下拉组件
 */
import React, { Component ,PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
export default class DropDownSuggestion extends Component {
    constructor(props,context){
        super(props,context);
        this.state={
            formGroup:[],//满足联想要求的下拉框
            targetContact:{},//选中的目标联系人
            customerClassName:'',
            placeHolder:props.title||'',
            title:'',//展示的数据
            status:false
        };
        this.formData=this.state.targetContact;
    }
    static defaultProps={
        dropDownData:[],
        title:'下拉选择框'
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
    componentDidMount(){
        var that=this;
        findDOMNode(this.refs['suggestContainer']).addEventListener('mouseleave',()=>{
            that.judgeStatus();
        });
        this.setState({
            customerClassName:this.props.customerClassName||"drop-down-suggestion",
            placeHolder:this.props.placeHolder||"请填写姓名"
        });
    }
    judgeStatus(){
        if(Object.keys(this.state.targetContact).length<1){

        }
        this.formData=this.state.targetContact;
    }
    clickHandler(ele){
        this.setState({
            targetContact:ele,
            status:true,
            title:ele
        });
    }
    handleChange(value){
        var that =this;
        let {url}=this.props;
        this.setState({
            title:value
        });
        /**
         * 网络请求获取下拉框需要的数据
         */
        fetch(url).then(function(data){
            return data.json()
        }).then((data)=>{
            that.setState({
                formGroup:data['keywords'],
                targetContact:{}
            })
        }).catch(()=>{debugger});
    }
    renderChildMenu(formGroup){
        let XML = formGroup&&formGroup.length>0?<div className="question-multi-menu-body">
            <ul className="select-drop-down-list">
                {
                    formGroup&&formGroup.map((ele,index)=>{
                        return <li className="select-drop-down-input"
                                   key={ele+index}
                                   onClick={()=>{this.clickHandler(ele)}}>
                            <div>{ele}</div>
                        </li>
                    })
                }
            </ul></div>:<div></div>;
        return XML;
    }
    render(){
        let {formGroup,title,placeHolder}=this.state;
        return(
            <div className={this.state.customerClassName} ref='suggestContainer'>
                <input className="drop-down-suggestion-head"
                       style={{outline:'none'}}
                       value={title}
                       placeholder={placeHolder}
                       onChange={(e)=>this.handleChange(e.target.value)}
                    />
                {this.renderChildMenu(formGroup)}
            </div>
        );
    }
}