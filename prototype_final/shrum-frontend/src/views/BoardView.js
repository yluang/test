import React, { Component, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { connect, useSelector } from "react-redux";


//import BoardComponent from "../components/BoardComponent";
import Board from 'react-trello'


/**
 * For register new users
 * @param {props} props
 */

 class NewCardForm extends Component {
  handleAdd = () => this.props.onAdd({title: this.titleRef.value, description: this.descRef.value, label: this.label.value, assignee: this.assignee.value, priority: this.priority.value, reviewer: this.reviewer.value})
  setTitleRef = (ref) => this.titleRef = ref
  setDescRef = (ref) => this.descRef = ref
  setLabelRef = (ref) => this.label = ref
  setAssigneeRef = (ref) => this.assignee = ref
  setPriorityRef =(ref) => this.priority = ref
  setReviewerRef = (ref) => this.reviewer = ref
  render() {
  const {onCancel} = this.props
  return (
   <div style={{background: 'white', borderRadius: 3, border: '1px solid #eee', borderBottom: '1px solid #ccc'}}>
    <div style={{padding: 5, margin: 5}}>
      <div>
        <div style={{marginBottom: 5}}>
          <input type="text" ref={this.setTitleRef} placeholder="User" />
        </div>
        <div style={{marginBottom: 5}}>
          <input type="text" ref={this.setDescRef} placeholder="Task Description" />
        </div>
        <div style={{marginBottom: 5}}>
          <input type="text" ref={this.setLabelRef} placeholder="points" />
        </div>
        <div style={{marginBottom: 5}}>
          <input type="text" ref={this.setAssigneeRef} placeholder="assignee" />
        </div>
        <div style={{marginBottom: 5}}>
          <input type="text" ref={this.setPriorityRef} placeholder="priority" />
        </div>
        <div style={{marginBottom: 5}}>
          <input type="text" ref={this.setReviewerRef} placeholder="reviewer" />
        </div>
      </div>
      <button onClick={this.handleAdd}>Add</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  </div>
    ) 
  }
}



function BoardView() {
    let data = {
      lanes: [
      {
        id: 'lane1',
        title: 'To Do',
        cards:[],
        cards: [
          {id: 'Card1', title: 'Assignment 1', description: 'Deadline: Sunday, May 2nd.',assignee: 'None', priority:'low ❗', reviewer: 'None', label: '3 Points', draggable: true},
          {id: 'Card2', title: 'Assignment 2', description: 'Deadline: Sunday, May 16th.', assignee: 'None', priority:'low ❗', reviewer: 'None',  label: '5 Points', metadata: {sha: 'be312a1'}},
          {id: 'Card3', title: 'Assignment 3', description: 'Deadline: Sunday, July 25th.', assignee: 'None', priority:'high ❗❗', reviewer: 'None', label: '8 Points', metadata: {sha: 'be312a1'}},
          {id: 'Card4', title: 'Final Exam', description: 'Deadline: Friday, Augusr 6th.',  assignee: 'None', priority:'high ❗❗', reviewer: 'None', label: '8 Points', metadata: {sha: 'be312a1'}}
        ]
      },
      {
        id: 'lane2',
        title: 'In Progress',
        cards: []
     
      },
      {
        id: 'lane3',
        title: 'In Review',
        cards: []
       
      },
      {
        id: 'lane4',
        title: 'Done',
        cards: []
      
      }
    ]
  };

  //localStorage.setItem('data', JSON.stringify(data));
  //var retrievedObject = localStorage.getItem('data') || [];
  //console.log('old data: ', JSON.parse(retrievedObject));

    return (
      <Board style = {{backgroundColor: 'grey'}}
      editable
    
      onCardAdd={(card) => {localStorage.setItem('data', JSON.stringify(card));
                           var retrievedObject = localStorage.getItem('data');
                         console.log("new card: ", retrievedObject)}}

      onDataChange={(newData) => {
                          localStorage.clear();
                          localStorage.setItem('data', JSON.stringify(newData));
                          var retrievedObject = localStorage.getItem('data');
                          console.log("data changed",JSON.parse(retrievedObject))
                     }}
                    cardDraggable
                    draggable
                    data={JSON.parse(localStorage.getItem('data'))  || data }   
                    collapsibleLanes
                    //components={{NewCardForm: NewCardForm}} 
                         />
                         
    );


   
  
}

export default connect()(withRouter(BoardView));
