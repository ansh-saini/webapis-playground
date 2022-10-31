import { Demo } from 'types/demo';

export const data: Array<Demo> = [
  {
    id: 'filesystem-api',
    title: 'File System API',
    emoji: '📂',
    description:
      "Only for Chromium-based web browsers. The File System Access API makes it easy and simple to read and write the user's files and access the file system.",
    meta: {
      author: {
        name: 'Usman Sabuwala',
        social: {
          twitter: 'MaxProgramming1',
        },
      },
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API',
      canIUseURL: 'https://caniuse.com/mdn-api_window_showopenfilepicker',
    },
  },
  {
    id: 'fullscreen',
    title: 'FullScreen API',
    emoji: '📺',
    description:
      'The Fullscreen API adds methods to present a specific Element (and its descriptionendants) in full-screen mode, and to exit full-screen mode once it is no longer needed.',
    meta: {
      author: {
        name: 'Tapas Adhikary',
        social: {
          email: 'tapas.adhikary@gmail.com',
          twitter: 'tapasadhikary',
        },
      },
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API',
      canIUseURL: 'https://caniuse.com/fullscreen',
    },
  },
  {
    id: 'clipboard',
    title: 'Clipboard API',
    emoji: '📋',
    description:
      'The Clipboard API provides the ability to respond to clipboard commands (cut, copy, and paste) as well as to asynchronously read from and write to the system clipboard.',
    meta: {
      author: {
        name: 'Tapas Adhikary',
        social: {
          email: 'tapas.adhikary@gmail.com',
          twitter: 'tapasadhikary',
        },
      },
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API',
      canIUseURL: 'https://caniuse.com/async-clipboard',
    },
  },
  {
    id: 'broadcast-channel',
    title: 'Broadcast',
    emoji: '📡',
    description:
      'The BroadcastChannel is a named channel that allows communication between different documents (in different windows, tabs, frames or iframes) of the same origin.',
    meta: {
      author: {
        name: 'Tapas Adhikary',
        social: {
          email: 'tapas.adhikary@gmail.com',
          twitter: 'tapasadhikary',
        },
      },
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API',
      canIUseURL: 'https://caniuse.com/broadcastchannel',
    },
  },
  {
    id: 'network-information',
    title: 'Network Info',
    emoji: '📶',
    description:
      "The Network Information API provides information about the system's connection in terms of general connection type (e.g., 'wifi', 'cellular', etc.).",
    meta: {
      author: {
        name: 'Tapas Adhikary',
        social: {
          email: 'tapas.adhikary@gmail.com',
          twitter: 'tapasadhikary',
        },
      },
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API',
      canIUseURL: 'https://caniuse.com/netinfo',
    },
  },
  {
    id: 'resize-observer',
    title: 'Resize Observer',
    emoji: '🧐',
    description:
      'The Resize Observer API provides a performant mechanism by which code can monitor an element for changes to its size, with notifications.',
    meta: {
      author: {
        name: 'Tapas Adhikary',
        social: {
          email: 'tapas.adhikary@gmail.com',
          twitter: 'tapasadhikary',
        },
      },
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API',
      canIUseURL: 'https://caniuse.com/mdn-api_resizeobserver',
    },
  },
  {
    id: 'web-payments',
    title: 'Web payment API',
    emoji: '💳',
    description:
      'The Payment Request API provides a consistent user experience for both merchants and users. Select a preferred way to pay for things.',
    meta: {
      author: {
        name: 'Tapas Adhikary',
        social: {
          twitter: 'tapasadhikary',
          email: 'tapas.adhikary@gmail.com',
        },
      },
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API',
      canIUseURL: 'https://caniuse.com/payment-request',
    },
  },
  {
    id: 'vibration',
    title: 'Vibration API',
    emoji: '📳',
    description:
      'Most modern mobile devices include vibration hardware, which lets software code provide physical feedback to the user by causing the device to shake.',
    meta: {
      author: {
        name: 'Tapas Adhikary',
        social: {
          twitter: 'tapasadhikary',
          email: 'tapas.adhikary@gmail.com',
        },
      },
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API',
      canIUseURL: 'https://caniuse.com/vibration',
    },
  },
  {
    id: 'battery-status',
    title: 'Battery API',
    emoji: '🔋',
    description:
      "The Battery Status API, more often referred to as the Battery API, provides information about the system's battery charge level",
    meta: {
      author: {
        name: 'Tapas Adhikary',
        social: {
          twitter: 'tapasadhikary',
          email: 'tapas.adhikary@gmail.com',
        },
      },
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API',
      canIUseURL: 'https://caniuse.com/battery-status',
    },
  },
  {
    id: 'drag-and-drop',
    title: 'Drag and Drop',
    emoji: '🐢',
    description:
      'HTML Drag and Drop interfaces enable applications to use drag-and-drop features in browsers.',
    meta: {
      author: {
        name: 'Tapas Adhikary',
        social: {
          twitter: 'tapasadhikary',
          email: 'tapas.adhikary@gmail.com',
        },
      },
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API',
      canIUseURL: 'https://caniuse.com/dragndrop',
    },
  },
  {
    id: 'image-capture',
    title: 'Image Capture',
    emoji: '📸',
    description:
      'The ImageCapture interface provides methods to enable the capture of images or photos from a camera or other photographic device.',
    meta: {
      author: {
        name: 'Tapas Adhikary',
        social: {
          twitter: 'tapasadhikary',
          email: 'tapas.adhikary@gmail.com',
        },
      },
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Image_Capture_API',
      canIUseURL: 'https://caniuse.com/mdn-api_imagecapture',
    },
  },
  {
    id: 'web-share-api',
    title: 'Web Share API',
    emoji: '🔗',
    description:
      'The Web Share API helps in invoking the native sharing mechanism of the user&#x27;s device',
    meta: {
      author: {
        name: 'Usman Sabuwala',
        social: {
          twitter: 'MaxProgramming1',
          email: 'maxprogramming05@gmail.com',
        },
      },
      apiDocURL:
        ' https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API',
      canIUseURL: 'https://caniuse.com/web-share',
    },
  },
  {
    id: 'geolocation',
    title: 'Geolocation API',
    emoji: '⚓',
    description:
      'The Geolocation API allows the user to provide their location to web applications if they so desire. This demo shows how it works using an example.',
    meta: {
      author: {
        name: 'Sameer Waskar',
        social: {
          twitter: 'SameerWaskar',
          email: 'dev.wsameer@gmail.com',
        },
      },
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API',
      canIUseURL: 'https://caniuse.com/mdn-api_geolocation',
    },
  },
  {
    id: 'picture-in-picture',
    title: 'Picture in Picture',
    emoji: '🖼️',
    description:
      'Picture-in-picture is a feature supported by some smart TVs, devices to show the content on a floating window. It allows users to continue to see the content while interacting with the background page, other sites.',
    meta: {
      author: {
        name: 'Tapas Adhikary',
        social: {
          twitter: 'tapasadhikary',
          email: 'tapas.adhikary@gmail.com',
        },
      },
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API',
      canIUseURL: 'https://caniuse.com/picture-in-picture',
    },
  },
  {
    id: 'device-orientation',
    title: 'Device Orientation Events API',
    emoji: '💻',
    description:
      'Device orientation events are events that allow you to detect physical orientation of a device, as well as allowing you to detect motion of the device.',
    meta: {
      author: {
        name: 'Annie Bhalla',
        social: {
          twitter: '',
          email: 'anniebhalla16@gmail.com',
        },
      },
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/Device_orientation_events',
      canIUseURL: 'https://caniuse.com/device-orientation',
    },
  },
  {
    id: 'screen-orientation',
    title: 'Screen Orientation',
    emoji: '📳',
    description:
      'The Screen Orientation Event determines the orientation of the screen of a device',
    meta: {
      author: {
        name: 'Annie Bhalla',
        social: {
          twitter: '',
          email: 'anniebhalla16@gmail.com',
        },
      },
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/Screen/orientation',
      canIUseURL: 'https://caniuse.com/screen-orientation',
    },
  },
  {
    id: 'screen-capture',
    title: 'Screen Capture',
    emoji: '💻',
    description:
      'The Screen Capture demo introduces additions to the existing Media Capture and Streams API to let the user select a screen to capture as a media stream',
    meta: {
      author: {
        name: 'Koustov',
        social: {
          twitter: 'koustov',
          email: 'koustov@live.com',
        },
      },
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API',
      canIUseURL: 'https://caniuse.com/DisplayMedia',
    },
  },
  {
    id: 'web-speech',
    title: 'Web Speech API',
    emoji: '🎙️',
    description:
      'The Web Speech API enables you to incorporate voice data into web apps. ',
    meta: {
      author: {
        name: 'Abiola Farounbi',
        social: {
          twitter: 'abiolaEsther_',
          email: 'farounbiabiola@gmail.com',
        },
      },
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API',
      canIUseURL: 'https://caniuse.com/speech-recognition',
    },
  },
  {
    id: 'font-loading',
    title: 'CSS Font Loading API',
    emoji: '✍️',
    description:
      'The CSS Font Loading API provides events and interfaces for dynamically loading font resources',
    meta: {
      author: {
        name: 'Emit Dutcher',
        social: {
          twitter: 'develemit',
          email: 'emitdutcher@gmail.com',
        },
      },
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/CSS_Font_Loading_API',
      canIUseURL: 'font-loading',
    },
  },
  {
    id: 'pointer-capture',
    emoji: '👆',
    title: 'Pointer Capture API',
    description: `Pointer events are DOM events that are fired for a pointing device. They are designed to create a single DOM event model to handle pointing input devices such as a mouse, pen/stylus or touch (such as one or more fingers).`,
    meta: {
      author: {
        name: 'Supriya M',
        social: {
          email: 'sansup49+developer@gmail.com',
          github: 'supminn',
          twitter: 'supminn',
        },
      },
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events',
      canIUseURL: 'https://caniuse.com/pointer',
    },
  },
  {
    id: 'canvas-api',
    emoji: '🎨',
    title: 'Canvas API',
    description:
      'The Canvas API provides a means for drawing graphics via JavaScript and the HTML <canvas> element. It can be use for animation, game graphics, data visualization, photo manipulation and real-time video processing. This API is largely focuses on 2D graphics.',
    meta: {
      author: {
        name: 'Richard Nikolas',
        social: {
          email: 'richardnikolas1@gmail.com',
          github: 'richardnikolas',
          twitter: 'RichardTiti',
        },
      },
      apiDocURL: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
      canIUseURL: 'https://caniuse.com/canvas',
    },
  },
  {
    id: 'url-api',
    emoji: '🌐',
    title: 'URL API',
    description:
      'The URL API is a component of the URL standard, which defines what constitutes a valid Uniform Resource Locator and the API that provides an easy way to parse, construct, normalize and encode URLs. The URL standard also defines concepts such as domains, hosts, and IP addresses.',
    meta: {
      author: {
        name: 'Williams Samuel',
        social: {
          email: 'samwill300@gmail.com',
          github: 'williamssam',
          twitter: 'williams_codes',
        },
      },
      apiDocURL: 'https://developer.mozilla.org/en-US/docs/Web/API/URL_API',
      canIUseURL: 'https://caniuse.com/url',
    },
  },
  {
    id: 'page-visibility',
    emoji: '📃',
    title: 'Page Visibility API',
    description:
      'The Page Visibility API provides events you can watch for to know when a document becomes visible or hidden, as well as features to look at the current visibility state of the page. This means that when the user minimizes the window or switches to another tab, an event will be sent.',
    meta: {
      author: {
        name: 'Williams Samuel',
        social: {
          email: 'samwill300@gmail.com',
          github: 'williamssam',
          twitter: 'williams_codes',
        },
      },
      apiDocURL: '',
      canIUseURL: 'https://caniuse.com/pagevisibility',
    },
  },
  {
    id: 'selection-api',
    emoji: '🗒️',
    title: 'Selection API',
    description:
      'The Selection API enables developers to access and manipulate the portion of a document selected by the user.',
    meta: {
      author: {
        name: 'ArunKumar Nadikattu',
        social: {
          email: 'arunaiekhil+dev@gmail.com',
          github: 'Aru-Ku',
          twitter: 'Aru_Ku_',
        },
      },
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/Selection_API',
      canIUseURL: 'https://caniuse.com/selection-api',
    },
  },
  {
    id: 'eyedropper-api',
    emoji: '👁️‍🗨',
    title: 'EyeDropper API',
    description:
      'The EyeDropper API provides a mechanism for creating an eyedropper tool. Using this tool, users can sample colors from their screens, including outside of the browser window.',
    meta: {
      author: {
        name: 'Williams Samuel',
        social: {
          email: 'samwill300@gmail.com',
          github: 'williamssam',
          twitter: 'williams_codes',
        },
      },
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API',
      canIUseURL: 'https://caniuse.com/mdn-api_eyedropper',
    },
  },
  {
    id: 'navigation-timing',
    emoji: '⌛',
    title: 'Navigation Timing API',
    description:
      'The Navigation Timing API provides data that can be used to measure the performance of a web site.',
    meta: {
      author: {
        name: 'Annie Bhalla',
        social: {
          email: 'anniebhalla16@gmail.com',
          github: 'Anniebhalla10',
          twitter: 'anniebhalla10',
        },
      },
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/Navigation_timing_API',
      canIUseURL: 'https://caniuse.com/navigation-timing',
    },
  },
  {
    id: 'indexeddb-api',
    emoji: '🗂️',
    title: 'IndexedDB API',
    description:
      "IndexedDB is a low-level API for client-side storage of significant amounts of structured data, including files/blobs. This API uses indexes to enable high-performance searches of this data. While Web Storage is useful for storing smaller amounts of data, it is less useful for storing larger amounts of structured data. IndexedDB provides a solution. This is the main landing page for MDN's IndexedDB coverage — here we provide links to the full API reference and usage guides, browser support details, and some explanation of key concepts.",
    meta: {
      author: {
        name: 'Salil Bagga',
        social: {
          email: 'salilbagga2@gmail.com',
          github: 'SalilBagga',
          twitter: 'baggasalil1997',
        },
      },
      apiDocURL: '',
      canIUseURL: 'https://caniuse.com/indexeddb',
    },
  },
  {
    id: 'console-api-i',
    emoji: '🖨️',
    title: 'Console API',
    description:
      'The Console API provides functionality to allow developers to perform debugging tasks, such as logging messages or the values of variables at set points in your code, or timing how long an operation takes to complete.',
    meta: {
      author: {
        name: 'Ayush Raj',
        social: {
          email: 'meayushraj17@gmail.com',
          github: 'ayushraj17',
          twitter: 'me_ayushraj',
        },
      },
      apiDocURL: '',
      canIUseURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/Console_API',
    },
  }, //replace item here
  {
    id: 'channel-messaging-api',
    emoji: '📨',
    title: 'Channel Messaging API',
    description:
      'The Channel Messaging API allows two separate scripts running in different browsing contexts attached to the same document (e.g., two IFrames, or the main document and an IFrame, two documents via a SharedWorker, or two workers) to communicate directly, passing messages between one another through two-way channels (or pipes) with a port at each end.',
    meta: {
      author: {
        name: 'Salil Bagga',
        social: {
          email: 'salilbagga2@gmail.com',
          github: 'SalilBagga',
          twitter: 'baggasalil1997',
        },
      },
      apiDocURL: '',
      canIUseURL: 'https://caniuse.com/?search&amp;#x3D;Channel%20Messaging',
    },
  },

  {
    id: 'css-painting-api',
    emoji: '🖌️',
    title: 'CSS Painting API',
    description:
      "The CSS Painting API — part of the CSS Houdini umbrella of APIs — allows developers to write JavaScript functions that can draw directly into an element's background, border, or content.",
    meta: {
      author: {
        name: 'Salil Bagga',
        social: {
          email: 'salilbagga2@gmail.com',
          github: 'SalilBagga',
          twitter: 'baggasalil1997',
        },
      },
      apiDocURL: '',
      canIUseURL: 'https://caniuse.com/css-paint-api',
    },
  },
  {
    id: 'text-encoding-api',
    emoji: '🔐',
    title: 'Text Encoding API',
    description:
      'The Encoding API provides a mechanism for handling text in various character encodings, including legacy non-UTF-8 encodings.',
    meta: {
      author: {
        name: 'Salil Bagga',
        social: {
          email: 'salilbagga2@gmail.com',
          github: 'SalilBagga',
          twitter: 'baggasalil1997',
        },
      },
      apiDocURL: '',
      canIUseURL:
        'https://caniuse.com/?search&#x3D;TextEncoder%20%26%20TextDecoder',
    },
  },
  {
    id: 'barcode-detection',
    emoji: '🖨',
    title: 'Barcode Detection API',
    description:
      'The BarcodeDetector interface of the Barcode Detection API allows detection of linear and two dimensional barcodes in images.',
    meta: {
      author: {
        name: 'Annie Bhalla',
        social: {
          email: 'anniebhalla16@gmail.com',
          github: 'Anniebhalla10',
          twitter: '',
        },
      },
      apiDocURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API',
      canIUseURL: 'https://caniuse.com/barcode-detection',
    },
  },
  {
    id: 'console-api-i',
    emoji: '🖨️',
    title: 'Console API',
    description:
      'The Console API provides functionality to allow developers to perform debugging tasks, such as logging messages or the values of variables at set points in your code, or timing how long an operation takes to complete.',
    meta: {
      author: {
        name: 'Ayush Raj',
        social: {
          email: 'meayushraj17@gmail.com',
          github: 'ayushraj17',
          twitter: 'me_ayushraj',
        },
      },
      apiDocURL: '',
      canIUseURL:
        'https://developer.mozilla.org/en-US/docs/Web/API/Console_API',
    },
  }, //replace item here
];
