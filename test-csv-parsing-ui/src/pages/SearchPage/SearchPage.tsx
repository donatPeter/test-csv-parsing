import * as React from 'react';
import {
  Field,
  Form,
  Formik,
  FormikErrors,
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
            countries: testerCountries,
            devices: deviceOptions,
          }}
          onSubmit={this.submit}
        >
          <Form>
            <FormGroup>
              <h2> Countries: </h2>
              {testerCountries.map(country =>
                <div key={country}>
                  <input type="checkbox" id={country} name={country} value={country} onClick={this.handleCountryChange} />
                  <label htmlFor={country}>{country}</label>
                </div>)}
            </FormGroup>
            <FormGroup>
              <h2> Devices: </h2>
              {deviceOptions.map(device =>
                <div key={device}>
                  <input type="checkbox" id={device} name={device} value={device} onClick={this.handleDeviceChange} />
                  <label htmlFor={device}>{device}</label>
                </div>)}
            </FormGroup>
            <button type="submit" disabled={false}>
              Submit
            </button>
          </Form>
        </Formik>
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
      newSelectedValues.push(value)
    } else {
      newSelectedValues = newSelectedValues.filter(item => item !== value);
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
}
