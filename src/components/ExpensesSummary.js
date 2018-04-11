import React from 'react';
import numeral from 'numeral';
import expensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import { connect } from 'react-redux';

export const ExpensesSummary = (props) => {
  const length = props.expenses.length;
  const total = expensesTotal(props.expenses);
  return (
    <div>
      Viewing : {(length===1 )? (length + " expense ") :(length + " expenses ") }
      totalling : {numeral(total/100).format('$0,0.00')}
    </div>
  );
}

const mapStateToProps = (state)=> {
  return {
    expenses : selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
