// import React from 'react';
// import { connect } from 'react-redux';
// import propTypes from 'prop-types';
// import { deleteContact } from '../../redux/phonebook/phonebook-actions';
// const IconButton = ({ children, id, onDelete, ...allyProps }) => (
//   <button type="button" onClick={onDelete} {...allyProps}>
//     {children}
//   </button>
// );
// IconButton.defaultProps = {
//   onClick: () => null,
//   children: null,
// };
// IconButton.propTypes = {
//   onClick: propTypes.func,
//   children: propTypes.node,
// };

// const mapDispatchToProps = dispatch => ({
//   onDelete: id => dispatch(deleteContact(id)),
// })

// export default connect(null,mapDispatchToProps)(IconButton);
