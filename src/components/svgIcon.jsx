import React, { memo } from "react";

export const ICON_LIST = {
    hamburger: (
        <svg
            width="33"
            height="18"
            viewBox="0 0 33 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="33" height="2" rx="1" fill="white" />
            <rect y="8" width="33" height="2" rx="1" fill="white" />
            <rect y="16" width="33" height="2" rx="1" fill="white" />
        </svg>
    ),
    search: (
        <svg
            width="20"
            height="26"
            viewBox="0 0 20 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_4_3502)">
                <path
                    d="M8.26667 16.4667C6.75556 16.4667 5.36667 16.1 4.1 15.3667C2.83333 14.6333 1.83333 13.6333 1.1 12.3667C0.366667 11.1 0 9.72222 0 8.23333C0 6.74444 0.366667 5.36667 1.1 4.1C1.83333 2.83333 2.83333 1.83333 4.1 1.1C5.36667 0.366665 6.74444 -1.90735e-06 8.23333 -1.90735e-06C9.72222 -1.90735e-06 11.1 0.366665 12.3667 1.1C13.6333 1.83333 14.6333 2.83333 15.3667 4.1C16.1 5.36667 16.4667 6.74444 16.4667 8.23333C16.4667 9.72222 16.1 11.1 15.3667 12.3667C14.6333 13.6333 13.6333 14.6333 12.3667 15.3667C11.1 16.1 9.73333 16.4667 8.26667 16.4667ZM8.26667 1.53333C7.06667 1.53333 5.95556 1.83333 4.93333 2.43333C3.91111 3.03333 3.1 3.84444 2.5 4.86667C1.9 5.88889 1.6 7.01111 1.6 8.23333C1.6 9.45555 1.9 10.5778 2.5 11.6C3.1 12.6222 3.91111 13.4333 4.93333 14.0333C5.95556 14.6333 7.06667 14.9333 8.26667 14.9333C9.46667 14.9333 10.5778 14.6333 11.6 14.0333C12.6222 13.4333 13.4333 12.6222 14.0333 11.6C14.6333 10.5778 14.9333 9.45555 14.9333 8.23333C14.9333 7.01111 14.6333 5.88889 14.0333 4.86667C13.4333 3.84444 12.6222 3.03333 11.6 2.43333C10.5778 1.83333 9.46667 1.53333 8.26667 1.53333ZM19.7333 19.8C19.9111 19.6222 20 19.4222 20 19.2C20 18.9778 19.9111 18.8 19.7333 18.6667L16.2667 15.2C16.1333 15.0222 15.9556 14.9333 15.7333 14.9333C15.5111 14.9333 15.3222 15.0111 15.1667 15.1667C15.0111 15.3222 14.9333 15.5111 14.9333 15.7333C14.9333 15.9556 15 16.1333 15.1333 16.2667L18.6667 19.8C18.8 19.9333 18.9778 20 19.2 20C19.4222 20 19.6 19.9333 19.7333 19.8Z"
                    fill="white"
                />
            </g>
            <defs>
                <clipPath id="clip0_4_3502">
                    <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="matrix(1 0 0 -1 0 20)"
                    />
                </clipPath>
            </defs>
        </svg>
    ),
    logo: (
        <svg
            width="172"
            height="50"
            viewBox="0 0 172 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <rect
                width="171"
                height="50"
                transform="translate(0.5)"
                fill="url(#pattern0_4_3506)"
            />
            <defs>
                <pattern
                    id="pattern0_4_3506"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use
                        xlink:href="#image0_4_3506"
                        transform="scale(0.00584795 0.02)"
                    />
                </pattern>
                <image
                    id="image0_4_3506"
                    width="171"
                    height="50"
                    preserveAspectRatio="none"
                    xlink:href="data:image/png;base64,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"
                />
            </defs>
        </svg>
    ),
    list: (
        <svg
            width="198"
            height="46"
            viewBox="0 0 198 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect y="0.75" width="45" height="45" rx="22.5" fill="#183354" />
            <path
                d="M27.1484 24.5H24.2188V33.25H20.3125V24.5H17.1094V20.9062H20.3125V18.1328C20.3125 15.0078 22.1875 13.25 25.0391 13.25C26.4062 13.25 27.8516 13.5234 27.8516 13.5234V16.6094H26.25C24.6875 16.6094 24.2188 17.5469 24.2188 18.5625V20.9062H27.6953L27.1484 24.5Z"
                fill="white"
            />
            <a href="https://www.figma.com/design/amQibIgXLJeqakDXorQFbW/75---News-Magizine--WebsiteTemplates--Community-?node-id=4-3495">
                <rect
                    fill="black"
                    fill-opacity="0"
                    y="-1.5"
                    width="12.5"
                    height="23"
                />
            </a>
            <rect
                x="51"
                y="0.75"
                width="45"
                height="45"
                rx="22.5"
                fill="#183354"
            />
            <path
                d="M81.4297 19.1875C81.4297 19.3828 81.4297 19.5391 81.4297 19.7344C81.4297 25.1641 77.3281 31.375 69.7891 31.375C67.4453 31.375 65.2969 30.7109 63.5 29.5391C63.8125 29.5781 64.125 29.6172 64.4766 29.6172C66.3906 29.6172 68.1484 28.9531 69.5547 27.8594C67.7578 27.8203 66.2344 26.6484 65.7266 25.0078C66 25.0469 66.2344 25.0859 66.5078 25.0859C66.8594 25.0859 67.25 25.0078 67.5625 24.9297C65.6875 24.5391 64.2812 22.8984 64.2812 20.9062V20.8672C64.8281 21.1797 65.4922 21.3359 66.1562 21.375C65.0234 20.6328 64.3203 19.3828 64.3203 17.9766C64.3203 17.1953 64.5156 16.4922 64.8672 15.9062C66.8984 18.3672 69.9453 20.0078 73.3438 20.2031C73.2656 19.8906 73.2266 19.5781 73.2266 19.2656C73.2266 17 75.0625 15.1641 77.3281 15.1641C78.5 15.1641 79.5547 15.6328 80.3359 16.4531C81.2344 16.2578 82.1328 15.9062 82.9141 15.4375C82.6016 16.4141 81.9766 17.1953 81.1172 17.7031C81.9375 17.625 82.7578 17.3906 83.4609 17.0781C82.9141 17.8984 82.2109 18.6016 81.4297 19.1875Z"
                fill="white"
            />
            <a href="https://www.figma.com/design/amQibIgXLJeqakDXorQFbW/75---News-Magizine--WebsiteTemplates--Community-?node-id=4-3495">
                <rect
                    fill="black"
                    fill-opacity="0"
                    y="-1.5"
                    width="20"
                    height="23"
                />
            </a>
            <rect
                x="102"
                y="0.75"
                width="45"
                height="45"
                rx="22.5"
                fill="#183354"
            />
            <path
                d="M124.5 18.7578C126.961 18.7578 128.992 20.7891 128.992 23.25C128.992 25.75 126.961 27.7422 124.5 27.7422C122 27.7422 120.008 25.75 120.008 23.25C120.008 20.7891 122 18.7578 124.5 18.7578ZM124.5 26.1797C126.102 26.1797 127.391 24.8906 127.391 23.25C127.391 21.6484 126.102 20.3594 124.5 20.3594C122.859 20.3594 121.57 21.6484 121.57 23.25C121.57 24.8906 122.898 26.1797 124.5 26.1797ZM130.203 18.6016C130.203 19.1875 129.734 19.6562 129.148 19.6562C128.562 19.6562 128.094 19.1875 128.094 18.6016C128.094 18.0156 128.562 17.5469 129.148 17.5469C129.734 17.5469 130.203 18.0156 130.203 18.6016ZM133.172 19.6562C133.25 21.1016 133.25 25.4375 133.172 26.8828C133.094 28.2891 132.781 29.5 131.766 30.5547C130.75 31.5703 129.5 31.8828 128.094 31.9609C126.648 32.0391 122.312 32.0391 120.867 31.9609C119.461 31.8828 118.25 31.5703 117.195 30.5547C116.18 29.5 115.867 28.2891 115.789 26.8828C115.711 25.4375 115.711 21.1016 115.789 19.6562C115.867 18.25 116.18 17 117.195 15.9844C118.25 14.9688 119.461 14.6562 120.867 14.5781C122.312 14.5 126.648 14.5 128.094 14.5781C129.5 14.6562 130.75 14.9688 131.766 15.9844C132.781 17 133.094 18.25 133.172 19.6562ZM131.297 28.4062C131.766 27.2734 131.648 24.5391 131.648 23.25C131.648 22 131.766 19.2656 131.297 18.0938C130.984 17.3516 130.398 16.7266 129.656 16.4531C128.484 15.9844 125.75 16.1016 124.5 16.1016C123.211 16.1016 120.477 15.9844 119.344 16.4531C118.562 16.7656 117.977 17.3516 117.664 18.0938C117.195 19.2656 117.312 22 117.312 23.25C117.312 24.5391 117.195 27.2734 117.664 28.4062C117.977 29.1875 118.562 29.7734 119.344 30.0859C120.477 30.5547 123.211 30.4375 124.5 30.4375C125.75 30.4375 128.484 30.5547 129.656 30.0859C130.398 29.7734 131.023 29.1875 131.297 28.4062Z"
                fill="white"
            />
            <a href="https://www.figma.com/design/amQibIgXLJeqakDXorQFbW/75---News-Magizine--WebsiteTemplates--Community-?node-id=4-3495">
                <rect
                    fill="black"
                    fill-opacity="0"
                    y="-1.5"
                    width="17.5"
                    height="23"
                />
            </a>
            <rect
                x="153"
                y="0.75"
                width="45"
                height="45"
                rx="22.5"
                fill="#183354"
            />
            <path
                d="M170.656 30.75H167.023V19.0703H170.656V30.75ZM168.82 17.5078C167.688 17.5078 166.75 16.5312 166.75 15.3594C166.75 14.2266 167.688 13.2891 168.82 13.2891C169.992 13.2891 170.93 14.2266 170.93 15.3594C170.93 16.5312 169.992 17.5078 168.82 17.5078ZM184.211 30.75H180.617V25.0859C180.617 23.7188 180.578 22 178.703 22C176.828 22 176.555 23.4453 176.555 24.9688V30.75H172.922V19.0703H176.398V20.6719H176.438C176.945 19.7734 178.117 18.7969 179.875 18.7969C183.547 18.7969 184.25 21.2188 184.25 24.3438V30.75H184.211Z"
                fill="white"
            />
            <a href="https://www.figma.com/design/amQibIgXLJeqakDXorQFbW/75---News-Magizine--WebsiteTemplates--Community-?node-id=4-3495">
                <rect
                    fill="black"
                    fill-opacity="0"
                    y="-1.5"
                    width="17.5"
                    height="23"
                />
            </a>
        </svg>
    ),
};

function SvgIcon({ name }) {
    if (!ICON_LIST[name]) return null;
    return <>{ICON_LIST[name]}</>;
}

export default memo(SvgIcon);
