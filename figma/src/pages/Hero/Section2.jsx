import React from 'react';
import workoutImg from '../../assets/workout.png';
import testLabImg from '../../assets/testlab.png';

const WorkoutTestSection = () => {
  return (
    <div className="bg-white px-[1rem] py-[2rem] sm:py-[1.5rem] sm:px-[1rem] max-sm:py-[1rem] max-sm:px-[0.5rem] flex flex-wrap gap-[2rem] justify-center items-stretch font-['Noto_Sans']">
      
      <div className="flex-[1_1_300px] max-w-[500px] flex flex-col items-center text-center w-full sm:max-w-full">
        <div className="relative w-full h-full overflow-hidden rounded-[10px] shadow-[0_0_5px_rgba(0,0,0,0.1)]">
          <img
            src={workoutImg}
            alt="Workout"
            className="w-full h-full object-cover block rounded-[10px]"
          />
          <div className="absolute bottom-[0.1rem] left-[10px] right-[10px] max-sm:bottom-[8px] max-sm:left-[8px] max-sm:right-[8px] max-sm:p-[0.3rem] text-white text-left">
            <p className="text-[0.5rem] sm:text-[0.75rem] max-sm:text-[0.7rem] font-normal m-0 p-0">
              Te DAJLIEN collection is here!
            </p>
            <p className="text-[2rem] sm:text-[1.4rem] max-sm:text-[1.2rem] font-bold m-0">
              Design your home workout
            </p>
          </div>
        </div>
      </div>

      <div className="flex-[1_1_300px] max-w-[500px] flex flex-col items-center text-center w-full sm:max-w-full">
        <div className="relative w-full h-full overflow-hidden rounded-[10px] shadow-[0_0_5px_rgba(0,0,0,0.1)]">
          <img
            src={testLabImg}
            alt="Test Lab"
            className="w-full h-full object-cover block rounded-[10px]"
          />
          <div className="absolute bottom-[0.1rem] left-[10px] right-[10px] max-sm:bottom-[8px] max-sm:left-[8px] max-sm:right-[8px] max-sm:p-[0.3rem] text-white text-left ">
            <p className="text-[0.5rem] sm:text-[0.75rem] max-sm:text-[0.7rem] font-normal m-0 p-0">
              LOCKEBO worktops in recycled glass
            </p>
            <p className="text-[2rem] sm:text-[1.4rem] max-sm:text-[1.2rem] font-bold m-0">
              In the test lab
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutTestSection;
