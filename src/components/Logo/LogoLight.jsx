import React from "react";

const LogoLight = ({ className, onClick }) => {
  return (
    <svg
      width="202"
      height="27"
      viewBox="0 0 202 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M42.7 21V1.2H48.136C49.544 1.2 50.852 1.452 52.06 1.956C53.268 2.46 54.324 3.164 55.228 4.068C56.14 4.972 56.848 6.024 57.352 7.224C57.864 8.424 58.12 9.72 58.12 11.112C58.12 12.512 57.868 13.812 57.364 15.012C56.86 16.204 56.152 17.252 55.24 18.156C54.336 19.052 53.276 19.752 52.06 20.256C50.852 20.752 49.544 21 48.136 21H42.7ZM46.588 17.52H47.704C48.6 17.52 49.428 17.36 50.188 17.04C50.948 16.72 51.608 16.272 52.168 15.696C52.728 15.12 53.164 14.444 53.476 13.668C53.788 12.884 53.944 12.028 53.944 11.1C53.944 10.18 53.788 9.332 53.476 8.556C53.164 7.772 52.728 7.092 52.168 6.516C51.608 5.932 50.948 5.48 50.188 5.16C49.428 4.84 48.6 4.68 47.704 4.68H46.588V17.52ZM67.0359 21V1.2H78.0519V4.608H70.9239V9.372H77.7639V12.78H70.9239V17.592H78.0519V21H67.0359ZM92.9694 21.384C92.0494 21.384 91.2014 21.28 90.4254 21.072C89.6494 20.872 88.9534 20.62 88.3374 20.316C87.7294 20.004 87.2054 19.684 86.7654 19.356C86.3254 19.028 85.9774 18.74 85.7214 18.492L87.7134 15.276C87.9774 15.508 88.2934 15.768 88.6614 16.056C89.0294 16.344 89.4414 16.62 89.8974 16.884C90.3534 17.14 90.8454 17.356 91.3734 17.532C91.9094 17.7 92.4774 17.784 93.0774 17.784C93.6374 17.784 94.1294 17.696 94.5534 17.52C94.9854 17.344 95.3254 17.084 95.5734 16.74C95.8214 16.388 95.9454 15.952 95.9454 15.432C95.9454 14.96 95.8454 14.56 95.6454 14.232C95.4454 13.896 95.1494 13.596 94.7574 13.332C94.3734 13.06 93.8974 12.796 93.3294 12.54C92.7694 12.276 92.1294 11.988 91.4094 11.676C90.8734 11.436 90.3614 11.164 89.8734 10.86C89.3934 10.548 88.9654 10.188 88.5894 9.78C88.2134 9.372 87.9134 8.912 87.6894 8.4C87.4734 7.88 87.3654 7.3 87.3654 6.66C87.3654 5.9 87.5174 5.172 87.8214 4.476C88.1254 3.78 88.5574 3.16 89.1174 2.616C89.6854 2.072 90.3574 1.64 91.1334 1.32C91.9174 0.999999 92.7894 0.839999 93.7494 0.839999C94.4694 0.839999 95.1894 0.935999 95.9094 1.128C96.6294 1.32 97.3014 1.572 97.9254 1.884C98.5494 2.196 99.0774 2.536 99.5094 2.904L97.8894 5.952C97.5454 5.656 97.1534 5.392 96.7134 5.16C96.2814 4.92 95.8174 4.728 95.3214 4.584C94.8334 4.44 94.3374 4.368 93.8334 4.368C93.2654 4.368 92.7814 4.468 92.3814 4.668C91.9894 4.868 91.6854 5.136 91.4694 5.472C91.2614 5.8 91.1574 6.168 91.1574 6.576C91.1574 6.912 91.2254 7.2 91.3614 7.44C91.5054 7.672 91.7054 7.876 91.9614 8.052C92.2174 8.22 92.5254 8.384 92.8854 8.544C93.2454 8.696 93.6414 8.86 94.0734 9.036C95.0014 9.428 95.8414 9.816 96.5934 10.2C97.3454 10.584 97.9894 11.012 98.5254 11.484C99.0614 11.948 99.4694 12.492 99.7494 13.116C100.037 13.74 100.181 14.484 100.181 15.348C100.181 16.612 99.8774 17.696 99.2694 18.6C98.6694 19.504 97.8294 20.196 96.7494 20.676C95.6694 21.148 94.4094 21.384 92.9694 21.384ZM109.169 21V1.2H113.057V21H109.169ZM131.753 21.384C130.393 21.384 129.125 21.124 127.949 20.604C126.773 20.084 125.745 19.36 124.865 18.432C123.985 17.496 123.297 16.404 122.801 15.156C122.305 13.908 122.057 12.556 122.057 11.1C122.057 9.708 122.289 8.396 122.753 7.164C123.217 5.924 123.885 4.832 124.757 3.888C125.629 2.936 126.681 2.192 127.913 1.656C129.145 1.112 130.525 0.839999 132.053 0.839999C132.917 0.839999 133.785 0.935999 134.657 1.128C135.537 1.32 136.381 1.604 137.189 1.98C137.997 2.348 138.725 2.8 139.373 3.336L137.549 6.348C136.853 5.7 136.009 5.2 135.017 4.848C134.033 4.488 133.061 4.308 132.101 4.308C131.157 4.308 130.321 4.476 129.593 4.812C128.873 5.14 128.265 5.604 127.769 6.204C127.273 6.804 126.897 7.508 126.641 8.316C126.385 9.116 126.257 9.988 126.257 10.932C126.257 11.964 126.401 12.9 126.689 13.74C126.977 14.58 127.377 15.304 127.889 15.912C128.409 16.52 129.013 16.988 129.701 17.316C130.397 17.644 131.145 17.808 131.945 17.808C132.585 17.808 133.201 17.704 133.793 17.496C134.393 17.28 134.925 16.98 135.389 16.596C135.853 16.212 136.221 15.76 136.493 15.24C136.765 14.72 136.901 14.152 136.901 13.536V13.236H131.705V10.224H140.861V13.224C140.861 14.432 140.609 15.536 140.105 16.536C139.609 17.528 138.929 18.388 138.065 19.116C137.201 19.836 136.225 20.396 135.137 20.796C134.049 21.188 132.921 21.384 131.753 21.384ZM149.778 21V1.2H153.666L162.198 14.52V1.2H166.086V21H162.198L153.666 7.68V21H149.778ZM185.025 21.384C183.641 21.384 182.345 21.12 181.137 20.592C179.929 20.064 178.869 19.332 177.957 18.396C177.045 17.452 176.329 16.36 175.809 15.12C175.297 13.872 175.041 12.536 175.041 11.112C175.041 9.688 175.297 8.356 175.809 7.116C176.329 5.868 177.045 4.776 177.957 3.84C178.869 2.896 179.929 2.16 181.137 1.632C182.345 1.104 183.641 0.839999 185.025 0.839999C186.409 0.839999 187.705 1.104 188.913 1.632C190.121 2.16 191.181 2.896 192.093 3.84C193.005 4.776 193.717 5.868 194.229 7.116C194.749 8.356 195.009 9.688 195.009 11.112C195.009 12.536 194.749 13.872 194.229 15.12C193.717 16.36 193.005 17.452 192.093 18.396C191.181 19.332 190.121 20.064 188.913 20.592C187.705 21.12 186.409 21.384 185.025 21.384ZM185.013 17.64C185.861 17.64 186.637 17.48 187.341 17.16C188.045 16.84 188.657 16.388 189.177 15.804C189.697 15.22 190.101 14.532 190.389 13.74C190.677 12.94 190.821 12.064 190.821 11.112C190.821 10.16 190.677 9.288 190.389 8.496C190.101 7.696 189.697 7.004 189.177 6.42C188.657 5.836 188.045 5.384 187.341 5.064C186.637 4.744 185.861 4.584 185.013 4.584C184.181 4.584 183.409 4.744 182.697 5.064C181.993 5.384 181.381 5.836 180.861 6.42C180.341 7.004 179.937 7.696 179.649 8.496C179.369 9.288 179.229 10.16 179.229 11.112C179.229 12.064 179.369 12.94 179.649 13.74C179.937 14.532 180.341 15.22 180.861 15.804C181.381 16.388 181.993 16.84 182.697 17.16C183.409 17.48 184.181 17.64 185.013 17.64Z"
        fill="white"
      />
      <circle
        r="12"
        transform="matrix(0 -1 -1 0 12 12)"
        fill="url(#paint0_angular_0_10153)"
      />
      <defs>
        <radialGradient
          id="paint0_angular_0_10153"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(12 12) scale(12)"
        >
          <stop stopColor="#E7816B" stopOpacity="0.01" />
          <stop offset="0.999287" stopColor="#E7816B" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default LogoLight;
