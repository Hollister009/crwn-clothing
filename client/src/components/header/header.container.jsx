import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import Header from './header';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: bindActionCreators(signOutStart, dispatch)
});

const ConnectedHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default ConnectedHeader;
