import React,{Component} from 'react';

export default class DataList extends Component{
	constructor(props){
		super(props);
		this.data = JSON.parse(this.props.data);
	}
	render(){
		let textColumn = [];
		this.data.forEach((v)=>{
			this.height = v.height;
			let column = <div style={{float:"left",color:v.color,backgroundColor:v.backgroundColor,height:v.height,width:v.width,fontSize:v.fontSize,boxSizing:"border-box",paddingLeft:"10px",borderLeft:"1px solid black",borderRight:"1px solid black"}}>{v.value}</div>
			textColumn.push(column);
		});
		return(
			<div style={{height:this.height}}>
			<div style={{height:"0px",borderTop:"1px dashed black",width:"100%"}}></div>
				{textColumn}
			</div>
		)
	}
}
