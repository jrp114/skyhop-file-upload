import { useReducer } from 'react';
import './App.css';
import Button from './components/button';
import ClockIcon from './components/clock-icon';
import { Close } from './components/close';
import Dropdown, { DropdownOption } from './components/dropdown';
import FileUploadBox from './components/file-upload-box';
import FileUploadStatus from './components/file-upload-status';
import RadioField from './components/radio-field';
import SectionWrapper from './components/section-wrapper';
import ToggleButton from './components/toggle-button';

const HorizontalSeparator = () => (
  <div className="my-3 w-60 border-t border-gray-300 xs:mx-auto lg:mx-0" />
);

const VerticalSeparator = () => (
  <div className="mx-2 h-5 border-l-2 border-gray-300 " />
);

interface State {
  splitSchedule: 'yes' | 'no';
  client: 'single' | 'multiple';
  toggle: boolean;
  dragOver: boolean;
  file: File | null;
  current: number;
  import: DropdownOption | null;
  client1: DropdownOption | null;
  client2: DropdownOption | null;
  client3: DropdownOption | null;
  client4: DropdownOption | null;
}

const initialState: State = {
  splitSchedule: 'yes',
  client: 'multiple',
  toggle: true,
  dragOver: false,
  file: null,
  current: 0,
  import: null,
  client1: null,
  client2: null,
  client3: null,
  client4: null,
};

const reducer = (state: State, action: any) => {
  switch (action.type) {
    case 'splitSchedule':
      return { ...state, splitSchedule: action.payload };
    case 'client':
      return { ...state, client: action.payload };
    case 'toggle':
      return { ...state, toggle: action.payload };
    case 'dragOver':
      return { ...state, dragOver: action.payload };
    case 'file':
      return { ...state, file: action.payload };
    case 'current':
      return { ...state, current: action.payload };
    case 'import':
      return { ...state, import: action.payload };
    case 'client1':
      return { ...state, client1: action.payload };
    case 'client2':
      return { ...state, client2: action.payload };
    case 'client3':
      return { ...state, client3: action.payload };
    case 'client4':
      return { ...state, client4: action.payload };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fileProgressSimulator = (file: File) => {
    // simulating the file upload progress
    for (let i = 0; i <= 100; i++) {
      setTimeout(() => {
        dispatch({ type: 'current', payload: i });
      }, 10 * i);
    }
  };

  const handleSplitScheduleCheck = (value: 'yes' | 'no') => {
    dispatch({
      type: 'splitSchedule',
      payload: value,
    });
  };

  const handleClientCheckbox = (value: 'single' | 'multiple') => {
    dispatch({
      type: 'client',
      payload: value,
    });
  };

  const handleToggle = () => {
    dispatch({ type: 'toggle', payload: !state.toggle });
  };

  const handleDrop = (event: any) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    fileProgressSimulator(file);
    dispatch({ type: 'file', payload: file });
    dispatch({ type: 'dragOver', payload: false });
  };

  const handleDragLeave = (event: any) => {
    event.preventDefault();
    dispatch({ type: 'dragOver', payload: false });
  };

  const handleDragOver = (event: any) => {
    event.preventDefault();
    dispatch({ type: 'dragOver', payload: true });
  };

  const handleFileSelect = (event: any) => {
    const file = event.target.files[0];
    fileProgressSimulator(file);
    dispatch({ type: 'file', payload: file });
  };

  return (
    <div className="text-xs">
      <div className="flex w-screen items-center justify-center bg-gray-300 py-3 lg:h-screen">
        <div className="flex flex-col items-center rounded-2xl bg-white p-8">
          <div className="flex-start flex w-full">
            <Close onClick={() => console.log('click')} />
          </div>
          <div className="border-b-2 pb-4 text-2xl font-bold">
            Document Upload
          </div>
          {/* Main section */}
          <div className="mx-8 grid gap-10 py-8 xs:grid-cols-1 lg:grid-cols-11">
            <div className="col-span-6">
              <Dropdown
                options={[
                  {
                    key: '1',
                    value: '1',
                    label: 'Import 1',
                  },
                  {
                    key: '2',
                    value: '2',
                    label: 'Import 2',
                  },
                  {
                    key: '3',
                    value: '3',
                    label: 'Import 3',
                  },
                ]}
                label={
                  <span className="font-bold">
                    {state.import?.label || 'Select Import Name:'}
                  </span>
                }
                handleClick={(v) => {
                  dispatch({ type: 'import', payload: v });
                  console.log('click', v);
                }}
              />
              <HorizontalSeparator />
              <SectionWrapper>
                <div className="font-bold">
                  Select a manifest that you'd like to import
                </div>
                <div>
                  <FileUploadBox
                    label="Upload Manifest"
                    dragOver={state.dragOver}
                    handleFileSelect={handleFileSelect}
                    handleDrop={handleDrop}
                    handleDragOver={handleDragOver}
                    handleDragLeave={handleDragLeave}
                  />
                  <FileUploadStatus
                    current={state.current}
                    fileName={state.file?.name}
                    fileSize={state.file?.size}
                  />
                </div>
              </SectionWrapper>
              <HorizontalSeparator />
              <SectionWrapper>
                <div className="font-bold">Elapse Data Checking:</div>
                <div className="text-green-700">No Elapsed Dates!</div>
              </SectionWrapper>
              <HorizontalSeparator />
              <SectionWrapper>
                <div className="font-bold">Tolerance Window:</div>
                <div className="flex flex-row gap-1">
                  <div className="flex flex-row items-center gap-1">
                    <ToggleButton
                      toggle={state.toggle}
                      handleToggle={handleToggle}
                    />
                    <div className="text-xs">
                      Toggle {state.toggle ? 'ON' : 'OFF'}
                    </div>
                  </div>
                  <VerticalSeparator />
                  <div className="flex flex-row items-center gap-1">
                    <ClockIcon />
                    <div className="text-xs">Select Tolerance Level</div>
                  </div>
                </div>
              </SectionWrapper>
            </div>
            <div className="col-span-5">
              <div>
                <SectionWrapper>
                  <div className="font-bold">
                    Split schedule using social distancing?
                  </div>
                  <div className="flex flex-row">
                    <RadioField
                      label="Yes"
                      checked={state.splitSchedule === 'yes'}
                      onChange={() => handleSplitScheduleCheck('yes')}
                    />
                    <RadioField
                      label="No"
                      checked={state.splitSchedule === 'no'}
                      onChange={() => handleSplitScheduleCheck('no')}
                    />
                  </div>
                </SectionWrapper>
                <HorizontalSeparator />
                <SectionWrapper>
                  <div className="font-bold">Location Checking:</div>
                  <div className="text-green-700">All Available!</div>
                </SectionWrapper>
                <HorizontalSeparator />
                <SectionWrapper>
                  <div className="font-bold">Client:</div>
                  <div className="flex flex-row">
                    <RadioField
                      label="Single"
                      checked={state.client === 'single'}
                      onChange={() => handleClientCheckbox('single')}
                    />
                    <RadioField
                      label="Multiple"
                      checked={state.client === 'multiple'}
                      onChange={() => handleClientCheckbox('multiple')}
                    />
                  </div>
                  {[1, 2, 3, 4].map((num) => (
                    <div
                      key={`Testing-${num}`}
                      className="flex flex-row items-center gap-10 pt-3"
                    >
                      {`Testing Center ${num}`}
                      <div className="flex flex-row items-center gap-1">
                        <Dropdown
                          options={[
                            {
                              key: 'a',
                              value: 'a',
                              label: 'Client A',
                            },
                            {
                              key: 'b',
                              value: 'b',
                              label: 'Client B',
                            },
                            {
                              key: 'c',
                              value: 'c',
                              label: 'Client C',
                            },
                          ]}
                          label={
                            state[`client${num}` as keyof typeof state]
                              ?.label || 'Select Client'
                          }
                          classes="ml-2"
                          handleClick={(v) => {
                            dispatch({
                              type: `client${num}`,
                              payload: v,
                            });
                            console.log('click', v);
                          }}
                        />
                        <ClockIcon />
                      </div>
                    </div>
                  ))}
                </SectionWrapper>
              </div>
            </div>
          </div>
          <div className="text-sm font-bold">
            Data in the import file is correct. Please press Continue to import.
          </div>
          <div className="flex flex-row justify-center gap-4 pt-6">
            <Button
              label="Continue Import"
              onClick={() => console.log('click')}
            />
            <Button
              label="Cancel"
              onClick={() => console.log('click')}
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
