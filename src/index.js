import ReactDOM from 'react-dom/client';
import awsmobile from './aws-exports';
import Amplify from 'aws-amplify';

import App from "./App";

Amplify.configure(awsmobile);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <App />
)