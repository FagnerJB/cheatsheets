---
Categories: Content, Media, Interactive
Related: svg
---

# &lt;img&gt;, &lt;audio&gt;, &lt;video&gt;, &lt;track&gt;, &lt;picture&gt;, &lt;source&gt;, &lt;figure&gt;, &lt;figcaption&gt;, &lt;map&gt;, &lt;area&gt;

## Description

HTML supports various multimedia resources such as images, audio, and video.

### img

Embeds an image into the document.

### audio

Used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the source element: the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream.

### video

Embeds a media player which supports video playback into the document. You can also use <**video**> for audio content, but the **audio** element may provide a more appropriate user experience.

### track

Used as a child of the media elements, **audio** and **video**. It lets you specify timed text tracks (or time-based data), for example to automatically handle subtitles. The tracks are formatted in WebVTT format (.vtt files) — Web Video Text Tracks.

### picture

Contains zero or more <**source**> elements and one **img** element to offer alternative versions of an image for different display/device scenarios.

### source

Specifies multiple media resources for the picture, the audio element, or the video element. It is a void element, meaning that it has no content and does not have a closing tag. It is commonly used to offer the same media content in multiple file formats in order to provide compatibility with a broad range of browsers given their differing support for image file formats and media file formats.

### figure

Represents self-contained content, potentially with an optional caption or legend describing the rest of the contents, which is specified using the <**figcaption**> element. The figure, its caption, and its contents are referenced as a single unit.

### figcaption

Represents a caption or legend describing the rest of the contents of its parent <**figure**> element.

### map

Used with **area** elements to define an image map, a clickable link area.

### area

Defines an area inside an image map that has predefined clickable areas. An image map allows geometric areas on an image to be associated with hyperlink.

## Recommendations

-

## Example

```html
<map name="primary">
   <area
      shape="circle"
      coords="75,75,75"
      href="left.html"
      alt="Click to go Left"
   />
   <area
      shape="circle"
      coords="275,75,75"
      href="right.html"
      alt="Click to go Right"
   />
</map>

<figure>
   <picture>
      <source
         srcset="https://dummyimage.com/150x350"
         media="(orientation: portrait)"
      />
      <img usemap="#primary" src="https://dummyimage.com/350x150" alt />
   </picture>
   <figcaption>Example</figcaption>
</figure>

<video controls width="250">
   <source src="flower.webm" type="video/webm" />
   <source src="flower.mp4" type="video/mp4" />

   Download the <a href="flower.webm">WEBM</a> or
   <a href="flower.mp4">MP4</a> video.
</video>

<figure>
   <figcaption>Listen to the T-Rex:</figcaption>
   <audio controls src="t-rex-roar.mp3"></audio>
</figure>
```
