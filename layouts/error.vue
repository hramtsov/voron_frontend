<template>
   <section class="text-center">
      <div class="svg-image">
         <svg
            v-if="error.statusCode == 404"
            class="animated"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
            version="1.1"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.com/svgjs"
         >
            <style>
  svg:not(.animated) .animable {
    opacity: 0;
  }
  .animated #background-simple--inject-3 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideRight;
    animation-delay: 0s;
  }
  .animated #404--inject-3 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) zoomOut;
    animation-delay: 0s;
  }
  .animated #Planets--inject-3 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) lightSpeedLeft;
    animation-delay: 0s;
  }
  .animated #Astronaut--inject-3 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideLeft;
    animation-delay: 0s;
  }
  .animated #Rocket--inject-3 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideUp;
    animation-delay: 0s;
  }
  @keyframes slideRight {
    0% {
      opacity: 0;
      transform: translateX(30px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes zoomOut {
    0% {
      opacity: 0;
      transform: scale(1.5);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  @keyframes lightSpeedLeft {
    from {
      transform: translate3d(-50%, 0, 0) skewX(20deg);
      opacity: 0;
    }
    60% {
      transform: skewX(-10deg);
      opacity: 1;
    }
    80% {
      transform: skewX(2deg);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes slideLeft {
    0% {
      opacity: 0;
      transform: translateX(-30px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes slideUp {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: inherit;
    }
  }
            </style>
            <g
               id="background-simple--inject-3"
               class="animable"
               style="transform-origin: 215.734px 222.807px;"
            >
               <path
                  d="M104.69,145.88c-15.32,40.81-2.09,95.9,21.58,139,61,111.9,209.44,48.63,206.88-2.19,3.48-48.48-40.12-62.88-54.91-90.06C195.42,39.21,117,111.47,104.69,145.88Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 215.734px 222.807px;"
                  id="eluux6lh85rpg"
                  class="animable"
               />
               <g id="elc74kmsbio4j">
                  <path
                     d="M104.69,145.88c-15.32,40.81-2.09,95.9,21.58,139,61,111.9,209.44,48.63,206.88-2.19,3.48-48.48-40.12-62.88-54.91-90.06C195.42,39.21,117,111.47,104.69,145.88Z"
                     style="fill: rgb(255, 255, 255); opacity: 0.9; transform-origin: 215.734px 222.807px;"
                     class="animable"
                  />
               </g>
            </g>
            <g id="404--inject-3" class="animable" style="transform-origin: 251.415px 249.955px;">
               <path
                  d="M147.68,287.64H86.83V260.17l60.85-72.34H176.8v73.9h15.09v25.91H176.8v22.48H147.68Zm0-25.91V223.89l-32.16,37.84Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 139.36px 248.975px;"
                  id="elq0szlgguwq9"
                  class="animable"
               />
               <path
                  d="M202.3,249.51q0-34.29,12.34-48t37.61-13.7q12.13,0,19.93,3a36.79,36.79,0,0,1,12.71,7.79,41.59,41.59,0,0,1,7.75,10.09,52.38,52.38,0,0,1,4.55,12.34,115.36,115.36,0,0,1,3.36,28q0,32.72-11.07,47.89t-38.13,15.18q-15.18,0-24.53-4.84a39.76,39.76,0,0,1-15.33-14.19q-4.35-6.64-6.77-18.17A124.33,124.33,0,0,1,202.3,249.51Zm33.14.08q0,23,4.05,31.37t11.77,8.41a12.34,12.34,0,0,0,8.82-3.57q3.74-3.57,5.5-11.28t1.76-24q0-23.94-4.06-32.19t-12.18-8.24q-8.28,0-12,8.41T235.44,249.59Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 251.423px 249.955px;"
                  id="eltwmh6ffzpt"
                  class="animable"
               />
               <path
                  d="M371.74,287.64H310.89V260.17l60.85-72.34h29.12v73.9H416v25.91H400.86v22.48H371.74Zm0-25.91V223.89l-32.15,37.84Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 363.445px 248.975px;"
                  id="el34v49v0gy2k"
                  class="animable"
               />
            </g>
            <g
               id="Planets--inject-3"
               class="animable"
               style="transform-origin: 247.91px 238.95px;"
            >
               <g id="elx9wi1m5xy6">
                  <g style="opacity: 0.3; transform-origin: 247.91px 238.95px;" class="animable">
                     <path
                        d="M201,145.62a1.87,1.87,0,1,1-1.86-1.87A1.86,1.86,0,0,1,201,145.62Z"
                        style="fill: rgb(255, 136, 0); transform-origin: 199.13px 145.62px;"
                        id="elgh0aq9g6u6v"
                        class="animable"
                     />
                     <circle
                        cx="72.97"
                        cy="216.13"
                        r="1.32"
                        style="fill: rgb(255, 136, 0); transform-origin: 72.97px 216.13px;"
                        id="el0pji99zhzqib"
                        class="animable"
                     />
                     <circle
                        cx="291.05"
                        cy="408.33"
                        r="1.89"
                        style="fill: rgb(255, 136, 0); transform-origin: 291.05px 408.33px;"
                        id="eln4un629bp2"
                        class="animable"
                     />
                     <circle
                        cx="336.5"
                        cy="332"
                        r="1.32"
                        style="fill: rgb(255, 136, 0); transform-origin: 336.5px 332px;"
                        id="el77qsznysdy"
                        class="animable"
                     />
                     <path
                        d="M424.17,95.62a1.32,1.32,0,1,1-1.32-1.32A1.32,1.32,0,0,1,424.17,95.62Z"
                        style="fill: rgb(255, 136, 0); transform-origin: 422.85px 95.62px;"
                        id="el952gkqylp2e"
                        class="animable"
                     />
                     <path
                        d="M172.75,69a1.32,1.32,0,1,1-1.32-1.32A1.33,1.33,0,0,1,172.75,69Z"
                        style="fill: rgb(255, 136, 0); transform-origin: 171.43px 69px;"
                        id="el7zgng7ovyk3"
                        class="animable"
                     />
                     <circle
                        cx="277.7"
                        cy="136.94"
                        r="1.32"
                        style="fill: rgb(255, 136, 0); transform-origin: 277.7px 136.94px;"
                        id="el8iwc9817e6"
                        class="animable"
                     />
                  </g>
               </g>
               <circle
                  cx="141.23"
                  cy="116.36"
                  r="21.91"
                  style="fill: rgb(255, 136, 0); transform-origin: 141.23px 116.36px;"
                  id="el1wm4i4nel38"
                  class="animable"
               />
               <g id="elrzhankw63w">
                  <circle
                     cx="141.23"
                     cy="116.36"
                     r="21.91"
                     style="fill: rgb(255, 255, 255); opacity: 0.7; transform-origin: 141.23px 116.36px;"
                     class="animable"
                  />
               </g>
               <g id="elxh91z8rhjt">
                  <path
                     d="M133.68,99.83A21.84,21.84,0,0,0,125,101.6a21.92,21.92,0,0,0,24.87,34.89h0a21.92,21.92,0,0,0-16.23-36.65Z"
                     style="fill: rgb(255, 136, 0); opacity: 0.2; transform-origin: 137.425px 119.051px;"
                     class="animable"
                  />
               </g>
               <g id="elclmak0o62l7">
                  <path
                     d="M131.5,105.62a2,2,0,1,1-2-2A2,2,0,0,1,131.5,105.62Z"
                     style="fill: rgb(255, 136, 0); opacity: 0.2; transform-origin: 129.5px 105.62px;"
                     class="animable"
                  />
               </g>
               <g id="elwxrvjwzv0b">
                  <path
                     d="M155.06,103.62a2,2,0,1,1-2-2A2,2,0,0,1,155.06,103.62Z"
                     style="fill: rgb(255, 136, 0); opacity: 0.2; transform-origin: 153.06px 103.62px;"
                     class="animable"
                  />
               </g>
               <g id="eljculumyhkt8">
                  <path
                     d="M151.06,117.9a3.28,3.28,0,1,1-3.28-3.28A3.28,3.28,0,0,1,151.06,117.9Z"
                     style="fill: rgb(255, 136, 0); opacity: 0.2; transform-origin: 147.78px 117.9px;"
                     class="animable"
                  />
               </g>
               <g id="elkgkrv5hzxqr">
                  <path
                     d="M140.64,127.25a4.38,4.38,0,1,1-4.38-4.38A4.38,4.38,0,0,1,140.64,127.25Z"
                     style="fill: rgb(255, 136, 0); opacity: 0.2; transform-origin: 136.26px 127.25px;"
                     class="animable"
                  />
               </g>
               <g id="el6mbwtgwku8a">
                  <circle
                     cx="382.2"
                     cy="376.25"
                     r="19.23"
                     style="fill: rgb(255, 136, 0); transform-origin: 382.2px 376.25px; transform: rotate(-76.72deg);"
                     class="animable"
                  />
               </g>
               <g id="elvkisrdag22j">
                  <circle
                     cx="382.2"
                     cy="376.25"
                     r="19.23"
                     style="fill: rgb(255, 255, 255); opacity: 0.3; transform-origin: 382.2px 376.25px; transform: rotate(-76.72deg);"
                     class="animable"
                  />
               </g>
               <g id="elmr6npnbc8h8">
                  <path
                     d="M394.33,361.34a19.22,19.22,0,0,0-17.67,33.32,19,19,0,0,0,5.53.82,19.23,19.23,0,0,0,12.14-34.14Z"
                     style="fill: rgb(255, 136, 0); opacity: 0.4; transform-origin: 385.486px 378px;"
                     class="animable"
                  />
               </g>
               <path
                  d="M363.83,382c-20.53,9.66-5.22,17.11,23.71,6.71,26.79-9.63,37-21.77,13-18C401.83,375.76,368.28,388.83,363.83,382Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 384.229px 381.874px;"
                  id="elhqgrb9kk8p"
                  class="animable"
               />
            </g>
            <g
               id="Astronaut--inject-3"
               class="animable"
               style="transform-origin: 315.482px 224.349px;"
            >
               <g id="elex6550yf9s">
                  <path
                     d="M394.1,187.83C367.21,206,332.4,230,322.79,287.64h-2.05c9.35-57,42.89-81.57,69.79-99.81Z"
                     style="opacity: 0.2; transform-origin: 357.42px 237.735px;"
                     class="animable"
                  />
               </g>
               <path
                  d="M255,368.27c-17,0-33.81-7.67-42-20.19-5.05-7.74-10.92-23.95,6.56-45.58l1.55,1.26c-12.36,15.3-14.64,30.65-6.43,43.23,10,15.3,33.59,23,53.73,17.52,20.63-5.61,33.15-23.55,34.36-49.22,4.13-87.81,50.78-114.86,84.84-134.61,21.17-12.27,36.46-21.13,33.1-39.84-.47-2.59-1.5-4.38-3.17-5.48-4.35-2.87-12.85-.88-22.69,1.41-19.31,4.5-45.75,10.66-61.5-16.13l1.73-1c15,25.53,39.57,19.8,59.32,15.2,10.29-2.39,19.17-4.46,24.24-1.13,2.15,1.41,3.47,3.64,4,6.8,3.61,20.08-13,29.72-34.05,41.92-33.67,19.52-79.77,46.25-83.85,133-1.26,26.6-14.32,45.21-35.84,51.06A52.88,52.88,0,0,1,255,368.27Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 315.482px 243.955px;"
                  id="el4p5gammvf8m"
                  class="animable"
               />
               <g id="ellpcrw3zwwu">
                  <path
                     d="M255,368.27c-17,0-33.81-7.67-42-20.19-5.05-7.74-10.92-23.95,6.56-45.58l1.55,1.26c-12.36,15.3-14.64,30.65-6.43,43.23,10,15.3,33.59,23,53.73,17.52,20.63-5.61,33.15-23.55,34.36-49.22,4.13-87.81,50.78-114.86,84.84-134.61,21.17-12.27,36.46-21.13,33.1-39.84-.47-2.59-1.5-4.38-3.17-5.48-4.35-2.87-12.85-.88-22.69,1.41-19.31,4.5-45.75,10.66-61.5-16.13l1.73-1c15,25.53,39.57,19.8,59.32,15.2,10.29-2.39,19.17-4.46,24.24-1.13,2.15,1.41,3.47,3.64,4,6.8,3.61,20.08-13,29.72-34.05,41.92-33.67,19.52-79.77,46.25-83.85,133-1.26,26.6-14.32,45.21-35.84,51.06A52.88,52.88,0,0,1,255,368.27Z"
                     style="fill: rgb(255, 255, 255); opacity: 0.2; transform-origin: 315.482px 243.955px;"
                     class="animable"
                  />
               </g>
               <path
                  d="M312.76,97a46.05,46.05,0,0,1,13.58,2.13s11,18.77,12.3,23.07c-.46,4.24-7.61,11.19-7.61,11.19Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 325.7px 115.195px;"
                  id="el1khxq0k5sco"
                  class="animable"
               />
               <g id="elos8r8r9pqme">
                  <path
                     d="M312.76,97a46.05,46.05,0,0,1,13.58,2.13s11,18.77,12.3,23.07c-.46,4.24-7.61,11.19-7.61,11.19Z"
                     style="fill: rgb(255, 255, 255); opacity: 0.3; transform-origin: 325.7px 115.195px;"
                     class="animable"
                  />
               </g>
               <path
                  d="M345.34,188.13a141.41,141.41,0,0,1-11.56-16.38q-1.26-2.17-2.39-4.42c-.43-.85-.84-1.7-1.24-2.56a10.76,10.76,0,0,1-1.21-2.69c-1.2-12.67,3.14-22-1-32.17l-16.48,6.44s1.4,18.12,4.6,29c2,6.73,6.48,12.55,10.81,17.94,1.35,1.68,2.65,3.41,4,5.1s2.71,3.06,4,4.65c1.95,2.41,2.59,4.72,1.12,7.56l-.25.45c-.42.74,1.54,1.58,2.78,0,2-2.58,1.72-2.42,3.46-4.62,1.06-1.33,2.27-2.78,3.32-4A3.37,3.37,0,0,0,345.34,188.13Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 328.778px 165.928px;"
                  id="el7wvyqbt86ek"
                  class="animable"
               />
               <g id="eltg736tlufr">
                  <path
                     d="M345.34,188.13a141.41,141.41,0,0,1-11.56-16.38q-1.26-2.17-2.39-4.42c-.43-.85-.84-1.7-1.24-2.56a10.76,10.76,0,0,1-1.21-2.69c-1.2-12.67,3.14-22-1-32.17l-16.48,6.44s1.4,18.12,4.6,29c2,6.73,6.48,12.55,10.81,17.94,1.35,1.68,2.65,3.41,4,5.1s2.71,3.06,4,4.65c1.95,2.41,2.59,4.72,1.12,7.56l-.25.45c-.42.74,1.54,1.58,2.78,0,2-2.58,1.72-2.42,3.46-4.62,1.06-1.33,2.27-2.78,3.32-4A3.37,3.37,0,0,0,345.34,188.13Z"
                     style="fill: rgb(255, 255, 255); opacity: 0.7; transform-origin: 328.778px 165.928px;"
                     class="animable"
                  />
               </g>
               <g id="elez0asb52ylw">
                  <path
                     d="M341.31,182.92a54.69,54.69,0,0,1-8.66,7.52c.43.48.85,1,1.28,1.46a43.92,43.92,0,0,0,8.5-7.51Z"
                     style="fill: rgb(255, 136, 0); opacity: 0.3; transform-origin: 337.54px 187.41px;"
                     class="animable"
                  />
               </g>
               <g id="elw1xstbuoey">
                  <path
                     d="M345.34,188.13l-.12-.14a5.18,5.18,0,0,0-1.27,3.17,5,5,0,0,0,.38,2.35l.95-1.13A3.37,3.37,0,0,0,345.34,188.13Z"
                     style="fill: rgb(255, 136, 0); opacity: 0.3; transform-origin: 344.999px 190.75px;"
                     class="animable"
                  />
               </g>
               <path
                  d="M308.84,109a35.38,35.38,0,0,1-6.37,7.19,23.27,23.27,0,0,1-4.42,3,19,19,0,0,1-2.58,1.09l-.68.22-.22.06-.47.13a5.93,5.93,0,0,1-.88.14,7.55,7.55,0,0,1-2.51-.23,12.24,12.24,0,0,1-2.94-1.27,25,25,0,0,1-2.15-1.41,40.31,40.31,0,0,1-3.58-3,53.16,53.16,0,0,1-6-6.74,2.51,2.51,0,0,1,3.35-3.62l.08,0c2.36,1.5,4.74,3.08,7.06,4.49,1.18.69,2.32,1.39,3.45,1.93a15.29,15.29,0,0,0,1.59.72,3.12,3.12,0,0,0,1.07.26c.06,0,0-.07-.37-.06a2.93,2.93,0,0,0-.35,0l-.22.05,0,0,.33-.17a13.53,13.53,0,0,0,1.29-.79,18.4,18.4,0,0,0,2.5-2.12,63.62,63.62,0,0,0,4.9-5.79l0,0a5,5,0,0,1,8,5.93Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 292.498px 111.132px;"
                  id="eld9cfx1zqsgb"
                  class="animable"
               />
               <g id="el5yvw0u6dhiw">
                  <path
                     d="M308.84,109a35.38,35.38,0,0,1-6.37,7.19,23.27,23.27,0,0,1-4.42,3,19,19,0,0,1-2.58,1.09l-.68.22-.22.06-.47.13a5.93,5.93,0,0,1-.88.14,7.55,7.55,0,0,1-2.51-.23,12.24,12.24,0,0,1-2.94-1.27,25,25,0,0,1-2.15-1.41,40.31,40.31,0,0,1-3.58-3,53.16,53.16,0,0,1-6-6.74,2.51,2.51,0,0,1,3.35-3.62l.08,0c2.36,1.5,4.74,3.08,7.06,4.49,1.18.69,2.32,1.39,3.45,1.93a15.29,15.29,0,0,0,1.59.72,3.12,3.12,0,0,0,1.07.26c.06,0,0-.07-.37-.06a2.93,2.93,0,0,0-.35,0l-.22.05,0,0,.33-.17a13.53,13.53,0,0,0,1.29-.79,18.4,18.4,0,0,0,2.5-2.12,63.62,63.62,0,0,0,4.9-5.79l0,0a5,5,0,0,1,8,5.93Z"
                     style="fill: rgb(255, 255, 255); opacity: 0.7; transform-origin: 292.498px 111.132px;"
                     class="animable"
                  />
               </g>
               <path
                  d="M272.29,102.42l1.17,2s.89,2.62,2.68,3.1l4.86-1.57-.25-.41h0c-.62-.94-.55-2.77-.34-4.29s-.57-1.57-1.15-1.19a3.82,3.82,0,0,0-.84,1.65,7.77,7.77,0,0,0-.79-.93l-1.48-1.48a1.72,1.72,0,0,0-2.34-.06l-1.2,1.07A1.71,1.71,0,0,0,272.29,102.42Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 276.531px 103.165px;"
                  id="eltbf9ve2ruj"
                  class="animable"
               />
               <g id="eld5afyaalbrf">
                  <path
                     d="M272.29,102.42l1.17,2s.89,2.62,2.68,3.1l4.86-1.57-.25-.41h0c-.62-.94-.55-2.77-.34-4.29s-.57-1.57-1.15-1.19a3.82,3.82,0,0,0-.84,1.65,7.77,7.77,0,0,0-.79-.93l-1.48-1.48a1.72,1.72,0,0,0-2.34-.06l-1.2,1.07A1.71,1.71,0,0,0,272.29,102.42Z"
                     style="fill: rgb(255, 255, 255); opacity: 0.7; transform-origin: 276.531px 103.165px;"
                     class="animable"
                  />
               </g>
               <path
                  d="M317.67,95.22a59.64,59.64,0,0,0-15.34,6.47,4.32,4.32,0,0,0-1.94,4.53c1.93,9.44,6.32,22.08,11.06,30.13l22.11-9.15c.15-3.9-5.22-16.52-10.69-28.72C321.89,96.29,320,94.66,317.67,95.22Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 316.932px 115.729px;"
                  id="elxblfrc2onpf"
                  class="animable"
               />
               <g id="el14fp8yz7awvr">
                  <path
                     d="M317.67,95.22a59.64,59.64,0,0,0-15.34,6.47,4.32,4.32,0,0,0-1.94,4.53c1.93,9.44,6.32,22.08,11.06,30.13l22.11-9.15c.15-3.9-5.22-16.52-10.69-28.72C321.89,96.29,320,94.66,317.67,95.22Z"
                     style="fill: rgb(255, 255, 255); opacity: 0.8; transform-origin: 316.932px 115.729px;"
                     class="animable"
                  />
               </g>
               <g id="elsf9kk98gr5">
                  <path
                     d="M326.3,106.21l-4.39-1.47c1,2.57,4.53,5.82,7,7.73C328.11,110.47,327.22,108.37,326.3,106.21Z"
                     style="fill: rgb(255, 136, 0); opacity: 0.3; transform-origin: 325.41px 108.605px;"
                     class="animable"
                  />
               </g>
               <path
                  d="M316.22,85.32c-1.83-3.48-5.78-5.23-10.52-4.84-4,.34-7.54,4.42-7.12,6.62S302.36,90.24,303,91l-2.77,2a3,3,0,0,0-.6,4.29c1.17,1.48,2.71,3,3.6,4.12,7.66-.2,13.33-3.12,15.38-5.93C317.84,91.92,318,88.78,316.22,85.32Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 308.578px 90.9182px;"
                  id="elr7ftvumak3"
                  class="animable"
               />
               <g id="elncd6q1yewd">
                  <path
                     d="M316.22,85.32c-1.83-3.48-5.78-5.23-10.52-4.84-4,.34-7.54,4.42-7.12,6.62S302.36,90.24,303,91l-2.77,2a3,3,0,0,0-.6,4.29c1.17,1.48,2.71,3,3.6,4.12,7.66-.2,13.33-3.12,15.38-5.93C317.84,91.92,318,88.78,316.22,85.32Z"
                     style="fill: rgb(255, 255, 255); opacity: 0.8; transform-origin: 308.578px 90.9182px;"
                     class="animable"
                  />
               </g>
               <path
                  d="M312.46,87.48a7.57,7.57,0,1,1-9.81-4.3A7.58,7.58,0,0,1,312.46,87.48Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 305.407px 90.2315px;"
                  id="elerzmfnif1rq"
                  class="animable"
               />
               <path
                  d="M377.39,177.6c-.11-3.29-.26-3-.35-5.77-.06-1.7-.07-3.59-.08-5.22a3.36,3.36,0,0,0-2.7-3.28c-1.32-.27-2.65-.52-4-.8-1.73-.37-3.44-.77-5.13-1.26-1.32-.38-2.62-.8-3.91-1.27s-2.74-1-4.08-1.62c-1.58-.67-3.14-1.39-4.68-2.14-1.73-.82-3.44-1.68-5.15-2.55-6.58-10.89-6.72-18.07-13.78-26.49l-15.16,6.86s11.14,19.76,18.72,28.14c4.37,4.82,11.22,7,17.33,8.58,4.41,1.13,8.88,2,13.35,2.83,1.74.32,3.63.44,5.13,1.48a5.74,5.74,0,0,1,2.14,3.45q.1.42.18.84C375.41,180.22,377.46,179.58,377.39,177.6Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 347.881px 153.47px;"
                  id="el6am810e193w"
                  class="animable"
               />
               <g id="elmqdltow1drg">
                  <path
                     d="M377.39,177.6c-.11-3.29-.26-3-.35-5.77-.06-1.7-.07-3.59-.08-5.22a3.36,3.36,0,0,0-2.7-3.28c-1.32-.27-2.65-.52-4-.8-1.73-.37-3.44-.77-5.13-1.26-1.32-.38-2.62-.8-3.91-1.27s-2.74-1-4.08-1.62c-1.58-.67-3.14-1.39-4.68-2.14-1.73-.82-3.44-1.68-5.15-2.55-6.58-10.89-6.72-18.07-13.78-26.49l-15.16,6.86s11.14,19.76,18.72,28.14c4.37,4.82,11.22,7,17.33,8.58,4.41,1.13,8.88,2,13.35,2.83,1.74.32,3.63.44,5.13,1.48a5.74,5.74,0,0,1,2.14,3.45q.1.42.18.84C375.41,180.22,377.46,179.58,377.39,177.6Z"
                     style="fill: rgb(255, 255, 255); opacity: 0.8; transform-origin: 347.881px 153.47px;"
                     class="animable"
                  />
               </g>
               <g id="elwng1ntcgt8a">
                  <path
                     d="M369.7,162.4c-.6-.13-1.2-.26-1.81-.41.05,3.46-1.57,9.42-2.16,11.23l1.9.36A38.11,38.11,0,0,0,369.7,162.4Z"
                     style="fill: rgb(255, 136, 0); opacity: 0.3; transform-origin: 367.715px 167.785px;"
                     class="animable"
                  />
               </g>
               <g id="el9kbninqk3ri">
                  <path
                     d="M377,166.61a3.36,3.36,0,0,0-2.69-3.28l-1-.19a4.58,4.58,0,0,0,1.63,2.9,5.09,5.09,0,0,0,2,1.14C377,167,377,166.8,377,166.61Z"
                     style="fill: rgb(255, 136, 0); opacity: 0.3; transform-origin: 375.155px 165.16px;"
                     class="animable"
                  />
               </g>
               <path
                  d="M311.05,87.54c.4,1.52-1.3,3.11-2.65,1.8a30.83,30.83,0,0,0-4.12-3.69c-1.39-.87.46-2.39,2.65-1.8A5.94,5.94,0,0,1,311.05,87.54Z"
                  style="fill: rgb(255, 255, 255); transform-origin: 307.454px 86.7717px;"
                  id="elf00jb61bcvf"
                  class="animable"
               />
               <path
                  d="M311.16,135.86c-.7.26.58,1.46.58,1.46s14-4.79,22.5-9.72a1.88,1.88,0,0,0-.68-1.58A216,216,0,0,1,311.16,135.86Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 322.598px 131.67px;"
                  id="elqrt0c2qbs6m"
                  class="animable"
               />
               <g id="el204slysy6no">
                  <path
                     d="M311.16,135.86c-.7.26.58,1.46.58,1.46s14-4.79,22.5-9.72a1.88,1.88,0,0,0-.68-1.58A216,216,0,0,1,311.16,135.86Z"
                     style="fill: rgb(255, 255, 255); opacity: 0.5; transform-origin: 322.598px 131.67px;"
                     class="animable"
                  />
               </g>
               <path
                  d="M321.46,94.56c2.76,1.4,5.35,2.87,8,4.5,1.29.82,2.57,1.65,3.84,2.55s2.53,1.82,3.8,2.86l.47.39.59.54a12.74,12.74,0,0,1,1,1c.32.35.59.69.85,1s.54.68.77,1a43.8,43.8,0,0,1,2.58,4,59.05,59.05,0,0,1,4,8.35,2.52,2.52,0,0,1-4.19,2.62l-.05-.06c-2-2.13-3.93-4.37-5.87-6.46s-3.91-4.21-5.54-5.14c-2.27-1.41-4.8-2.82-7.31-4.2l-7.56-4.2h0a5,5,0,0,1,4.68-8.84Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 330.851px 109.024px;"
                  id="elcrdi2cbjyj4"
                  class="animable"
               />
               <g id="elqhf7trq0hgj">
                  <path
                     d="M321.46,94.56c2.76,1.4,5.35,2.87,8,4.5,1.29.82,2.57,1.65,3.84,2.55s2.53,1.82,3.8,2.86l.47.39.59.54a12.74,12.74,0,0,1,1,1c.32.35.59.69.85,1s.54.68.77,1a43.8,43.8,0,0,1,2.58,4,59.05,59.05,0,0,1,4,8.35,2.52,2.52,0,0,1-4.19,2.62l-.05-.06c-2-2.13-3.93-4.37-5.87-6.46s-3.91-4.21-5.54-5.14c-2.27-1.41-4.8-2.82-7.31-4.2l-7.56-4.2h0a5,5,0,0,1,4.68-8.84Z"
                     style="fill: rgb(255, 255, 255); opacity: 0.8; transform-origin: 330.851px 109.024px;"
                     class="animable"
                  />
               </g>
               <path
                  d="M349.73,125.74l-.85-2.13s-.47-2.72-2.16-3.48l-5,.79.17.44h0c.46,1,.11,2.83-.34,4.29s.31,1.65.95,1.36c.36-.16.71-.81,1.09-1.5a8.46,8.46,0,0,0,.63,1l1.23,1.69a1.72,1.72,0,0,0,2.3.44l1.36-.87A1.7,1.7,0,0,0,349.73,125.74Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 345.632px 124.516px;"
                  id="elnwwnvf2j0ac"
                  class="animable"
               />
               <g id="elq3ctf5b8g1o">
                  <path
                     d="M349.73,125.74l-.85-2.13s-.47-2.72-2.16-3.48l-5,.79.17.44h0c.46,1,.11,2.83-.34,4.29s.31,1.65.95,1.36c.36-.16.71-.81,1.09-1.5a8.46,8.46,0,0,0,.63,1l1.23,1.69a1.72,1.72,0,0,0,2.3.44l1.36-.87A1.7,1.7,0,0,0,349.73,125.74Z"
                     style="fill: rgb(255, 255, 255); opacity: 0.8; transform-origin: 345.632px 124.516px;"
                     class="animable"
                  />
               </g>
               <g id="elesgfloz5eds">
                  <path
                     d="M317.24,106.06l-1.22.1-7.49,18.08a4,4,0,0,0,1.22-.1s9.76-3.64,12.71-5C320.48,115.05,317.24,106.06,317.24,106.06Z"
                     style="fill: rgb(255, 136, 0); opacity: 0.3; transform-origin: 315.495px 115.155px;"
                     class="animable"
                  />
               </g>
               <path
                  d="M303.57,110.8a43.41,43.41,0,0,0,5,13.44c3.66-1.26,9.76-3.64,12.72-5A135.36,135.36,0,0,1,316,106.16C312.87,106.37,306,109,303.57,110.8Z"
                  style="fill: rgb(255, 255, 255); transform-origin: 312.43px 115.2px;"
                  id="elmdtiyaai7ag"
                  class="animable"
               />
               <g id="el140vak9j0yf">
                  <path
                     d="M311,114.71a2.58,2.58,0,1,1-1.73-3.21A2.58,2.58,0,0,1,311,114.71Z"
                     style="fill: rgb(255, 136, 0); opacity: 0.3; transform-origin: 308.528px 113.971px;"
                     class="animable"
                  />
               </g>
               <g id="el3bvgj9gald6">
                  <path
                     d="M312.91,111.27a.85.85,0,1,1-.56-1A.84.84,0,0,1,312.91,111.27Z"
                     style="fill: rgb(255, 136, 0); opacity: 0.6; transform-origin: 312.083px 111.077px;"
                     class="animable"
                  />
               </g>
               <g id="elrllcq8rf5f">
                  <path
                     d="M315.15,110.4a.85.85,0,1,1-1.62-.49.84.84,0,0,1,1.05-.56A.85.85,0,0,1,315.15,110.4Z"
                     style="fill: rgb(255, 136, 0); opacity: 0.6; transform-origin: 314.325px 110.197px;"
                     class="animable"
                  />
               </g>
               <g id="elgindjnl7zm5">
                  <polygon
                     points="318.29 118.19 309.04 121.84 308.49 120.02 317.73 116.37 318.29 118.19"
                     style="fill: rgb(255, 136, 0); opacity: 0.5; transform-origin: 313.39px 119.105px;"
                     class="animable"
                  />
               </g>
            </g>
            <g
               id="Rocket--inject-3"
               class="animable"
               style="transform-origin: 191.359px 313.79px;"
            >
               <g id="elrzca5i0g1nl">
                  <path
                     d="M267.26,257.17a94,94,0,0,1-1.68,17.35q-1.77,7.71-5.5,11.28a12.3,12.3,0,0,1-8.81,3.57q-7.71,0-11.77-8.41a23.79,23.79,0,0,1-1.21-3.11,144.31,144.31,0,0,0-15.92,16l-5.31,6.26a38.62,38.62,0,0,0,9.77,7.19q9.34,4.83,24.52,4.84c1.78,0,3.5-.05,5.17-.15a143.39,143.39,0,0,0,15.1-29l14.85-38.72Z"
                     style="opacity: 0.2; transform-origin: 251.765px 278.205px;"
                     class="animable"
                  />
               </g>
               <path
                  d="M133.39,310l17.5,17.5,49-46.17C183,274.88,150.16,293.19,133.39,310Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 166.64px 303.752px;"
                  id="elgyjm0c0gsl"
                  class="animable"
               />
               <path
                  d="M194.42,371c-5.59-5.6-17.5-17.5-17.5-17.5l46.17-49C229.5,321.35,211.19,354.22,194.42,371Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 200.66px 337.75px;"
                  id="elkizifnbm5p"
                  class="animable"
               />
               <path
                  d="M261.4,260.7l19.09-36.81L243.68,243a144.22,144.22,0,0,0-32.44,23l-62.75,59.07,30.83,30.83,59.07-62.75A144.22,144.22,0,0,0,261.4,260.7Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 214.49px 289.895px;"
                  id="el0kjpvro04o1a"
                  class="animable"
               />
               <g id="elfkfaimhi4bj">
                  <path
                     d="M261.4,260.7l19.09-36.81L243.68,243a144.22,144.22,0,0,0-32.44,23l-62.75,59.07,30.83,30.83,59.07-62.75A144.22,144.22,0,0,0,261.4,260.7Z"
                     style="fill: rgb(255, 255, 255); opacity: 0.6; transform-origin: 214.49px 289.895px;"
                     class="animable"
                  />
               </g>
               <circle
                  cx="222.2"
                  cy="282.18"
                  r="12.9"
                  style="fill: rgb(255, 255, 255); transform-origin: 222.2px 282.18px;"
                  id="el33oaqhopn0j"
                  class="animable"
               />
               <circle
                  cx="222.2"
                  cy="282.18"
                  r="8.29"
                  style="fill: rgb(255, 136, 0); transform-origin: 222.2px 282.18px;"
                  id="elvp1ntierv6d"
                  class="animable"
               />
               <g id="elxe4elhh5a9h">
                  <polygon
                     points="189.75 344.82 159.56 314.63 184.28 291.37 213.01 320.11 189.75 344.82"
                     style="fill: rgb(255, 136, 0); opacity: 0.3; transform-origin: 186.285px 318.095px;"
                     class="animable"
                  />
               </g>
               <path
                  d="M140.22,337.62c-22.6,1.83-30.09,16.3-32.65,35.53-1.3,9.81-1.88,19.74-10.11,25.48a2.77,2.77,0,0,0,1.63,5.06c30.34-.95,44.49-15.8,46.27-22a43.06,43.06,0,0,1-2.49,9.47,2.76,2.76,0,0,0,4,3.39c8.51-5.33,19.19-15.15,19.9-31.08C160.51,354.6,140.22,337.62,140.22,337.62Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 131.509px 370.655px;"
                  id="elp45hz33r9yk"
                  class="animable"
               />
               <g id="eltjzlrur2d8n">
                  <path
                     d="M140.22,337.62c-22.6,1.83-30.09,16.3-32.65,35.53-1.3,9.81-1.88,19.74-10.11,25.48a2.77,2.77,0,0,0,1.63,5.06c30.34-.95,44.49-15.8,46.27-22a43.06,43.06,0,0,1-2.49,9.47,2.76,2.76,0,0,0,4,3.39c8.51-5.33,19.19-15.15,19.9-31.08C160.51,354.6,140.22,337.62,140.22,337.62Z"
                     style="fill: rgb(255, 255, 255); opacity: 0.2; transform-origin: 131.509px 370.655px;"
                     class="animable"
                  />
               </g>
               <polygon
                  points="170.28 370.3 134.08 334.1 153.36 329.93 174.45 351.02 170.28 370.3"
                  style="fill: rgb(255, 136, 0); transform-origin: 154.265px 350.115px;"
                  id="elzvb99u0re6h"
                  class="animable"
               />
            </g>
            <defs>
               <filter id="active" height="200%">
                  <feMorphology in="SourceAlpha" result="DILATED" operator="dilate" radius="2" />
                  <feFlood flood-color="#32DFEC" flood-opacity="1" result="PINK" />
                  <feComposite in="PINK" in2="DILATED" operator="in" result="OUTLINE" />
                  <feMerge>
                     <feMergeNode in="OUTLINE" />
                     <feMergeNode in="SourceGraphic" />
                  </feMerge>
               </filter>
               <filter id="hover" height="200%">
                  <feMorphology in="SourceAlpha" result="DILATED" operator="dilate" radius="2" />
                  <feFlood flood-color="#ff0000" flood-opacity="0.5" result="PINK" />
                  <feComposite in="PINK" in2="DILATED" operator="in" result="OUTLINE" />
                  <feMerge>
                     <feMergeNode in="OUTLINE" />
                     <feMergeNode in="SourceGraphic" />
                  </feMerge>
                  <feColorMatrix
                     type="matrix"
                     values="0   0   0   0   0                0   1   0   0   0                0   0   0   0   0                0   0   0   1   0 "
                  />
               </filter>
            </defs>
         </svg>
         <svg
            v-if="error.statusCode == 403"
            class="animated"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 750 500"
            version="1.1"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.com/svgjs"
         >
            <style>
  svg:not(.animated) .animable {
    opacity: 0;
  }
  .animated #freepik--background-complete--inject-16 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideDown;
    animation-delay: 0s;
  }
  .animated #freepik--Plant--inject-16 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideUp;
    animation-delay: 0s;
  }
  .animated #freepik--Fence--inject-16 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideRight;
    animation-delay: 0s;
  }
  .animated #freepik--Floor--inject-16 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) zoomIn;
    animation-delay: 0s;
  }
  .animated #freepik--Sign--inject-16 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideDown;
    animation-delay: 0s;
  }
  .animated #freepik--character-2--inject-16 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideUp;
    animation-delay: 0s;
  }
  .animated #freepik--character-1--inject-16 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) zoomIn;
    animation-delay: 0s;
  }
  .animated #freepik--error-403--inject-16 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideDown;
    animation-delay: 0s;
  }
  @keyframes slideDown {
    0% {
      opacity: 0;
      transform: translateY(-30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes slideUp {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: inherit;
    }
  }
  @keyframes slideRight {
    0% {
      opacity: 0;
      transform: translateX(30px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes zoomIn {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
            </style>
            <g
               id="freepik--background-complete--inject-16"
               class="animable"
               style="transform-origin: 374.9px 253.935px;"
            >
               <path
                  d="M706,242.24s0-.1,0-.28,0-.47,0-.8c0-.72,0-1.73,0-3,0-2.67-.05-6.52-.09-11.38l.16.16-57.55.1.26-.26h0v7.87q0,3.88,0,7.62l-.25-.26,41,.12,12.1.07,3.27,0,.85,0a1.71,1.71,0,0,1,.3,0h-.27l-.82,0-3.21,0-12,.08-41.21.11h-.25v-.25q0-3.74,0-7.62v-7.87h0l.26-.26,57.55.1h.16v.16c0,4.9-.07,8.78-.09,11.47,0,1.29,0,2.3,0,3,0,.32,0,.57,0,.77A1.15,1.15,0,0,1,706,242.24Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 677.275px 234.39px;"
                  id="elfp959yf7bm"
                  class="animable"
               />
               <rect
                  x="372.08"
                  y="35.17"
                  width="57.55"
                  height="15.5"
                  style="fill: rgb(235, 235, 235); transform-origin: 400.855px 42.92px;"
                  id="elx6vho7tufso"
                  class="animable"
               />
               <path
                  d="M453.71,66.57s0-.1,0-.28,0-.46,0-.79c0-.72,0-1.74,0-3,0-2.67-.05-6.52-.09-11.38l.16.16-57.55.1.26-.26h0V59q0,3.88,0,7.62l-.25-.25,41,.11,12.1.07,3.27,0h.85l.3,0a1.15,1.15,0,0,1-.27,0h-.82l-3.21,0-12,.07-41.21.11h-.26V51.08h0l.26-.26,57.55.1h.16v.16c0,4.9-.07,8.78-.09,11.47,0,1.3,0,2.3,0,3,0,.31,0,.57,0,.76A1.15,1.15,0,0,1,453.71,66.57Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 424.975px 58.775px;"
                  id="elgtsrwkhsae8"
                  class="animable"
               />
               <path
                  d="M141.09,306.13a1.73,1.73,0,0,1,0-.28c0-.2,0-.46,0-.79,0-.73,0-1.74,0-3.05,0-2.67-.05-6.52-.09-11.38l.16.16-57.55.1.26-.26h0v7.87q0,3.89,0,7.62l-.25-.26,41,.12,12.1.07,3.26,0h.86l.3,0h-.27l-.82,0-3.21,0-12,.08-41.21.11h-.26V290.64h0l.26-.26,57.55.1h.16v.16c0,4.9-.07,8.78-.09,11.47,0,1.3,0,2.3,0,3,0,.32,0,.57,0,.77S141.09,306.13,141.09,306.13Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 112.355px 298.31px;"
                  id="elx4kk3p2p78p"
                  class="animable"
               />
               <path
                  d="M147.5,321.63a2,2,0,0,1,0-.3c0-.22,0-.49,0-.82,0-.76,0-1.8-.05-3.11,0-2.72-.06-6.56-.11-11.27l.2.2-28.77.06c-.24.23.31-.32.25-.26h0v8c0,2.59,0,5.1,0,7.49l-.25-.25,20.62.12,6,.07,1.61,0,.57,0a3.2,3.2,0,0,1-.52,0l-1.56,0-5.91.06-20.79.12h-.24v-.24c0-2.39,0-4.9,0-7.49,0-1.3,0-2.62,0-3.95v-4.05h0c0,.05.5-.5.27-.26l28.77.06h.2v.2c0,4.76-.08,8.64-.11,11.39,0,1.29,0,2.32-.05,3.07,0,.31,0,.57,0,.78A1.1,1.1,0,0,1,147.5,321.63Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 133.17px 313.715px;"
                  id="ell3vmxzvsoi8"
                  class="animable"
               />
               <path
                  d="M684.82,78.68a1.58,1.58,0,0,1,0-.28c0-.2,0-.46,0-.79,0-.72,0-1.74,0-3,0-2.67,0-6.52-.09-11.38l.16.16-57.55.1c.11-.12-.27.26.25-.26h0V78.68l-.26-.25,41,.11,12.09.07,3.27,0h.86l.3,0-.27,0h-.82l-3.22,0-12,.07-41.21.11H627V71.06c0-1.29,0-2.6,0-3.91v-4h0c.52-.52.15-.14.27-.26l57.55.1H685v.16c0,4.9-.07,8.78-.09,11.47,0,1.3,0,2.3,0,3,0,.31,0,.57,0,.76A2.06,2.06,0,0,1,684.82,78.68Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 656px 70.8285px;"
                  id="elwkhxzt2dzra"
                  class="animable"
               />
               <path
                  d="M691.23,94.18a1.06,1.06,0,0,1,0-.29c0-.22,0-.5,0-.83,0-.76,0-1.8-.05-3.11,0-2.72-.07-6.56-.11-11.27l.2.2-28.78.06.26-.26h0v8c0,2.59,0,5.1,0,7.49l-.24-.24,20.62.11,6,.07,1.6,0,.58,0a3.2,3.2,0,0,1-.52,0l-1.56,0-5.92.07-20.78.11h-.24v-.25c0-2.39,0-4.9,0-7.49v-8h0l.26-.26,28.78.06h.2v.2c0,4.76-.07,8.64-.1,11.39,0,1.29,0,2.32-.05,3.07,0,.32,0,.58,0,.79S691.23,94.19,691.23,94.18Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 676.91px 86.29px;"
                  id="el1ns7ola46pz"
                  class="animable"
               />
               <rect
                  x="43.54"
                  y="150.32"
                  width="57.55"
                  height="15.5"
                  style="fill: rgb(235, 235, 235); transform-origin: 72.315px 158.07px;"
                  id="el4qxrfb6g2lw"
                  class="animable"
               />
               <path
                  d="M125.18,181.72a1.73,1.73,0,0,1,0-.28c0-.21,0-.47,0-.8,0-.72,0-1.74,0-3,0-2.67-.06-6.52-.09-11.37l.16.15-57.55.11c.11-.12-.27.26.25-.26h0v15.48l-.26-.26,41,.12,12.09.07,3.27,0,.86,0a1.11,1.11,0,0,1,.3,0h-.27l-.82,0-3.22,0-12,.07L67.62,182h-.25v-.25c0-2.49,0-5,0-7.62v-7.86h0l.27-.27,57.55.11h.16v.16c0,4.89-.07,8.78-.09,11.47,0,1.29,0,2.3,0,3,0,.32,0,.57,0,.77A2.28,2.28,0,0,1,125.18,181.72Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 96.36px 174px;"
                  id="elyxzg72ixp58"
                  class="animable"
               />
               <rect
                  x="484.01"
                  y="272.44"
                  width="57.55"
                  height="15.5"
                  style="fill: rgb(235, 235, 235); transform-origin: 512.785px 280.19px;"
                  id="elxhjo0w24yk"
                  class="animable"
               />
               <path
                  d="M565.64,303.84s0-.1,0-.28,0-.47,0-.8c0-.72,0-1.74,0-3,0-2.67-.05-6.53-.09-11.38l.16.16-57.55.1.26-.26h0v7.86c0,2.59,0,5.13,0,7.62l-.25-.26,41,.12,12.1.07,3.27,0,.85,0,.3,0h-.27l-.82,0-3.21,0-12,.08-41.21.11h-.26V288.36h0l.26-.26,57.55.1h.16v.16c0,4.9-.07,8.78-.09,11.47,0,1.29,0,2.3,0,3,0,.32,0,.57,0,.77A1.15,1.15,0,0,1,565.64,303.84Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 536.905px 296.04px;"
                  id="el5ztab3nxcwl"
                  class="animable"
               />
               <path
                  d="M281.11,362.47s0-.1,0-.28,0-.47,0-.8c0-.72,0-1.74,0-3.05,0-2.66-.05-6.52-.09-11.37l.16.15-57.55.11.26-.26h0v7.86c0,2.58,0,5.13,0,7.62l-.25-.26,41,.12,12.1.07,3.27,0,.85,0a1,1,0,0,1,.3,0h-.27l-.82,0-3.21,0-12,.07-41.21.12h-.26V347h0l.26-.26,57.55.1h.16V347c0,4.89-.07,8.78-.09,11.47,0,1.29,0,2.3,0,3,0,.32,0,.57,0,.77A1.15,1.15,0,0,1,281.11,362.47Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 252.375px 354.655px;"
                  id="elmowy6rf66oc"
                  class="animable"
               />
               <path
                  d="M234.57,89s0-.1,0-.28,0-.46,0-.79c0-.72,0-1.74,0-3,0-2.67-.05-6.52-.09-11.38l.16.16L177,73.8l.26-.26h0v7.87q0,3.89,0,7.62l-.25-.25,41,.11,12.1.08,3.27,0,.85,0h.3a1.15,1.15,0,0,1-.27,0l-.82,0-3.21,0-12,.07L177,89.3h-.26V73.55h0l.26-.26,57.55.1h.16v.16c0,4.9-.07,8.78-.09,11.48,0,1.29,0,2.3,0,3,0,.32,0,.57,0,.76A1,1,0,0,1,234.57,89Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 205.725px 81.295px;"
                  id="elmxpie695bvg"
                  class="animable"
               />
               <path
                  d="M611.1,464.82c-16-12.61-18.51-34.44-16.73-53.83.3-3.23.14-6.67,1.85-9.43s5.42-4.49,8.24-2.95c2.35,1.27,3.23,4.13,4.45,6.53a19,19,0,0,0,7.18,7.7c2,1.19,4.52,2,6.62,1,2.89-1.38,3.44-5.23,3.61-8.45l.93-18c.17-3.23.35-6.52,1.53-9.52s3.56-5.72,6.68-6.4,6.81,1.31,7.27,4.5a28.49,28.49,0,0,1-.14,4c0,1.35.55,2.86,1.8,3.31S647,382.86,648,382c3.52-3.06,6-7.12,8.37-11.17s4.65-8.2,7.88-11.58,7.56-6,12.2-5.94,9.39,3.14,10.29,7.74-2,9.08-5.11,12.59A72.25,72.25,0,0,1,665.83,387a5.92,5.92,0,0,0-2.66,2.55c-.83,2.11,1.09,4.36,3.17,5.19,2.36.94,5,.84,7.48,1.28s5.15,1.71,6,4.14c1.13,3.38-1.83,6.67-4.68,8.78a61.82,61.82,0,0,1-18.86,9.47c-2.42.73-5,1.35-7,2.91s-3.33,4.38-2.31,6.72,3.95,3.24,6.46,2.93,4.82-1.54,7.24-2.3c4.53-1.41,10.23-.78,12.85,3.22,1.72,2.63,1.68,6.14.56,9.09a23.59,23.59,0,0,1-5.35,7.68,62.09,62.09,0,0,1-27.56,17.08c-10.48,3-20.07,3.38-30.07-.95"
                  style="fill: rgb(245, 245, 245); transform-origin: 640.393px 410.663px;"
                  id="ell5k7401w9cd"
                  class="animable"
               />
               <path
                  d="M616.82,452.93a288.85,288.85,0,0,1,13.28-30.45l3.89-7.8c1.28-2.55,2.55-5.09,4-7.5a144.29,144.29,0,0,1,8.82-13.35c3-4.11,6-7.9,8.86-11.43s5.56-6.75,8.16-9.59A114.91,114.91,0,0,1,677,360.33c1.67-1.34,3-2.34,3.92-3l1-.75a1.9,1.9,0,0,1,.37-.24,2,2,0,0,1-.33.29l-1,.8c-.89.69-2.2,1.72-3.85,3.09a120.92,120.92,0,0,0-13.08,12.59c-2.58,2.85-5.27,6.08-8.09,9.61s-5.81,7.34-8.8,11.45a146.2,146.2,0,0,0-8.76,13.32c-1.38,2.39-2.64,4.91-3.93,7.47s-2.57,5.17-3.88,7.8a295.11,295.11,0,0,0-13.29,30.37"
                  style="fill: rgb(224, 224, 224); transform-origin: 649.555px 404.735px;"
                  id="elht3xzjjat3f"
                  class="animable"
               />
               <path
                  d="M638.11,407.17a6.4,6.4,0,0,1-.23-1.39c-.12-.9-.25-2.21-.38-3.83-.27-3.24-.49-7.72-.72-12.67s-.5-9.41-.82-12.63c-.16-1.62-.29-2.92-.4-3.82a6.74,6.74,0,0,1-.1-1.41,6.82,6.82,0,0,1,.33,1.37c.17.89.38,2.19.58,3.81.43,3.22.78,7.7,1,12.65s.39,9.3.54,12.67c.07,1.52.13,2.81.19,3.84A6.41,6.41,0,0,1,638.11,407.17Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 636.8px 389.295px;"
                  id="el89imuqvbd7f"
                  class="animable"
               />
               <path
                  d="M680,401.83a9.55,9.55,0,0,1-1.66.1c-1.07,0-2.62.07-4.53.18-3.82.19-9.09.64-14.88,1.39s-11,1.66-14.76,2.43c-1.88.37-3.39.71-4.44.94a8.94,8.94,0,0,1-1.64.3,8.81,8.81,0,0,1,1.59-.53c1-.3,2.53-.7,4.4-1.13,3.74-.87,9-1.85,14.77-2.61a146,146,0,0,1,14.94-1.21c1.92-.06,3.48,0,4.55,0A8.53,8.53,0,0,1,680,401.83Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 659.045px 404.417px;"
                  id="elwi8hp06yji"
                  class="animable"
               />
               <path
                  d="M617.38,452.2a2.17,2.17,0,0,1-.26-.52l-.62-1.55c-.53-1.34-1.26-3.3-2.12-5.73-1.72-4.87-3.89-11.66-6.19-19.19s-4.4-14.35-6-19.24c-.79-2.38-1.45-4.34-1.94-5.79-.2-.63-.37-1.15-.51-1.58a2,2,0,0,1-.15-.57,2.42,2.42,0,0,1,.26.53c.17.41.37.92.62,1.54.54,1.34,1.26,3.3,2.12,5.73,1.72,4.87,3.89,11.66,6.19,19.2s4.4,14.34,6,19.23c.8,2.38,1.45,4.34,1.94,5.79.2.63.38,1.16.52,1.58A2.18,2.18,0,0,1,617.38,452.2Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 608.485px 425.115px;"
                  id="eljtnatl1sqpj"
                  class="animable"
               />
               <path
                  d="M673.5,437.64a2.18,2.18,0,0,1-.56.19l-1.63.44-6,1.57c-5.07,1.33-12.06,3.24-19.78,5.37s-14.74,4-19.84,5.19c-2.55.62-4.62,1.09-6.06,1.39l-1.66.33a2.32,2.32,0,0,1-.58.08,2.09,2.09,0,0,1,.56-.2l1.63-.44,6-1.57c5.07-1.33,12.06-3.24,19.79-5.36s14.73-4,19.83-5.2c2.55-.61,4.62-1.09,6.06-1.38l1.66-.34A2,2,0,0,1,673.5,437.64Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 645.445px 444.92px;"
                  id="elcdx5gejobcb"
                  class="animable"
               />
               <path
                  d="M119.92,333.17s-8.06,2.78.15,20,14,25.8,14,25.8,1.44,4-1.9,4.51-10.62-.84-12.21,3.19,1.31,8.23,7.42,11.88,19.21,12.16,20.4,12.93,2.29,2.63.07,3.35-18.71,2-17.64,9.78S150,439.8,152,440.65s2.5,1.72,2.3,2.85-5.78,1-10.46,1.58-10,2-9,6.46,11.94,14,39,17.41l12.66.75,7.18-10.52c14-23.45,13.19-38,10.3-41.48s-7.32-.22-10.64,3.12-6.67,7.81-7.68,7.27-1.41-1.44-.83-3.56,6.27-21.41.79-27-16.63,6.58-18.57,7.88-2.7-.74-2.59-2.12,1.48-17,2.37-24-.5-11.9-4.81-13.17c-4.15-1.22-7.55,5.36-10,7.67s-4.73-1.28-4.73-1.28-3.2-9.83-11.72-26.91-15.83-12.28-15.83-12.28"
                  style="fill: rgb(235, 235, 235); transform-origin: 161.044px 401.199px;"
                  id="el8vs0m2namfu"
                  class="animable"
               />
               <path
                  d="M187.11,472.7c-6.21-12.57-16.87-35.09-26.13-54.37S143.33,381.6,137.19,369l-7.3-14.9-2-4.06c-.22-.45-.38-.81-.51-1.06s-.16-.37-.16-.37.08.12.2.35l.54,1c.48.94,1.17,2.29,2,4,1.77,3.49,4.3,8.57,7.41,14.85,6.21,12.57,14.64,30,23.9,49.28s19.88,41.82,26,54.41"
                  style="fill: rgb(224, 224, 224); transform-origin: 157.245px 410.655px;"
                  id="eltfz1qhrmixb"
                  class="animable"
               />
               <path
                  d="M130.06,389a5.53,5.53,0,0,1,.88.27c.55.2,1.35.51,2.33.89,2,.78,4.63,1.93,7.57,3.24l7.49,3.4,2.27,1a3.73,3.73,0,0,1,.82.41,3.79,3.79,0,0,1-.87-.26c-.56-.2-1.36-.51-2.33-.9-1.95-.8-4.62-2-7.55-3.3l-7.51-3.34-2.28-1A4,4,0,0,1,130.06,389Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 140.74px 393.605px;"
                  id="elcslit5wultb"
                  class="animable"
               />
               <path
                  d="M152.31,397.42c-.1,0,2-5.66,4.73-12.55s5-12.46,5.09-12.42-2,5.66-4.72,12.56S152.41,397.46,152.31,397.42Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 157.22px 384.935px;"
                  id="el04aszst0xdfk"
                  class="animable"
               />
               <path
                  d="M165.19,427.68a4.33,4.33,0,0,1,.53-.77l1.56-2c1.31-1.7,3.11-4.06,5-6.73s3.53-5.15,4.7-7l1.38-2.13a4.21,4.21,0,0,1,.55-.76,4.2,4.2,0,0,1-.42.84c-.29.52-.72,1.28-1.28,2.2-1.11,1.84-2.71,4.35-4.61,7s-3.74,5-5.11,6.68c-.69.82-1.25,1.49-1.66,1.93A5.31,5.31,0,0,1,165.19,427.68Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 172.05px 417.985px;"
                  id="el05bl90mpyabe"
                  class="animable"
               />
               <path
                  d="M143.38,424.48a3.6,3.6,0,0,1,.87,0l2.34.25c2,.23,4.69.57,7.7,1s5.72.78,7.69,1.08l2.32.37a3.09,3.09,0,0,1,.84.2,4.29,4.29,0,0,1-.86,0l-2.34-.25c-2-.23-4.7-.57-7.7-1s-5.72-.79-7.69-1.09l-2.32-.37A3.8,3.8,0,0,1,143.38,424.48Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 154.26px 425.928px;"
                  id="elklg6b9glhxa"
                  class="animable"
               />
               <path
                  d="M151.36,452.63a7.63,7.63,0,0,1,1.11.06l3,.31c2.53.28,6,.69,9.87,1.16s7.35.94,9.87,1.28l3,.44a5.45,5.45,0,0,1,1.09.21,6,6,0,0,1-1.1-.06l-3-.31c-2.54-.28-6-.69-9.88-1.16s-7.35-.93-9.87-1.28l-3-.44A5.68,5.68,0,0,1,151.36,452.63Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 165.33px 454.361px;"
                  id="elvvruf6ucia"
                  class="animable"
               />
               <path
                  d="M178.64,455.82a6.55,6.55,0,0,1,.65-1l1.88-2.63c1.59-2.21,3.77-5.28,6.08-8.74s4.32-6.64,5.77-8.95l1.7-2.74a6.38,6.38,0,0,1,.67-1,8.06,8.06,0,0,1-.53,1.06c-.37.67-.91,1.63-1.61,2.8-1.38,2.35-3.36,5.57-5.68,9s-4.53,6.51-6.17,8.69c-.83,1.08-1.51,2-2,2.55A8.91,8.91,0,0,1,178.64,455.82Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 187.015px 443.29px;"
                  id="el95l7lx1x0ya"
                  class="animable"
               />
            </g>
            <g
               id="freepik--Plant--inject-16"
               class="animable"
               style="transform-origin: 118.214px 413.105px;"
            >
               <path
                  d="M116.75,425.36c-4.72-5.57-5.34-14.51-4.65-21.77s2.38-14.58,1.23-21.78c-.68-4.27-2.33-8.35-2.89-12.64s.23-9.13,3.55-11.9c3.82-3.18,9.83-2.43,13.8.56s6.28,7.68,8,12.35c3.69,10.27,5.05,21.66,2,32.15s-10.15,19.86-20.6,23"
                  style="fill: rgb(255, 136, 0); transform-origin: 124.873px 390.285px;"
                  id="eljbb36ntetgh"
                  class="animable"
               />
               <path
                  d="M141.81,438c.77-2.69,2.43-5.29,5-6.39s5.77-.5,8.5.49,5.42,2.33,8.32,2.51,6.19-1.2,7.06-4c.81-2.61-.76-5.39-2.73-7.29a17.21,17.21,0,0,0-28.19,6.77"
                  style="fill: rgb(255, 136, 0); transform-origin: 155.339px 428.258px;"
                  id="ela8ji7i7bc05"
                  class="animable"
               />
               <g id="elpyxp47zkg3l">
                  <g style="opacity: 0.3; transform-origin: 155.339px 428.258px;" class="animable">
                     <path
                        d="M141.81,438c.77-2.69,2.43-5.29,5-6.39s5.77-.5,8.5.49,5.42,2.33,8.32,2.51,6.19-1.2,7.06-4c.81-2.61-.76-5.39-2.73-7.29a17.21,17.21,0,0,0-28.19,6.77"
                        id="ellnfwtc7lpp"
                        class="animable"
                        style="transform-origin: 155.339px 428.258px;"
                     />
                  </g>
               </g>
               <path
                  d="M118.8,449.67c-4.26-4-4-11.09-1.92-16.57s6.76-9.68,11.94-12.46a37.82,37.82,0,0,1,33-1.06A15.63,15.63,0,0,0,149.14,427c-2.34,3.88-2.86,8.59-4.79,12.68a19.93,19.93,0,0,1-25.55,10"
                  style="fill: rgb(255, 136, 0); transform-origin: 138.62px 433.723px;"
                  id="elx5jw0a4vrc7"
                  class="animable"
               />
               <path
                  d="M114.49,471a2.63,2.63,0,0,1,0-.64c0-.42,0-1,0-1.84,0-1.6.2-3.91.55-6.75a88,88,0,0,1,1.8-9.88,45.41,45.41,0,0,1,4.51-11.45,47.69,47.69,0,0,1,15.11-16.28c1.18-.81,2.33-1.42,3.31-2s1.89-1,2.61-1.3l1.7-.71a2.89,2.89,0,0,1,.61-.21,2.89,2.89,0,0,1-.57.31l-1.65.79c-.71.37-1.57.82-2.56,1.37s-2.08,1.22-3.24,2.05a48.88,48.88,0,0,0-14.87,16.22c-4.33,7.57-5.52,15.54-6.39,21.13-.4,2.82-.6,5.12-.72,6.71q-.08,1.13-.12,1.83A3,3,0,0,1,114.49,471Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 129.58px 445.47px;"
                  id="ellpityf3uuf9"
                  class="animable"
               />
               <path
                  d="M73.49,409.93c-8.72,5.27-8.7,10.06-7.24,14.59s6.81,7.66,11.26,6c2.51-1,4.32-3.14,5.88-5.33s3-4.54,5.19-6.12,5.33-2.17,7.51-.61"
                  style="fill: rgb(255, 136, 0); transform-origin: 80.8056px 420.45px;"
                  id="elhf8mv1t0rs9"
                  class="animable"
               />
               <g id="ele5a2bytmdhk">
                  <g style="opacity: 0.3; transform-origin: 80.8056px 420.45px;" class="animable">
                     <path
                        d="M73.49,409.93c-8.72,5.27-8.7,10.06-7.24,14.59s6.81,7.66,11.26,6c2.51-1,4.32-3.14,5.88-5.33s3-4.54,5.19-6.12,5.33-2.17,7.51-.61"
                        id="el661kt4c20r7"
                        class="animable"
                        style="transform-origin: 80.8056px 420.45px;"
                     />
                  </g>
               </g>
               <path
                  d="M67,415.71c2.28-3.16,7.92-4.07,11.48-2.5s6.17,4.7,8.5,7.81,4.61,6.41,7.84,8.57,7.75,3,11,.77a9.42,9.42,0,0,0,3.73-6.45,21.48,21.48,0,0,0-.52-7.61c-.77-3.66-2-7.48-4.95-9.81-3.27-2.59-7.8-2.71-12-2.58-4.78.16-9.63.52-14.12,2.18s-9.07,5.23-11,9.62"
                  style="fill: rgb(255, 136, 0); transform-origin: 88.3202px 417.776px;"
                  id="elj9qlm25h5d"
                  class="animable"
               />
               <path
                  d="M106.92,470.59a5,5,0,0,1-.06-.75c0-.55,0-1.27-.09-2.17-.06-1.94-.14-4.64-.25-8s-.25-7.37-.5-11.81-.58-9.31-1.25-14.39a47.16,47.16,0,0,0-1.45-7.3,37.21,37.21,0,0,0-2.66-6.39,34.62,34.62,0,0,0-7-9.34A27.29,27.29,0,0,0,87.11,406a20,20,0,0,0-2-.87,3.12,3.12,0,0,1-.69-.31,6.86,6.86,0,0,1,.73.21,18.3,18.3,0,0,1,2,.78,26.14,26.14,0,0,1,6.67,4.38,34.33,34.33,0,0,1,7.21,9.38,37.31,37.31,0,0,1,2.73,6.46,46,46,0,0,1,1.47,7.39c.68,5.1,1,10,1.22,14.44s.33,8.45.39,11.82.08,6.09.08,8c0,.9,0,1.62,0,2.17A3.13,3.13,0,0,1,106.92,470.59Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 95.681px 437.705px;"
                  id="el8cd7z3yr3tf"
                  class="animable"
               />
               <path
                  d="M110.81,470.59s0-.08-.09-.24l-.23-.73c-.2-.65-.43-1.61-.68-2.87a49.29,49.29,0,0,1-.68-10.8,65.26,65.26,0,0,1,2.62-15.84c1.75-5.79,4.24-12,6.44-18.55a81.29,81.29,0,0,0,4.07-19.11,129.44,129.44,0,0,0,.37-16c-.14-4.56-.37-8.25-.52-10.8-.07-1.24-.12-2.22-.16-2.93,0-.31,0-.57,0-.77a1,1,0,0,1,0-.26,1.11,1.11,0,0,1,0,.26c0,.2,0,.45.09.76.06.71.15,1.69.25,2.93.21,2.54.5,6.23.69,10.79a126.54,126.54,0,0,1-.26,16.05,80.56,80.56,0,0,1-4.06,19.23c-2.2,6.62-4.7,12.78-6.47,18.54A66.51,66.51,0,0,0,109.5,456a51.66,51.66,0,0,0,.51,10.75c.22,1.25.41,2.22.58,2.87.07.3.13.55.18.74A1.27,1.27,0,0,1,110.81,470.59Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 116.098px 421.14px;"
                  id="elxplo89yalbj"
                  class="animable"
               />
            </g>
            <g
               id="freepik--Fence--inject-16"
               class="animable"
               style="transform-origin: 526.065px 383.92px;"
            >
               <rect
                  x="439.81"
                  y="311.33"
                  width="8.67"
                  height="159.37"
                  style="fill: rgb(224, 224, 224); transform-origin: 444.145px 391.015px;"
                  id="el81v8oz1ytyi"
                  class="animable"
               />
               <path
                  d="M452.91,305.88a8.74,8.74,0,1,1-8.74-8.74A8.73,8.73,0,0,1,452.91,305.88Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 444.17px 305.88px;"
                  id="el7gsoaa22ydd"
                  class="animable"
               />
               <rect
                  x="612.09"
                  y="311.33"
                  width="8.67"
                  height="159.37"
                  style="fill: rgb(224, 224, 224); transform-origin: 616.425px 391.015px;"
                  id="elys3pfi174q"
                  class="animable"
               />
               <path
                  d="M625.18,305.88a8.74,8.74,0,1,1-8.73-8.74A8.73,8.73,0,0,1,625.18,305.88Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 616.44px 305.88px;"
                  id="ele29v5xxnhk5"
                  class="animable"
               />
               <rect
                  x="415.07"
                  y="326.71"
                  width="222.11"
                  height="39.74"
                  style="fill: rgb(255, 136, 0); transform-origin: 526.125px 346.58px;"
                  id="elkgl6ozg2j9o"
                  class="animable"
               />
               <polygon
                  points="440.2 326.71 439.81 327.37 416.99 366.45 415.06 366.45 415.06 326.71 440.2 326.71"
                  style="fill: rgb(245, 245, 245); transform-origin: 427.63px 346.58px;"
                  id="el2u6dbwy66ww"
                  class="animable"
               />
               <polygon
                  points="496.34 326.71 473.11 366.45 442.76 366.45 451.99 350.66 465.99 326.71 496.34 326.71"
                  style="fill: rgb(245, 245, 245); transform-origin: 469.55px 346.58px;"
                  id="el6m1nhp0opyb"
                  class="animable"
               />
               <polygon
                  points="552.45 326.71 529.23 366.45 498.88 366.45 522.1 326.71 552.45 326.71"
                  style="fill: rgb(245, 245, 245); transform-origin: 525.665px 346.58px;"
                  id="el4fofu361uqo"
                  class="animable"
               />
               <polygon
                  points="608.57 326.72 585.33 366.45 554.99 366.45 578.22 326.72 608.57 326.72"
                  style="fill: rgb(245, 245, 245); transform-origin: 581.78px 346.585px;"
                  id="ellghv3zukywp"
                  class="animable"
               />
               <polygon
                  points="637.17 326.72 637.17 366.45 611.11 366.45 634.34 326.72 637.17 326.72"
                  style="fill: rgb(245, 245, 245); transform-origin: 624.14px 346.585px;"
                  id="elfshus2sta8b"
                  class="animable"
               />
               <rect
                  x="415.07"
                  y="388.1"
                  width="222.11"
                  height="39.74"
                  style="fill: rgb(255, 136, 0); transform-origin: 526.125px 407.97px;"
                  id="elxgt1wkf532"
                  class="animable"
               />
               <polygon
                  points="440.2 388.1 439.81 388.76 416.99 427.84 415.06 427.84 415.06 388.1 440.2 388.1"
                  style="fill: rgb(245, 245, 245); transform-origin: 427.63px 407.97px;"
                  id="elc3j5dzj8xy7"
                  class="animable"
               />
               <polygon
                  points="496.34 388.1 473.11 427.84 442.76 427.84 451.99 412.06 465.99 388.1 496.34 388.1"
                  style="fill: rgb(245, 245, 245); transform-origin: 469.55px 407.97px;"
                  id="elyfatkz9tv69"
                  class="animable"
               />
               <polygon
                  points="552.45 388.1 529.23 427.84 498.88 427.84 522.1 388.1 552.45 388.1"
                  style="fill: rgb(245, 245, 245); transform-origin: 525.665px 407.97px;"
                  id="elmfguxcm0mh"
                  class="animable"
               />
               <polygon
                  points="608.57 388.11 585.33 427.84 554.99 427.84 578.22 388.11 608.57 388.11"
                  style="fill: rgb(245, 245, 245); transform-origin: 581.78px 407.975px;"
                  id="elzurc975t6s9"
                  class="animable"
               />
               <polygon
                  points="637.17 388.11 637.17 427.84 611.11 427.84 634.34 388.11 637.17 388.11"
                  style="fill: rgb(245, 245, 245); transform-origin: 624.14px 407.975px;"
                  id="elubdwupap85r"
                  class="animable"
               />
               <path
                  d="M637.17,366.45s0-.24,0-.69,0-1.12,0-2c0-1.77,0-4.36-.06-7.73,0-6.76-.07-16.67-.13-29.34l.23.23-222.09.21h0l.43-.44v39.74l-.43-.44,158.12.2,46.88.12,12.67.06,3.29,0,1.14,0s-.35,0-1.08,0l-3.24,0-12.57.05-46.79.13-158.42.19h-.44V326.27h.45l222.09.21h.23v.23c0,12.73-.1,22.68-.13,29.48q0,5,0,7.67c0,.84,0,1.49,0,1.95S637.17,366.45,637.17,366.45Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 526.065px 346.505px;"
                  id="el3jpf3xsq1kf"
                  class="animable"
               />
               <path
                  d="M637.17,427.84s0-.24,0-.68,0-1.13,0-2c0-1.77,0-4.35-.06-7.73,0-6.76-.07-16.66-.13-29.34l.23.23-222.09.21h0l.43-.44v39.74l-.43-.43,158.12.19,46.88.13,12.67,0,3.29,0,1.14,0s-.35,0-1.08,0l-3.24,0-12.57.06-46.79.12-158.42.2h-.44V387.66h.45l222.09.21h.23v.23c0,12.74-.1,22.68-.13,29.48q0,5,0,7.67c0,.84,0,1.49,0,1.95S637.17,427.84,637.17,427.84Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 526.065px 407.88px;"
                  id="el3jqzwjpwes7"
                  class="animable"
               />
            </g>
            <g
               id="freepik--Floor--inject-16"
               class="animable"
               style="transform-origin: 374px 470.7px;"
            >
               <path
                  d="M687.78,470.7c0,.14-140.5.26-313.76.26s-313.8-.12-313.8-.26,140.47-.26,313.8-.26S687.78,470.55,687.78,470.7Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 374px 470.7px;"
                  id="elkb9t8g7dai9"
                  class="animable"
               />
            </g>
            <g
               id="freepik--Sign--inject-16"
               class="animable"
               style="transform-origin: 153.81px 292.94px;"
            >
               <rect
                  x="149.26"
                  y="227.91"
                  width="9.1"
                  height="242.79"
                  style="fill: rgb(224, 224, 224); transform-origin: 153.81px 349.305px;"
                  id="el4n5kgs7x6i"
                  class="animable"
               />
               <path
                  d="M158.36,470.7s0-.44,0-1.26,0-2.07,0-3.67c0-3.23,0-8,0-14.09,0-12.23,0-29.93-.08-51.85,0-43.81-.07-104.47-.11-171.92l.26.26h-9.1l.26-.26c-.1,117-.18,215.29-.2,242.79l-.06-.07,6.87,0c1.5,0,2.23,0,2.23,0l-2.19,0-6.91,0h-.07v-.06c0-27.5-.1-125.8-.19-242.79v-.26h9.62v.26c0,67.53-.08,128.26-.11,172.11,0,21.9-.06,39.57-.08,51.79,0,6.09,0,10.81,0,14,0,1.59,0,2.8,0,3.63S158.36,470.7,158.36,470.7Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 153.88px 349.11px;"
                  id="elyzdqbx71sza"
                  class="animable"
               />
               <g id="el14vfic04uuf">
                  <circle
                     cx="153.81"
                     cy="185.08"
                     r="52.94"
                     style="fill: rgb(255, 136, 0); transform-origin: 153.81px 185.08px; transform: rotate(-24.01deg);"
                     class="animable"
                  />
               </g>
               <path
                  d="M201.46,183.09a3.87,3.87,0,0,1-.09-.77c0-.55-.09-1.3-.16-2.26,0-.5-.07-1.06-.1-1.67s-.2-1.27-.31-2a33.59,33.59,0,0,0-1-4.91,45,45,0,0,0-5.29-12.61,47.38,47.38,0,0,0-12.06-13.42,46.84,46.84,0,0,0-19.91-8.81,47.48,47.48,0,0,0-24.81,2.07,49.91,49.91,0,0,0-6.16,2.71c-1,.54-1.95,1.17-2.94,1.76a24.73,24.73,0,0,0-2.84,2,53.42,53.42,0,0,0-5.36,4.56,51.94,51.94,0,0,0-4.62,5.47,45.78,45.78,0,0,0-6.75,13,46.87,46.87,0,0,0,0,29.79,45.88,45.88,0,0,0,6.74,13,53.18,53.18,0,0,0,4.63,5.48,54.55,54.55,0,0,0,5.35,4.55,24.55,24.55,0,0,0,2.85,2c1,.58,1.95,1.21,2.94,1.75a47.44,47.44,0,0,0,62.94-17.44,45.29,45.29,0,0,0,5.29-12.61,33.86,33.86,0,0,0,1-4.91c.11-.72.24-1.38.31-2s.07-1.16.1-1.66c.07-1,.12-1.71.16-2.26a3.87,3.87,0,0,1,.09-.77,5,5,0,0,1,0,.77c0,.55,0,1.31-.06,2.27,0,.5,0,1.06-.07,1.67s-.17,1.28-.26,2a34.77,34.77,0,0,1-.93,4.95,44.94,44.94,0,0,1-5.2,12.79,47.86,47.86,0,0,1-32.27,22.71,48.14,48.14,0,0,1-25.24-2,49.5,49.5,0,0,1-6.27-2.75c-1-.55-2-1.19-3-1.78a23.84,23.84,0,0,1-2.91-2,44,44,0,0,1-10.18-10.2,46.52,46.52,0,0,1-6.89-13.25,47.61,47.61,0,0,1,0-30.36,46.83,46.83,0,0,1,6.88-13.24,55.07,55.07,0,0,1,4.72-5.57,54,54,0,0,1,5.47-4.63,24.44,24.44,0,0,1,2.9-2c1-.6,2-1.24,3-1.79a51.57,51.57,0,0,1,6.27-2.74,48,48,0,0,1,25.24-2,48,48,0,0,1,32.27,22.71,45.17,45.17,0,0,1,5.2,12.79,34.62,34.62,0,0,1,.93,5c.09.72.21,1.39.26,2s0,1.17.07,1.67c0,1,0,1.72.06,2.28A5,5,0,0,1,201.46,183.09Z"
                  style="fill: rgb(255, 255, 255); transform-origin: 153.585px 183.133px;"
                  id="els2wa3l8ii8m"
                  class="animable"
               />
               <rect
                  x="126.25"
                  y="177.12"
                  width="55.13"
                  height="11.5"
                  style="fill: rgb(250, 250, 250); transform-origin: 153.815px 182.87px;"
                  id="eljzodtnxvsj"
                  class="animable"
               />
            </g>
            <g
               id="freepik--character-2--inject-16"
               class="animable"
               style="transform-origin: 356.249px 274.106px;"
            >
               <path
                  d="M352.08,133.24c-1.29.09.4,2.87-.87,3.12-1.65.32-3.23-.9-4.21-2.26s-1.67-3-2.93-4.09c-1.65-1.46-4-1.82-6.06-2.54a17,17,0,0,1-9.64-23.83l7.31-14.89c-2.27-1.44-2.82-4.76-1.59-7.14a8.76,8.76,0,0,1,6.5-4.26,12.41,12.41,0,0,1,10.65,3.52c1.47,1.5,2.65,3.46,4.64,4.15,1.74.61,3.67.06,5.51.3a8.28,8.28,0,0,1,5.82,4.18,17.77,17.77,0,0,1,2.07,7c.27,2.25.44,4.72,2,6.36,0,0,2.42,2.19,2.42,4.7,0,5.75-5.51,4.67-5.75,6.78-.45,4.13,1.3,6.07-2.77,8.63,0,0,.74,1.84-2,5.06s-5.69,2.84-5.69,2.84Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 350.102px 106.811px;"
                  id="el0idjpvzqcvvr"
                  class="animable"
               />
               <path
                  d="M330.88,92.34a3.77,3.77,0,0,0-3.38,3.83h0l2.26,50.9c.09,6,8.91,9.38,15.37,9.23h0c6.53-.15,6.74-3.33,6.82-9.05.13-9.56.12-13.14.13-13.09s8.24-1.38,9.92-12.1c.84-5.33.55-14.07.08-21.21-.42-6.42-4.71-14.3-11.14-13.61Z"
                  style="fill: rgb(255, 190, 157); transform-origin: 345.017px 121.751px;"
                  id="elllll96ukvtq"
                  class="animable"
               />
               <path
                  d="M358.5,107a1.37,1.37,0,0,1-1.32,1.39,1.33,1.33,0,0,1-1.43-1.24,1.38,1.38,0,0,1,1.33-1.39A1.32,1.32,0,0,1,358.5,107Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 357.125px 107.075px;"
                  id="elra4jo5d67h"
                  class="animable"
               />
               <path
                  d="M360.19,105.78c-.17.18-1.22-.58-2.7-.58s-2.57.75-2.73.57.09-.4.56-.75a3.8,3.8,0,0,1,2.19-.67,3.65,3.65,0,0,1,2.15.68C360.12,105.38,360.27,105.7,360.19,105.78Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 357.461px 105.079px;"
                  id="elinflmld053g"
                  class="animable"
               />
               <path
                  d="M344.26,107.53a1.37,1.37,0,0,1-1.33,1.39,1.31,1.31,0,0,1-1.42-1.23,1.37,1.37,0,0,1,1.32-1.39A1.32,1.32,0,0,1,344.26,107.53Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 342.885px 107.61px;"
                  id="elzla187oheka"
                  class="animable"
               />
               <path
                  d="M345.47,106.16c-.17.18-1.22-.59-2.7-.58s-2.58.75-2.74.57.1-.41.57-.75a3.84,3.84,0,0,1,2.19-.68,3.68,3.68,0,0,1,2.15.69C345.39,105.76,345.55,106.08,345.47,106.16Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 342.736px 105.454px;"
                  id="el25i9sd5wh2m"
                  class="animable"
               />
               <path
                  d="M351,116.67a9.3,9.3,0,0,1,2.41-.44c.38,0,.74-.12.8-.38a1.94,1.94,0,0,0-.25-1.12c-.36-.91-.74-1.86-1.13-2.87-1.57-4.09-2.7-7.45-2.53-7.51s1.57,3.2,3.13,7.29c.38,1,.74,2,1.08,2.89a2.16,2.16,0,0,1,.2,1.48,1,1,0,0,1-.62.56,2.72,2.72,0,0,1-.64.09A10.3,10.3,0,0,1,351,116.67Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 352.522px 110.544px;"
                  id="elmyye1pb4fgb"
                  class="animable"
               />
               <path
                  d="M352.08,134.16a27.5,27.5,0,0,1-14.42-3.79s3.65,7.55,14.42,6.52Z"
                  style="fill: rgb(235, 153, 110); transform-origin: 344.87px 133.678px;"
                  id="el87tuxu0vl4"
                  class="animable"
               />
               <path
                  d="M350.39,120.23a2.65,2.65,0,0,0-2.4-1,2.45,2.45,0,0,0-1.68.9,1.55,1.55,0,0,0-.12,1.76,1.81,1.81,0,0,0,1.95.49,5.67,5.67,0,0,0,1.9-1.13,1.6,1.6,0,0,0,.42-.44.48.48,0,0,0,0-.55"
                  style="fill: rgb(235, 153, 110); transform-origin: 348.259px 120.848px;"
                  id="el9u91lap5oha"
                  class="animable"
               />
               <path
                  d="M345.86,103.5c-.23.35-1.63-.16-3.38-.35s-3.22-.05-3.36-.45c-.06-.19.26-.51.9-.76a6,6,0,0,1,5.14.61C345.73,102.94,346,103.32,345.86,103.5Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 342.505px 102.62px;"
                  id="el4euvvs91os8"
                  class="animable"
               />
               <path
                  d="M360.12,103c-.28.37-1.58.18-3.1.34s-2.78.55-3.12.24c-.15-.16,0-.52.54-.9a5.17,5.17,0,0,1,2.46-.84,5,5,0,0,1,2.55.38C360,102.47,360.24,102.79,360.12,103Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 356.998px 102.752px;"
                  id="ele57we04rjz"
                  class="animable"
               />
               <path
                  d="M336.78,86.44a7.42,7.42,0,0,0,2.63,5.65,7.51,7.51,0,0,0,6,1.59c1.64-.3,3.45-1.13,4.87-.26s1.56,3.17,2.88,4.32c1.9,1.64,4.91.1,7.32.81,1.86.55,3,2.32,4.26,3.81s3.08,2.9,4.94,2.35a21.61,21.61,0,0,0-.74-4.94,7.32,7.32,0,0,0-2.81-4c-.77-.5-1.67-.81-2.38-1.38-1.54-1.24-1.9-3.4-2.86-5.14a8.06,8.06,0,0,0-6.14-4.06c-2.11-.21-4.3.42-6.36-.1-1.52-.38-2.85-1.37-4.4-1.66-3-.57-5.8,1.58-8,3.72"
                  style="fill: rgb(38, 50, 56); transform-origin: 352.835px 94.0843px;"
                  id="elck6p005kblj"
                  class="animable"
               />
               <path
                  d="M331.12,109.66a1.19,1.19,0,0,0,.45,2.27c3.62.81,4.09-6.22,3.29-8.23a20.69,20.69,0,0,0,3.62-3.8,15,15,0,0,0,1.67-7.28c1.3.08,6.85-1.75,6.26-1.91-1.35-.39-4.11-1.26-4.83-2.42a8.28,8.28,0,0,0-7.17-4.11,6.81,6.81,0,0,0-6.13,5.36,9.8,9.8,0,0,0-8.41,5.39,11.24,11.24,0,0,0,.31,10.5,5.61,5.61,0,0,1,1.1,2.59c0,1.2-.87,2.14-1.5,3.13-1.7,2.69-1.57,6.38-.26,9.31s2.25,4,4.13,4.54c3.66,1.15-.59,8.68,5.51,8.68"
                  style="fill: rgb(38, 50, 56); transform-origin: 332.487px 108.93px;"
                  id="eluay3uog7cir"
                  class="animable"
               />
               <path
                  d="M331.27,112.6a3.14,3.14,0,0,0-4.59-2.66c-1.09.63-1.93,1.89-1.83,4.31.27,6.46,6.72,4.86,6.72,4.67S331.4,115.27,331.27,112.6Z"
                  style="fill: rgb(255, 190, 157); transform-origin: 328.206px 114.408px;"
                  id="el41xsmyffx7h"
                  class="animable"
               />
               <path
                  d="M329.49,116.56s-.11.08-.29.18a1.18,1.18,0,0,1-.85.05,2.78,2.78,0,0,1-1.39-2.44,3.73,3.73,0,0,1,.25-1.63,1.32,1.32,0,0,1,.81-.9.58.58,0,0,1,.68.29c.09.17.06.3.09.31s.14-.11.07-.38a.71.71,0,0,0-.27-.39.88.88,0,0,0-.63-.14,1.59,1.59,0,0,0-1.14,1,3.84,3.84,0,0,0-.31,1.82,2.93,2.93,0,0,0,1.76,2.72,1.2,1.2,0,0,0,1-.22C329.49,116.71,329.52,116.57,329.49,116.56Z"
                  style="fill: rgb(235, 153, 110); transform-origin: 328px 114.29px;"
                  id="el68wgixx5lm9"
                  class="animable"
               />
               <path
                  d="M337.49,89a3.86,3.86,0,0,0-1.3,1.08,5.92,5.92,0,0,0-.47,4.46l0,.17-.16,0a6.21,6.21,0,0,0-4.17,3.66,5,5,0,0,0-.34,1.57,10.45,10.45,0,0,0,.2,1.71,11.83,11.83,0,0,1,.25,1.84,3,3,0,0,1-.51,1.9,7.94,7.94,0,0,1-3.22,2.41,10.67,10.67,0,0,0-3,2,8,8,0,0,0-2.42,5.41,8.37,8.37,0,0,0,.85,4c.43.88.79,1.3.75,1.32s-.1-.09-.27-.29a6.3,6.3,0,0,1-.64-1,8.16,8.16,0,0,1,1.43-9.78,11.11,11.11,0,0,1,3.1-2.06,7.49,7.49,0,0,0,3-2.26c.72-1,.4-2.26.21-3.41a10.66,10.66,0,0,1-.2-1.79,5.45,5.45,0,0,1,.38-1.73,6.56,6.56,0,0,1,4.49-3.83l-.12.2a6,6,0,0,1,.65-4.65,2.72,2.72,0,0,1,1-.82A2.12,2.12,0,0,1,337.49,89Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 329.755px 104.766px;"
                  id="elts9ycrpd90m"
                  class="animable"
               />
               <path
                  d="M350.29,122.36a9.34,9.34,0,0,1-2.47-1.32c-1.31-.78-2.39-1.39-2.32-1.55s1.29.21,2.64,1S350.4,122.23,350.29,122.36Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 347.898px 120.907px;"
                  id="el1nrfch40b07"
                  class="animable"
               />
               <path
                  d="M368.74,110.61c-.06-.19.7-.44,1.55-1.35a4.09,4.09,0,0,0,1-1.9,3.79,3.79,0,0,0-.41-2.63,6.32,6.32,0,0,0-2.65-2.17,14.16,14.16,0,0,1-2-1.32,7,7,0,0,1-1.78-2.18c-.89-1.64-1.23-3.43-1.86-4.84a5.86,5.86,0,0,0-1.2-1.85,2.73,2.73,0,0,0-1.69-.81c-1.43-.2-3.33.51-5.56.1a7,7,0,0,1-2.85-1.37,16.53,16.53,0,0,1-1.94-1.85,13.21,13.21,0,0,0-3.15-2.82,6.83,6.83,0,0,0-3.36-.8,7.18,7.18,0,0,0-4.72,2.05c-.94.89-1.31,1.57-1.5,1.49s-.09-.9.73-2.14a7.07,7.07,0,0,1,1.91-1.93,7.54,7.54,0,0,1,3.43-1.3,8.37,8.37,0,0,1,4.47.69A14.14,14.14,0,0,1,351,86.77a7.36,7.36,0,0,0,3.56,2.39,8.21,8.21,0,0,0,2.3,0A13,13,0,0,1,360,89a5.3,5.3,0,0,1,3.22,1.55,8.2,8.2,0,0,1,1.71,2.68c.75,1.85,1,3.49,1.65,4.75a5,5,0,0,0,1.13,1.54,14.28,14.28,0,0,0,1.68,1.22,13.93,13.93,0,0,1,1.81,1.35,5.72,5.72,0,0,1,1.37,1.85,5.3,5.3,0,0,1,.15,3.86A4.63,4.63,0,0,1,371,110C369.66,110.89,368.75,110.76,368.74,110.61Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 354.776px 96.8235px;"
                  id="elm2ytohmr8q8"
                  class="animable"
               />
               <path
                  d="M328.42,130.92l-1.84,6.94s-9.22,13.26-10.65,15.51-4.71,10.61-5.12,14.69,14.34,62,14.34,61.42,42.4,12,42.4,12l8.65-7.81s1.46-18.89.64-20.53-.9-26.55-3.15-35.73-20.06-29.68-20.06-29.68L352,143.23l0,4.48Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 343.946px 186.2px;"
                  id="elpf8w9ozie4i"
                  class="animable"
               />
               <path
                  d="M324.11,158.59A19.43,19.43,0,0,0,326,178.35c6.68,9.16,16.29,22.18,17.05,22.18,1.18,0,24.92-21.9,24.92-21.9S354.8,158,348,153.39c-3.22-2.15-13.27-6.2-17.67-3.92C328.37,150.47,326.08,154.44,324.11,158.59Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 345.111px 174.662px;"
                  id="elyv60abgqgfb"
                  class="animable"
               />
               <path
                  d="M332.07,148.81c-.2,0,0-1.76.52-3.8a15.72,15.72,0,0,1,1.17-3.65,13.41,13.41,0,0,1-.66,3.77A31.45,31.45,0,0,1,332.07,148.81Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 332.877px 145.085px;"
                  id="el3fdkexr99nj"
                  class="animable"
               />
               <path
                  d="M352,147.71a4.35,4.35,0,0,1-.78-.44l-2.11-1.38.23-.11a15.22,15.22,0,0,0,.4,3.06,19.33,19.33,0,0,1,.54,3.95v.47l-.37-.31c-2-1.64-4.34-3.46-6.91-5.3-4.31-3.08-8.37-5.63-11.38-7.36-1.5-.88-2.74-1.55-3.59-2a8.66,8.66,0,0,1-1.31-.75,7.38,7.38,0,0,1,1.4.57c.88.42,2.15,1,3.68,1.87a115.29,115.29,0,0,1,11.51,7.27c2.57,1.85,4.92,3.69,6.9,5.37l-.38.16a19.88,19.88,0,0,0-.47-3.85,13.65,13.65,0,0,1-.3-3.15l0-.27.21.16,2,1.49A3.52,3.52,0,0,1,352,147.71Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 339.36px 145.4px;"
                  id="el6gmulmb0pzx"
                  class="animable"
               />
               <path
                  d="M347,197.19l0-.05Z"
                  style="fill: rgb(255, 190, 157); transform-origin: 347px 197.165px;"
                  id="elg0vshzrua9g"
                  class="animable"
               />
               <path
                  d="M347,197.14Z"
                  style="fill: rgb(255, 190, 157); transform-origin: 347px 197.14px;"
                  id="eljsmjffv4lac"
                  class="animable"
               />
               <path
                  d="M385.69,192.32c-2.79-1.75-7.49-.58-7.49-.58L366.53,180,347,197.19c2,2.4,15.93,13.87,20.95,15.47,5.54,1.75,11.71.73,13.76-2.2s5.29-7.31,5.29-7.31S388.48,194.08,385.69,192.32Z"
                  style="fill: rgb(255, 190, 157); transform-origin: 367.196px 196.759px;"
                  id="elzxv4a3f21b"
                  class="animable"
               />
               <path
                  d="M378.54,177.38l5.89,4.13s5.4.58,7.53,5.48,2.56,15.68-4.56,15.88l-16.11-11.74v-9Z"
                  style="fill: rgb(255, 190, 157); transform-origin: 382.31px 190.125px;"
                  id="elqu7kwbtcf2b"
                  class="animable"
               />
               <path
                  d="M390.33,186.11c-.05.07-.9-.67-2.47-1.5a15,15,0,0,0-13.32-.41c-1.62.72-2.51,1.41-2.56,1.33s.18-.22.58-.53a12.13,12.13,0,0,1,1.82-1.14,14.17,14.17,0,0,1,13.66.43,12,12,0,0,1,1.75,1.25C390.17,185.87,390.36,186.08,390.33,186.11Z"
                  style="fill: rgb(235, 153, 110); transform-origin: 381.153px 184.213px;"
                  id="elr2whcdjwoj"
                  class="animable"
               />
               <polygon
                  points="373.76 180.48 380.37 176.13 357.01 151.8 373.76 180.48"
                  style="fill: rgb(224, 224, 224); transform-origin: 368.69px 166.14px;"
                  id="eluvdhggon3z"
                  class="animable"
               />
               <path
                  d="M329.08,182.58s.1.09.27.3l.75.92,2.84,3.55L343.2,200.4l-.29,0c.89-.73,1.8-1.5,2.74-2.28s1.86-1.65,2.82-2.51c1.93-1.72,4-3.53,6.06-5.42l13.54-12.08-.05.33c-1.17-1.77-2.45-3.63-3.78-5.48-2.53-3.54-5.13-6.89-7.75-10.05-1.3-1.58-2.62-3.11-3.92-4.58a45,45,0,0,0-4-4.12,19.16,19.16,0,0,0-4.52-3,24.65,24.65,0,0,0-4.91-1.54,40.89,40.89,0,0,0-4.75-.79,7.07,7.07,0,0,0-4.2.9,11.07,11.07,0,0,0-3,2.63,22.57,22.57,0,0,0-2.05,3,25.56,25.56,0,0,0-2.31,5.29,26.43,26.43,0,0,0-.82,3.56c-.06.4-.1.71-.14,1a1.43,1.43,0,0,1-.06.32,19.77,19.77,0,0,1,.83-4.89,24.83,24.83,0,0,1,2.25-5.37,22.68,22.68,0,0,1,2-3,11.52,11.52,0,0,1,3.07-2.74,7.47,7.47,0,0,1,4.4-1,38.25,38.25,0,0,1,4.82.77,24.24,24.24,0,0,1,5,1.55,19.09,19.09,0,0,1,4.65,3,44.5,44.5,0,0,1,4.08,4.15c1.31,1.47,2.63,3,3.94,4.58,2.63,3.17,5.24,6.53,7.78,10.07,1.34,1.86,2.62,3.73,3.8,5.51l.12.18-.17.15-13.56,12.06-6.09,5.4c-1,.85-1.9,1.7-2.83,2.49l-2.76,2.27-.16.13-.13-.16-10.12-13.16L330,183.87l-.7-1A2.38,2.38,0,0,1,329.08,182.58Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 345.18px 174.722px;"
                  id="el36pbvjml2lu"
                  class="animable"
               />
               <path
                  d="M387,203.15c-.05,0,.13-.51.3-1.41a7.56,7.56,0,0,0,.09-1.66c0-.67.06-1.43.06-2.24a8.59,8.59,0,0,0-1.7-5.32,6.76,6.76,0,0,0-6.18-2.26,6.17,6.17,0,0,0-2.43.89l-.18.12-.15-.15c-3.1-3.17-5.82-6-7.75-8l-2.26-2.41a4.94,4.94,0,0,1-.77-.92,6.45,6.45,0,0,1,.9.79l2.37,2.3c2,2,4.77,4.74,7.88,7.9l-.32,0a6.52,6.52,0,0,1,2.63-1,7.19,7.19,0,0,1,6.64,2.48,8.82,8.82,0,0,1,1.69,5.62c0,.85-.13,1.58-.14,2.24a6.84,6.84,0,0,1-.51,2.73C387.08,203,387,203.15,387,203.15Z"
                  style="fill: rgb(235, 153, 110); transform-origin: 376.93px 191.47px;"
                  id="elsvzis0orxbo"
                  class="animable"
               />
               <path
                  d="M357,152.52a7.35,7.35,0,0,1,1,1.08c.59.71,1.43,1.75,2.45,3.06a86.16,86.16,0,0,1,7.33,10.69,33.06,33.06,0,0,1,2.88,6.56,15.5,15.5,0,0,1,.68,5.81c-.06,1.58-.11,2.9-.15,3.93a7.24,7.24,0,0,1-.13,1.43,8.11,8.11,0,0,1-.07-1.43c0-1,0-2.35,0-3.93a16,16,0,0,0-.78-5.67,34.5,34.5,0,0,0-2.87-6.44,105.13,105.13,0,0,0-7.17-10.73c-.94-1.27-1.72-2.33-2.32-3.16A7.71,7.71,0,0,1,357,152.52Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 364.191px 168.8px;"
                  id="el909bwf4kvt"
                  class="animable"
               />
               <path
                  d="M343,214c.15-.05,1.06,3,3.06,6.43s4.22,5.71,4.1,5.82a6.49,6.49,0,0,1-1.55-1.44,25.44,25.44,0,0,1-5.12-8.76A6.41,6.41,0,0,1,343,214Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 346.582px 220.125px;"
                  id="elic9t5fg2ie"
                  class="animable"
               />
               <path
                  d="M355.71,227.52a39.89,39.89,0,0,1-2.65-8.63,38.46,38.46,0,0,1,2.65,8.63Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 354.385px 223.205px;"
                  id="eluk1wlldpkf"
                  class="animable"
               />
               <path
                  d="M339.91,161.42c.16-.26,2.94,5.7,2.94,5.7s1.37,3.94-3.31,6.18a5,5,0,0,1-7.05-2.4l-2-4.39a4.51,4.51,0,0,0,3.61-4.34S338,164.41,339.91,161.42Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 336.763px 167.676px;"
                  id="el02jle2ae0a29"
                  class="animable"
               />
               <path
                  d="M370.2,438.93l-1.39,21s20.88,6.93,21,10.83L349,471l.83-32.78Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 369.405px 454.61px;"
                  id="ele54vkd5dw2"
                  class="animable"
               />
               <path
                  d="M349,471l.09-3.3,39.4,1.08A2.84,2.84,0,0,1,390,471Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 369.5px 469.35px;"
                  id="elif9mhwggpg"
                  class="animable"
               />
               <path
                  d="M374.9,272.31l1.81-34.25-53.13-1.95s-6.79,16-8.4,22.19-2.66,14.2-.59,22,17,33.91,17,33.91L345.9,458.36h32.46Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 345.9px 347.235px;"
                  id="eli4o1pclcdl"
                  class="animable"
               />
               <path
                  d="M374.6,244c.39,3.9,30.21,96.09,26.83,110.14s-27.54,80.05-27.54,80.05Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 387.793px 339.095px;"
                  id="elyxuyg26nz1"
                  class="animable"
               />
               <path
                  d="M375.43,250.13c.14,0,.55,38.6.92,86.21s.54,86.22.4,86.22-.56-38.6-.92-86.22S375.28,250.13,375.43,250.13Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 376.089px 336.345px;"
                  id="ella7iryk6gfg"
                  class="animable"
               />
               <path
                  d="M365.88,458.36c-.14,0-1.9-45.2-3.93-100.95s-3.55-101-3.41-101,1.9,45.19,3.93,101S366,458.36,365.88,458.36Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 362.209px 357.385px;"
                  id="el0wts9m04qy4k"
                  class="animable"
               />
               <path
                  d="M356.87,242.09a7.64,7.64,0,0,1-.13,1.4,25.31,25.31,0,0,1-.89,3.72,29.21,29.21,0,0,1-6.3,10.89c-3.33,3.66-7.27,6.16-10.48,6.89a9.17,9.17,0,0,1-3.84.15,8.11,8.11,0,0,1-1-.29c-.22-.09-.33-.14-.33-.16s.49.12,1.37.25a9.7,9.7,0,0,0,3.72-.31c3.08-.79,6.91-3.28,10.19-6.88a30.7,30.7,0,0,0,6.33-10.66C356.56,244.07,356.75,242.07,356.87,242.09Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 345.385px 253.683px;"
                  id="elcdaig8w5k8u"
                  class="animable"
               />
               <path
                  d="M390,346.44a24.57,24.57,0,0,0-13.87,2.08,6.12,6.12,0,0,1,1.81-1.09,17.66,17.66,0,0,1,4.89-1.48,18.19,18.19,0,0,1,5.11,0A6.16,6.16,0,0,1,390,346.44Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 383.065px 347.145px;"
                  id="elaekxjzurkwf"
                  class="animable"
               />
               <path
                  d="M340,326.4a16.69,16.69,0,0,1-1.5-2.5c-.88-1.56-2.1-3.72-3.51-6.07s-2.75-4.45-3.71-6a19.23,19.23,0,0,1-1.51-2.5,14.63,14.63,0,0,1,1.81,2.29c1.05,1.47,2.43,3.54,3.85,5.9s2.6,4.55,3.4,6.17A14.57,14.57,0,0,1,340,326.4Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 334.885px 317.865px;"
                  id="el78obvf452wf"
                  class="animable"
               />
               <path
                  d="M323.56,222.39c-.82-.27-1.31,15.16-1.31,15.16s26.82,5.23,54.42,1.16l.72-13.47S353.49,232.34,323.56,222.39Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 349.82px 231.323px;"
                  id="eltjk3d4usf5"
                  class="animable"
               />
               <path
                  d="M344.37,257.38h0a4.8,4.8,0,0,1-4.79-4.8v-20a4.8,4.8,0,0,1,4.79-4.8h0a4.8,4.8,0,0,1,4.8,4.8v20A4.8,4.8,0,0,1,344.37,257.38Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 344.375px 242.58px;"
                  id="elhr9h5j1me4a"
                  class="animable"
               />
               <path
                  d="M344.37,257.38a6.29,6.29,0,0,1,.71-.11,4.84,4.84,0,0,0,1.84-.75,4.62,4.62,0,0,0,1.86-2.46,5.48,5.48,0,0,0,.23-1.94c0-.72,0-1.47,0-2.26,0-3.19,0-7-.06-11.13,0-2.09,0-4.32,0-6.55a4.54,4.54,0,0,0-9,0c-.05,2.23,0,4.46,0,6.55,0,4.17,0,7.94-.06,11.13,0,.79,0,1.54,0,2.26a5.48,5.48,0,0,0,.23,1.94,4.62,4.62,0,0,0,1.86,2.46,4.84,4.84,0,0,0,1.84.75,5.34,5.34,0,0,1,.7.11,2.39,2.39,0,0,1-.71,0,4.41,4.41,0,0,1-1.94-.68,4.87,4.87,0,0,1-2-2.54,5.84,5.84,0,0,1-.28-2c0-.72,0-1.47,0-2.26,0-3.19,0-7-.05-11.13,0-2.11,0-4.27,0-6.6a5,5,0,0,1,10,0c.05,2.33,0,4.49,0,6.6,0,4.17,0,7.94-.06,11.13,0,.79,0,1.54,0,2.26a5.84,5.84,0,0,1-.28,2,4.87,4.87,0,0,1-2,2.54,4.41,4.41,0,0,1-1.94.68A2.47,2.47,0,0,1,344.37,257.38Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 344.551px 242.295px;"
                  id="elyox797ycqu"
                  class="animable"
               />
               <path
                  d="M344.36,236.3a1.35,1.35,0,0,0-1.14,1.12,1.2,1.2,0,0,0,.88,1.3,1.33,1.33,0,0,0,1.43-.95,1.24,1.24,0,0,0-1.17-1.47"
                  style="fill: rgb(69, 90, 100); transform-origin: 344.382px 237.514px;"
                  id="elv9mr8i29uq"
                  class="animable"
               />
               <path
                  d="M344.36,236.3s.11-.07.31,0a1.15,1.15,0,0,1,.77.41,1.5,1.5,0,0,1,.28,1.31,1.57,1.57,0,0,1-1.3,1,1.33,1.33,0,0,1-1.36-.94,1.35,1.35,0,0,1,.24-1.31c.53-.59,1.08-.49,1.06-.44s-.43.15-.76.66a1,1,0,0,0-.09.93.87.87,0,0,0,.85.58,1.17,1.17,0,0,0,.91-.64,1.21,1.21,0,0,0-.12-.94C344.83,236.41,344.33,236.39,344.36,236.3Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 344.376px 237.646px;"
                  id="el74s25ufrevf"
                  class="animable"
               />
               <path
                  d="M339.38,241.71a10.1,10.1,0,0,0,9.9.75"
                  style="fill: rgb(69, 90, 100); transform-origin: 344.33px 242.562px;"
                  id="elgozdldwwjea"
                  class="animable"
               />
               <path
                  d="M349.28,242.46c0,.06-.46.4-1.37.72a9.12,9.12,0,0,1-3.7.47,9.29,9.29,0,0,1-3.59-1c-.85-.45-1.28-.86-1.24-.91a16.18,16.18,0,0,0,4.87,1.42A15.84,15.84,0,0,0,349.28,242.46Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 344.329px 242.709px;"
                  id="elq10wvh49a1"
                  class="animable"
               />
               <path
                  d="M329.81,284.3h0a5,5,0,0,1-4.9-5.05l.87-55.75a5,5,0,0,1,5.05-4.89h0a5,5,0,0,1,4.9,5l-.87,55.74A5,5,0,0,1,329.81,284.3Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 330.32px 251.455px;"
                  id="elql1d7w1j678"
                  class="animable"
               />
               <path
                  d="M329.81,284.3a9.55,9.55,0,0,0,1.42-.24,5,5,0,0,0,3-2.58,5.72,5.72,0,0,0,.5-2.88c0-1.1,0-2.3,0-3.58,0-2.57.07-5.49.1-8.71.09-6.47.19-14.16.3-22.69.06-4.27.12-8.75.19-13.39,0-2.31.09-4.72.08-7.06a4.72,4.72,0,0,0-9.38-.15c-.09,2.34-.09,4.75-.14,7.06-.08,4.64-.15,9.12-.22,13.4-.15,8.53-.29,16.21-.41,22.68-.06,3.22-.12,6.14-.17,8.71,0,1.28-.06,2.48-.08,3.58a5.8,5.8,0,0,0,.41,2.89A5,5,0,0,0,328.4,284a9,9,0,0,0,1.41.28,4,4,0,0,1-1.44-.18,5,5,0,0,1-3.1-2.69,6.11,6.11,0,0,1-.47-3c0-1.1,0-2.29,0-3.57,0-2.57.06-5.49.09-8.72.09-6.46.19-14.15.3-22.68.06-4.27.12-8.75.19-13.4.05-2.33,0-4.66.14-7.11a5.24,5.24,0,0,1,10.41.16c0,2.45-.07,4.78-.09,7.11-.08,4.65-.15,9.13-.22,13.4-.16,8.53-.29,16.22-.41,22.68-.06,3.23-.12,6.15-.17,8.72,0,1.28-.06,2.47-.08,3.57a6,6,0,0,1-.56,3,5,5,0,0,1-3.18,2.59A3.91,3.91,0,0,1,329.81,284.3Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 330.351px 251.341px;"
                  id="elo2xgr35960q"
                  class="animable"
               />
               <path
                  d="M358.84,256.8h0A4.79,4.79,0,0,1,354,252v-20a4.8,4.8,0,0,1,4.8-4.8h0a4.8,4.8,0,0,1,4.79,4.8v20A4.79,4.79,0,0,1,358.84,256.8Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 358.795px 242px;"
                  id="el438mu00okm6"
                  class="animable"
               />
               <path
                  d="M358.84,256.8s.24,0,.7-.11a4.79,4.79,0,0,0,1.84-.74,4.65,4.65,0,0,0,1.86-2.47,5.45,5.45,0,0,0,.23-1.94c0-.71,0-1.47,0-2.26,0-3.19,0-7-.06-11.13,0-2.08,0-4.32,0-6.55a4.53,4.53,0,0,0-7.59-2.88,4.61,4.61,0,0,0-1.44,2.88c-.05,2.23,0,4.47,0,6.55,0,4.18,0,7.94-.06,11.13,0,.79,0,1.55,0,2.26a5.24,5.24,0,0,0,.22,1.94,4.7,4.7,0,0,0,1.86,2.47,4.77,4.77,0,0,0,1.85.74c.45.09.7.09.7.11a2.64,2.64,0,0,1-.72,0,4.69,4.69,0,0,1-1.94-.68,5,5,0,0,1-2-2.54,5.9,5.9,0,0,1-.28-2c0-.71,0-1.47,0-2.26,0-3.19,0-6.95-.06-11.13,0-2.11,0-4.27,0-6.6a5.07,5.07,0,0,1,5-4.56,5.05,5.05,0,0,1,5,4.56c.05,2.33,0,4.49,0,6.6,0,4.17,0,7.94-.05,11.13,0,.79,0,1.55,0,2.26a5.9,5.9,0,0,1-.28,2,5,5,0,0,1-2,2.54,4.69,4.69,0,0,1-1.94.68A2.55,2.55,0,0,1,358.84,256.8Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 358.961px 241.932px;"
                  id="el72szsvucivh"
                  class="animable"
               />
               <path
                  d="M358.82,234.76a1.37,1.37,0,0,0-1.14,1.13,1.2,1.2,0,0,0,.88,1.29,1.31,1.31,0,0,0,1.43-.94,1.25,1.25,0,0,0-1.17-1.48"
                  style="fill: rgb(69, 90, 100); transform-origin: 358.842px 235.976px;"
                  id="el5nfc8nly0ks"
                  class="animable"
               />
               <path
                  d="M358.82,234.76s.11-.06.31,0a1.17,1.17,0,0,1,.78.42,1.52,1.52,0,0,1,.27,1.31,1.56,1.56,0,0,1-1.3,1,1.36,1.36,0,0,1-1.11-2.24c.52-.59,1.07-.5,1.05-.45s-.43.16-.76.66a1,1,0,0,0-.09.93.89.89,0,0,0,.85.59,1,1,0,0,0,.79-1.58C359.29,234.88,358.79,234.86,358.82,234.76Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 358.837px 236.113px;"
                  id="el2zhvxybflu4"
                  class="animable"
               />
               <path
                  d="M358.84,246.59a1.36,1.36,0,0,0-1.14,1.12,1.21,1.21,0,0,0,.88,1.3,1.32,1.32,0,0,0,1.43-.95,1.23,1.23,0,0,0-1.17-1.47"
                  style="fill: rgb(69, 90, 100); transform-origin: 358.863px 247.805px;"
                  id="eluy2bfoa0rma"
                  class="animable"
               />
               <path
                  d="M358.84,246.59s.11-.07.32-.05a1.27,1.27,0,0,1,.77.42,1.52,1.52,0,0,1,.28,1.31,1.6,1.6,0,0,1-1.31,1,1.37,1.37,0,0,1-1.11-2.25c.53-.59,1.07-.5,1-.44s-.43.15-.75.66a1,1,0,0,0-.1.92.89.89,0,0,0,.86.59,1,1,0,0,0,.78-1.58C359.31,246.7,358.81,246.68,358.84,246.59Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 358.862px 247.904px;"
                  id="ellr9cdlunml"
                  class="animable"
               />
            </g>
            <g
               id="freepik--character-1--inject-16"
               class="animable"
               style="transform-origin: 246.298px 268.691px;"
            >
               <path
                  d="M215.55,433l-6.83,27.08L197.15,480a2.87,2.87,0,0,0,1.2,4h0a2.85,2.85,0,0,0,2.62,0l26.17-16.26,7.58-27.06Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 215.743px 458.659px;"
                  id="el8glbiytjkaw"
                  class="animable"
               />
               <path
                  d="M201,483.92l26.17-16.26,1.12-4-30.11,20.2A2.94,2.94,0,0,0,201,483.92Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 213.235px 473.955px;"
                  id="elo6eb3fchv6k"
                  class="animable"
               />
               <path
                  d="M287.22,439l-1.4,21.17s21.07,7,21.19,10.93l-41.16.3.83-33.08Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 286.43px 454.86px;"
                  id="eluyym8akpskp"
                  class="animable"
               />
               <path
                  d="M265.85,471.43l.08-3.34,39.76,1.1a2.84,2.84,0,0,1,1.53,2.24Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 286.535px 469.76px;"
                  id="elqployjt3ebp"
                  class="animable"
               />
               <path
                  d="M191.22,125.8c-.78-1.34-1-2.42-.64-4.78s2.4-19.13,2.66-20.48c.5-2.61,2.41-3.28,2.65-1.37s.33,9.47.81,9.58,1-12.11,2-13.48,1.89-1.38,2.36-.79a3.28,3.28,0,0,1,.59,1s.85-1.48,1.82-1.39c1.78.17,1.81,2.35,1.81,2.35l.14,5.18s.15-4.17,1.35-4.73c.67-.32,1.6-.11,2,1.15s0,6.34,0,6.69.15,13.57.15,13.57a16.82,16.82,0,0,0,2.39-4.07c.68-1.66,1.82-2.3,3.24-1.95s1.53,1.77,1.06,2.84-1.42,4.3-1.42,4.3l-2.47,4.84-8.52,7.63-3.07,7s-9.87-1-11.06-6.3Z"
                  style="fill: rgb(183, 136, 118); transform-origin: 202.465px 116.488px;"
                  id="elso7vyg5s71"
                  class="animable"
               />
               <path
                  d="M205.31,116.71a16.23,16.23,0,0,0-2.57,1.88,10,10,0,0,0-3,6.79c0,.26,0,.53,0,.78l-.52.07a22,22,0,0,0-2.69-6.62c-1-1.55-1.7-2.41-1.63-2.46s.23.17.58.55a15.75,15.75,0,0,1,1.35,1.72,19.67,19.67,0,0,1,2.9,6.7l-.51.08c0-.27,0-.55,0-.83a9.66,9.66,0,0,1,1.09-4.23,10.11,10.11,0,0,1,2.19-2.82,8.61,8.61,0,0,1,2-1.33A2.25,2.25,0,0,1,205.31,116.71Z"
                  style="fill: rgb(170, 101, 80); transform-origin: 200.103px 121.47px;"
                  id="elzgylof4uvm8"
                  class="animable"
               />
               <path
                  d="M205.12,111.87c0,.16-2.23.29-4.93.74s-4.87,1-4.91.89a14.8,14.8,0,0,1,4.82-1.4A15.17,15.17,0,0,1,205.12,111.87Z"
                  style="fill: rgb(170, 101, 80); transform-origin: 200.2px 112.637px;"
                  id="elcctr399lwva"
                  class="animable"
               />
               <path
                  d="M201.21,110.86a56.3,56.3,0,0,1-.05-7.78,59,59,0,0,1,.48-7.77,57.42,57.42,0,0,1,0,7.78A60,60,0,0,1,201.21,110.86Z"
                  style="fill: rgb(170, 101, 80); transform-origin: 201.411px 103.085px;"
                  id="eld19q4ztlaa"
                  class="animable"
               />
               <path
                  d="M205,110.74a45.66,45.66,0,0,1-.1-6.86A46.42,46.42,0,0,1,205.3,97a45.81,45.81,0,0,1,.1,6.86A44.7,44.7,0,0,1,205,110.74Z"
                  style="fill: rgb(170, 101, 80); transform-origin: 205.15px 103.87px;"
                  id="eluvqdtbxzvan"
                  class="animable"
               />
               <path
                  d="M243.6,240.79a14,14,0,0,1-6.43-6.68c.14-.08,1.24,1.7,3,3.53S243.69,240.66,243.6,240.79Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 240.387px 237.449px;"
                  id="elhmg9zq5zxgt"
                  class="animable"
               />
               <path
                  d="M277.91,229.51c0-.09,1.24.17,3.24.42a44.22,44.22,0,0,0,15.61-.77c2-.45,3.15-.83,3.18-.75a2.78,2.78,0,0,1-.8.37c-.53.21-1.31.46-2.29.74a37,37,0,0,1-15.76.78c-1-.18-1.8-.35-2.35-.51A3.19,3.19,0,0,1,277.91,229.51Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 288.925px 229.602px;"
                  id="els94g1lgb0p"
                  class="animable"
               />
               <polygon
                  points="289.19 454.46 302.61 273.67 303.23 227.16 228.86 233.16 204.26 455.63 233.77 454.88 263.87 268.24 262.44 453.59 289.19 454.46"
                  style="fill: rgb(38, 50, 56); transform-origin: 253.745px 341.395px;"
                  id="elj5j4yezus1"
                  class="animable"
               />
               <path
                  d="M247.62,261.7c.14,0-6.21,42.93-14.18,95.82s-14.56,95.78-14.71,95.76,6.21-42.92,14.19-95.83S247.48,261.68,247.62,261.7Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 233.175px 357.49px;"
                  id="elrj9v2q4zfwr"
                  class="animable"
               />
               <path
                  d="M277.22,453.28a4.7,4.7,0,0,1,0-.5c0-.35,0-.83.08-1.45.08-1.31.21-3.19.37-5.6.32-4.88.79-11.9,1.38-20.56,1.14-17.37,2.59-41.38,3.87-67.9s2.14-50.57,2.68-68c.26-8.68.46-15.71.61-20.6.07-2.42.13-4.3.17-5.6,0-.63,0-1.11.06-1.46s0-.5,0-.5a4.79,4.79,0,0,1,0,.5v1.46c0,1.3,0,3.19-.07,5.6-.07,4.87-.22,11.91-.44,20.61-.44,17.4-1.25,41.44-2.53,68s-2.79,50.54-4,67.9c-.61,8.68-1.14,15.71-1.54,20.56-.2,2.41-.36,4.28-.47,5.58-.05.63-.1,1.11-.13,1.46S277.22,453.28,277.22,453.28Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 281.84px 357.195px;"
                  id="elgzujlgohks7"
                  class="animable"
               />
               <path
                  d="M251.57,120.42l-5.25,7.77s-16.77,2.17-19.43,3.38-3.66,5.52-3.66,5.52l4.73,57.2s1.19,24.3,1,28.1h0s0,3.79-.16,6.53a57.52,57.52,0,0,0,.45,7.59s21.41,5.34,23.23,5.18,10.94-2.11,10.94-2.11l27.49-1,8.81-2.88,1.67-4.7-1.06-2s3.8-4.4,4.11-6.68-1-24.75-1-24.75V191l3.85-58s-4.85-3.11-7.56-3.6c-7.57-1.38-14.26-3.29-14.26-3.29l-7.25-8.32Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 265.26px 179.742px;"
                  id="eli5ru31bfbij"
                  class="animable"
               />
               <path
                  d="M263,145.91a.73.73,0,0,1,0,.24l0,.7-.25,2.7c-.24,2.34-.54,5.73-.86,9.93s-.63,9.19-.85,14.75-.32,11.67-.27,18.09.31,12.53.61,18.08.72,10.55,1.13,14.73.77,7.58,1.05,9.91c.13,1.14.23,2,.31,2.7l.06.7a1.08,1.08,0,0,1,0,.24.79.79,0,0,1-.06-.23c0-.19-.07-.42-.12-.7-.09-.66-.23-1.55-.4-2.68-.34-2.33-.77-5.71-1.21-9.9s-.89-9.18-1.25-14.74-.58-11.68-.65-18.11.08-12.55.31-18.11.58-10.57,1-14.76.73-7.59,1-9.92c.15-1.14.26-2,.35-2.69l.1-.7A1.16,1.16,0,0,1,263,145.91Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 262.08px 192.295px;"
                  id="elgzt7swzz686"
                  class="animable"
               />
               <path
                  d="M261.39,146.94l16.78,22.35a103.49,103.49,0,0,0,6.39,9c4.11,5.26,18.39,15.33,21.36,15.9s8.23,1.15,11.55-4.79,4.7-18.85,4.7-18.85L307.29,133s-5.66,3.28-8.41,8.65-2.95,16.68-2.95,16.68l-15.78-14.2-6.92-8.23Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 291.78px 163.765px;"
                  id="elht8ttyeizn5"
                  class="animable"
               />
               <path
                  d="M305.93,170.53a6.14,6.14,0,0,1-1.45-2.06c-.75-1.37-1.42-3.43-2.48-5.49a10.39,10.39,0,0,0-1.87-2.63,6.79,6.79,0,0,0-2.17-1.46,8,8,0,0,0-2.39-.46s.22-.12.66-.15a4.65,4.65,0,0,1,1.86.27,6.63,6.63,0,0,1,2.37,1.45,10.18,10.18,0,0,1,2,2.73c1.09,2.14,1.69,4.19,2.35,5.58S306,170.49,305.93,170.53Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 300.753px 164.401px;"
                  id="elj2yr9as2n4"
                  class="animable"
               />
               <path
                  d="M280.15,144.13a7.3,7.3,0,0,1-1,2.27,18.85,18.85,0,0,1-3.67,4.7,18.21,18.21,0,0,1-5,3.29,7.67,7.67,0,0,1-2.35.76c-.09-.17,3.61-1.28,7-4.43S280,144,280.15,144.13Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 274.139px 149.638px;"
                  id="elmay6rwnxo8"
                  class="animable"
               />
               <path
                  d="M266.55,146.83s.12-.1.38-.16a1.57,1.57,0,0,1,1.15.15,1.85,1.85,0,0,1,.84,1.53,1.78,1.78,0,0,1-2.44,1.66,1.8,1.8,0,0,1-.86-2.46,1.4,1.4,0,0,1,.85-.8c.28-.07.43,0,.43,0s-.66.08-.94.92a1.47,1.47,0,0,0,.12,1.34,1.23,1.23,0,0,0,1.43.53,1.27,1.27,0,0,0,.93-1.21,1.53,1.53,0,0,0-.56-1.22,1.56,1.56,0,0,0-.93-.26C266.7,146.87,266.55,146.87,266.55,146.83Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 267.171px 148.379px;"
                  id="eluxvjqle3nr"
                  class="animable"
               />
               <path
                  d="M188.12,130.26l-5.48,9.64-3.41,1.2s-14.72,22.27-6.52,29.51,21.6,6.83,26.21,4.62,28.19-12.89,28.19-12.89l-.22-30.77a65.72,65.72,0,0,0-12.07,7.64c-2.94,2.51-17.06,10.62-17.06,10.62l4.2-12.76Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 198.667px 153.454px;"
                  id="elp0wv2vsj48b"
                  class="animable"
               />
               <path
                  d="M244.87,129.88a19,19,0,0,1-2.94,10.27,40,40,0,0,0,12.75-8.09,23.22,23.22,0,0,0,5.45,5.43c-1.23-3.06-3.4-5.62-5.25-8.35s-3.42-5.88-3.18-9.16Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 251.03px 130.065px;"
                  id="elubypwflk5yg"
                  class="animable"
               />
               <path
                  d="M286.4,199.76a10.14,10.14,0,0,1-.94,1.44c-.32.46-.72,1-1.21,1.62s-1,1.34-1.71,2.08a59.88,59.88,0,0,1-4.87,5,65.79,65.79,0,0,1-6.73,5.3,64.55,64.55,0,0,1-7.41,4.29,57.48,57.48,0,0,1-6.45,2.69c-.94.35-1.81.58-2.56.82s-1.41.4-2,.52a10,10,0,0,1-1.69.35,11.16,11.16,0,0,1,1.64-.54c.53-.16,1.18-.35,1.92-.61s1.6-.52,2.52-.89a65.44,65.44,0,0,0,6.37-2.77,69.54,69.54,0,0,0,7.33-4.29,68.64,68.64,0,0,0,6.69-5.23,65.33,65.33,0,0,0,4.93-4.9c.68-.71,1.24-1.41,1.75-2s.94-1.12,1.27-1.56A10.26,10.26,0,0,1,286.4,199.76Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 268.615px 211.815px;"
                  id="elqot70kzumog"
                  class="animable"
               />
               <path
                  d="M252.59,132.18a3.17,3.17,0,0,1-.46,1,10,10,0,0,1-1.91,2.18c-1.81,1.67-4.8,3.29-7.9,5.26l-.25.16-.58.38.19-.66a82.68,82.68,0,0,1,3-8.79c.44-1.1.83-2,1.11-2.57a3.76,3.76,0,0,1,.5-.91,4.53,4.53,0,0,1-.32,1c-.26.73-.58,1.61-.95,2.63-.79,2.23-1.9,5.31-2.87,8.79l-.4-.28.26-.16c3.14-2,6.11-3.54,7.94-5.11A14.61,14.61,0,0,0,252.59,132.18Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 247.04px 134.695px;"
                  id="elhsviegzienh"
                  class="animable"
               />
               <path
                  d="M229,222.39a3.25,3.25,0,0,1-.08-.73c0-.53-.08-1.23-.13-2.09-.09-1.88-.21-4.49-.36-7.7s-.3-7.13-.48-11.42c-.1-2.15-.15-4.41-.29-6.74s-.4-4.74-.61-7.21c-1.58-19.26-2.72-33.05-3-35.84a2.05,2.05,0,0,1,.17.71c.08.48.17,1.18.28,2.08.21,1.81.48,4.43.79,7.67.62,6.48,1.41,15.43,2.23,25.33.21,2.48.4,4.89.6,7.23s.17,4.6.26,6.75c.13,4.28.26,8.15.36,11.42s.16,5.83.2,7.71c0,.87,0,1.56,0,2.09A4.25,4.25,0,0,1,229,222.39Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 226.525px 186.525px;"
                  id="el9883xb3vpq9"
                  class="animable"
               />
               <path
                  d="M199.1,146.59c.08,0-.62,1.45-1.52,3.82a49.79,49.79,0,0,0-3.21,14.94c-.12,1.66,0,3.18-.25,4.48a4,4,0,0,1-1.52,2.64,2.45,2.45,0,0,1-.75.36c-.19,0-.29,0-.3,0a5.06,5.06,0,0,0,.93-.55,4,4,0,0,0,1.28-2.54c.18-1.23,0-2.76.13-4.45a43.23,43.23,0,0,1,.58-5.47,43.73,43.73,0,0,1,2.77-9.58c.5-1.17.95-2.1,1.29-2.73A4.58,4.58,0,0,1,199.1,146.59Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 195.328px 159.71px;"
                  id="elz4skxuzekgi"
                  class="animable"
               />
               <path
                  d="M197,168.52a13.24,13.24,0,0,1-.23-2.75c-.06-1.69-.08-4,0-6.63s.3-4.93.49-6.62a13.59,13.59,0,0,1,.45-2.72,15.23,15.23,0,0,1-.08,2.75c-.1,1.69-.24,4-.34,6.61s-.14,4.92-.17,6.61A14.62,14.62,0,0,1,197,168.52Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 197.228px 159.16px;"
                  id="el1k3gc4ykayq"
                  class="animable"
               />
               <path
                  d="M198.15,148a8.47,8.47,0,0,1-2.64-.23,21.09,21.09,0,0,1-6-2.14,21.65,21.65,0,0,1-5.14-3.82,9,9,0,0,1-1.66-2.07,32.53,32.53,0,0,0,7,5.43A32.15,32.15,0,0,0,198.15,148Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 190.43px 143.88px;"
                  id="el1fl2ebtsq5l"
                  class="animable"
               />
               <path
                  d="M195.32,139.15a2.06,2.06,0,0,0-.17,1.16,1.33,1.33,0,0,0,.67.94,1.24,1.24,0,0,0,1.6-1.55,1.38,1.38,0,0,0-.93-.7,2.13,2.13,0,0,0-1.17.15s0-.15.24-.29a1.39,1.39,0,0,1,1-.22,1.67,1.67,0,0,1,1.3.84,1.61,1.61,0,0,1-.38,1.86,1.59,1.59,0,0,1-1.87.34,1.7,1.7,0,0,1-.82-1.31,1.52,1.52,0,0,1,.25-1C195.17,139.18,195.31,139.13,195.32,139.15Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 196.394px 140.234px;"
                  id="elw0aiijn4kq"
                  class="animable"
               />
               <path
                  d="M247.15,153.31c.27-.15-.14,6.49-.14,6.49s-.69,4.17-5.92,3.92a5,5,0,0,1-5.09-5.53l.3-4.89a4.57,4.57,0,0,0,5.3-2.14S244.05,155.08,247.15,153.31Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 241.607px 157.445px;"
                  id="elsks4mj81ktg"
                  class="animable"
               />
               <path
                  d="M308.28,135.51a6.46,6.46,0,0,1,.28.62c.18.43.44,1,.76,1.83.67,1.64,1.63,4,2.85,7,2.44,6.11,5.94,14.87,10.2,25.51l0,.06v.06c-.66,3.73-1.37,7.69-2.1,11.85a21.25,21.25,0,0,1-2,6.21,17,17,0,0,1-1.85,2.85,11.76,11.76,0,0,1-1.18,1.27,6.82,6.82,0,0,1-1.47,1,11.15,11.15,0,0,1-7,.79,9.4,9.4,0,0,1-3.5-1.13l-3.06-2a102.63,102.63,0,0,1-12.09-9,65,65,0,0,1-8.12-8.78c-2.43-3.07-4.66-6.19-6.76-9.28-4.21-6.16-8.06-12.09-12-17.32l-.13-.16.16-.14,11.86-11,.14-.13.13.13c6.84,7,12.4,12.61,16.27,16.53l4.41,4.53,1.14,1.19c.26.27.38.42.38.42s-.15-.12-.42-.38L294,156.9l-4.49-4.45L273.1,136h.27L261.55,147.1l0-.3c4,5.23,7.83,11.16,12,17.31,2.11,3.07,4.33,6.18,6.75,9.24a65.38,65.38,0,0,0,8.06,8.71,102.78,102.78,0,0,0,12,9l3.05,2a8.94,8.94,0,0,0,3.31,1.06,10.61,10.61,0,0,0,6.7-.73,6.31,6.31,0,0,0,1.37-.92,10.89,10.89,0,0,0,1.13-1.22,15.94,15.94,0,0,0,1.8-2.76,20.84,20.84,0,0,0,2-6.07c.75-4.16,1.47-8.12,2.15-11.85v.11c-4.19-10.67-7.63-19.44-10-25.57L309.21,138c-.3-.8-.54-1.42-.71-1.86S308.28,135.51,308.28,135.51Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 291.74px 165.156px;"
                  id="ellutxh2losc"
                  class="animable"
               />
               <path
                  d="M285.35,126.56c-.36,4-4.9,11.8-6.32,14,0,0-2.93-5.83-4.47-9L274,136.1c-1.23-1.12-.12-7.47-.31-7.41L278,117.81Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 279.381px 129.185px;"
                  id="eldjgqdms4lcf"
                  class="animable"
               />
               <path
                  d="M277.34,117.88a3.73,3.73,0,0,1,.87-.16h0l0,0c1.16,1.23,3.84,4.22,7.37,8.22l.08.08,0,.12a38.2,38.2,0,0,1-4.12,10.8c-.74,1.32-1.52,2.57-2.32,3.74l-.27.39-.18-.43c-.94-2.26-2.12-4.27-3.08-6.16a25.63,25.63,0,0,1-2.17-5.29l.33,0c-.79,1.78-1.44,3.24-1.92,4.34a12.87,12.87,0,0,1-.77,1.55,12.8,12.8,0,0,1,.58-1.63c.45-1.11,1.06-2.6,1.79-4.41l.19-.48.15.51a26.59,26.59,0,0,0,2.22,5.17c1,1.87,2.18,3.87,3.15,6.17l-.45,0c.79-1.17,1.57-2.41,2.3-3.71a39.66,39.66,0,0,0,4.13-10.65l.05.2c-3.48-4.05-6.08-7.11-7.13-8.42l.06,0A5.47,5.47,0,0,1,277.34,117.88Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 278.41px 129.395px;"
                  id="elwozugoajqy"
                  class="animable"
               />
               <path
                  d="M293.89,146.34a43.68,43.68,0,0,1,1.13,6.13c.25,1.7.47,3.24.57,4.37a10,10,0,0,1,.06,1.34.85.85,0,0,1-.07.39c-.06.09-.15,0-.14,0s0,0,0,0c.14.23,0-.57-.2-1.64s-.47-2.64-.73-4.35A33,33,0,0,1,293.89,146.34Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 294.771px 152.475px;"
                  id="elvfbqyk8rls"
                  class="animable"
               />
               <path
                  d="M264.85,135.45h0a12.35,12.35,0,0,1-12.59-12.94c.12-2.36.21-4.08.21-4.08s-9.89-1.28-10.26-11.13.77-32.5.77-32.5h0a34.23,34.23,0,0,1,34.5,3.45L279,79.34l-1.63,38.54s-4.34,14.38-7.65,16.47C267.85,135.51,267.17,135.4,264.85,135.45Z"
                  style="fill: rgb(183, 136, 118); transform-origin: 260.568px 103.558px;"
                  id="elrc899n0leo"
                  class="animable"
               />
               <path
                  d="M252.47,118.43a23.79,23.79,0,0,0,12.73-4.11s-3,7.15-12.81,6.52Z"
                  style="fill: rgb(170, 101, 80); transform-origin: 258.795px 117.6px;"
                  id="elrictt0ikzve"
                  class="animable"
               />
               <path
                  d="M278,89.57c.16-.07,6.71-2.17,6.67,4.57s-6.8,5.3-6.81,5.11S278,89.57,278,89.57Z"
                  style="fill: rgb(183, 136, 118); transform-origin: 281.265px 94.3571px;"
                  id="elmgk5thf6b5m"
                  class="animable"
               />
               <path
                  d="M280,96.71s.12.08.32.18a1.15,1.15,0,0,0,.87,0,2.89,2.89,0,0,0,1.36-2.6,3.79,3.79,0,0,0-.31-1.68,1.37,1.37,0,0,0-.88-.91.59.59,0,0,0-.69.32c-.1.19-.05.32-.09.33s-.14-.11-.09-.39a.77.77,0,0,1,.27-.42.93.93,0,0,1,.65-.17,1.65,1.65,0,0,1,1.22,1.06,3.94,3.94,0,0,1,.39,1.88,3,3,0,0,1-1.73,2.9,1.26,1.26,0,0,1-1.07-.19C280,96.87,279.93,96.72,280,96.71Z"
                  style="fill: rgb(170, 101, 80); transform-origin: 281.5px 94.3098px;"
                  id="elqdk2dj4vf7n"
                  class="animable"
               />
               <path
                  d="M246.77,90.5a1.41,1.41,0,0,0,1.4,1.38,1.33,1.33,0,0,0,1.41-1.3,1.41,1.41,0,0,0-1.39-1.39A1.35,1.35,0,0,0,246.77,90.5Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 248.175px 90.5353px;"
                  id="el2h21m9z2sau"
                  class="animable"
               />
               <path
                  d="M245.19,88.61c.18.17,1.23-.64,2.74-.68s2.64.7,2.8.51-.11-.41-.6-.75a3.81,3.81,0,0,0-2.25-.63,3.69,3.69,0,0,0-2.17.76C245.25,88.19,245.1,88.53,245.19,88.61Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 247.971px 87.8453px;"
                  id="elv5sfn8jum2d"
                  class="animable"
               />
               <path
                  d="M261.49,90.5a1.41,1.41,0,0,0,1.4,1.38,1.33,1.33,0,0,0,1.41-1.3,1.4,1.4,0,0,0-1.39-1.39A1.35,1.35,0,0,0,261.49,90.5Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 262.895px 90.5353px;"
                  id="elg7oe4l9mon6"
                  class="animable"
               />
               <path
                  d="M260.08,88.51c.18.18,1.22-.63,2.74-.67s2.64.7,2.8.51-.11-.41-.6-.75a3.86,3.86,0,0,0-2.25-.63,3.66,3.66,0,0,0-2.18.76C260.14,88.1,260,88.43,260.08,88.51Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 262.862px 87.7519px;"
                  id="elzihcnog9boj"
                  class="animable"
               />
               <path
                  d="M254.87,99.88a9.78,9.78,0,0,0-2.47-.39c-.39,0-.76-.09-.83-.36A1.93,1.93,0,0,1,251.8,98c.34-.94.69-1.93,1.07-3,1.48-4.23,2.54-7.7,2.37-7.76s-1.51,3.32-3,7.55c-.36,1-.7,2-1,3a2.16,2.16,0,0,0-.16,1.52,1,1,0,0,0,.65.55,2.73,2.73,0,0,0,.65.08A10.56,10.56,0,0,0,254.87,99.88Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 253.134px 93.613px;"
                  id="elko2h8z96not"
                  class="animable"
               />
               <path
                  d="M259.44,84.92c.19.39,1.67,0,3.46.1s3.27.39,3.47,0c.08-.18-.2-.54-.81-.89a6,6,0,0,0-5.28-.08C259.65,84.37,259.36,84.73,259.44,84.92Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 262.905px 84.3475px;"
                  id="elv532nu7gtk"
                  class="animable"
               />
               <path
                  d="M244.8,85.7c.28.36,1.49.08,2.91.16s2.61.41,2.91.07c.14-.16,0-.52-.53-.88a4.46,4.46,0,0,0-2.33-.72,4.38,4.38,0,0,0-2.37.53C244.87,85.18,244.68,85.52,244.8,85.7Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 247.718px 85.2013px;"
                  id="elf1bk3da3ivt"
                  class="animable"
               />
               <path
                  d="M259.09,103.08a2.23,2.23,0,0,0-1.46-.56,5.22,5.22,0,0,0-1.57.21,2.5,2.5,0,0,0-1.57.9,1.73,1.73,0,0,0-.19,1.22c.07.42.14,1.91,1,2.28h3.54a4.41,4.41,0,0,0,.85-2.17A2.08,2.08,0,0,0,259.09,103.08Z"
                  style="fill: rgb(170, 101, 80); transform-origin: 256.994px 104.825px;"
                  id="elhn6qfglw4zh"
                  class="animable"
               />
               <path
                  d="M258,107.15s.17,0,.41,0a1,1,0,0,0,.7-.66,6.68,6.68,0,0,0,.21-1.64,2.37,2.37,0,0,0-.51-1.78c-.43-.5-1.12-.33-1.76-.22a7.09,7.09,0,0,0-1.62.4c-.87.38-1,1.05-1.11,1s0-.17.09-.44a1.89,1.89,0,0,1,.85-.88,6.1,6.1,0,0,1,1.69-.55,4.82,4.82,0,0,1,1.06-.16,1.56,1.56,0,0,1,1.17.48,2.71,2.71,0,0,1,.62,2.17,5.73,5.73,0,0,1-.35,1.76,1.16,1.16,0,0,1-1,.72C258.06,107.33,257.94,107.16,258,107.15Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 257.052px 104.785px;"
                  id="elp1ay6vvqs9n"
                  class="animable"
               />
               <path
                  d="M270.59,81.15a5.62,5.62,0,0,0-.15,3.14,1.92,1.92,0,0,0,2.49,1.28,7.92,7.92,0,0,0-.37,3.16A4.29,4.29,0,0,0,274,91.52a2.92,2.92,0,0,0,3,.49,2.24,2.24,0,0,0,1.22-2.65A2,2,0,0,0,281,88.5a3.1,3.1,0,0,0-.49-3.12,2.07,2.07,0,0,0,2-1.77,4,4,0,0,0-.76-2.78c-.54-.83-1.23-1.54-1.79-2.34s-1-1.54-1.78-1.77a3,3,0,0,0-2,.38,32.59,32.59,0,0,0-5.92,3.55"
                  style="fill: rgb(38, 50, 56); transform-origin: 276.395px 84.4534px;"
                  id="eltgb13q15zkd"
                  class="animable"
               />
               <path
                  d="M281.32,74.86s4.6.54,5.24-2.54c1.67-8.08-9.45-11.51-9.45-11.51s-3.9-1-10.27-3.38A40.21,40.21,0,0,1,259.75,54a6.34,6.34,0,0,0-6.73.06,52,52,0,0,1-11.78,5.8s-4.36,1.14-4.34,6.8c0,2.61,4.44,4.55,4.44,4.55Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 261.815px 63.9797px;"
                  id="elf8ug2pf6q2r"
                  class="animable"
               />
               <path
                  d="M280.61,79.33l.75-4.72s-26.1-9.41-39.51-3.35V76.6Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 261.605px 74.2779px;"
                  id="el5jkruj4z6r4"
                  class="animable"
               />
               <path
                  d="M234.87,80.09s3.24,2.62,10.34,3c12.91.65,33.94-3.83,33.94-3.83l-37.3-2.63Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 257.01px 79.8922px;"
                  id="elikgp9vqx5qf"
                  class="animable"
               />
               <path
                  d="M259.28,63.61c.23-.14-.13,5.86-.13,5.86s-.62,3.76-5.34,3.53a4.53,4.53,0,0,1-4.6-5l.27-4.41a4.13,4.13,0,0,0,4.78-1.93S256.48,65.21,259.28,63.61Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 254.271px 67.3351px;"
                  id="elf82updgndt"
                  class="animable"
               />
               <path
                  d="M280.48,79.52a5.51,5.51,0,0,1-1.11.25l-3,.51c-2.56.41-6.1,1-10,1.55s-7.5.93-10.09,1.09c-1.3.08-2.35.13-3.08.13A4.34,4.34,0,0,1,252,83a5.32,5.32,0,0,1,1.12-.16l3.06-.3c2.58-.25,6.13-.68,10.05-1.24s7.47-1.07,10.05-1.39c1.29-.17,2.33-.29,3.06-.35A4.24,4.24,0,0,1,280.48,79.52Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 266.24px 81.2847px;"
                  id="elp8eo46q8gw8"
                  class="animable"
               />
               <polygon
                  points="254.17 105.9 254.17 112.73 258.01 112.73 258.01 105.96 254.17 105.9"
                  style="fill: rgb(255, 136, 0); transform-origin: 256.09px 109.315px;"
                  id="el01mnk0p032zy"
                  class="animable"
               />
               <path
                  d="M258.93,108.81s-.81.68-.67,2.76,2.21,3.88,2.21,3.88v1.76l-6.55-7.36s-.63-1-1.58-.72a2.76,2.76,0,0,0-1.58,4.29,2.57,2.57,0,0,0-1.67,2.75s-2.66-.86-2.66,2.21v1.85a1.43,1.43,0,0,0-1.81,0c-.86.77-.68,3-.41,4s7.64,11.34,9.94,12.42a15.19,15.19,0,0,1,3.75,2.48l5.05,6.1,9.33-8.75s-5.67-5.65-6-6.74.72-4.47.63-5.78a72.37,72.37,0,0,0-1-7.36C265.57,115.58,258.93,108.81,258.93,108.81Z"
                  style="fill: rgb(183, 136, 118); transform-origin: 258.133px 127.02px;"
                  id="el4slxf5reivo"
                  class="animable"
               />
               <path
                  d="M263,145.25a2.65,2.65,0,0,1-.36-.38l-1-1.16-3.79-4.47h0a14.84,14.84,0,0,0-1.91-1.43c-.36-.23-.74-.45-1.13-.66a9.22,9.22,0,0,1-1.24-.69,31.52,31.52,0,0,1-4.27-4.62c-1.4-1.77-2.85-3.71-4.28-5.84a9.66,9.66,0,0,1-1-1.75,7.66,7.66,0,0,1-.22-2,3.22,3.22,0,0,1,.61-2.08,1.51,1.51,0,0,1,1.08-.5,1.91,1.91,0,0,1,1.13.39l-.4.19v-1.46a5.05,5.05,0,0,1,.16-1.56,1.92,1.92,0,0,1,1.13-1.25,2.74,2.74,0,0,1,1.7,0l-.33.25a3.53,3.53,0,0,1,.38-1.77,2.61,2.61,0,0,1,1.48-1.24l-.16.37a4,4,0,0,1-.55-1.78,2.65,2.65,0,0,1,.67-1.82,3.75,3.75,0,0,1,1.63-1.07,1.42,1.42,0,0,1,1.09.12,2.19,2.19,0,0,1,.76.72l0,0,.16.19c2.19,2.45,4.32,4.85,6.38,7.17l-.45.17c0-.59,0-1.18,0-1.76l.08.19a7.43,7.43,0,0,1-2.15-3.26,5.27,5.27,0,0,1-.12-1.93,3,3,0,0,1,.75-1.82l.15-.17.18.18c1.67,1.73,3.26,3.4,4.74,5a27.41,27.41,0,0,1,2.07,2.52,2.3,2.3,0,0,1,.28.81c.05.25.09.51.14.77l.21,1.49c.13,1,.25,2,.34,2.87.05.47.09.92.14,1.37a5.16,5.16,0,0,1,0,1.36,26.51,26.51,0,0,0-.66,4.67,2.36,2.36,0,0,0,.47.86c.2.27.41.52.62.77.41.49.81.95,1.19,1.37l1.95,2.12L271.8,136a3.53,3.53,0,0,1,.41.47,3.53,3.53,0,0,1-.47-.41l-1.28-1.26c-.55-.56-1.23-1.25-2-2.08-.39-.41-.8-.86-1.22-1.35-.21-.25-.43-.5-.64-.77a2.51,2.51,0,0,1-.54-1c-.13-1.53.39-3.06.59-4.76a10.9,10.9,0,0,0-.14-2.64c-.1-.93-.22-1.88-.36-2.86-.08-.49-.15-1-.23-1.49,0-.24-.09-.49-.14-.75a1.61,1.61,0,0,0-.23-.66,26.2,26.2,0,0,0-2-2.45c-1.48-1.63-3.08-3.3-4.75-5l.33,0a2.7,2.7,0,0,0-.57,1.5,4.9,4.9,0,0,0,.11,1.75,6.91,6.91,0,0,0,2,3l.08.08v.11c0,.58,0,1.17,0,1.76v.67l-.45-.5-6.38-7.17-.17-.19h0l0,0a1.16,1.16,0,0,0-1.26-.61,3.24,3.24,0,0,0-1.39.91,2.11,2.11,0,0,0-.54,1.47,3.6,3.6,0,0,0,.48,1.54l.14.28-.3.1a2.12,2.12,0,0,0-1.16,1,3,3,0,0,0-.32,1.51v.34l-.34-.1a2.25,2.25,0,0,0-1.36,0,1.42,1.42,0,0,0-.83.94,4.89,4.89,0,0,0-.15,1.4v2l-.4-.31a1.12,1.12,0,0,0-1.55,0,2.83,2.83,0,0,0-.49,1.76,7.61,7.61,0,0,0,.2,1.91,10.63,10.63,0,0,0,.92,1.61c1.4,2.12,2.84,4.07,4.22,5.84a31.54,31.54,0,0,0,4.16,4.59,6.65,6.65,0,0,0,.56.36l.62.32c.4.22.79.45,1.15.69a14.44,14.44,0,0,1,1.93,1.49h0l3.69,4.55,1,1.2A2.67,2.67,0,0,1,263,145.25Z"
                  style="fill: rgb(170, 101, 80); transform-origin: 258.002px 126.895px;"
                  id="el4tr3kuxf9na"
                  class="animable"
               />
               <path
                  d="M255.41,119.12a14.05,14.05,0,0,1-2.6-2.83,14,14,0,0,1-2.19-3.16,14.63,14.63,0,0,1,2.6,2.84A14.47,14.47,0,0,1,255.41,119.12Z"
                  style="fill: rgb(170, 101, 80); transform-origin: 253.015px 116.125px;"
                  id="elh7r6t4t76v"
                  class="animable"
               />
               <path
                  d="M251.91,120.46c-.1.1-1-.69-1.75-1.94a4.66,4.66,0,0,1-.93-2.44c.14-.06.64,1,1.37,2.17A11.46,11.46,0,0,1,251.91,120.46Z"
                  style="fill: rgb(170, 101, 80); transform-origin: 250.57px 118.273px;"
                  id="ela69jsjwwdv"
                  class="animable"
               />
               <path
                  d="M247.72,123.07c-.13.07-.58-.53-1-1.34s-.67-1.51-.54-1.58.57.53,1,1.34S247.84,123,247.72,123.07Z"
                  style="fill: rgb(170, 101, 80); transform-origin: 246.949px 121.61px;"
                  id="elyjyw3mwtymr"
                  class="animable"
               />
               <rect
                  x="232.84"
                  y="166.62"
                  width="17.92"
                  height="3.89"
                  style="fill: rgb(38, 50, 56); transform-origin: 241.8px 168.565px;"
                  id="el57akm1uk5a"
                  class="animable"
               />
               <path
                  d="M226,224.73s.63,14.21,32.47,13.12,44.65-13.12,44.65-13.12v14.91s-34.53,13.72-58.38,10.28c-18.74-2.71-23-10.28-23-10.28Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 262.43px 237.602px;"
                  id="elenh96tjsem"
                  class="animable"
               />
               <path
                  d="M246.58,258.61h0a4.84,4.84,0,0,1-4.84-4.84V233.63a4.84,4.84,0,0,1,4.84-4.84h0a4.84,4.84,0,0,1,4.84,4.84v20.14A4.84,4.84,0,0,1,246.58,258.61Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 246.58px 243.7px;"
                  id="elf5gdc5drs0d"
                  class="animable"
               />
               <path
                  d="M246.58,258.61a6.29,6.29,0,0,1,.71-.11,5,5,0,0,0,1.86-.75,4.78,4.78,0,0,0,1.88-2.49,5.35,5.35,0,0,0,.22-2c0-.72,0-1.48,0-2.28,0-3.21,0-7,0-11.23,0-2.1,0-4.36,0-6.61a4.58,4.58,0,0,0-9.12,0c-.05,2.25,0,4.51,0,6.61,0,4.21,0,8-.06,11.23,0,.8,0,1.56,0,2.28a5.35,5.35,0,0,0,.22,2,4.74,4.74,0,0,0,1.88,2.49,5,5,0,0,0,1.86.75,6.29,6.29,0,0,1,.71.11,2.47,2.47,0,0,1-.72,0,4.65,4.65,0,0,1-2-.68,4.87,4.87,0,0,1-2-2.57,5.72,5.72,0,0,1-.29-2c0-.72,0-1.48,0-2.28,0-3.21,0-7-.06-11.23,0-2.13,0-4.31,0-6.66a5.1,5.1,0,0,1,5.07-4.6A5.09,5.09,0,0,1,250,229.9a5.14,5.14,0,0,1,1.61,3.23c0,2.35,0,4.53,0,6.66,0,4.21,0,8-.06,11.23,0,.8,0,1.56,0,2.28a5.51,5.51,0,0,1-.28,2,4.92,4.92,0,0,1-2,2.57,4.65,4.65,0,0,1-2,.68A2.47,2.47,0,0,1,246.58,258.61Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 246.64px 243.613px;"
                  id="el8kayb1dfich"
                  class="animable"
               />
               <path
                  d="M246.56,236.37a1.39,1.39,0,0,0-1.15,1.14,1.21,1.21,0,0,0,.89,1.3,1.32,1.32,0,0,0,1.44-.95,1.25,1.25,0,0,0-1.18-1.49"
                  style="fill: rgb(69, 90, 100); transform-origin: 246.583px 237.595px;"
                  id="elwxfmxinopn"
                  class="animable"
               />
               <path
                  d="M246.56,236.37s.12-.06.32,0a1.17,1.17,0,0,1,.78.42,1.52,1.52,0,0,1,.28,1.32,1.6,1.6,0,0,1-1.32,1,1.33,1.33,0,0,1-1.37-.94,1.37,1.37,0,0,1,.25-1.32c.53-.59,1.08-.5,1.06-.45s-.43.16-.76.67a1,1,0,0,0-.1.93.89.89,0,0,0,.87.6,1.2,1.2,0,0,0,.91-.65,1.23,1.23,0,0,0-.12-.95C247,236.49,246.53,236.47,246.56,236.37Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 246.583px 237.728px;"
                  id="eld9ym5n3r5m6"
                  class="animable"
               />
               <path
                  d="M246.59,248.3a1.39,1.39,0,0,0-1.16,1.14,1.21,1.21,0,0,0,.89,1.3,1.33,1.33,0,0,0,1.45-1,1.26,1.26,0,0,0-1.18-1.49"
                  style="fill: rgb(69, 90, 100); transform-origin: 246.607px 249.5px;"
                  id="elxiqn72xmriq"
                  class="animable"
               />
               <path
                  d="M246.59,248.3s.11-.06.31,0a1.17,1.17,0,0,1,.78.42A1.52,1.52,0,0,1,248,250a1.59,1.59,0,0,1-1.32,1,1.32,1.32,0,0,1-1.36-.94,1.37,1.37,0,0,1,.24-1.32c.54-.59,1.09-.5,1.07-.45s-.44.16-.77.67a1,1,0,0,0-.09.93.89.89,0,0,0,.86.6,1.19,1.19,0,0,0,.91-.65,1.23,1.23,0,0,0-.12-.95C247.06,248.41,246.55,248.4,246.59,248.3Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 246.638px 249.628px;"
                  id="el1x2xiy6zbvx"
                  class="animable"
               />
               <path
                  d="M234,257.64h0a4.84,4.84,0,0,1-4.84-4.84V232.67a4.84,4.84,0,0,1,4.84-4.84h0a4.84,4.84,0,0,1,4.84,4.84V252.8A4.84,4.84,0,0,1,234,257.64Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 234px 242.735px;"
                  id="el4euxemgh58t"
                  class="animable"
               />
               <path
                  d="M234,257.64s.25,0,.71-.11a4.8,4.8,0,0,0,1.86-.75,4.74,4.74,0,0,0,1.88-2.49,5.35,5.35,0,0,0,.22-2c0-.72,0-1.48,0-2.28,0-3.21,0-7,0-11.23,0-2.1,0-4.36,0-6.61a4.58,4.58,0,0,0-9.12,0c-.05,2.25,0,4.51,0,6.61,0,4.22,0,8-.06,11.23,0,.8,0,1.56,0,2.28a5.35,5.35,0,0,0,.22,2,4.74,4.74,0,0,0,1.88,2.49,4.8,4.8,0,0,0,1.86.75c.46.09.71.09.71.11a2.64,2.64,0,0,1-.72,0,4.7,4.7,0,0,1-2-.69,4.85,4.85,0,0,1-2-2.56,5.75,5.75,0,0,1-.29-2.06c0-.72,0-1.48,0-2.28,0-3.21,0-7-.06-11.23,0-2.12,0-4.31,0-6.66a5.14,5.14,0,0,1,1.61-3.23,5.08,5.08,0,0,1,6.92,0,5.14,5.14,0,0,1,1.61,3.23c.05,2.35,0,4.54,0,6.66,0,4.21,0,8-.06,11.23,0,.8,0,1.56,0,2.28a5.53,5.53,0,0,1-.28,2.06,4.89,4.89,0,0,1-2,2.56,4.7,4.7,0,0,1-2,.69A2.64,2.64,0,0,1,234,257.64Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 234.171px 242.624px;"
                  id="el85pud8eo60o"
                  class="animable"
               />
               <path
                  d="M234,236.37a1.39,1.39,0,0,0-1.15,1.14,1.21,1.21,0,0,0,.89,1.3,1.32,1.32,0,0,0,1.44-.95,1.25,1.25,0,0,0-1.18-1.49"
                  style="fill: rgb(69, 90, 100); transform-origin: 234.023px 237.595px;"
                  id="el63x0vc2c10e"
                  class="animable"
               />
               <path
                  d="M234,236.37s.12-.06.32,0a1.17,1.17,0,0,1,.78.42,1.52,1.52,0,0,1,.28,1.32,1.6,1.6,0,0,1-1.32,1,1.33,1.33,0,0,1-1.37-.94,1.37,1.37,0,0,1,.25-1.32c.53-.59,1.08-.5,1.06-.45s-.43.16-.76.67a1,1,0,0,0-.1.93.89.89,0,0,0,.87.6,1.2,1.2,0,0,0,.91-.65,1.23,1.23,0,0,0-.12-.95C234.45,236.49,233.94,236.47,234,236.37Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 234.023px 237.728px;"
                  id="elpwef8ygvu2f"
                  class="animable"
               />
               <path
                  d="M229,241.83a10.19,10.19,0,0,0,10,.76"
                  style="fill: rgb(69, 90, 100); transform-origin: 234px 242.692px;"
                  id="eltc6li80ewk"
                  class="animable"
               />
               <path
                  d="M238.94,242.59a3.31,3.31,0,0,1-1.38.72,9.43,9.43,0,0,1-7.36-.56c-.85-.46-1.29-.87-1.25-.92a16.15,16.15,0,0,0,4.91,1.43A15.79,15.79,0,0,0,238.94,242.59Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 233.944px 242.819px;"
                  id="el7xhvzcungcv"
                  class="animable"
               />
               <path
                  d="M302,247.86h0a4.84,4.84,0,0,1-4.84-4.84V222.88A4.84,4.84,0,0,1,302,218h0a4.84,4.84,0,0,1,4.84,4.84V243A4.84,4.84,0,0,1,302,247.86Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 302px 232.93px;"
                  id="eli7bxss32s8d"
                  class="animable"
               />
               <path
                  d="M302,247.86a6.31,6.31,0,0,1,.7-.11,4.94,4.94,0,0,0,1.87-.75,4.76,4.76,0,0,0,1.87-2.49,5.34,5.34,0,0,0,.23-2c0-.72,0-1.48,0-2.28,0-3.22,0-7-.05-11.23,0-2.1,0-4.36,0-6.61a4.58,4.58,0,0,0-9.12,0c0,2.25,0,4.5,0,6.61,0,4.21,0,8-.06,11.23,0,.8,0,1.56,0,2.28a5.56,5.56,0,0,0,.23,2,4.78,4.78,0,0,0,1.88,2.49,4.91,4.91,0,0,0,1.86.75,6.29,6.29,0,0,1,.71.11,2.53,2.53,0,0,1-.73,0,4.62,4.62,0,0,1-2-.68,4.93,4.93,0,0,1-2-2.57,6,6,0,0,1-.28-2c0-.72,0-1.48,0-2.28,0-3.21,0-7-.05-11.23,0-2.13,0-4.31,0-6.66a5.1,5.1,0,0,1,10.14,0c0,2.35,0,4.53,0,6.66,0,4.21,0,8-.06,11.23,0,.8,0,1.56,0,2.28a5.51,5.51,0,0,1-.28,2,4.92,4.92,0,0,1-2,2.57,4.65,4.65,0,0,1-2,.68A2.47,2.47,0,0,1,302,247.86Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 302.13px 232.895px;"
                  id="elshyukrudz2g"
                  class="animable"
               />
               <path
                  d="M302,225.62a1.37,1.37,0,0,0-1.15,1.14,1.2,1.2,0,0,0,.89,1.3,1.33,1.33,0,0,0,1.44-.95,1.25,1.25,0,0,0-1.18-1.49"
                  style="fill: rgb(69, 90, 100); transform-origin: 302.023px 226.845px;"
                  id="elax9vnyf74z"
                  class="animable"
               />
               <path
                  d="M302,225.62s.11-.06.32,0a1.21,1.21,0,0,1,.78.42,1.51,1.51,0,0,1,.27,1.32,1.57,1.57,0,0,1-1.31,1,1.33,1.33,0,0,1-1.37-.94,1.34,1.34,0,0,1,.25-1.32c.53-.59,1.08-.5,1.06-.45s-.43.16-.76.67a1,1,0,0,0-.1.93.89.89,0,0,0,.86.6,1.2,1.2,0,0,0,.92-.65,1.23,1.23,0,0,0-.12-.95C302.47,225.73,302,225.72,302,225.62Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 302.018px 226.978px;"
                  id="eloaui0u5968"
                  class="animable"
               />
               <path
                  d="M302,237.55a1.38,1.38,0,0,0-1.15,1.13,1.22,1.22,0,0,0,.89,1.31,1.32,1.32,0,0,0,1.44-1,1.24,1.24,0,0,0-1.18-1.49"
                  style="fill: rgb(69, 90, 100); transform-origin: 302.024px 238.75px;"
                  id="elxfu93ie7ys8"
                  class="animable"
               />
               <path
                  d="M302,237.55s.12-.06.32,0a1.17,1.17,0,0,1,.78.42,1.51,1.51,0,0,1,.28,1.32,1.6,1.6,0,0,1-1.32,1,1.33,1.33,0,0,1-1.37-.94A1.37,1.37,0,0,1,301,238c.53-.59,1.08-.5,1.06-.45s-.43.16-.76.67a1,1,0,0,0-.1.93.89.89,0,0,0,.87.6,1.2,1.2,0,0,0,.91-.65,1.23,1.23,0,0,0-.12-.95C302.5,237.66,302,237.65,302,237.55Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 302.028px 238.903px;"
                  id="elv1q0xi3x26f"
                  class="animable"
               />
               <path
                  d="M289,252.51h0a4.84,4.84,0,0,1-4.84-4.84V227.53A4.84,4.84,0,0,1,289,222.7h0a4.83,4.83,0,0,1,4.84,4.83v20.14A4.83,4.83,0,0,1,289,252.51Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 289px 237.605px;"
                  id="elj746ywiualr"
                  class="animable"
               />
               <path
                  d="M289,252.51s.25,0,.71-.11a5,5,0,0,0,1.86-.75,4.74,4.74,0,0,0,1.88-2.49,5.56,5.56,0,0,0,.23-2c0-.72,0-1.48,0-2.28,0-3.21,0-7-.06-11.23,0-2.1,0-4.36,0-6.61A4.59,4.59,0,0,0,289,223a4.53,4.53,0,0,0-3.1,1.22,4.61,4.61,0,0,0-1.46,2.9c-.05,2.25,0,4.51,0,6.61,0,4.21,0,8-.05,11.23,0,.8,0,1.56,0,2.28a5.35,5.35,0,0,0,.22,2,4.74,4.74,0,0,0,1.88,2.49,4.94,4.94,0,0,0,1.87.75c.45.09.7.08.7.11a2.64,2.64,0,0,1-.72,0,4.7,4.7,0,0,1-2-.69,4.89,4.89,0,0,1-2-2.56,5.53,5.53,0,0,1-.28-2.06c0-.72,0-1.48,0-2.28,0-3.21,0-7-.06-11.23,0-2.12,0-4.31,0-6.66a5.12,5.12,0,0,1,5.07-4.6,5.09,5.09,0,0,1,3.46,1.37A5.14,5.14,0,0,1,294,227c.05,2.35,0,4.54,0,6.66,0,4.21,0,8,0,11.23,0,.8,0,1.56,0,2.28a6,6,0,0,1-.28,2.06,5,5,0,0,1-2.05,2.56,4.7,4.7,0,0,1-2,.69A2.64,2.64,0,0,1,289,252.51Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 289.011px 237.562px;"
                  id="elk092ds8si8b"
                  class="animable"
               />
               <path
                  d="M288.94,231.24a1.38,1.38,0,0,0-1.16,1.14,1.21,1.21,0,0,0,.89,1.3,1.33,1.33,0,0,0,1.45-1,1.26,1.26,0,0,0-1.18-1.49"
                  style="fill: rgb(69, 90, 100); transform-origin: 288.957px 232.44px;"
                  id="el8kog90u3l6"
                  class="animable"
               />
               <path
                  d="M288.94,231.24s.11-.06.31,0a1.17,1.17,0,0,1,.78.42,1.51,1.51,0,0,1,.28,1.32,1.59,1.59,0,0,1-1.32,1,1.32,1.32,0,0,1-1.36-.94,1.37,1.37,0,0,1,.24-1.32c.54-.59,1.09-.5,1.07-.45s-.44.16-.77.67a1,1,0,0,0-.09.93.89.89,0,0,0,.86.6,1.19,1.19,0,0,0,.91-.65,1.23,1.23,0,0,0-.12-.95C289.41,231.35,288.9,231.34,288.94,231.24Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 288.957px 232.598px;"
                  id="elzaavoykd4df"
                  class="animable"
               />
               <path
                  d="M283.91,236.7a10.19,10.19,0,0,0,10,.76"
                  style="fill: rgb(69, 90, 100); transform-origin: 288.91px 237.562px;"
                  id="elj79jawm84dm"
                  class="animable"
               />
               <path
                  d="M293.9,237.46a3.22,3.22,0,0,1-1.38.72,9.44,9.44,0,0,1-7.36-.56c-.85-.46-1.29-.87-1.25-.92a16.4,16.4,0,0,0,4.92,1.43A16.09,16.09,0,0,0,293.9,237.46Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 288.904px 237.688px;"
                  id="eltmwr9aly1lc"
                  class="animable"
               />
               <path
                  d="M221.91,264.1h0A5,5,0,0,1,217,259l.56-36.58a5,5,0,0,1,5.1-4.94h0a5,5,0,0,1,4.94,5.1L227,259.16A5,5,0,0,1,221.91,264.1Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 222.3px 240.79px;"
                  id="elp5tdfsndddn"
                  class="animable"
               />
               <path
                  d="M221.91,264.1s.37,0,1-.15a5,5,0,0,0,2.57-1.46,4.91,4.91,0,0,0,1.1-1.84,7.6,7.6,0,0,0,.25-2.55c0-1.89,0-4,.06-6.39.06-4.75.13-10.39.21-16.64,0-3.13.09-6.42.13-9.83,0-.85,0-1.71,0-2.57a4.88,4.88,0,0,0-.56-2.4,4.75,4.75,0,0,0-8.33-.13,4.84,4.84,0,0,0-.63,2.38c0,.86,0,1.72,0,2.57-.06,3.41-.12,6.7-.17,9.83-.12,6.25-.23,11.89-.32,16.64,0,2.36-.09,4.5-.13,6.39a7.79,7.79,0,0,0,.17,2.56,5.11,5.11,0,0,0,1,1.87,5,5,0,0,0,2.52,1.54c.68.16,1,.15,1,.18a3.77,3.77,0,0,1-1.07-.08,5,5,0,0,1-2.65-1.51,5,5,0,0,1-1.12-1.93,7.82,7.82,0,0,1-.23-2.64c0-1.88,0-4,.06-6.39,0-4.75.12-10.38.2-16.64,0-3.13.09-6.42.14-9.82l0-2.58a5.45,5.45,0,0,1,.7-2.63,5.27,5.27,0,0,1,9.24.15,5.43,5.43,0,0,1,.62,2.64c0,.87,0,1.73-.05,2.58q-.09,5.12-.16,9.83c-.12,6.25-.23,11.88-.32,16.63-.05,2.37-.09,4.51-.14,6.39a7.7,7.7,0,0,1-.31,2.63,5.13,5.13,0,0,1-1.18,1.9,5.05,5.05,0,0,1-2.7,1.43A3.88,3.88,0,0,1,221.91,264.1Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 222.177px 240.665px;"
                  id="elh466w9mqoow"
                  class="animable"
               />
               <path
                  d="M258.32,237.15l.88,13.5a1.67,1.67,0,0,0,1.77,1.56l9.4-.61a1.68,1.68,0,0,0,1.56-1.78l-.88-13.5a1.67,1.67,0,0,0-1.77-1.56l-9.41.62A1.67,1.67,0,0,0,258.32,237.15Zm10.12,12.73-6,.39a1.66,1.66,0,0,1-1.77-1.55l-.62-9.5a1.67,1.67,0,0,1,1.56-1.77l6-.39a1.67,1.67,0,0,1,1.77,1.56l.62,9.49A1.67,1.67,0,0,1,268.44,249.88Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 265.125px 243.485px;"
                  id="elhp0fa3z93cs"
                  class="animable"
               />
               <path
                  d="M274.24,241.77a16.19,16.19,0,0,0-4.6-.69,15.86,15.86,0,0,0-4.5,1.15s.37-.42,1.16-.82a8.44,8.44,0,0,1,3.32-.85,8.71,8.71,0,0,1,3.38.51C273.83,241.39,274.27,241.72,274.24,241.77Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 269.691px 241.39px;"
                  id="elzqqe1sj4q2"
                  class="animable"
               />
               <path
                  d="M274.51,245.29a10.18,10.18,0,0,0-8.79.64s.33-.44,1.07-.87a7.69,7.69,0,0,1,6.53-.48C274.12,244.9,274.54,245.24,274.51,245.29Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 270.116px 245px;"
                  id="elzcf6fg3jo9q"
                  class="animable"
               />
            </g>
            <g
               id="freepik--error-403--inject-16"
               class="animable"
               style="transform-origin: 524.485px 161.03px;"
            >
               <g id="elxydidd83ik">
                  <rect
                     x="420.83"
                     y="58.62"
                     width="207.59"
                     height="207.59"
                     style="fill: rgb(255, 255, 255); transform-origin: 524.625px 162.415px; transform: rotate(-5.32deg);"
                     class="animable"
                  />
               </g>
               <path
                  d="M637.6,256.15s0-.33-.11-1-.16-1.6-.28-2.86c-.24-2.52-.6-6.24-1.07-11.09-.92-9.7-2.27-23.92-4-42-3.4-36.16-8.26-87.79-14.09-149.73l.32.26L411.71,69h0l.3-.36,19.2,206.7-.32-.26,149.77-13.79,42-3.84,11.1-1,2.85-.25,1-.07-.94.1-2.82.28-11,1.06-42,4L430.93,275.68l-.29,0,0-.29c-5.6-60.08-12.22-131-19.28-206.7l0-.33.33,0h0l206.68-19.2.29,0,0,.29c5.71,62,10.47,113.74,13.81,150,1.65,18.07,2.94,32.27,3.83,42,.43,4.83.77,8.53,1,11,.11,1.24.19,2.18.25,2.82S637.6,256.15,637.6,256.15Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 524.485px 162.42px;"
                  id="elcwio9idlpg6"
                  class="animable"
               />
               <g id="elx376gm76qjq">
                  <rect
                     x="421.71"
                     y="54.97"
                     width="9.11"
                     height="22.12"
                     style="fill: rgb(224, 224, 224); transform-origin: 426.265px 66.03px; transform: rotate(-5.32deg);"
                     class="animable"
                  />
               </g>
               <g id="elcr9eaq1zk">
                  <rect
                     x="440.97"
                     y="261.82"
                     width="9.11"
                     height="22.12"
                     style="fill: rgb(224, 224, 224); transform-origin: 445.525px 272.88px; transform: rotate(-5.32deg);"
                     class="animable"
                  />
               </g>
               <g id="elokjksc9a8fj">
                  <rect
                     x="602.74"
                     y="38.12"
                     width="9.11"
                     height="22.12"
                     style="fill: rgb(224, 224, 224); transform-origin: 607.295px 49.18px; transform: rotate(-5.32deg);"
                     class="animable"
                  />
               </g>
               <g id="elpvzc5vso0x">
                  <rect
                     x="622.12"
                     y="246.37"
                     width="9.11"
                     height="22.12"
                     style="fill: rgb(224, 224, 224); transform-origin: 626.675px 257.43px; transform: rotate(-5.32deg);"
                     class="animable"
                  />
               </g>
               <g id="el7jmf9l2g3tp">
                  <circle
                     cx="520.83"
                     cy="121.58"
                     r="45.4"
                     style="fill: rgb(255, 255, 255); transform-origin: 520.83px 121.58px; transform: rotate(-51.2deg);"
                     class="animable"
                  />
               </g>
               <path
                  d="M520.79,167.63a46,46,0,1,1,45.89-50.32h0a46.11,46.11,0,0,1-41.58,50.12C523.65,167.56,522.22,167.63,520.79,167.63Zm.07-90.82c-1.38,0-2.78.07-4.18.2a44.68,44.68,0,1,0,4.18-.2Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 520.878px 121.63px;"
                  id="el2ek4ujqmtrd"
                  class="animable"
               />
               <path
                  d="M541.93,116.35a3.19,3.19,0,0,0-5.13-.26,11.06,11.06,0,0,0-1.4,3.13c-.89,2.75-1.67,5.53-2.54,8.29-.09.29-.44.51-.67.76-.19-.28-.5-.55-.54-.86-.22-1.57-.4-3.15-.54-4.73-.29-3.11-.54-6.22-.82-9.32-.48-5.22-1-10.45-1.49-15.66a3.22,3.22,0,0,0-.69-1.62,3.06,3.06,0,0,0-3.53-.63,2.89,2.89,0,0,0-1.56,3q.76,8.31,1.54,16.61a2.32,2.32,0,0,1,0,.78c-.07.21-.31.48-.5.5a.81.81,0,0,1-.57-.4,2.09,2.09,0,0,1-.12-.76l-1.8-19.3a10,10,0,0,0-.14-1.21,2.25,2.25,0,0,0-2-1.94,3,3,0,0,0-3.73,3.46q.87,9.51,1.77,19a5.31,5.31,0,0,1,0,1.12.71.71,0,0,1-.45.5.74.74,0,0,1-.58-.36,3.45,3.45,0,0,1-.16-1c-.48-5.08-.93-10.15-1.43-15.23a2.92,2.92,0,0,0-5.81.56q.74,8.1,1.5,16.18a3.45,3.45,0,0,1,.06,1,3.34,3.34,0,0,1-.47.81c-.23-.24-.64-.46-.67-.72-.22-1.95-.36-3.92-.54-5.88s-.36-4.16-.59-6.23a2.74,2.74,0,0,0-3.25-2.39,2.53,2.53,0,0,0-2.34,2.88q.4,6.1.79,12.22h0c.23,2.48.43,5,.55,7.45a37.64,37.64,0,0,0,3.28,14.37,13.36,13.36,0,0,0,10,7.89,19.33,19.33,0,0,0,14.12-2.84,13,13,0,0,0,6-7.73c1.65-6.29,3.17-12.61,4.67-18.93A3.65,3.65,0,0,0,541.93,116.35Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 522.496px 120.655px;"
                  id="ell5zvyzdbn5g"
                  class="animable"
               />
               <path
                  d="M477,235.61l.13,1.47-8.61.8L467.45,226l8.38-.78.14,1.47-6.68.63.33,3.64,6-.55.13,1.44-5.95.56.36,3.83Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 472.29px 231.55px;"
                  id="elhxiyktrms5"
                  class="animable"
               />
               <path
                  d="M483.67,227.32l.15,1.58-.38,0c-1.74.16-2.73,1.33-2.55,3.3l.42,4.48-1.63.15-.84-9,1.57-.15.14,1.51A3.44,3.44,0,0,1,483.67,227.32Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 481.33px 232.075px;"
                  id="el5708pp9wbf"
                  class="animable"
               />
               <path
                  d="M490.5,226.69l.15,1.57-.37,0c-1.75.17-2.74,1.34-2.55,3.3l.41,4.48-1.63.15-.83-9,1.56-.14.14,1.51A3.43,3.43,0,0,1,490.5,226.69Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 488.165px 231.44px;"
                  id="elqk1vvbdgzm"
                  class="animable"
               />
               <path
                  d="M492,231.17a4.7,4.7,0,1,1,5.11,4.16A4.5,4.5,0,0,1,492,231.17Zm7.71-.72A3,3,0,1,0,497,233.9,3,3,0,0,0,499.72,230.45Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 496.671px 230.662px;"
                  id="elgjerihlz6qr"
                  class="animable"
               />
               <path
                  d="M508,225.06l.15,1.57-.38,0c-1.74.16-2.73,1.33-2.55,3.3l.42,4.48-1.63.15-.83-9,1.56-.14.14,1.51A3.41,3.41,0,0,1,508,225.06Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 505.665px 229.81px;"
                  id="el21joglu0wac"
                  class="animable"
               />
               <path
                  d="M516.51,222.93l.39,4.14,6-.55L523,228l-6,.56.45,4.8-1.7.16-1.1-11.88,8.38-.78.14,1.48Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 518.91px 227.19px;"
                  id="el38t7txa1ej2"
                  class="animable"
               />
               <path
                  d="M524.78,228.12a4.69,4.69,0,1,1,5.11,4.16A4.49,4.49,0,0,1,524.78,228.12Zm7.7-.72a3,3,0,1,0-2.73,3.45A3,3,0,0,0,532.48,227.4Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 529.442px 227.623px;"
                  id="elhsr8oxt6vww"
                  class="animable"
               />
               <path
                  d="M540.78,222l.15,1.57-.38,0c-1.74.16-2.73,1.33-2.55,3.3l.42,4.48-1.63.15-.83-9,1.56-.14.14,1.51A3.43,3.43,0,0,1,540.78,222Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 538.445px 226.75px;"
                  id="elo0t3gto4s1m"
                  class="animable"
               />
               <path
                  d="M552.52,225.53a4.39,4.39,0,0,1-4.12,5,3.8,3.8,0,0,1-3.35-1.22l.14,1.42-1.57.15-1.17-12.59,1.63-.15.46,5a3.85,3.85,0,0,1,3-1.73A4.38,4.38,0,0,1,552.52,225.53Zm-1.65.16a3,3,0,1,0-2.74,3.45A3,3,0,0,0,550.87,225.69Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 547.507px 224.51px;"
                  id="elj31q55fwsr"
                  class="animable"
               />
               <path
                  d="M553.81,218.07a1.07,1.07,0,0,1,1-1.17,1.06,1.06,0,0,1,1.2.93,1.07,1.07,0,0,1-1,1.19A1.05,1.05,0,0,1,553.81,218.07Zm.54,2.76,1.63-.15.84,9-1.63.15Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 555.313px 223.36px;"
                  id="elt5ne2v4cegh"
                  class="animable"
               />
               <path
                  d="M567.23,216l1.17,12.59-1.56.14-.13-1.42a3.82,3.82,0,0,1-3.06,1.83,4.61,4.61,0,0,1-.86-9.18,3.82,3.82,0,0,1,3.27,1.15l-.46-5Zm-.86,8.24a3,3,0,1,0-2.72,3.46A3,3,0,0,0,566.37,224.24Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 563.505px 222.58px;"
                  id="el9neb0dgh9ql"
                  class="animable"
               />
               <path
                  d="M578.79,214.93,580,227.51l-1.56.15-.13-1.43a3.82,3.82,0,0,1-3.07,1.83,4.61,4.61,0,0,1-.85-9.18,3.83,3.83,0,0,1,3.27,1.15l-.46-4.95Zm-.85,8.24a3,3,0,1,0-2.73,3.45A3,3,0,0,0,577.94,223.17Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 575.132px 221.502px;"
                  id="elkhuy65dnz5l"
                  class="animable"
               />
               <path
                  d="M590.77,222.52l-7.29.68a3,3,0,0,0,3.5,2.32,3.37,3.37,0,0,0,2.5-1.32l1,1a4.92,4.92,0,0,1-8.67-2.36,4.42,4.42,0,0,1,4.09-5,4.35,4.35,0,0,1,4.87,4.21A2.77,2.77,0,0,1,590.77,222.52Zm-7.4-.49,5.77-.54a2.92,2.92,0,0,0-5.77.54Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 586.275px 222.407px;"
                  id="elou9013astq8"
                  class="animable"
               />
               <path
                  d="M601.48,220.29l.48,5.17-1.63.16-.46-5c-.17-1.76-1.13-2.55-2.67-2.4a2.68,2.68,0,0,0-2.57,3.25l.43,4.63-1.63.15-.84-9,1.56-.15.13,1.36a3.86,3.86,0,0,1,3.11-1.74C599.57,216.53,601.23,217.65,601.48,220.29Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 597.275px 221.475px;"
                  id="ellh9yv6cbbp"
                  class="animable"
               />
               <path
                  d="M508.2,206.21l-6.69.62.8,8.59-6.81.64-.8-8.59L474,209.4l-.46-4.87,16.37-26.09,7.51-.7L482,202.66l12.37-1.16-.71-7.61,6.59-.62.71,7.62,6.7-.62Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 490.87px 196.9px;"
                  id="elxo9bqz3qwcl"
                  class="animable"
               />
               <path
                  d="M510.21,195.61c-1.15-12.42,5-20.08,14-20.91s16.48,5.55,17.64,18-5,20.08-14,20.92S511.37,208,510.21,195.61Zm24.53-2.28c-.85-9.13-4.81-13-10-12.53s-8.31,5-7.46,14.16,4.81,13,9.94,12.53S535.59,202.46,534.74,193.33Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 526.031px 194.16px;"
                  id="elc155d41qcl6"
                  class="animable"
               />
               <path
                  d="M573.58,197.34c.59,6.38-3.7,12.34-13.86,13.28-5.34.5-10.84-.62-14.61-3.05l2.52-5.74a17.73,17.73,0,0,0,11.42,2.7c5-.47,7.79-3,7.46-6.47s-3-5.39-8.73-4.86l-3.46.32-.45-4.8,7.64-11-17.18,1.6-.55-5.89,25.77-2.4.44,4.7-8.17,11.77C569,187.74,573.05,191.67,573.58,197.34Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 558.707px 190.883px;"
                  id="el7jon1gx33dc"
                  class="animable"
               />
            </g>
            <defs>
               <filter id="active" height="200%">
                  <feMorphology in="SourceAlpha" result="DILATED" operator="dilate" radius="2" />
                  <feFlood flood-color="#32DFEC" flood-opacity="1" result="PINK" />
                  <feComposite in="PINK" in2="DILATED" operator="in" result="OUTLINE" />
                  <feMerge>
                     <feMergeNode in="OUTLINE" />
                     <feMergeNode in="SourceGraphic" />
                  </feMerge>
               </filter>
               <filter id="hover" height="200%">
                  <feMorphology in="SourceAlpha" result="DILATED" operator="dilate" radius="2" />
                  <feFlood flood-color="#ff0000" flood-opacity="0.5" result="PINK" />
                  <feComposite in="PINK" in2="DILATED" operator="in" result="OUTLINE" />
                  <feMerge>
                     <feMergeNode in="OUTLINE" />
                     <feMergeNode in="SourceGraphic" />
                  </feMerge>
                  <feColorMatrix
                     type="matrix"
                     values="0   0   0   0   0                0   1   0   0   0                0   0   0   0   0                0   0   0   1   0 "
                  />
               </filter>
            </defs>
         </svg>
         <svg
            v-if="error.statusCode == 500"
            class="animated"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 750 500"
            version="1.1"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.com/svgjs"
         >
            <style>
  svg:not(.animated) .animable {
    opacity: 0;
  }
  .animated #freepik--background-complete--inject-64 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideDown;
    animation-delay: 0s;
  }
  .animated #freepik--Servers--inject-64 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideDown;
    animation-delay: 0s;
  }
  .animated #freepik--speech-bubble--inject-64 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) lightSpeedLeft;
    animation-delay: 0s;
  }
  .animated #freepik--Device--inject-64 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideRight;
    animation-delay: 0s;
  }
  .animated #freepik--Plant--inject-64 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideRight;
    animation-delay: 0s;
  }
  .animated #freepik--Floor--inject-64 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) lightSpeedLeft;
    animation-delay: 0s;
  }
  .animated #freepik--Character--inject-64 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideUp;
    animation-delay: 0s;
  }
  @keyframes slideDown {
    0% {
      opacity: 0;
      transform: translateY(-30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes lightSpeedLeft {
    from {
      transform: translate3d(-50%, 0, 0) skewX(20deg);
      opacity: 0;
    }
    60% {
      transform: skewX(-10deg);
      opacity: 1;
    }
    80% {
      transform: skewX(2deg);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes slideRight {
    0% {
      opacity: 0;
      transform: translateX(30px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes slideUp {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: inherit;
    }
  }
            </style>
            <g
               id="freepik--background-complete--inject-64"
               class="animable"
               style="transform-origin: 376.805px 245.332px;"
            >
               <path
                  d="M617.45,292.8c-15.48-13.28-17.1-35.23-14.51-54.55.43-3.23.42-6.68,2.24-9.36s5.61-4.27,8.37-2.62c2.29,1.37,3.06,4.27,4.18,6.72a19.06,19.06,0,0,0,6.86,8c2,1.27,4.44,2.18,6.59,1.26,3-1.26,3.66-5.09,4-8.31l1.68-18c.3-3.22.62-6.51,1.93-9.46s3.8-5.57,7-6.13,6.76,1.59,7.09,4.81a30.36,30.36,0,0,1-.31,4c0,1.34.43,2.88,1.66,3.38s2.63-.28,3.69-1.12c3.64-2.92,6.31-6.88,8.84-10.84s5-8,8.36-11.26,7.82-5.63,12.45-5.44,9.27,3.54,10,8.18-2.39,9-5.64,12.38a71.85,71.85,0,0,1-16.38,12.77,6,6,0,0,0-2.77,2.44c-.91,2.08.91,4.41,3,5.33,2.32,1,4.94,1.05,7.42,1.6s5.09,1.92,5.81,4.39c1,3.42-2.11,6.59-5,8.58a61.86,61.86,0,0,1-19.27,8.7c-2.45.63-5,1.14-7.1,2.62s-3.51,4.25-2.59,6.63,3.82,3.41,6.35,3.19,4.88-1.33,7.33-2c4.59-1.23,10.27-.35,12.73,3.75,1.61,2.7,1.42,6.22.18,9.12a23.58,23.58,0,0,1-5.67,7.47A62.3,62.3,0,0,1,647.5,295c-10.62,2.53-20.23,2.55-30-2.2"
                  style="fill: rgb(245, 245, 245); transform-origin: 649.807px 240.281px;"
                  id="elvh0r6n189j"
                  class="animable"
               />
               <path
                  d="M623.67,281.14a289.21,289.21,0,0,1,14.54-29.91c1.43-2.58,2.83-5.13,4.22-7.65s2.77-5,4.26-7.34a146.66,146.66,0,0,1,9.38-13c3.19-4,6.35-7.66,9.34-11.07s5.84-6.53,8.56-9.26A116.75,116.75,0,0,1,687.75,191c1.73-1.27,3.11-2.22,4-2.85l1.07-.71.38-.22a2.28,2.28,0,0,1-.34.28l-1,.75c-.92.66-2.27,1.64-4,2.94a122,122,0,0,0-13.62,12.05c-2.69,2.74-5.52,5.87-8.49,9.29s-6.12,7.1-9.28,11.08a146.89,146.89,0,0,0-9.32,13c-1.48,2.34-2.84,4.8-4.24,7.32l-4.21,7.64a298.06,298.06,0,0,0-14.56,29.83"
                  style="fill: rgb(224, 224, 224); transform-origin: 658.435px 234.31px;"
                  id="el322lctp1yoy"
                  class="animable"
               />
               <path
                  d="M646.87,236.24a5.48,5.48,0,0,1-.18-1.41c-.08-.9-.16-2.22-.22-3.84-.14-3.25-.17-7.75-.19-12.71s-.12-9.44-.3-12.68c-.09-1.62-.17-2.93-.24-3.83a6.17,6.17,0,0,1,0-1.42,7,7,0,0,1,.27,1.39c.14.9.29,2.21.43,3.83.29,3.25.46,7.75.47,12.71s0,9.31,0,12.7c0,1.52,0,2.81,0,3.84A7.22,7.22,0,0,1,646.87,236.24Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 646.313px 218.295px;"
                  id="elku5t7ey6dj"
                  class="animable"
               />
               <path
                  d="M689,232.63a9.21,9.21,0,0,1-1.68,0c-1.07,0-2.62,0-4.53,0-3.83,0-9.13.26-15,.77s-11.08,1.21-14.87,1.82c-1.9.29-3.42.57-4.48.75a9.45,9.45,0,0,1-1.65.24,8.42,8.42,0,0,1,1.6-.47c1-.25,2.57-.59,4.46-.94,3.78-.72,9-1.49,14.89-2a148.52,148.52,0,0,1,15-.59c1.92,0,3.47.12,4.55.2A9.19,9.19,0,0,1,689,232.63Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 667.895px 234.205px;"
                  id="el7ev5mjq7s5a"
                  class="animable"
               />
               <path
                  d="M624.25,280.43a1.82,1.82,0,0,1-.23-.53c-.15-.42-.34-.94-.56-1.57-.48-1.36-1.12-3.35-1.88-5.82-1.53-4.94-3.42-11.83-5.4-19.47s-3.81-14.53-5.23-19.5c-.69-2.41-1.27-4.4-1.7-5.87l-.45-1.6a2,2,0,0,1-.12-.58,2.46,2.46,0,0,1,.24.54l.55,1.57c.48,1.36,1.13,3.35,1.89,5.82,1.52,4.94,3.41,11.83,5.39,19.47s3.81,14.53,5.23,19.49l1.7,5.88.45,1.6A2.08,2.08,0,0,1,624.25,280.43Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 616.465px 252.96px;"
                  id="elvrl72fave4o"
                  class="animable"
               />
               <path
                  d="M681,268.19a2.38,2.38,0,0,1-.57.17l-1.65.38-6.08,1.32c-5.14,1.12-12.21,2.74-20,4.55S637.79,278,632.63,279c-2.58.51-4.67.9-6.12,1.14l-1.67.26a1.88,1.88,0,0,1-.59.05,2.19,2.19,0,0,1,.57-.17l1.65-.37,6.08-1.32c5.13-1.12,12.21-2.75,20-4.55s14.91-3.37,20.06-4.38c2.58-.5,4.67-.89,6.13-1.13l1.67-.27A2.36,2.36,0,0,1,681,268.19Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 652.625px 274.323px;"
                  id="el5i4gsjpgnj5"
                  class="animable"
               />
               <path
                  d="M654.75,152.2a9.09,9.09,0,0,1-10.65-11.56l15.54-50a9,9,0,0,1,6.67-6.17h0a9,9,0,0,1,8.65,2.7l35.53,38.45a9.08,9.08,0,0,1-4.67,15L654.78,152.2Zm12.18-65.09h0a6.29,6.29,0,0,0-4.68,4.32l-15.54,50a6.38,6.38,0,0,0,7.47,8.11h0L705.25,138a6.37,6.37,0,0,0,3.28-10.54L673,89A6.29,6.29,0,0,0,666.93,87.11Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 678.29px 118.329px;"
                  id="elvzwz0mh3pvn"
                  class="animable"
               />
               <path
                  d="M673.44,133a3.34,3.34,0,0,1,2.67-4,3.31,3.31,0,0,1,4.09,2.48,3.36,3.36,0,0,1-2.58,4.07A3.39,3.39,0,0,1,673.44,133Zm-5.83-26.65,6.25-1.44,3.5,20-4.18,1Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 673.951px 120.287px;"
                  id="eloe59akoljzr"
                  class="animable"
               />
               <path
                  d="M42.82,291.62s-6.44,3.62,3.25,17,16,19.83,16,19.83,1.84,3.17-.92,4.14-9.19.94-9.92,4.62,2.4,6.82,8.18,9,18.28,7.38,19.41,7.85,2.37,1.88.59,2.84S63.72,361.54,65.85,368s19.23,9.86,21.1,10.27,2.4,1.08,2.4,2.07-4.77,1.78-8.67,3-8.22,3.28-6.68,6.91,12.37,10.1,36,8.77l10.91-1.33,4.49-10.09c8.29-22.19,5.34-34.44,2.32-37s-6.28.95-8.58,4.32-4.48,7.7-5.42,7.4-1.43-1-1.27-2.91,2-19.24-3.54-23.2-13.16,8.21-14.61,9.62-2.42-.21-2.54-1.41-1.38-14.7-1.73-20.86-2.28-10.07-6.15-10.48-5.61,5.74-7.35,8.09-4.23-.34-4.23-.34S68,313,58.11,299.71s-15.41-8-15.41-8"
                  style="fill: rgb(235, 235, 235); transform-origin: 85.7636px 344.934px;"
                  id="elqigr5pjq6m8"
                  class="animable"
               />
               <path
                  d="M121.88,400.16c-7.25-9.75-19.86-27.3-30.76-42.31s-20.78-28.57-28-38.36l-8.55-11.58-2.32-3.15-.6-.83c-.13-.18-.19-.28-.19-.28a3.08,3.08,0,0,1,.22.26c.15.19.36.46.62.81.56.72,1.35,1.77,2.38,3.11,2.06,2.7,5,6.64,8.63,11.52,7.26,9.75,17.17,23.3,28.07,38.3s23.47,32.58,30.68,42.36"
                  style="fill: rgb(224, 224, 224); transform-origin: 86.76px 351.905px;"
                  id="elh7m5zs7d90w"
                  class="animable"
               />
               <path
                  d="M60.17,337.65a3.75,3.75,0,0,1,.79.09c.51.08,1.24.22,2.13.4,1.79.36,4.25.92,7,1.58L77,341.45l2.1.51a3.74,3.74,0,0,1,.76.22,3.12,3.12,0,0,1-.79-.09c-.5-.08-1.23-.21-2.12-.4-1.79-.38-4.25-1-7-1.64L63,338.37l-2.1-.5A4,4,0,0,1,60.17,337.65Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 70.015px 339.915px;"
                  id="elq8euyzx3so"
                  class="animable"
               />
               <path
                  d="M80.47,341.37c-.09,0,.83-5.14,2.07-11.45s2.32-11.4,2.41-11.38-.83,5.14-2.07,11.45S80.56,341.39,80.47,341.37Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 82.71px 329.955px;"
                  id="el336nosjinzo"
                  class="animable"
               />
               <path
                  d="M96.17,365.17a4.11,4.11,0,0,1,.33-.74l1-2c.85-1.65,2-4,3.22-6.52s2.21-4.94,2.92-6.66c.34-.81.63-1.49.85-2a4.13,4.13,0,0,1,.35-.73,4.19,4.19,0,0,1-.22.78c-.17.49-.42,1.21-.75,2.08-.66,1.74-1.64,4.13-2.84,6.71s-2.41,4.87-3.32,6.5c-.46.81-.84,1.46-1.11,1.91A3.88,3.88,0,0,1,96.17,365.17Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 100.505px 355.845px;"
                  id="el0a8aotvc1p6"
                  class="animable"
               />
               <path
                  d="M77.07,365.84a4.14,4.14,0,0,1,.74-.1l2-.15c1.72-.11,4.09-.25,6.72-.37s5-.22,6.72-.28l2,0a3.71,3.71,0,0,1,.75,0,3.23,3.23,0,0,1-.74.1l-2,.15c-1.72.12-4.09.25-6.72.38s-5,.22-6.72.27l-2,0A2.47,2.47,0,0,1,77.07,365.84Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 86.535px 365.395px;"
                  id="elshfuos1se5g"
                  class="animable"
               />
               <path
                  d="M88.26,388.61a6.43,6.43,0,0,1,.95-.12l2.61-.2c2.2-.16,5.24-.36,8.61-.55s6.41-.35,8.61-.45l2.61-.09a5.08,5.08,0,0,1,1,0,4.72,4.72,0,0,1-1,.12l-2.61.21c-2.2.15-5.24.35-8.6.54s-6.41.35-8.62.45l-2.61.09A4.18,4.18,0,0,1,88.26,388.61Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 100.455px 387.906px;"
                  id="el8bs2l4sauz"
                  class="animable"
               />
               <path
                  d="M112,387.08a6.62,6.62,0,0,1,.41-.95c.3-.65.71-1.5,1.19-2.53,1-2.14,2.39-5.1,3.82-8.4s2.66-6.34,3.53-8.54c.41-1.05.76-1.93,1-2.6a5.34,5.34,0,0,1,.41-.94,5.68,5.68,0,0,1-.29,1c-.21.63-.52,1.54-.93,2.65-.81,2.22-2,5.27-3.44,8.58s-2.85,6.26-3.91,8.38c-.54,1.05-1,1.9-1.3,2.48A5.8,5.8,0,0,1,112,387.08Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 117.18px 375.1px;"
                  id="el2h0gacdrolf"
                  class="animable"
               />
               <rect
                  x="116.58"
                  y="87.39"
                  width="104.14"
                  height="319.03"
                  style="fill: rgb(245, 245, 245); transform-origin: 168.65px 246.905px;"
                  id="el3iglhocggk9"
                  class="animable"
               />
               <rect
                  x="220.4"
                  y="87.39"
                  width="82.31"
                  height="319.03"
                  style="fill: rgb(250, 250, 250); transform-origin: 261.555px 246.905px;"
                  id="elx9r8dh30y8t"
                  class="animable"
               />
               <rect
                  x="122.17"
                  y="138.45"
                  width="88.34"
                  height="24.87"
                  style="fill: rgb(224, 224, 224); transform-origin: 166.34px 150.885px;"
                  id="el3un5ug1loun"
                  class="animable"
               />
               <rect
                  x="124.63"
                  y="141.57"
                  width="4.95"
                  height="19.04"
                  style="fill: rgb(245, 245, 245); transform-origin: 127.105px 151.09px;"
                  id="elvkyzk8utew"
                  class="animable"
               />
               <path
                  d="M135.41,145.58a1.58,1.58,0,1,1-1.57-1.57A1.57,1.57,0,0,1,135.41,145.58Z"
                  style="fill: rgb(250, 250, 250); transform-origin: 133.83px 145.59px;"
                  id="elxmm4t10gyu"
                  class="animable"
               />
               <path
                  d="M135.41,152.3a1.58,1.58,0,1,1-1.57-1.57A1.58,1.58,0,0,1,135.41,152.3Z"
                  style="fill: rgb(250, 250, 250); transform-origin: 133.83px 152.31px;"
                  id="elro3n6s62olq"
                  class="animable"
               />
               <rect
                  x="141.69"
                  y="144.01"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 144.12px 151.32px;"
                  id="el3g20kqws6qc"
                  class="animable"
               />
               <rect
                  x="148.71"
                  y="144.01"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 151.14px 151.32px;"
                  id="elzmhtoo9roy"
                  class="animable"
               />
               <rect
                  x="155.74"
                  y="144.01"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 158.17px 151.32px;"
                  id="el1hmrzehcj2x"
                  class="animable"
               />
               <rect
                  x="162.76"
                  y="144.01"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 165.19px 151.32px;"
                  id="elzu2ty9fv5j"
                  class="animable"
               />
               <rect
                  x="169.78"
                  y="144.01"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 172.21px 151.32px;"
                  id="el6wtb93z8sux"
                  class="animable"
               />
               <rect
                  x="176.8"
                  y="144.01"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 179.23px 151.32px;"
                  id="eldqlhi32vc54"
                  class="animable"
               />
               <rect
                  x="183.82"
                  y="144.01"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 186.25px 151.32px;"
                  id="elqpznr6un1hh"
                  class="animable"
               />
               <rect
                  x="190.84"
                  y="144.01"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 193.27px 151.32px;"
                  id="ellhjpklktqo"
                  class="animable"
               />
               <rect
                  x="197.87"
                  y="144.01"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 200.3px 151.32px;"
                  id="elm6yz84hohjr"
                  class="animable"
               />
               <rect
                  x="204.89"
                  y="144.01"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 207.32px 151.32px;"
                  id="elxd4dw8gtiil"
                  class="animable"
               />
               <rect
                  x="122.17"
                  y="178.28"
                  width="88.34"
                  height="24.87"
                  style="fill: rgb(224, 224, 224); transform-origin: 166.34px 190.715px;"
                  id="el1ilhwgpj63u"
                  class="animable"
               />
               <rect
                  x="124.63"
                  y="181.41"
                  width="4.95"
                  height="19.04"
                  style="fill: rgb(245, 245, 245); transform-origin: 127.105px 190.93px;"
                  id="elgs7sb9z7hiw"
                  class="animable"
               />
               <path
                  d="M135.41,185.42a1.58,1.58,0,1,1-1.57-1.58A1.58,1.58,0,0,1,135.41,185.42Z"
                  style="fill: rgb(250, 250, 250); transform-origin: 133.83px 185.42px;"
                  id="el7qhjqbq7ug8"
                  class="animable"
               />
               <circle
                  cx="133.84"
                  cy="192.14"
                  r="1.57"
                  style="fill: rgb(250, 250, 250); transform-origin: 133.84px 192.14px;"
                  id="elc16x0y2n3cd"
                  class="animable"
               />
               <rect
                  x="141.69"
                  y="183.84"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 144.12px 191.15px;"
                  id="el685d3u37h1"
                  class="animable"
               />
               <rect
                  x="148.71"
                  y="183.84"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 151.14px 191.15px;"
                  id="el24wn3y2qtkv"
                  class="animable"
               />
               <rect
                  x="155.74"
                  y="183.84"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 158.17px 191.15px;"
                  id="el0m6duir3u9cq"
                  class="animable"
               />
               <rect
                  x="162.76"
                  y="183.84"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 165.19px 191.15px;"
                  id="elv7qu39vwd5b"
                  class="animable"
               />
               <rect
                  x="169.78"
                  y="183.84"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 172.21px 191.15px;"
                  id="elc3qt1nnudif"
                  class="animable"
               />
               <rect
                  x="176.8"
                  y="183.84"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 179.23px 191.15px;"
                  id="elex1hs9u742e"
                  class="animable"
               />
               <rect
                  x="183.82"
                  y="183.84"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 186.25px 191.15px;"
                  id="elduj9sp0md9s"
                  class="animable"
               />
               <rect
                  x="190.84"
                  y="183.84"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 193.27px 191.15px;"
                  id="elg1r4tbtgapk"
                  class="animable"
               />
               <rect
                  x="197.87"
                  y="183.84"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 200.3px 191.15px;"
                  id="ellwbh7tksgx"
                  class="animable"
               />
               <rect
                  x="204.89"
                  y="183.84"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 207.32px 191.15px;"
                  id="el6j6h4ibq2zq"
                  class="animable"
               />
               <rect
                  x="122.17"
                  y="218.12"
                  width="88.34"
                  height="24.87"
                  style="fill: rgb(224, 224, 224); transform-origin: 166.34px 230.555px;"
                  id="elw5wztmrqagj"
                  class="animable"
               />
               <rect
                  x="124.63"
                  y="221.25"
                  width="4.95"
                  height="19.04"
                  style="fill: rgb(245, 245, 245); transform-origin: 127.105px 230.77px;"
                  id="el1i8y8wbmz2a"
                  class="animable"
               />
               <path
                  d="M135.41,225.25a1.58,1.58,0,1,1-1.57-1.57A1.58,1.58,0,0,1,135.41,225.25Z"
                  style="fill: rgb(250, 250, 250); transform-origin: 133.83px 225.26px;"
                  id="el9fwbz2cvec"
                  class="animable"
               />
               <circle
                  cx="133.84"
                  cy="231.98"
                  r="1.57"
                  style="fill: rgb(250, 250, 250); transform-origin: 133.84px 231.98px;"
                  id="elywuxixb3sss"
                  class="animable"
               />
               <rect
                  x="141.69"
                  y="223.68"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 144.12px 230.99px;"
                  id="elc1cbey4sisv"
                  class="animable"
               />
               <rect
                  x="148.71"
                  y="223.68"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 151.14px 230.99px;"
                  id="eljvdr4b3yged"
                  class="animable"
               />
               <rect
                  x="155.74"
                  y="223.68"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 158.17px 230.99px;"
                  id="elfygo8p72mrb"
                  class="animable"
               />
               <rect
                  x="162.76"
                  y="223.68"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 165.19px 230.99px;"
                  id="elrew9tnfkzui"
                  class="animable"
               />
               <rect
                  x="169.78"
                  y="223.68"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 172.21px 230.99px;"
                  id="elw2f2447z3e"
                  class="animable"
               />
               <rect
                  x="176.8"
                  y="223.68"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 179.23px 230.99px;"
                  id="eln9n53xdccgt"
                  class="animable"
               />
               <rect
                  x="183.82"
                  y="223.68"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 186.25px 230.99px;"
                  id="el50i5iwytbzw"
                  class="animable"
               />
               <rect
                  x="190.84"
                  y="223.68"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 193.27px 230.99px;"
                  id="elimqu1seor6"
                  class="animable"
               />
               <rect
                  x="197.87"
                  y="223.68"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 200.3px 230.99px;"
                  id="el6azki4jphyt"
                  class="animable"
               />
               <rect
                  x="204.89"
                  y="223.68"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 207.32px 230.99px;"
                  id="el6ew407160tc"
                  class="animable"
               />
               <rect
                  x="122.17"
                  y="257.96"
                  width="88.34"
                  height="24.87"
                  style="fill: rgb(224, 224, 224); transform-origin: 166.34px 270.395px;"
                  id="elutlspncsova"
                  class="animable"
               />
               <rect
                  x="124.63"
                  y="261.09"
                  width="4.95"
                  height="19.04"
                  style="fill: rgb(245, 245, 245); transform-origin: 127.105px 270.61px;"
                  id="elbng51q82lyc"
                  class="animable"
               />
               <path
                  d="M135.41,265.09a1.58,1.58,0,1,1-1.57-1.57A1.57,1.57,0,0,1,135.41,265.09Z"
                  style="fill: rgb(250, 250, 250); transform-origin: 133.83px 265.1px;"
                  id="elw94yjwm436"
                  class="animable"
               />
               <path
                  d="M135.41,271.82a1.58,1.58,0,1,1-1.57-1.58A1.57,1.57,0,0,1,135.41,271.82Z"
                  style="fill: rgb(250, 250, 250); transform-origin: 133.83px 271.82px;"
                  id="el2wkndvulap2"
                  class="animable"
               />
               <rect
                  x="141.69"
                  y="263.52"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 144.12px 270.83px;"
                  id="elmj3rh80qcl"
                  class="animable"
               />
               <rect
                  x="148.71"
                  y="263.52"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 151.14px 270.83px;"
                  id="elx3vd2eqeyq"
                  class="animable"
               />
               <rect
                  x="155.74"
                  y="263.52"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 158.17px 270.83px;"
                  id="elgdgwozapkgu"
                  class="animable"
               />
               <rect
                  x="162.76"
                  y="263.52"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 165.19px 270.83px;"
                  id="elr7pwraezay"
                  class="animable"
               />
               <rect
                  x="169.78"
                  y="263.52"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 172.21px 270.83px;"
                  id="elbw9ndyfptk6"
                  class="animable"
               />
               <rect
                  x="176.8"
                  y="263.52"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 179.23px 270.83px;"
                  id="el3eqvbygzuhb"
                  class="animable"
               />
               <rect
                  x="183.82"
                  y="263.52"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 186.25px 270.83px;"
                  id="ela8t2weu0rwl"
                  class="animable"
               />
               <rect
                  x="190.84"
                  y="263.52"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 193.27px 270.83px;"
                  id="elsevkaelibhi"
                  class="animable"
               />
               <rect
                  x="197.87"
                  y="263.52"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 200.3px 270.83px;"
                  id="elrrna9ngb5vm"
                  class="animable"
               />
               <rect
                  x="204.89"
                  y="263.52"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 207.32px 270.83px;"
                  id="el7xgx4eyipgb"
                  class="animable"
               />
               <rect
                  x="122.17"
                  y="297.8"
                  width="88.34"
                  height="24.87"
                  style="fill: rgb(224, 224, 224); transform-origin: 166.34px 310.235px;"
                  id="elrhcqtd4542i"
                  class="animable"
               />
               <rect
                  x="124.63"
                  y="300.92"
                  width="4.95"
                  height="19.04"
                  style="fill: rgb(245, 245, 245); transform-origin: 127.105px 310.44px;"
                  id="elalcvz9kgp78"
                  class="animable"
               />
               <path
                  d="M135.41,304.93a1.58,1.58,0,1,1-1.57-1.57A1.57,1.57,0,0,1,135.41,304.93Z"
                  style="fill: rgb(250, 250, 250); transform-origin: 133.83px 304.94px;"
                  id="elosx2uk5cjee"
                  class="animable"
               />
               <circle
                  cx="133.84"
                  cy="311.65"
                  r="1.57"
                  style="fill: rgb(250, 250, 250); transform-origin: 133.84px 311.65px;"
                  id="el6pbsbkbha4v"
                  class="animable"
               />
               <rect
                  x="141.69"
                  y="303.36"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 144.12px 310.67px;"
                  id="elwealp8bz9e"
                  class="animable"
               />
               <rect
                  x="148.71"
                  y="303.36"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 151.14px 310.67px;"
                  id="el8zikvuzeoud"
                  class="animable"
               />
               <rect
                  x="155.74"
                  y="303.36"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 158.17px 310.67px;"
                  id="eler8eggxvjjw"
                  class="animable"
               />
               <rect
                  x="162.76"
                  y="303.36"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 165.19px 310.67px;"
                  id="el46hr8l84b2s"
                  class="animable"
               />
               <rect
                  x="169.78"
                  y="303.36"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 172.21px 310.67px;"
                  id="el0m3uehjxakva"
                  class="animable"
               />
               <rect
                  x="176.8"
                  y="303.36"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 179.23px 310.67px;"
                  id="elqb9brgm1t6"
                  class="animable"
               />
               <rect
                  x="183.82"
                  y="303.36"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 186.25px 310.67px;"
                  id="eltjhbelxx32s"
                  class="animable"
               />
               <rect
                  x="190.84"
                  y="303.36"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 193.27px 310.67px;"
                  id="elzkctg735d7"
                  class="animable"
               />
               <rect
                  x="197.87"
                  y="303.36"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 200.3px 310.67px;"
                  id="eluofg601obob"
                  class="animable"
               />
               <rect
                  x="204.89"
                  y="303.36"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 207.32px 310.67px;"
                  id="el9rybqkfdjop"
                  class="animable"
               />
               <rect
                  x="122.17"
                  y="337.64"
                  width="88.34"
                  height="24.87"
                  style="fill: rgb(224, 224, 224); transform-origin: 166.34px 350.075px;"
                  id="el8jhuehpvp3a"
                  class="animable"
               />
               <rect
                  x="124.63"
                  y="340.76"
                  width="4.95"
                  height="19.04"
                  style="fill: rgb(245, 245, 245); transform-origin: 127.105px 350.28px;"
                  id="elem5hps8c7g6"
                  class="animable"
               />
               <path
                  d="M135.41,344.77a1.58,1.58,0,1,1-1.57-1.58A1.58,1.58,0,0,1,135.41,344.77Z"
                  style="fill: rgb(250, 250, 250); transform-origin: 133.83px 344.77px;"
                  id="elvofzyr4bn6n"
                  class="animable"
               />
               <path
                  d="M135.41,351.49a1.58,1.58,0,1,1-1.57-1.57A1.57,1.57,0,0,1,135.41,351.49Z"
                  style="fill: rgb(250, 250, 250); transform-origin: 133.83px 351.5px;"
                  id="elaxpigci7wrs"
                  class="animable"
               />
               <rect
                  x="141.69"
                  y="343.19"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 144.12px 350.5px;"
                  id="elkbv7u5ykkh9"
                  class="animable"
               />
               <rect
                  x="148.71"
                  y="343.19"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 151.14px 350.5px;"
                  id="el2ygnkqfw87"
                  class="animable"
               />
               <rect
                  x="155.74"
                  y="343.19"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 158.17px 350.5px;"
                  id="elq1ibmpokvwr"
                  class="animable"
               />
               <rect
                  x="162.76"
                  y="343.19"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 165.19px 350.5px;"
                  id="el5knjlzgnstp"
                  class="animable"
               />
               <rect
                  x="169.78"
                  y="343.19"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 172.21px 350.5px;"
                  id="el2axcbs28ewr"
                  class="animable"
               />
               <rect
                  x="176.8"
                  y="343.19"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 179.23px 350.5px;"
                  id="elnzydsgpabd"
                  class="animable"
               />
               <rect
                  x="183.82"
                  y="343.19"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 186.25px 350.5px;"
                  id="elj5qy9jgp21"
                  class="animable"
               />
               <rect
                  x="190.84"
                  y="343.19"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 193.27px 350.5px;"
                  id="el92p60si89ms"
                  class="animable"
               />
               <rect
                  x="197.87"
                  y="343.19"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 200.3px 350.5px;"
                  id="elrgbl9mfk16"
                  class="animable"
               />
               <rect
                  x="204.89"
                  y="343.19"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 207.32px 350.5px;"
                  id="elkp2mpguyrv"
                  class="animable"
               />
               <rect
                  x="122.17"
                  y="377.47"
                  width="88.34"
                  height="24.87"
                  style="fill: rgb(224, 224, 224); transform-origin: 166.34px 389.905px;"
                  id="el664idt9qsl3"
                  class="animable"
               />
               <rect
                  x="124.63"
                  y="380.6"
                  width="4.95"
                  height="19.04"
                  style="fill: rgb(245, 245, 245); transform-origin: 127.105px 390.12px;"
                  id="eln1ey05ieelr"
                  class="animable"
               />
               <path
                  d="M135.41,384.6a1.58,1.58,0,1,1-1.57-1.57A1.58,1.58,0,0,1,135.41,384.6Z"
                  style="fill: rgb(250, 250, 250); transform-origin: 133.83px 384.61px;"
                  id="elh29qcroiwc"
                  class="animable"
               />
               <circle
                  cx="133.84"
                  cy="391.33"
                  r="1.57"
                  style="fill: rgb(250, 250, 250); transform-origin: 133.84px 391.33px;"
                  id="elhcjku8kq3lv"
                  class="animable"
               />
               <rect
                  x="141.69"
                  y="383.03"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 144.12px 390.34px;"
                  id="elfli7urbncoi"
                  class="animable"
               />
               <rect
                  x="148.71"
                  y="383.03"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 151.14px 390.34px;"
                  id="el9fi24kifqgr"
                  class="animable"
               />
               <rect
                  x="155.74"
                  y="383.03"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 158.17px 390.34px;"
                  id="elfj8q42rj9aj"
                  class="animable"
               />
               <rect
                  x="162.76"
                  y="383.03"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 165.19px 390.34px;"
                  id="elawmslk2hfnn"
                  class="animable"
               />
               <rect
                  x="169.78"
                  y="383.03"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 172.21px 390.34px;"
                  id="eltc6rum11xy"
                  class="animable"
               />
               <rect
                  x="176.8"
                  y="383.03"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 179.23px 390.34px;"
                  id="elpa1shcys7rd"
                  class="animable"
               />
               <rect
                  x="183.82"
                  y="383.03"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 186.25px 390.34px;"
                  id="eljar6q5j1uc"
                  class="animable"
               />
               <rect
                  x="190.84"
                  y="383.03"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 193.27px 390.34px;"
                  id="el6at2y5mm7ms"
                  class="animable"
               />
               <rect
                  x="197.87"
                  y="383.03"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 200.3px 390.34px;"
                  id="elwoxb074uqw8"
                  class="animable"
               />
               <rect
                  x="204.89"
                  y="383.03"
                  width="4.86"
                  height="14.62"
                  style="fill: rgb(245, 245, 245); transform-origin: 207.32px 390.34px;"
                  id="elvkq0t3nlpx"
                  class="animable"
               />
               <path
                  d="M176.8,138.45a3.48,3.48,0,0,1-.1-.77c0-.51-.06-1.25-.09-2.21s-.05-2.13-.11-3.49a22.4,22.4,0,0,0-.61-4.53,16.25,16.25,0,0,0-2.36-5,11,11,0,0,0-4.83-3.89,23.55,23.55,0,0,0-6.86-1.39l-7.61-.65c-10.42-.91-19.88-1.49-26.73-1.62-3.43-.08-6.2-.06-8.12,0h-2.21a3.85,3.85,0,0,1-.77,0,3.34,3.34,0,0,1,.77-.1l2.2-.13c1.92-.09,4.7-.17,8.13-.15,6.87,0,16.35.52,26.79,1.43l7.61.67a23.71,23.71,0,0,1,7,1.47,11.41,11.41,0,0,1,5,4.12,16.58,16.58,0,0,1,2.37,5.15,21.94,21.94,0,0,1,.52,4.64c0,1.36,0,2.54,0,3.5s0,1.63,0,2.21A3.85,3.85,0,0,1,176.8,138.45Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 146.607px 126.483px;"
                  id="ellnoo03ld8gd"
                  class="animable"
               />
               <path
                  d="M150,138.45a3.47,3.47,0,0,1-.06-.73c0-.54,0-1.23,0-2.08s0-2-.11-3.27a10.09,10.09,0,0,0-1.09-4.09,7.79,7.79,0,0,0-4-3,11,11,0,0,0-5.8-.59,9.9,9.9,0,0,0-3,1,5.7,5.7,0,0,0-2.32,2.19,3.12,3.12,0,0,0,0,3.09,4.13,4.13,0,0,0,2.62,2,3.32,3.32,0,0,0,3.07-.89,4.41,4.41,0,0,0,.46-5.92,6.49,6.49,0,0,0-2.32-2,8.51,8.51,0,0,0-2.91-.75q-1.5-.22-2.91-.39c-1.88-.21-3.63-.33-5.24-.4-3.22-.13-5.83-.08-7.63-.09h-2.08a2.94,2.94,0,0,1-.73,0,3.2,3.2,0,0,1,.72-.08l2.08-.12c1.8-.07,4.42-.18,7.65-.11,1.62,0,3.39.13,5.29.32,1,.1,1.92.22,2.93.36.5.08,1,.14,1.53.24a6,6,0,0,1,1.57.54,7.25,7.25,0,0,1,2.55,2.23,5.05,5.05,0,0,1,1,3.4,5.17,5.17,0,0,1-1.56,3.34,4,4,0,0,1-3.65,1,4.77,4.77,0,0,1-3-2.28,3.76,3.76,0,0,1,0-3.69,6.27,6.27,0,0,1,2.57-2.44,10.6,10.6,0,0,1,3.19-1.06,11.47,11.47,0,0,1,6.1.67,8.24,8.24,0,0,1,4.18,3.33,10.24,10.24,0,0,1,1,4.28c.07,1.3,0,2.4,0,3.31s-.07,1.53-.09,2.07A3,3,0,0,1,150,138.45Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 133.041px 130.324px;"
                  id="elkdrqk11685"
                  class="animable"
               />
               <path
                  d="M184,138.45a4.78,4.78,0,0,1-.18-.82c-.1-.55-.26-1.34-.48-2.36a45,45,0,0,0-2.61-8.42,24.62,24.62,0,0,0-7.68-10.31,14.44,14.44,0,0,0-7-2.67,73.79,73.79,0,0,0-8.28-.44c-11.42-.22-21.77-.18-29.25-.48-3.75-.13-6.77-.31-8.86-.46l-2.4-.21a3.19,3.19,0,0,1-.84-.12,4.9,4.9,0,0,1,.84,0l2.41.09c2.09.08,5.12.19,8.86.26,7.48.18,17.82.07,29.25.29a71.35,71.35,0,0,1,8.36.46,14.94,14.94,0,0,1,7.29,2.82,22.42,22.42,0,0,1,4.87,5.15,29.75,29.75,0,0,1,2.88,5.45,42.64,42.64,0,0,1,2.44,8.55c.18,1,.3,1.84.35,2.39A4.39,4.39,0,0,1,184,138.45Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 150.214px 125.296px;"
                  id="eltfvn0yk23id"
                  class="animable"
               />
               <rect
                  x="123.38"
                  y="91.36"
                  width="85.91"
                  height="12.47"
                  style="fill: rgb(224, 224, 224); transform-origin: 166.335px 97.595px;"
                  id="el5rwwsnhmhgs"
                  class="animable"
               />
               <rect
                  x="142.28"
                  y="97.59"
                  width="46.78"
                  height="6.24"
                  style="fill: rgb(245, 245, 245); transform-origin: 165.67px 100.71px;"
                  id="elven8q6nzwkh"
                  class="animable"
               />
            </g>
            <g
               id="freepik--Servers--inject-64"
               class="animable"
               style="transform-origin: 440.38px 234.93px;"
            >
               <rect
                  x="270.84"
                  y="285.58"
                  width="138.56"
                  height="98.08"
                  style="fill: rgb(38, 50, 56); transform-origin: 340.12px 334.62px;"
                  id="ely6jq4ptjzyi"
                  class="animable"
               />
               <rect
                  x="250.61"
                  y="275.44"
                  width="151.47"
                  height="37.58"
                  style="fill: rgb(69, 90, 100); transform-origin: 326.345px 294.23px;"
                  id="elo9x8qm7ksfj"
                  class="animable"
               />
               <path
                  d="M298.58,285.58a1.71,1.71,0,1,1-1.71-1.71A1.71,1.71,0,0,1,298.58,285.58Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 296.87px 285.58px;"
                  id="elxz4lm7847a"
                  class="animable"
               />
               <path
                  d="M306.13,285.58a1.71,1.71,0,1,1-1.71-1.71A1.71,1.71,0,0,1,306.13,285.58Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 304.42px 285.58px;"
                  id="elrhp7lhaz5gb"
                  class="animable"
               />
               <path
                  d="M313.68,285.58a1.71,1.71,0,1,1-1.71-1.71A1.71,1.71,0,0,1,313.68,285.58Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 311.97px 285.58px;"
                  id="elreyeukbpaa"
                  class="animable"
               />
               <path
                  d="M321.23,285.58a1.71,1.71,0,1,1-1.71-1.71A1.71,1.71,0,0,1,321.23,285.58Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 319.52px 285.58px;"
                  id="el8l1ozn7j93i"
                  class="animable"
               />
               <path
                  d="M379.73,285.58a1.71,1.71,0,1,1-1.71-1.71A1.7,1.7,0,0,1,379.73,285.58Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 378.02px 285.58px;"
                  id="elgr3go40i1c8"
                  class="animable"
               />
               <path
                  d="M387.43,285.58a1.71,1.71,0,1,1-1.71-1.71A1.7,1.7,0,0,1,387.43,285.58Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 385.72px 285.58px;"
                  id="el3qdqoxjnsrq"
                  class="animable"
               />
               <path
                  d="M328.78,285.58a1.71,1.71,0,1,1-1.71-1.71A1.71,1.71,0,0,1,328.78,285.58Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 327.07px 285.58px;"
                  id="el03vsrfbuyj86"
                  class="animable"
               />
               <path
                  d="M365.86,285.58a1.72,1.72,0,1,1-1.72-1.71A1.71,1.71,0,0,1,365.86,285.58Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 364.14px 285.59px;"
                  id="eldxpf1weo5os"
                  class="animable"
               />
               <path
                  d="M336.33,285.58a1.71,1.71,0,1,1-1.71-1.71A1.71,1.71,0,0,1,336.33,285.58Z"
                  style="fill: rgb(245, 245, 245); transform-origin: 334.62px 285.58px;"
                  id="elzes23lnox4e"
                  class="animable"
               />
               <path
                  d="M343.88,285.58a1.71,1.71,0,1,1-1.71-1.71A1.71,1.71,0,0,1,343.88,285.58Z"
                  style="fill: rgb(245, 245, 245); transform-origin: 342.17px 285.58px;"
                  id="eliy4ahvtq55b"
                  class="animable"
               />
               <path
                  d="M359.2,285.58a1.72,1.72,0,1,1-1.72-1.71A1.71,1.71,0,0,1,359.2,285.58Z"
                  style="fill: rgb(245, 245, 245); transform-origin: 357.48px 285.59px;"
                  id="elwbg760kpvyc"
                  class="animable"
               />
               <path
                  d="M393.7,285.58a1.72,1.72,0,1,1-1.72-1.71A1.71,1.71,0,0,1,393.7,285.58Z"
                  style="fill: rgb(245, 245, 245); transform-origin: 391.98px 285.59px;"
                  id="elfn5aksn7u6l"
                  class="animable"
               />
               <path
                  d="M351.43,285.58a1.71,1.71,0,1,1-1.71-1.71A1.71,1.71,0,0,1,351.43,285.58Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 349.72px 285.58px;"
                  id="ell77qfnj2rki"
                  class="animable"
               />
               <path
                  d="M373,285.58a1.71,1.71,0,1,1-1.71-1.71A1.7,1.7,0,0,1,373,285.58Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 371.29px 285.58px;"
                  id="eleyn5nyfq93h"
                  class="animable"
               />
               <path
                  d="M390.27,293.83a1.72,1.72,0,1,1,1.71,1.71A1.71,1.71,0,0,1,390.27,293.83Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 391.99px 293.82px;"
                  id="elk310rdmkli"
                  class="animable"
               />
               <circle
                  cx="384.43"
                  cy="293.83"
                  r="1.71"
                  style="fill: rgb(38, 50, 56); transform-origin: 384.43px 293.83px;"
                  id="el5y48jkk6ybn"
                  class="animable"
               />
               <path
                  d="M375.17,293.83a1.72,1.72,0,1,1,1.72,1.71A1.71,1.71,0,0,1,375.17,293.83Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 376.89px 293.82px;"
                  id="elnz3wfwd7vc"
                  class="animable"
               />
               <path
                  d="M367.62,293.83a1.72,1.72,0,1,1,1.72,1.71A1.71,1.71,0,0,1,367.62,293.83Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 369.34px 293.82px;"
                  id="eln3z55gjmp9"
                  class="animable"
               />
               <path
                  d="M309.12,293.83a1.71,1.71,0,1,1,1.71,1.71A1.71,1.71,0,0,1,309.12,293.83Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 310.83px 293.83px;"
                  id="eld5rgz80ioeg"
                  class="animable"
               />
               <path
                  d="M301.42,293.83a1.71,1.71,0,1,1,1.71,1.71A1.71,1.71,0,0,1,301.42,293.83Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 303.13px 293.83px;"
                  id="elmgyx69resmo"
                  class="animable"
               />
               <circle
                  cx="361.79"
                  cy="293.83"
                  r="1.71"
                  style="fill: rgb(38, 50, 56); transform-origin: 361.79px 293.83px;"
                  id="el6079lz138n9"
                  class="animable"
               />
               <circle
                  cx="324.71"
                  cy="293.83"
                  r="1.71"
                  style="fill: rgb(38, 50, 56); transform-origin: 324.71px 293.83px;"
                  id="elpd3mi7wy8u"
                  class="animable"
               />
               <path
                  d="M352.52,293.83a1.72,1.72,0,1,1,1.72,1.71A1.71,1.71,0,0,1,352.52,293.83Z"
                  style="fill: rgb(245, 245, 245); transform-origin: 354.24px 293.82px;"
                  id="elgral18ulmmt"
                  class="animable"
               />
               <path
                  d="M345,293.83a1.71,1.71,0,1,1,1.71,1.71A1.7,1.7,0,0,1,345,293.83Z"
                  style="fill: rgb(245, 245, 245); transform-origin: 346.71px 293.83px;"
                  id="ell6eew0ohmbe"
                  class="animable"
               />
               <path
                  d="M329.66,293.83a1.71,1.71,0,1,1,1.71,1.71A1.7,1.7,0,0,1,329.66,293.83Z"
                  style="fill: rgb(245, 245, 245); transform-origin: 331.37px 293.83px;"
                  id="elnovqqlw4hwe"
                  class="animable"
               />
               <path
                  d="M295.16,293.83a1.71,1.71,0,1,1,1.71,1.71A1.7,1.7,0,0,1,295.16,293.83Z"
                  style="fill: rgb(245, 245, 245); transform-origin: 296.87px 293.83px;"
                  id="el4med1xm62ig"
                  class="animable"
               />
               <path
                  d="M337.43,293.83a1.71,1.71,0,1,1,1.71,1.71A1.7,1.7,0,0,1,337.43,293.83Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 339.14px 293.83px;"
                  id="elexazrruvzl"
                  class="animable"
               />
               <path
                  d="M315.81,293.83a1.71,1.71,0,1,1,1.71,1.71A1.71,1.71,0,0,1,315.81,293.83Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 317.52px 293.83px;"
                  id="ely7fodan08w"
                  class="animable"
               />
               <path
                  d="M298.58,301.16a1.71,1.71,0,1,1-1.71-1.71A1.71,1.71,0,0,1,298.58,301.16Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 296.87px 301.16px;"
                  id="eluh5rsv0esi"
                  class="animable"
               />
               <path
                  d="M306.13,301.16a1.71,1.71,0,1,1-1.71-1.71A1.71,1.71,0,0,1,306.13,301.16Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 304.42px 301.16px;"
                  id="elnqqi3es573"
                  class="animable"
               />
               <path
                  d="M313.68,301.16a1.71,1.71,0,1,1-1.71-1.71A1.71,1.71,0,0,1,313.68,301.16Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 311.97px 301.16px;"
                  id="el0mypgibuwo6"
                  class="animable"
               />
               <path
                  d="M321.23,301.16a1.71,1.71,0,1,1-1.71-1.71A1.71,1.71,0,0,1,321.23,301.16Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 319.52px 301.16px;"
                  id="elnjkmxi3q4n"
                  class="animable"
               />
               <path
                  d="M379.73,301.16a1.71,1.71,0,1,1-1.71-1.71A1.7,1.7,0,0,1,379.73,301.16Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 378.02px 301.16px;"
                  id="elzbcgtyqwd"
                  class="animable"
               />
               <path
                  d="M387.43,301.16a1.71,1.71,0,1,1-1.71-1.71A1.7,1.7,0,0,1,387.43,301.16Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 385.72px 301.16px;"
                  id="elurin71bp1i8"
                  class="animable"
               />
               <path
                  d="M328.78,301.16a1.71,1.71,0,1,1-1.71-1.71A1.71,1.71,0,0,1,328.78,301.16Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 327.07px 301.16px;"
                  id="el4trf7169sup"
                  class="animable"
               />
               <path
                  d="M365.86,301.16a1.72,1.72,0,1,1-1.72-1.71A1.71,1.71,0,0,1,365.86,301.16Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 364.14px 301.17px;"
                  id="el97xj4z1sulk"
                  class="animable"
               />
               <path
                  d="M336.33,301.16a1.71,1.71,0,1,1-1.71-1.71A1.71,1.71,0,0,1,336.33,301.16Z"
                  style="fill: rgb(245, 245, 245); transform-origin: 334.62px 301.16px;"
                  id="el5yg0x1ubyad"
                  class="animable"
               />
               <path
                  d="M343.88,301.16a1.71,1.71,0,1,1-1.71-1.71A1.71,1.71,0,0,1,343.88,301.16Z"
                  style="fill: rgb(245, 245, 245); transform-origin: 342.17px 301.16px;"
                  id="elgdfg7k9dvm"
                  class="animable"
               />
               <path
                  d="M359.2,301.16a1.72,1.72,0,1,1-1.72-1.71A1.71,1.71,0,0,1,359.2,301.16Z"
                  style="fill: rgb(245, 245, 245); transform-origin: 357.48px 301.17px;"
                  id="elplw7qoopl2q"
                  class="animable"
               />
               <path
                  d="M393.7,301.16a1.72,1.72,0,1,1-1.72-1.71A1.71,1.71,0,0,1,393.7,301.16Z"
                  style="fill: rgb(245, 245, 245); transform-origin: 391.98px 301.17px;"
                  id="el31wrml5dtxj"
                  class="animable"
               />
               <path
                  d="M351.43,301.16a1.71,1.71,0,1,1-1.71-1.71A1.71,1.71,0,0,1,351.43,301.16Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 349.72px 301.16px;"
                  id="elkdxngblfoi"
                  class="animable"
               />
               <path
                  d="M373,301.16a1.71,1.71,0,1,1-1.71-1.71A1.7,1.7,0,0,1,373,301.16Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 371.29px 301.16px;"
                  id="elnpsknewby2"
                  class="animable"
               />
               <rect
                  x="257.34"
                  y="283.18"
                  width="29.82"
                  height="4.59"
                  style="fill: rgb(38, 50, 56); transform-origin: 272.25px 285.475px;"
                  id="elptbkbsk9z2k"
                  class="animable"
               />
               <rect
                  x="257.34"
                  y="291.08"
                  width="29.82"
                  height="4.59"
                  style="fill: rgb(38, 50, 56); transform-origin: 272.25px 293.375px;"
                  id="el1sil4c937hd"
                  class="animable"
               />
               <rect
                  x="257.34"
                  y="299.24"
                  width="29.82"
                  height="4.59"
                  style="fill: rgb(38, 50, 56); transform-origin: 272.25px 301.535px;"
                  id="elsya6m6a9eji"
                  class="animable"
               />
               <rect
                  x="250.61"
                  y="321.82"
                  width="151.47"
                  height="37.58"
                  style="fill: rgb(69, 90, 100); transform-origin: 326.345px 340.61px;"
                  id="elfm3mdcz65xp"
                  class="animable"
               />
               <rect
                  x="257.34"
                  y="329.56"
                  width="29.82"
                  height="4.59"
                  style="fill: rgb(38, 50, 56); transform-origin: 272.25px 331.855px;"
                  id="elz7q7qri4uk"
                  class="animable"
               />
               <rect
                  x="257.34"
                  y="337.45"
                  width="29.82"
                  height="4.59"
                  style="fill: rgb(38, 50, 56); transform-origin: 272.25px 339.745px;"
                  id="elwzxgqact5zp"
                  class="animable"
               />
               <rect
                  x="257.34"
                  y="345.62"
                  width="29.82"
                  height="4.59"
                  style="fill: rgb(38, 50, 56); transform-origin: 272.25px 347.915px;"
                  id="el08uhqu9prn4k"
                  class="animable"
               />
               <path
                  d="M298,332a1.71,1.71,0,1,1-1.71-1.71A1.72,1.72,0,0,1,298,332Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 296.29px 332px;"
                  id="elorvsrg2sd2"
                  class="animable"
               />
               <path
                  d="M305.58,332a1.71,1.71,0,1,1-1.71-1.71A1.72,1.72,0,0,1,305.58,332Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 303.87px 332px;"
                  id="elvj2btisirr"
                  class="animable"
               />
               <path
                  d="M313.13,332a1.71,1.71,0,1,1-1.71-1.71A1.72,1.72,0,0,1,313.13,332Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 311.42px 332px;"
                  id="eli0a5z41pz7i"
                  class="animable"
               />
               <path
                  d="M320.68,332a1.71,1.71,0,1,1-1.71-1.71A1.72,1.72,0,0,1,320.68,332Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 318.97px 332px;"
                  id="elz876oms9e4a"
                  class="animable"
               />
               <path
                  d="M379.18,332a1.71,1.71,0,1,1-1.71-1.71A1.71,1.71,0,0,1,379.18,332Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 377.47px 332px;"
                  id="elvndlzdoho8k"
                  class="animable"
               />
               <path
                  d="M386.88,332a1.71,1.71,0,1,1-1.71-1.71A1.71,1.71,0,0,1,386.88,332Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 385.17px 332px;"
                  id="el9mhjy1pycwi"
                  class="animable"
               />
               <path
                  d="M328.23,332a1.71,1.71,0,1,1-1.71-1.71A1.72,1.72,0,0,1,328.23,332Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 326.52px 332px;"
                  id="el9rbux8jyqfk"
                  class="animable"
               />
               <path
                  d="M365.31,332a1.72,1.72,0,1,1-1.71-1.71A1.72,1.72,0,0,1,365.31,332Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 363.59px 332.01px;"
                  id="eldvx889n47dk"
                  class="animable"
               />
               <path
                  d="M335.78,332a1.71,1.71,0,1,1-1.71-1.71A1.72,1.72,0,0,1,335.78,332Z"
                  style="fill: rgb(245, 245, 245); transform-origin: 334.07px 332px;"
                  id="elycb2pltevc"
                  class="animable"
               />
               <path
                  d="M343.33,332a1.71,1.71,0,1,1-1.71-1.71A1.72,1.72,0,0,1,343.33,332Z"
                  style="fill: rgb(245, 245, 245); transform-origin: 341.62px 332px;"
                  id="elyy5mywin1yi"
                  class="animable"
               />
               <path
                  d="M358.65,332a1.71,1.71,0,1,1-1.71-1.71A1.72,1.72,0,0,1,358.65,332Z"
                  style="fill: rgb(245, 245, 245); transform-origin: 356.94px 332px;"
                  id="elnv8q3vu7zj"
                  class="animable"
               />
               <path
                  d="M393.15,332a1.71,1.71,0,1,1-1.71-1.71A1.72,1.72,0,0,1,393.15,332Z"
                  style="fill: rgb(245, 245, 245); transform-origin: 391.44px 332px;"
                  id="elld92sjryqoa"
                  class="animable"
               />
               <path
                  d="M350.88,332a1.71,1.71,0,1,1-1.71-1.71A1.72,1.72,0,0,1,350.88,332Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 349.17px 332px;"
                  id="el02v1u006d7ok"
                  class="animable"
               />
               <path
                  d="M372.5,332a1.72,1.72,0,1,1-1.72-1.71A1.72,1.72,0,0,1,372.5,332Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 370.78px 332.01px;"
                  id="el0n31giklz93"
                  class="animable"
               />
               <path
                  d="M389.73,340.2a1.71,1.71,0,1,1,1.71,1.71A1.71,1.71,0,0,1,389.73,340.2Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 391.44px 340.2px;"
                  id="el0dxj63iimqtj"
                  class="animable"
               />
               <path
                  d="M382.18,340.2a1.71,1.71,0,1,1,1.71,1.71A1.71,1.71,0,0,1,382.18,340.2Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 383.89px 340.2px;"
                  id="elgujea7mcub5"
                  class="animable"
               />
               <path
                  d="M374.63,340.2a1.71,1.71,0,1,1,1.71,1.71A1.71,1.71,0,0,1,374.63,340.2Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 376.34px 340.2px;"
                  id="el96vjhpkcof"
                  class="animable"
               />
               <path
                  d="M367.08,340.2a1.71,1.71,0,1,1,1.71,1.71A1.71,1.71,0,0,1,367.08,340.2Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 368.79px 340.2px;"
                  id="ely4vznkfahzc"
                  class="animable"
               />
               <path
                  d="M308.57,340.2a1.71,1.71,0,1,1,1.71,1.71A1.72,1.72,0,0,1,308.57,340.2Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 310.28px 340.2px;"
                  id="elb60gtx40c5c"
                  class="animable"
               />
               <path
                  d="M300.87,340.2a1.71,1.71,0,1,1,1.71,1.71A1.72,1.72,0,0,1,300.87,340.2Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 302.58px 340.2px;"
                  id="el8k9qb3o17gw"
                  class="animable"
               />
               <path
                  d="M359.53,340.2a1.71,1.71,0,1,1,1.71,1.71A1.71,1.71,0,0,1,359.53,340.2Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 361.24px 340.2px;"
                  id="elulc76vpcg0j"
                  class="animable"
               />
               <path
                  d="M322.45,340.2a1.71,1.71,0,1,1,1.71,1.71A1.72,1.72,0,0,1,322.45,340.2Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 324.16px 340.2px;"
                  id="eln2xo93oujri"
                  class="animable"
               />
               <path
                  d="M352,340.2a1.71,1.71,0,1,1,1.71,1.71A1.71,1.71,0,0,1,352,340.2Z"
                  style="fill: rgb(245, 245, 245); transform-origin: 353.71px 340.2px;"
                  id="ele7js5yquctd"
                  class="animable"
               />
               <path
                  d="M344.43,340.2a1.71,1.71,0,1,1,1.71,1.71A1.71,1.71,0,0,1,344.43,340.2Z"
                  style="fill: rgb(245, 245, 245); transform-origin: 346.14px 340.2px;"
                  id="elh7ba7q05vdf"
                  class="animable"
               />
               <path
                  d="M329.11,340.2a1.71,1.71,0,1,1,1.71,1.71A1.72,1.72,0,0,1,329.11,340.2Z"
                  style="fill: rgb(245, 245, 245); transform-origin: 330.82px 340.2px;"
                  id="ell5tuhso1rcs"
                  class="animable"
               />
               <path
                  d="M294.61,340.2a1.71,1.71,0,1,1,1.71,1.71A1.71,1.71,0,0,1,294.61,340.2Z"
                  style="fill: rgb(245, 245, 245); transform-origin: 296.32px 340.2px;"
                  id="elpggfha2tye"
                  class="animable"
               />
               <path
                  d="M336.88,340.2a1.71,1.71,0,1,1,1.71,1.71A1.71,1.71,0,0,1,336.88,340.2Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 338.59px 340.2px;"
                  id="elszjgrb1gpa"
                  class="animable"
               />
               <path
                  d="M315.26,340.2a1.71,1.71,0,1,1,1.71,1.71A1.72,1.72,0,0,1,315.26,340.2Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 316.97px 340.2px;"
                  id="el0r3nwww2jwqh"
                  class="animable"
               />
               <path
                  d="M298,347.54a1.71,1.71,0,1,1-1.71-1.71A1.72,1.72,0,0,1,298,347.54Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 296.29px 347.54px;"
                  id="elmb1zik9lm77"
                  class="animable"
               />
               <path
                  d="M305.58,347.54a1.71,1.71,0,1,1-1.71-1.71A1.72,1.72,0,0,1,305.58,347.54Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 303.87px 347.54px;"
                  id="elwlc1ld75u7"
                  class="animable"
               />
               <path
                  d="M313.13,347.54a1.71,1.71,0,1,1-1.71-1.71A1.72,1.72,0,0,1,313.13,347.54Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 311.42px 347.54px;"
                  id="elmiaazktl55t"
                  class="animable"
               />
               <path
                  d="M320.68,347.54a1.71,1.71,0,1,1-1.71-1.71A1.72,1.72,0,0,1,320.68,347.54Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 318.97px 347.54px;"
                  id="elfxv9vs6h669"
                  class="animable"
               />
               <path
                  d="M379.18,347.54a1.71,1.71,0,1,1-1.71-1.71A1.71,1.71,0,0,1,379.18,347.54Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 377.47px 347.54px;"
                  id="elvyubnorcq2"
                  class="animable"
               />
               <path
                  d="M386.88,347.54a1.71,1.71,0,1,1-1.71-1.71A1.71,1.71,0,0,1,386.88,347.54Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 385.17px 347.54px;"
                  id="elnsqf5ph5zsq"
                  class="animable"
               />
               <path
                  d="M328.23,347.54a1.71,1.71,0,1,1-1.71-1.71A1.72,1.72,0,0,1,328.23,347.54Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 326.52px 347.54px;"
                  id="eln0gq684x11j"
                  class="animable"
               />
               <path
                  d="M365.31,347.54a1.72,1.72,0,1,1-1.71-1.71A1.72,1.72,0,0,1,365.31,347.54Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 363.59px 347.55px;"
                  id="elko55urk7xds"
                  class="animable"
               />
               <path
                  d="M335.78,347.54a1.71,1.71,0,1,1-1.71-1.71A1.72,1.72,0,0,1,335.78,347.54Z"
                  style="fill: rgb(245, 245, 245); transform-origin: 334.07px 347.54px;"
                  id="elqf23aops6w"
                  class="animable"
               />
               <path
                  d="M343.33,347.54a1.71,1.71,0,1,1-1.71-1.71A1.72,1.72,0,0,1,343.33,347.54Z"
                  style="fill: rgb(245, 245, 245); transform-origin: 341.62px 347.54px;"
                  id="elh44whirg84o"
                  class="animable"
               />
               <path
                  d="M358.65,347.54a1.71,1.71,0,1,1-1.71-1.71A1.72,1.72,0,0,1,358.65,347.54Z"
                  style="fill: rgb(245, 245, 245); transform-origin: 356.94px 347.54px;"
                  id="elkiacuakqgk"
                  class="animable"
               />
               <path
                  d="M393.15,347.54a1.71,1.71,0,1,1-1.71-1.71A1.72,1.72,0,0,1,393.15,347.54Z"
                  style="fill: rgb(245, 245, 245); transform-origin: 391.44px 347.54px;"
                  id="el7y649kohoak"
                  class="animable"
               />
               <path
                  d="M350.88,347.54a1.71,1.71,0,1,1-1.71-1.71A1.72,1.72,0,0,1,350.88,347.54Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 349.17px 347.54px;"
                  id="elqef7vhlzk2q"
                  class="animable"
               />
               <path
                  d="M372.5,347.54a1.72,1.72,0,1,1-1.72-1.71A1.72,1.72,0,0,1,372.5,347.54Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 370.78px 347.55px;"
                  id="el9nzx8fkpjyr"
                  class="animable"
               />
               <polygon
                  points="424.85 312.67 402.08 312.73 402.08 275.15 424.85 275.09 424.85 312.67"
                  style="fill: rgb(38, 50, 56); transform-origin: 413.465px 293.91px;"
                  id="elsfbi21focfs"
                  class="animable"
               />
               <polygon
                  points="424.85 359.34 402.08 359.4 402.08 321.82 424.85 321.76 424.85 359.34"
                  style="fill: rgb(38, 50, 56); transform-origin: 413.465px 340.58px;"
                  id="elrqjjuvtmii"
                  class="animable"
               />
               <polygon
                  points="423.45 406.36 400.68 406.42 400.68 368.84 423.45 368.77 423.45 406.36"
                  style="fill: rgb(38, 50, 56); transform-origin: 412.065px 387.595px;"
                  id="elg6lrb0yorw8"
                  class="animable"
               />
               <rect
                  x="250.31"
                  y="368.84"
                  width="151.47"
                  height="37.58"
                  style="fill: rgb(69, 90, 100); transform-origin: 326.045px 387.63px;"
                  id="elc2uq0k5env"
                  class="animable"
               />
               <rect
                  x="257.03"
                  y="376.58"
                  width="29.82"
                  height="4.59"
                  style="fill: rgb(38, 50, 56); transform-origin: 271.94px 378.875px;"
                  id="el5txf2j31ad7"
                  class="animable"
               />
               <rect
                  x="257.03"
                  y="384.47"
                  width="29.82"
                  height="4.59"
                  style="fill: rgb(38, 50, 56); transform-origin: 271.94px 386.765px;"
                  id="elmfah0nfvwyr"
                  class="animable"
               />
               <path
                  d="M298.65,379.35a1.71,1.71,0,1,1-1.71-1.71A1.72,1.72,0,0,1,298.65,379.35Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 296.94px 379.35px;"
                  id="el6ziqre3d33x"
                  class="animable"
               />
               <path
                  d="M306.2,379.35a1.71,1.71,0,1,1-1.71-1.71A1.72,1.72,0,0,1,306.2,379.35Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 304.49px 379.35px;"
                  id="elcsx74v226qi"
                  class="animable"
               />
               <path
                  d="M313.75,379.35a1.71,1.71,0,1,1-1.71-1.71A1.72,1.72,0,0,1,313.75,379.35Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 312.04px 379.35px;"
                  id="elnuu4xsxc7z"
                  class="animable"
               />
               <path
                  d="M321.3,379.35a1.71,1.71,0,1,1-1.71-1.71A1.72,1.72,0,0,1,321.3,379.35Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 319.59px 379.35px;"
                  id="el5zomn24vdzg"
                  class="animable"
               />
               <path
                  d="M379.8,379.35a1.71,1.71,0,1,1-1.71-1.71A1.71,1.71,0,0,1,379.8,379.35Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 378.09px 379.35px;"
                  id="ele885wzdalle"
                  class="animable"
               />
               <path
                  d="M387.5,379.35a1.71,1.71,0,1,1-1.71-1.71A1.72,1.72,0,0,1,387.5,379.35Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 385.79px 379.35px;"
                  id="elmru964ipi9r"
                  class="animable"
               />
               <path
                  d="M328.85,379.35a1.71,1.71,0,1,1-1.71-1.71A1.72,1.72,0,0,1,328.85,379.35Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 327.14px 379.35px;"
                  id="elp3myd5ms5a"
                  class="animable"
               />
               <path
                  d="M365.92,379.35a1.71,1.71,0,1,1-1.71-1.71A1.71,1.71,0,0,1,365.92,379.35Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 364.21px 379.35px;"
                  id="elqywmjaha21n"
                  class="animable"
               />
               <path
                  d="M336.4,379.35a1.71,1.71,0,1,1-1.71-1.71A1.72,1.72,0,0,1,336.4,379.35Z"
                  style="fill: rgb(245, 245, 245); transform-origin: 334.69px 379.35px;"
                  id="el3hqfltfs1t"
                  class="animable"
               />
               <path
                  d="M344,379.35a1.72,1.72,0,1,1-1.71-1.71A1.72,1.72,0,0,1,344,379.35Z"
                  style="fill: rgb(245, 245, 245); transform-origin: 342.28px 379.36px;"
                  id="el6937q7wxwsm"
                  class="animable"
               />
               <path
                  d="M359.26,379.35a1.71,1.71,0,1,1-1.71-1.71A1.71,1.71,0,0,1,359.26,379.35Z"
                  style="fill: rgb(245, 245, 245); transform-origin: 357.55px 379.35px;"
                  id="elk9pbctxcxp"
                  class="animable"
               />
               <path
                  d="M393.76,379.35a1.71,1.71,0,1,1-1.71-1.71A1.71,1.71,0,0,1,393.76,379.35Z"
                  style="fill: rgb(245, 245, 245); transform-origin: 392.05px 379.35px;"
                  id="eldpeh75i4lal"
                  class="animable"
               />
               <path
                  d="M351.5,379.35a1.72,1.72,0,1,1-1.71-1.71A1.72,1.72,0,0,1,351.5,379.35Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 349.78px 379.36px;"
                  id="elrw9c75gq5x"
                  class="animable"
               />
               <path
                  d="M373.11,379.35a1.71,1.71,0,1,1-1.71-1.71A1.71,1.71,0,0,1,373.11,379.35Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 371.4px 379.35px;"
                  id="elrs8kr4vl0x"
                  class="animable"
               />
               <path
                  d="M390.34,387.6a1.71,1.71,0,1,1,1.71,1.71A1.72,1.72,0,0,1,390.34,387.6Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 392.05px 387.6px;"
                  id="elk9up5u00jq"
                  class="animable"
               />
               <path
                  d="M382.79,387.6a1.71,1.71,0,1,1,1.71,1.71A1.72,1.72,0,0,1,382.79,387.6Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 384.5px 387.6px;"
                  id="el8uj2hk4klhy"
                  class="animable"
               />
               <path
                  d="M375.24,387.6a1.71,1.71,0,1,1,1.71,1.71A1.72,1.72,0,0,1,375.24,387.6Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 376.95px 387.6px;"
                  id="elxt0w17ggaak"
                  class="animable"
               />
               <path
                  d="M367.69,387.6a1.71,1.71,0,1,1,1.71,1.71A1.72,1.72,0,0,1,367.69,387.6Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 369.4px 387.6px;"
                  id="elp1qxeoqpues"
                  class="animable"
               />
               <path
                  d="M309.19,387.6a1.71,1.71,0,1,1,1.71,1.71A1.71,1.71,0,0,1,309.19,387.6Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 310.9px 387.6px;"
                  id="elik41jsoci"
                  class="animable"
               />
               <path
                  d="M301.49,387.6a1.71,1.71,0,1,1,1.71,1.71A1.72,1.72,0,0,1,301.49,387.6Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 303.2px 387.6px;"
                  id="eltdt57f5hmya"
                  class="animable"
               />
               <path
                  d="M360.14,387.6a1.71,1.71,0,1,1,1.71,1.71A1.72,1.72,0,0,1,360.14,387.6Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 361.85px 387.6px;"
                  id="elo128oiz281o"
                  class="animable"
               />
               <path
                  d="M323.07,387.6a1.71,1.71,0,1,1,1.71,1.71A1.71,1.71,0,0,1,323.07,387.6Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 324.78px 387.6px;"
                  id="eliuk82ioz4zn"
                  class="animable"
               />
               <path
                  d="M352.59,387.6a1.72,1.72,0,1,1,1.71,1.71A1.72,1.72,0,0,1,352.59,387.6Z"
                  style="fill: rgb(245, 245, 245); transform-origin: 354.31px 387.59px;"
                  id="elpektzg15p5"
                  class="animable"
               />
               <path
                  d="M345,387.6a1.72,1.72,0,1,1,1.71,1.71A1.72,1.72,0,0,1,345,387.6Z"
                  style="fill: rgb(245, 245, 245); transform-origin: 346.72px 387.59px;"
                  id="elq25ynhun8uj"
                  class="animable"
               />
               <path
                  d="M329.73,387.6a1.71,1.71,0,1,1,1.71,1.71A1.71,1.71,0,0,1,329.73,387.6Z"
                  style="fill: rgb(245, 245, 245); transform-origin: 331.44px 387.6px;"
                  id="el741yqcesd1"
                  class="animable"
               />
               <path
                  d="M295.23,387.6a1.71,1.71,0,1,1,1.71,1.71A1.71,1.71,0,0,1,295.23,387.6Z"
                  style="fill: rgb(245, 245, 245); transform-origin: 296.94px 387.6px;"
                  id="elhxxike8wxm8"
                  class="animable"
               />
               <path
                  d="M337.49,387.6a1.72,1.72,0,1,1,1.71,1.71A1.72,1.72,0,0,1,337.49,387.6Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 339.21px 387.59px;"
                  id="elrgpdj1tm12"
                  class="animable"
               />
               <path
                  d="M315.88,387.6a1.71,1.71,0,1,1,1.71,1.71A1.71,1.71,0,0,1,315.88,387.6Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 317.59px 387.6px;"
                  id="elrdbc5thdn6e"
                  class="animable"
               />
               <path
                  d="M298.65,394.93a1.71,1.71,0,1,1-1.71-1.71A1.72,1.72,0,0,1,298.65,394.93Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 296.94px 394.93px;"
                  id="ellqm73ea51wr"
                  class="animable"
               />
               <path
                  d="M306.2,394.93a1.71,1.71,0,1,1-1.71-1.71A1.72,1.72,0,0,1,306.2,394.93Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 304.49px 394.93px;"
                  id="el0p0d8avhxe7k"
                  class="animable"
               />
               <path
                  d="M313.75,394.93a1.71,1.71,0,1,1-1.71-1.71A1.72,1.72,0,0,1,313.75,394.93Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 312.04px 394.93px;"
                  id="elprdhsvwto1g"
                  class="animable"
               />
               <path
                  d="M321.3,394.93a1.71,1.71,0,1,1-1.71-1.71A1.72,1.72,0,0,1,321.3,394.93Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 319.59px 394.93px;"
                  id="elou35prxdgz9"
                  class="animable"
               />
               <path
                  d="M379.8,394.93a1.71,1.71,0,1,1-1.71-1.71A1.71,1.71,0,0,1,379.8,394.93Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 378.09px 394.93px;"
                  id="el9rqpeij6ck"
                  class="animable"
               />
               <path
                  d="M387.5,394.93a1.71,1.71,0,1,1-1.71-1.71A1.72,1.72,0,0,1,387.5,394.93Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 385.79px 394.93px;"
                  id="elevmv2p8fbt"
                  class="animable"
               />
               <path
                  d="M328.85,394.93a1.71,1.71,0,1,1-1.71-1.71A1.72,1.72,0,0,1,328.85,394.93Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 327.14px 394.93px;"
                  id="elh8uxztwybxt"
                  class="animable"
               />
               <path
                  d="M365.92,394.93a1.71,1.71,0,1,1-1.71-1.71A1.71,1.71,0,0,1,365.92,394.93Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 364.21px 394.93px;"
                  id="elqy0hmqhtmk"
                  class="animable"
               />
               <path
                  d="M336.4,394.93a1.71,1.71,0,1,1-1.71-1.71A1.72,1.72,0,0,1,336.4,394.93Z"
                  style="fill: rgb(245, 245, 245); transform-origin: 334.69px 394.93px;"
                  id="elf0uqbgv4pmu"
                  class="animable"
               />
               <path
                  d="M344,394.93a1.72,1.72,0,1,1-1.71-1.71A1.72,1.72,0,0,1,344,394.93Z"
                  style="fill: rgb(245, 245, 245); transform-origin: 342.28px 394.94px;"
                  id="el29aslbqijj"
                  class="animable"
               />
               <path
                  d="M359.26,394.93a1.71,1.71,0,1,1-1.71-1.71A1.71,1.71,0,0,1,359.26,394.93Z"
                  style="fill: rgb(245, 245, 245); transform-origin: 357.55px 394.93px;"
                  id="el6nhfxewu68r"
                  class="animable"
               />
               <path
                  d="M393.76,394.93a1.71,1.71,0,1,1-1.71-1.71A1.71,1.71,0,0,1,393.76,394.93Z"
                  style="fill: rgb(245, 245, 245); transform-origin: 392.05px 394.93px;"
                  id="ellz8li4os3w"
                  class="animable"
               />
               <path
                  d="M351.5,394.93a1.72,1.72,0,1,1-1.71-1.71A1.72,1.72,0,0,1,351.5,394.93Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 349.78px 394.94px;"
                  id="elh3ia2a7m656"
                  class="animable"
               />
               <path
                  d="M373.11,394.93a1.71,1.71,0,1,1-1.71-1.71A1.71,1.71,0,0,1,373.11,394.93Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 371.4px 394.93px;"
                  id="elblaa3ns5eo"
                  class="animable"
               />
               <rect
                  x="430.16"
                  y="63.44"
                  width="111.96"
                  height="342.97"
                  style="fill: rgb(235, 235, 235); transform-origin: 486.14px 234.925px;"
                  id="elqgfrbntuic9"
                  class="animable"
               />
               <polygon
                  points="630.45 406.42 542.12 406.42 541.96 63.44 630.45 63.44 630.45 406.42"
                  style="fill: rgb(224, 224, 224); transform-origin: 586.205px 234.93px;"
                  id="elioue75t5bu"
                  class="animable"
               />
               <rect
                  x="436.36"
                  y="118.33"
                  width="94.97"
                  height="26.74"
                  style="fill: rgb(38, 50, 56); transform-origin: 483.845px 131.7px;"
                  id="elsghqpwukeeo"
                  class="animable"
               />
               <rect
                  x="439.01"
                  y="121.7"
                  width="5.32"
                  height="20.46"
                  style="fill: rgb(69, 90, 100); transform-origin: 441.67px 131.93px;"
                  id="eli69ipvwcf4"
                  class="animable"
               />
               <path
                  d="M450.59,126a1.69,1.69,0,1,1-1.69-1.69A1.69,1.69,0,0,1,450.59,126Z"
                  style="fill: rgb(255, 255, 255); transform-origin: 448.9px 126px;"
                  id="elfl8oet9xspw"
                  class="animable"
               />
               <path
                  d="M450.59,133.23a1.69,1.69,0,1,1-1.69-1.69A1.69,1.69,0,0,1,450.59,133.23Z"
                  style="fill: rgb(255, 255, 255); transform-origin: 448.9px 133.23px;"
                  id="elqe9xplv2p2m"
                  class="animable"
               />
               <rect
                  x="457.35"
                  y="124.31"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 459.965px 132.17px;"
                  id="el4vq19461k1"
                  class="animable"
               />
               <rect
                  x="464.9"
                  y="124.31"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 467.515px 132.17px;"
                  id="el8fqlb6rip84"
                  class="animable"
               />
               <rect
                  x="472.45"
                  y="124.31"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 475.065px 132.17px;"
                  id="elhpkmu5evb7"
                  class="animable"
               />
               <rect
                  x="479.99"
                  y="124.31"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 482.605px 132.17px;"
                  id="eldi0qnr3q9tg"
                  class="animable"
               />
               <rect
                  x="487.54"
                  y="124.31"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 490.155px 132.17px;"
                  id="el7gttl3iu9h"
                  class="animable"
               />
               <rect
                  x="495.09"
                  y="124.31"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 497.705px 132.17px;"
                  id="elnye8dxtlmcq"
                  class="animable"
               />
               <rect
                  x="502.64"
                  y="124.31"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 505.255px 132.17px;"
                  id="elzg2dc7oj6y"
                  class="animable"
               />
               <rect
                  x="510.19"
                  y="124.31"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 512.805px 132.17px;"
                  id="eljewfrxa767"
                  class="animable"
               />
               <rect
                  x="517.74"
                  y="124.31"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 520.355px 132.17px;"
                  id="el2226r19a9wr"
                  class="animable"
               />
               <rect
                  x="525.29"
                  y="124.31"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 527.905px 132.17px;"
                  id="ellfbihdk9krq"
                  class="animable"
               />
               <rect
                  x="436.36"
                  y="156.75"
                  width="94.97"
                  height="26.74"
                  style="fill: rgb(38, 50, 56); transform-origin: 483.845px 170.12px;"
                  id="elz9apni54c0s"
                  class="animable"
               />
               <rect
                  x="439.01"
                  y="160.11"
                  width="5.32"
                  height="20.46"
                  style="fill: rgb(69, 90, 100); transform-origin: 441.67px 170.34px;"
                  id="elb6w8rcbjz5t"
                  class="animable"
               />
               <path
                  d="M450.59,164.41a1.69,1.69,0,1,1-1.69-1.69A1.69,1.69,0,0,1,450.59,164.41Z"
                  style="fill: rgb(255, 255, 255); transform-origin: 448.9px 164.41px;"
                  id="elh9rztyyu3fk"
                  class="animable"
               />
               <path
                  d="M450.59,171.64A1.69,1.69,0,1,1,448.9,170,1.69,1.69,0,0,1,450.59,171.64Z"
                  style="fill: rgb(255, 255, 255); transform-origin: 448.901px 171.69px;"
                  id="elc03bod1zo0j"
                  class="animable"
               />
               <rect
                  x="457.35"
                  y="162.72"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 459.965px 170.58px;"
                  id="ellf2ruk0khw"
                  class="animable"
               />
               <rect
                  x="464.9"
                  y="162.72"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 467.515px 170.58px;"
                  id="elzxs471zn0tp"
                  class="animable"
               />
               <rect
                  x="472.45"
                  y="162.72"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 475.065px 170.58px;"
                  id="ela3zpa5ombl"
                  class="animable"
               />
               <rect
                  x="479.99"
                  y="162.72"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 482.605px 170.58px;"
                  id="elj6klnzx3gw"
                  class="animable"
               />
               <rect
                  x="487.54"
                  y="162.72"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 490.155px 170.58px;"
                  id="elbz8xvzvmkf"
                  class="animable"
               />
               <rect
                  x="495.09"
                  y="162.72"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 497.705px 170.58px;"
                  id="el5vfmnetbxiq"
                  class="animable"
               />
               <rect
                  x="502.64"
                  y="162.72"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 505.255px 170.58px;"
                  id="el4w93b1uh1wa"
                  class="animable"
               />
               <rect
                  x="510.19"
                  y="162.72"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 512.805px 170.58px;"
                  id="elfknztktgk0e"
                  class="animable"
               />
               <rect
                  x="517.74"
                  y="162.72"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 520.355px 170.58px;"
                  id="elon9ox9n8oj8"
                  class="animable"
               />
               <rect
                  x="525.29"
                  y="162.72"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 527.905px 170.58px;"
                  id="eliacls5q2ulq"
                  class="animable"
               />
               <rect
                  x="436.36"
                  y="195.47"
                  width="94.97"
                  height="26.74"
                  style="fill: rgb(38, 50, 56); transform-origin: 483.845px 208.84px;"
                  id="el4ta8pg6tyji"
                  class="animable"
               />
               <rect
                  x="439.01"
                  y="198.83"
                  width="5.32"
                  height="20.46"
                  style="fill: rgb(69, 90, 100); transform-origin: 441.67px 209.06px;"
                  id="elok3kbnxgub"
                  class="animable"
               />
               <path
                  d="M450.59,203.13a1.69,1.69,0,1,1-1.69-1.69A1.69,1.69,0,0,1,450.59,203.13Z"
                  style="fill: rgb(255, 255, 255); transform-origin: 448.9px 203.13px;"
                  id="el1juu5ieklov"
                  class="animable"
               />
               <path
                  d="M450.59,210.36a1.69,1.69,0,1,1-1.69-1.69A1.69,1.69,0,0,1,450.59,210.36Z"
                  style="fill: rgb(255, 255, 255); transform-origin: 448.9px 210.36px;"
                  id="elhh49cc5ka1o"
                  class="animable"
               />
               <rect
                  x="457.35"
                  y="201.44"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 459.965px 209.3px;"
                  id="elyhzdix68yh"
                  class="animable"
               />
               <rect
                  x="464.9"
                  y="201.44"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 467.515px 209.3px;"
                  id="el8g7o0njuo4s"
                  class="animable"
               />
               <rect
                  x="472.45"
                  y="201.44"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 475.065px 209.3px;"
                  id="elpgnxm1bij88"
                  class="animable"
               />
               <rect
                  x="479.99"
                  y="201.44"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 482.605px 209.3px;"
                  id="elaxubuefwezw"
                  class="animable"
               />
               <rect
                  x="487.54"
                  y="201.44"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 490.155px 209.3px;"
                  id="elnjtwdezxsh"
                  class="animable"
               />
               <rect
                  x="495.09"
                  y="201.44"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 497.705px 209.3px;"
                  id="elo34mcvkm1fh"
                  class="animable"
               />
               <rect
                  x="502.64"
                  y="201.44"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 505.255px 209.3px;"
                  id="elnmncquena7l"
                  class="animable"
               />
               <rect
                  x="510.19"
                  y="201.44"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 512.805px 209.3px;"
                  id="elg9zgfsknky"
                  class="animable"
               />
               <rect
                  x="517.74"
                  y="201.44"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 520.355px 209.3px;"
                  id="elmlf53gxzcg"
                  class="animable"
               />
               <rect
                  x="525.29"
                  y="201.44"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 527.905px 209.3px;"
                  id="elohfvxbt15cs"
                  class="animable"
               />
               <rect
                  x="436.36"
                  y="237.29"
                  width="94.97"
                  height="26.74"
                  style="fill: rgb(38, 50, 56); transform-origin: 483.845px 250.66px;"
                  id="elion6xj05u7h"
                  class="animable"
               />
               <rect
                  x="439.01"
                  y="240.66"
                  width="5.32"
                  height="20.46"
                  style="fill: rgb(69, 90, 100); transform-origin: 441.67px 250.89px;"
                  id="elew2j1huipgi"
                  class="animable"
               />
               <path
                  d="M450.59,245a1.69,1.69,0,1,1-1.69-1.69A1.69,1.69,0,0,1,450.59,245Z"
                  style="fill: rgb(255, 255, 255); transform-origin: 448.9px 245px;"
                  id="elnnd0poojpp"
                  class="animable"
               />
               <path
                  d="M450.59,252.19a1.69,1.69,0,1,1-1.69-1.69A1.69,1.69,0,0,1,450.59,252.19Z"
                  style="fill: rgb(255, 255, 255); transform-origin: 448.9px 252.19px;"
                  id="el4c0vftg1b9y"
                  class="animable"
               />
               <rect
                  x="457.35"
                  y="243.27"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 459.965px 251.13px;"
                  id="el6k0iwp4yfeq"
                  class="animable"
               />
               <rect
                  x="464.9"
                  y="243.27"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 467.515px 251.13px;"
                  id="el15eiyqbmhzf"
                  class="animable"
               />
               <rect
                  x="472.45"
                  y="243.27"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 475.065px 251.13px;"
                  id="eljs3mmpkp37"
                  class="animable"
               />
               <rect
                  x="479.99"
                  y="243.27"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 482.605px 251.13px;"
                  id="elb1qfqjsatyd"
                  class="animable"
               />
               <rect
                  x="487.54"
                  y="243.27"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 490.155px 251.13px;"
                  id="elhj25zjssrt4"
                  class="animable"
               />
               <rect
                  x="495.09"
                  y="243.27"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 497.705px 251.13px;"
                  id="elhdwn5vgzg24"
                  class="animable"
               />
               <rect
                  x="502.64"
                  y="243.27"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 505.255px 251.13px;"
                  id="el7c7tur1j2bu"
                  class="animable"
               />
               <rect
                  x="510.19"
                  y="243.27"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 512.805px 251.13px;"
                  id="eljwmu2qzo5o"
                  class="animable"
               />
               <rect
                  x="517.74"
                  y="243.27"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 520.355px 251.13px;"
                  id="elpxj96bwl4qb"
                  class="animable"
               />
               <rect
                  x="525.29"
                  y="243.27"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 527.905px 251.13px;"
                  id="elll7c71kek7"
                  class="animable"
               />
               <rect
                  x="436.36"
                  y="279.53"
                  width="94.97"
                  height="26.74"
                  style="fill: rgb(38, 50, 56); transform-origin: 483.845px 292.9px;"
                  id="elwtfkafucfu"
                  class="animable"
               />
               <rect
                  x="439.01"
                  y="282.9"
                  width="5.32"
                  height="20.46"
                  style="fill: rgb(69, 90, 100); transform-origin: 441.67px 293.13px;"
                  id="el5cvxm6o6w3"
                  class="animable"
               />
               <path
                  d="M450.59,287.2a1.69,1.69,0,1,1-1.69-1.69A1.69,1.69,0,0,1,450.59,287.2Z"
                  style="fill: rgb(255, 255, 255); transform-origin: 448.9px 287.2px;"
                  id="el0uyo7t846gqb"
                  class="animable"
               />
               <path
                  d="M450.59,294.43a1.69,1.69,0,1,1-1.69-1.69A1.69,1.69,0,0,1,450.59,294.43Z"
                  style="fill: rgb(255, 255, 255); transform-origin: 448.9px 294.43px;"
                  id="elfl0h3z886oa"
                  class="animable"
               />
               <rect
                  x="457.35"
                  y="285.51"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 459.965px 293.37px;"
                  id="ely6qcimnwhxq"
                  class="animable"
               />
               <rect
                  x="464.9"
                  y="285.51"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 467.515px 293.37px;"
                  id="elu1lc91wypzj"
                  class="animable"
               />
               <rect
                  x="472.45"
                  y="285.51"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 475.065px 293.37px;"
                  id="el8rjqgqxpfcw"
                  class="animable"
               />
               <rect
                  x="479.99"
                  y="285.51"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 482.605px 293.37px;"
                  id="elt5zgtl0fhni"
                  class="animable"
               />
               <rect
                  x="487.54"
                  y="285.51"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 490.155px 293.37px;"
                  id="elzy4q2vd6x2g"
                  class="animable"
               />
               <rect
                  x="495.09"
                  y="285.51"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 497.705px 293.37px;"
                  id="elr2bi6fixv3"
                  class="animable"
               />
               <rect
                  x="502.64"
                  y="285.51"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 505.255px 293.37px;"
                  id="els0rgj4nxr6j"
                  class="animable"
               />
               <rect
                  x="510.19"
                  y="285.51"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 512.805px 293.37px;"
                  id="elofb48s3s0k"
                  class="animable"
               />
               <rect
                  x="517.74"
                  y="285.51"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 520.355px 293.37px;"
                  id="el22q0avny0ns"
                  class="animable"
               />
               <rect
                  x="525.29"
                  y="285.51"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 527.905px 293.37px;"
                  id="elb0vx4iyrqxk"
                  class="animable"
               />
               <rect
                  x="436.36"
                  y="363.6"
                  width="94.97"
                  height="26.74"
                  style="fill: rgb(38, 50, 56); transform-origin: 483.845px 376.97px;"
                  id="eld9hgksk58s"
                  class="animable"
               />
               <rect
                  x="439.01"
                  y="366.96"
                  width="5.32"
                  height="20.46"
                  style="fill: rgb(69, 90, 100); transform-origin: 441.67px 377.19px;"
                  id="ela7e0hqe2az"
                  class="animable"
               />
               <path
                  d="M450.59,371.27a1.69,1.69,0,1,1-1.69-1.69A1.69,1.69,0,0,1,450.59,371.27Z"
                  style="fill: rgb(255, 255, 255); transform-origin: 448.9px 371.27px;"
                  id="elqvrgjem72t"
                  class="animable"
               />
               <path
                  d="M450.59,378.5a1.69,1.69,0,1,1-1.69-1.69A1.69,1.69,0,0,1,450.59,378.5Z"
                  style="fill: rgb(255, 255, 255); transform-origin: 448.9px 378.5px;"
                  id="elnhaiun98zhm"
                  class="animable"
               />
               <rect
                  x="457.35"
                  y="369.58"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 459.965px 377.44px;"
                  id="el19f8er05nbh"
                  class="animable"
               />
               <rect
                  x="464.9"
                  y="369.58"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 467.515px 377.44px;"
                  id="elmkugkku0x7"
                  class="animable"
               />
               <rect
                  x="472.45"
                  y="369.58"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 475.065px 377.44px;"
                  id="elmikm8rvuq3o"
                  class="animable"
               />
               <rect
                  x="479.99"
                  y="369.58"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 482.605px 377.44px;"
                  id="el1zheatf0ovi"
                  class="animable"
               />
               <rect
                  x="487.54"
                  y="369.58"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 490.155px 377.44px;"
                  id="elr7yz50oksb"
                  class="animable"
               />
               <rect
                  x="495.09"
                  y="369.58"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 497.705px 377.44px;"
                  id="elq0is8f02e5"
                  class="animable"
               />
               <rect
                  x="502.64"
                  y="369.58"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 505.255px 377.44px;"
                  id="el7bui4t6jym4"
                  class="animable"
               />
               <rect
                  x="510.19"
                  y="369.58"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 512.805px 377.44px;"
                  id="el6g7rrg6vrl5"
                  class="animable"
               />
               <rect
                  x="517.74"
                  y="369.58"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 520.355px 377.44px;"
                  id="elzk9hz6aabgc"
                  class="animable"
               />
               <rect
                  x="525.29"
                  y="369.58"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 527.905px 377.44px;"
                  id="ela6nxvuaupmp"
                  class="animable"
               />
               <rect
                  x="436.36"
                  y="321.6"
                  width="94.97"
                  height="26.74"
                  style="fill: rgb(38, 50, 56); transform-origin: 483.845px 334.97px;"
                  id="eleuxupkiz2g9"
                  class="animable"
               />
               <rect
                  x="439.01"
                  y="324.97"
                  width="5.32"
                  height="20.46"
                  style="fill: rgb(69, 90, 100); transform-origin: 441.67px 335.2px;"
                  id="elt2inb8kgas"
                  class="animable"
               />
               <path
                  d="M450.59,329.27a1.69,1.69,0,1,1-1.69-1.69A1.69,1.69,0,0,1,450.59,329.27Z"
                  style="fill: rgb(255, 255, 255); transform-origin: 448.9px 329.27px;"
                  id="elmkh9twh6ee"
                  class="animable"
               />
               <path
                  d="M450.59,336.5a1.69,1.69,0,1,1-1.69-1.69A1.69,1.69,0,0,1,450.59,336.5Z"
                  style="fill: rgb(255, 255, 255); transform-origin: 448.9px 336.5px;"
                  id="el6drc3js6zpr"
                  class="animable"
               />
               <rect
                  x="457.35"
                  y="327.58"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 459.965px 335.44px;"
                  id="elwtt8ytn0w7r"
                  class="animable"
               />
               <rect
                  x="464.9"
                  y="327.58"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 467.515px 335.44px;"
                  id="elhr0xfe5i04r"
                  class="animable"
               />
               <rect
                  x="472.45"
                  y="327.58"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 475.065px 335.44px;"
                  id="elqrc0yqedbo9"
                  class="animable"
               />
               <rect
                  x="479.99"
                  y="327.58"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 482.605px 335.44px;"
                  id="elg28jkci1a44"
                  class="animable"
               />
               <rect
                  x="487.54"
                  y="327.58"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 490.155px 335.44px;"
                  id="elwvr6cveruds"
                  class="animable"
               />
               <rect
                  x="495.09"
                  y="327.58"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 497.705px 335.44px;"
                  id="el3o0dgqi4adm"
                  class="animable"
               />
               <rect
                  x="502.64"
                  y="327.58"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 505.255px 335.44px;"
                  id="elmgerylqvilo"
                  class="animable"
               />
               <rect
                  x="510.19"
                  y="327.58"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 512.805px 335.44px;"
                  id="elbvfsgeet6b6"
                  class="animable"
               />
               <rect
                  x="517.74"
                  y="327.58"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 520.355px 335.44px;"
                  id="elijjxjqrm89i"
                  class="animable"
               />
               <rect
                  x="525.29"
                  y="327.58"
                  width="5.23"
                  height="15.72"
                  style="fill: rgb(69, 90, 100); transform-origin: 527.905px 335.44px;"
                  id="elpsy3y04qqdg"
                  class="animable"
               />
               <path
                  d="M495.09,118.33a4.26,4.26,0,0,1-.09-.82c0-.54-.07-1.35-.1-2.38s0-2.29-.11-3.75a24,24,0,0,0-.65-4.88,17.59,17.59,0,0,0-2.54-5.35A11.87,11.87,0,0,0,486.4,97a25.14,25.14,0,0,0-7.39-1.5l-8.18-.71c-11.21-1-21.37-1.6-28.74-1.73-3.69-.08-6.67,0-8.73,0L431,93a4.36,4.36,0,0,1-.83,0,3.14,3.14,0,0,1,.82-.1l2.38-.14c2.06-.08,5-.17,8.73-.15,7.39,0,17.58.58,28.8,1.56l8.18.72a25.36,25.36,0,0,1,7.54,1.57,12.37,12.37,0,0,1,5.4,4.41,17.62,17.62,0,0,1,2.54,5.53,23.54,23.54,0,0,1,.58,5c0,1.47,0,2.73,0,3.76s0,1.77,0,2.38A4.29,4.29,0,0,1,495.09,118.33Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 462.656px 105.469px;"
                  id="elbipj2kdsao9"
                  class="animable"
               />
               <path
                  d="M466.28,118.33a3.81,3.81,0,0,1-.06-.77c0-.58,0-1.32,0-2.24s0-2.16-.11-3.52a10.88,10.88,0,0,0-1.17-4.41,8.49,8.49,0,0,0-4.29-3.3,11.77,11.77,0,0,0-6.26-.64,10.66,10.66,0,0,0-3.23,1.1,6.12,6.12,0,0,0-2.51,2.38,3.39,3.39,0,0,0,0,3.35,4.46,4.46,0,0,0,2.85,2.14,3.59,3.59,0,0,0,3.33-1,4.93,4.93,0,0,0,1.5-3.17,4.76,4.76,0,0,0-1-3.25,6.92,6.92,0,0,0-2.51-2.22,9.33,9.33,0,0,0-3.14-.81c-1.07-.16-2.11-.3-3.12-.41-2-.23-3.91-.36-5.64-.43-3.46-.13-6.27-.08-8.21-.08h-2.23a4.19,4.19,0,0,1-.78,0,3.55,3.55,0,0,1,.77-.08l2.23-.11c1.94-.08,4.75-.2,8.23-.12,1.74.05,3.64.15,5.68.36,1,.1,2.07.23,3.15.38.54.09,1.08.16,1.64.26a6.44,6.44,0,0,1,1.68.58,7.79,7.79,0,0,1,2.73,2.39,5.41,5.41,0,0,1,1.11,3.62,5.56,5.56,0,0,1-1.67,3.57,4.24,4.24,0,0,1-3.88,1.11,5,5,0,0,1-3.24-2.44,4,4,0,0,1,0-3.92,6.69,6.69,0,0,1,2.76-2.6,11.09,11.09,0,0,1,3.41-1.15,12.23,12.23,0,0,1,6.53.73,8.73,8.73,0,0,1,4.48,3.55,11,11,0,0,1,1.14,4.6c.07,1.38,0,2.57,0,3.54s-.07,1.66-.09,2.24A4.17,4.17,0,0,1,466.28,118.33Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 448.09px 109.522px;"
                  id="elj0vdz177ef"
                  class="animable"
               />
               <path
                  d="M502.84,118.33a5.58,5.58,0,0,1-.19-.88c-.1-.58-.26-1.44-.5-2.54a49.06,49.06,0,0,0-2.79-9.06,26.37,26.37,0,0,0-8.27-11.09,15.57,15.57,0,0,0-7.58-2.89,79.68,79.68,0,0,0-8.9-.48c-12.27-.23-23.4-.18-31.45-.49-4-.14-7.27-.33-9.52-.49l-2.58-.21a5.48,5.48,0,0,1-.9-.12,5.62,5.62,0,0,1,.9,0l2.59.11c2.25.08,5.5.21,9.52.29,8.05.2,19.16.09,31.45.32a77.33,77.33,0,0,1,9,.5,16.14,16.14,0,0,1,7.83,3,24,24,0,0,1,5.22,5.53,32.34,32.34,0,0,1,3.1,5.85,45.61,45.61,0,0,1,2.63,9.18c.2,1.1.33,2,.39,2.56A3.82,3.82,0,0,1,502.84,118.33Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 466.504px 104.196px;"
                  id="elzk3fl21xmvd"
                  class="animable"
               />
               <rect
                  x="437.66"
                  y="67.71"
                  width="92.36"
                  height="13.41"
                  style="fill: rgb(38, 50, 56); transform-origin: 483.84px 74.415px;"
                  id="elfap5l8y69gw"
                  class="animable"
               />
               <rect
                  x="457.98"
                  y="74.41"
                  width="50.29"
                  height="6.7"
                  style="fill: rgb(69, 90, 100); transform-origin: 483.125px 77.76px;"
                  id="elm10965hivdj"
                  class="animable"
               />
               <path
                  d="M567.71,345.79c0,.06-1,.16-2.8.68a23.92,23.92,0,0,0-7,3.42,19.21,19.21,0,0,0-3.92,3.64,13.72,13.72,0,0,0-1.61,2.48,17.11,17.11,0,0,0-1,3c-1,4.23-.73,9.08-.52,14.14s-.12,10.07-2.12,14.12a15.76,15.76,0,0,1-3.77,5,18.32,18.32,0,0,1-9,4.23,15.76,15.76,0,0,1-3.4.14,12.46,12.46,0,0,1-2.13-.33,3.77,3.77,0,0,1-.71-.22c0-.08,1,.24,2.85.32a16.64,16.64,0,0,0,3.33-.25,17.89,17.89,0,0,0,4.21-1.35,17.56,17.56,0,0,0,4.47-2.92,15.4,15.4,0,0,0,3.6-4.9c1.9-3.93,2.22-8.84,2-13.86s-.52-10,.59-14.3a18.25,18.25,0,0,1,1.07-3.07,14.68,14.68,0,0,1,1.7-2.57,19.33,19.33,0,0,1,4.06-3.67,23,23,0,0,1,7.16-3.3,15.23,15.23,0,0,1,2.11-.4A2.51,2.51,0,0,1,567.71,345.79Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 548.72px 371.222px;"
                  id="el3341e8617lq"
                  class="animable"
               />
               <rect
                  x="525.13"
                  y="391.96"
                  width="7.58"
                  height="9.22"
                  style="fill: rgb(38, 50, 56); transform-origin: 528.92px 396.57px;"
                  id="el53lqii99pqu"
                  class="animable"
               />
               <rect
                  x="567.71"
                  y="322.49"
                  width="42.52"
                  height="46.59"
                  style="fill: rgb(69, 90, 100); transform-origin: 588.97px 345.785px;"
                  id="elsswlgzuxr0k"
                  class="animable"
               />
               <circle
                  cx="588.97"
                  cy="345.97"
                  r="14"
                  style="fill: rgb(38, 50, 56); transform-origin: 588.97px 345.97px;"
                  id="elaxk203emgm9"
                  class="animable"
               />
               <circle
                  cx="588.97"
                  cy="345.97"
                  r="7"
                  style="fill: rgb(69, 90, 100); transform-origin: 588.97px 345.97px;"
                  id="elnl9kfc81c5"
                  class="animable"
               />
               <circle
                  cx="573.46"
                  cy="329.72"
                  r="1.3"
                  style="fill: rgb(38, 50, 56); transform-origin: 573.46px 329.72px;"
                  id="elgunghe1dkxs"
                  class="animable"
               />
               <path
                  d="M605,329.72a1.3,1.3,0,1,1-1.3-1.3A1.3,1.3,0,0,1,605,329.72Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 603.7px 329.72px;"
                  id="elhb7hhsq1del"
                  class="animable"
               />
               <path
                  d="M605.3,364.12a1.3,1.3,0,1,1-1.3-1.3A1.3,1.3,0,0,1,605.3,364.12Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 604px 364.12px;"
                  id="el3g10b7mj6d3"
                  class="animable"
               />
               <path
                  d="M574.76,364.66a1.3,1.3,0,1,1-1.3-1.3A1.3,1.3,0,0,1,574.76,364.66Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 573.46px 364.66px;"
                  id="el356v58rort2"
                  class="animable"
               />
               <rect
                  x="610.23"
                  y="322.49"
                  width="3.43"
                  height="46.59"
                  style="fill: rgb(38, 50, 56); transform-origin: 611.945px 345.785px;"
                  id="elglcx9ub2txh"
                  class="animable"
               />
            </g>
            <g
               id="freepik--speech-bubble--inject-64"
               class="animable"
               style="transform-origin: 63.6946px 171.845px;"
            >
               <path
                  d="M96.63,202.6l-18.54-4.55.13,0a30.79,30.79,0,0,1-16,4.79,33.6,33.6,0,0,1-9.92-1.44A31.13,31.13,0,0,1,31,175.59a30.66,30.66,0,0,1,8-24.75,32.2,32.2,0,0,1,5.37-4.68c1-.62,2-1.26,3-1.8l1.57-.76.79-.38.82-.3a31.38,31.38,0,0,1,13.32-2A30.9,30.9,0,0,1,91,161.66a32.14,32.14,0,0,1,1.71,10,30.71,30.71,0,0,1-4.44,16.06v-.17c5.16,9.31,7.76,14,8.34,15-.6-1-3.29-5.67-8.63-14.87l0-.09,0-.08a30.52,30.52,0,0,0,4.28-15.88,31.65,31.65,0,0,0-1.73-9.85,30.22,30.22,0,0,0-5.42-9.55,30.58,30.58,0,0,0-34.42-8.79l-.8.29-.77.38-1.55.74c-1,.53-2,1.17-3,1.77a31.38,31.38,0,0,0-5.26,4.59A30.53,30.53,0,0,0,52.46,200.9a33.1,33.1,0,0,0,9.75,1.46A30.54,30.54,0,0,0,78,197.73l.06,0,.07,0Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 63.6946px 171.845px;"
                  id="eldfem97nb9dr"
                  class="animable"
               />
               <path
                  d="M59.18,158.07l1,15.48a2.5,2.5,0,0,0,2.36,2.35h0a2.52,2.52,0,0,0,2.65-2.23l1.71-15.56a2,2,0,0,0-2-2.19l-3.78.05A2,2,0,0,0,59.18,158.07Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 63.0433px 165.912px;"
                  id="elr5i10w10a7"
                  class="animable"
               />
               <path
                  d="M66.62,184.61a3.78,3.78,0,1,1-2.39-4.77A3.76,3.76,0,0,1,66.62,184.61Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 63.0333px 183.425px;"
                  id="elybcdtjfhrvk"
                  class="animable"
               />
            </g>
            <g
               id="freepik--Device--inject-64"
               class="animable"
               style="transform-origin: 337px 183.73px;"
            >
               <path
                  d="M313.79,156.92c-.06,0-.93-1.09-2.4-2.85s-3.57-4.15-5.9-6.77-4.4-5.06-5.8-6.89c-.7-.92-1.25-1.67-1.6-2.21a3.57,3.57,0,0,1-.51-.87c.06,0,.93,1.08,2.4,2.85s3.57,4.15,5.9,6.77,4.4,5.05,5.8,6.89c.7.92,1.25,1.67,1.6,2.21A3.37,3.37,0,0,1,313.79,156.92Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 305.685px 147.125px;"
                  id="el5y1paxbzvac"
                  class="animable"
               />
               <path
                  d="M332.94,146.47c-.13.05-4.32-12-9.36-27s-9-27.09-8.86-27.14,4.32,12,9.36,27S333.08,146.43,332.94,146.47Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 323.83px 119.4px;"
                  id="el6lkoggop4ax"
                  class="animable"
               />
               <path
                  d="M349.53,149.61c-.14-.05,1.91-6.72,4.56-14.9S359,119.92,359.15,120s-1.9,6.72-4.56,14.91S349.67,149.65,349.53,149.61Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 354.34px 134.805px;"
                  id="el0jlm20uwyw2u"
                  class="animable"
               />
               <path
                  d="M377.63,148.77c.08.12-2.47,2.08-5.49,4.63s-5.4,4.72-5.5,4.62a8.09,8.09,0,0,1,1.4-1.59c.92-.92,2.24-2.15,3.76-3.43s3-2.37,4-3.12A7.46,7.46,0,0,1,377.63,148.77Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 372.136px 153.397px;"
                  id="elvj57fll1d9"
                  class="animable"
               />
               <path
                  d="M362.51,108.59c.13,0,0,.79-.28,1.67s-.64,1.54-.78,1.49,0-.78.28-1.66S362.37,108.55,362.51,108.59Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 361.978px 110.17px;"
                  id="elkga6c1wjkro"
                  class="animable"
               />
               <path
                  d="M292.72,132c-.11.09-.5-.26-.87-.77s-.56-1-.44-1.07.5.26.87.77S292.84,132,292.72,132Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 292.065px 131.082px;"
                  id="el4bo4mv2ju04"
                  class="animable"
               />
               <path
                  d="M399.9,164H274.1a3.93,3.93,0,0,0-3.93,3.93v88.86a3.93,3.93,0,0,0,3.93,3.93h48.28s3.07,9.49-6.45,14.41h45.15s-10.75-3.69-8-14.41H399.9a3.93,3.93,0,0,0,3.93-3.93V167.93A3.93,3.93,0,0,0,399.9,164Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 337px 219.565px;"
                  id="elbfy64qny12"
                  class="animable"
               />
               <path
                  d="M338.68,251.37a2.42,2.42,0,0,1-3.41,3.41.7.7,0,0,1-.21-.21,2.42,2.42,0,0,1,3.41-3.41A1,1,0,0,1,338.68,251.37Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 336.87px 252.97px;"
                  id="el1v7vphe46r7"
                  class="animable"
               />
               <path
                  d="M275.19,165.63H398.81a2.85,2.85,0,0,1,2.85,2.85v76a0,0,0,0,1,0,0H272.34a0,0,0,0,1,0,0v-76A2.85,2.85,0,0,1,275.19,165.63Z"
                  style="fill: rgb(255, 255, 255); transform-origin: 337px 205.055px;"
                  id="elzwsog0vbith"
                  class="animable"
               />
               <path
                  d="M275.32,165.63h123.9a2.45,2.45,0,0,1,2.45,2.45v4.1a0,0,0,0,1,0,0H272.34a0,0,0,0,1,0,0v-3.57A3,3,0,0,1,275.32,165.63Z"
                  style="fill: rgb(235, 235, 235); transform-origin: 337.005px 168.905px;"
                  id="elkstbftxhsqp"
                  class="animable"
               />
               <path
                  d="M277.36,169.05a.91.91,0,1,1-.9-.91A.9.9,0,0,1,277.36,169.05Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 276.45px 169.05px;"
                  id="elg64g4oqla1f"
                  class="animable"
               />
               <path
                  d="M280.07,169.05a.91.91,0,1,1-.91-.91A.9.9,0,0,1,280.07,169.05Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 279.16px 169.05px;"
                  id="el97kk6x6oiyn"
                  class="animable"
               />
               <path
                  d="M282.65,169.05a.91.91,0,1,1-.91-.91A.9.9,0,0,1,282.65,169.05Z"
                  style="fill: rgb(224, 224, 224); transform-origin: 281.74px 169.05px;"
                  id="el0pqb95i1rqlr"
                  class="animable"
               />
               <path
                  d="M377.41,260.73s-17.9.07-40,.07-40,0-40-.07,17.89-.08,40-.08S377.41,260.69,377.41,260.73Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 337.41px 260.725px;"
                  id="elka9y8c2411c"
                  class="animable"
               />
               <path
                  d="M324.76,201.15c0,4-2.92,7.45-9.35,7.45a15.53,15.53,0,0,1-8.57-2.41l2.06-4a10.83,10.83,0,0,0,6.39,2c2.6,0,4.2-1.09,4.2-2.92s-1.15-2.92-5.23-2.92h-5.75l1.16-12.65h13.71v4.17H314l-.35,4.27h1.83C322.12,194.18,324.76,197.17,324.76,201.15Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 315.8px 197.151px;"
                  id="elr5aisv4n5bs"
                  class="animable"
               />
               <path
                  d="M326.87,197c0-7.41,4.11-11.62,9.63-11.62s9.63,4.21,9.63,11.62-4.07,11.63-9.63,11.63S326.87,204.39,326.87,197Zm14,0c0-5.1-1.8-7.22-4.4-7.22s-4.36,2.12-4.36,7.22,1.79,7.23,4.36,7.23S340.9,202.08,340.9,197Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 336.5px 197.005px;"
                  id="elhsho26yfj07"
                  class="animable"
               />
               <path
                  d="M348.67,197c0-7.41,4.11-11.62,9.63-11.62s9.63,4.21,9.63,11.62-4.08,11.63-9.63,11.63S348.67,204.39,348.67,197Zm14,0c0-5.1-1.8-7.22-4.4-7.22s-4.37,2.12-4.37,7.22,1.8,7.23,4.37,7.23S362.7,202.08,362.7,197Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 358.3px 197.005px;"
                  id="elow3inv31lf"
                  class="animable"
               />
               <path
                  d="M291.51,214.06h.95v6.64h-.95Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 291.985px 217.38px;"
                  id="eldwswrui9v1"
                  class="animable"
               />
               <path
                  d="M300.16,214.06v6.64h-.77l-4-4.95v4.95h-.95v-6.64h.78l4,5v-5Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 297.3px 217.38px;"
                  id="eloa3u7evm6p"
                  class="animable"
               />
               <path
                  d="M303.47,214.89h-2.28v-.83h5.5v.83h-2.28v5.81h-.94Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 303.94px 217.38px;"
                  id="elqkrn0vetb5b"
                  class="animable"
               />
               <path
                  d="M312.54,219.88v.82h-4.82v-6.64h4.69v.83h-3.74v2H312v.8h-3.33v2.15Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 310.13px 217.38px;"
                  id="el0z4wdkqpvuok"
                  class="animable"
               />
               <path
                  d="M318.52,220.7l-1.44-2-.41,0H315v2h-.94v-6.64h2.59c1.72,0,2.77.87,2.77,2.32a2.09,2.09,0,0,1-1.46,2.09l1.57,2.23Zm0-4.32c0-.95-.64-1.49-1.85-1.49H315v3h1.62C317.85,217.88,318.49,217.33,318.49,216.38Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 316.795px 217.38px;"
                  id="elmk8kai95wh"
                  class="animable"
               />
               <path
                  d="M326.69,214.06v6.64h-.78l-4-4.95v4.95H321v-6.64h.78l4,5v-5Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 323.845px 217.38px;"
                  id="elgrxbqm3wbnh"
                  class="animable"
               />
               <path
                  d="M332.91,219h-3.53l-.73,1.66h-1l3-6.64h.94l3,6.64h-1Zm-.34-.76L331.14,215l-1.43,3.25Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 331.12px 217.34px;"
                  id="elnb3hmd6cz9i"
                  class="animable"
               />
               <path
                  d="M335.62,214.06h.95v5.82h3.59v.82h-4.54Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 337.89px 217.38px;"
                  id="elmdhhv1zyq7"
                  class="animable"
               />
               <path
                  d="M343.19,220l.36-.74a3.42,3.42,0,0,0,2.19.76c1.15,0,1.64-.44,1.64-1,0-1.62-4-.6-4-3.07,0-1,.79-1.89,2.54-1.89a3.94,3.94,0,0,1,2.14.58l-.32.76a3.42,3.42,0,0,0-1.82-.54c-1.13,0-1.61.48-1.61,1.06,0,1.62,4,.6,4,3,0,1-.82,1.89-2.57,1.89A4,4,0,0,1,343.19,220Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 345.75px 217.436px;"
                  id="el59oeokm9yhu"
                  class="animable"
               />
               <path
                  d="M354.52,219.88v.82h-4.83v-6.64h4.69v.83h-3.74v2H354v.8h-3.33v2.15Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 352.105px 217.38px;"
                  id="el5x5wi0w1bon"
                  class="animable"
               />
               <path
                  d="M360.49,220.7l-1.43-2-.42,0H357v2h-.95v-6.64h2.59c1.73,0,2.77.87,2.77,2.32a2.09,2.09,0,0,1-1.46,2.09l1.57,2.23Zm0-4.32c0-.95-.63-1.49-1.85-1.49H357v3h1.61C359.83,217.88,360.46,217.33,360.46,216.38Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 358.785px 217.38px;"
                  id="elzx1y2xgyiqo"
                  class="animable"
               />
               <path
                  d="M368.71,214.06l-2.91,6.64h-.94l-2.92-6.64h1l2.4,5.46,2.41-5.46Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 365.325px 217.38px;"
                  id="elkg8q8mp9vdc"
                  class="animable"
               />
               <path
                  d="M374.38,219.88v.82h-4.82v-6.64h4.68v.83H370.5v2h3.34v.8H370.5v2.15Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 371.97px 217.38px;"
                  id="ellpphu3i77k"
                  class="animable"
               />
               <path
                  d="M380.35,220.7l-1.43-2-.42,0h-1.64v2h-.95v-6.64h2.59c1.73,0,2.77.87,2.77,2.32a2.09,2.09,0,0,1-1.46,2.09l1.58,2.23Zm0-4.32c0-.95-.63-1.49-1.85-1.49h-1.61v3h1.61C379.69,217.88,380.32,217.33,380.32,216.38Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 378.65px 217.38px;"
                  id="el3rmaup6k35v"
                  class="animable"
               />
               <path
                  d="M326.12,231.33v1.32h-5.47v-7.07H326v1.31h-3.72v1.54h3.29v1.27h-3.29v1.63Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 323.385px 229.115px;"
                  id="elqg0lfqddlos"
                  class="animable"
               />
               <path
                  d="M331.93,232.65l-1.36-2h-1.51v2h-1.64v-7.07h3.06c1.89,0,3.08,1,3.08,2.56a2.3,2.3,0,0,1-1.46,2.23l1.59,2.28Zm-1.54-5.74h-1.33v2.46h1.33c1,0,1.51-.46,1.51-1.23S331.39,226.91,330.39,226.91Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 330.555px 229.115px;"
                  id="elzqe6mlzbmc"
                  class="animable"
               />
               <path
                  d="M339.35,232.65l-1.36-2h-1.51v2h-1.63v-7.07h3.06c1.89,0,3.07,1,3.07,2.56a2.3,2.3,0,0,1-1.46,2.23l1.59,2.28Zm-1.53-5.74h-1.34v2.46h1.34c1,0,1.5-.46,1.5-1.23S338.82,226.91,337.82,226.91Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 337.98px 229.115px;"
                  id="elx8clh3bbyvi"
                  class="animable"
               />
               <path
                  d="M341.82,229.11a3.88,3.88,0,1,1,3.87,3.66A3.66,3.66,0,0,1,341.82,229.11Zm6.08,0a2.21,2.21,0,1,0-2.21,2.26A2.16,2.16,0,0,0,347.9,229.11Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 345.694px 228.893px;"
                  id="elyfdotfg6mes"
                  class="animable"
               />
               <path
                  d="M355.3,232.65l-1.37-2h-1.5v2h-1.64v-7.07h3.06c1.89,0,3.07,1,3.07,2.56a2.29,2.29,0,0,1-1.45,2.23l1.58,2.28Zm-1.54-5.74h-1.33v2.46h1.33c1,0,1.51-.46,1.51-1.23S354.76,226.91,353.76,226.91Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 353.92px 229.115px;"
                  id="elk8e00wf3mi8"
                  class="animable"
               />
               <path
                  d="M285.69,206.3a2.35,2.35,0,0,1-2.06-1.2,2.39,2.39,0,0,1,0-2.4l6.95-11.91a2.39,2.39,0,0,1,2.08-1.19h0a2.38,2.38,0,0,1,2.06,1.21l6.84,12a2.35,2.35,0,0,1,0,2.39,2.38,2.38,0,0,1-2.08,1.19l-13.79-.07Zm7-16h0a1.64,1.64,0,0,0-1.46.83l-6.95,11.91a1.68,1.68,0,0,0,1.44,2.53h0l13.79.06a1.68,1.68,0,0,0,1.47-2.51l-6.84-12A1.66,1.66,0,0,0,292.67,190.32Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 292.597px 197.995px;"
                  id="el59zgzbapi8"
                  class="animable"
               />
               <path
                  d="M291.63,202.47a.87.87,0,0,1,.92-.87.86.86,0,0,1,.9.88.88.88,0,0,1-.9.89A.89.89,0,0,1,291.63,202.47Zm.08-7.18h1.69l-.29,5.35H292Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 292.54px 199.33px;"
                  id="elcjbjhxmxdrm"
                  class="animable"
               />
               <path
                  d="M373.72,206.3a2.35,2.35,0,0,1-2.06-1.2,2.39,2.39,0,0,1,0-2.4l6.95-11.91a2.39,2.39,0,0,1,2.08-1.19h0a2.38,2.38,0,0,1,2.06,1.21l6.84,12a2.35,2.35,0,0,1,0,2.39,2.38,2.38,0,0,1-2.08,1.19l-13.79-.07Zm7-16h0a1.64,1.64,0,0,0-1.46.83l-6.95,11.91a1.68,1.68,0,0,0,1.44,2.53h0l13.8.06a1.68,1.68,0,0,0,1.46-2.51l-6.84-12A1.66,1.66,0,0,0,380.7,190.32Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 380.627px 197.995px;"
                  id="elcl4dkibapfm"
                  class="animable"
               />
               <path
                  d="M379.66,202.47a.87.87,0,0,1,.92-.87.86.86,0,0,1,.9.88.88.88,0,0,1-.9.89A.89.89,0,0,1,379.66,202.47Zm.08-7.18h1.69l-.29,5.35H380Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 380.57px 199.33px;"
                  id="elcuciaqip6sh"
                  class="animable"
               />
            </g>
            <g
               id="freepik--Plant--inject-64"
               class="animable"
               style="transform-origin: 664.465px 346.899px;"
            >
               <polygon
                  points="639.4 367.22 645.3 406 679.59 406 687.55 367.78 639.4 367.22"
                  style="fill: rgb(255, 136, 0); transform-origin: 663.475px 386.61px;"
                  id="eljfyn9f15jkb"
                  class="animable"
               />
               <path
                  d="M682.75,392.08c0,.11-8.78.2-19.62.2s-19.62-.09-19.62-.2,8.78-.2,19.62-.2S682.75,392,682.75,392.08Z"
                  style="fill: rgb(250, 250, 250); transform-origin: 663.13px 392.08px;"
                  id="el5nih2q0e4kq"
                  class="animable"
               />
               <path
                  d="M682.89,390.17c0,.11-8.85.2-19.76.2s-19.76-.09-19.76-.2,8.85-.2,19.76-.2S682.89,390.06,682.89,390.17Z"
                  style="fill: rgb(250, 250, 250); transform-origin: 663.13px 390.17px;"
                  id="elvwwcfel8vj8"
                  class="animable"
               />
               <path
                  d="M682.82,388c0,.12-8.85.21-19.76.21s-19.76-.09-19.76-.21,8.85-.2,19.76-.2S682.82,387.9,682.82,388Z"
                  style="fill: rgb(250, 250, 250); transform-origin: 663.06px 388.005px;"
                  id="elx3ofikyk5f"
                  class="animable"
               />
               <path
                  d="M649.24,403.79a31.07,31.07,0,0,1-1-4.88,30.41,30.41,0,0,1-.66-5,30.73,30.73,0,0,1,1.05,4.88A31.66,31.66,0,0,1,649.24,403.79Z"
                  style="fill: rgb(250, 250, 250); transform-origin: 648.41px 398.85px;"
                  id="elp29i0asriik"
                  class="animable"
               />
               <path
                  d="M651.57,403.38a37.92,37.92,0,0,1-.43-4.76,39.88,39.88,0,0,1-.22-4.78,22.55,22.55,0,0,1,.63,4.75A22.8,22.8,0,0,1,651.57,403.38Z"
                  style="fill: rgb(250, 250, 250); transform-origin: 651.301px 398.61px;"
                  id="elk8bcrlw082"
                  class="animable"
               />
               <path
                  d="M655.82,403.38a38.95,38.95,0,0,1-1.15-9.85,144.66,144.66,0,0,1,1.15,9.85Z"
                  style="fill: rgb(250, 250, 250); transform-origin: 655.244px 398.455px;"
                  id="el0s8cieu5wm9k"
                  class="animable"
               />
               <path
                  d="M658.81,403.58a24.1,24.1,0,0,1-.48-5,24.42,24.42,0,0,1,.15-5,41.19,41.19,0,0,1,.25,5A43.85,43.85,0,0,1,658.81,403.58Z"
                  style="fill: rgb(250, 250, 250); transform-origin: 658.556px 398.58px;"
                  id="elmeg5minho"
                  class="animable"
               />
               <path
                  d="M664.09,403.38a28.39,28.39,0,0,1-.36-4.71,28,28,0,0,1,0-4.73,28.45,28.45,0,0,1,.36,4.72A27.81,27.81,0,0,1,664.09,403.38Z"
                  style="fill: rgb(250, 250, 250); transform-origin: 663.91px 398.66px;"
                  id="elu8q6on4zh4"
                  class="animable"
               />
               <path
                  d="M668,403.58a28.82,28.82,0,0,1-.16-4.87,29.64,29.64,0,0,1,.24-4.87,30.13,30.13,0,0,1,.16,4.87A29.53,29.53,0,0,1,668,403.58Z"
                  style="fill: rgb(250, 250, 250); transform-origin: 668.038px 398.71px;"
                  id="elm6f2u6wvg3o"
                  class="animable"
               />
               <path
                  d="M671.57,403.07a64.61,64.61,0,0,1,1-10.15,64.92,64.92,0,0,1-1,10.15Z"
                  style="fill: rgb(250, 250, 250); transform-origin: 672.07px 397.995px;"
                  id="elmg4t1dhwnlm"
                  class="animable"
               />
               <path
                  d="M676.23,402.56a17.51,17.51,0,0,1,.58-4.33,17.14,17.14,0,0,1,1.27-4.18,37.49,37.49,0,0,1-.88,4.26A36.38,36.38,0,0,1,676.23,402.56Z"
                  style="fill: rgb(250, 250, 250); transform-origin: 677.155px 398.305px;"
                  id="elik8uhtvtek"
                  class="animable"
               />
               <path
                  d="M672.93,290.68a.67.67,0,0,1,0,.19c0,.15-.1.33-.16.55-.16.51-.38,1.21-.65,2.09s-.65,2-1,3.32-.83,2.77-1.24,4.42-.9,3.45-1.33,5.41-.88,4-1.33,6.24c-.82,4.42-1.57,9.31-2.1,14.48s-.73,10.11-.8,14.6c0,2.25,0,4.39.06,6.39s.14,3.86.25,5.56.23,3.23.33,4.58.23,2.5.33,3.45.18,1.65.23,2.18c0,.23,0,.42,0,.57s0,.19,0,.19a1,1,0,0,1,0-.19c0-.15-.05-.33-.09-.56-.07-.53-.17-1.25-.3-2.17s-.28-2.1-.4-3.45-.31-2.88-.4-4.58-.24-3.57-.29-5.57-.09-4.14-.1-6.4c.05-4.51.27-9.46.77-14.64s1.3-10.08,2.14-14.51c.46-2.2.87-4.31,1.36-6.25s.93-3.76,1.39-5.4.9-3.12,1.29-4.41.76-2.41,1.08-3.3.54-1.57.72-2.08l.2-.53A.82.82,0,0,1,672.93,290.68Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 668.438px 327.79px;"
                  id="elztparsrbb5"
                  class="animable"
               />
               <path
                  d="M666.74,314.7a12.75,12.75,0,0,1,5.33-6.73,3,3,0,0,1,2.82-.52c1.2.58,1.29,2.26.94,3.54a9.41,9.41,0,0,1-3.88,5.29,8,8,0,0,1-5.83,1.47"
                  style="fill: rgb(69, 90, 100); transform-origin: 671.064px 312.564px;"
                  id="elugt3rk0lyup"
                  class="animable"
               />
               <path
                  d="M664.66,330.92c.88-3.35,3.55-8.11,6.33-10.18a4,4,0,0,1,1.44-.77,1.67,1.67,0,0,1,1.54.33,2.39,2.39,0,0,1,.34,2.23,13.5,13.5,0,0,1-10,10.07"
                  style="fill: rgb(69, 90, 100); transform-origin: 669.378px 326.253px;"
                  id="elh4hjt8cz7uj"
                  class="animable"
               />
               <path
                  d="M664.08,345.19a19.68,19.68,0,0,1,6.39-8,3,3,0,0,1,2.23-.79c1.21.22,1.76,1.7,1.65,2.92-.22,2.53-2.15,4.55-4.14,6.12a25.65,25.65,0,0,1-5.91,3"
                  style="fill: rgb(69, 90, 100); transform-origin: 669.222px 342.417px;"
                  id="elzm4bs7ehvuk"
                  class="animable"
               />
               <path
                  d="M664.41,355.45a18.87,18.87,0,0,1,5.43-6.18,3.87,3.87,0,0,1,1.63-.73,1.67,1.67,0,0,1,1.6.61c.54.8,0,1.88-.56,2.65a15.5,15.5,0,0,1-7.75,5.69"
                  style="fill: rgb(69, 90, 100); transform-origin: 668.852px 353.002px;"
                  id="elkkc8e5xzmz"
                  class="animable"
               />
               <path
                  d="M664.14,351.29a60.58,60.58,0,0,0-7.77-7.92c-.44-.37-1-.76-1.55-.58a1.13,1.13,0,0,0-.71,1,3,3,0,0,0,.29,1.3,15,15,0,0,0,10,8.41"
                  style="fill: rgb(69, 90, 100); transform-origin: 659.255px 348.122px;"
                  id="el2cjpvvury8f"
                  class="animable"
               />
               <path
                  d="M664.38,337.93l-6.1-7.44a7.37,7.37,0,0,0-2-1.88,2.22,2.22,0,0,0-3.44,2.43,6.53,6.53,0,0,0,1.19,2.44,18.23,18.23,0,0,0,4.45,4.73c1.79,1.23,3.42,2,5.57,1.71"
                  style="fill: rgb(69, 90, 100); transform-origin: 658.563px 334.08px;"
                  id="elsh9txdhonst"
                  class="animable"
               />
               <path
                  d="M665.23,322.9a21.17,21.17,0,0,0-6.14-9.22,3.54,3.54,0,0,0-1.6-.94,2.71,2.71,0,0,0-2.8,2,5.06,5.06,0,0,0,.56,4,10.61,10.61,0,0,0,2.87,3,24.67,24.67,0,0,0,6.79,3.67"
                  style="fill: rgb(69, 90, 100); transform-origin: 659.867px 319.072px;"
                  id="el9jhwmbpu1q"
                  class="animable"
               />
               <path
                  d="M667.67,309.49c-.59-4.31-2.83-7.9-5.44-11.39-.54-.74-1.31-1.52-2.22-1.38a1.75,1.75,0,0,0-1.27,1.09,4,4,0,0,0-.24,1.73,13.31,13.31,0,0,0,8.64,11.9"
                  style="fill: rgb(69, 90, 100); transform-origin: 663.078px 304.072px;"
                  id="el1t7s16cdmre"
                  class="animable"
               />
               <path
                  d="M669.38,302.64a35.42,35.42,0,0,1-.22-6.67,11.91,11.91,0,0,1,2.21-6.21,5.08,5.08,0,0,1,2.22-1.76,2.79,2.79,0,0,1,2.72.36,3,3,0,0,1,.93,2.39,7.67,7.67,0,0,1-.69,2.56c-1.63,3.91-4.34,8.24-7.17,9.33"
                  style="fill: rgb(69, 90, 100); transform-origin: 673.17px 295.219px;"
                  id="el6gzsumeo1o8"
                  class="animable"
               />
               <path
                  d="M642.79,307.78a2.7,2.7,0,0,1,0,.55c0,.4,0,.92,0,1.57s0,1.51,0,2.47,0,2.07.12,3.28c.1,2.42.34,5.31.71,8.5s.94,6.67,1.69,10.3,1.67,7,2.59,10.11,1.89,5.8,2.76,8.07c.42,1.14.85,2.15,1.21,3.05s.69,1.66,1,2.28.46,1.07.61,1.44a2.13,2.13,0,0,1,.19.51,3,3,0,0,1-.26-.48l-.68-1.41c-.3-.61-.65-1.36-1-2.26s-.84-1.89-1.27-3c-.91-2.25-1.89-5-2.86-8.06s-1.85-6.5-2.63-10.14-1.29-7.14-1.66-10.34-.56-6.1-.63-8.53c-.06-1.22,0-2.32-.06-3.28s0-1.8,0-2.48.05-1.17.06-1.57A3.43,3.43,0,0,1,642.79,307.78Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 648.132px 333.845px;"
                  id="el9in8xio1hq5"
                  class="animable"
               />
               <path
                  d="M643.75,325.47a9.06,9.06,0,0,1,2.18-5.73,2.15,2.15,0,0,1,1.81-1c.93.13,1.36,1.26,1.39,2.21a6.67,6.67,0,0,1-1.5,4.43,5.63,5.63,0,0,1-3.65,2.26"
                  style="fill: rgb(38, 50, 56); transform-origin: 646.442px 323.19px;"
                  id="el0teogu6q2xx"
                  class="animable"
               />
               <path
                  d="M645.82,337c-.12-2.47.68-6.29,2.12-8.29a3.09,3.09,0,0,1,.81-.84,1.21,1.21,0,0,1,1.12-.1,1.69,1.69,0,0,1,.71,1.44,9.62,9.62,0,0,1-4.64,9"
                  style="fill: rgb(38, 50, 56); transform-origin: 648.209px 332.944px;"
                  id="elxzolmwp339"
                  class="animable"
               />
               <path
                  d="M648.5,346.8a14,14,0,0,1,2.62-6.84,2.14,2.14,0,0,1,1.35-1c.87-.11,1.56.78,1.75,1.64.4,1.76-.48,3.56-1.5,5.05a18.55,18.55,0,0,1-3.37,3.34"
                  style="fill: rgb(38, 50, 56); transform-origin: 651.409px 343.97px;"
                  id="elgusjo3gl46o"
                  class="animable"
               />
               <path
                  d="M650.93,353.72a13.31,13.31,0,0,1,2.37-5.38,2.67,2.67,0,0,1,1-.85,1.19,1.19,0,0,1,1.22.07c.54.43.42,1.28.19,1.93a11.11,11.11,0,0,1-4,5.54"
                  style="fill: rgb(38, 50, 56); transform-origin: 653.417px 351.192px;"
                  id="elpx460dhcsi"
                  class="animable"
               />
               <path
                  d="M649.85,350.94a43.37,43.37,0,0,0-7-3.72,1.24,1.24,0,0,0-1.18-.06.81.81,0,0,0-.26.86,2,2,0,0,0,.48.82,10.74,10.74,0,0,0,8.62,3.58"
                  style="fill: rgb(38, 50, 56); transform-origin: 645.943px 349.738px;"
                  id="elgvvmp36iq1"
                  class="animable"
               />
               <path
                  d="M647.14,341.79,641.39,338a5.22,5.22,0,0,0-1.76-.85,1.58,1.58,0,0,0-1.82,2.39,4.62,4.62,0,0,0,1.34,1.41,13,13,0,0,0,4.05,2.26,5.31,5.31,0,0,0,4.16,0"
                  style="fill: rgb(38, 50, 56); transform-origin: 642.445px 340.348px;"
                  id="elwdkxzsbd3fc"
                  class="animable"
               />
               <path
                  d="M644.49,331.37a15.3,15.3,0,0,0-6.17-4.95,2.57,2.57,0,0,0-1.29-.29,1.92,1.92,0,0,0-1.49,1.94,3.66,3.66,0,0,0,1.25,2.63,7.61,7.61,0,0,0,2.61,1.45,17.82,17.82,0,0,0,5.41,1"
                  style="fill: rgb(38, 50, 56); transform-origin: 640.174px 329.639px;"
                  id="el43rdoruoikd"
                  class="animable"
               />
               <path
                  d="M643.26,321.72c-1.33-2.81-3.63-4.77-6.16-6.58a1.87,1.87,0,0,0-1.8-.47,1.27,1.27,0,0,0-.64,1,2.9,2.9,0,0,0,.21,1.23,9.51,9.51,0,0,0,8.45,6.24"
                  style="fill: rgb(38, 50, 56); transform-origin: 638.988px 318.872px;"
                  id="el4v6z97ivxys"
                  class="animable"
               />
               <path
                  d="M643,316.69a25.49,25.49,0,0,1-1.59-4.49,8.57,8.57,0,0,1,.17-4.71,3.75,3.75,0,0,1,1.13-1.68,2,2,0,0,1,1.93-.34,2.13,2.13,0,0,1,1.15,1.43,5.22,5.22,0,0,1,.08,1.89c-.26,3-1.18,6.55-2.87,7.9"
                  style="fill: rgb(38, 50, 56); transform-origin: 643.54px 311.024px;"
                  id="elpaojog70sus"
                  class="animable"
               />
               <path
                  d="M686.14,307.41a2.34,2.34,0,0,1,.05.54c0,.4,0,.92.06,1.57s0,1.51,0,2.48,0,2.07-.06,3.28c-.07,2.44-.28,5.33-.62,8.53s-.91,6.7-1.67,10.34-1.69,7.06-2.63,10.14-1.94,5.81-2.85,8.07c-.44,1.14-.89,2.14-1.27,3s-.73,1.64-1,2.26-.51,1.05-.69,1.41a3.71,3.71,0,0,1-.26.48,2.55,2.55,0,0,1,.19-.52c.16-.36.36-.84.61-1.44s.61-1.38,1-2.28.8-1.9,1.21-3.05c.88-2.26,1.82-5,2.77-8.06s1.82-6.49,2.59-10.12,1.29-7.11,1.69-10.3.6-6.07.71-8.5c.08-1.21.08-2.31.12-3.27s0-1.8,0-2.48,0-1.17,0-1.56A3.93,3.93,0,0,1,686.14,307.41Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 680.738px 333.46px;"
                  id="el79guq0kde9v"
                  class="animable"
               />
               <path
                  d="M685.19,325.09a9.08,9.08,0,0,0-2.18-5.73,2.19,2.19,0,0,0-1.81-1c-.94.14-1.37,1.26-1.4,2.21a6.75,6.75,0,0,0,1.5,4.44A5.67,5.67,0,0,0,685,327.3"
                  style="fill: rgb(69, 90, 100); transform-origin: 682.494px 322.83px;"
                  id="el8gk0q4agl4e"
                  class="animable"
               />
               <path
                  d="M683.12,336.58c.11-2.47-.68-6.28-2.12-8.29a2.82,2.82,0,0,0-.82-.83,1.21,1.21,0,0,0-1.12-.11,1.69,1.69,0,0,0-.71,1.44,9.63,9.63,0,0,0,4.64,9"
                  style="fill: rgb(69, 90, 100); transform-origin: 680.726px 332.526px;"
                  id="elek07mvpm7vn"
                  class="animable"
               />
               <path
                  d="M680.43,346.43a14,14,0,0,0-2.62-6.85,2.22,2.22,0,0,0-1.34-1c-.87-.11-1.57.78-1.76,1.64-.39,1.77.49,3.56,1.5,5.06a18.35,18.35,0,0,0,3.37,3.33"
                  style="fill: rgb(69, 90, 100); transform-origin: 677.523px 343.59px;"
                  id="els1paflmhecm"
                  class="animable"
               />
               <path
                  d="M678,353.34a13.65,13.65,0,0,0-2.37-5.38,3,3,0,0,0-.95-.85,1.21,1.21,0,0,0-1.22.07c-.55.43-.43,1.28-.2,1.93a11.07,11.07,0,0,0,4.06,5.54"
                  style="fill: rgb(69, 90, 100); transform-origin: 675.533px 350.814px;"
                  id="elvt8ka1g70qk"
                  class="animable"
               />
               <path
                  d="M679.09,350.56a42.9,42.9,0,0,1,7-3.71,1.25,1.25,0,0,1,1.18-.07.83.83,0,0,1,.26.87,2.27,2.27,0,0,1-.48.82,10.78,10.78,0,0,1-8.62,3.57"
                  style="fill: rgb(69, 90, 100); transform-origin: 682.997px 349.36px;"
                  id="elun86tdxfzs"
                  class="animable"
               />
               <path
                  d="M681.79,341.42l5.76-3.76a5.36,5.36,0,0,1,1.75-.85,1.8,1.8,0,0,1,1.78.54,1.74,1.74,0,0,1,0,1.85,4.5,4.5,0,0,1-1.34,1.41,12.9,12.9,0,0,1-4,2.26,5.31,5.31,0,0,1-4.16,0"
                  style="fill: rgb(69, 90, 100); transform-origin: 686.463px 340.025px;"
                  id="elnalqc1lnre9"
                  class="animable"
               />
               <path
                  d="M684.45,331a15.17,15.17,0,0,1,6.17-5,2.54,2.54,0,0,1,1.29-.29,1.92,1.92,0,0,1,1.48,1.94,3.57,3.57,0,0,1-1.25,2.63,7.52,7.52,0,0,1-2.61,1.45,17.48,17.48,0,0,1-5.41,1"
                  style="fill: rgb(69, 90, 100); transform-origin: 688.756px 329.219px;"
                  id="el5yo3nlx6af8"
                  class="animable"
               />
               <path
                  d="M685.68,321.35c1.33-2.81,3.63-4.77,6.15-6.59a1.87,1.87,0,0,1,1.81-.46,1.25,1.25,0,0,1,.63,1,2.86,2.86,0,0,1-.21,1.22,9.51,9.51,0,0,1-8.45,6.25"
                  style="fill: rgb(69, 90, 100); transform-origin: 689.942px 318.5px;"
                  id="el7ff11d2em9g"
                  class="animable"
               />
               <path
                  d="M686,316.32a25.84,25.84,0,0,0,1.58-4.5,8.44,8.44,0,0,0-.17-4.7,3.59,3.59,0,0,0-1.13-1.68,2,2,0,0,0-1.92-.34,2.09,2.09,0,0,0-1.15,1.43,5.44,5.44,0,0,0-.09,1.89c.27,3,1.18,6.54,2.88,7.9"
                  style="fill: rgb(69, 90, 100); transform-origin: 685.455px 310.655px;"
                  id="elk747czcdsz"
                  class="animable"
               />
               <path
                  d="M635.46,359.54v7.25a2.86,2.86,0,0,0,2.86,2.86H688a2.86,2.86,0,0,0,2.86-2.86v-7.25Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 663.16px 364.595px;"
                  id="eli6u3fre06al"
                  class="animable"
               />
               <g id="elpkbfeewcdm">
                  <g style="opacity: 0.4; transform-origin: 663.465px 372.44px;" class="animable">
                     <polygon
                        points="639.77 369.65 640.18 371.96 686 375.23 687.16 369.65 639.77 369.65"
                        id="eler8ksqmekon"
                        class="animable"
                        style="transform-origin: 663.465px 372.44px;"
                     />
                  </g>
               </g>
            </g>
            <g
               id="freepik--Floor--inject-64"
               class="animable"
               style="transform-origin: 375px 406.42px;"
            >
               <path
                  d="M716.25,406.42c0,.14-152.79.26-341.23.26s-341.27-.12-341.27-.26,152.76-.26,341.27-.26S716.25,406.27,716.25,406.42Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 375px 406.42px;"
                  id="ela1nvz2ww7zv"
                  class="animable"
               />
            </g>
            <g
               id="freepik--Character--inject-64"
               class="animable"
               style="transform-origin: 165.897px 330.136px;"
            >
               <path
                  d="M144.06,196h1.16a22.13,22.13,0,0,1,22.25,20.07c.85,10.53,1.65,22.16,1.57,27.81-.18,11.69-12.19,13.48-12.19,13.48l.45,10.38a14.3,14.3,0,0,1-13.46,14.76h0a14.29,14.29,0,0,1-15.11-13.59l-2.49-49.38C125.19,207.41,131.57,196.69,144.06,196Z"
                  style="fill: rgb(255, 190, 157); transform-origin: 147.587px 239.262px;"
                  id="elihyn6uvolqi"
                  class="animable"
               />
               <path
                  d="M157,257.35a29.65,29.65,0,0,1-15.71-4.51s3.68,8.42,15.66,7.39Z"
                  style="fill: rgb(235, 153, 110); transform-origin: 149.145px 256.579px;"
                  id="el7a1yg1b52l"
                  class="animable"
               />
               <path
                  d="M164.93,224.6a1.7,1.7,0,0,1-1.66,1.68,1.62,1.62,0,0,1-1.76-1.51,1.69,1.69,0,0,1,1.65-1.68A1.63,1.63,0,0,1,164.93,224.6Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 163.22px 224.685px;"
                  id="elnd33211dei"
                  class="animable"
               />
               <path
                  d="M164.88,221.8c-.21.21-1.51-.73-3.36-.72s-3.19.89-3.39.67.12-.49.71-.9a4.8,4.8,0,0,1,2.72-.82,4.64,4.64,0,0,1,2.67.85C164.79,221.3,165,221.7,164.88,221.8Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 161.492px 220.93px;"
                  id="elsi8ajlpxdsm"
                  class="animable"
               />
               <path
                  d="M148,224.6a1.69,1.69,0,0,1-1.65,1.68,1.63,1.63,0,0,1-1.77-1.51,1.7,1.7,0,0,1,1.66-1.68A1.62,1.62,0,0,1,148,224.6Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 146.29px 224.685px;"
                  id="eluosngco6fr8"
                  class="animable"
               />
               <path
                  d="M147.66,222.09c-.22.22-1.51-.72-3.36-.72s-3.2.9-3.39.68.11-.49.71-.91a4.88,4.88,0,0,1,2.72-.81,4.67,4.67,0,0,1,2.67.85C147.57,221.6,147.76,222,147.66,222.09Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 144.269px 221.227px;"
                  id="elzzh8faw7vh"
                  class="animable"
               />
               <path
                  d="M153.41,235.43a12.8,12.8,0,0,1,3-.52c.47,0,.92-.14,1-.45a2.34,2.34,0,0,0-.31-1.36c-.45-1.11-.91-2.28-1.39-3.5-1.92-5-3.32-9.06-3.11-9.14s1.93,3.9,3.86,8.88l1.32,3.51a2.6,2.6,0,0,1,.25,1.8,1.15,1.15,0,0,1-.78.67,3.11,3.11,0,0,1-.8.11A12.85,12.85,0,0,1,153.41,235.43Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 155.336px 227.99px;"
                  id="elp3ex2c7rrn8"
                  class="animable"
               />
               <path
                  d="M138,217.12c0-.52,1.79-1,3.71-2s3.34-2.21,3.76-1.91c.2.15.08.69-.4,1.39a7.5,7.5,0,0,1-5.69,3C138.5,217.57,138,217.36,138,217.12Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 141.781px 215.382px;"
                  id="elafus04ycuvl"
                  class="animable"
               />
               <path
                  d="M159.79,215.53c.46-.24,1.46.65,2.85,1.27s2.7.87,2.81,1.38c0,.24-.31.54-1,.67a4.38,4.38,0,0,1-2.59-.4,4.31,4.31,0,0,1-2-1.74C159.58,216.11,159.58,215.66,159.79,215.53Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 162.545px 217.195px;"
                  id="elfrcmf33o00h"
                  class="animable"
               />
               <path
                  d="M128,228.2c-.21-.09-8.25-2.39-8,5.6s8.43,6.1,8.44,5.87S128,228.2,128,228.2Z"
                  style="fill: rgb(255, 190, 157); transform-origin: 124.217px 233.926px;"
                  id="el1kf0i64mzrph"
                  class="animable"
               />
               <path
                  d="M126.6,236.72s-.14.1-.38.22a1.47,1.47,0,0,1-1.06.05c-.88-.29-1.65-1.61-1.74-3.05a4.63,4.63,0,0,1,.34-2,1.65,1.65,0,0,1,1-1.1.73.73,0,0,1,.85.36c.12.22.07.38.12.39s.17-.14.09-.47a.92.92,0,0,0-.34-.49,1.09,1.09,0,0,0-.79-.18,2,2,0,0,0-1.46,1.28,4.6,4.6,0,0,0-.43,2.25c.11,1.6,1,3.09,2.19,3.39a1.61,1.61,0,0,0,1.31-.25C126.59,236.91,126.63,236.73,126.6,236.72Z"
                  style="fill: rgb(235, 153, 110); transform-origin: 124.7px 233.926px;"
                  id="el65jeoyh94oi"
                  class="animable"
               />
               <path
                  d="M133.42,204.45l34.22.73a15.43,15.43,0,0,0-5-5.66,27.13,27.13,0,0,0-15.5-5.43c-5.58-.1-16.94,6.52-21,10.27-3.24,3-3.22,5.59-3.22,5.59-.51,4.32,2,9.23,3,13.48.51,2.18,1.49,8.8,1.49,8.8h0c1.89,0,2.59-1.47,2.3-3.28l-.35-7.12a10.62,10.62,0,0,0,3.38-12.56C132.2,208.62,131.16,205.66,133.42,204.45Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 145.246px 213.159px;"
                  id="elf3inc1zgdbh"
                  class="animable"
               />
               <path
                  d="M140.6,229.72a.21.21,0,0,1-.24-.18.2.2,0,1,1,.4-.07A.21.21,0,0,1,140.6,229.72Z"
                  style="fill: rgb(235, 153, 110); transform-origin: 140.561px 229.512px;"
                  id="el5ags36vopau"
                  class="animable"
               />
               <path
                  d="M144.13,229a.24.24,0,0,1-.25-.21.22.22,0,0,1,.15-.28.24.24,0,0,1,.25.21A.23.23,0,0,1,144.13,229Z"
                  style="fill: rgb(235, 153, 110); transform-origin: 144.079px 228.755px;"
                  id="eln4j1wxues4d"
                  class="animable"
               />
               <path
                  d="M146.5,228.89c-.11,0-.22-.11-.24-.29s.05-.33.16-.35.22.12.24.3S146.61,228.88,146.5,228.89Z"
                  style="fill: rgb(235, 153, 110); transform-origin: 146.46px 228.569px;"
                  id="elb996c45vf1r"
                  class="animable"
               />
               <path
                  d="M142.33,231.88c-.11,0-.2-.06-.2-.13s.09-.13.2-.13.2.06.2.13S142.44,231.88,142.33,231.88Z"
                  style="fill: rgb(235, 153, 110); transform-origin: 142.33px 231.75px;"
                  id="el177wrtzh358"
                  class="animable"
               />
               <path
                  d="M145.56,231.15a.21.21,0,0,1-.22-.21.22.22,0,0,1,.18-.24.22.22,0,0,1,.23.21A.21.21,0,0,1,145.56,231.15Z"
                  style="fill: rgb(235, 153, 110); transform-origin: 145.546px 230.925px;"
                  id="elm0yo9009qyd"
                  class="animable"
               />
               <path
                  d="M162.39,229.23a.23.23,0,0,1-.25-.18.22.22,0,0,1,.16-.26.21.21,0,0,1,.24.18A.21.21,0,0,1,162.39,229.23Z"
                  style="fill: rgb(235, 153, 110); transform-origin: 162.341px 229.009px;"
                  id="elhfwpm2sid89"
                  class="animable"
               />
               <path
                  d="M164.79,229a.24.24,0,0,1-.23-.23.23.23,0,0,1,.18-.27c.11,0,.21.1.23.23A.23.23,0,0,1,164.79,229Z"
                  style="fill: rgb(235, 153, 110); transform-origin: 164.765px 228.75px;"
                  id="elykfpn7rl20l"
                  class="animable"
               />
               <path
                  d="M160.27,229.28a.19.19,0,0,1-.24-.13.19.19,0,0,1,.17-.21.19.19,0,0,1,.23.14A.18.18,0,0,1,160.27,229.28Z"
                  style="fill: rgb(235, 153, 110); transform-origin: 160.23px 229.112px;"
                  id="el4dsak3addck"
                  class="animable"
               />
               <path
                  d="M162,231.63a.23.23,0,0,1-.28-.13.21.21,0,0,1,.09-.29.21.21,0,0,1,.28.13A.2.2,0,0,1,162,231.63Z"
                  style="fill: rgb(235, 153, 110); transform-origin: 161.907px 231.417px;"
                  id="el0hacuoowcg28"
                  class="animable"
               />
               <path
                  d="M164.09,231.23a.19.19,0,0,1-.15-.21.2.2,0,0,1,.25-.11.19.19,0,0,1,.15.21A.2.2,0,0,1,164.09,231.23Z"
                  style="fill: rgb(235, 153, 110); transform-origin: 164.14px 231.07px;"
                  id="el2nb8x549ndh"
                  class="animable"
               />
               <path
                  d="M125.9,204.82a9.6,9.6,0,0,1,1.92-8.57,10.17,10.17,0,0,1,8.19-3.68,33.49,33.49,0,0,0,4.78.33c3-.31,5.24-2.62,8-3.75a10.58,10.58,0,0,1,12.3,3.6c1,1.51,1.73,3.38,3.32,4.34,1.38.82,3.12.75,4.67,1.21a7.4,7.4,0,0,1,5.11,7.34,8.76,8.76,0,0,1-5.46,7.34,11.25,11.25,0,0,1-9.46-.65c-2.58-1.4-4.89-3.79-7.84-3.7s-5.74,2.89-8.74,2.31c-1.57-.31-2.78-1.49-3.94-2.57s-2.47-2.2-4.08-2.29-2.43,2-1.86,3.51l-6.9-4.77"
                  style="fill: rgb(38, 50, 56); transform-origin: 149.893px 201.088px;"
                  id="elwf8lkwa5w7f"
                  class="animable"
               />
               <path
                  d="M167,201s0,0-.05.12a3.33,3.33,0,0,1-.2.32,5.76,5.76,0,0,1-1,1.08,6,6,0,0,1-2,1.15,5.88,5.88,0,0,1-3.1.18,6.17,6.17,0,0,1-3.28-1.81,41.24,41.24,0,0,1-2.36-3.51,4.65,4.65,0,0,0-1.65-1.46,5,5,0,0,0-2.27-.49,5.32,5.32,0,0,0-2.33.61,4.38,4.38,0,0,0-1.72,1.72,24.53,24.53,0,0,1-1.21,2.25,2.86,2.86,0,0,1-2.19,1.3,4.35,4.35,0,0,1-2.39-.67,8.75,8.75,0,0,1-1.81-1.47,7.61,7.61,0,0,0-3.4-2.35,4.38,4.38,0,0,0-3.43.78,5.79,5.79,0,0,0-1.89,2.28,9.68,9.68,0,0,0-.71,2.14c-.12.61-.18,1.09-.22,1.42a2.16,2.16,0,0,1-.08.5v-.13c0-.09,0-.21,0-.38a12.25,12.25,0,0,1,.17-1.43,9.09,9.09,0,0,1,.66-2.19,5.88,5.88,0,0,1,1.92-2.39,4.62,4.62,0,0,1,3.64-.86,7.76,7.76,0,0,1,3.54,2.4,8.71,8.71,0,0,0,1.77,1.41,4,4,0,0,0,2.2.62,2.49,2.49,0,0,0,1.94-1.16c.47-.67.76-1.46,1.19-2.22a4.7,4.7,0,0,1,1.85-1.85,5.44,5.44,0,0,1,2.48-.64,4.75,4.75,0,0,1,4.18,2.08,39.6,39.6,0,0,0,2.32,3.51,6,6,0,0,0,3.12,1.77,5.82,5.82,0,0,0,3-.13,6.08,6.08,0,0,0,2-1.07A7.64,7.64,0,0,0,167,201Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 148.355px 200.677px;"
                  id="eldqvo3h36ky"
                  class="animable"
               />
               <path
                  d="M173.17,201.07a1.6,1.6,0,0,1,.14.64,4.87,4.87,0,0,1-.17,1.79,6.24,6.24,0,0,1-1.28,2.35,7.5,7.5,0,0,1-2.71,1.92,11.35,11.35,0,0,1-6,.65,17.12,17.12,0,0,1-1.79-.34,2.59,2.59,0,0,1-.64-.21c0-.05.94.17,2.46.33a11.94,11.94,0,0,0,5.81-.73,7.42,7.42,0,0,0,2.61-1.81,6.38,6.38,0,0,0,1.29-2.23A6.84,6.84,0,0,0,173.17,201.07Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 167.025px 204.819px;"
                  id="elxr4r33ppe19"
                  class="animable"
               />
               <path
                  d="M151.9,238.27a14.28,14.28,0,0,0-2.57-1.34,2,2,0,0,0-1.8.35,2.17,2.17,0,0,0-.65,1.44,2.68,2.68,0,0,0,.39,1.9,3.59,3.59,0,0,0,1.83,1.13,2.73,2.73,0,0,0,1.77.18,1.78,1.78,0,0,0,1.1-1.38,5.15,5.15,0,0,0-.07-2.28"
                  style="fill: rgb(235, 153, 110); transform-origin: 149.454px 239.426px;"
                  id="elru2jf5av1cr"
                  class="animable"
               />
               <path
                  d="M149.61,241.83a2.4,2.4,0,0,1-1.6-.39,3,3,0,0,1-1.28-1.33,2.35,2.35,0,0,1,.11-2.29,2,2,0,0,1,1-.8,2.29,2.29,0,0,1,1.15-.09,5.09,5.09,0,0,1,1.67.7c.84.53,1.4.72,1.39.79s-.66,0-1.56-.46a5.38,5.38,0,0,0-1.57-.55,1.53,1.53,0,0,0-1.6.69,1.89,1.89,0,0,0-.11,1.81,2.86,2.86,0,0,0,1,1.22C149,241.65,149.63,241.74,149.61,241.83Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 149.267px 239.37px;"
                  id="elc9ytpojz0ma"
                  class="animable"
               />
               <path
                  d="M135.84,218.45c-.14,0-.19-.87-.19-1.92s0-1.9.18-1.92.34.85.34,1.92S136,218.46,135.84,218.45Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 135.91px 216.53px;"
                  id="elxymwftlgcz"
                  class="animable"
               />
               <path
                  d="M134.69,218.92a11.12,11.12,0,0,1-.06-4.78,11.12,11.12,0,0,1,.06,4.78Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 134.66px 216.53px;"
                  id="eljwpzvxii8a"
                  class="animable"
               />
               <path
                  d="M77.94,408.34A5.07,5.07,0,0,0,75.76,410l-1.49,1.91a5.06,5.06,0,0,0-.76,4.82h0A5,5,0,0,0,78.38,420l44.29-1-4.45-17.79-1.91-5.14h0"
                  style="fill: rgb(255, 136, 0); transform-origin: 97.9394px 408.037px;"
                  id="el2tcff4zs4lq"
                  class="animable"
               />
               <path
                  d="M96.54,419.67c.14-.05-.25-1.33-.09-2.93s.77-2.78.64-2.85a5.34,5.34,0,0,0-.55,5.78Z"
                  style="fill: rgb(255, 255, 255); transform-origin: 96.5224px 416.78px;"
                  id="el1mvysizi2si"
                  class="animable"
               />
               <path
                  d="M100.16,418.7a22.07,22.07,0,0,1,.58-2.44,21.61,21.61,0,0,1,1.29-2.15c-.06-.12-1.18.54-1.74,2A3.12,3.12,0,0,0,100.16,418.7Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 100.985px 416.398px;"
                  id="elh0klal3liou"
                  class="animable"
               />
               <path
                  d="M91.44,419.91c.14,0-.18-1.44,0-3.16s.77-3,.63-3.11A5.13,5.13,0,0,0,91,416.7,5,5,0,0,0,91.44,419.91Z"
                  style="fill: rgb(255, 255, 255); transform-origin: 91.4989px 416.775px;"
                  id="elq8ea7hih7bs"
                  class="animable"
               />
               <path
                  d="M87,419.81a11.87,11.87,0,0,1-.28-3.1,12.75,12.75,0,0,1,1-3s-.34.2-.67.7a5.15,5.15,0,0,0-.78,2.21,5.26,5.26,0,0,0,.26,2.33C86.66,419.55,86.89,419.84,87,419.81Z"
                  style="fill: rgb(255, 255, 255); transform-origin: 86.9781px 416.761px;"
                  id="elcpteiv31hyj"
                  class="animable"
               />
               <path
                  d="M116.31,399.68v.48S117,399.5,116.31,399.68Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 116.463px 399.904px;"
                  id="el06yeqs2fyj1r"
                  class="animable"
               />
               <path
                  d="M116.07,399.76l-.07,0Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 116.035px 399.76px;"
                  id="elh9vk1hb94q6"
                  class="animable"
               />
               <path
                  d="M116,399.79l-.28.11Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 115.86px 399.845px;"
                  id="ely7jv3mzvam"
                  class="animable"
               />
               <path
                  d="M100.37,400.5,78.7,407.56a10.82,10.82,0,0,0-3.28,1.76c-1.8,1.62-3.29,4.27-2.39,6.76,1.18,3.27,3.16,3.49,3.16,3.49s-2.42-3-1.72-5.25S77.79,410,81,408.73l35.09-9,.24-.08v-3.59Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 94.5449px 407.815px;"
                  id="elb8a1i16l8lt"
                  class="animable"
               />
               <path
                  d="M115.72,399.9Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 115.72px 399.9px;"
                  id="elul9ctl3hapb"
                  class="animable"
               />
               <path
                  d="M82.42,420.24a16.38,16.38,0,0,0,.91-5.75,16.18,16.18,0,0,0-1.65-5.58,3.81,3.81,0,0,1,1,1.43,10.38,10.38,0,0,1,1.14,4.12,10.49,10.49,0,0,1-.59,4.22A4.1,4.1,0,0,1,82.42,420.24Z"
                  style="fill: rgb(255, 255, 255); transform-origin: 82.7613px 414.575px;"
                  id="elwm25g15hqb"
                  class="animable"
               />
               <path
                  d="M116.07,406.24a5.75,5.75,0,0,1-3.69-1.56,5.83,5.83,0,0,1-2.25-3.31,20.92,20.92,0,0,0,2.58,2.91A21,21,0,0,0,116.07,406.24Z"
                  style="fill: rgb(255, 255, 255); transform-origin: 113.1px 403.805px;"
                  id="el6u864mhcgnd"
                  class="animable"
               />
               <path
                  d="M162.25,196a4.75,4.75,0,0,1,2.18-3.4c.13.67.25,1.33.38,2a6,6,0,0,1,4.74-2.63l-1.45,2.57a7,7,0,0,1,3.15-.42,7.54,7.54,0,0,1-2.53,2.59,4.77,4.77,0,0,0-2.1,2.89"
                  style="fill: rgb(38, 50, 56); transform-origin: 166.75px 195.785px;"
                  id="elnxknonml1p"
                  class="animable"
               />
               <path
                  d="M222.49,264.28l-44.42,36.59c-.76-.64-14.27-27.24-14.27-27.24l38.81-23.09-33.35-29.87,8.61-6.53,42.22,23.56a16.17,16.17,0,0,1,8.26,13.16h0A16.17,16.17,0,0,1,222.49,264.28Z"
                  style="fill: rgb(255, 190, 157); transform-origin: 196.089px 257.505px;"
                  id="elsczj9qx0q1s"
                  class="animable"
               />
               <path
                  d="M171.52,222.47l6.86-7.86h0l-8.93-8.27-2.34-5.89a3.64,3.64,0,0,0-3.13-4.32l-7.23-.46s-3.41-.19-3.09,2a1,1,0,0,0,.7.81l-.7,1.23c-.07,2,2.46,2.18,2.46,2.18l6,.56,1.2,3.16s-7.23-3.3-8.43-2,12.19,8.08,12.19,8.08l.54,8.69,1.4.54Z"
                  style="fill: rgb(255, 190, 157); transform-origin: 166.009px 209.068px;"
                  id="elsq22nco05sp"
                  class="animable"
               />
               <path
                  d="M167.11,200.62a5.13,5.13,0,0,0-1.3-1.38,4.77,4.77,0,0,0-1.9-.7,14.05,14.05,0,0,0-2.56-.1,42.52,42.52,0,0,1-6.73-.1,44.52,44.52,0,0,1,6.72-.42,12.11,12.11,0,0,1,2.66.15,4.73,4.73,0,0,1,2,.87C167.06,199.75,167.17,200.63,167.11,200.62Z"
                  style="fill: rgb(235, 153, 110); transform-origin: 160.872px 199.261px;"
                  id="el5rvlhujra18"
                  class="animable"
               />
               <path
                  d="M169.16,209.16c-.07,0-.28-.31-.74-.74a8.83,8.83,0,0,0-2-1.41,25.23,25.23,0,0,1-3.22-1.64,8.71,8.71,0,0,1,3.46,1.18,6.22,6.22,0,0,1,2.07,1.62C169.12,208.71,169.22,209.14,169.16,209.16Z"
                  style="fill: rgb(235, 153, 110); transform-origin: 166.188px 207.265px;"
                  id="elndzu0r7khc"
                  class="animable"
               />
               <path
                  d="M174,224.9a7,7,0,0,1-1.45-1.08c-.87-.72-2.07-1.75-3.44-3l.25,0a1.76,1.76,0,0,1-2-.88,3.58,3.58,0,0,1-.4-1.76c0-.56,0-1.07,0-1.58,0-.95.07-1.84.1-2.66a11.83,11.83,0,0,1,.22-2.45,10.51,10.51,0,0,1,.15,2.46c0,.82,0,1.71,0,2.66a6.85,6.85,0,0,0,.34,3.06,1.27,1.27,0,0,0,1.4.67l.14-.05.12.1c1.34,1.23,2.5,2.31,3.32,3.1A7.69,7.69,0,0,1,174,224.9Z"
                  style="fill: rgb(235, 153, 110); transform-origin: 170.479px 218.195px;"
                  id="el5eomi9ihms"
                  class="animable"
               />
               <path
                  d="M210.31,258a34.44,34.44,0,0,1-4-3.64c-2.13-2.08-4-3.54-4-3.64s2.17,1.17,4.32,3.27A23.93,23.93,0,0,1,210.31,258Z"
                  style="fill: rgb(235, 153, 110); transform-origin: 206.31px 254.357px;"
                  id="el5os09en8cw2"
                  class="animable"
               />
               <path
                  d="M156,202.1a5.59,5.59,0,0,1,2-1.5,2.49,2.49,0,0,1,2.41.28c.5.41.77,1,1.27,1.44a2.45,2.45,0,0,0,2.36.25,5.92,5.92,0,0,0,2-1.43c.18-.17.44-.36.65-.23a.47.47,0,0,1,.2.39,3,3,0,0,1-.45,2.06,1.32,1.32,0,0,0,1-.13,1.85,1.85,0,0,1-1.18,2.26,4.82,4.82,0,0,1-2.79,0,16.51,16.51,0,0,1-6.1-2.36"
                  style="fill: rgb(38, 50, 56); transform-origin: 161.756px 203.053px;"
                  id="elpqjjwd15gqo"
                  class="animable"
               />
               <path
                  d="M81.1,284.88a37,37,0,0,1,15-31.45,34.13,34.13,0,0,1-14.62,31.88"
                  style="fill: rgb(255, 136, 0); transform-origin: 88.6835px 269.37px;"
                  id="elt200tzcj2rq"
                  class="animable"
               />
               <g id="elakarbzq8v9d">
                  <g style="opacity: 0.2; transform-origin: 88.6835px 269.37px;" class="animable">
                     <path
                        d="M81.1,284.88a37,37,0,0,1,15-31.45,34.13,34.13,0,0,1-14.62,31.88"
                        id="elk2iqc526ih"
                        class="animable"
                        style="transform-origin: 88.6835px 269.37px;"
                     />
                  </g>
               </g>
               <path
                  d="M116.38,272.53l-25.1-22.34,30.44-30.64-11.87-8.67S74,238,66.75,245.59c-3.37,3.55-4.59,12.82-.47,17C76.94,273.47,98.42,293,98.42,293Z"
                  style="fill: rgb(255, 190, 157); transform-origin: 92.6955px 251.94px;"
                  id="el7lrld1za6e7"
                  class="animable"
               />
               <path
                  d="M148.6,205.21l-10.52-1.7,6.1-3.07,2.93-.1a4.13,4.13,0,0,0-3.85-3.29c-3.29-.21-3.82.45-3.82.45s-1.62-3.44-2.47-3.66a12.93,12.93,0,0,0-3.88-.62A7.79,7.79,0,0,0,130.3,195s-3.89-2.09-4.83-.78a27.72,27.72,0,0,0-2.15,5.33l-5.39,5.22-.91.55-15.84,12.36L112.49,229l13.7-14,2.23.67a3.78,3.78,0,0,0,3.25-1,15.86,15.86,0,0,0,2.29-2.39c.51-.66,1.53-2.4,1.73-2.59a6.79,6.79,0,0,1,1.76-1.23s11.14-.15,12-.67S151.32,205.65,148.6,205.21Z"
                  style="fill: rgb(255, 190, 157); transform-origin: 125.774px 211.11px;"
                  id="elb3hcq5pz1ys"
                  class="animable"
               />
               <path
                  d="M134.16,199.84a10,10,0,0,1,2.85-1.65,7.12,7.12,0,0,1,3.17-.92,20.85,20.85,0,0,1-3,1.4A11.08,11.08,0,0,1,134.16,199.84Z"
                  style="fill: rgb(235, 153, 110); transform-origin: 137.17px 198.555px;"
                  id="el4aigqhu6ilc"
                  class="animable"
               />
               <path
                  d="M136.58,196.62c.13,0,.09.62-.11,1.3s-.46,1.2-.6,1.16-.09-.62.1-1.3S136.44,196.58,136.58,196.62Z"
                  style="fill: rgb(235, 153, 110); transform-origin: 136.223px 197.85px;"
                  id="elrcs2sn2ephg"
                  class="animable"
               />
               <path
                  d="M127,199a7.85,7.85,0,0,1,1.66-2.35c1-1.21,1.94-2.11,2.05-2a8.07,8.07,0,0,1-1.65,2.35C128,198.15,127.12,199.05,127,199Z"
                  style="fill: rgb(235, 153, 110); transform-origin: 128.855px 196.821px;"
                  id="eletdv7exyhew"
                  class="animable"
               />
               <path
                  d="M150.34,206.06s0,.09,0,.27a2.37,2.37,0,0,1-.16.77,1.41,1.41,0,0,1-.91.87,6.41,6.41,0,0,1-1.61.29c-1.18.1-2.61.18-4.18.2s-3.29,0-5.07.18a4.62,4.62,0,0,0-2.35.77,6.12,6.12,0,0,0-1.44,1.84,10.42,10.42,0,0,1-2.67,3.27,5.45,5.45,0,0,1-2.63,1.11,2.09,2.09,0,0,1-1,0s.37,0,1-.16a5.82,5.82,0,0,0,2.43-1.2,10.56,10.56,0,0,0,2.48-3.22,6.55,6.55,0,0,1,1.55-2,5,5,0,0,1,2.61-.87c1.82-.17,3.55-.15,5.12-.15s3,0,4.15-.09a7.45,7.45,0,0,0,1.55-.19A1.23,1.23,0,0,0,150,207C150.27,206.43,150.29,206,150.34,206.06Z"
                  style="fill: rgb(235, 153, 110); transform-origin: 139.33px 210.873px;"
                  id="eliwupghaxqg"
                  class="animable"
               />
               <path
                  d="M92.77,248.21a8.68,8.68,0,0,1-1.37,1.66c-.89,1-2.15,2.3-3.57,3.74s-2.72,2.73-3.68,3.64a9,9,0,0,1-1.63,1.4A9.21,9.21,0,0,1,83.89,257c.9-1,2.16-2.3,3.57-3.74s2.72-2.73,3.68-3.64A9,9,0,0,1,92.77,248.21Z"
                  style="fill: rgb(235, 153, 110); transform-origin: 87.645px 253.43px;"
                  id="elzuan2q673s9"
                  class="animable"
               />
               <path
                  d="M136.47,198.55a7.07,7.07,0,0,1-2.68-4.1l1.4,1a7.31,7.31,0,0,1,.33-6.08l2.41,4a2.86,2.86,0,0,1,1.52-2.13,13,13,0,0,0,1.1,6.1"
                  style="fill: rgb(38, 50, 56); transform-origin: 137.17px 193.96px;"
                  id="elqsyu9xbzoei"
                  class="animable"
               />
               <path
                  d="M129.4,196.06a11.36,11.36,0,0,1-2.51-3.59c.22-.11.47.05.67.19s.5.25.66.06.05-.4,0-.6a3.61,3.61,0,0,1,.25-3.09l2.77,5.16L129.34,196"
                  style="fill: rgb(38, 50, 56); transform-origin: 129.065px 192.545px;"
                  id="elfbk4gpticxb"
                  class="animable"
               />
               <path
                  d="M267.22,424.92c-2.15-7-4.76-14-15.27-20.1l-10-5.06.83.34-44.33-22.64-.56,0-13.45-6.81-39.57,1.54-2.71,8.87-25.91,1.68-.6,20.3,0,8.49c-4.46-4.51-14.7.49-14.7,7.94l26,37.25c13,21.14,42.89,13.91,42.89,13.91l.38-.21a23.11,23.11,0,0,0,11-26.22L180,439.58l.25.59-.35-4.47.17.1,41.31,10.85c16.37,2.67,27.22,5.92,38.35-.95a17.87,17.87,0,0,0,5.24-4.9A18.16,18.16,0,0,0,267.22,424.92Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 184.536px 421.236px;"
                  id="elaqj9j6qr0t6"
                  class="animable"
               />
               <path
                  d="M254.57,440.12a3.6,3.6,0,0,0,1.05-.17,11.33,11.33,0,0,0,2.71-1.07,12.39,12.39,0,0,0,5.1-16.74,11.19,11.19,0,0,0-1.64-2.41A3.77,3.77,0,0,0,261,419a21,21,0,0,1,2.11,3.28,12.4,12.4,0,0,1-5,16.28A21.63,21.63,0,0,1,254.57,440.12Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 259.724px 429.56px;"
                  id="elnp3fhzznvhi"
                  class="animable"
               />
               <path
                  d="M136.92,460.41a91.65,91.65,0,0,0-2.16-9.45,94.92,94.92,0,0,0-2.66-9.33,96,96,0,0,0,2.17,9.46C135.61,456.27,136.79,460.45,136.92,460.41Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 134.51px 451.02px;"
                  id="elnoqibu6n2rg"
                  class="animable"
               />
               <path
                  d="M133.85,448.7a6.6,6.6,0,0,0,.51,2.06,20.22,20.22,0,0,0,5.74,8.44,6.46,6.46,0,0,0,1.73,1.24,39.37,39.37,0,0,1-4.73-5.37A39.75,39.75,0,0,1,133.85,448.7Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 137.84px 454.57px;"
                  id="eln95x1b5ozy"
                  class="animable"
               />
               <path
                  d="M154.44,466.52a2.25,2.25,0,0,0,.82.2,12.37,12.37,0,0,0,2.29.1,13.93,13.93,0,0,0,12-8.13,11.92,11.92,0,0,0,.76-2.17,2.46,2.46,0,0,0,.12-.83c-.08,0-.33,1.15-1.2,2.84a14.76,14.76,0,0,1-4.81,5.5,14.92,14.92,0,0,1-6.9,2.44C155.63,466.64,154.45,466.43,154.44,466.52Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 162.435px 461.262px;"
                  id="elhq3pmfwwad7"
                  class="animable"
               />
               <path
                  d="M131.63,398.2a10.93,10.93,0,0,0,1.35-.69,32.91,32.91,0,0,1,3.72-1.67A29.93,29.93,0,0,1,162.63,398a32.77,32.77,0,0,1,3.4,2.27,9.51,9.51,0,0,0,1.21.9s-.08-.11-.27-.29-.45-.45-.82-.76a26.85,26.85,0,0,0-3.34-2.42,29,29,0,0,0-26.23-2.21,25.84,25.84,0,0,0-3.7,1.83c-.42.24-.73.46-.94.6S131.62,398.18,131.63,398.2Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 149.435px 397.258px;"
                  id="elvv2l5hujwbs"
                  class="animable"
               />
               <path
                  d="M181,384.54a8.39,8.39,0,0,0-1.52,2,21.07,21.07,0,0,0-3.2,11.43,8.63,8.63,0,0,0,.27,2.47,33.82,33.82,0,0,1,1-8.28A33.23,33.23,0,0,1,181,384.54Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 178.637px 392.49px;"
                  id="el3vazxkc6kor"
                  class="animable"
               />
               <path
                  d="M132,442.9a6.64,6.64,0,0,1-.81-1.13c-.49-.75-1.16-1.86-2-3.24-1.62-2.75-3.74-6.64-5.94-11s-4.1-8.35-5.46-11.24c-.64-1.38-1.18-2.53-1.59-3.44a7.22,7.22,0,0,1-.53-1.29,7.57,7.57,0,0,1,.71,1.2c.42.79,1,1.94,1.74,3.37,1.47,2.95,3.43,6.85,5.6,11.16s4.25,8.25,5.79,11.05l1.84,3.31A7.58,7.58,0,0,1,132,442.9Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 123.835px 427.23px;"
                  id="elj9jegd411s"
                  class="animable"
               />
               <path
                  d="M231.23,440.9a2.73,2.73,0,0,1-.54-.11l-1.53-.39-5.59-1.55-18.41-5.24-18.4-5.25-5.59-1.56-1.52-.41a2.2,2.2,0,0,1-.53-.18,2.75,2.75,0,0,1,.55.08c.35.06.88.15,1.55.31,1.34.3,3.26.78,5.63,1.4,4.74,1.24,11.27,3.05,18.46,5.11s13.67,4,18.36,5.39l5.55,1.7,1.5.49A1.9,1.9,0,0,1,231.23,440.9Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 205.175px 433.555px;"
                  id="elfle1zy0t4y"
                  class="animable"
               />
               <path
                  d="M171.9,383.35a19.23,19.23,0,0,1,.32,2.91c.14,1.79.32,4.27.47,7s.24,5.24.23,7.05a18.41,18.41,0,0,1-.12,2.14,1.32,1.32,0,0,1-.23.76s0-.27,0-.78,0-1.22,0-2.12c-.11-2-.24-4.36-.38-7s-.28-5.23-.32-7A14.88,14.88,0,0,1,171.9,383.35Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 172.366px 393.28px;"
                  id="el7t54bf7ncxh"
                  class="animable"
               />
               <path
                  d="M166.16,385.78s.12-.16.45-.26a2.06,2.06,0,0,1,1.41.12,2,2,0,0,1,1.16,1.78,2.36,2.36,0,0,1-.34,1.27,2,2,0,0,1-1.15.85,2.15,2.15,0,0,1-2.43-.88,2.19,2.19,0,0,1-.08-2.13,2.4,2.4,0,0,1,1-.95c.29-.15.47-.2.48-.17s-.12.14-.37.34a2.53,2.53,0,0,0-.83.94,1.88,1.88,0,0,0,.15,1.71,1.69,1.69,0,0,0,1.89.64,1.64,1.64,0,0,0,1.15-1.61,1.61,1.61,0,0,0-.84-1.46A2.62,2.62,0,0,0,166.16,385.78Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 167.061px 387.518px;"
                  id="el2vdj61aq4dt"
                  class="animable"
               />
               <path
                  d="M169.52,405.46a8.77,8.77,0,0,1,.66,1.39c.39.91.92,2.23,1.53,3.89,1.23,3.31,2.73,7.95,4.22,13.13s2.72,9.89,3.58,13.31c.41,1.64.74,3,1,4.05a8.74,8.74,0,0,1,.3,1.51,8.21,8.21,0,0,1-.5-1.46c-.3-1-.68-2.38-1.15-4-1-3.48-2.29-8.12-3.73-13.26s-2.93-9.81-4.07-13.15c-.56-1.67-1-3-1.37-3.93A9.37,9.37,0,0,1,169.52,405.46Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 175.165px 424.1px;"
                  id="el311ifk98syu"
                  class="animable"
               />
               <path
                  d="M231.46,441.2a2,2,0,0,0-.4-2.31,4.77,4.77,0,0,0-2.64-1.18l-3.91-.83a179.87,179.87,0,0,1-22.19-6.52,176.12,176.12,0,0,1-21.18-9.3c-1.32-.68-2.5-1.31-3.53-1.89s-1.91-1.06-2.62-1.49l-1.64-1a3.75,3.75,0,0,1-.55-.37,2.86,2.86,0,0,1,.6.28l1.69.89c.72.4,1.62.86,2.66,1.4s2.23,1.16,3.55,1.82a199.73,199.73,0,0,0,21.2,9.14,206.38,206.38,0,0,0,22.1,6.66l3.88.9a4.79,4.79,0,0,1,2.73,1.33,2.29,2.29,0,0,1,.55,1.83A1.1,1.1,0,0,1,231.46,441.2Z"
                  style="fill: rgb(69, 90, 100); transform-origin: 202.291px 428.755px;"
                  id="ele8qmd4e128c"
                  class="animable"
               />
               <path
                  d="M128.68,327.35a1.9,1.9,0,0,0,.29.33l.9.91c.4.39.89.86,1.5,1.36s1.27,1.11,2.09,1.68,1.67,1.25,2.66,1.86,2.07,1.25,3.22,1.9a50.31,50.31,0,0,0,7.88,3.31,51.44,51.44,0,0,0,8.35,1.82c1.31.13,2.56.27,3.73.29s2.25,0,3.25,0,1.89-.11,2.67-.18a17.15,17.15,0,0,0,2-.25l1.26-.22a1.67,1.67,0,0,0,.43-.11,1.55,1.55,0,0,0-.45,0l-1.27.13c-.54.06-1.22.14-2,.17s-1.67.12-2.66.1-2.07,0-3.22-.07-2.39-.2-3.69-.34a52.49,52.49,0,0,1-8.26-1.83,51.94,51.94,0,0,1-7.82-3.25c-1.14-.63-2.24-1.2-3.21-1.84s-1.87-1.22-2.68-1.79-1.49-1.13-2.11-1.61-1.14-.92-1.55-1.29l-1-.84C128.81,327.43,128.69,327.33,128.68,327.35Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 148.795px 334.083px;"
                  id="el3yatou8d56n"
                  class="animable"
               />
               <path
                  d="M181.36,337.32l-.71-9.46.76-26.3,23.84-18.73c-1.1-8.45-14.4-25.67-14.4-25.67l-20.32,8H167.1l-3,2.9-6.87-.94c-2.67,13.33-19.52,11.51-28.6.66l-9.91.87-3.64-3.28L110,266.8,96.09,253.43c-.3,14.11-5.54,24.18-15,31.45l20.06,21.6,5,5c1.84,26.39,3.57,51.73,8.64,77.09l5.24-1.15c26.75-.54,67.47-8.72,78.42-9.93l2.25-2.21-4-3.55Z"
                  style="fill: rgb(255, 136, 0); transform-origin: 143.17px 321px;"
                  id="el1tbsdsb5irc"
                  class="animable"
               />
               <path
                  d="M117.32,274.23a7.47,7.47,0,0,1,.37,1.49c.19,1,.45,2.36.68,4.1a79.29,79.29,0,0,1,.72,13.73,41,41,0,0,1-1,7.53,10.07,10.07,0,0,1-3,5.44,5.92,5.92,0,0,1-3.91,1.45,4.05,4.05,0,0,1-1.13-.21c-.25-.1-.37-.15-.36-.17a7.7,7.7,0,0,0,1.49.18,5.84,5.84,0,0,0,3.67-1.53,9.83,9.83,0,0,0,2.73-5.27,42.86,42.86,0,0,0,.92-7.44,92.77,92.77,0,0,0-.56-13.66c-.19-1.74-.39-3.15-.52-4.12A9.69,9.69,0,0,1,117.32,274.23Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 114.413px 291.1px;"
                  id="elem7g9j2k7h"
                  class="animable"
               />
               <path
                  d="M127.68,289.18a29.47,29.47,0,0,1-.32-3.1,52.32,52.32,0,0,0-3.46-14.5,25.74,25.74,0,0,1-1.12-2.91,2.94,2.94,0,0,1,.45.71c.27.47.61,1.17,1,2.05a42,42,0,0,1,2.41,7.16,40.92,40.92,0,0,1,1.08,7.46c0,1,.06,1.75,0,2.29A3,3,0,0,1,127.68,289.18Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 125.263px 278.925px;"
                  id="elrisd708rxn"
                  class="animable"
               />
               <path
                  d="M184.43,370.34a2.69,2.69,0,0,1-.49.28l-1.47.72c-.64.31-1.42.68-2.36,1.07s-2,.86-3.17,1.29c-2.37.93-5.24,1.88-8.48,2.79a99.92,99.92,0,0,1-10.69,2.26,98.35,98.35,0,0,1-10.88,1c-3.36.09-6.39,0-8.93-.16-1.27-.06-2.41-.2-3.41-.3s-1.86-.22-2.57-.33l-1.61-.26a2.19,2.19,0,0,1-.56-.12,2.26,2.26,0,0,1,.57,0l1.63.16c.7.08,1.56.17,2.57.24s2.14.19,3.41.22c2.52.14,5.54.17,8.88.06A97.56,97.56,0,0,0,168.34,376c3.22-.87,6.1-1.78,8.47-2.66,1.2-.41,2.25-.86,3.19-1.22s1.74-.7,2.39-1l1.5-.63A1.86,1.86,0,0,1,184.43,370.34Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 157.12px 375.063px;"
                  id="eltxye5z4xsy"
                  class="animable"
               />
               <g id="eltqqjoinuwuh">
                  <g style="opacity: 0.2; transform-origin: 126.607px 283.11px;" class="animable">
                     <path
                        d="M124,269.49c2.77,6.81,5,14.86,5.17,22.21a8.73,8.73,0,0,1-.74,4.48c-.16.29-.4.58-.72.59-.57,0-.73-.76-.71-1.32a92.45,92.45,0,0,0-3-26"
                        id="elat988uyf80s"
                        class="animable"
                        style="transform-origin: 126.607px 283.11px;"
                     />
                  </g>
               </g>
               <g id="elms3xmj7n4q">
                  <g style="opacity: 0.2; transform-origin: 148.463px 335.267px;" class="animable">
                     <path
                        d="M132.13,329.37a59.79,59.79,0,0,0,29.33,7.87,5.46,5.46,0,0,1,3.28.67c.91.67,1.16,2.31.17,2.86a2.47,2.47,0,0,1-1,.23,41.69,41.69,0,0,1-32.53-11.42"
                        id="elbt3e4ddyxah"
                        class="animable"
                        style="transform-origin: 148.463px 335.267px;"
                     />
                  </g>
               </g>
               <path
                  d="M179.57,330.17c-.14,0,.52-10.44,1.49-23.29s1.86-23.28,2-23.27-.52,10.45-1.48,23.3S179.72,330.18,179.57,330.17Z"
                  style="fill: rgb(38, 50, 56); transform-origin: 181.315px 306.89px;"
                  id="el0dx0qbqczqua"
                  class="animable"
               />
               <path
                  d="M105.13,261.9a7,7,0,0,1,.28,1.45,24.31,24.31,0,0,1,.21,4,28.93,28.93,0,0,1-12,22.81,25.81,25.81,0,0,1-3.43,2.12,6.52,6.52,0,0,1-1.35.59,9.14,9.14,0,0,1,1.25-.77,33.15,33.15,0,0,0,3.31-2.23,29.94,29.94,0,0,0,11.83-22.53,33.27,33.27,0,0,0,0-4A9.44,9.44,0,0,1,105.13,261.9Z"
                  style="fill: rgb(250, 250, 250); transform-origin: 97.2355px 277.385px;"
                  id="elxjxg0i7ebfo"
                  class="animable"
               />
               <path
                  d="M112.43,266.13s.11.12.27.38a9.76,9.76,0,0,1,.65,1.15,17.08,17.08,0,0,1,1.44,4.66c.72,4.09.37,9.83-.74,16a34.74,34.74,0,0,1-2.72,8.43,23.88,23.88,0,0,1-4.1,6,18.25,18.25,0,0,1-3.78,3.08c-.5.28-.9.5-1.17.62a2,2,0,0,1-.43.17c0-.05.54-.33,1.49-1a20.75,20.75,0,0,0,3.62-3.16,24.15,24.15,0,0,0,3.94-5.92,35.77,35.77,0,0,0,2.64-8.32c1.1-6.11,1.5-11.82.89-15.84A20.51,20.51,0,0,0,112.43,266.13Z"
                  style="fill: rgb(250, 250, 250); transform-origin: 108.508px 286.375px;"
                  id="elfq4tmz54u2q"
                  class="animable"
               />
               <path
                  d="M126.11,278.29a16.69,16.69,0,0,0-4,.07,16.94,16.94,0,0,0-3.66,1.48s.25-.41.86-.85a7.37,7.37,0,0,1,5.62-1.14C125.72,278,126.13,278.23,126.11,278.29Z"
                  style="fill: rgb(250, 250, 250); transform-origin: 122.28px 278.772px;"
                  id="elypqtlbsv21a"
                  class="animable"
               />
               <path
                  d="M126.43,274.14a17.82,17.82,0,0,1,1.29,1.65,47.26,47.26,0,0,0,3.73,4.31,27,27,0,0,0,6.68,5,17.69,17.69,0,0,0,9.9,2,17.44,17.44,0,0,0,9.32-3.88,17.16,17.16,0,0,0,4.88-6.7,18.24,18.24,0,0,0,1.3-5.5c.1-1.34,0-2.09.09-2.09a2.18,2.18,0,0,1,.07.54,11.31,11.31,0,0,1,.05,1.56,17.35,17.35,0,0,1-1.17,5.62,17.17,17.17,0,0,1-4.91,6.94,17.63,17.63,0,0,1-19.75,2,26.6,26.6,0,0,1-6.73-5.23,38.49,38.49,0,0,1-3.62-4.44c-.39-.55-.67-1-.86-1.3A2.59,2.59,0,0,1,126.43,274.14Z"
                  style="fill: rgb(250, 250, 250); transform-origin: 145.089px 278.327px;"
                  id="elbjxx5inyu1"
                  class="animable"
               />
               <path
                  d="M129,297.61a19.32,19.32,0,0,0-5.35-.23,19.16,19.16,0,0,0-5.07,1.76,3.68,3.68,0,0,1,1.28-1,10.49,10.49,0,0,1,3.71-1.27,10.64,10.64,0,0,1,3.92.15A3.74,3.74,0,0,1,129,297.61Z"
                  style="fill: rgb(250, 250, 250); transform-origin: 123.79px 297.947px;"
                  id="elf0tb31df287"
                  class="animable"
               />
               <path
                  d="M180.45,288.71c0,.06-.76-.1-2.1,0a14.81,14.81,0,0,0-5.44,1.6,56.9,56.9,0,0,0-7.13,4.62,32.19,32.19,0,0,1-4.36,2.6,25.66,25.66,0,0,1-5.15,1.79,35.92,35.92,0,0,1-10.47.75,59.46,59.46,0,0,1-8.47-1.25c-2.38-.5-4.28-1-5.6-1.34l-1.51-.42a2.21,2.21,0,0,1-.52-.18,2,2,0,0,1,.55.08l1.53.32c1.33.28,3.24.72,5.63,1.18a65.6,65.6,0,0,0,8.42,1.13,36,36,0,0,0,10.32-.78,25.9,25.9,0,0,0,5-1.74,32.16,32.16,0,0,0,4.31-2.54,53.3,53.3,0,0,1,7.24-4.55,14.41,14.41,0,0,1,5.59-1.48,9.36,9.36,0,0,1,1.57.08A2,2,0,0,1,180.45,288.71Z"
                  style="fill: rgb(250, 250, 250); transform-origin: 155.075px 294.333px;"
                  id="elscvou6dl76"
                  class="animable"
               />
               <path
                  d="M184.37,282c-.09,0-.16-1.16-.57-3a23,23,0,0,0-7.33-12.34c-1.41-1.23-2.41-1.85-2.36-1.93a2.48,2.48,0,0,1,.74.37,13.75,13.75,0,0,1,1.86,1.28A20.9,20.9,0,0,1,184.17,279a15.49,15.49,0,0,1,.24,2.23A2.34,2.34,0,0,1,184.37,282Z"
                  style="fill: rgb(250, 250, 250); transform-origin: 179.267px 273.365px;"
                  id="el4po0b4sh6h3"
                  class="animable"
               />
               <path
                  d="M195.34,290.62a6.74,6.74,0,0,1,0-1.31c0-.84,0-2.05-.08-3.55a44,44,0,0,0-2-11.46,40.88,40.88,0,0,0-2.51-5.9,41.39,41.39,0,0,0-2.74-4.47c-1.74-2.44-3-3.8-2.93-3.87a6.44,6.44,0,0,1,.93.92,28.63,28.63,0,0,1,2.29,2.74,34.69,34.69,0,0,1,2.87,4.46,37.74,37.74,0,0,1,2.58,6,40.13,40.13,0,0,1,1.92,11.61,35.69,35.69,0,0,1-.09,3.57A6.07,6.07,0,0,1,195.34,290.62Z"
                  style="fill: rgb(250, 250, 250); transform-origin: 190.379px 275.34px;"
                  id="elqs8uxllmioe"
                  class="animable"
               />
               <path
                  d="M179.25,313.56a6.87,6.87,0,0,1-.66.35,18.58,18.58,0,0,1-2,.8,29,29,0,0,1-7.74,1.39,104.31,104.31,0,0,1-11.66-.3c-2.18-.11-4.47-.19-6.84-.08a42.58,42.58,0,0,0-7.27,1c-4.92,1.08-9.56,2.5-14,3a50.85,50.85,0,0,1-11.67-.23c-3.3-.41-5.94-.92-7.76-1.27l-2.09-.43a4.36,4.36,0,0,1-.72-.18,3.71,3.71,0,0,1,.74.08l2.11.33c1.83.29,4.47.74,7.76,1.1a52.37,52.37,0,0,0,11.57.12c4.34-.48,9-1.91,13.91-3a42.23,42.23,0,0,1,7.35-1,68,68,0,0,1,6.9.11,111.8,111.8,0,0,0,11.61.42,31.35,31.35,0,0,0,7.7-1.22c.88-.27,1.56-.52,2-.71A3.5,3.5,0,0,1,179.25,313.56Z"
                  style="fill: rgb(250, 250, 250); transform-origin: 143.045px 316.755px;"
                  id="el05znvpixqchn"
                  class="animable"
               />
               <path
                  d="M150.35,336.51a10.1,10.1,0,0,1-1.69,0c-1.09,0-2.67,0-4.61,0a109.25,109.25,0,0,0-30,4.41c-1.86.54-3.37,1-4.4,1.35a11.57,11.57,0,0,1-1.63.48,9.78,9.78,0,0,1,1.56-.67c1-.4,2.51-.92,4.37-1.51a96.22,96.22,0,0,1,30.08-4.43c1.95,0,3.53.1,4.61.19A12,12,0,0,1,150.35,336.51Z"
                  style="fill: rgb(250, 250, 250); transform-origin: 129.185px 339.441px;"
                  id="ele3x7tdr0hs"
                  class="animable"
               />
               <path
                  d="M179.32,334a9.47,9.47,0,0,1-2.1,1.09,42.69,42.69,0,0,1-5.38,1.91,41.54,41.54,0,0,1-5.59,1.16,9.71,9.71,0,0,1-2.36.16,12.22,12.22,0,0,1,2.3-.52c1.42-.28,3.38-.71,5.51-1.3s4-1.25,5.38-1.75A12.18,12.18,0,0,1,179.32,334Z"
                  style="fill: rgb(250, 250, 250); transform-origin: 171.605px 336.167px;"
                  id="elqxf7ehpkh5k"
                  class="animable"
               />
               <path
                  d="M188.45,351.76a5.31,5.31,0,0,1-.71.37c-.47.23-1.17.54-2.08.92a76.32,76.32,0,0,1-7.93,2.76,151.38,151.38,0,0,1-27.21,4.84,166.2,166.2,0,0,1-27.65.22c-3.53-.26-6.37-.59-8.34-.85l-2.25-.33a3.83,3.83,0,0,1-.78-.15,4.27,4.27,0,0,1,.79,0l2.27.23c2,.19,4.81.47,8.34.69a180.86,180.86,0,0,0,27.57-.38,162.67,162.67,0,0,0,27.16-4.67c3.41-.94,6.1-1.89,8-2.6l2.12-.83A5.63,5.63,0,0,1,188.45,351.76Z"
                  style="fill: rgb(250, 250, 250); transform-origin: 149.975px 356.551px;"
                  id="elcfxbnc4ntk"
                  class="animable"
               />
               <path
                  d="M126.68,378.16a51.87,51.87,0,0,0-7.12,0,50.77,50.77,0,0,0-7,1.48,6.23,6.23,0,0,1,1.92-.89,21.84,21.84,0,0,1,10.1-1A6.66,6.66,0,0,1,126.68,378.16Z"
                  style="fill: rgb(250, 250, 250); transform-origin: 119.62px 378.594px;"
                  id="ellc9nvypc2wd"
                  class="animable"
               />
               <path
                  d="M191.79,368.86c0,.15-1.8.15-4,.54s-3.86,1-3.91.85a12,12,0,0,1,7.88-1.39Z"
                  style="fill: rgb(250, 250, 250); transform-origin: 187.835px 369.485px;"
                  id="el4aqiqvd5r4"
                  class="animable"
               />
            </g>
            <defs>
               <filter id="active" height="200%">
                  <feMorphology in="SourceAlpha" result="DILATED" operator="dilate" radius="2" />
                  <feFlood flood-color="#32DFEC" flood-opacity="1" result="PINK" />
                  <feComposite in="PINK" in2="DILATED" operator="in" result="OUTLINE" />
                  <feMerge>
                     <feMergeNode in="OUTLINE" />
                     <feMergeNode in="SourceGraphic" />
                  </feMerge>
               </filter>
               <filter id="hover" height="200%">
                  <feMorphology in="SourceAlpha" result="DILATED" operator="dilate" radius="2" />
                  <feFlood flood-color="#ff0000" flood-opacity="0.5" result="PINK" />
                  <feComposite in="PINK" in2="DILATED" operator="in" result="OUTLINE" />
                  <feMerge>
                     <feMergeNode in="OUTLINE" />
                     <feMergeNode in="SourceGraphic" />
                  </feMerge>
                  <feColorMatrix
                     type="matrix"
                     values="0   0   0   0   0                0   1   0   0   0                0   0   0   0   0                0   0   0   1   0 "
                  />
               </filter>
            </defs>
         </svg>
      </div>

      <div class="">
         <h2 v-if="error.title" class="mt-4">{{ error.title }}</h2>
         <h2 v-else class="mt-4">Ошибка {{ error.statusCode }}</h2>

         <div v-if="error.description" class="mt-2 mb-4">{{ error.description }}</div>
         <div v-else class="mt-2 mb-4">Что-то пошло не так</div>

         <div>
            <Button size="large" type="primary" to="/">На главную</Button>
         </div>
      </div>
   </section>
</template>


<script>
export default {
   props: ["error"],
   layout: "errors"
   // layout: this.$auth.loggedIn ? 'default' : 'errors'
};
</script>


<style lang="scss" scoped>
section {
   width: 100%;
   max-width: 450px;

   svg {
      width: 100%;
   }
}
</style>