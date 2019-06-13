import * as React from 'react';
import {
  Form,
  Formik,
} from 'formik';

import { FormGroup } from '../../components/FormGroup/FormGroup'
import { ISearchParams } from '../../types/ISearchParams'
import { ISearchResult } from '../../types/ISearchResult';

export interface IState {
  selectedCountries: string[];
  selectedDevices: string[];
  [key: string]: string[];
}

export interface IFormResponse {
  countries: string[];
  devices: string[];
}

export interface IProps {
  deviceOptions: string[];
  testerCountries: string[];
  searchResults: ISearchResult[];
  fetchTesterCountries: () => void;
  fetchDeviceOptions: () => void;
  search: (payload: ISearchParams) => void;
}

export class SearchPageBase extends React.Component<IProps> {

  public state: IState = {
    selectedCountries: [],
    selectedDevices: [],
  }

  public componentDidMount() {
    const { fetchTesterCountries, fetchDeviceOptions } = this.props;
    fetchTesterCountries();
    fetchDeviceOptions();
  }

  public render() {
    const { deviceOptions, testerCountries, searchResults } = this.props;
    return (
      <div
        style={{
          margin: '20px',
        }}
      >
        <h1>Search Page</h1>
        <h3>Please choose at least one country and device in order to be able to fetch the results</h3>
        <Formik
          initialValues={{
            countries: [],
            devices: [],
          }}
          onSubmit={this.submit}
        >
          <Form>
            <FormGroup>
              <h2> Countries: </h2>
              {testerCountries.map(country =>
                <div key={country}>
                  <input
                    checked={this.state.selectedCountries.includes(country)}
                    type="checkbox"
                    id={country}
                    name={country}
                    onChange={this.handleCountryChange} />
                  <label htmlFor={country}>{country}</label>
                </div>
              )}
            </FormGroup>
            <FormGroup>
              <h2> Devices: </h2>
              {deviceOptions.map(device =>
                <div key={device}>
                  <input
                    type="checkbox"
                    checked={this.state.selectedDevices.includes(device)}
                    id={device}
                    name={device}
                    onChange={this.handleDeviceChange} />
                  <label htmlFor={device}>{device}</label>
                </div>)}
            </FormGroup>
            <button
              onClick={this.submit}
              disabled={this.isSubmitDisabled()}
            >
              Submit
            </button>
          </Form>
        </Formik>
        <h2> Results: </h2>
        <ul>
          {searchResults.map(({ firstName, lastName, experience }) =>
            <li key={firstName}>{firstName} {lastName} ({experience})</li>
          )}
        </ul>
      </div>
    );
  }

  private handleCountryChange = (event: any) => this.handleInputChange(event, 'selectedCountries')

  private handleDeviceChange = (event: any) => this.handleInputChange(event, 'selectedDevices')

  private handleInputChange = (event: any, name: string) => {
    const selected = event.target.checked;
    const value = event.target.name;

    let newSelectedValues = [...this.state[name]];
    if (selected) {
      if (value === 'ALL') {
        newSelectedValues =
          name === 'selectedCountries' ?
            [...this.props.testerCountries] :
            [...this.props.deviceOptions];
      } else {
        newSelectedValues.push(value)
      }
    } else {
      if (value !== 'ALL') {
        newSelectedValues = newSelectedValues.filter(item => item !== value && item !== 'ALL');
      } else {
        newSelectedValues = [];
      }
    }

    this.setState({
      [name]: newSelectedValues
    });
  }

  private submit = () => {
    this.props.search({
      countries: [...this.state.selectedCountries],
      devices: [...this.state.selectedDevices]
    })
  }

  private isSubmitDisabled = () => {
    const { selectedCountries, selectedDevices } = this.state;
    return !(selectedCountries.length && selectedDevices.length)
  }
}
