import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { Dispatch } from 'redux';

import { IRootState } from '../../store/rootReducer';

import {
  Action,
  fetchTesterCountries,
  fetchDeviceOptions,
  search,
} from '../../store/search/actions'

import {
  selectDeviceOptions,
  selectTesterCountries,
  selectSearchResults
} from '../../store/search/selectors'

import { SearchPageBase, IProps } from './SearchPage';
import { ISearchParams } from '../../types/ISearchParams';

const mapStateToProps: MapStateToProps<any, any, IRootState> = (
  state: IRootState
) => {
  return {
    deviceOptions: selectDeviceOptions(state),
    testerCountries: selectTesterCountries(state),
    searchResults: selectSearchResults(state)
  };
};

const mapDispatchToProps: MapDispatchToProps<any, IProps> = (
  dispatch: Dispatch<Action>
) => ({
  fetchTesterCountries: () => dispatch(fetchTesterCountries()),
  fetchDeviceOptions: () => dispatch(fetchDeviceOptions()),
  search: (payload: ISearchParams) => dispatch(search(payload)),

});

export const SearchPage: React.ComponentType<any> = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPageBase);