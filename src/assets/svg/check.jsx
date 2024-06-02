const Check = ({ color }) => {
  return (
    <svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_28_4440)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M34 6.14556L13.0798 27.091L13.0764 27.0877V27.091L0 14.0001L5.22921 8.7637L13.0764 16.6183L28.7708 0.90918L34 6.14556Z"
          fill={color === 'violet' ? '#6666FF' : color === 'green' ? '#97FF66' : '#FF6666'}
        />
        <path
          d="M33.2934 6.14553L13.0781 26.3852L0.706669 14L5.22929 9.47122L12.7227 16.9717L13.0764 17.3257L13.4301 16.9717L28.7707 1.6167L33.2934 6.14553Z"
          stroke={color === 'violet' ? '#6666FF' : color === 'green' ? '#97FF66' : '#FF6666'}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_28_4440"
          x="-4"
          y="0.90918"
          width="42"
          height="34.1816"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_28_4440" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_28_4440"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Check;
