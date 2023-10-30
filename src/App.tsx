import { useState } from 'react';
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

// mock values for the file upload status
const current = 5;

const VerticalSeparator = () => (
  <div className="border-t border-gray-300 my-3 w-60" />
);

const HorizontalSeparator = () => (
  <div className=" border-l-2 border-gray-300 mx-2 h-5" />
);

function App() {
  const [splitSchedule, setSplitSchedule] = useState('yes');
  const [client, setClient] = useState('multiple');
  const [toggle, setToggle] = useState(true);

  const handleSplitScheduleCheck = () => {
    setSplitSchedule(splitSchedule === 'yes' ? 'no' : 'yes');
  };

  const handleClientCheckbox = () => {
    setClient(client === 'multiple' ? 'single' : 'multiple');
  };

  const handleToggle = () => {
    setToggle(!toggle);
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
                label={<span className="font-bold">Select Import Name:</span>}
              />
              <VerticalSeparator />
              <SectionWrapper>
                <div className="font-bold">
                  Select a manifest that you'd like to import
                </div>
                <div>
                  <FileUploadBox label="Upload Manifest" />
                  <FileUploadStatus current={current} />
                </div>
              </SectionWrapper>
              <VerticalSeparator />
              <SectionWrapper>
                <div className="font-bold">Elapse Data Checking:</div>
                <div className="text-green-700">No Elapsed Dates!</div>
              </SectionWrapper>
              <VerticalSeparator />
              <SectionWrapper>
                <div className="font-bold">Tolerance Window:</div>
                <div className="flex flex-row gap-1">
                  <div className="flex flex-row gap-1 items-center">
                    <ToggleButton toggle={toggle} handleToggle={handleToggle} />
                    <div className="text-xs">
                      Toggle {toggle ? 'ON' : 'OFF'}
                    </div>
                  </div>
                  <HorizontalSeparator />
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
                      checked={splitSchedule === 'yes'}
                      onChange={handleSplitScheduleCheck}
                    />
                    <RadioField
                      label="No"
                      checked={splitSchedule === 'no'}
                      onChange={handleSplitScheduleCheck}
                    />
                  </div>
                </SectionWrapper>
                <VerticalSeparator />
                <SectionWrapper>
                  <div className="font-bold">Location Checking:</div>
                  <div className="text-green-700">All Available!</div>
                </SectionWrapper>
                <VerticalSeparator />
                <SectionWrapper>
                  <div className="font-bold">Client:</div>
                  <div className="flex flex-row">
                    <RadioField
                      label="Single"
                      checked={client === 'single'}
                      onChange={handleClientCheckbox}
                    />
                    <RadioField
                      label="Multiple"
                      checked={client === 'multiple'}
                      onChange={handleClientCheckbox}
                    />
                  </div>
                  {[1, 2, 3, 4].map((num) => (
                    <div
                      key={`Testing-${num}`}
                      className="flex flex-row items-center pt-3 gap-10"
                    >
                      {`Testing Center ${num}`}
                      <div className="flex flex-row items-center gap-1">
                        <Dropdown label="Select Client" classes="ml-2" />
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
