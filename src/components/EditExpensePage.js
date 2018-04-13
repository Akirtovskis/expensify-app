import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, startRemoveExpense} from '../actions/expenses';

//Refactor EditExpense to class based component
//Setup mapDispatchToProps editExpense removeExpense

//beforeEach()
//Should render edit expense page (SNAPSHOT)
//Should handle edit expense (SPIES)
//Should handle remove expense (REMOVE)
export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }
  onRemove = (expense) => {
    this.props.startRemoveExpense({id:this.props.expense.id});
    this.props.history.push('/');
  }
  render(){
    return (
      <div>
        <ExpenseForm
          expense = {this.props.expense}
          onSubmit = {this.onSubmit}
        />
        <button onClick={this.onRemove}
        >Remove</button>
      </div>
    );
  };
}

const mapStateToProps = (state, props) => {
  return {
    expense : state.expenses.find((expense)=> expense.id === props.match.params.id)
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  editExpense : (id, expense)=>dispatch(editExpense(id, expense)),
  startRemoveExpense : (data)=>dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
