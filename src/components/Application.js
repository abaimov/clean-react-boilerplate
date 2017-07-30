import './Application.scss';
import TestImage from './test-image.png';

const Application = () => (
  <div className="Application">
    <h1 className="Application__title">Application loaded</h1>
    <img src={TestImage} alt="Test" />
  </div>
);

export default Application;
