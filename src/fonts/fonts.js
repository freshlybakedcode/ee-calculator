import { createGlobalStyle } from 'styled-components';

import LCD from './LCD-Normal.woff';

export default createGlobalStyle`
    @font-face {
        font-family: 'LCD-Normal';
        src: local('LCD'),
        url(${LCD}) format('woff');
    }
`;
