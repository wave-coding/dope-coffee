import { IconProps, IconRecords } from './icon.type';

const Icons: IconRecords = {
  star: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M17.66 22.67C17.13 22.67 16.45 22.5 15.6 22L12.61 20.23C12.3 20.05 11.7 20.05 11.4 20.23L8.4 22C6.63 23.05 5.59 22.63 5.12 22.29C4.66 21.95 3.94 21.08 4.41 19.08L5.12 16.01C5.2 15.69 5.04 15.14 4.8 14.9L2.32 12.42C1.08 11.18 1.18 10.12 1.35 9.60001C1.52 9.08001 2.06 8.16001 3.78 7.87001L6.97 7.34001C7.27 7.29001 7.7 6.97001 7.83 6.70001L9.6 3.17001C10.4 1.56001 11.45 1.32001 12 1.32001C12.55 1.32001 13.6 1.56001 14.4 3.17001L16.16 6.69001C16.3 6.96001 16.73 7.28001 17.03 7.33001L20.22 7.86001C21.95 8.15001 22.49 9.07001 22.65 9.59001C22.81 10.11 22.91 11.17 21.68 12.41L19.2 14.9C18.96 15.14 18.81 15.68 18.88 16.01L19.59 19.08C20.05 21.08 19.34 21.95 18.88 22.29C18.63 22.47 18.23 22.67 17.66 22.67ZM12 18.59C12.49 18.59 12.98 18.71 13.37 18.94L16.36 20.71C17.23 21.23 17.78 21.23 17.99 21.08C18.2 20.93 18.35 20.4 18.13 19.42L17.42 16.35C17.23 15.52 17.54 14.45 18.14 13.84L20.62 11.36C21.11 10.87 21.33 10.39 21.23 10.06C21.12 9.73001 20.66 9.46001 19.98 9.35001L16.79 8.82001C16.02 8.69001 15.18 8.07001 14.83 7.37001L13.07 3.85001C12.75 3.21001 12.35 2.83001 12 2.83001C11.65 2.83001 11.25 3.21001 10.94 3.85001L9.17 7.37001C8.82 8.07001 7.98 8.69001 7.21 8.82001L4.03 9.35001C3.35 9.46001 2.89 9.73001 2.78 10.06C2.67 10.39 2.9 10.88 3.39 11.36L5.87 13.84C6.47 14.44 6.78 15.52 6.59 16.35L5.88 19.42C5.65 20.41 5.81 20.93 6.02 21.08C6.23 21.23 6.77 21.22 7.65 20.71L10.64 18.94C11.02 18.71 11.51 18.59 12 18.59Z" />
    </svg>
  ),
  'bold-star': (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M5.74001 16C5.85001 15.51 5.65001 14.81 5.30001 14.46L2.87001 12.03C2.11001 11.27 1.81001 10.46 2.03001 9.76C2.26001 9.06 2.97001 8.58 4.03001 8.4L7.15001 7.88C7.60001 7.8 8.15001 7.4 8.36001 6.99L10.08 3.54C10.58 2.55 11.26 2 12 2C12.74 2 13.42 2.55 13.92 3.54L15.64 6.99C15.77 7.25 16.04 7.5 16.33 7.67L5.56001 18.44C5.42001 18.58 5.18001 18.45 5.22001 18.25L5.74001 16Z"
        fill={props?.fill}
      />
      <path
        d="M18.7 14.46C18.34 14.82 18.14 15.51 18.26 16L18.95 19.01C19.24 20.26 19.06 21.2 18.44 21.65C18.19 21.83 17.89 21.92 17.54 21.92C17.03 21.92 16.43 21.73 15.77 21.34L12.84 19.6C12.38 19.33 11.62 19.33 11.16 19.6L8.22999 21.34C7.11999 21.99 6.16999 22.1 5.55999 21.65C5.32999 21.48 5.15999 21.25 5.04999 20.95L17.21 8.78999C17.67 8.32999 18.32 8.11999 18.95 8.22999L19.96 8.39999C21.02 8.57999 21.73 9.05999 21.96 9.75999C22.18 10.46 21.88 11.27 21.12 12.03L18.7 14.46Z"
        fill={props?.fill}
      />
    </svg>
  ),
  'search-normal': (props: IconProps) => (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9.58332 18.125C4.87499 18.125 1.04166 14.2917 1.04166 9.58334C1.04166 4.87501 4.87499 1.04167 9.58332 1.04167C14.2917 1.04167 18.125 4.87501 18.125 9.58334C18.125 14.2917 14.2917 18.125 9.58332 18.125ZM9.58332 2.29167C5.55832 2.29167 2.29166 5.56667 2.29166 9.58334C2.29166 13.6 5.55832 16.875 9.58332 16.875C13.6083 16.875 16.875 13.6 16.875 9.58334C16.875 5.56667 13.6083 2.29167 9.58332 2.29167Z"
        fill={props?.fill}
      />
      <path
        d="M18.3333 18.4583C18.3157 18.4583 18.3001 18.4551 18.2868 18.4497C18.274 18.4446 18.2599 18.4361 18.2452 18.4214L16.5786 16.7548C16.557 16.7333 16.5438 16.7025 16.5438 16.6667C16.5438 16.6308 16.557 16.6001 16.5786 16.5786C16.6001 16.557 16.6308 16.5437 16.6667 16.5437C16.7025 16.5437 16.7333 16.557 16.7548 16.5786L18.4215 18.2452C18.443 18.2667 18.4563 18.2975 18.4563 18.3333C18.4563 18.3692 18.443 18.3999 18.4215 18.4214C18.4068 18.4361 18.3927 18.4446 18.3799 18.4497C18.3666 18.4551 18.351 18.4583 18.3333 18.4583Z"
        fill={props?.fill}
        stroke={props?.fill}
      />
    </svg>
  ),
  'close-circle': (props: IconProps) => (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7.99998 15.1667C4.04665 15.1667 0.833313 11.9533 0.833313 8C0.833313 4.04667 4.04665 0.833332 7.99998 0.833332C11.9533 0.833332 15.1666 4.04667 15.1666 8C15.1666 11.9533 11.9533 15.1667 7.99998 15.1667ZM7.99998 1.83333C4.59998 1.83333 1.83331 4.6 1.83331 8C1.83331 11.4 4.59998 14.1667 7.99998 14.1667C11.4 14.1667 14.1666 11.4 14.1666 8C14.1666 4.6 11.4 1.83333 7.99998 1.83333Z"
        fill={props?.fill}
      />
      <path
        d="M6.11332 10.3867C5.98666 10.3867 5.85999 10.34 5.75999 10.24C5.56666 10.0467 5.56666 9.72667 5.75999 9.53334L9.53332 5.76C9.72666 5.56667 10.0467 5.56667 10.24 5.76C10.4333 5.95334 10.4333 6.27333 10.24 6.46667L6.46666 10.24C6.37332 10.34 6.23999 10.3867 6.11332 10.3867Z"
        fill={props?.fill}
      />
      <path
        d="M9.88666 10.3867C9.75999 10.3867 9.63332 10.34 9.53332 10.24L5.75999 6.46667C5.56666 6.27333 5.56666 5.95334 5.75999 5.76C5.95332 5.56667 6.27332 5.56667 6.46666 5.76L10.24 9.53334C10.4333 9.72667 10.4333 10.0467 10.24 10.24C10.14 10.34 10.0133 10.3867 9.88666 10.3867Z"
        fill={props?.fill}
      />
    </svg>
  ),
  home: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M20.86 8.36997L13.93 2.82997C12.86 1.96997 11.13 1.96997 10.07 2.81997L3.13999 8.36997C2.35999 8.98997 1.85999 10.3 2.02999 11.28L3.35999 19.24C3.59999 20.66 4.95999 21.81 6.39999 21.81H17.6C19.03 21.81 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.98997 20.86 8.36997ZM12 15.5C10.62 15.5 9.49999 14.38 9.49999 13C9.49999 11.62 10.62 10.5 12 10.5C13.38 10.5 14.5 11.62 14.5 13C14.5 14.38 13.38 15.5 12 15.5Z" />
    </svg>
  ),
  'home-outline': (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M17.5999 22.5601H6.39985C4.57984 22.5601 2.91985 21.1601 2.61985 19.3601L1.28984 11.4001C1.07984 10.1601 1.67985 8.57011 2.66985 7.78011L9.59986 2.23006C10.9399 1.15006 13.0498 1.16007 14.3998 2.24007L21.3299 7.78011C22.3099 8.57011 22.9099 10.1601 22.7099 11.4001L21.3799 19.3601C21.0799 21.1301 19.3899 22.5601 17.5999 22.5601ZM11.9899 2.94008C11.4599 2.94008 10.9298 3.10005 10.5398 3.41005L3.60985 8.9601C3.03985 9.4201 2.64986 10.4401 2.76986 11.1601L4.09986 19.1201C4.27986 20.1701 5.32984 21.0601 6.39985 21.0601H17.5999C18.6699 21.0601 19.7198 20.1701 19.8998 19.1101L21.2298 11.1501C21.3498 10.4301 20.9499 9.40009 20.3899 8.95009L13.4599 3.41005C13.0599 3.10005 12.5299 2.94008 11.9899 2.94008Z" />
      <path d="M12 16.25C10.21 16.25 8.75 14.79 8.75 13C8.75 11.21 10.21 9.75 12 9.75C13.79 9.75 15.25 11.21 15.25 13C15.25 14.79 13.79 16.25 12 16.25ZM12 11.25C11.04 11.25 10.25 12.04 10.25 13C10.25 13.96 11.04 14.75 12 14.75C12.96 14.75 13.75 13.96 13.75 13C13.75 12.04 12.96 11.25 12 11.25Z" />
    </svg>
  ),
  location: (props: IconProps) => (
    <svg viewBox="0 0 25 24" {...props} xmlns="http://www.w3.org/2000/svg">
      <path d="M21.12 8.45C20.07 3.83 16.04 1.75 12.5 1.75C12.5 1.75 12.5 1.75 12.49 1.75C8.95997 1.75 4.91997 3.82 3.86997 8.44C2.69997 13.6 5.85997 17.97 8.71997 20.72C9.77997 21.74 11.14 22.25 12.5 22.25C13.86 22.25 15.22 21.74 16.27 20.72C19.13 17.97 22.29 13.61 21.12 8.45ZM12.5 13.46C10.76 13.46 9.34997 12.05 9.34997 10.31C9.34997 8.57 10.76 7.16 12.5 7.16C14.24 7.16 15.65 8.57 15.65 10.31C15.65 12.05 14.24 13.46 12.5 13.46Z" />
    </svg>
  ),
  'location-outline': (props: IconProps) => (
    <svg viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12.5 14.17C10.37 14.17 8.63 12.44 8.63 10.3C8.63 8.16 10.37 6.44 12.5 6.44C14.63 6.44 16.37 8.17 16.37 10.31C16.37 12.45 14.63 14.17 12.5 14.17ZM12.5 7.94C11.2 7.94 10.13 9 10.13 10.31C10.13 11.62 11.19 12.68 12.5 12.68C13.81 12.68 14.87 11.62 14.87 10.31C14.87 9 13.8 7.94 12.5 7.94Z"
        fill={props?.fill}
      />
      <path
        d="M12.5 22.76C11.02 22.76 9.52999 22.2 8.36999 21.09C5.41999 18.25 2.15999 13.72 3.38999 8.33C4.49999 3.44 8.76999 1.25 12.5 1.25C12.5 1.25 12.5 1.25 12.51 1.25C16.24 1.25 20.51 3.44 21.62 8.34C22.84 13.73 19.58 18.25 16.63 21.09C15.47 22.2 13.98 22.76 12.5 22.76ZM12.5 2.75C9.58999 2.75 5.84999 4.3 4.85999 8.66C3.77999 13.37 6.73999 17.43 9.41999 20C11.15 21.67 13.86 21.67 15.59 20C18.26 17.43 21.22 13.37 20.16 8.66C19.16 4.3 15.41 2.75 12.5 2.75Z"
        fill={props?.fill}
      />
    </svg>
  ),
  'shopping-card': (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M16.25 22.5C17.2165 22.5 18 21.7165 18 20.75C18 19.7835 17.2165 19 16.25 19C15.2835 19 14.5 19.7835 14.5 20.75C14.5 21.7165 15.2835 22.5 16.25 22.5Z" />
      <path d="M8.25 22.5C9.2165 22.5 10 21.7165 10 20.75C10 19.7835 9.2165 19 8.25 19C7.2835 19 6.5 19.7835 6.5 20.75C6.5 21.7165 7.2835 22.5 8.25 22.5Z" />
      <path d="M4.84 3.94L4.64 6.39C4.6 6.86 4.97 7.25 5.44 7.25H20.75C21.17 7.25 21.52 6.93 21.55 6.51C21.68 4.74 20.33 3.3 18.56 3.3H6.27C6.17 2.86 5.97 2.44 5.66 2.09C5.16 1.56 4.46 1.25 3.74 1.25H2C1.59 1.25 1.25 1.59 1.25 2C1.25 2.41 1.59 2.75 2 2.75H3.74C4.05 2.75 4.34 2.88 4.55 3.1C4.76 3.33 4.86 3.63 4.84 3.94Z" />
      <path d="M20.51 8.75H5.16999C4.74999 8.75 4.40999 9.07 4.36999 9.48L4.00999 13.83C3.86999 15.54 5.20999 17 6.91999 17H18.04C19.54 17 20.86 15.77 20.97 14.27L21.3 9.6C21.34 9.14 20.98 8.75 20.51 8.75Z" />
    </svg>
  ),
  'shopping-card-outline': (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M18.19 17.75H7.53999C6.54999 17.75 5.59999 17.33 4.92999 16.6C4.25999 15.87 3.92 14.89 4 13.9L4.83 3.94C4.86 3.63 4.74999 3.33001 4.53999 3.10001C4.32999 2.87001 4.04 2.75 3.73 2.75H2C1.59 2.75 1.25 2.41 1.25 2C1.25 1.59 1.59 1.25 2 1.25H3.74001C4.47001 1.25 5.15999 1.56 5.64999 2.09C5.91999 2.39 6.12 2.74 6.23 3.13H18.72C19.73 3.13 20.66 3.53 21.34 4.25C22.01 4.98 22.35 5.93 22.27 6.94L21.73 14.44C21.62 16.27 20.02 17.75 18.19 17.75ZM6.28 4.62L5.5 14.02C5.45 14.6 5.64 15.15 6.03 15.58C6.42 16.01 6.95999 16.24 7.53999 16.24H18.19C19.23 16.24 20.17 15.36 20.25 14.32L20.79 6.82001C20.83 6.23001 20.64 5.67001 20.25 5.26001C19.86 4.84001 19.32 4.60999 18.73 4.60999H6.28V4.62Z"
        fill={props?.fill}
      />
      <path
        d="M16.25 22.75C15.15 22.75 14.25 21.85 14.25 20.75C14.25 19.65 15.15 18.75 16.25 18.75C17.35 18.75 18.25 19.65 18.25 20.75C18.25 21.85 17.35 22.75 16.25 22.75ZM16.25 20.25C15.97 20.25 15.75 20.47 15.75 20.75C15.75 21.03 15.97 21.25 16.25 21.25C16.53 21.25 16.75 21.03 16.75 20.75C16.75 20.47 16.53 20.25 16.25 20.25Z"
        fill={props?.fill}
      />
      <path
        d="M8.25 22.75C7.15 22.75 6.25 21.85 6.25 20.75C6.25 19.65 7.15 18.75 8.25 18.75C9.35 18.75 10.25 19.65 10.25 20.75C10.25 21.85 9.35 22.75 8.25 22.75ZM8.25 20.25C7.97 20.25 7.75 20.47 7.75 20.75C7.75 21.03 7.97 21.25 8.25 21.25C8.53 21.25 8.75 21.03 8.75 20.75C8.75 20.47 8.53 20.25 8.25 20.25Z"
        fill={props?.fill}
      />
      <path
        d="M21 8.75H9C8.59 8.75 8.25 8.41 8.25 8C8.25 7.59 8.59 7.25 9 7.25H21C21.41 7.25 21.75 7.59 21.75 8C21.75 8.41 21.41 8.75 21 8.75Z"
        fill={props?.fill}
      />
    </svg>
  ),
  profile: (props: IconProps) => (
    <svg viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12.5 2C9.88 2 7.75 4.13 7.75 6.75C7.75 9.32 9.76 11.4 12.38 11.49C12.46 11.48 12.54 11.48 12.6 11.49C12.62 11.49 12.63 11.49 12.65 11.49C12.66 11.49 12.66 11.49 12.67 11.49C15.23 11.4 17.24 9.32 17.25 6.75C17.25 4.13 15.12 2 12.5 2Z" />
      <path d="M17.58 14.15C14.79 12.29 10.24 12.29 7.43002 14.15C6.16002 15 5.46002 16.15 5.46002 17.38C5.46002 18.61 6.16002 19.75 7.42002 20.59C8.82002 21.53 10.66 22 12.5 22C14.34 22 16.18 21.53 17.58 20.59C18.84 19.74 19.54 18.6 19.54 17.36C19.53 16.13 18.84 14.99 17.58 14.15Z" />
    </svg>
  ),
  'profile-outline': (props: IconProps) => (
    <svg viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12.6596 11.62C12.6296 11.62 12.6096 11.62 12.5796 11.62C12.5296 11.61 12.4596 11.61 12.3996 11.62C9.49963 11.53 7.30963 9.25 7.30963 6.44C7.30963 3.58 9.63963 1.25 12.4996 1.25C15.3596 1.25 17.6896 3.58 17.6896 6.44C17.6796 9.25 15.4796 11.53 12.6896 11.62C12.6796 11.62 12.6696 11.62 12.6596 11.62ZM12.4996 2.75C10.4696 2.75 8.80963 4.41 8.80963 6.44C8.80963 8.44 10.3696 10.05 12.3596 10.12C12.4096 10.11 12.5496 10.11 12.6796 10.12C14.6396 10.03 16.1796 8.42 16.1896 6.44C16.1896 4.41 14.5296 2.75 12.4996 2.75Z"
        fill={props?.fill}
      />
      <path
        d="M12.6696 22.55C10.7096 22.55 8.73961 22.05 7.24961 21.05C5.85961 20.13 5.09961 18.87 5.09961 17.5C5.09961 16.13 5.85961 14.86 7.24961 13.93C10.2496 11.94 15.1096 11.94 18.0896 13.93C19.4696 14.85 20.2396 16.11 20.2396 17.48C20.2396 18.85 19.4796 20.12 18.0896 21.05C16.5896 22.05 14.6296 22.55 12.6696 22.55ZM8.07961 15.19C7.11961 15.83 6.59961 16.65 6.59961 17.51C6.59961 18.36 7.12961 19.18 8.07961 19.81C10.5696 21.48 14.7696 21.48 17.2596 19.81C18.2196 19.17 18.7396 18.35 18.7396 17.49C18.7396 16.64 18.2096 15.82 17.2596 15.19C14.7696 13.53 10.5696 13.53 8.07961 15.19Z"
        fill={props?.fill}
      />
    </svg>
  ),
  high: (props: IconProps) => (
    <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7.5 11.375H4.5C1.785 11.375 0.625 10.215 0.625 7.5V4.5C0.625 1.785 1.785 0.625 4.5 0.625H7.5C10.215 0.625 11.375 1.785 11.375 4.5V7.5C11.375 10.215 10.215 11.375 7.5 11.375ZM4.5 1.375C2.195 1.375 1.375 2.195 1.375 4.5V7.5C1.375 9.805 2.195 10.625 4.5 10.625H7.5C9.805 10.625 10.625 9.805 10.625 7.5V4.5C10.625 2.195 9.805 1.375 7.5 1.375H4.5Z"
        fill={props?.fill}
      />
      <path
        d="M7.49997 5.12998C7.40497 5.12998 7.30997 5.09497 7.23497 5.01997L5.99997 3.78498L4.76497 5.01997C4.61997 5.16497 4.37997 5.16497 4.23497 5.01997C4.08997 4.87497 4.08997 4.63498 4.23497 4.48998L5.73497 2.98998C5.87997 2.84498 6.11997 2.84498 6.26497 2.98998L7.76497 4.48998C7.90997 4.63498 7.90997 4.87497 7.76497 5.01997C7.68997 5.09497 7.59497 5.12998 7.49997 5.12998Z"
        fill={props?.fill}
      />
      <path
        d="M6 7.63C5.795 7.63 5.625 7.46 5.625 7.255V3.255C5.625 3.05 5.795 2.88 6 2.88C6.205 2.88 6.375 3.05 6.375 3.255V7.255C6.375 7.465 6.205 7.63 6 7.63Z"
        fill={props?.fill}
      />
      <path
        d="M5.99998 9.11502C4.94498 9.11502 3.88497 8.94502 2.87997 8.61002C2.68497 8.54502 2.57997 8.33002 2.64497 8.13502C2.70997 7.94002 2.92498 7.83002 3.11998 7.90002C4.97998 8.52002 7.02498 8.52002 8.88498 7.90002C9.07998 7.83502 9.29498 7.94002 9.35998 8.13502C9.42498 8.33002 9.31998 8.54502 9.12498 8.61002C8.11498 8.95002 7.05498 9.11502 5.99998 9.11502Z"
        fill={props?.fill}
      />
    </svg>
  ),
  low: (props: IconProps) => (
    <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7.5 11.375H4.5C1.785 11.375 0.625 10.215 0.625 7.5V4.5C0.625 1.785 1.785 0.625 4.5 0.625H7.5C10.215 0.625 11.375 1.785 11.375 4.5V7.5C11.375 10.215 10.215 11.375 7.5 11.375ZM4.5 1.375C2.195 1.375 1.375 2.195 1.375 4.5V7.5C1.375 9.805 2.195 10.625 4.5 10.625H7.5C9.805 10.625 10.625 9.805 10.625 7.5V4.5C10.625 2.195 9.805 1.375 7.5 1.375H4.5Z"
        fill={props?.fill}
      />
      <path
        d="M5.99997 7.62998C5.90497 7.62998 5.80997 7.59497 5.73497 7.51997L4.23497 6.01997C4.08997 5.87497 4.08997 5.63498 4.23497 5.48998C4.37997 5.34498 4.61997 5.34498 4.76497 5.48998L5.99997 6.72498L7.23497 5.48998C7.37997 5.34498 7.61997 5.34498 7.76497 5.48998C7.90997 5.63498 7.90997 5.87497 7.76497 6.01997L6.26497 7.51997C6.18997 7.59497 6.09497 7.62998 5.99997 7.62998Z"
        fill={props?.fill}
      />
      <path
        d="M6 7.63C5.795 7.63 5.625 7.46 5.625 7.255V3.255C5.625 3.05 5.795 2.88 6 2.88C6.205 2.88 6.375 3.05 6.375 3.255V7.255C6.375 7.465 6.205 7.63 6 7.63Z"
        fill={props?.fill}
      />
      <path
        d="M5.99997 9.11502C4.94497 9.11502 3.88497 8.94502 2.87997 8.61002C2.68497 8.54502 2.57997 8.33002 2.64497 8.13502C2.70997 7.94002 2.91997 7.83002 3.11997 7.90002C4.97997 8.52002 7.02497 8.52002 8.88497 7.90002C9.07997 7.83502 9.29497 7.94002 9.35997 8.13502C9.42497 8.33002 9.31997 8.54502 9.12497 8.61002C8.11497 8.95002 7.05497 9.11502 5.99997 9.11502Z"
        fill={props?.fill}
      />
    </svg>
  ),
  more: (props: IconProps) => (
    <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M2.5 7.375C1.74 7.375 1.125 6.76 1.125 6C1.125 5.24 1.74 4.625 2.5 4.625C3.26 4.625 3.875 5.24 3.875 6C3.875 6.76 3.26 7.375 2.5 7.375ZM2.5 5.375C2.155 5.375 1.875 5.655 1.875 6C1.875 6.345 2.155 6.625 2.5 6.625C2.845 6.625 3.125 6.345 3.125 6C3.125 5.655 2.845 5.375 2.5 5.375Z"
        fill={props?.fill}
      />
      <path
        d="M9.5 7.375C8.74 7.375 8.125 6.76 8.125 6C8.125 5.24 8.74 4.625 9.5 4.625C10.26 4.625 10.875 5.24 10.875 6C10.875 6.76 10.26 7.375 9.5 7.375ZM9.5 5.375C9.155 5.375 8.875 5.655 8.875 6C8.875 6.345 9.155 6.625 9.5 6.625C9.845 6.625 10.125 6.345 10.125 6C10.125 5.655 9.845 5.375 9.5 5.375Z"
        fill={props?.fill}
      />
      <path
        d="M6 7.375C5.24 7.375 4.625 6.76 4.625 6C4.625 5.24 5.24 4.625 6 4.625C6.76 4.625 7.375 5.24 7.375 6C7.375 6.76 6.76 7.375 6 7.375ZM6 5.375C5.655 5.375 5.375 5.655 5.375 6C5.375 6.345 5.655 6.625 6 6.625C6.345 6.625 6.625 6.345 6.625 6C6.625 5.655 6.345 5.375 6 5.375Z"
        fill={props?.fill}
      />
    </svg>
  ),
  minus: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z"
        fill={props?.fill}
      />
    </svg>
  ),
  add: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z"
        fill={props?.fill}
      />
      <path
        d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z"
        fill={props?.fill}
      />
    </svg>
  ),
};

export default Icons;
