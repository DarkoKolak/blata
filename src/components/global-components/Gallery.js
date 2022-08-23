import React from "react";
import { ProGallery } from "pro-gallery";
import "pro-gallery/dist/statics/main.css";

export function Gallery() {
  let publicUrl = process.env.PUBLIC_URL + "/";

  // Add your images here...
  const items = [
    {
      // Image item:
      itemId: "sample-id",
      mediaUrl: publicUrl + "assets/img/apartman9/1.jpeg",
      metaData: {
        type: "image",
        height: 200,
        width: 300,
        title: "sample-title",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
          target: "_blank",
        },
      },
    },
    {
      // Another Image item:
      itemId: "differentItem",
      mediaUrl: publicUrl + "assets/img/apartman9/2.jpeg",
      metaData: {
        type: "image",
        height: 200,
        width: 300,
        title: "sample-title",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
          target: "_blank",
        },
      },
    },
    {
      // Another Image item:
      itemId: "apartman3",
      mediaUrl: publicUrl + "assets/img/apartman9/3.jpeg",
      metaData: {
        type: "image",
        height: 200,
        width: 300,
        title: "sample-title",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
          target: "_blank",
        },
      },
    },
    {
      // Another Image item:
      itemId: "apartman4",
      mediaUrl: publicUrl + "assets/img/apartman9/4.jpeg",
      metaData: {
        type: "image",
        height: 200,
        width: 300,
        title: "sample-title",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
          target: "_blank",
        },
      },
    },
    {
      // Another Image item:
      itemId: "apartman5",
      mediaUrl: publicUrl + "assets/img/apartman9/5.jpeg",
      metaData: {
        type: "image",
        height: 200,
        width: 300,
        title: "sample-title",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
          target: "_blank",
        },
      },
    },
    {
      // Another Image item:
      itemId: "apartman6",
      mediaUrl: publicUrl + "assets/img/apartman9/6.jpeg",
      metaData: {
        type: "image",
        height: 200,
        width: 300,
        title: "sample-title",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
          target: "_blank",
        },
      },
    },
    {
      // Another Image item:
      itemId: "apartman7",
      mediaUrl: publicUrl + "assets/img/apartman9/7.jpeg",
      metaData: {
        type: "image",
        height: 200,
        width: 300,
        title: "sample-title",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
          target: "_blank",
        },
      },
    },
    {
      // Another Image item:
      itemId: "apartman8",
      mediaUrl: publicUrl + "assets/img/apartman9/8.jpeg",
      metaData: {
        type: "image",
        height: 200,
        width: 300,
        title: "sample-title",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
          target: "_blank",
        },
      },
    },
    {
      // Another Image item:
      itemId: "apartman9",
      mediaUrl: publicUrl + "assets/img/apartman9/9.jpeg",
      metaData: {
        type: "image",
        height: 200,
        width: 175,
        title: "sample-title",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
          target: "_blank",
        },
      },
    },
  ];

  // The options of the gallery (from the playground current state)
  const options = {
    layoutParams: {
      structure: {
        galleryLayout: 2,
      },
    },
    behaviourParams: {
      item: {
        overlay: {
          hoverAnimation: "EXPAND",
        },
        content: {
          hoverAnimation: "SHRINK",
        },
        clickAction: "ACTION",
      },
      gallery: {
        vertical: {
          loadMore: {
            enable: false,
          },
        },
        blockContextMenu: false,
      },
    },
  };

  // The size of the gallery container. The images will fit themselves in it
  //   const container = {
  //     width: window.innerWidth,
  //     height: window.innerHeight,
  //   };

  const container = {
    width: 1500,
    height: 500,
  };

  // The eventsListener will notify you anytime something has happened in the gallery.
  const eventsListener = (eventName, eventData) =>
    console.log({ eventName, eventData });

  // The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
  const scrollingElement = window;

  return (
    <ProGallery
      items={items}
      options={options}
      container={container}
      eventsListener={eventsListener}
      scrollingElement={scrollingElement}
    />
  );
}

export default Gallery;

// Enjoy using your new gallery!
// For more options, visit https://github.com/wix/pro-gallery
