/**
 * Created by slashhuang on 16/5/11.
 *层级下拉菜单栏
 */
import React, { Component ,PropTypes} from 'react';

export default class MultiDropDownMenu extends Component {

    constructor(props,context){
        super(props,context);
        this.state={
            dropDownQueue:[],//1代表浮动在1.2; 0代表浮动在2.1，
            formGroup:[],//最后存取的数据
            title:props.title
        };
        this.formData=this.state.formGroup;
    }

    /**
     * 渲染标题
     * @param formGroup
     *
     * @return {*}
     */
   renderTitle(formGroup){
       return formGroup&&formGroup.reduce((pre,ele)=>{
           return pre+ele['typeName']+';'
       },'')
   }

    /**
     * 处理多选框点击操作
     * @param ele
     */
    checkboxHandler(ele){
        var cachedFormGroup=this.state.formGroup;
        /**
         * 按照如下格式存取对外调用的数据，确保完备
         * [ele]//ele为数组中的每一项
         */
        var targetIndex= cachedFormGroup.indexOf(ele);
        if(targetIndex>-1){
            cachedFormGroup.splice(targetIndex,1);
        }else{
            cachedFormGroup.push(ele)
        }
        this.setState({
            formGroup:cachedFormGroup,
            title:this.renderTitle(cachedFormGroup)||this.props.title
        })
    }
    /**
     * 渲染多选框
     * @return {XML}
     */
    renderSelectMenu(selectDataSource){
        let {formGroup}= this.state;
        let XML =  <ul className="select-drop-down-list">
            {
                selectDataSource&&selectDataSource.map((ele)=>{
                    return <li className="select-drop-down-input" onClick={()=>{this.checkboxHandler(ele)}}>
                        <i className={formGroup.indexOf(ele)<0?'check-box':'check-box active'}>
                            <b></b>
                        </i>
                        <div className="select-drop-down-check-content"> {ele.typeName}</div>
                    </li>
                })
            }
        </ul>;
        return XML;
    }
    renderList(type,ele,activeIndex,index,depth){
        let xml = null;
        let {formGroup}=this.state;
        if(type=='branch'){
            xml = <li key={depth+ele.typeName} className={index==activeIndex?"on":''}>
                <div className='multi-drop-down-list-content'
                     onMouseOver={()=>{
                                    this.calculateNextMenuTree(depth,index)
                                 }}
                    >
                    {ele.typeName}
                </div>
                <em></em>
            </li>
        }else{
            xml = <li className="select-drop-down-input" onClick={()=>{this.checkboxHandler(ele)}} key={depth+ele.typeName}>
                <i className={formGroup.indexOf(ele)<0?'check-box':'check-box active'}>
                    <b></b>
                </i>
                <div className="select-drop-down-check-content"> {ele.typeName}</div>
            </li>
        }
        return  xml;

    }
    /**
     * 计算新的menu队列数据
     * @param depth 状态数组深度
     * @param index 替换的序数号
     */
    calculateNextMenuTree(depth,index){
        let cachedDropDownQueue=this.state.dropDownQueue;
        cachedDropDownQueue=cachedDropDownQueue.slice(0,depth);//每次鼠标浮动，保留之前的
        cachedDropDownQueue[depth] = index;//队列尾部添加序数号
        //推入数据
        this.setState({
            dropDownQueue:cachedDropDownQueue
        })
    }
    /**
     * 下拉children所需要的数据形式
     * [1,2,3]=>
     * dropDownData[1].children//第1层
     * dropDownData[1].children[2].children
     * dropDownData[1].children[2].children[3]
     * @type {{dropDownQueue: Array}}
     */
    renderQueuedMenu(dropDownQueue){
        var dropDownData = this.props.dropDownData;
        var cachedData=[];
        dropDownQueue.reduce((preQueue,cur)=>{
            /**
             * 参数叠加
             */
            preQueue.push(cur)

            /**
             * 往数组推送数据
             */
            var childMenuSourceData = preQueue.reduce((pre,cur)=>{
               return pre[cur].children;
            },dropDownData);
            if(childMenuSourceData && childMenuSourceData.length>0 ){
                cachedData.push(this.renderChildMenu(childMenuSourceData,preQueue.length,dropDownQueue));
            }
            return preQueue;
        },[]);
        return cachedData;
    }

    /**
     *
     * @param listData 菜单数据
     * @param depth 菜单深度(parent的节点)
     * @return {XML}
     * active的序数号码dropDownQueue[depth+1]
     */
    renderChildMenu(listData,depth,dropDownQueue){
        let activeIndex = dropDownQueue[depth];
        let XML =  <ul className="multi-drop-down-list select-drop-down-list" key={depth}>
            {
                listData&&listData.map((ele,index)=>{
                    return ele.leaf?this.renderList('leaf',ele,activeIndex,index,depth):this.renderList('branch',ele,activeIndex,index,depth);
                })
            }
        </ul>;
        return XML;
    }

    render(){
        let {dropDownData}= this.props;
        let {dropDownQueue,title}=this.state;
        return(
            <div className='question-multi-menu'>
                <div className="question-multi-menu-head" onMouseOver={()=>{
                 this.setState({
                    dropDownQueue:[]
                 })
                }}>
                    <span className="drop-down-hint">
                    {title}
                    </span>
                    <i className='drop-down-arrow'></i>
                </div>
                {dropDownData&&dropDownData.length>0?
                    <div className="question-multi-menu-body">
                        {
                            this.renderChildMenu(dropDownData,0,dropDownQueue)/*来自第0层*/
                        }
                        {
                            this.renderQueuedMenu(dropDownQueue)
                        }

                    </div>:null
                }

            </div>
        );
    }
}