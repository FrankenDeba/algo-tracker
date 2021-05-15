import React, { useEffect, useState } from 'react'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import "./TableStyle.css"
import BootstrapTable, { TableHeaderColumn } from 'react-bootstrap-table-next';
import EllipsisText from '../EllipsisText/EllipsisText';
const products = [{sno: 1, ques: "Count maximus of arraay", link: "xvvv.com", comment: "abc"}, 
                  {sno: 2, ques: "reverse a linked list", link: "hub.com", comment: "xyz"},
                  {sno: 3, ques: "replace a string", link: "xvvv.com", comment: "xyz"},
                  {sno: 4, ques: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum", link: "xvvv.com", comment: "xyz"},
                  {sno: 5, ques: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum", link: "xvvv.com", comment: "xyz"},
                  {sno: 6, ques: "lorem ipsum lorem ipsum lorem ipsum", link: "xvvv.com", comment: "xyz"}
                ];

function Table({showQuesDetails}) {
  const [toolTipShow, setToolTipShow] = useState([false, null])
  const [data, setData] = useState(products)
  const [del, setDel] = useState(0)
  const [tableMove, setTableMove] = useState(false)
  useEffect(() => {
    setData([...data.map((d, index) => {
      console.log({d: d.sno, index, data: data[index]});
      console.log("length", data.length);
      data[index].sno = ++index
      return d
    })])
  }, [del])
  useEffect(() => {
    const interV = setTimeout(() => {
      setTableMove(true)
    }, 0)
    return () => {
      clearTimeout(interV)
    }
  }, [])
  const columns = [{
    dataField: 'sno',
    text: 'S.No',
  }, {
    dataField: 'ques',
    text: 'Question',
    formatter: (cell, row) => {
      return <div className = "table__cell__text">
                {/* <EllipsisText max = {50} showToolTip = {(val) => showToolTip(val, row.sno)}>{cell}</EllipsisText> */}
                <a href = {row.link}>{cell}</a>
              </div>
      },
      sort: true,
    },
    {
      dataField: 'comment',
      text: 'Comment',
  },
{
  dataField: "",
  text: "",
  formatter: (cell, row) => {
    return <div onClick = {() => handleDelete(row.sno)}><i class="far fa-trash-alt"></i></div>
  }
},
{
  dataField: "",
  text: "",
  formatter: (cell, row) => {
    return <div>
      <i class="far fa-edit"></i>
    </div>
  }
},
{
  dataField: "",
  text: "Details",
  formatter: (cell, row) => {
    return <div className = "table__ques__details" onClick = {() =>{ 
      window.alert("clicked")
      showQuesDetails(row.sno)}}><i class="fas fa-info-circle" style = {{color: "inherit"}}></i></div>
  }
}];
  const showToolTip = (val, sno) => {
    console.log({val, sno});
    setToolTipShow([val, sno])
  }
  // const CellFormatter = (cell, row) => {
  //   return (<div><a href={cell+"/"+row.age}>{cell}</a></div>);
  // }
  

  const CellFormatter = (cell, row) => {
    console.log({cell, row});
    return (
      <div style = {{color: "red"}}>{cell}</div>
    //<EllipsisText max = {20} showToolTip = {(val) => showToolTip(val, row.sno)}>{row.ques}</EllipsisText>
    )
  }
  const handleDelete = (sno) => {
    console.log({sno});
    let tempData = data
    tempData.splice(sno - 1, 1)
    setData(tempData
      //data.filter((item, index) => index + 1 !== sno)
      )
    setDel(prevState => ++prevState)
  }

  return (
    <div>
      {data?.length === 0 ?
      <div className = "empty__ques__container">No Question Remaining</div>
      :
      <BootstrapTable 
        keyField='id' 
        data={ data } 
        columns={ columns } 
        headerClasses = "table__header"
        wrapperClasses = {`table__wrapper ${tableMove ? "table__move" :  ""}`}
        striped
        >
          <TableHeaderColumn dataField="ques"  dataFormat={CellFormatter} dataSort>Name</TableHeaderColumn>
        </BootstrapTable>
      }
        {
          toolTipShow[0] &&
          <div style = {{position: "absolute", top: "50px", zIndex: "99"}} className = "tooltip">{products.forEach(item => {
            // console.log({item, toolTipShow});
            if (item.sno === toolTipShow[1] + 1) {
              console.log({item});
              return item.ques
}})}</div>
        }
    </div>
  )
}

export default Table
