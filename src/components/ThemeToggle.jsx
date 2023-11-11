import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import Wrapper from '../wrappers/ThemeToggle';
import {useDashBoardContext}  from '../pages/Dashboard';

const ThemeToggle = () => {

  const { isDarkTheme,toggleDarkTheme} = useDashBoardContext();

  return (
    <Wrapper className='toggle-icon'>
      <button className='theme-toggle-btn' onClick={toggleDarkTheme}>
        {isDarkTheme ? <BsFillSunFill /> : <BsFillMoonFill />}
      </button>
      
    </Wrapper>
  );
};
export default ThemeToggle;