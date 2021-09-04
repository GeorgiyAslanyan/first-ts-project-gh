import React from 'react';
import logo from './logo.svg';
import './App.css';

let boolean: 'true' | 'false';
boolean = 'false'

type AddressType = {
    city?: string | null
    country: string | null
}

let initialState = {
    name: null as string | null,
    age: null as number | null,
    addresses: [] as Array<AddressType> | null
}

export type InitialStateType = typeof initialState

let state: InitialStateType = {
    addresses: [{country: 'Russia', city: 'Ekaterinburg'}],
    age: 10,
    name: 'Georgiy'
}

let GET_TASKS = "APP/GetTASKS"

type GetTasksActionType = {
  id: number,
  type: typeof GET_TASKS
}

let action: GetTasksActionType = {
  type: GET_TASKS,
  id: 12
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
