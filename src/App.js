import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectors, actions } from './store';
import { ASSESSORS_REQUEST } from './store/types';

import './App.css';

class Component extends React.Component {
  componentDidMount() {
    this.props.loadAssessors();
  }

  render() {
    const { assessors } = this.props;

    return (
      <>
        <ul>
          {
            assessors.map(({ id, firstname, lastname, email}) => (
              <li key={id}>{`${firstname} ${lastname}(${email})`}</li>
            ))
          }
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  assessors: selectors.getAssessors(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addAssessor: actions.addAssessor,
  loadAssessors: () => ({ type: ASSESSORS_REQUEST }),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Component);
