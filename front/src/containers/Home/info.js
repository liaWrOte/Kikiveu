import { connect } from 'react-redux';

import Info from '../../components/Home/Info';

import {
  changeStatus,
} from '../../actions/Home/info';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  avatar: state.info.avatar,
});

const mapDispatchToProps = (dispatch) => ({
  changeStatus: (newValue, name) => {
    dispatch(changeStatus(newValue, name));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Info);
