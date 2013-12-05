Cross-browser/cross-device notes:

- The video must have no poster attribute in order to work on iOS 3.
- The video's autoplay attribute is ignored by iOS and Android 2.2. Both need a JavaScript play() to launch the video. On iOS, the video can't be played until the user touches the screen (native or custom play button).
- The first video source must be a MP4 video in order to work on iOS 3, and it mustn't have a type attribute in order to work on Android 2.2. MP4 is the only format working on iOS 3+ and IE9+. It also works on Safari 3+, Chrome 5+ and Android 2.2+.
- Next source(s) should have a type attribute.
- The second video source is Ogg because it works on older Firefox (3.5+) and Opera (10.5+) than WebM. WebM isn't an useful fallback for Ogg but it can replace it as the second track.
- A flash fallback should be provided for older browsers.
- A text (or any HTML) fallback should be provided for older browsers without a recent Flash version.
- Firefox won't fallback to Flash or HTML if there's only a MP4 source. Workaround: replace the video tag with the flash object in the DOM.
- iPhone can't display embedded videos: they can only be played fullscreen.
- In fullscreen, iOS can't display HTML over the video (custom controls, subtitles...)

Methods, properties, events: see http://www.w3schools.com/tags/ref_av_dom.asp