import * as React from "react";

import { IconSvgProps } from "@/types";

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="0 0 192 192"
    width={size || width}
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      fill="currentColor"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "currentColor",
        strokeWidth: 4.6249,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    >
      <path
        d="M46.853 24.746v-4.319c0-2.762 2.611-4.789 5.304-4.116l17.054 4.26a5.31 5.31 0 0 1 4.034 5.146v28.658c0 2.763-2.611 4.789-5.304 4.116l-10.09-2.52"
        style={{
          display: "inline",
          fill: "none",
          fillOpacity: 1,
          stroke: "currentColor",
          strokeWidth: 4.6249,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="matrix(2.5351 0 0 2.6556 -15.545 -20.844)"
      />
      <path
        d="M30.805 31.18v-4.154c0-2.763 2.61-4.79 5.304-4.117l17.053 4.26a5.31 5.31 0 0 1 4.034 5.146v28.658c0 2.763-2.61 4.79-5.304 4.116L41.76 62.558"
        style={{
          display: "inline",
          fill: "none",
          fillOpacity: 1,
          stroke: "currentColor",
          strokeWidth: 4.6249,
          strokeLinecap: "square",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="matrix(2.5351 0 0 2.6556 -15.545 -20.844)"
      />
      <path
        d="M18.79 67.427a5.31 5.31 0 0 1-4.034-5.146V33.623c0-2.763 2.61-4.789 5.304-4.116l17.054 4.26a5.31 5.31 0 0 1 4.033 5.146V67.57c0 2.762-2.61 4.789-5.304 4.116z"
        style={{
          display: "inline",
          fill: "none",
          fillOpacity: 1,
          stroke: "currentColor",
          strokeWidth: 4.6249,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="matrix(2.5351 0 0 2.6556 -15.545 -20.844)"
      />
    </g>
  </svg>
);

export const ClipboardIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      fill="currentColor"
      height={size || height}
      viewBox="0 0 100 100"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M28.5 68.5v-34h-1.6a4.89 4.89 0 0 0-4.8 4.9v35.4a4.89 4.89 0 0 0 4.8 4.9h35.6a4.89 4.89 0 0 0 4.8-4.9v-1.4h-34a4.89 4.89 0 0 1-4.8-4.9ZM46.4 30.2h17.7a1.58 1.58 0 0 0 1.6-1.6v-3.3a4.89 4.89 0 0 0-4.8-4.9H49.6a4.82 4.82 0 0 0-4.8 4.9v3.3a1.64 1.64 0 0 0 1.6 1.6Z" />
      <path d="M73 24.4h-1.6a.74.74 0 0 0-.8.8v3.3a6.57 6.57 0 0 1-6.5 6.6H46.4a6.64 6.64 0 0 1-6.5-6.6v-3.3a.74.74 0 0 0-.8-.8h-1.6a4.82 4.82 0 0 0-4.8 4.9v35.3a4.89 4.89 0 0 0 4.8 4.9H73a4.82 4.82 0 0 0 4.8-4.9V29.4a4.85 4.85 0 0 0-4.8-5ZM60.9 55.5a1.58 1.58 0 0 1-1.6 1.6H43.1a1.58 1.58 0 0 1-1.6-1.6v-1.6a1.58 1.58 0 0 1 1.6-1.6h16.2a1.58 1.58 0 0 1 1.6 1.6Zm8.1-8.2a1.58 1.58 0 0 1-1.6 1.6H43.1a1.58 1.58 0 0 1-1.6-1.6v-1.6a1.58 1.58 0 0 1 1.6-1.6h24.3a1.58 1.58 0 0 1 1.6 1.6Z" />
    </svg>
  );
};

export const FileIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      fill="currentColor"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M6 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h13a3 3 0 0 0 3-3V10a1 1 0 0 0-.293-.707l-8-8A1 1 0 0 0 13 1H6Zm6 2H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-9h-7a1 1 0 0 1-1-1V3Zm6.586 6L14 4.414V9h4.586Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const CodeIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      fill="currentColor"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"Swagger icon"}</title>
      <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c6.616 0 12-5.383 12-12S18.616 0 12 0zm0 1.144c5.995 0 10.856 4.86 10.856 10.856 0 5.995-4.86 10.856-10.856 10.856-5.996 0-10.856-4.86-10.856-10.856C1.144 6.004 6.004 1.144 12 1.144zM8.37 5.868a6.707 6.707 0 0 0-.423.005c-.983.056-1.573.517-1.735 1.472-.115.665-.096 1.348-.143 2.017-.013.35-.05.697-.115 1.038-.134.609-.397.798-1.016.83a2.65 2.65 0 0 0-.244.042v1.463c1.126.055 1.278.452 1.37 1.629.033.429-.013.858.015 1.287.018.406.073.808.156 1.2.259 1.075 1.307 1.435 2.575 1.218v-1.283c-.203 0-.383.005-.558 0-.43-.013-.591-.12-.632-.535-.056-.535-.042-1.08-.075-1.62-.064-1.001-.175-1.988-1.153-2.625.503-.37.868-.812.983-1.398.083-.41.134-.821.166-1.237.028-.415-.023-.84.014-1.25.06-.665.102-.937.9-.91.12 0 .235-.017.369-.027v-1.31c-.16 0-.31-.004-.454-.006zm7.593.009a4.247 4.247 0 0 0-.813.06v1.274c.245 0 .434 0 .623.005.328.004.577.13.61.494.032.332.031.669.064 1.006.065.669.101 1.347.217 2.007.102.544.475.95.941 1.283-.817.549-1.057 1.333-1.098 2.215-.023.604-.037 1.213-.069 1.822-.028.554-.222.734-.78.748-.157.004-.31.018-.484.028v1.305c.327 0 .627.019.927 0 .932-.055 1.495-.507 1.68-1.412.078-.498.124-1 .138-1.504.032-.461.028-.927.074-1.384.069-.715.397-1.01 1.112-1.057a.972.972 0 0 0 .199-.046v-1.463c-.12-.014-.204-.027-.291-.032-.536-.023-.804-.203-.937-.71a5.146 5.146 0 0 1-.152-.993c-.037-.618-.033-1.241-.074-1.86-.08-1.192-.794-1.753-1.887-1.786zm-6.89 5.28a.844.844 0 0 0-.083 1.684h.055a.83.83 0 0 0 .877-.78v-.046a.845.845 0 0 0-.83-.858zm2.911 0a.808.808 0 0 0-.834.78c0 .027 0 .05.004.078 0 .503.342.826.859.826.507 0 .826-.332.826-.853-.005-.503-.342-.836-.855-.831zm2.963 0a.861.861 0 0 0-.876.835c0 .47.378.849.849.849h.009c.425.074.853-.337.881-.83.023-.457-.392-.854-.863-.854z" />
    </svg>
  );
};

export const DiscordIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
        fill="currentColor"
      />
    </svg>
  );
};

export const RedditIcon: React.FC<IconSvgProps> = ({
  size = 24,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 429.709 429.709"
      width={size || 50}
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M429.709 196.618c0-29.803-24.16-53.962-53.963-53.962-14.926 0-28.41 6.085-38.176 15.881-30.177-19.463-68.73-31.866-111.072-33.801.026-17.978 8.078-34.737 22.104-45.989 14.051-11.271 32.198-15.492 49.775-11.588l2.414.536c-.024.605-.091 1.198-.091 1.809 0 24.878 20.168 45.046 45.046 45.046s45.046-20.168 45.046-45.046c0-24.879-20.168-45.046-45.046-45.046-15.997 0-30.01 8.362-38.002 20.929l-4.317-.959c-24.51-5.446-49.807.442-69.395 16.156-19.564 15.695-30.792 39.074-30.818 64.152-42.332 1.934-80.878 14.331-111.052 33.785-9.767-9.798-23.271-15.866-38.2-15.866C24.16 142.656 0 166.815 0 196.618c0 20.765 11.75 38.755 28.946 47.776a106.48 106.48 0 0 0-1.993 20.462c0 77.538 84.126 140.395 187.901 140.395s187.901-62.857 187.901-140.395c0-6.948-.687-13.775-1.991-20.452 17.197-9.023 28.945-27.019 28.945-47.786zM345.746 47.743c12 0 21.762 9.762 21.762 21.762 0 11.999-9.762 21.761-21.762 21.761s-21.762-9.762-21.762-21.761c0-12 9.763-21.762 21.762-21.762zM23.284 196.618c0-16.916 13.762-30.678 30.678-30.678 7.245 0 13.895 2.538 19.142 6.758-16.412 14.08-29.118 30.631-37.007 48.804-7.748-5.565-12.813-14.634-12.813-24.884zm310.5 148.859c-31.492 23.53-73.729 36.489-118.929 36.489s-87.437-12.959-118.929-36.489c-29.462-22.013-45.688-50.645-45.688-80.621 0-29.977 16.226-58.609 45.688-80.622 31.492-23.53 73.729-36.489 118.929-36.489s87.437 12.959 118.929 36.489c29.462 22.013 45.688 50.645 45.688 80.622-.001 29.976-16.226 58.608-45.688 80.621zm59.821-123.989c-7.891-18.17-20.596-34.716-37.005-48.794 5.247-4.22 11.901-6.754 19.147-6.754 16.916 0 30.678 13.762 30.678 30.678-.001 10.249-5.072 19.307-12.82 24.87z"
        style={{
          fill: "currentColor",
        }}
      />
      <circle
        cx={145.224}
        cy={232.074}
        r={24.57}
        style={{
          fill: "currentColor",
        }}
      />
      <circle
        cx={283.484}
        cy={232.074}
        r={24.57}
        style={{
          fill: "currentColor",
        }}
      />
      <path
        d="M273.079 291.773c-17.32 15.78-39.773 24.47-63.224 24.47-26.332 0-50.729-10.612-68.696-29.881-4.384-4.704-11.751-4.96-16.454-.575-4.703 4.384-4.96 11.752-.575 16.454 22.095 23.695 53.341 37.285 85.726 37.285 29.266 0 57.288-10.847 78.905-30.543 4.752-4.33 5.096-11.694.765-16.446-4.329-4.749-11.688-5.097-16.447-.764z"
        style={{
          fill: "currentColor",
        }}
      />
    </svg>
  );
};

export const GithubIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

export const HeartFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);
