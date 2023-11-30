import { useReducer } from 'react';
import './App.css';
import Button from './components/button';
import ClockIcon from './components/clock-icon';
import { Close } from './components/close';
import Dropdown from './components/dropdown';
import FileUploadBox from './components/file-upload-box';
import FileUploadStatus from './components/file-upload-status';
import RadioField from './components/radio-field';
import SectionWrapper from './components/section-wrapper';
import ToggleButton from './components/toggle-button';

const HorizontalSeparator = () => (
  <div className="border-t border-gray-300 my-3 w-60" />
);

const VerticalSeparator = () => (
  <div className=" border-l-2 border-gray-300 mx-2 h-5" />
);

const initialState = {
  splitSchedule: 'yes',
  client: 'multiple',
  toggle: true,
  dragOver: false,
  file: null,
  current: 0,
};

const reducer = (state: any, action: any) => {
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
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

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
    // simulating the file upload progress
    for (let i = 0; i <= 100; i++) {
      setTimeout(() => {
        dispatch({ type: 'current', payload: i });
      }, 10 * i);
    }
    dispatch({ type: 'file', payload: file });
  };

  return (
    <div className="text-xs">
      <div className="flex justify-center items-center bg-gray-300 w-screen h-screen">
        <div className="flex flex-col items-center p-8 bg-white rounded-2xl">
          <div className="flex flex-start w-full">
            <Close onClick={() => console.log('click')} />
          </div>
          <div className="text-2xl font-bold border-b-2 pb-4">
            Document Upload
          </div>
          {/* Main section */}
          <div className="grid grid-cols-11 gap-10 py-8 mx-8">
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
                label={<span className="font-bold">Select Import Name:</span>}
                handleClick={(v) => console.log('click', v)}
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
                  <div className="flex flex-row gap-1 items-center">
                    <ToggleButton
                      toggle={state.toggle}
                      handleToggle={handleToggle}
                    />
                    <div className="text-xs">
                      Toggle {state.toggle ? 'ON' : 'OFF'}
                    </div>
                  </div>
                  <VerticalSeparator />
                  <div className="flex flex-row gap-1 items-center">
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
                      className="flex flex-row items-center pt-3 gap-10"
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
                          label="Select Client"
                          classes="ml-2"
                          handleClick={(v) => console.log('click', v)}
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
