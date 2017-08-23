<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:version='2' class='v2' expr:dir='data:blog.languageDirection' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr' xmlns:fb='http://www.facebook.com/2008/fbml'>
  <head>
    <meta content='IE=edge' http-equiv='X-UA-Compatible'/>
    <b:if cond='data:blog.isMobile'>
      <meta content='width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0' name='viewport'/>
    <b:else/>
      <meta content='width=1100' name='viewport'/>
    </b:if>
    <b:include data='blog' name='all-head-content'/>
    <!-- 加入 Facebook 管理權限開始 -->
    <meta content='291112897671052' property='fb:app_id'/>
    <!--<meta content='100000220506828' property='fb:admins'/>-->
    <!-- 加入 Facebook 管理權限結束 --> 
    <b:if cond='data:blog.pageType == &quot;index&quot;'>
      <title><data:blog.title/></title>
    <b:else/>
      <title><data:blog.pageName/></title>
    </b:if>

    <b:skin><![CDATA[/*
-----------------------------------------------
Blogger Template Style
Name:     Awesome Inc.
Designer: Tina Chen
URL:      tinachen.org
----------------------------------------------- */

/* Variable definitions
   ====================
   <Variable name="keycolor" description="Main Color" type="color" default="#ffffff" value="#ffffff"/>

   <Group description="Page" selector="body">
     <Variable name="body.font" description="Font" type="font"
         default="normal normal 13px Arial, Tahoma, Helvetica, FreeSans, sans-serif" value="normal normal 14px &#39;Times New Roman&#39;, Times, FreeSerif, serif"/>
     <Variable name="body.background.color" description="Background Color" type="color" default="#000000" value="#371313"/>
     <Variable name="body.text.color" description="Text Color" type="color" default="#ffffff" value="#e0e0e0"/>
   </Group>

   <Group description="Links" selector=".main-inner">
     <Variable name="link.color" description="Link Color" type="color" default="#888888" value="#d8d832"/>
     <Variable name="link.visited.color" description="Visited Color" type="color" default="#444444" value="#b6b61f"/>
     <Variable name="link.hover.color" description="Hover Color" type="color" default="#cccccc" value="#fcfc3d"/>
   </Group>

   <Group description="Blog Title" selector=".header h1">
     <Variable name="header.font" description="Title Font" type="font"
         default="normal bold 40px Arial, Tahoma, Helvetica, FreeSans, sans-serif" value="italic bold 60px Georgia, Utopia, &#39;Palatino Linotype&#39;, Palatino, serif"/>
     <Variable name="header.text.color" description="Title Color" type="color" default="$(body.text.color)"  value="#ffc3c3"/>
     <Variable name="header.background.color" description="Header Background" type="color" default="transparent"  value="transparent"/>
   </Group>

   <Group description="Blog Description" selector=".header .description">
     <Variable name="description.font" description="Font" type="font"
         default="normal normal 14px Arial, Tahoma, Helvetica, FreeSans, sans-serif" value="italic normal 16px Georgia, Utopia, &#39;Palatino Linotype&#39;, Palatino, serif"/>
     <Variable name="description.text.color" description="Text Color" type="color"
         default="$(body.text.color)"  value="#bbbbbb"/>
   </Group>

   <Group description="Tabs Text" selector=".tabs-inner .widget li a">
     <Variable name="tabs.font" description="Font" type="font"
         default="normal bold 14px Arial, Tahoma, Helvetica, FreeSans, sans-serif" value="normal bold 18px &#39;Courier New&#39;, Courier, FreeMono, monospace"/>
     <Variable name="tabs.text.color" description="Text Color" type="color" default="$(body.text.color)" value="#eeeeee"/>
     <Variable name="tabs.selected.text.color" description="Selected Color" type="color" default="$(tabs.text.color)" value="#ffffff"/>
   </Group>

   <Group description="Tabs Background" selector=".tabs-outer .PageList">
     <Variable name="tabs.background.color" description="Background Color" type="color" default="#141414" value="#b61e1e"/>
     <Variable name="tabs.selected.background.color" description="Selected Color" type="color" default="#444444" value="#3d2323"/>
     <Variable name="tabs.border.color" description="Border Color" type="color" default="$(widget.border.color)" value="#888888"/>
   </Group>

   <Group description="Date Header" selector=".main-inner .widget h2.date-header, .main-inner .widget h2.date-header span">
     <Variable name="date.font" description="Font" type="font"
         default="normal normal 14px Arial, Tahoma, Helvetica, FreeSans, sans-serif" value="italic bold 16px Arial, Tahoma, Helvetica, FreeSans, sans-serif"/>
     <Variable name="date.text.color" description="Text Color" type="color" default="#666666" value="#a5a5a5"/>
     <Variable name="date.border.color" description="Border Color" type="color" default="$(widget.border.color)" value="rgba(0, 0, 0, 0)"/>
   </Group>

   <Group description="Post Title" selector="h3.post-title, h4, h3.post-title a">
     <Variable name="post.title.font" description="Font" type="font"
         default="normal bold 22px Arial, Tahoma, Helvetica, FreeSans, sans-serif" value="normal bold 22px &#39;Times New Roman&#39;, Times, FreeSerif, serif"/>
     <Variable name="post.title.text.color" description="Text Color" type="color" default="$(body.text.color)" value="#f4e9c7"/>
   </Group>

   <Group description="Post Background" selector=".post">
     <Variable name="post.background.color" description="Background Color" type="color" default="$(widget.background.color)"  value="#150606"/>
     <Variable name="post.border.color" description="Border Color" type="color" default="$(widget.border.color)"  value="#5f5f5f"/>
     <Variable name="post.border.bevel.color" description="Bevel Color" type="color" default="$(widget.border.color)" value="rgba(0, 0, 0, 0)"/>
   </Group>

   <Group description="Gadget Title" selector="h2">
     <Variable name="widget.title.font" description="Font" type="font"
        default="normal bold 14px Arial, Tahoma, Helvetica, FreeSans, sans-serif" value="normal bold 18px Verdana, Geneva, sans-serif"/>
     <Variable name="widget.title.text.color" description="Text Color" type="color" default="$(body.text.color)" value="#f4e9c7"/>
   </Group>

   <Group description="Gadget Text" selector=".sidebar .widget">
     <Variable name="widget.font" description="Font" type="font"
        default="normal normal 14px Arial, Tahoma, Helvetica, FreeSans, sans-serif" value="normal normal 14px &#39;Times New Roman&#39;, Times, FreeSerif, serif"/>
     <Variable name="widget.text.color" description="Text Color" type="color" default="$(body.text.color)" value="#d0d0d0"/>
     <Variable name="widget.alternate.text.color" description="Alternate Color" type="color" default="#666666" value="#b6b6b6"/>
   </Group>

   <Group description="Gadget Links" selector=".sidebar .widget">
     <Variable name="widget.link.color" description="Link Color" type="color" default="$(link.color)" value="#d8d832"/>
     <Variable name="widget.link.visited.color" description="Visited Color" type="color" default="$(link.visited.color)" value="#b6b61f"/>
     <Variable name="widget.link.hover.color" description="Hover Color" type="color" default="$(link.hover.color)" value="#fcfc3d"/>
   </Group>

   <Group description="Gadget Background" selector=".sidebar .widget">
     <Variable name="widget.background.color" description="Background Color" type="color" default="#141414" value="#150606"/>
     <Variable name="widget.border.color" description="Border Color" type="color" default="#222222" value="#5f5f5f"/>
     <Variable name="widget.border.bevel.color" description="Bevel Color" type="color" default="#000000" value="rgba(0, 0, 0, 0)"/>
   </Group>

   <Group description="Sidebar Background" selector=".column-left-inner .column-right-inner">
     <Variable name="widget.outer.background.color" description="Background Color" type="color" default="transparent"  value="rgba(0, 0, 0, 0)"/>
   </Group>

   <Group description="Images" selector=".main-inner">
     <Variable name="image.background.color" description="Background Color" type="color" default="transparent" value="#000000"/>
     <Variable name="image.border.color" description="Border Color" type="color" default="transparent" value="#dddddd"/>
   </Group>

   <Group description="Feed" selector=".blog-feeds">
      <Variable name="feed.text.color" description="Text Color" type="color" default="$(body.text.color)" value="#d0d0d0"/>
   </Group>

   <Group description="Feed Links" selector=".blog-feeds">
     <Variable name="feed.link.color" description="Link Color" type="color" default="$(link.color)" value="#d8d832"/>
     <Variable name="feed.link.visited.color" description="Visited Color" type="color" default="$(link.visited.color)" value="#b6b61f"/>
     <Variable name="feed.link.hover.color" description="Hover Color" type="color" default="$(link.hover.color)" value="#fcfc3d"/>
   </Group>

   <Group description="Pager" selector=".blog-pager">
     <Variable name="pager.background.color" description="Background Color" type="color" default="$(post.background.color)"  value="#150606"/>
   </Group>

   <Group description="Footer" selector=".footer-outer">
     <Variable name="footer.background.color" description="Background Color" type="color" default="$(widget.background.color)"  value="#150606"/>
     <Variable name="footer.text.color" description="Text Color" type="color" default="$(body.text.color)"  value="#d0d0d0"/>
   </Group>

   <Variable name="title.shadow.spread" description="Title Shadow" type="length" default="-1px" value="-1px"/>

   <Variable name="body.background" description="Body Background" type="background"
       color="$(body.background.color)"
       default="$(color) none repeat scroll top left" value="$(color) none repeat scroll top left"/>
   <Variable name="body.background.gradient.cap" description="Body Gradient Cap" type="url"
       default="none" value="none"/>

   <Variable name="tabs.background.gradient" description="Tabs Background Gradient" type="url"
       default="none" value="url(http://www.blogblog.com/1kt/awesomeinc/tabs_gradient_light.png)"/>

   <Variable name="header.background.gradient" description="Header Background Gradient" type="url" default="none"  value="none"/>
   <Variable name="header.padding.top" description="Header Top Padding" type="length" default="22px"  value="22px"/>
   <Variable name="header.margin.top" description="Header Top Margin" type="length" default="0"  value="0"/>
   <Variable name="header.margin.bottom" description="Header Bottom Margin" type="length" default="0"  value="0"/>

   <Variable name="widget.padding.top" description="Widget Padding Top" type="length" default="8px"  value="8px"/>
   <Variable name="widget.padding.side" description="Widget Padding Side" type="length" default="15px"  value="15px"/>
   <Variable name="widget.outer.margin.top" description="Widget Top Margin" type="length" default="0"  value="0"/>
   <Variable name="widget.outer.background.gradient" description="Gradient" type="url" default="none"  value="none"/>
   <Variable name="widget.border.radius" description="Gadget Border Radius" type="length" default="0"  value="5px"/>
   <Variable name="outer.shadow.spread" description="Outer Shadow Size" type="length" default="0"  value="0"/>

   <Variable name="date.header.border.radius.top" description="Date Header Border Radius Top" type="length" default="0"  value="0"/>
   <Variable name="date.header.position" description="Date Header Position" type="length" default="15px"  value="15px"/>

   <Variable name="date.space" description="Date Space" type="length" default="30px"  value="30px"/>
   <Variable name="date.position" description="Date Float" type="string" default="static"  value="static"/>
   <Variable name="date.padding.bottom" description="Date Padding Bottom" type="length" default="0"  value="0"/>
   <Variable name="date.border.size" description="Date Border Size" type="length" default="0"  value="0"/>
   <Variable name="date.background" description="Date Background" type="background" color="transparent"
       default="$(color) none no-repeat scroll top left"  value="$(color) none no-repeat scroll top left"/>
   <Variable name="date.first.border.radius.top" description="Date First top radius" type="length" default="$(widget.border.radius)"  value="5px"/>
   <Variable name="date.last.space.bottom" description="Date Last Space Bottom" type="length"
       default="20px"  value="20px"/>
   <Variable name="date.last.border.radius.bottom" description="Date Last bottom radius" type="length" default="$(widget.border.radius)"  value="5px"/>

   <Variable name="post.first.padding.top" description="First Post Padding Top" type="length" default="0"  value="0"/>

   <Variable name="image.shadow.spread" description="Image Shadow Size" type="length" default="0" value="15px"/>
   <Variable name="image.border.radius" description="Image Border Radius" type="length" default="0" value="4px"/>

   <Variable name="separator.outdent" description="Separator Outdent" type="length" default="15px"  value="0"/>
   <Variable name="title.separator.border.size" description="Widget Title Border Size" type="length" default="1px"  value="1px"/>
   <Variable name="list.separator.border.size" description="List Separator Border Size" type="length" default="1px"  value="0"/>
   <Variable name="shadow.spread" description="Shadow Size" type="length" default="0" value="20px"/>

   <Variable name="startSide" description="Side where text starts in blog language" type="automatic" default="left" value="left"/>
   <Variable name="endSide" description="Side where text ends in blog language" type="automatic" default="right" value="right"/>

   <Variable name="date.side" description="Side where date header is placed" type="string" default="$(endSide)" value="right"/>

   <Variable name="pager.border.radius.top" description="Pager Border Top Radius" type="length" default="$(widget.border.radius)"  value="5px"/>
   <Variable name="pager.space.top" description="Pager Top Space" type="length" default="1em"  value="1em"/>

   <Variable name="footer.background.gradient" description="Background Gradient" type="url" default="none"  value="none"/>
*/

/* Content
----------------------------------------------- */
body {
  font: $(body.font);
  color: $(body.text.color);
  background: $(body.background);
}

html body .content-outer {
  min-width: 0;
  max-width: 100%;
  width: 100%;
}

a:link {
  text-decoration: none;
  color: $(link.color);
}

a:visited {
  text-decoration: none;
  color: $(link.visited.color);
}

a:hover {
  text-decoration: underline;
  color: $(link.hover.color);
}

.body-fauxcolumn-outer .cap-top {
  position: absolute;
  z-index: 1;

  height: 276px;
  width: 100%;

  background: transparent $(body.background.gradient.cap) repeat-x scroll top left;
  _background-image: none;
}

/* Columns
----------------------------------------------- */
.content-inner {
  padding: 0;
}

.header-inner .section {
  margin: 0 16px;
}

.tabs-inner .section {
  margin: 0 16px;
}

.main-inner {
  padding-top: $(date.space);
}

.main-inner .column-center-inner,
.main-inner .column-left-inner,
.main-inner .column-right-inner {
  padding: 0 5px;
}

*+html body .main-inner .column-center-inner {
  margin-top: -$(date.space);
}

#layout .main-inner .column-center-inner {
  margin-top: 0;
}

/* Header
----------------------------------------------- */
.header-outer {
  margin: $(header.margin.top) 0 $(header.margin.bottom) 0;
  background: $(header.background.color) $(header.background.gradient) repeat scroll 0 0;
}

.Header h1 {
  font: $(header.font);
  color: $(header.text.color);
  text-shadow: 0 0 $(title.shadow.spread) #000000;
}

.Header h1 a {
  color: $(header.text.color);
}

.Header .description {
  font: $(description.font);
  color: $(description.text.color);
}
.description{
  text-align:right;
}

.header-inner .Header .titlewrapper,
.header-inner .Header .descriptionwrapper {
  padding-left: 0;
  padding-right: 0;
  margin-bottom: 0;
}

.header-inner .Header .titlewrapper {
  padding-top: $(header.padding.top);
}

/* Tabs
----------------------------------------------- */
.tabs-outer {
  overflow: hidden;
  position: relative;
  background: $(tabs.background.color) $(tabs.background.gradient) repeat scroll 0 0;
}

#layout .tabs-outer {
  overflow: visible;
}

.tabs-cap-top, .tabs-cap-bottom {
  position: absolute;
  width: 100%;

  border-top: 1px solid $(tabs.border.color);

}

.tabs-cap-bottom {
  bottom: 0;
}

.tabs-inner .widget li a {
  display: inline-block;

  margin: 0;
  padding: .6em 1.5em;

  font: $(tabs.font);
  color: $(tabs.text.color);

  border-top: 1px solid $(tabs.border.color);
  border-bottom: 1px solid $(tabs.border.color);
  border-$startSide: 1px solid $(tabs.border.color);
}

.tabs-inner .widget li:last-child a {
  border-$endSide: 1px solid $(tabs.border.color);
}

.tabs-inner .widget li.selected a, .tabs-inner .widget li a:hover {
  background: $(tabs.selected.background.color) $(tabs.background.gradient) repeat-x scroll 0 -100px;
  color: $(tabs.selected.text.color);
}

/* Headings
----------------------------------------------- */
h2 {
  font: $(widget.title.font);
  color: $(widget.title.text.color);
  text-shadow: 1px 1px 1px #999999;
}

/* Widgets
----------------------------------------------- */

.main-inner .section {
  margin: 0 27px;
  padding: 0;
}

.main-inner .column-left-outer,
.main-inner .column-right-outer {
  margin-top: $(widget.outer.margin.top);
}

#layout .main-inner .column-left-outer,
#layout .main-inner .column-right-outer {
  margin-top: 0;
}

.main-inner .column-left-inner,
.main-inner .column-right-inner {
  background: $(widget.outer.background.color) $(widget.outer.background.gradient) repeat 0 0;

  -moz-box-shadow: 0 0 $(outer.shadow.spread) rgba(0, 0, 0, .2);
  -webkit-box-shadow: 0 0 $(outer.shadow.spread) rgba(0, 0, 0, .2);
  -goog-ms-box-shadow: 0 0 $(outer.shadow.spread) rgba(0, 0, 0, .2);
  box-shadow: 0 0 $(outer.shadow.spread) rgba(0, 0, 0, .2);

  -moz-border-radius: $(widget.border.radius);
  -webkit-border-radius: $(widget.border.radius);
  -goog-ms-border-radius: $(widget.border.radius);
  border-radius: $(widget.border.radius);
}

#layout .main-inner .column-left-inner,
#layout .main-inner .column-right-inner {
  margin-top: 0;
}

.sidebar #tags li {
float:left;
width:72px;
}

.sidebar .widget {
  font: $(widget.font);
  color: $(widget.text.color);
}

.sidebar .widget a:link {
  color: $(widget.link.color);
}

.sidebar .widget a:visited {
  color: $(widget.link.visited.color);
}

.sidebar .widget a:hover {
  color: $(widget.link.hover.color);
}

.sidebar .widget h2 {
  text-shadow: 0 0 $(title.shadow.spread) #000000;
}

.main-inner .widget {
  background-color: $(widget.background.color);
  border: 1px solid $(widget.border.color);
  padding: 0 $(widget.padding.side) 20px;
  margin: 15px -16px;

  -moz-box-shadow: 0 0 $(shadow.spread) rgba(0, 0, 0, .2);
  -webkit-box-shadow: 0 0 $(shadow.spread) rgba(0, 0, 0, .2);
  -goog-ms-box-shadow: 0 0 $(shadow.spread) rgba(0, 0, 0, .2);
  box-shadow: 0 0 $(shadow.spread) rgba(0, 0, 0, .2);

  -moz-border-radius: $(widget.border.radius);
  -webkit-border-radius: $(widget.border.radius);
  -goog-ms-border-radius: $(widget.border.radius);
  border-radius: $(widget.border.radius);

}

.main-inner .widget h2 {
  margin: 0 -$(separator.outdent);
  padding: .6em $(separator.outdent) .5em;
  border-bottom: 1px solid $(widget.border.bevel.color);
}

.footer-inner .widget h2 {
  padding: 0 0 .4em;

  border-bottom: 1px solid $(widget.border.bevel.color);
}

.main-inner .widget h2 + div, .footer-inner .widget h2 + div {
  border-top: $(title.separator.border.size) solid $(widget.border.color);
  padding-top: $(widget.padding.top);
}

.main-inner .widget .widget-content {
  margin: 0 -$(separator.outdent);
  padding: 7px $(separator.outdent) 0;
}

.main-inner .widget ul, .main-inner .widget #ArchiveList ul.flat {
  margin: -$(widget.padding.top) -15px 0;
  padding: 0;
  list-style: none;
}

.main-inner .widget #ArchiveList {
  margin: -$(widget.padding.top) 0 0;
}

.main-inner .widget ul li, .main-inner .widget #ArchiveList ul.flat li {
  padding: .5em 15px;
  text-indent: 0;

  color: $(widget.alternate.text.color);

  border-top: $(list.separator.border.size) solid $(widget.border.color);
  border-bottom: 1px solid $(widget.border.bevel.color);
}

.main-inner .widget #ArchiveList ul li {
  padding-top: .25em;
  padding-bottom: .25em;
}

.main-inner .widget ul li:first-child, .main-inner .widget #ArchiveList ul.flat li:first-child {
  border-top: none;
}

.main-inner .widget ul li:last-child, .main-inner .widget #ArchiveList ul.flat li:last-child {
  border-bottom: none;
}

.post-body {
  position: relative;
  font-size: 110%;
  letter-spacing: 1.2px;
  position: relative;
  padding-top: 30px;
  font-family: Microsoft JhengHei;
  text-shadow: 1px 1px #000000;
}

.post-body a:link{
 text-decoration:underline;
}

.post-body a:visited{
 text-decoration:underline;
}

.post-body a:hover{
 text-decoration:underline;
}


.main-inner .widget .post-body ul {
  padding: 0 2.5em;
  margin: .5em 0;

  list-style: disc;
}

.main-inner .widget .post-body ul li {
  padding: 0.25em 0;
  margin-bottom: .25em;

  color: $(body.text.color);

  border: none;
}

.footer-inner .widget ul {
  padding: 0;

  list-style: none;
}

.widget .zippy {
  color: $(widget.alternate.text.color);
}

/* Posts
----------------------------------------------- */
body .main-inner .Blog {
  padding: 0;
  margin-bottom: 1em;

  background-color: transparent;
  border: none;

  -moz-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  -webkit-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  -goog-ms-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
}

.main-inner .section:last-child .Blog:last-child {
  padding: 0;
  margin-bottom: 1em;
}

.main-inner .widget h2.date-header {
  margin: 0 -15px 1px;
  padding: 0 0 $(date.padding.bottom) 0;

  font: $(date.font);
  color: $(date.text.color);

  background: $(date.background);

  border-top: $(date.border.size) solid $(date.border.color);
  border-bottom: 1px solid $(widget.border.bevel.color);

  -moz-border-radius-topleft: $(date.header.border.radius.top);
  -moz-border-radius-topright: $(date.header.border.radius.top);
  -webkit-border-top-left-radius: $(date.header.border.radius.top);
  -webkit-border-top-right-radius: $(date.header.border.radius.top);
  border-top-left-radius: $(date.header.border.radius.top);
  border-top-right-radius: $(date.header.border.radius.top);

  position: $(date.position);
  bottom: 100%;
  $(date.side): $(date.header.position);
  text-shadow: 0 0 $(title.shadow.spread) #000000;
}

.main-inner .widget h2.date-header span {
  font: $(date.font);
  display: block;
  padding: .5em 15px;
  border-left: $(date.border.size) solid $(date.border.color);
  border-right: $(date.border.size) solid $(date.border.color);
}

.date-outer {
  position: relative;
  margin: $(date.space) 0 20px;
  padding: 0 15px;

  background-color: $(post.background.color);
  border: 1px solid $(post.border.color);

  -moz-box-shadow: 0 0 $(shadow.spread) rgba(0, 0, 0, .2);
  -webkit-box-shadow: 0 0 $(shadow.spread) rgba(0, 0, 0, .2);
  -goog-ms-box-shadow: 0 0 $(shadow.spread) rgba(0, 0, 0, .2);
  box-shadow: 0 0 $(shadow.spread) rgba(0, 0, 0, .2);

  -moz-border-radius: $(widget.border.radius);
  -webkit-border-radius: $(widget.border.radius);
  -goog-ms-border-radius: $(widget.border.radius);
  border-radius: $(widget.border.radius);
}

.date-outer:first-child {
  margin-top: 0;
}

.date-outer:last-child {
  margin-bottom: $(date.last.space.bottom);

  -moz-border-radius-bottomleft: $(date.last.border.radius.bottom);
  -moz-border-radius-bottomright: $(date.last.border.radius.bottom);
  -webkit-border-bottom-left-radius: $(date.last.border.radius.bottom);
  -webkit-border-bottom-right-radius: $(date.last.border.radius.bottom);
  -goog-ms-border-bottom-left-radius: $(date.last.border.radius.bottom);
  -goog-ms-border-bottom-right-radius: $(date.last.border.radius.bottom);
  border-bottom-left-radius: $(date.last.border.radius.bottom);
  border-bottom-right-radius: $(date.last.border.radius.bottom);
}

.date-posts {
  margin: 0 -$(separator.outdent);
  padding: 0 $(separator.outdent);

  clear: both;
}

.post-outer, .inline-ad {
  border-top: 1px solid $(post.border.bevel.color);

  margin: 0 -$(separator.outdent);
  padding: 15px $(separator.outdent);
}

.post-outer {
  padding-bottom: 10px;
}

.post-outer:first-child {
  padding-top: $(post.first.padding.top);
  border-top: none;
}

.post-outer:last-child, .inline-ad:last-child {
  border-bottom: none;
}

.post-body {
  position: relative;
  font-size: 130%;
  letter-spacing: 2px;
  position: relative;
  padding-top: 20px;
  line-height: 1.5;
}

.post-body img {
  background: $(image.background.color);  
  border: 1px solid $(image.border.color);
  padding: 5px;

  -moz-box-shadow: 3px 3px 3px rgba(40%,40%,40%,0.6);
  -webkit-box-shadow: 3px 3px 3px rgba(40%,40%,40%,0.6);
  box-shadow: 3px 3px 3px rgba(40%,40%,40%,0.6);

  vertical-align: middle;
  max-width:640px;   /* FF IE7 */
  max-height:640px; /* FF IE7 */
}

.snippet-content{
  font-size: 130%;
  letter-spacing: 2px;
  line-height: 1.5;
  text-shadow: 1px 1px  #111111;
}
.snippet-content a:hover{
  font-weight:bold;
}
.snippet-content a:hover{
  text-decoration:underline;
}
.indeximg {
  border:1px solid #ccc;
  padding:4px;
  margin:10px;
}

h3.post-title, h4 {
  font: $(post.title.font);
  color: $(post.title.text.color);
  text-shadow: 1px 1px  #000000;
}

h3.post-title a {
  font: $(post.title.font);
  color: $(post.title.text.color);
  text-shadow:1px 1px #000000;
  text-decoration: none;
}

h3.post-title a:hover {
  color: $(link.hover.color);
  text-decoration: underline;
}

.post-header {
  margin: 0 0 1em;
}


.post-outer h2 {
  color: $(body.text.color);
}

.post-footer {
  margin: 1.5em 0 0;
}

#blog-pager {
  padding: 15px;
  font-size: 120%;

  background-color: $(pager.background.color);
  border: 1px solid $(widget.border.color);

  -moz-box-shadow: 0 0 $(shadow.spread) rgba(0, 0, 0, .2);
  -webkit-box-shadow: 0 0 $(shadow.spread) rgba(0, 0, 0, .2);
  -goog-ms-box-shadow: 0 0 $(shadow.spread) rgba(0, 0, 0, .2);
  box-shadow: 0 0 $(shadow.spread) rgba(0, 0, 0, .2);

  -moz-border-radius: $(widget.border.radius);
  -webkit-border-radius: $(widget.border.radius);
  -goog-ms-border-radius: $(widget.border.radius);
  border-radius: $(widget.border.radius);

  -moz-border-radius-topleft: $(pager.border.radius.top);
  -moz-border-radius-topright: $(pager.border.radius.top);
  -webkit-border-top-left-radius: $(pager.border.radius.top);
  -webkit-border-top-right-radius: $(pager.border.radius.top);
  -goog-ms-border-top-left-radius: $(pager.border.radius.top);
  -goog-ms-border-top-right-radius: $(pager.border.radius.top);
  border-top-left-radius: $(pager.border.radius.top);
  border-top-right-radius-topright: $(pager.border.radius.top);

  margin-top: $(pager.space.top);
}

.blog-feeds, .post-feeds {
  margin: 1em 0;
  text-align: center;
  color: $(feed.text.color);
}

.blog-feeds a, .post-feeds a {
  color: $(feed.link.color);
}

.blog-feeds a:visited, .post-feeds a:visited {
  color: $(feed.link.visited.color);
}

.blog-feeds a:hover, .post-feeds a:hover {
  color: $(feed.link.hover.color);
}

.post-outer .comments {
  margin-top: 2em;
}

.readmore {
  float: right;
  font-weight: bold;
  padding-right:15px;
}

/* author comment highlight start*/
.comment-me {
  margin-right: 35px;
  margin-left:   5px;
  margin-bottom: 5px;
  color: #dddddd;
  font-size: 10pt;
  line-height: 2;
  padding:5px;
}

.comment-other {
  margin-right: 35px;
  margin-left:   5px;
  margin-bottom: 5px;
  color: #dddddd;
  font-size: 10pt;
  line-height: 2;
  padding:5px;
}
/* author comment highlight end*/

/* Style for Year & Month Breadcrumbs Start*/
.breadcrumbs {
  letter-spacing: .1em;
  margin:0.5em 0 0.5em;
  padding:0.5em 0 0.5em;
}
/* Style for Year & Month Breadcrumbs End*/

/* Footer
----------------------------------------------- */
.footer-outer {
  margin: -$(shadow.spread) 0 -1px;
  padding: $(shadow.spread) 0 0;
  color: $(footer.text.color);
  overflow: hidden;
}

.footer-fauxborder-left {
  border-top: 1px solid $(widget.border.color);
  background: $(footer.background.color) $(footer.background.gradient) repeat scroll 0 0;

  -moz-box-shadow: 0 0 $(shadow.spread) rgba(0, 0, 0, .2);
  -webkit-box-shadow: 0 0 $(shadow.spread) rgba(0, 0, 0, .2);
  -goog-ms-box-shadow: 0 0 $(shadow.spread) rgba(0, 0, 0, .2);
  box-shadow: 0 0 $(shadow.spread) rgba(0, 0, 0, .2);

  margin: 0 -$(shadow.spread);
}

/* Mobile
----------------------------------------------- */
*+html body.mobile .main-inner .column-center-inner {
  margin-top: 0;
}

.mobile .main-inner {
  padding-top: 0;
}

.mobile .main-inner .widget {
  padding: 0 0 15px;
}

.mobile .main-inner .widget h2 + div,
.mobile .footer-inner .widget h2 + div {
  border-top: none;
  padding-top: 0;
}

.mobile .footer-inner .widget h2 {
  padding: 0.5em 0;
  border-bottom: none;
}

.mobile .main-inner .widget .widget-content {
  margin: 0;
  padding: 7px 0 0;
}

.mobile .main-inner .widget ul,
.mobile .main-inner .widget #ArchiveList ul.flat {
  margin: 0 -15px 0;
}

.mobile .main-inner .widget h2.date-header {
  $(date.side): 0;
}

.mobile .date-header span {
  padding: 0.4em 0;
}

.mobile .date-outer:first-child {
  margin-bottom: 0;
  border: 1px solid $(post.border.color);

  -moz-border-radius-topleft: $(date.first.border.radius.top);
  -moz-border-radius-topright: $(date.first.border.radius.top);
  -webkit-border-top-left-radius: $(date.first.border.radius.top);
  -webkit-border-top-right-radius: $(date.first.border.radius.top);
  -goog-ms-border-top-left-radius: $(date.first.border.radius.top);
  -goog-ms-border-top-right-radius: $(date.first.border.radius.top);
  border-top-left-radius: $(date.first.border.radius.top);
  border-top-right-radius: $(date.first.border.radius.top);
}

.mobile .date-outer {
  border-color: $(post.border.color);
  border-width: 0 1px 1px;
}

.mobile .date-outer:last-child {
  margin-bottom: 0;
}

.mobile .main-inner {
  padding: 20px 10px;
}

.mobile .header-inner .section {
  margin: 0;
}

.mobile .Header h1 {
  font: $(header.font);
  color: $(header.text.color);
  text-shadow: 0 0 $(title.shadow.spread) #000000;
  font-size: 30px;
  padding-top:25px;
}

.mobile .Header .description {
  display:none;
}

.mobile .post-outer, .mobile .inline-ad {
  padding: 5px 0;
}

.mobile .tabs-inner .section {
  margin: 0 10px;
}

.mobile .main-inner .section {
  margin: 0;
}

.mobile .main-inner .widget h2 {
  margin: 0;
  padding: 0;
}

.mobile .main-inner .widget h2.date-header span {
  padding: 0;
}

.mobile .main-inner .widget .widget-content {
  margin: 0;
  padding: 7px 0 0;
}

.mobile .main-inner .column-center-inner,
.mobile .main-inner .column-left-inner,
.mobile .main-inner .column-right-inner {
  padding: 0;
}

.mobile .main-inner .column-left-inner,
.mobile .main-inner .column-right-inner {
  background: $(widget.outer.background.color) $(widget.outer.background.gradient) repeat 0 0;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  -goog-ms-box-shadow: none;
  box-shadow: none;
}

.mobile .date-posts {
  margin: 0;
  padding: 0;
}

.mobile .footer-fauxborder-left {
  margin: 0;
}

.mobile .main-inner .section:last-child .Blog:last-child {
  margin-bottom: 0;
}

.mobile-index-contents {
  color: $(body.text.color);
}

.mobile .mobile-link-button {
  background: $(tabs.selected.background.color) $(tabs.background.gradient) repeat-x scroll 0 -100px;
}

.mobile-link-button a:link, .mobile-link-button a:visited {
  color: $(tabs.selected.text.color);
}

/* Share Button CSS START */
.shr-btn-sclmob img{  opacity: 1; filter: alpha(opacity=100); }
.shr-btn-sclmob img:hover { opacity: 0.9; filter: alpha(opacity=90); }
.socialmediabartitlemob h5 { margin: 0px; font:bold 30px Port Lligat Slab; }
/* Share Button CSS END */

/* Mobile Responsive Menu CSS START */
#menu{
  background: #971919;
  color: #FFF;
  height: 40px;
  border-bottom: 2px solid #DDD;
  box-shadow: 1px 2px 9px #B1B1B1;
  border-top: 2px solid #DDD;
}
#menu ul,#menu li{margin:0 auto;padding:0 0;list-style:none}
#menu ul{height:45px;width:100%;}
#menu li{float:left;display:inline;position:relative;font:bold 0.9em Arial;text-shadow: 1px 2px 4px #838383;font-size:18px;}
#menu a{
  display: block;
  line-height: 40px;
  padding: 0 14px;
  text-decoration: none;
  color: #FFF;
}
#menu li a:hover{
  color: #E4E4E4;
  -webkit-transition: all .1s ease-in-out;
  -moz-transition: all .1s ease-in-out;
  -ms-transition: all .1s ease-in-out;
  -o-transition: all .1s ease-in-out;
  transition: all .1s ease-in-out;
  background: #d02323;
}
#menu input{display:none;margin:0 0;padding:0 0;width:80px;height:30px;opacity:0;cursor:pointer}
#menu label{font:bold 30px Arial;display:none;width:35px;height:36px;line-height:36px;text-align:center}
#menu label span{font-size:20px;position:absolute;left:35px}
#menu ul.menus{
  height: auto;
  overflow: hidden;
  width: 170px;
  background: #971919;
  position: absolute;
  z-index: 99;
  display: none;
}
#menu ul.menus li{
  display: block;
  width: 100%;
  font:normal 0.8em Arial;
  text-transform: none;
  text-shadow: none;
  border-bottom: 1px dashed #31AFDB;
}
#menu ul.menus a{
  color: #FFF;
  line-height: 35px;
}
#menu li:hover ul.menus{display:block}
#menu ul.menus a:hover{
  background: #d02323;
  color: #FFF;
  -webkit-transition: all .1s ease-in-out;
  -moz-transition: all .1s ease-in-out;
  -ms-transition: all .1s ease-in-out;
  -o-transition: all .1s ease-in-out;
  transition: all .1s ease-in-out;
}
@media screen and (max-width: 800px){
  #menu{position:relative}
  #menu ul{background:#111;position:absolute;top:100%;right:0;left:0;z-index:3;height:auto;display:none}
  #menu ul.menus{width:100%;position:static;padding-left:20px}
  #menu li{display:block;float:none;width:auto; font:16px Arial;font-weight:bold;border-bottom:1px solid white;}
  #menu input,#menu label{position:absolute;top:0;left:0;display:block}
  #menu input{z-index:4}
  #menu input:checked + label{color:white}
  #menu input:checked ~ ul{display:block;box-shadow: 1px 2px 9px #B1B1B1;}
}
/* Mobile Responsive Menu CSS END */

/* START XOMISSE STICKY NAV BAR */
sticknav {
  background: $(tabs.background.color) $(tabs.background.gradient) repeat scroll 0 0;
  width: 100%;
  font: $(tabs.font);
  color: $(tabs.text.color);
  position: relative;
  margin-right: auto;
  margin-left: auto;
  left:0px;
  right:0px;
  z-index: 9999;
}
sticknav .widget li a {
  display: block;
  padding: 0.8em 1.5em;
  font: $(tabs.font);
  color: $(tabs.text.color);
  border-top: 1px solid $(tabs.border.color);
  border-bottom: 1px solid $(tabs.border.color);
  border-$startSide: 1px solid $(tabs.border.color);
}
sticknav .widget li:last-child a {
  border-$endSide: 1px solid $(tabs.border.color);
}
sticknav .menuitem {
  color:#dddddd;
  padding-left:20px;
}
.stickfixed {
  position:fixed;
}
/* END XOMISSE STICKY NAV BAR */
/* START XOMISSE STICKY NAV BAR */
/*
sticknavnormal {
  position: relative;
  z-index: 9999;
  background: $(tabs.background.color) $(tabs.background.gradient) repeat scroll 0 0;
  color: $(tabs.selected.text.color);
}
.sticknavnormalfixed {
  position:fixed;
  z-index:4;
  top:0px;
}
*/
/* END XOMISSE STICKY NAV BAR */
/* Sidebar Next Post & Previous Post CSS START */
.svg-wrap{position:absolute;width:0;height:0;overflow:hidden;overflow-x:hidden;overflow-y:hidden}
.nav-growpop a{position:fixed;top:50%;display:block;outline:0;text-align:left;z-index:1000;-webkit-transform:translateY(-50%);transform:translateY(-50%)}
.nav-growpop a.prev{left:0}
.nav-growpop a.next{right:0}
.nav-growpop a svg{display:block;margin:0 auto;padding:0}
.nav-growpop .icon-wrap{position:relative;z-index:100;display:block;padding:13px 5px;border:0 solid rgb(178, 35, 35);background:rgb(178, 35, 35);-webkit-transition:border-width .3s .15s;transition:border-width .3s .15s}
.nav-growpop svg.icon{fill:#fff}
.nav-growpop div{position:absolute;border-radius:5px;border:1px solid #ddd;top:50%;padding:20px;width:360px;height:120px;background:#5b0f00;opacity:0.5;filter: alpha(opacity=50);-webkit-transition:-webkit-transform .3s,opacity .3s;transition:transform .3s,opacity .3s}
.nav-growpop a.prev div{left:0;padding:20px 25px 0px 45px;-webkit-transform:translateY(-50%) translateX(-100%) scale(0.75);transform:translateY(-50%) translateX(-100%) scale(0.75)}
.nav-growpop a.next div{right:0;padding:20px 45px 0px 25px;-webkit-transform:translateY(-50%) translateX(100%) scale(0.75);transform:translateY(-50%) translateX(100%) scale(0.75)}
.nav-growpop span{display:block;padding-bottom:5px;border-bottom:1px solid #ddd;color:#ddd;text-transform:uppercase;letter-spacing:1px;font-weight:400;font-size:.7em;line-height:1.2}
.nav-growpop>h3{margin:0;padding:8px 0 10px;color:#4d4d4d;font-weight:300;font-size:1.14em;line-height:1.2;font-style: italic;}
.nav-growpop a:hover .icon-wrap{border-top-width:40px;border-bottom-width:40px;-webkit-transition-delay:0s;transition-delay:0s}
.nav-growpop a:hover div{opacity:1;-webkit-transition-delay:.3s;transition-delay:.3s;-webkit-transform:translateY(-50%) translateX(0) scale(1);transform:translateY(-50%) translateX(0) scale(1)}@media screen and (max-width:520px){.nav-growpop a.prev{-webkit-transform-origin:0 50%;transform-origin:0 50%}
.nav-growpop a.next{-webkit-transform-origin:100% 50%;transform-origin:100% 50%}
.nav-growpop a{-webkit-transform:translateY(-50%) scale(0.6);transform:translateY(-50%) scale(0.6)}}
/* Sidebar Next Post & Previous Post CSS END */

<!-- Page Number Navigation CSS START -->
#blog-pager{clear:both;margin:30px auto; padding: 7px; text-align:center;font-size: 14px;background-image: -webkit-gradient(linear,left bottom,left top,color-stop(0, #000000),color-stop(1, #292929));background-image: -o-linear-gradient(top, #000000 0%, #292929 100%);background-image: -moz-linear-gradient(top, #000000 0%, #292929 100%);background-image: -webkit-linear-gradient(top, #000000 0%, #292929 100%);background-image: -ms-linear-gradient(top, #000000 0%, #292929 100%);background-image: linear-gradient(to top, #000000 0%, #292929 100%); padding: 6px;-webkit-border-radius: 3px;-moz-border-radius: 3px;border-radius: 3px;}
.blog-pager {background: none;}
.displaypageNum a,.showpage a,.pagecurrent{
  border-radius:3px;
  padding: 3px 10px;
  margin-right:5px; color: #fff;
  background: rgba(169,3,41,1);
  background: -moz-linear-gradient(left, rgba(169,3,41,1) 0%, rgba(143,2,34,1) 44%, rgba(109,0,25,1) 100%);
  background: -webkit-gradient(left top, right top, color-stop(0%, rgba(169,3,41,1)), color-stop(44%, rgba(143,2,34,1)), color-stop(100%, rgba(109,0,25,1)));
  background: -webkit-linear-gradient(left, rgba(169,3,41,1) 0%, rgba(143,2,34,1) 44%, rgba(109,0,25,1) 100%);
  background: -o-linear-gradient(left, rgba(169,3,41,1) 0%, rgba(143,2,34,1) 44%, rgba(109,0,25,1) 100%);
  background: -ms-linear-gradient(left, rgba(169,3,41,1) 0%, rgba(143,2,34,1) 44%, rgba(109,0,25,1) 100%);
  background: linear-gradient(to right, rgba(169,3,41,1) 0%, rgba(143,2,34,1) 44%, rgba(109,0,25,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a90329', endColorstr='#6d0019', GradientType=1 );
}
.displaypageNum a:hover,.showpage a:hover,.pagecurrent{background-image: -webkit-gradient(linear,left bottom,left top,color-stop(0, #59A2CF),color-stop(1, #D9EAFF));background-image: -o-linear-gradient(top, #59A2CF 0%, #D9EAFF 100%);background-image: -moz-linear-gradient(top, #59A2CF 0%, #D9EAFF 100%);background-image: -webkit-linear-gradient(top, #59A2CF 0%, #D9EAFF 100%);background-image: -ms-linear-gradient(top, #59A2CF 0%, #D9EAFF 100%);background-image: linear-gradient(to top, #59A2CF 0%, #D9EAFF 100%);text-decoration: none;color: #000;-webkit-border-radius: 3px;-moz-border-radius: 3px;border-radius: 3px;}
.showpageOf{display:none!important}.blog-pager-older-link, .home-link, .blog-pager-newer-link {background: transparent;}
a.blog-pager-older-link, a.home-link, a.blog-pager-newer-link {color: #fff;}
#blog-pager .pages{border:none;background: none;}
<!-- Page Number Navigation CSS END -->

<!-- 熱門文章CSS設定 目前被日本行程資訊整理覆寫 START -->
#PopularPosts1 img{height:100px; width:100px; border:1px solid #ccc;padding:2px;margin:3px 8px 3px 0;float:left;}
#PopularPosts1 li{{display:block; margin:1px 0;padding:0 5px;border-bottom:0px dotted #ccc;}}
<!-- 熱門文章CSS設定 目前被日本行程資訊整理覆寫 END -->

]]></b:skin>


    <b:template-skin>
      <b:variable default='930px' name='content.width' type='length' value='1150px'/>
      <b:variable default='0' name='main.column.left.width' type='length' value='0px'/>
      <b:variable default='360px' name='main.column.right.width' type='length' value='250px'/>

      <![CDATA[
      body {
        min-width: $(content.width);
      }

      .content-outer, .content-fauxcolumn-outer, .region-inner {
        min-width: $(content.width);
        max-width: $(content.width);
        _width: $(content.width);
      }

      .main-inner .columns {
        padding-left: $(main.column.left.width);
        padding-right: $(main.column.right.width);
      }

      .main-inner .fauxcolumn-center-outer {
        left: $(main.column.left.width);
        right: $(main.column.right.width);
        /* IE6 does not respect left and right together */
        _width: expression(this.parentNode.offsetWidth -
            parseInt("$(main.column.left.width)") -
            parseInt("$(main.column.right.width)") + 'px');
      }

      .main-inner .fauxcolumn-left-outer {
        width: $(main.column.left.width);
      }

      .main-inner .fauxcolumn-right-outer {
        width: $(main.column.right.width);
      }

      .main-inner .column-left-outer {
        width: $(main.column.left.width);
        right: 100%;
        margin-left: -$(main.column.left.width);
      }

      .main-inner .column-right-outer {
        width: $(main.column.right.width);
        margin-right: -$(main.column.right.width);
      }

      #layout {
        min-width: 0;
      }

      #layout .content-outer {
        min-width: 0;
        width: 800px;
      }

      #layout .region-inner {
        min-width: 0;
        width: auto;
      }
      ]]>
    </b:template-skin>

<!--insert google fonts-->
<link href='http://fonts.googleapis.com/css?family=Tangerine' rel='stylesheet' type='text/css'/>
<style>
.googlefont1 { 
  font-family: &#39;Tangerine&#39;, arial, serif;
  font-size: 30px;
  text-shadow: 2px 2px 2px #777;
}
</style>
<!--insert google fonts end-->

<!-- Google Analytics Start-->
<script type='text/javascript'>

  var _gaq = _gaq || [];
  _gaq.push([&#39;_setAccount&#39;, &#39;UA-17740935-2&#39;]);
  _gaq.push([&#39;_trackPageview&#39;]);

  (function() {
    var ga = document.createElement(&#39;script&#39;); ga.type = &#39;text/javascript&#39;; ga.async = true;
    ga.src = (&#39;https:&#39; == document.location.protocol ? &#39;https://ssl&#39; : &#39;http://www&#39;) + &#39;.google-analytics.com/ga.js&#39;;
    var s = document.getElementsByTagName(&#39;script&#39;)[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
<!-- Google Analytics End -->

<script type='text/javascript'>
//<![CDATA[
<!-- Functions used for generating Year & Month Breadcrumbs: generateBreadcrumbs() -->
function generateBreadcrumbs() {
  var strHref = location.href.toLowerCase();
  var intWhereAt = strHref.lastIndexOf('/', strHref.indexOf('.html'));
  var intYear = parseInt(strHref.substr(intWhereAt - 7, 4),10);
  var strCrumbOutput = ' -&gt; 年份: <a href="/search?updated-min=' + intYear;
  strCrumbOutput += '-01-01T00%3A00%3A00-08%3A00&updated-max=' + (intYear + 1);
  strCrumbOutput += '-01-01T00%3A00%3A00-08%3A00">' + intYear + '</a>';
  var intMonth = parseInt(strHref.substr(intWhereAt - 2, 2),10);
  var intNextMonthYear = intYear;
  var intNextMonth = intMonth + 1;
  if (intNextMonth > 11) {
    intNextMonth = 1;
    intNextMonthYear += 1;
  }
  var strMonth = intMonth;
  if (intMonth < 10) strMonth = "0" + intMonth;
  var strNextMonth = intNextMonth;
  if (intNextMonth < 10) strNextMonth = "0" + intNextMonth;
  strCrumbOutput += ' -&gt; 月份: <a href="/search?updated-min=' + intYear;
  strCrumbOutput += '-' + strMonth + '-01T00%3A00%3A00-08%3A00&updated-max=' + intNextMonthYear;
  strCrumbOutput += '-' + strNextMonth + '-01T00%3A00%3A00-08%3A00">' + strMonth + '</a>';
  document.write(strCrumbOutput);
}
//]]>
</script>

<script type='text/javascript'>
//<![CDATA[
<!-- Function used for generating the last update time for each post: showPostUpdateTime() -->
function showPostUpdateTime(json) {
  var updateTime = json.entry.updated.$t;
  var publishTime = json.entry.published.$t;
  if (updateTime.substr(0,10) != publishTime.substr(0,10))
    document.write(' | 更新於 '+updateTime.substr(0,10)+' '+updateTime.substr(11,5));
}
//]]>
</script>

<!--Related Posts with thumbnails Scripts and Styles Start-->
<b:if cond='data:blog.pageType == &quot;item&quot;'>
  <style type='text/css'>
    #related-posts {
      float:center;
      text-transform:none;
      height:100%;
      min-height:100%;
      padding-top:2px;
      padding-left:0px;
    }
    #related-posts h2{
      font-size: 1.6em;
      font-weight: bold;
      color: white;
      font-family: Microsoft JhengHei, Georgia, &#8220;Times New Roman&#8221;, Times, serif;
      margin-bottom: 0.75em;
      margin-top: 0em;
      padding-top: 0em;
    }
    #related-posts a{
      color:white;
      border: solid #AAAAAA 1px;
      width:18%;
      background-color:#523021;
      text-shadow:1px 1px #333333;
    }
    .mobile #related-posts a{
      color:white;
      border: solid #AAAAAA 1px;
      width:29%;
      background-color:#523021;
      text-shadow:1px 1px #333333;
    }
    #related-posts a:hover{
      background-color:#990000;
    }
    #related-posts img{
      width:70%;
      border: 2px solid #ffffff;
      padding:5px;
      /*box-shadow: 1px 1px 1px rgba(0,0,0,0.6);*/
      border-radius:5px;
      background-color:black;
    }
    #related-posts .relateddiv{
      width:100%;
      height:100px;
      border: 0pt none;
      margin: 3px 0pt 0pt;
      padding: 2px;
      font-size: 15px;
      font-style: normal;
      font-variant: normal;
      line-height: normal;
      font-size-adjust: none;
      font-stretch: normal;
    }
    .mobile #related-posts .relateddiv{
      width:100%;
      height:100px;
      border: 0pt none;
      margin: 3px 0pt 0pt;
      padding: 5px;
      font-size: 12px;
      font-style: normal;
      font-variant: normal;
      line-height: normal;
      font-size-adjust: none;
      font-stretch: normal;
    }
  </style>
  <b:if cond='data:blog.isMobile'>
    <script type='text/javascript'>
      var maxresults=3;
    </script>
  <b:else/>
    <script type='text/javascript'>
      var maxresults=5;
    </script>
  </b:if>
  <script type='text/javascript'>
    var defaultnoimage=&quot;http://1.bp.blogspot.com/_u4gySN2ZgqE/SosvnavWq0I/AAAAAAAAArk/yL95WlyTqr0/s100/noimage.png&quot;;
    var splittercolor=&quot;#3f3f3f&quot;;
    var relatedpoststitle=&quot;相關文章&quot;;
  </script>
  <script src='https://zaphkielyang.github.io/related_posts_with_thumbnails_min.js' type='text/javascript'/>
</b:if>
<!--Related Posts with thumbnails Scripts and Styles End-->

<!-- Center the Home Start -->
<b:if cond='data:blog.isMobile == &quot;false&quot;'>
  <style type='text/css'>
    .home-link {left:0px;position:absolute;margin-left:400px;text-align:center;width:60px;white-space:nowrap;}
    #blog-pager {min-height:2em;}
  </style>
</b:if>
<!-- Center the Home End -->

<!-- Google Adsense JS START -->
<script src='//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js'/>
<script async='async' src='//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'/>
<!-- Google Adsense JS END -->

</head>
<body expr:class='&quot;loading&quot; + data:blog.mobileClass'>

<!-- 固定 Mobile Tab Menu START -->
<!--
  <script type='text/javascript'>
    $(document).ready(function() {
      var aboveHeight = $(&#39;header&#39;).outerHeight();
      $(window).scroll(function(){
        if ($(window).scrollTop() &gt; aboveHeight){
          $(&#39;sticknav&#39;).addClass(&#39;stickfixed&#39;).css(&#39;top&#39;,&#39;0&#39;).next().css(&#39;padding-top&#39;,&#39;60px&#39;);
        } else {
          $(&#39;sticknav&#39;).removeClass(&#39;stickfixed&#39;).next().css(&#39;padding-top&#39;,&#39;0&#39;);
        }
      });
    });
  </script>
-->
<!-- 固定 Mobile Tab Menu END -->
<!-- 固定 Desktop Tab Menu START -->
<!--
  <script type="text/javascript">
    $(document).ready(function() {
      var aboveHeight = $('header').outerHeight();
      $(window).scroll(function(){
        if ($(window).scrollTop() > aboveHeight){
        $('sticknavnormal').addClass('sticknavnormalfixed').css('top','0').next().css('padding-top','60px');
        } else {
       $('sticknavnormal').removeClass('sticknavnormalfixed').next().css('padding-top','0');
        }
      });
    });
  </script> 
-->
<!-- 固定 Desktop Tab Menu END -->

<!-- 回到頂端按鈕 start -->
  <script>
  //<![CDATA[
  (function () {
    $("body").append("<img id='goTopButton' style='display: none; z-index: 5; cursor: pointer;' title='回到頂端'/>");
    var img = "https://lh3.googleusercontent.com/cI1VsMUlUdMDWgN3eAPrksqj-7qZNq7UrApbAsNmtIVDiSa7w5eX4x9BqkO6bFdPyJrq1k7rcWiTCA=s50-no",
    locatioin = 5/6, // 按鈕出現在螢幕的高度
    right = 3, // 距離右邊 px 值
    opacity = 0.5, // 透明度
    speed = 400, // 捲動速度
    $button = $("#goTopButton"),
    $body = $(document),
    $win = $(window);
    $button.attr("src", img);
    $button.on({
    mouseover: function() {$button.css("opacity", 1);},
    mouseout: function() {$button.css("opacity", opacity);},
    click: function() {$("html, body").animate({scrollTop: 0}, speed);}
    });
    window.goTopMove = function () {
    var scrollH = $body.scrollTop(),
    winH = $win.height(),
    css = {"top": winH * locatioin + "px", "position": "fixed", "right": right, "opacity": opacity};
    if(scrollH > 20) {
    $button.css(css);
    $button.fadeIn("slow");
    } else {
    $button.fadeOut("slow");
    }
    };
    $win.on({
    scroll: function() {goTopMove();},
    resize: function() {goTopMove();}
    });
  } )();
  //]]>
  </script>
<!-- 回到頂端按鈕 end, Design by WFU BLOG -->

<!-- Mobile Responsive Menu START -->
  <b:if cond='data:blog.isMobile'>
    <sticknav class='stickfixed'>
    <nav id='menu'>
    <input style='width:100%;' type='checkbox'/>
    <label>&#8801;<span>Menu</span></label> 
    <ul>
    <li><a href='http://zaphkielyang.blogspot.com/?m=1'>網站首頁</a></li>
    <li><a href='http://zaphkielyang.blogspot.com/p/index.html?m=1'>網站目錄</a></li>
    <li><a href='http://zaphkielyang.blogspot.com/p/mountain-hike.html?m=1'>登山健行</a></li>
    <li><a href='http://zaphkielyang.blogspot.com/p/2013.html?m=1'>日本旅行</a></li>
<!--
    <li><a href='http://zaphkielyang.blogspot.com/2017/01/2017-2017011120170121.html'><span class="menuitem">&#8594; 2017冬季 日本長野東京之旅</span></a></li>
    <li><a href='http://zaphkielyang.blogspot.com/2016/08/2016-201608060820.html'><span class="menuitem">&#8594; 2016夏季 日本南九州之旅</span></a></li>
    <li><a href='http://zaphkielyang.blogspot.com/2016/05/2016201604240516.html'><span class="menuitem">&#8594; 2016春季 日本近畿東海北陸之旅</span></a></li>
    <li><a href='http://zaphkielyang.blogspot.com/p/td_2.html'><span class="menuitem">&#8594; 2015秋季 日本滋賀奈良之旅</span></a></li>
    <li><a href='http://zaphkielyang.blogspot.com/p/td.html'><span class="menuitem">&#8594; 2015春季 日本四國關西賞櫻行</span></a></li>
    <li><a href='http://zaphkielyang.blogspot.com/2014/11/201411171127.html'><span class="menuitem">&#8594; 2014秋季 日本關西中國十一日行</span></a></li>
    <li><a href='http://zaphkielyang.blogspot.com/2014/08/201407310810.html'><span class="menuitem">&#8594; 2014夏季 日本東北與富士山十日行</span></a></li>
    <li><a href='http://zaphkielyang.blogspot.com/p/blog-page_22.html'><span class="menuitem">&#8594; 2014夏季 日本東京日光鎌倉八日行</span></a></li>
    <li><a href='http://zaphkielyang.blogspot.com/p/blog-page_14.html'><span class="menuitem">&#8594; 2014春季 日本京都和歌山賞櫻四日行</span></a></li>
    <li><a href='http://zaphkielyang.blogspot.com/p/blog-page_13.html'><span class="menuitem">&#8594; 2013冬季 日本京都賞楓三日行</span></a></li>
    <li><a href='http://zaphkielyang.blogspot.com/p/blog-page_2.html'><span class="menuitem">&#8594; 2013冬季 日本九州七日行</span></a></li>
-->
    <li><a href='http://zaphkielyang.blogspot.com/p/monuments.html?m=1'>古蹟探訪</a></li>
    <li><a href='http://zaphkielyang.blogspot.com/p/old-street.html?m=1'>老街紀行</a></li>
    <li><a href='http://zaphkielyang.blogspot.com/p/2013_24.html?m=1'>本土玉石</a></li>
    </ul>
    </nav>
    </sticknav>
  </b:if>
<!-- Mobile Responsive Menu END -->

<!--Facebook root start-->
<div id='fb-root'/><script src='http://connect.facebook.net/zh_TW/all.js#appId=291112897671052&amp;xfbml=1'/>
<!--Facebook root end-->

  <b:section class='navbar' id='navbar' maxwidgets='1' showaddelement='no'>
    <b:widget id='Navbar1' locked='true' title='導覽列' type='Navbar' version='1'>
      <b:includable id='main'>&lt;script type=&quot;text/javascript&quot;&gt;
    function setAttributeOnload(object, attribute, val) {
      if(window.addEventListener) {
        window.addEventListener(&#39;load&#39;,
          function(){ object[attribute] = val; }, false);
      } else {
        window.attachEvent(&#39;onload&#39;, function(){ object[attribute] = val; });
      }
    }
  &lt;/script&gt;
&lt;div id=&quot;navbar-iframe-container&quot;&gt;&lt;/div&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;https://apis.google.com/js/plusone.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
      gapi.load(&quot;gapi.iframes:gapi.iframes.style.bubble&quot;, function() {
        if (gapi.iframes &amp;&amp; gapi.iframes.getContext) {
          gapi.iframes.getContext().openChild({
              url: &#39;https://www.blogger.com/navbar.g?targetBlogID\x3d7249154429911728162\x26blogName\x3dZaphkiel\x27s+Journey\x26publishMode\x3dPUBLISH_MODE_BLOGSPOT\x26navbarType\x3dLIGHT\x26layoutType\x3dLAYOUTS\x26searchRoot\x3dhttps://zaphkielyang.blogspot.com/search\x26blogLocale\x3dzh_TW\x26v\x3d2\x26homepageUrl\x3dhttps://zaphkielyang.blogspot.com/\x26vt\x3d-5181752313810531833&#39;,
              where: document.getElementById(&quot;navbar-iframe-container&quot;),
              id: &quot;navbar-iframe&quot;
          });
        }
      });
    &lt;/script&gt;&lt;script type=&quot;text/javascript&quot;&gt;
(function() {
var script = document.createElement(&#39;script&#39;);
script.type = &#39;text/javascript&#39;;
script.src = &#39;//pagead2.googlesyndication.com/pagead/js/google_top_exp.js&#39;;
var head = document.getElementsByTagName(&#39;head&#39;)[0];
if (head) {
head.appendChild(script);
}})();
&lt;/script&gt;
</b:includable>
    </b:widget>
  </b:section>

  <div class='body-fauxcolumns'>
    <div class='fauxcolumn-outer body-fauxcolumn-outer'>
    <div class='cap-top'>
      <div class='cap-left'/>
      <div class='cap-right'/>
    </div>
    <div class='fauxborder-left'>
    <div class='fauxborder-right'/>
    <div class='fauxcolumn-inner'>
    </div>
    </div>
    <div class='cap-bottom'>
      <div class='cap-left'/>
      <div class='cap-right'/>
    </div>
    </div>
  </div>

  <div class='content'>
  <div class='content-fauxcolumns'>
    <div class='fauxcolumn-outer content-fauxcolumn-outer'>
    <div class='cap-top'>
      <div class='cap-left'/>
      <div class='cap-right'/>
    </div>
    <div class='fauxborder-left'>
    <div class='fauxborder-right'/>
    <div class='fauxcolumn-inner'>
    </div>
    </div>
    <div class='cap-bottom'>
      <div class='cap-left'/>
      <div class='cap-right'/>
    </div>
    </div>
  </div>

  <div class='content-outer'>
  <div class='content-cap-top cap-top'>
    <div class='cap-left'/>
    <div class='cap-right'/>
  </div>
  <div class='fauxborder-left content-fauxborder-left'>
  <div class='fauxborder-right content-fauxborder-right'/>
  <div class='content-inner'>

    <header>
    <div class='header-outer'>
    <div class='header-cap-top cap-top'>
      <div class='cap-left'/>
      <div class='cap-right'/>
    </div>
    <div class='fauxborder-left header-fauxborder-left'>
    <div class='fauxborder-right header-fauxborder-right'/>
    <div class='region-inner header-inner'>
      <b:section class='header' id='header' maxwidgets='1' showaddelement='no'>
        <b:widget id='Header1' locked='true' title='Zaphkiel&apos;s Journey (標頭)' type='Header'>
          <b:widget-settings>
            <b:widget-setting name='displayUrl'/>
            <b:widget-setting name='displayHeight'>0</b:widget-setting>
            <b:widget-setting name='sectionWidth'>0</b:widget-setting>
            <b:widget-setting name='useImage'>false</b:widget-setting>
            <b:widget-setting name='shrinkToFit'>false</b:widget-setting>
            <b:widget-setting name='imagePlacement'>BEHIND</b:widget-setting>
            <b:widget-setting name='displayWidth'>0</b:widget-setting>
          </b:widget-settings>
          <b:includable id='main'>

  <b:if cond='data:useImage'>
    <b:if cond='data:imagePlacement == &quot;BEHIND&quot;'>
      <!--
      Show image as background to text. You can't really calculate the width
      reliably in JS because margins are not taken into account by any of
      clientWidth, offsetWidth or scrollWidth, so we don't force a minimum
      width if the user is using shrink to fit.
      This results in a margin-width's worth of pixels being cropped. If the
      user is not using shrink to fit then we expand the header.
      -->
      <b:if cond='data:mobile'>
        <div id='header-inner'>
          <div class='titlewrapper' style='background: transparent'>
            <h1 class='title' style='background: transparent; border-width: 0px'>
              <b:include name='title'/>
            </h1>
          </div>
          <b:include name='description'/>
        </div>
      <b:else/>
        <div expr:style='&quot;background-image: url(\&quot;&quot; + data:sourceUrl + &quot;\&quot;); &quot;                      + &quot;background-position: &quot;                      + data:backgroundPositionStyleStr + &quot;; &quot;                      + data:widthStyleStr                      + &quot;min-height: &quot; + data:height                      + &quot;_height: &quot; + data:height                      + &quot;background-repeat: no-repeat; &quot;' id='header-inner'>
          <div class='titlewrapper' style='background: transparent'>
            <h1 class='title' style='background: transparent; border-width: 0px'>
              <b:include name='title'/>
            </h1>
          </div>
          <b:include name='description'/>
        </div>
      </b:if>
    <b:else/>
      <!--Show the image only-->
      <div id='header-inner'>
        <a expr:href='data:blog.homepageUrl' style='display: block'>
          <img expr:alt='data:title' expr:height='data:height' expr:id='data:widget.instanceId + &quot;_headerimg&quot;' expr:src='data:sourceUrl' expr:width='data:width' style='display: block'/>
        </a>
        <!--Show the description-->
        <b:if cond='data:imagePlacement == &quot;BEFORE_DESCRIPTION&quot;'>
          <b:include name='description'/>
        </b:if>
      </div>
    </b:if>
  <b:else/>
    <!--No header image -->
    <div id='header-inner'>
      <div class='titlewrapper'>
        <h1 class='title'>
          <b:include name='title'/>
        </h1>
      </div>
      <b:include name='description'/>
    </div>
  </b:if>
</b:includable>
          <b:includable id='description'>
  <div class='descriptionwrapper'>
    <p class='description'><span><data:description/></span></p>
  </div>
</b:includable>
          <b:includable id='title'>
  <b:if cond='data:blog.url == data:blog.homepageUrl'>
    <data:title/>
  <b:else/>
    <a expr:href='data:blog.homepageUrl'><data:title/></a>
  </b:if>
</b:includable>
        </b:widget>
      </b:section>
    </div>
    </div>
    <div class='header-cap-bottom cap-bottom'>
      <div class='cap-left'/>
      <div class='cap-right'/>
    </div>
    </div>
    </header>

    <div class='tabs-outer'>
    <div class='tabs-cap-top cap-top'>
      <div class='cap-left'/>
      <div class='cap-right'/>
    </div>
    <div class='fauxborder-left tabs-fauxborder-left'>
    <div class='fauxborder-right tabs-fauxborder-right'/>
    <div class='region-inner tabs-inner'>
      <b:section class='tabs' id='crosscol' maxwidgets='1' showaddelement='yes'>
        <b:widget id='HTML6' locked='false' title='' type='HTML'>
          <b:widget-settings>
            <b:widget-setting name='content'>&lt;div class=&quot;tabs section&quot; id=&quot;crosscol&quot;&gt;&lt;div class=&quot;widget PageList&quot; data-version=&quot;1&quot; id=&quot;PageList1&quot;&gt;
&lt;h2&gt;&#12298;網站目錄&#12299;&lt;/h2&gt;
&lt;div class=&quot;widget-content&quot;&gt;
&lt;sticknavnormal&gt;
		&lt;ul&gt;
			&lt;li&gt;&lt;a href=&quot;http://zaphkielyang.blogspot.com/&quot;&gt;網站首頁&lt;/a&gt;&lt;/li&gt;
			&lt;li&gt;&lt;a href=&quot;http://zaphkielyang.blogspot.com/p/index.html&quot;&gt;網站目錄&lt;/a&gt;&lt;/li&gt;
			&lt;li&gt;&lt;a href=&quot;http://zaphkielyang.blogspot.com/p/mountain-hike.html&quot;&gt;登山健行&lt;/a&gt;&lt;/li&gt;
			&lt;li&gt;&lt;a href=&quot;http://zaphkielyang.blogspot.com/p/2013.html&quot;&gt;日本旅行&lt;/a&gt;&lt;/li&gt;
			&lt;li&gt;&lt;a href=&quot;http://zaphkielyang.blogspot.com/p/monuments.html&quot;&gt;古蹟探訪&lt;/a&gt;&lt;/li&gt;
			&lt;li&gt;&lt;a href=&quot;http://zaphkielyang.blogspot.com/p/old-street.html&quot;&gt;老街紀行&lt;/a&gt;&lt;/li&gt;
			&lt;li&gt;&lt;a href=&quot;http://zaphkielyang.blogspot.com/p/2013_24.html&quot;&gt;本土玉石&lt;/a&gt;&lt;/li&gt;
		&lt;/ul&gt;
&lt;div class=&quot;clear&quot;&gt;&lt;/div&gt;
&lt;div class=&quot;clear&quot;&gt;&lt;/div&gt;
&lt;/sticknavnormal&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;</b:widget-setting>
          </b:widget-settings>
          <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>
    <data:content/>
  </div>

  <b:include name='quickedit'/>
</b:includable>
        </b:widget>
      </b:section>
      <b:section class='tabs' id='crosscol-overflow' showaddelement='no'/>
    </div>
    </div>
    <div class='tabs-cap-bottom cap-bottom'>
      <div class='cap-left'/>
      <div class='cap-right'/>
    </div>
    </div>

    <div class='main-outer'>
    <div class='main-cap-top cap-top'>
      <div class='cap-left'/>
      <div class='cap-right'/>
    </div>

    <div class='fauxborder-left main-fauxborder-left'>
    <div class='fauxborder-right main-fauxborder-right'/>
    <div class='region-inner main-inner'>

      <div class='columns fauxcolumns'>

        <div class='fauxcolumn-outer fauxcolumn-center-outer'>
        <div class='cap-top'>
          <div class='cap-left'/>
          <div class='cap-right'/>
        </div>
        <div class='fauxborder-left'>
        <div class='fauxborder-right'/>
        <div class='fauxcolumn-inner'>
        </div>
        </div>
        <div class='cap-bottom'>
          <div class='cap-left'/>
          <div class='cap-right'/>
        </div>
        </div>

        <div class='fauxcolumn-outer fauxcolumn-left-outer'>
        <div class='cap-top'>
          <div class='cap-left'/>
          <div class='cap-right'/>
        </div>
        <div class='fauxborder-left'>
        <div class='fauxborder-right'/>
        <div class='fauxcolumn-inner'>
        </div>
        </div>
        <div class='cap-bottom'>
          <div class='cap-left'/>
          <div class='cap-right'/>
        </div>
        </div>

        <div class='fauxcolumn-outer fauxcolumn-right-outer'>
        <div class='cap-top'>
          <div class='cap-left'/>
          <div class='cap-right'/>
        </div>
        <div class='fauxborder-left'>
        <div class='fauxborder-right'/>
        <div class='fauxcolumn-inner'>
        </div>
        </div>
        <div class='cap-bottom'>
          <div class='cap-left'/>
          <div class='cap-right'/>
        </div>
        </div>

        <!-- corrects IE6 width calculation -->
        <div class='columns-inner'>

        <div class='column-center-outer'>
        <div class='column-center-inner'>
          <b:section class='main' id='main' showaddelement='no'>
            <b:widget id='HTML3' locked='false' mobile='yes' title='' type='HTML'>
              <b:widget-settings>
                <b:widget-setting name='content'>&lt;!--&lt;form action=&#39;/search&#39; id=&#39;searchthis&#39; method=&#39;get&#39; style=&#39;display:inline;&#39;&gt;
&lt;input id=&quot;search-box&quot; name=&quot;q&quot; size=&quot;10&quot; type=&quot;text&quot; /&gt;
&lt;input id=&quot;search-btn&quot; type=&quot;submit&quot; value=&quot;搜尋本站&quot; /&gt;&lt;/form&gt;--&gt;
&lt;script&gt;
  (function() {
    var cx = &#39;010857187188539944565:w6rzlgsl2v0&#39;;
    var gcse = document.createElement(&#39;script&#39;);
    gcse.type = &#39;text/javascript&#39;;
    gcse.async = true;
    gcse.src = &#39;https://cse.google.com/cse.js?cx=&#39; + cx;
    var s = document.getElementsByTagName(&#39;script&#39;)[0];
    s.parentNode.insertBefore(gcse, s);
  })();
&lt;/script&gt;
&lt;gcse:search&gt;&lt;/gcse:search&gt;</b:widget-setting>
              </b:widget-settings>
              <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>
    <data:content/>
  </div>

  <b:include name='quickedit'/>
</b:includable>
            </b:widget>
            <b:widget id='Blog1' locked='true' title='網誌文章' type='Blog' version='1'>
              <b:widget-settings>
                <b:widget-setting name='showDateHeader'>true</b:widget-setting>
                <b:widget-setting name='style.textcolor'>#000000</b:widget-setting>
                <b:widget-setting name='showShareButtons'>false</b:widget-setting>
                <b:widget-setting name='showCommentLink'>true</b:widget-setting>
                <b:widget-setting name='style.urlcolor'>#777777</b:widget-setting>
                <b:widget-setting name='showAuthor'>true</b:widget-setting>
                <b:widget-setting name='style.linkcolor'>#634848</b:widget-setting>
                <b:widget-setting name='style.unittype'>TextAndImage</b:widget-setting>
                <b:widget-setting name='style.bgcolor'>#fffbf2</b:widget-setting>
                <b:widget-setting name='showAuthorProfile'>false</b:widget-setting>
                <b:widget-setting name='style.layout'>300x250</b:widget-setting>
                <b:widget-setting name='showLabels'>true</b:widget-setting>
                <b:widget-setting name='showLocation'>false</b:widget-setting>
                <b:widget-setting name='showTimestamp'>true</b:widget-setting>
                <b:widget-setting name='postsPerAd'>1</b:widget-setting>
                <b:widget-setting name='showBacklinks'>true</b:widget-setting>
                <b:widget-setting name='style.bordercolor'>#fffbf2</b:widget-setting>
                <b:widget-setting name='showInlineAds'>false</b:widget-setting>
                <b:widget-setting name='showReactions'>false</b:widget-setting>
              </b:widget-settings>
              <b:includable id='main' var='top'>

  <b:if cond='data:top.showDummy'>
    <script expr:src='data:top.dummyUrl'/>
  </b:if>

  <b:if cond='data:mobileindex'>
    <!-- mobile index -->
    <div class='blog-posts hfeed'>
      <b:loop values='data:posts' var='post'>
        <b:if cond='data:post.isFirstPost == &quot;false&quot;'>
          &lt;/div&gt;
        </b:if>
        &lt;div class=&quot;mobile-date-outer date-outer&quot;&gt;
        <b:include data='post' name='mobile-index-post'/>
        <b:if cond='data:post.trackLatency'>
          <data:post.latencyJs/>
        </b:if>
      </b:loop>
      <b:if cond='data:numPosts != 0'>
        &lt;/div&gt;
      </b:if>
    </div>
  <b:else/>

    <!-- posts -->
    <div class='blog-posts hfeed'>

      <b:include data='top' name='status-message'/>

      <data:defaultAdStart/>
      <b:loop values='data:posts' var='post'>
        <b:if cond='data:post.isDateStart'>
          <b:if cond='data:post.isFirstPost == &quot;false&quot;'>
            &lt;/div&gt;&lt;/div&gt;
          </b:if>
        </b:if>
        <b:if cond='data:post.isDateStart'>
          &lt;div class=&quot;date-outer&quot;&gt;
        </b:if>
        <b:include data='post' name='breadcrumbs'/>
        <b:if cond='data:post.dateHeader'>
          <h2 class='date-header'><span><data:post.dateHeader/></span></h2>
        </b:if>
        <b:if cond='data:post.isDateStart'>
          &lt;div class=&quot;date-posts&quot;&gt;
        </b:if>
        <div class='post-outer'>

        <!-- Mobile Version Index Only Show Title , First Image , and Snippet START-->
        <b:if cond='data:blog.pageType == &quot;index&quot;'>
            <b:if cond='data:blog.isMobile == &quot;true&quot;'><!--Mobile版 Index-->
              <div class='index-thumbnail' style='min-height:100px;'>
                <b:if cond='data:post.firstImageUrl'><!--檢測第一張圖是否存在-->
                  <span class='home-post-cover'>
                    <a expr:href='data:post.url'>
                      <img class='indeximg' expr:src='data:post.firstImageUrl' style='max-width:160;max-height:90px;float:left;'/>
                      <h4 class='post-title' style='font-size:16px;text-shadow: 1px 1px 1px rgba(150, 150, 150, 1);'><data:post.title/></h4>
                    </a>
                  </span>
                <b:else/>
             	   <span class='home-post-cover'>
             	     <a expr:href='data:post.url'>
             	       <h4 class='post-title' style='font-size:16px;'><data:post.title/></h4>
             	       <br/><data:post.snippet/>
             	     </a>
             	   </span>
                </b:if>
              </div>
            <b:else/><!--DESKTOP版 Index-->
              <div class='index-thumbnail' style='min-height:200px'>
                <span class='home-post-cover'>
                  <b:if cond='data:post.firstImageUrl'><!--檢測第一張圖是否存在-->
                    <a expr:href='data:post.url'><img class='indeximg' expr:src='data:post.firstImageUrl' style='max-width:320;max-height:180px;float:left;'/><h4 class='post-title' style='text-shadow: 1px 1px 1px rgba(150, 150, 150, 1);'><data:post.title/></h4></a>
                  <b:else/>
             	     <a expr:href='data:post.url'><h4 class='post-title'><data:post.title/></h4></a>
             	   </b:if>
                  <br/><span class='snippet-content'><data:post.snippet/></span>
                </span>
                <br/><br/>
                <a expr:href='data:post.url'><span style='font-size:18px;float:right;text-shadow: 1px 1px  #000000;'>......繼續閱讀全文 &#187;</span></a>
                <b:if cond='data:post.labels'>
                  <br/><br/><br/>
                  <div style='float:right;text-shadow: 1px 1px  #000000;'>
                    <data:postLabelsLabel/>
                    <b:loop values='data:post.labels' var='label'>
                      <a expr:href='data:label.url + &quot;?&amp;max-results=10&quot;' rel='tag'><data:label.name/></a><b:if cond='data:label.isLast != &quot;true&quot;'>,</b:if>
                    </b:loop>
                  </div>
                </b:if>
                <div style='display:flex;flex-direction:row;justify-content:center;position:absolute;right:1px;top:8px;'>
                  <div class='fb-like' data-action='like' data-colorscheme='dark' data-layout='button_count' data-share='false' data-show-faces='false' expr:data-href='data:post.url'/>
                  <div annotation='none' class='g-plusone' data-size='medium' expr:data-href='data:post.url'/>
                </div>
              </div>
            </b:if>
            <br/>
        <b:else/>
          <b:include data='post' name='post'/>
        </b:if>
        <!-- Mobile Version Index Only Show Title , First Image , and Snippet END-->


        <b:if cond='data:blog.pageType == &quot;item&quot; OR data:blog.pageType == &quot;static_page&quot;'>

        <!-- Share Button START -->
          <br/><br/>
          <div style='margin-bottom: 10px;'><h3 class='post-title'>分享文章</h3></div>
          <div align='center'>
          <div class='shr-btn-sclmob'>
          <div align='center'>
          <a class='facebook' expr:href='&quot;http://www.facebook.com/sharer.php?u=&quot; + data:post.url + &quot;&amp;t=&quot; + data:post.title' rel='nofollow' target='_blank' title='Share This On Facebook'><img alt='facebook share' border='0' src='https://lh3.googleusercontent.com/fgsja4HakbA8ItFM2xKg2RB1yFzOZ1Pv09dcL-0iMEuD2t6ItK1Exidhph_9XUoPGtKgLARY_ex8qw=s320' width='24%'/></a>
          <a class='google' expr:href='&quot;https://plus.google.com/share?url=&quot; + data:post.url + &quot;&amp;t=&quot; + data:post.title' rel='nofollow' target='_blank' title='Share This On Google'><img alt='google+ share' border='0' src='https://lh3.googleusercontent.com/N5-DUU-XDmhMJSR5x4b7rmSqTPO2f8rMEgtbxlvfPyskHVAIEunaNjTYkwueHKW8tnBpthtqhT8hwA=s320' width='24%'/></a>
          <a class='twitter' expr:href='&quot;https://twitter.com/share?url=&quot; + data:post.url + &quot;&amp;title=&quot; + data:post.title' rel='nofollow' target='_blank' title='Tweet This'><img alt='twitter share' border='0' src='https://lh3.googleusercontent.com/90h30WEzprL_jAa9WH8EIfOZS50r6krY39IUs1WLP6NldTIv_0ysUCThR0Q6JnW5LV84H1lVNC-QuA=s320' width='24%'/></a>

          <!-- LINE 分享按鈕開始 -->
          <script type='text/javascript'>
          //<![CDATA[
          (function(global){var ns=function(name){var namespaces=name.split('.');var obj=global;while(namespaces.length>0){var segment=namespaces.pop();if(typeof obj[segment]==='undefined'){obj[segment]={}}if(typeof obj[segment]!=='object'){return null}obj=obj[segment]};return obj};if(!ns('media_line_me')||!ns('media.line.naver.jp')){return}var $={bind:function(obj,type,fn){obj.addEventListener?obj.addEventListener(type,fn,false):obj.attachEvent('on'+type,fn)},getThisScriptElement:function(){var scripts=document.getElementsByTagName('script');return scripts[scripts.length-1]},each:function(array,fn){for(var i=0,l=array.length;i<l;i++){var r=fn(i,array[i],array);if(r===false){return}}},attr:function(el,obj){for(var key in obj){el.setAttribute(key,obj[key])}},map:function(array,fn){var res=[];$.each(array,function(i,v,a){res.push(fn(i,v,a))});return res},filter:function(array,fn){var res=[];$.each(array,function(i,v,a){if(fn(i,v,a)){res.push(v)}});return res},ready:function(fn){$.bind(window,'load',fn)},isSmartphone:function(){return navigator.userAgent.match(/(iPhone|iPod|iPad|Android)/i)}};var lineButton={constant:{LINE_BASE_URL:'//line.me/R/msg/text/',IMG_BASE_URL:'//media.line.me/img/button/',ALT:{ja:'LINE\u3067\u9001\u308b',en:'LINE it!','zh-hans':'LINE it!','zh-hant':'LINE it!'},IMG_SIZE:{ja:{a:[82,20],b:[20,20],c:[30,30],d:[40,40],e:[36,60]},en:{a:[78,20],b:[20,20],c:[30,30],d:[40,40],e:[36,60]},'zh-hans':{a:[84,20],b:[20,20],c:[30,30],d:[40,40],e:[36,60]},'zh-hant':{a:[84,20],b:[20,20],c:[30,30],d:[40,40],e:[36,60]}}},insertButton:function(argOption,scriptParent,script){var self=this;var option=self.validate(argOption);if(!(option.pc||$.isSmartphone())){return}var s=(script.parentNode===scriptParent)?script:undefined;scriptParent.insertBefore(self.createTag(option),s)},validate:function(argOption){var self=this;var pattern={lang:/^(ja|en|zh-han[st])$/,type:/^(a|b|c|d|e)$/,text:/^[\s\S]+$/};var option={lang:'ja',type:'a',text:null};if(!argOption){return option}for(var key in option){if(argOption[key]&&typeof argOption[key]==='string'&&argOption[key].match(pattern[key])){option[key]=argOption[key]}}option.withUrl=!!argOption.withUrl;option.pc=!!argOption.pc;return option},createTag:function(option){var self=this;var size=self.constant.IMG_SIZE[option.lang][option.type];var a=document.createElement('a');$.attr(a,{href:self.createUrl(option)});var img=document.createElement('img');$.attr(img,{src:self.createImageUrl(option),width:size[0],height:size[1],alt:self.constant.ALT[option.lang]});a.appendChild(img);return a},createUrl:function(option){var self=this;var text=self.text(option);return[self.constant.LINE_BASE_URL,encodeURIComponent(text).replace(/\+/g,'%20')].join('?')},text:function(option){var text;if(option.text){text=[option.text];if(option.withUrl){text.push(document.location.href)}}else{text=[document.title,document.location.href]}return text.join('\n')},createImageUrl:function(option){var self=this;var C=self.constant;var size=C.IMG_SIZE[option.lang][option.type];return[C.IMG_BASE_URL,option.lang,'/',size[0],'x',size[1],'.png'].join('')}};global.media_line_me.LineButton=global.jp.naver.line.media.LineButton=function(option){var script=$.getThisScriptElement();var scriptParent=script.parentNode;if(scriptParent.tagName.toLowerCase()!=='head'){$.ready(function(){lineButton.insertButton(option,scriptParent,script)})}}})(this);
          //]]>
          </script>
          <a href='javascript: void(window.open(&apos;http://line.naver.jp/R/msg/text/&apos; .concat(encodeURIComponent(location.href)) .concat(&apos; &apos;) .concat(&apos;(&apos;) .concat(encodeURIComponent(document.title)) .concat(&apos;)&apos;)));' title='Share Line to Friends'><img alt='share LINE to friends' src='https://lh3.googleusercontent.com/uUlEklmuJJXZqGKxIeNS79_Iaze-cRXqgwcuOrSJe1iLISQYJPm91C1loG38UghE7GSjKYvFm2W2Ew=s320' title='分享給 LINE 好友' width='24%'/></a>
         <!-- LINE 分享按鈕結束 -->

          </div>
          </div>
          </div>
        <!-- Share Button END -->

        <!-- FB Comments START -->
          <br/><br/>
          <div style='margin-bottom: 10px;'><h3 class='post-title'>Facebook 回應</h3></div>
        <!-- FB Comments END -->  

        <!-- Original Comments START -->
        <b:include data='post' name='comments'/>
        <!-- Original Comments END -->

        </b:if>


        </div>
        <b:if cond='data:post.includeAd'>
          <b:if cond='data:post.isFirstPost'>
            <data:defaultAdEnd/>
          <b:else/>
            <data:adEnd/>
          </b:if>
          <b:if cond='data:mobile == &quot;false&quot;'>
            <div class='inline-ad'>
              <data:adCode/>
            </div>
          </b:if>
          <data:adStart/>
        </b:if>
        <b:if cond='data:post.trackLatency'>
          <data:post.latencyJs/>
        </b:if>
      </b:loop>
      <b:if cond='data:numPosts != 0'>
        &lt;/div&gt;&lt;/div&gt;
      </b:if>
      <data:adEnd/>
    </div>
  </b:if>

  <!-- navigation -->
  <b:if cond='data:mobile'>
    <b:include name='mobile-nextprev'/>
  <b:else/>
    <b:include name='nextprev'/>

    <!-- feed links -->
    <b:include name='feedLinks'/>
  </b:if>

  <b:if cond='data:top.showStars'>
    <script src='//www.google.com/jsapi' type='text/javascript'/>
    <script type='text/javascript'>
      google.load(&quot;annotations&quot;, &quot;1&quot;, {&quot;locale&quot;: &quot;<data:top.languageCode/>&quot;});
      function initialize() {
        google.annotations.setApplicationId(<data:top.blogspotReviews/>);
        google.annotations.createAll();
        google.annotations.fetch();
      }
      google.setOnLoadCallback(initialize);
    </script>
  </b:if>
</b:includable>
              <b:includable id='backlinkDeleteIcon' var='backlink'>
  <span expr:class='&quot;item-control &quot; + data:backlink.adminClass'>
    <a expr:href='data:backlink.deleteUrl' expr:title='data:top.deleteBacklinkMsg'>
      <img src='https://resources.blogblog.com/img/icon_delete13.gif'/>
    </a>
  </span>
</b:includable>
              <b:includable id='backlinks' var='post'>
  <a name='links'/><h4><data:post.backlinksLabel/></h4>
  <b:if cond='data:post.numBacklinks != 0'>
    <dl class='comments-block' id='comments-block'>
      <b:loop values='data:post.backlinks' var='backlink'>
        <div class='collapsed-backlink backlink-control'>
          <dt class='comment-title'>
            <span class='backlink-toggle-zippy'>&#160;</span>
            <a expr:href='data:backlink.url' rel='nofollow'><data:backlink.title/></a>
            <b:include data='backlink' name='backlinkDeleteIcon'/>
          </dt>
          <dd class='comment-body collapseable'>
            <data:backlink.snippet/>
          </dd>
          <dd class='comment-footer collapseable'>
            <span class='comment-author'><data:post.authorLabel/> <data:backlink.author/></span>
            <span class='comment-timestamp'><data:post.timestampLabel/> <data:backlink.timestamp/></span>
          </dd>
        </div>
      </b:loop>
    </dl>
  </b:if>
  <p class='comment-footer'>
    <a class='comment-link' expr:href='data:post.createLinkUrl' expr:id='data:widget.instanceId + &quot;_backlinks-create-link&quot;' target='_blank'><data:post.createLinkLabel/></a>
  </p>
</b:includable>
              <b:includable id='breadcrumbs' var='post'>
<!-- Year & Month Breadcrumbs -->
  <b:if cond='data:blog.pageType == &quot;item&quot;'>
    <p class='breadcrumbs'>
      導覽連結:  <a expr:href='data:blog.homepageUrl' rel='tag'>首頁</a>
      <script type='text/javascript'>
        generateBreadcrumbs();
      </script>
    </p>
  </b:if>
<!-- End of Breadcrumbs Hack -->
</b:includable>
              <b:includable id='comment-form' var='post'>
  <div class='comment-form'>
    <a name='comment-form'/>
    <b:if cond='data:mobile'>
      <h4 id='comment-post-message'>
        <a expr:id='data:widget.instanceId + &quot;_comment-editor-toggle-link&quot;' href='javascript:void(0)'><data:postCommentMsg/></a></h4>
      <p><data:blogCommentMessage/></p>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight' frameborder='0' id='comment-editor' name='comment-editor' src='' style='display: none' width='100%'/>
    <b:else/>
      <h4 id='comment-post-message'><data:postCommentMsg/></h4>
      <p><data:blogCommentMessage/></p>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight' frameborder='0' id='comment-editor' name='comment-editor' src='' width='100%'/>
    </b:if>
    <data:post.cmtfpIframe/>
    <script type='text/javascript'>
      BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;);
    </script>
  </div>
</b:includable>
              <b:includable id='commentDeleteIcon' var='comment'>
  <span expr:class='&quot;item-control &quot; + data:comment.adminClass'>
    <b:if cond='data:showCmtPopup'>
      <div class='goog-toggle-button'>
        <div class='goog-inline-block comment-action-icon'/>
      </div>
    <b:else/>
      <a class='comment-delete' expr:href='data:comment.deleteUrl' expr:title='data:top.deleteCommentMsg'>
        <img src='https://resources.blogblog.com/img/icon_delete13.gif'/>
      </a>
    </b:if>
  </span>
</b:includable>
              <b:includable id='comment_count_picker' var='post'>
  <b:if cond='data:post.commentSource == 1'>
    <span class='cmt_count_iframe_holder' expr:data-count='data:post.numComments' expr:data-onclick='data:post.addCommentOnclick' expr:data-post-url='data:post.url' expr:data-url='data:post.url.canonical.http'>
    </span>
  <b:else/>
    <a class='comment-link' expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'>
      <data:post.commentLabelFull/>:
    </a>
  </b:if>
</b:includable>
              <b:includable id='comment_picker' var='post'>
  <b:if cond='data:post.commentSource == 1'>
    <b:include data='post' name='iframe_comments'/>
  <b:elseif cond='data:post.showThreadedComments'/>
    <b:include data='post' name='threaded_comments'/>
  <b:else/>
    <b:include data='post' name='comments'/>
  </b:if>
</b:includable>
              <b:includable id='comments' var='post'>
<!--在Blogger 裡加入 facebook 留言板開始-->
<div id='fb-root'/>
<script src='http://connect.facebook.net/zh_TW/all.js#xfbml=1'/>
<fb:comments colorscheme='dark' data-width='100%' expr:href='data:post.url' num_posts='5'/>
<!--在Blogger 裡加入 facebook 留言板結束-->
  <div class='comments' id='comments'>
    <a name='comments'/>
    <b:if cond='data:post.allowComments'>
      <h4>
        <b:if cond='data:post.numComments == 1'>
          1 <data:commentLabel/>:
        <b:else/>
          <data:post.numComments/> <data:commentLabelPlural/>:
        </b:if>
      </h4>

      <b:if cond='data:post.commentPagingRequired'>
        <span class='paging-control-container'>
          <a expr:class='data:post.oldLinkClass' expr:href='data:post.oldestLinkUrl'><data:post.oldestLinkText/></a>
          &#160;
          <a expr:class='data:post.oldLinkClass' expr:href='data:post.olderLinkUrl'><data:post.olderLinkText/></a>
          &#160;
          <data:post.commentRangeText/>
          &#160;
          <a expr:class='data:post.newLinkClass' expr:href='data:post.newerLinkUrl'><data:post.newerLinkText/></a>
          &#160;
          <a expr:class='data:post.newLinkClass' expr:href='data:post.newestLinkUrl'><data:post.newestLinkText/></a>
        </span>
      </b:if>

      <div expr:id='data:widget.instanceId + &quot;_comments-block-wrapper&quot;'>
        <dl expr:class='data:post.avatarIndentClass' id='comments-block'>
          <script type='text/javascript'>var CommentsCounter=0;</script>
          <b:loop values='data:post.comments' var='comment'>
            <dt expr:class='&quot;comment-author &quot; + data:comment.authorClass' expr:id='data:comment.anchorName'>
              <b:if cond='data:comment.favicon'>
                <img expr:src='data:comment.favicon' height='16px' style='margin-bottom:-2px;' width='16px'/>
              </b:if>
              <a expr:name='data:comment.anchorName'/>
              <b:if cond='data:blog.enabledCommentProfileImages'>
                <data:comment.authorAvatarImage/>
              </b:if>
              <b:if cond='data:comment.authorUrl'>
                <a expr:href='data:comment.authorUrl' rel='nofollow'><data:comment.author/></a>
              <b:else/>
                <data:comment.author/>
              </b:if>
              <data:commentPostedByMsg/>
              <span class='comment-number'>
                <!--<a expr:href='&quot;comment-&quot; + data:comment.id' title='Comment Link'>
                </a>-->
              </span>
            </dt>
            <dd class='comment-body' expr:id='data:widget.instanceId + data:comment.cmtBodyIdPostfix'>
              <b:if cond='data:comment.isDeleted'>
                <span class='deleted-comment'><data:comment.body/></span>
              <b:else/>
                <b:if cond='data:comment.author == data:post.author'>
                  <p>
                    <div class='comment-me'>
                      <data:comment.body/>
                    </div>
                  </p>
                <b:else/>
                  <p>
                    <div class='comment-other'>
                      <data:comment.body/>
                    </div>
                  </p>
                </b:if>
              </b:if>
            </dd>
            <dd class='comment-footer'>
              <span class='comment-timestamp'>
                <a expr:href='data:comment.url' title='comment permalink'>
                  <data:comment.timestamp/>
                </a>
                <b:include data='comment' name='commentDeleteIcon'/>
              </span>
            </dd>
          </b:loop>
        </dl>
      </div>

      <b:if cond='data:post.commentPagingRequired'>
        <span class='paging-control-container'>
          <a expr:class='data:post.oldLinkClass' expr:href='data:post.oldestLinkUrl'>
            <data:post.oldestLinkText/>
          </a>
          <a expr:class='data:post.oldLinkClass' expr:href='data:post.olderLinkUrl'>
            <data:post.olderLinkText/>
          </a>
          &#160;
          <data:post.commentRangeText/>
          &#160;
          <a expr:class='data:post.newLinkClass' expr:href='data:post.newerLinkUrl'>
            <data:post.newerLinkText/>
          </a>
          <a expr:class='data:post.newLinkClass' expr:href='data:post.newestLinkUrl'>
            <data:post.newestLinkText/>
          </a>
        </span>
      </b:if>

      <p class='comment-footer'>
        <b:if cond='data:post.embedCommentForm'>
          <b:if cond='data:post.allowNewComments'>
            <b:include data='post' name='comment-form'/>
          <b:else/>
            <data:post.noNewCommentsText/>
          </b:if>
        <b:else/>
          <b:if cond='data:post.allowComments'>
            <a expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'><data:postCommentMsg/></a>
          </b:if>
        </b:if>

      </p>
    </b:if>
    <b:if cond='data:showCmtPopup'>
      <div id='comment-popup'>
        <iframe allowtransparency='true' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'>
        </iframe>
      </div>
    </b:if>

    <div id='backlinks-container'>
    <div expr:id='data:widget.instanceId + &quot;_backlinks-container&quot;'>
       <b:if cond='data:post.showBacklinks'>
         <b:include data='post' name='backlinks'/>
       </b:if>
    </div>
    </div>
  </div>
</b:includable>
              <b:includable id='feedLinks'>
  <b:if cond='data:blog.pageType != &quot;item&quot;'> <!-- Blog feed links -->
    <b:if cond='data:feedLinks'>
      <div class='blog-feeds'>
        <b:include data='feedLinks' name='feedLinksBody'/>
      </div>
    </b:if>

  <b:else/> <!--Post feed links -->
    <div class='post-feeds'>
      <b:loop values='data:posts' var='post'>
        <b:include cond='data:post.allowComments and data:post.feedLinks' data='post.feedLinks' name='feedLinksBody'/>
      </b:loop>
    </div>
  </b:if>
</b:includable>
              <b:includable id='feedLinksBody' var='links'>
  <div class='feed-links'>
  <data:feedLinksMsg/>
  <b:loop values='data:links' var='f'>
     <a class='feed-link' expr:href='data:f.url' expr:type='data:f.mimeType' target='_blank'><data:f.name/> (<data:f.feedType/>)</a>
  </b:loop>
  </div>
</b:includable>
              <b:includable id='iframe_comments' var='post'>

  <b:if cond='data:post.allowIframeComments'>
    <script expr:src='data:post.iframeCommentSrc' type='text/javascript'/>
    <div class='cmt_iframe_holder' expr:data-href='data:post.url.canonical' expr:data-viewtype='data:post.viewType'/>

    <b:if cond='data:post.embedCommentForm == &quot;false&quot;'>
      <a expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'><data:postCommentMsg/></a>
    </b:if>
  </b:if>
</b:includable>
              <b:includable id='mobile-index-post' var='post'>
  <div class='mobile-date-outer date-outer'>
    <b:if cond='data:post.dateHeader'>
      <div class='date-header'>
        <span><data:post.dateHeader/></span>
      </div>
    </b:if>

    <div class='mobile-post-outer'>
      <a expr:href='data:post.url'>
        <h3 class='mobile-index-title entry-title'>
          <data:post.title/>
        </h3>

        <div class='mobile-index-arrow'>&amp;rsaquo;</div>

        <div class='mobile-index-contents'>
          <b:if cond='data:post.thumbnailUrl'>
            <div class='mobile-index-thumbnail'>
              <div class='Image'>
                <img expr:src='data:post.thumbnailUrl'/>
              </div>
            </div>
          </b:if>

          <div class='post-body'>
            <b:if cond='data:post.snippet'><data:post.snippet/></b:if>
          </div>
        </div>

        <div style='clear: both;'/>
      </a>

      <div class='mobile-index-comment'>
        <b:if cond='data:blog.pageType != &quot;static_page&quot;'>
          <b:if cond='data:post.allowComments'>
            <b:if cond='data:post.numComments != 0'>
              <a class='comment-link' expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'><b:if cond='data:post.numComments == 1'>1 <data:top.commentLabel/><b:else/><data:post.numComments/> <data:top.commentLabelPlural/></b:if></a>
            </b:if>
          </b:if>
        </b:if>
      </div>
    </div>
  </div>
</b:includable>
              <b:includable id='mobile-main' var='top'>
    <!-- posts -->
    <div class='blog-posts hfeed'>

      <b:include data='top' name='status-message'/>

      <b:if cond='data:blog.pageType == &quot;index&quot;'>
        <b:loop values='data:posts' var='post'>
          <b:include data='post' name='mobile-index-post'/>
        </b:loop>
      <b:else/>
        <b:loop values='data:posts' var='post'>
          <b:include data='post' name='mobile-post'/>
        </b:loop>
      </b:if>
    </div>

   <b:include name='mobile-nextprev'/>
</b:includable>
              <b:includable id='mobile-nextprev'>
  <div class='blog-pager' id='blog-pager'>
    <b:if cond='data:newerPageUrl'>
      <div class='mobile-link-button' id='blog-pager-newer-link'>
      <a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:newerPageTitle'>&amp;lsaquo;</a>
      </div>
    </b:if>

    <b:if cond='data:olderPageUrl'>
      <div class='mobile-link-button' id='blog-pager-older-link'>
      <a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:olderPageTitle'>&amp;rsaquo;</a>
      </div>
    </b:if>

    <div class='mobile-link-button' id='blog-pager-home-link'>
    <a class='home-link' expr:href='data:blog.homepageUrl'><data:homeMsg/></a>
    </div>

    <div class='mobile-desktop-link'>
      <a class='home-link' expr:href='data:desktopLinkUrl'><data:desktopLinkMsg/></a>
    </div>

  </div>
  <div class='clear'/>
</b:includable>
              <b:includable id='mobile-post' var='post'>
  <div class='date-outer'>
    <b:if cond='data:post.dateHeader'>
      <h2 class='date-header'><span><data:post.dateHeader/></span></h2>
    </b:if>
    <div class='date-posts'>
      <div class='post-outer'>

        <div class='post hentry uncustomized-post-template'>
          <a expr:name='data:post.id'/>
          <b:if cond='data:post.title'>
            <h3 class='post-title entry-title'>
              <b:if cond='data:post.link'>
                <a expr:href='data:post.link'><data:post.title/></a>
              <b:else/>
                <b:if cond='data:post.url'>
                  <b:if cond='data:blog.url != data:post.url'>
                    <a expr:href='data:post.url'><data:post.title/></a>
                  <b:else/>
                    <a expr:href='data:post.canonicalUrl'><data:post.title/></a>
                  </b:if>
                <b:else/>
                  <a expr:href='data:post.canonicalUrl'><data:post.title/></a>
                </b:if>
              </b:if>
            </h3>
          </b:if>

          <div class='post-header'>
            <div class='post-header-line-1'/>
          </div>

          <div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id'>
            <data:post.body/>
            <div style='clear: both;'/> <!-- clear for photos floats -->
          </div>

          <div class='post-footer'>
            <div class='post-footer-line post-footer-line-1'>
              <span class='post-author vcard'>
                <b:if cond='data:top.showAuthor'>
                  <b:if cond='data:post.authorProfileUrl'>
                    <span class='fn'>
                      <a expr:href='data:post.authorProfileUrl' rel='author' title='author profile'>
                        <data:post.author/>
                      </a>
                    </span>
                  <b:else/>
                    <span class='fn'><data:post.author/></span>
                  </b:if>
                </b:if>
              </span>

              <span class='post-timestamp'>
                <b:if cond='data:top.showTimestamp'>
                  <data:top.timestampLabel/>
                  <b:if cond='data:post.url'>
                    <a class='timestamp-link' expr:href='data:post.url' rel='bookmark' title='permanent link'><abbr class='published' expr:title='data:post.timestampISO8601'><data:post.timestamp/></abbr></a>
                  </b:if>
                </b:if>
              </span>

              <span class='post-comment-link'>
                <b:if cond='data:blog.pageType != &quot;item&quot;'>
                  <b:if cond='data:blog.pageType != &quot;static_page&quot;'>
                    <b:if cond='data:post.allowComments'>
                      <a class='comment-link' expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'><b:if cond='data:post.numComments == 1'>1 <data:top.commentLabel/><b:else/><data:post.numComments/> <data:top.commentLabelPlural/></b:if></a>
                    </b:if>
                  </b:if>
                </b:if>
              </span>
            </div>

            <div class='post-footer-line post-footer-line-2'>
              <b:if cond='data:top.showMobileShare'>
                <div class='mobile-link-button goog-inline-block' id='mobile-share-button'>
                  <a href='javascript:void(0);'><data:shareMsg/></a>
                </div>
              </b:if>
              <b:if cond='data:top.showDummy'>
                <div class='goog-inline-block dummy-container'><data:post.dummyTag/></div>
              </b:if>
            </div>

          </div>
        </div>

        <b:if cond='data:blog.pageType == &quot;static_page&quot;'>
          <b:if cond='data:post.showThreadedComments'>
            <b:include data='post' name='threaded_comments'/>
          <b:else/>
            <b:include data='post' name='comments'/>
          </b:if>
        </b:if>
        <b:if cond='data:blog.pageType == &quot;item&quot;'>
          <b:if cond='data:post.showThreadedComments'>
            <b:include data='post' name='threaded_comments'/>
          <b:else/>
            <b:include data='post' name='comments'/>
          </b:if>
        </b:if>
      </div>
    </div>
  </div>
</b:includable>
              <b:includable id='nextprev'>
  <div class='blog-pager' id='blog-pager'>
    <b:if cond='data:newerPageUrl'>
      <span id='blog-pager-newer-link'>
      <a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:newerPageTitle'><data:newerPageTitle/></a>
      </span>
    </b:if>

    <b:if cond='data:olderPageUrl'>
      <span id='blog-pager-older-link'>
      <a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:olderPageTitle'><data:olderPageTitle/></a>
      </span>
    </b:if>

    <a class='home-link' expr:href='data:blog.homepageUrl'><data:homeMsg/></a>

    <b:if cond='data:mobileLinkUrl'>
      <div class='blog-mobile-link'>
        <a expr:href='data:mobileLinkUrl'><data:mobileLinkMsg/></a>
      </div>
    </b:if>

  </div>
  <div class='clear'/>
</b:includable>
              <b:includable id='post' var='post'>
  <div class='post hentry'>
    <a expr:name='data:post.id'/>
    <b:if cond='data:post.title'>
      <h3 class='post-title entry-title'>
      <img src='http://lh6.ggpht.com/_T8RIM8eh9vY/TTmPIusKS_I/AAAAAAAATW4/zrZFbLFTks4/mark3.png'/>
      <b:if cond='data:post.link'>
        <a expr:href='data:post.link'><data:post.title/></a>
      <b:else/>
        <b:if cond='data:post.url'>
          <b:if cond='data:blog.url != data:post.url'>
            <a expr:href='data:post.url'><data:post.title/></a>
          <b:else/>
            <a expr:href='data:post.canonicalUrl'><data:post.title/></a>
          </b:if>
        <b:else/>
          <a expr:href='data:post.canonicalUrl'><data:post.title/></a>
        </b:if>
      </b:if>
      </h3>
    </b:if>

    <!--Facebook like top start-->
       <b:if cond='data:blog.pageType == &quot;item&quot;'>
       <br/>
         <table colspan='2' style='float:right;margin-right:5px;margin-top:10px;margin-bottom:10px;'>
           <tr><td style='padding-bottom:4px;'>
           <!--<div class='fb-like' data-layout='box_count' data-show-faces='true' data-width='100'/>-->
           <div class='fb-like' data-action='like' data-colorscheme='dark' data-layout='box_count' data-share='false' data-show-faces='true' data-size='large' data-width='100'/>
           </td><td style='padding-top:3px;'>
           <g:plusone annotation='bubble' expr:href='data:post.url' size='tall'/>
           </td></tr>
         </table>
       </b:if>
       <br/>
       <br/>
    <!--Facebook like top end-->

    <div class='post-header'>
    <div class='post-header-line-1'/>
    </div>

    <div class='post-body entry-content'>
      <data:post.body/>
      <div style='clear: both;'/> <!-- clear for photos floats -->
    </div>

    <b:if cond='data:post.hasJumpLink'>
      <div class='jump-link'>
        <a expr:href='data:post.url + &quot;#more&quot;' expr:title='data:post.title'><span class='readmore'><!--<data:post.jumpText/>--><img onmouseout='this.src=&quot;https://lh3.googleusercontent.com/-c66fBKKU9Ns/U37AmeNX1II/AAAAAAAB54I/5R7CXWjjU04/s150/more-yellow.png&quot;' onmouseover='this.src=&quot;https://lh6.googleusercontent.com/-PILTqhHi6Z4/U37AmY6S-MI/AAAAAAAB54E/rmZk5ynNOYg/s150/more-white.png&quot;' src='https://lh3.googleusercontent.com/-c66fBKKU9Ns/U37AmeNX1II/AAAAAAAB54I/5R7CXWjjU04/s150/more-yellow.png'/></span></a>
        <br/><br/>
      </div>
    </b:if>

    <div class='post-footer'>
    <div class='post-footer-line post-footer-line-1'>
    <!--Facebook like bottom start-->
       <b:if cond='data:blog.pageType == &quot;item&quot;'>
       <br/>
         <table colspan='2' style='float:right;margin-right:5px;'>
           <tr><td style='padding-bottom:4px;'>
           <!--<div class='fb-like' data-layout='box_count' data-show-faces='true' data-width='100'/>-->
           <div class='fb-like' data-action='like' data-colorscheme='dark' data-layout='box_count' data-share='false' data-show-faces='true' data-size='large' data-width='100'/>
           </td><td style='padding-top:3px;'>
           <g:plusone annotation='bubble' expr:href='data:post.url' size='tall'/>
           </td></tr>
         </table>
       </b:if>
    <!--Facebook like bottom end-->
<!-- Related Posts with Thumbnails Code Start-->
<!-- remove --><b:if cond='data:blog.pageType == &quot;item&quot;'>
<div id='related-posts'>
<b:loop values='data:post.labels' var='label'>
<b:if cond='data:label.isLast != &quot;true&quot;'>
</b:if>
<br/>
<script expr:src='&quot;/feeds/posts/default/-/&quot; + data:label.name + &quot;?alt=json-in-script&amp;callback=related_results_labels_thumbs&amp;max-results=10&quot;' type='text/javascript'/></b:loop>
<script type='text/javascript'>
removeRelatedDuplicates_thumbs();
printRelatedLabels_thumbs(&quot;<data:post.url/>&quot;);
</script>
</div><div style='clear:both'/>
<!-- remove --></b:if> 
<b:if cond='data:blog.url == data:blog.homepageUrl'><b:if cond='data:post.isFirstPost'>
<!--<a href='http://www.bloggerplugins.org/2009/08/related-posts-thumbnails-blogger-widget.html'><img alt='Related Posts Widget For Blogger with Thumbnails' src='http://image.bloggerplugins.org/blogger-widgets.png' style='border: 0'/></a><a href='http://bloggertemplates.bloggerplugins.org/'><img alt='Blogger Templates' src='http://image.bloggerplugins.org/blogger-templates.png' style='border: 0'/></a>-->
</b:if></b:if>
<br/>
<!-- Related Posts with Thumbnails Code End-->
          <span class='post-author vcard'>
        <b:if cond='data:top.showAuthor'>
          <data:top.authorLabel/>
          <a class='url fn author' href='https://plus.google.com/103231399619227457717?rel=author'><span class='fn'><data:post.author/></span></a>
        </b:if>
      </span> <span class='post-timestamp updated'>
        <b:if cond='data:top.showTimestamp'>
          <data:top.timestampLabel/>
        <b:if cond='data:post.url'>
          <a class='timestamp-link' expr:href='data:post.url' rel='bookmark' title='permanent link'><abbr class='published' expr:title='data:post.timestampISO8601'><data:post.timestamp/></abbr></a>
          <!-- Fixed for display post update time -->
          <b:if cond='data:blog.pageType == &quot;item&quot;'>
            <script expr:src='&quot;/feeds/posts/default/&quot; + data:post.id + &quot;?alt=json-in-script&amp;callback=showPostUpdateTime&quot;' type='text/javascript'/>
          </b:if>

          <!-- 文章瀏覽次數 start-->
          <span> | 文章瀏覽次數&#65306;</span>
          <span expr:id='&quot;pv1&quot; + data:post.canonicalUrl' style='vertical-align: middle;' title='文章瀏覽數'/>
          <script>
            var pvCount = {};
            pvCount.url = &quot;<data:post.canonicalUrl/>&quot;;
            pvCount.home = &quot;<data:blog.canonicalHomepageUrl/>&quot;;
            document.getElementById(&quot;pv1&quot; + pvCount.url).id = (&quot;pv1&quot; + pvCount.url).toLowerCase();
            //<![CDATA[
            pvCount.pv = "pv1";
            pvCount.sheet = "0AhS3m96FD69idDVZMV9vUzU1d0VNZlBzdm1NQU8zTEE";
            pvCount.img = "http://1.bp.blogspot.com/-rIo97gL0AWU/UOt7GnEN8BI/AAAAAAAAFnc/DW_0YFJ-F1k/s15/stats.png";
            pvCount.cheat = 1;
     
            (function(){var c="/"+pvCount.url.replace(pvCount.home,""),b="https://spreadsheets.google.com/feeds/list/"+pvCount.sheet+"/od8/public/values?alt=json-in-script&q="+c+"&callback=pvCount.run";var a=document.createElement("script");a.src=b;document.documentElement.firstChild.appendChild(a)})();
     
            pvCount.run=function(d){var f=d.feed.entry,a=f.length,h=pvCount.cheat,c=0,e=0,b,g;for(;c<a;c++){e=e+Math.round(f[c].gsx$view.$t*h)}b=unescape("%3Ca%20href%3D%27http%3A//wayne-fu.blogspot.com/2013/07/blogger-post-page-views-update.html%27%20target%3D%27_blank%27%3E")+"</a> "+e;g=pvCount.pv+pvCount.home+f[0].gsx$path.$t.split("?")[0].substring(1).toLowerCase();document.getElementById(g).innerHTML=b};
            //]]>
          </script>
          <span> | </span>
          <!-- 文章瀏覽次數 end-->

        </b:if>
        </b:if>
      </span>
      <span class='post-comment-link'>
        <b:if cond='data:blog.pageType != &quot;item&quot;'>
          <b:if cond='data:blog.pageType != &quot;static_page&quot;'>
            <b:if cond='data:post.allowComments'>
              <a class='comment-link' expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'><b:if cond='data:post.numComments == 1'>1 <data:top.commentLabel/><b:else/><data:post.numComments/> <data:top.commentLabelPlural/></b:if></a>
            </b:if>
          </b:if>
        </b:if>
      </span>
      </div>

      <div class='post-footer-line post-footer-line-2'>
      <span class='post-labels'>
        <b:if cond='data:post.labels'>
          <data:postLabelsLabel/>
          <b:loop values='data:post.labels' var='label'>
           	<b:if cond='data:blog.isMobile == &quot;true&quot;'>
              <a expr:href='data:label.url + &quot;&amp;max-results=10&quot;' rel='tag'><data:label.name/></a><b:if cond='data:label.isLast != &quot;true&quot;'>,</b:if>
            <b:else/>
             	<a expr:href='data:label.url + &quot;?&amp;max-results=10&quot;' rel='tag'><data:label.name/></a><b:if cond='data:label.isLast != &quot;true&quot;'>,</b:if>
            </b:if>
          </b:loop>
        </b:if>

        <!-- email post links -->
        <b:if cond='data:post.emailPostUrl'>
          <span class='item-action'>
          <a expr:href='data:post.emailPostUrl' expr:title='data:top.emailPostMsg'>
            <img alt='' class='icon-action' height='13' src='http://img1.blogblog.com/img/icon18_email.gif' width='18'/>
          </a>
          </span>
        </b:if>
        <!-- quickedit pencil -->
        <b:include data='post' name='postQuickEdit'/>
      </span>
      <span class='post-icons'>
        <!-- share buttons -->
        <div class='post-share-buttons'>
          <b:if cond='data:post.sharePostUrl'>
            <b:include data='post' name='shareButtons'/>
          </b:if>
        </div>
      </span>
      </div>

      <div class='post-footer-line post-footer-line-3'>
        <!-- Sidebar Next Post & Previous Post START -->
        <b:if cond='data:blog.pageType == &quot;item&quot; AND data:blog.isMobile == &quot;false&quot;'>
          <nav class='nav-growpop'><b:if cond='data:olderPageUrl'><a class='prev' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;'><span class='icon-wrap'><svg class='icon' height='24' viewBox='0 0 64 64' width='24'><use xlink:href='#arrow-left-2'/></svg></span><div><h3 class='older-link' expr:href='data:olderPageUrl'/></div></a></b:if><b:if cond='data:newerPageUrl'><a class='next' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;'><span class='icon-wrap'><svg class='icon' height='24' viewBox='0 0 64 64' width='24'><use xlink:href='#arrow-right-2'/></svg></span><div><h3 class='newer-link' expr:href='data:newerPageUrl'/></div></a></b:if></nav><div class='svg-wrap'><svg height='64' viewBox='0 0 64 64' width='64'><path d='M26.667 10.667q1.104 0 1.885 0.781t0.781 1.885q0 1.125-0.792 1.896l-14.104 14.104h41.563q1.104 0 1.885 0.781t0.781 1.885-0.781 1.885-1.885 0.781h-41.563l14.104 14.104q0.792 0.771 0.792 1.896 0 1.104-0.781 1.885t-1.885 0.781q-1.125 0-1.896-0.771l-18.667-18.667q-0.771-0.813-0.771-1.896t0.771-1.896l18.667-18.667q0.792-0.771 1.896-0.771z' id='arrow-left-2'/></svg><svg height='64' viewBox='0 0 64 64' width='64'><path d='M37.333 10.667q1.125 0 1.896 0.771l18.667 18.667q0.771 0.771 0.771 1.896t-0.771 1.896l-18.667 18.667q-0.771 0.771-1.896 0.771-1.146 0-1.906-0.76t-0.76-1.906q0-1.125 0.771-1.896l14.125-14.104h-41.563q-1.104 0-1.885-0.781t-0.781-1.885 0.781-1.885 1.885-0.781h41.563l-14.125-14.104q-0.771-0.771-0.771-1.896 0-1.146 0.76-1.906t1.906-0.76z' id='arrow-right-2'/></svg></div>
          <script type='text/javascript'>
            //<![CDATA[
            (function(a){var c=a("h3.newer-link"),d=a("h3.older-link");a.get(c.attr("href"),function(b){c.html("<span>下一篇文章</span><h3>"+a(b).find(".post h3.post-title").text()+"</h3>")},"html");a.get(d.attr("href"),function(b){d.html("<span>前一篇文章</span><h3>"+a(b).find(".post h3.post-title").text()+"</h3>")},"html")})(jQuery);
            //]]>
        </script>
        </b:if>
      <!-- Sidebar Next Post & Previous Post END -->
      </div>
    </div>
  </div>
</b:includable>
              <b:includable id='postQuickEdit' var='post'>
  <b:if cond='data:post.editUrl'>
    <span expr:class='&quot;item-control &quot; + data:post.adminClass'>
      <a expr:href='data:post.editUrl' expr:title='data:top.editPostMsg'>
        <img alt='' class='icon-action' height='18' src='https://resources.blogblog.com/img/icon18_edit_allbkg.gif' width='18'/>
      </a>
    </span>
  </b:if>
</b:includable>
              <b:includable id='shareButtons' var='post'>
  <b:if cond='data:top.showEmailButton'><a class='goog-inline-block share-button sb-email' expr:href='data:post.sharePostUrl + &quot;&amp;target=email&quot;' expr:title='data:top.emailThisMsg' target='_blank'>
      <span class='share-button-link-text'><data:top.emailThisMsg/></span>
  </a></b:if><b:if cond='data:top.showBlogThisButton'><a class='goog-inline-block share-button sb-blog' expr:href='data:post.sharePostUrl + &quot;&amp;target=blog&quot;' expr:onclick='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=270,width=475\&quot;); return false;&quot;' expr:title='data:top.blogThisMsg' target='_blank'>
      <span class='share-button-link-text'><data:top.blogThisMsg/></span>
  </a></b:if><b:if cond='data:top.showTwitterButton'><a class='goog-inline-block share-button sb-twitter' expr:href='data:post.sharePostUrl + &quot;&amp;target=twitter&quot;' expr:title='data:top.shareToTwitterMsg' target='_blank'>
      <span class='share-button-link-text'><data:top.shareToTwitterMsg/></span>
  </a></b:if><b:if cond='data:top.showFacebookButton'><a class='goog-inline-block share-button sb-facebook' expr:href='data:post.sharePostUrl + &quot;&amp;target=facebook&quot;' expr:onclick='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=430,width=640\&quot;); return false;&quot;' expr:title='data:top.shareToFacebookMsg' target='_blank'>
      <span class='share-button-link-text'><data:top.shareToFacebookMsg/></span>
  </a></b:if><b:if cond='data:top.showOrkutButton'><a class='goog-inline-block share-button sb-orkut' expr:href='data:post.sharePostUrl + &quot;&amp;target=orkut&quot;' expr:title='data:top.shareToOrkutMsg' target='_blank'>
      <span class='share-button-link-text'><data:top.shareToOrkutMsg/></span>
  </a></b:if><b:if cond='data:top.showBuzzButton'><a class='goog-inline-block share-button sb-buzz' expr:href='data:post.sharePostUrl + &quot;&amp;target=buzz&quot;' expr:onclick='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=415,width=690\&quot;); return false;&quot;' expr:title='data:top.shareToBuzzMsg' target='_blank'>
      <span class='share-button-link-text'><data:top.shareToBuzzMsg/></span>
  </a></b:if>
  <script src='https://apis.google.com/js/plusone.js' type='text/javascript'/>
  <b:if cond='data:top.showDummy'>
    <div class='goog-inline-block dummy-container'><data:post.dummyTag/></div>
  </b:if>
</b:includable>
              <b:includable id='status-message'>
  <b:if cond='data:navMessage'>
  <div class='status-msg-wrap'>
    <div class='status-msg-body'>
      <data:navMessage/>
    </div>
    <div class='status-msg-border'>
      <div class='status-msg-bg'>
        <div class='status-msg-hidden'><data:navMessage/></div>
      </div>
    </div>
  </div>
  <div style='clear: both;'/>
  </b:if>
</b:includable>
              <b:includable id='threaded-comment-form' var='post'>
  <div class='comment-form'>
    <a name='comment-form'/>
    <b:if cond='data:mobile'>
      <p><data:blogCommentMessage/></p>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight' frameborder='0' id='comment-editor' name='comment-editor' src='' style='display: none' width='100%'/>
    <b:else/>
      <p><data:blogCommentMessage/></p>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight' frameborder='0' id='comment-editor' name='comment-editor' src='' width='100%'/>
    </b:if>
    <data:post.cmtfpIframe/>
    <script type='text/javascript'>
      BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;);
    </script>
  </div>
</b:includable>
              <b:includable id='threaded_comment_js' var='post'>
  <script async='async' expr:src='data:post.commentSrc' type='text/javascript'/>

  <script type='text/javascript'>
    (function() {
      var items = <data:post.commentJso/>;
      var msgs = <data:post.commentMsgs/>;
      var postId = &#39;<data:post.id/>&#39;;
      var feed = &#39;<data:post.commentFeed/>&#39;;
      var authorName = &#39;<data:post.author/>&#39;;
      var authorUrl = &#39;<data:post.authorUrl/>&#39;;
      var blogId = &#39;<data:top.id/>&#39;;
      var baseUri = &#39;<data:post.commentBase/>&#39;;
      var maxThreadDepth = &#39;<data:post.commentMaxThreadDepth/>&#39;;

// <![CDATA[
      feed += '?alt=json&v=2&orderby=published&reverse=false&max-results=50';
      var cursor = null;
      if (items && items.length > 0) {
        cursor = parseInt(items[items.length - 1].timestamp) + 1;
      }

      var bodyFromEntry = function(entry) {
        if (entry.gd$extendedProperty) {
          for (var k in entry.gd$extendedProperty) {
            if (entry.gd$extendedProperty[k].name == 'blogger.contentRemoved') {
              return '<span class="deleted-comment">' + entry.content.$t + '</span>';
            }
          }
        }
        return entry.content.$t;
      }

      var parse = function(data) {
        cursor = null;
        var comments = [];
        if (data && data.feed && data.feed.entry) {
          for (var i = 0, entry; entry = data.feed.entry[i]; i++) {
            var comment = {};
            // comment ID, parsed out of the original id format
            var id = /blog-(\d+).post-(\d+)/.exec(entry.id.$t);
            comment.id = id ? id[2] : null;
            comment.body = bodyFromEntry(entry);
            comment.timestamp = Date.parse(entry.published.$t) + '';
            if (entry.author && entry.author.constructor === Array) {
              var auth = entry.author[0];
              if (auth) {
                comment.author = {
                  name: (auth.name ? auth.name.$t : undefined),
                  profileUrl: (auth.uri ? auth.uri.$t : undefined),
                  avatarUrl: (auth.gd$image ? auth.gd$image.src : undefined)
                };
              }
            }
            if (entry.link) {
              if (entry.link[2]) {
                comment.link = comment.permalink = entry.link[2].href;
              }
              if (entry.link[3]) {
                var pid = /.*comments\/default\/(\d+)\?.*/.exec(entry.link[3].href);
                if (pid && pid[1]) {
                  comment.parentId = pid[1];
                }
              }
            }
            comment.deleteclass = 'item-control blog-admin';
            if (entry.gd$extendedProperty) {
              for (var k in entry.gd$extendedProperty) {
                if (entry.gd$extendedProperty[k].name == 'blogger.itemClass') {
                  comment.deleteclass += ' ' + entry.gd$extendedProperty[k].value;
                }
              }
            }
            comments.push(comment);
          }
        }
        return comments;
      };

      var paginator = function(callback) {
        if (hasMore()) {
          var url = feed;
          if (cursor) {
            url += '&published-min=' + new Date(cursor).toISOString();
          }
          window.bloggercomments = function(data) {
            var parsed = parse(data);
            cursor = parsed.length < 50 ? null
                : parseInt(parsed[parsed.length - 1].timestamp) + 1
            callback(parsed);
            window.bloggercomments = null;
          }
          url += '&callback=bloggercomments';
          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = url;
          document.getElementsByTagName('head')[0].appendChild(script);
        }
      };
      var hasMore = function() {
        return !!cursor;
      };
      var getMeta = function(key, comment) {
        if ('iswriter' == key) {
          var matches = !!comment.author
              && comment.author.name == authorName
              && comment.author.profileUrl == authorUrl;
          return matches ? 'true' : '';
        } else if ('deletelink' == key) {
          return baseUri + '/delete-comment.g?blogID=' + blogId + '&postID=' + comment.id;
        } else if ('deleteclass' == key) {
          return comment.deleteclass;
        }
        return '';
      };

      var replybox = null;
      var replyUrlParts = null;
      var replyParent = undefined;

      var onReply = function(commentId, domId) {
        if (replybox == null) {
          // lazily cache replybox, and adjust to suit this style:
          replybox = document.getElementById('comment-editor');
          if (replybox != null) {
            replybox.height = '250px';
            replybox.style.display = 'block';
            replyUrlParts = replybox.src.split('#');
          }
        }
        if (replybox && (commentId !== replyParent)) {
          document.getElementById(domId).insertBefore(replybox, null);
          replybox.src = replyUrlParts[0]
              + (commentId ? '&parentID=' + commentId : '')
              + '#' + replyUrlParts[1];
          replyParent = commentId;
        }
      };

      var hash = (window.location.hash || '#').substring(1);
      var startThread, targetComment;
      if (/^comment-form_/.test(hash)) {
        startThread = hash.substring('comment-form_'.length);
      } else if (/^c[0-9]+$/.test(hash)) {
        targetComment = hash.substring(1);
      }

      // Configure commenting API:
      var configJso = {
        'maxDepth': maxThreadDepth
      };
      var provider = {
        'id': postId,
        'data': items,
        'loadNext': paginator,
        'hasMore': hasMore,
        'getMeta': getMeta,
        'onReply': onReply,
        'rendered': true,
        'initComment': targetComment,
        'initReplyThread': startThread,
        'config': configJso,
        'messages': msgs
      };

      var render = function() {
        if (window.goog && window.goog.comments) {
          var holder = document.getElementById('comment-holder');
          window.goog.comments.render(holder, provider);
        }
      };

      // render now, or queue to render when library loads:
      if (window.goog && window.goog.comments) {
        render();
      } else {
        window.goog = window.goog || {};
        window.goog.comments = window.goog.comments || {};
        window.goog.comments.loadQueue = window.goog.comments.loadQueue || [];
        window.goog.comments.loadQueue.push(render);
      }
    })();
// ]]>
  </script>
</b:includable>
              <b:includable id='threaded_comments' var='post'>
  <div class='comments' id='comments'>
    <a name='comments'/>
    <h4><data:post.commentLabelFull/>:</h4>

    <div class='comments-content'>
      <b:include cond='data:post.embedCommentForm' data='post' name='threaded_comment_js'/>
      <div id='comment-holder'>
         <data:post.commentHtml/>
      </div>
    </div>

    <p class='comment-footer'>
      <b:if cond='data:post.allowNewComments'>
        <b:include data='post' name='threaded-comment-form'/>
      <b:else/>
        <data:post.noNewCommentsText/>
      </b:if>
    </p>

    <b:if cond='data:showCmtPopup'>
      <div id='comment-popup'>
        <iframe allowtransparency='true' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'>
        </iframe>
      </div>
    </b:if>

    <div id='backlinks-container'>
    <div expr:id='data:widget.instanceId + &quot;_backlinks-container&quot;'>
      <b:include cond='data:post.showBacklinks' data='post' name='backlinks'/>
    </div>
    </div>
  </div>
</b:includable>
            </b:widget>
          </b:section>
        </div>
        </div>

        <div class='column-left-outer'>
        <div class='column-left-inner'>
          <aside>
          <macro:include id='main-column-left-sections' name='sections'>
            <macro:param default='0' name='num' value='0'/>
            <macro:param default='sidebar-left' name='idPrefix'/>
            <macro:param default='sidebar' name='class'/>
            <macro:param default='true' name='includeBottom'/>
          </macro:include>
          </aside>
        </div>
        </div>

        <div class='column-right-outer'>
        <div class='column-right-inner'>
          <aside>
          <macro:include id='main-column-right-sections' name='sections'>
            <macro:param default='2' name='num' value='1'/>
            <macro:param default='sidebar-right' name='idPrefix'/>
            <macro:param default='sidebar' name='class'/>
            <macro:param default='true' name='includeBottom'/>
          </macro:include>
          </aside>
        </div>
        </div>

        </div>

        <div style='clear: both'/>
      <!-- columns -->
      </div>

    <!-- main -->
    </div>
    </div>
    <div class='main-cap-bottom cap-bottom'>
      <div class='cap-left'/>
      <div class='cap-right'/>
    </div>
    </div>

    <footer>
    <div class='footer-outer'>
    <div class='footer-cap-top cap-top'>
      <div class='cap-left'/>
      <div class='cap-right'/>
    </div>
    <div class='fauxborder-left footer-fauxborder-left'>
    <div class='fauxborder-right footer-fauxborder-right'/>
    <div class='region-inner footer-inner'>
      <macro:include id='footer-sections' name='sections'>
        <macro:param default='2' name='num'/>
        <macro:param default='footer' name='idPrefix'/>
        <macro:param default='foot' name='class'/>
        <macro:param default='false' name='includeBottom'/>
      </macro:include>
      <!-- outside of the include in order to lock Attribution widget -->
      <b:section class='foot' id='footer-3' showaddelement='no'>
        <b:widget id='Attribution1' locked='true' title='' type='Attribution'>
          <b:widget-settings>
            <b:widget-setting name='copyright'><![CDATA[2010~2017  Zaphkiel's Journey]]></b:widget-setting>
          </b:widget-settings>
          <b:includable id='main'>
    <div class='widget-content' style='text-align: center;'>
      <b:if cond='data:attribution != &quot;&quot;'>
       <data:attribution/>
      </b:if>
    </div>

    <b:include name='quickedit'/>
  </b:includable>
        </b:widget>
      </b:section>
    </div>
    </div>
    <div class='footer-cap-bottom cap-bottom'>
      <div class='cap-left'/>
      <div class='cap-right'/>
    </div>
    </div>
    </footer>

  <!-- content -->
  </div>
  </div>
  <div class='content-cap-bottom cap-bottom'>
    <div class='cap-left'/>
    <div class='cap-right'/>
  </div>
  </div>
  </div>

  <script type='text/javascript'>
    window.setTimeout(function() {
        document.body.className = document.body.className.replace(&#39;loading&#39;, &#39;&#39;);
      }, 10);
  </script>

<!--threaded commenting start-->
<b:if cond='data:blog.pageType == &quot;item&quot;'>
<style type='text/css'>
.admin-comment {
background: #260e0e;
margin: 8px 8px 8px 0;
padding: 3px 3px 0 3px;
border: 2px solid #505050; 
font-size:16px;
}
.admin-comment:hover {
background: #260e0e;
border: 2px solid #909090;
font-size:16px;
}
.normal-comment {
background: #260e0e;
padding: 3px 3px 0 3px;
margin: 8px 8px 8px 0;
border: 2px solid #505050;
font-size:16px;
}
.normal-comment:hover {
background: #260e0e;
padding: 3px 3px 0 3px;
margin: 8px 8px 8px 0;
border: 2px solid #909090; 
font-size:16px;
}
.comment-reply-link { font-weight:bold !important; margin-right:1em; }
#comments-block .comment-footer { margin-bottom: 2px; margin-top:0px;}
.comment-me {color:white;}
.comment-other {color:white;}
</style>
<script type='text/javascript'>
//<![CDATA[
// Threaded comments for Blogger v2
// by MS-potilas 2012
// Supports "Blogger threading" (feed) and has easy install.
// See http://yabtb.blogspot.com/2012/01/blogger-threaded-commenting-hack-v2.html
//
// config:
var maxThreadingLevels = 5;      // limit to 2 to get Blogger-like threading; 3-4 is good, too
var useBloggerThreading = true;    // read Blogger threading information from feed
var preferBloggerThreading = true; // prefer Blogger threading over @nick threading
var threadIndent = 60;             // pixels/level
var replyCommentText = "回覆";
var replyToUser = "回覆給";
var deleteCommentText = "";        // leave empty to use default (img)
var useAdminPic = true;            // use same img as Blogger threaded comments
// config end
// two xpand/collapse hack functions
function getCmtBodyElm(elm) {
  if(elm.className=="admin-comment" || elm.className=="normal-comment") elm=elm.firstChild;
  while(elm && (elm.nodeType != 1 || (elm.className != "comment-body" && elm.className != "comment-body-author"))) elm = elm.nextSibling;
  return elm;
}
function tglCmt(event, elm) {
  var txt='';
  if(window.getSelection) txt = window.getSelection();
  else if (document.getSelection) txt = document.getSelection();
  else if (document.selection) txt = document.selection.createRange().text;
  var target = event.target ? event.target : event.srcElement;
  if(target.nodeType != 1) target=target.parentNode;
  if(txt != '' || target.nodeName.toLowerCase() == 'a' || target.nodeName.toLowerCase() == 'img') return;
  $(getCmtBodyElm(elm)).slideToggle();
}
var hlInstalled; 
if(!($(".normal-comment").length+$(".admin-comment").length)) hlInstalled=false;
else hlInstalled=true;
var cmtblock = $("#comments-block");
var cmts = $("dt", cmtblock);
var hrefr = $('.comment-footer a[href*="/comment.g"]:last').attr("href");
if(!hrefr || hrefr=="") { 
  hrefr = "";
  if($('.blogger-comment-from-post').length)
    hrefr=$('#comment-editor').attr("src").match("^.*postID=[^&]+")[0].replace("comment-iframe.g", "comment.g");
}
var onclk = $('.comment-footer a[href*="/comment.g"]:last').attr("onclick");
if(!onclk) onclk = "";
cmts.each(function() {
  var c0=$(this);
  var c1=c0.next();
  var c2=c1.next();
  var cid=c0.attr("id");
  var author = $(".avatar-image-container img",c0).attr("title");
  var cdelete = $(".comment-delete", c2);
  if(deleteCommentText != "") cdelete.html(deleteCommentText);
  var cdeletep = cdelete.parent();
  cdeletep.detach();
  var ctime = c2.children(":first");
  ctime.detach();
  c0.append(ctime);
  var creply = $(".comment-reply-link", c0);
  // add reply to comment hack if needed
  if(!creply.length) { 
    if(hrefr != "" && author != "") {
      var onc='"'+onclk+'"';
      if(onclk.search('"') > -1) onc="'"+onclk+"'";
      var href = hrefr+"&postBody=%40%3Ca%20href%3D%22%23" + cid + "%22%3E" + author + "%3C%2Fa%3E%26%2332%3B#form";
      creply = $('<a href="'+href+'" onclick='+onc+' class="comment-reply-link" title="'+replyToUser+author+'">'+replyCommentText+'</a>');
    }
  }
  else {
    creply.detach();
    creply.css("float", "");
    creply.html(replyCommentText);
  }
  c2.append(creply);
  c2.append(cdeletep);
  var txtNode = c0.children()[0];
  while(txtNode && (txtNode.nodeType != 3 || (txtNode.nodeType == 3 &&  txtNode.nodeValue.search("...")==-1))) txtNode=txtNode.nextSibling;
  if(txtNode) {
    var txtWrote = " " + txtNode.nodeValue.replace(/\s*\.\.\.\s*$/, "") + " ";
    txtNode.nodeValue = txtWrote;
  }
  if(c0.hasClass("blog-author") && useAdminPic) {
    var txtAuthor = c0.children('a[href*="profile"]:first').html();
    c0.children('.avatar-image-container + a').after(' <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAAd0SU1FB9sLFwMeCjjhcOMAAAD+SURBVDjLtZSvTgNBEIe/WRRnm3U8RC1neQdsm1zSBIU9VVF1FkUguQQsD9ITmD7ECZIJSE4OZo9stoVjC/zc7ky+zH9hXwVwDpTAWWLrgS3QAe8AZgaAJI5zYAmc8r0G4AHYHQKVwII8PZrZFsBFkeRCABYiMh9B' + 'RUhnSkPTNCtVXYXURi1FpBDgArj8QU1eVXUzfnjv7yP7kwu1mYrkWlU33vs1QNu2qU8pwN0U' + 'pKoqokjWwCztrMuBhEhmh8bD5UDqur75asbcX0BGUB9/HAMB+r32hznJgXy2v0sGLBcyAJ1EK3LFcbo1s91JeLwAbwGYu7TP/3ZGfnXYPgAVNngtqatUNgAAAABJRU5ErkJggg==" title="' + txtAuthor + '" style="margin:-3px 2px -5px" /> ');
  }
  // Add "highlight comments hack" if needed:
  if(!hlInstalled) {
    cmtblock.append('<div id="x'+cid+'" />');
    c0.detach();
    c1.detach();
    c2.detach();
    var newdiv = $("#comments-block div:last");
    newdiv.append(c0);
    newdiv.append(c1);
    newdiv.append(c2);
    if(c0.hasClass("blog-author")) newdiv.addClass("admin-comment");
      else newdiv.addClass("normal-comment");
    newdiv.click(function(event) { tglCmt(event, this); } ); // xpand/collapse hack
  }
});
// and finally the function to thread comments, pretty much the same as 2011 version:
function threadComments(json) {
  var replyToCommentID = [];
  if(useBloggerThreading && json)
    if (json.feed.entry != null ) { 
    for(var i=0 ; i < json.feed.entry.length ; i++) {
      var entry = json.feed.entry[i];
      var rela = "";
      var self = "";
      for (var k=0; k<entry.link.length; k++) {
        if (entry.link[k].rel == 'related') rela = entry.link[k].href.split("/comments/default/")[1];
        if (entry.link[k].rel == 'self') self = entry.link[k].href.split("/comments/default/")[1];
      }
      if(rela!="" && self!="") replyToCommentID[self] = rela;
    }
    }
  else
    preferBloggerThreading = false;
  var clss = [];
  var elements = document.getElementsByTagName("*");
  for(var i=0 ; i<elements.length ; i++)
    if(elements[i].className=="normal-comment" || elements[i].className=="admin-comment")
      clss.push(elements[i]);
  var prevAuthor = "";
  var prevNode = null;
  var authornodes = {};
  for(var x=0 ; x < clss.length; x++ ) {
    var moved = false;
    var width = clss[x].scrollWidth;
    clss[x].style.position = "relative";
    clss[x].style.left = "0px";
    var thisID = clss[x].id.split("c")[1];
    var author = clss[x].innerHTML.toLowerCase().indexOf("%22%3e");
    author = clss[x].innerHTML.substr(author+6);
    if(author.toLowerCase().indexOf("%3c%2fa%3e") > -1)
      author = author.substr(0, author.toLowerCase().indexOf("%3c%2fa%3e"));
    else
      author = "";
    if(author == "") 
      author=$("#xc"+thisID+" .avatar-image-container img").attr("title");
    var cmtChild = clss[x].firstChild;
    while(cmtChild && !/(^| )comment-body( |$)/.test(cmtChild.className) && !/(^| )comment-body-author( |$)/.test(cmtChild.className))
      cmtChild = cmtChild.nextSibling;
    var txt = cmtChild.innerHTML;
    var elm = null;
    // from feed:
    if(preferBloggerThreading && replyToCommentID[thisID] && replyToCommentID[thisID] != "")
      elm = document.getElementById("xc"+replyToCommentID[thisID]);
    if(!elm) {
      var cmtID = txt.toLowerCase().indexOf("href=\"#");
      if(cmtID == -1) cmtID = txt.toLowerCase().indexOf("href=\"" + (window.location.href.toLowerCase()).split("#",1)[0] + "#");
      if(cmtID > -1) {
        var commentid = "x" + txt.substr(cmtID).split("#")[1].split("\"")[0];
        elm = document.getElementById(commentid);
      }
    }  
    if(!elm && prevAuthor != "" && x && prevNode)
    {
      if(txt.indexOf("@" + prevAuthor) > -1)
        elm = prevNode;
      else if(prevAuthor.length > 3 && txt.toLowerCase().indexOf("@" + prevAuthor.toLowerCase()) > -1)
        elm = prevNode;
      else if(prevAuthor.split(/[\s,-.]+/)[0].length > 3 && txt.toLowerCase().indexOf("@" + prevAuthor.split(/[\s,-.]+/)[0].toLowerCase()) > -1)
        elm = prevNode;
    }
    if(!elm)
      for(var tmp in authornodes)
        if(txt.indexOf("@" + tmp) > -1)
          elm = authornodes[tmp];
    if(!elm && replyToCommentID[thisID] && replyToCommentID[thisID] != "")
      elm = document.getElementById("xc"+replyToCommentID[thisID]);
    if(elm) {
      var ind = 0;
      if(elm.style.left != "")
        ind = parseInt(elm.style.left);
      if(ind < 300 && parseInt(ind / threadIndent)+1 < maxThreadingLevels) {
        if(ind < 140)
          ind = ind + threadIndent;
        else
          ind = ind + parseInt(threadIndent / 3);
      }
      var parNode = elm.parentNode;
      var place = elm;
      var xpos;
      do {
        do place = place.nextSibling;
        while(place && place.nodeType != 1);
        if(place && place.style && place.style.left != "")
          xpos = parseInt(place.style.left);
        else
          xpos = 0;
      } while(place && xpos >= ind);
      if(place != clss[x]) {
        parNode.insertBefore(clss[x], place);
        moved = true;
      }
      clss[x].style.position = "relative";
      clss[x].style.left = ind + "px";
      width = width - ind;
    }
    clss[x].style.width = width + "px";
    if(!moved) {
      prevAuthor = author;
      prevNode = clss[x];
    }
    if(author != "")
      authornodes[author] = clss[x];
  }
}
var cfeedbase = $('link[href$="comments/default"]').attr("href").split("/default")[0];
if(useBloggerThreading && $('a[href*="'+cfeedbase+'"]').length)
  document.write('<script type="text/javascript" src="'+cfeedbase+'/summary?max-results=500&alt=json-in-script&callback=threadComments"></'+'script>');
else threadComments();
//]]>
</script>
</b:if>
<!--threaded commenting end-->

<!-- Adsense 安裝懶人包 start -->
<!--
    <b:if cond='data:blog.pageType == &quot;index&quot;'>
    <script>
    //<![CDATA[
    /* 文末位置 */
    (function($) {
    var width = 800,
    height = 200,
    ad_client = "ca-pub-5973388060474312",
    ad_slot = "5650752950",
    $target = $(".post-body"),
    style = "margin: 20px auto; text-align: center;",
    html = "<div style='" + style + "'><ins class='adsbygoogle' style='display:inline-block;width:" + width + "px;height:" + height + "px' data-ad-client='" + ad_client + "' data-ad-slot='" + ad_slot + "'></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script></div>";
    $target.after(html);
    })(jQuery);
    //]]>
    </script>
    </b:if>
-->
    <b:if cond='data:blog.pageType == &quot;static_page&quot;'>
    <script>
    //<![CDATA[
    /* 文章標題之後 */
    /*
    (function($) {
    var width = 800,
    height = 50,
    ad_client = "ca-pub-5973388060474312",
    ad_slot = "1080952551",
    $target = $(".post-title"),
    style = "margin: 20px auto; text-align: center;",
    html = "<div style='" + style + "'><ins class='adsbygoogle' style='display:inline-block;width:100%;height:" + height + "px' data-ad-client='" + ad_client + "' data-ad-slot='" + ad_slot + "'></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script></div>";
    $target.after(html);
    })(jQuery);
    */
    /* 文末位置 */
    (function($) {
    var width = 800,
    height = 200,
    ad_client = "ca-pub-5973388060474312",
    ad_slot = "5650752950",
    $target = $(".post-body"),
    style = "margin: 20px auto; text-align: center;",
    html = "<div style='" + style + "'><ins class='adsbygoogle' style='display:inline-block;width:100%;height:" + height + "px' data-ad-client='" + ad_client + "' data-ad-slot='" + ad_slot + "'></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script></div>";
    $target.after(html);
    })(jQuery);
    //]]>
    </script>
    </b:if>

    <b:if cond='data:blog.pageType == &quot;item&quot;'>
    <script>
    //<![CDATA[
    /* 繼續閱讀 */
    (function($) {
    var width = 800,
    height = 200,
    ad_client = "ca-pub-5973388060474312",
    ad_slot = "1080952551",
    $target = $("a[name='more']"),
    style = "margin: 50px auto; text-align: center;",
    html = "<div style='" + style + "'><ins class='adsbygoogle' style='display:inline-block;width:100%;height:" + height + "px' data-ad-client='" + ad_client + "' data-ad-slot='" + ad_slot + "'></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script></div>";
    $target.before(html);
    })(jQuery);

    /* 文末位置 */
    (function($) {
    var width = 800,
    height = 200,
    ad_client = "ca-pub-5973388060474312",
    ad_slot = "5650752950",
    $target = $(".post-body"),
    style = "margin: 20px auto; text-align: center;",
    html = "<div style='" + style + "'><ins class='adsbygoogle' style='display:inline-block;width:100%;height:" + height + "px' data-ad-client='" + ad_client + "' data-ad-slot='" + ad_slot + "'></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script></div>";
    $target.after(html);
    })(jQuery);
    //]]>
    </script>
    </b:if>
<!-- Adsense 安裝懶人包 end, Designed by WFU BLOG -->

<!-- Page Number Navigation START -->
<b:if cond='data:blog.pageType != &quot;item&quot;'>
  <b:if cond='data:blog.pageType != &quot;static_page&quot;'>
    <b:if cond='data:blog.isMobile'>
      <script type='text/javascript'>var numPages=7;</script>
    <b:else/>
      <script type='text/javascript'>var numPages=9;</script>
    </b:if>
      <script type='text/javascript'>
        /*<![CDATA[*/
          var perPage=10;
          var firstText ='首頁';
          var lastText ='最末頁';
          var prevText ='? Previous';
          var nextText ='Next ?';
          var urlactivepage=location.href;
          var home_page="/";
        /*]]>*/
      </script>
      <script src='https://zaphkielyang.github.io/page-navigation2-modify.js' type='text/javascript'/>
  </b:if>
</b:if>
<!-- Page Number Navigation END -->

</body>

<macro:includable id='sections' var='col'>
  <macro:if cond='data:col.num == 0'>
  <macro:else/>
    <b:section mexpr:class='data:col.class' mexpr:id='data:col.idPrefix + &quot;-1&quot;' preferred='yes' showaddelement='yes'/>

    <macro:if cond='data:col.num &gt;= 2'>
      <table border='0' cellpadding='0' cellspacing='0' mexpr:class='&quot;section-columns columns-&quot; + data:col.num'>
      <tbody>
      <tr>
        <td class='first columns-cell'>
          <b:section mexpr:class='data:col.class' mexpr:id='data:col.idPrefix + &quot;-2-1&quot;'/>
        </td>

        <td class='columns-cell'>
          <b:section mexpr:class='data:col.class' mexpr:id='data:col.idPrefix + &quot;-2-2&quot;'/>
        </td>

        <macro:if cond='data:col.num &gt;= 3'>
          <td class='columns-cell'>
            <b:section mexpr:class='data:col.class' mexpr:id='data:col.idPrefix + &quot;-2-3&quot;'/>
          </td>
        </macro:if>

        <macro:if cond='data:col.num &gt;= 4'>
          <td class='columns-cell'>
            <b:section mexpr:class='data:col.class' mexpr:id='data:col.idPrefix + &quot;-2-4&quot;'/>
          </td>
        </macro:if>
      </tr>
      </tbody>
      </table>

      <macro:if cond='data:col.includeBottom'>
        <b:section mexpr:class='data:col.class' mexpr:id='data:col.idPrefix + &quot;-3&quot;' showaddelement='no'/>
      </macro:if>
    </macro:if>
  </macro:if>
</macro:includable>

<b:section-contents id='sidebar-right-1'>
  <b:widget id='HTML4' locked='false' title='Google+' type='HTML'>
    <b:widget-settings>
      <b:widget-setting name='content'>&lt;p align=&quot;center&quot;&gt;

&lt;img src=&quot;https://lh4.googleusercontent.com/-Bg7-gW-uvvk/AAAAAAAAAAI/AAAAAAAAaLE/3J6kbi_xYVE/s40-c-k/photo.jpg&quot; style=&quot;border:2px solid #ccc;padding:2px;margin:3px 8px 3px 0;border-radius:26px;&quot; /&gt;
&lt;br/&gt;

&lt;a href=&quot;//plus.google.com/103231399619227457717?prsrc=3&quot; rel=&quot;publisher&quot; style=&quot;text-decoration:none;&quot;&gt;
&lt;img src=&quot;//ssl.gstatic.com/images/icons/gplus-16.png&quot; alt=&quot;Google+&quot; style=&quot;border:0;width:16px;height:16px;&quot;/&gt;&lt;/a&gt;

&lt;a href=&quot;//plus.google.com/103231399619227457717?prsrc=3&quot; rel=&quot;author&quot;&gt;Zaphkiel Yang&lt;/a&gt;
&lt;br/&gt;

&lt;!-- Place this code where you want the badge to render. --&gt;
&lt;div align=&quot;center&quot;&gt;
&lt;div class=&quot;g-follow&quot; data-annotation=&quot;bubble&quot; data-height=&quot;20&quot; data-href=&quot;//plus.google.com/103231399619227457717&quot; data-rel=&quot;author&quot;&gt;&lt;/div&gt;

&lt;!-- Place this tag after the last widget tag. --&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
  window.___gcfg = {lang: &#39;zh-TW&#39;};

  (function() {
    var po = document.createElement(&#39;script&#39;); po.type = &#39;text/javascript&#39;; po.async = true;
    po.src = &#39;https://apis.google.com/js/platform.js&#39;;
    var s = document.getElementsByTagName(&#39;script&#39;)[0]; s.parentNode.insertBefore(po, s);
  })();
&lt;/script&gt;
&lt;/div&gt;
&lt;/p&gt;</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>
    <data:content/>
  </div>

  <b:include name='quickedit'/>
</b:includable>
  </b:widget>
  <b:widget id='AdSense1' locked='false' title='' type='AdSense'>
    <b:widget-settings>
      <b:widget-setting name='style.bgcolor'>#100101</b:widget-setting>
      <b:widget-setting name='style.textcolor'>#dadada</b:widget-setting>
      <b:widget-setting name='style.layout'>1x1</b:widget-setting>
      <b:widget-setting name='style.bordercolor'>#100101</b:widget-setting>
      <b:widget-setting name='style.urlcolor'>#d8d832</b:widget-setting>
      <b:widget-setting name='style.linkcolor'>#f4e9c7</b:widget-setting>
      <b:widget-setting name='style.unittype'>TextAndImage</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
  <div class='widget-content'>
    <data:adCode/>
    <b:include name='quickedit'/>
  </div>
</b:includable>
  </b:widget>
  <b:widget id='HTML2' locked='false' title='' type='HTML'>
    <b:widget-settings>
      <b:widget-setting name='content'><![CDATA[<script type="text/javascript" src="http://js1.bloggerads.net/showads.aspx?blogid=20121016000020&charset=utf-8"></script>]]></b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>
    <data:content/>
  </div>

  <b:include name='quickedit'/>
</b:includable>
  </b:widget>
  <b:widget id='HTML7' locked='false' title='日本行程資訊整理' type='HTML'>
    <b:widget-settings>
      <b:widget-setting name='content'>&lt;div id=&quot;RCourse&quot;&gt;
		&lt;ul&gt;
			&lt;li&gt;
				&lt;a href=&quot;http://zaphkielyang.blogspot.com/2017/01/2017-2017011120170121.html&quot; target=&quot;_blank&quot;&gt;
					&lt;img class=&quot;RC-thumb&quot; src=&quot;https://lh3.googleusercontent.com/VYt97nfZtSoJbhgEPRb619cPhdep8CJOX2GZryXndAAa2L90wjXQJ_QFybUkLivxWiaTeqTONee8UcG6c5SkNJh0IKMw0Pdmr0QMHezbdI80rci4l7xyAaXomM31q6NeI2LAj6lUC9A4kCaIUbd3pXbuddz96-qnFVjRgRrnW74rPZW87whPqHYKSXsKSN96PF3QfJpBIJOtMgztA7yqpy_KyXJIh1csEdCWQxmv0HtVYMw-EiC-lS2qPAB7PIBvdzs1GqHNW9duAPtJOXQcu11aNWsYzRi4LiLhKEG6RRd4Te9RMEdfNnS3DHwsyPxqDTcXXd7nKuEwqQh8txzvG7ap5b2GUEW2tZ0vG7PcFBwZ2kHuImH-9yq1IAHFIb7W7UgeEfLNsLiZ6GSTiupZAXi_oh6mHrN5YIEec1m7XKwRGJUFUpyNMIRTPw4ieYpTz_9eSis8ZpXfleldGAO1WgBmUebl_-i6p5IMTUHNvNhmaATGLVvfNtI2wr-j7dvsDeoZatizgDYXcvSJ9t2T7brRbwBuWK5FiK1YUc3nDFBJDWvB-nOLSCS6c2HoCATZ28mlL7QNjKH74XDF3OxiHUeH8MbMcze7ThdJK_f0cQnKl4b_YNHj9u6es8BADZVYhcdHiCDCZXu0z7bu4nQeqUx_X7J16IE03inDXbMVS8k=s72-c&quot; /&gt;
					&lt;span class=&quot;RC-title&quot;&gt;2017冬季 日本長野東京之旅&lt;/span&gt;&lt;span class=&quot;RC-date&quot;&gt; (2017.01.11~01.21)&lt;/span&gt;
				&lt;/a&gt;
			&lt;/li&gt;
			&lt;li&gt;
				&lt;a href=&quot;http://zaphkielyang.blogspot.com/2016/08/2016-201608060820.html&quot; target=&quot;_blank&quot;&gt;
					&lt;img class=&quot;RC-thumb&quot; src=&quot;https://lh3.googleusercontent.com/bGVh-QWKKWS-2Z0T1lDDdgVkzkqIUjOHvZDGezFw2dYt6U0suRPzjvgCDjrlAVelLHlLwNhfOpNR55U=s72-c&quot; /&gt;
					&lt;span class=&quot;RC-title&quot;&gt;2016夏季 日本南九州之旅&lt;/span&gt;&lt;span class=&quot;RC-date&quot;&gt; (2016.08.06~08.20)&lt;/span&gt;
				&lt;/a&gt;
			&lt;/li&gt;
			&lt;li&gt;
				&lt;a href=&quot;http://zaphkielyang.blogspot.com/2016/05/2016201604240516.html&quot; target=&quot;_blank&quot;&gt;
					&lt;img class=&quot;RC-thumb&quot; src=&quot;https://lh3.googleusercontent.com/-7idWaHUL0ps/VzCWhFyZy6E/AAAAAAAGKF4/JiLfp68ZGqsltgEWDwK-uWGZ4szKWwrBACCoQAQ/s72-c/6282686975415274401&quot; /&gt;
					&lt;span class=&quot;RC-title&quot;&gt;2016春季 日本近畿東海北陸之旅&lt;/span&gt;&lt;span class=&quot;RC-date&quot;&gt; (2016.04.24~05.16)&lt;/span&gt;
				&lt;/a&gt;
			&lt;/li&gt;
			&lt;li&gt;
				&lt;a href=&quot;http://zaphkielyang.blogspot.com/p/td_2.html&quot; target=&quot;_blank&quot;&gt;
					&lt;img class=&quot;RC-thumb&quot; src=&quot;https://lh3.googleusercontent.com/-s3J0RDwiwkU/VgjyEkvd11E/AAAAAAAFSCE/nOKIhCIIe9Y/s72-c-Ic42/201509272015Day10.jpg&quot; /&gt;
					&lt;span class=&quot;RC-title&quot;&gt;2015秋季 日本滋賀奈良之旅&lt;/span&gt;&lt;span class=&quot;RC-date&quot;&gt; (2015.09.17~10.01)&lt;/span&gt;
				&lt;/a&gt;
			&lt;/li&gt;
			&lt;li&gt;
				&lt;a href=&quot;http://zaphkielyang.blogspot.com/p/td.html&quot; target=&quot;_blank&quot;&gt;
					&lt;img class=&quot;RC-thumb&quot; src=&quot;https://lh5.googleusercontent.com/-9Iv8tfD-0rY/VR1UGiV2VVE/AAAAAAADY-g/id4EkKEr9XE/s72-c/201504022015Day9.jpg&quot; /&gt;
					&lt;span class=&quot;RC-title&quot;&gt;2015春季 日本四國關西賞櫻行&lt;/span&gt;&lt;span class=&quot;RC-date&quot;&gt; (2015.03.24~04.18)&lt;/span&gt;
				&lt;/a&gt;
			&lt;/li&gt;
			&lt;li&gt;
				&lt;a href=&quot;http://zaphkielyang.blogspot.com/2014/11/201411171127.html&quot; target=&quot;_blank&quot;&gt;
					&lt;img class=&quot;RC-thumb&quot; src=&quot;https://lh3.googleusercontent.com/-cecDAz-bpdg/VHsnGB8oCtE/AAAAAAAC4fU/zz53q_SjO18/s72-c/20141126Day1002.jpg&quot; /&gt;
					&lt;span class=&quot;RC-title&quot;&gt;2014秋季 日本關西中國十一日行&lt;/span&gt;&lt;span class=&quot;RC-date&quot;&gt; (2014.11.17~11.27)&lt;/span&gt;
				&lt;/a&gt;
			&lt;/li&gt;
	
			&lt;li&gt;
				&lt;a href=&quot;http://zaphkielyang.blogspot.com/2014/08/201407310810.html&quot; target=&quot;_blank&quot;&gt;
					&lt;img class=&quot;RC-thumb&quot; src=&quot;http://3.bp.blogspot.com/-OBAJGs0cxaI/U95ayLR4YZI/AAAAAAACKBs/PIa1XlPK650/s72-c/IMG_7226.jpg&quot; /&gt;
					&lt;span class=&quot;RC-title&quot;&gt;2014夏季 日本東北與富士山十日行&lt;/span&gt;&lt;span class=&quot;RC-date&quot;&gt; (2014.07.31~08.10)&lt;/span&gt;
				&lt;/a&gt;
			&lt;/li&gt;
	
			&lt;li&gt;
				&lt;a href=&quot;http://zaphkielyang.blogspot.com/p/blog-page_22.html&quot; target=&quot;_blank&quot;&gt;
					&lt;img class=&quot;RC-thumb&quot; src=&quot;https://lh4.googleusercontent.com/NaqKGpeezImQkFvTB_113cTQtfmFainyDIwhlW9eWCEZ=s72-c&quot; /&gt;
					&lt;span class=&quot;RC-title&quot;&gt;2014夏季 日本東京日光鎌倉八日行&lt;/span&gt;&lt;span class=&quot;RC-date&quot;&gt; (2014.06.21 ~ 06.28)&lt;/span&gt;
				&lt;/a&gt;
			&lt;/li&gt;
	
			&lt;li&gt;
				&lt;a href=&quot;http://zaphkielyang.blogspot.com/p/blog-page_14.html&quot; target=&quot;_blank&quot;&gt;
					&lt;img class=&quot;RC-thumb&quot; src=&quot;http://3.bp.blogspot.com/-z5LusxFofek/UzEtRQxWSuI/AAAAAAAB1_8/pVxnipDla1c/s72-c/IMG_8567.jpg&quot; /&gt;
					&lt;span class=&quot;RC-title&quot;&gt;2014春季 日本京都和歌山賞櫻四日行 &lt;/span&gt;&lt;span class=&quot;RC-date&quot;&gt;(2014.03.21 ~ 03.24) &lt;/span&gt;
				&lt;/a&gt;
			&lt;/li&gt;
			&lt;li&gt;
				&lt;a href=&quot;http://zaphkielyang.blogspot.com/p/blog-page_13.html&quot; target=&quot;_blank&quot;&gt;
					&lt;img class=&quot;RC-thumb&quot; src=&quot;http://4.bp.blogspot.com/-5rMY8hvHiJo/UqcM-tM7vUI/AAAAAAABm9M/z5FbozwPkZ8/s72-c/IMG_5121.jpg&quot; /&gt;
					&lt;span class=&quot;RC-title&quot;&gt;2013冬季 日本京都賞楓三日行 &lt;/span&gt;&lt;span class=&quot;RC-date&quot;&gt;(2013.12.06 ~ 12.09) &lt;/span&gt;
				&lt;/a&gt;
			&lt;/li&gt;
			&lt;li&gt;
				&lt;a href=&quot;http://zaphkielyang.blogspot.com/p/blog-page_2.html&quot; target=&quot;_blank&quot;&gt;
					&lt;img class=&quot;RC-thumb&quot; src=&quot;http://4.bp.blogspot.com/-ela40-6sYrs/UQ4gy1tm04I/AAAAAAABAlQ/fTrHrI3J_Ak/s72-c/IMG_4021.JPG&quot; /&gt;
					&lt;span class=&quot;RC-title&quot;&gt;2013冬季 日本九州七日行 &lt;/span&gt;&lt;span class=&quot;RC-date&quot;&gt;(2013.01.27 ~ 02.03) &lt;/span&gt;
				&lt;/a&gt;
			&lt;/li&gt;
		&lt;/ul&gt;
	&lt;/div&gt;
	
	&lt;style&gt;
	#RCourse ul{margin:0;padding:0;list-style:none;}
	#RCourse li{display:block; margin:1px 0;height:70px;line-height:15px;padding: 5px 0;
text-indent: 0;}
	.RC-title{display:block; padding:0px 0 0;padding-top:5px;}
	.RC-date{font-size:10px;display:block; padding:0px 0 0;}
	.RC-thumb{width:50px;height:50px;border:2px solid #ccc;padding:2px;margin:3px 8px 3px 0;float:left;border-radius:28px;}

/* 複寫PopularPosts1 START */
#PopularPosts1 .item-thumbnail img{height:50px; width:50px; border:2px solid #ccc;padding:2px;margin:5px 8px 6px 15px;float:left;border-radius:28px;}
#PopularPosts1 li{display:block; margin:1px 0;border-bottom:0px dotted #ccc;padding: 5px 0;}
/* 複寫PopularPosts1 END */

	&lt;/style&gt;</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>
    <data:content/>
  </div>

  <b:include name='quickedit'/>
</b:includable>
  </b:widget>
  <b:widget id='PopularPosts1' locked='false' title='熱門文章' type='PopularPosts'>
    <b:widget-settings>
      <b:widget-setting name='numItemsToShow'>5</b:widget-setting>
      <b:widget-setting name='showThumbnails'>true</b:widget-setting>
      <b:widget-setting name='showSnippets'>false</b:widget-setting>
      <b:widget-setting name='timeRange'>LAST_MONTH</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
  <b:if cond='data:title'><h2><data:title/></h2></b:if>
  <div class='widget-content popular-posts'>
    <ul>
      <b:loop values='data:posts' var='post'>
      <li>
        <b:if cond='data:showThumbnails == &quot;false&quot;'>
          <b:if cond='data:showSnippets == &quot;false&quot;'>
            <!-- (1) No snippet/thumbnail -->
            <a expr:href='data:post.href'><data:post.title/></a>
          <b:else/>
            <!-- (2) Show only snippets -->
            <div class='item-title'><a expr:href='data:post.href'><data:post.title/></a></div>
            <div class='item-snippet'><data:post.snippet/></div>
          </b:if>
        <b:else/>
          <b:if cond='data:showSnippets == &quot;false&quot;'>
            <!-- (3) Show only thumbnails -->
            <div class='item-thumbnail-only'>
              <b:if cond='data:post.thumbnail'>
                <div class='item-thumbnail'>
                  <a expr:href='data:post.href' target='_blank'>
                    <img alt='' border='0' expr:height='data:thumbnailSize' expr:src='data:post.thumbnail' expr:width='data:thumbnailSize'/>
                  </a>
                </div>
              </b:if>
              <div class='item-title'><a expr:href='data:post.href'><data:post.title/></a></div>
            </div>
            <div style='clear: both;'/>
          <b:else/>
            <!-- (4) Show snippets and thumbnails -->
            <div class='item-content'>
              <b:if cond='data:post.thumbnail'>
                <div class='item-thumbnail'>
                  <a expr:href='data:post.href' target='_blank'>
                    <img alt='' border='0' expr:height='data:thumbnailSize' expr:src='data:post.thumbnail' expr:width='data:thumbnailSize'/>
                  </a>
                </div>
              </b:if>
              <div class='item-title'><a expr:href='data:post.href'><data:post.title/></a></div>
              <div class='item-snippet'><data:post.snippet/></div>
            </div>
            <div style='clear: both;'/>
          </b:if>
        </b:if>
      </li>
      </b:loop>
    </ul>
    <b:include name='quickedit'/>
  </div>
</b:includable>
  </b:widget>
  <b:widget id='HTML5' locked='false' title='最新文章' type='HTML'>
    <b:widget-settings>
      <b:widget-setting name='content'>&lt;style&gt;
/* 最新文章 */
#RPosts ul{margin:0;padding:0;list-style:none;}
#RPosts li{display:block; margin:1px 0;height:80px;line-height:15px;border-bottom:0px dotted #ccc;padding: 5px 0;
text-indent: 0;}
.RP-title{font-size:13px;display:block; padding:10px 0 0;}
.RP-thumb{width:50px;height:50px;border:2px solid #ccc;padding:2px;margin:10px 8px 6px 0px;float:left;border-radius:28px;}
#RP-nav{font-size:13px;margin-top:8px;text-align:center;}
&lt;/style&gt;

&lt;div id=&quot;RPosts&quot;&gt;&lt;/div&gt;

&lt;script language=&quot;javascript&quot;&gt;
var nPostStartIndex = 1;
var nPostShow = 5;
var noImage =&quot;http://1.bp.blogspot.com/_u4gySN2ZgqE/SosvnavWq0I/AAAAAAAAArk/yL95WlyTqr0/s400/noimage.png&quot;;

function showRecentPosts(nIndex) {
if (!nIndex)
nIndex = nPostStartIndex;
var sFeedURL = &#39;/feeds/posts/full?orderby=published&amp;start-index=&#39;+nIndex+&#39;&amp;max-results=&#39;+(nPostShow+1)+&#39;&amp;alt=json-in-script&amp;callback=generatePosts&#39;;
var script = document.createElement(&#39;script&#39;);
document.getElementById(&#39;RPosts&#39;).innerHTML = &#39;  Loading...&#39;;
script.setAttribute(&#39;src&#39;, sFeedURL);
script.setAttribute(&#39;type&#39;, &#39;text/javascript&#39;);
document.documentElement.firstChild.appendChild(script);
}

function generatePosts(json) {
function compareentry(a,b) {
order= Date.parse(a.published.$t.replace(/^(\d{4})-(\d{2})-(\d{2})T([0-9:]*)([.0-9]*)(.)(.*)$/, &#39;$1/$2/$3 $4 GMT&#39;)) - Date.parse(b.published.$t.replace(/^(\d{4})-(\d{2})-(\d{2})T([0-9:]*)([.0-9]*)(.)(.*)$/, &#39;$1/$2/$3 $4 GMT&#39;));
return 0-order;
}

var sortentry = json.feed.entry.sort(compareentry);
var nIndex = parseInt(json.feed.openSearch$startIndex.$t);
var nTotalPost = parseInt(json.feed.openSearch$totalResults.$t);

var sHTML =&#39;&lt;ul&gt;&#39;;

for (var i = 0, Post; Post = sortentry[i]; i++) {
if (i &gt;= nPostShow)
break;
//var title = Post.title.$t;
var title =(Post.title.$t.length&gt;46)?Post.title.$t.substr(0,46)+&quot;....&quot;:Post.title.$t;
// Fetch thumb script by Aneesh of www.bloggerplugins.org
var thumb;
try{thumb = Post.media$thumbnail.url;
// If image source from flickr than use exsisting thumbnail
if(thumb.match(&quot;flickr&quot;)==&quot;flickr&quot;)thumb=thumb.replace(/\_[stmo]\.jpg|\.jpg/,&quot;_s.jpg&quot;);
}
catch (error){
s=Post.content.$t;a=s.indexOf(&quot;&lt;img&quot;);b=s.indexOf(&quot;src=\&quot;&quot;,a);c=s.indexOf(&quot;\&quot;&quot;,b+5);d=s.substr(b+5,c-b-5);
if((a!=-1)&amp;&amp;(b!=-1)&amp;&amp;(c!=-1)&amp;&amp;(d!=&quot;&quot;)){
thumb=d;
// If image source from flickr than use exsisting thumbnail
if(thumb.match(&quot;flickr&quot;)==&quot;flickr&quot;)thumb=thumb.replace(/\_[stmo]\.jpg|\.jpg/,&quot;_s.jpg&quot;);
}
// No mediathumbnail and any image in the article
else thumb=noImage;
}
var j = 0;
while (j &lt; Post.link.length &amp;&amp; Post.link[j].rel != &quot;alternate&quot;)
j++;
var link = Post.link[j].href;
sHTML += &#39;&lt;li&gt;&lt;a href=&quot;&#39;+link+&#39;&quot;&gt;&lt;img class=&quot;RP-thumb&quot; src=&quot;&#39;+thumb+&#39;&quot; /&gt;&lt;span class=&quot;RP-title&quot;&gt;&#39;+ title +&#39;&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;&#39;;
}
sHTML += &#39;&lt;/ul&gt;&#39; + generatePostLink(parseInt(json.feed.entry.length), nIndex, nTotalPost);
document.getElementById(&#39;RPosts&#39;).innerHTML = sHTML;
}

function generatePostLink(nFetch, nIndex, nTotalPost) {
var bOld = (nFetch &gt; nPostShow);
if (bOld) nFetch = nPostShow;
var sResult =&#39;&lt;div id=&quot;RP-nav&quot;&gt;&#39;;
if (nIndex &gt; nPostStartIndex)
sResult += &#39;&lt;a href=&quot;javascript:showRecentPosts(&#39;+(nIndex-nPostShow)+&#39;);&quot; title=&quot;Newer Posts&quot;&gt;上頁&lt;/a&gt;  &#39;;
sResult += &#39;第&#39;+nIndex+&#39;-&#39;+(nIndex+nFetch-1)+&#39;篇, 共&#39;+nTotalPost+&#39;篇  &#39;;
if (bOld)
sResult += &#39;&lt;a href=&quot;javascript:showRecentPosts(&#39;+(nIndex+nPostShow)+&#39;);&quot; title=&quot;Older Posts&quot;&gt;下頁&lt;/a&gt;&lt;/div&gt;&#39;;
return sResult;
}
&lt;/script&gt;

&lt;script language=&quot;javascript&quot;&gt;showRecentPosts();&lt;/script&gt;</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>
    <data:content/>
  </div>

  <b:include name='quickedit'/>
</b:includable>
  </b:widget>
  <b:widget id='HTML1' locked='false' title='最新留言' type='HTML'>
    <b:widget-settings>
      <b:widget-setting name='content'>&lt;!-- 最新留言 START --&gt;
&lt;div id=&quot;rc2_area&quot;&gt;&lt;/div&gt;
&lt;div id=&quot;rc2_info&quot;&gt;&lt;a href=&quot;//www.wfublog.com/2015/10/blogger-recent-comments-v2-avatar-post-title-https.html&quot;&gt;recent comment&lt;/a&gt;&lt;/div&gt;
&lt;script&gt;
var brc2 = {
startIndex: 1,
showComment: 5, // 顯示幾則最新留言
summaryLength: 25, // 留言摘要字數
headWidth: 35, // 頭像寬度, 若不要顯示頭像請改為 0
blogger: &quot;//4.bp.blogspot.com/-81dIbOmU9O4/UB_ufwAvb0I/AAAAAAAADj8/1Y4HFMVzx4Q/s70/blogger.png&quot;,
openID: &quot;//1.bp.blogspot.com/-sI74_lyKtUE/UB__t_YIVMI/AAAAAAAADms/X_25WXcYZhk/s70/openid.png&quot;,
anonymous: &quot;//2.bp.blogspot.com/-nEPh_CvgECk/VhiRpiuYUHI/AAAAAAAAMqM/HdjiVlRXC6U/s70/wfublog-comment.jpg&quot;,
showTitle: &quot;Y&quot;, // 不需要顯示文章標題則改為 &quot;N&quot;
showDate: &quot;Y&quot;, // 不需要顯示日期改為 &quot;N&quot;
showCommentAmount: &quot;Y&quot;, // 不需要顯示網站總留言數改為 &quot;N&quot;
dateFormat: &quot;Y-M-D&quot;, // 預設日期格式為 &quot;年-月-日&quot;; 若要改為 &quot;月-日-年&quot; 請將參數改為 &quot;M-D-Y&quot;
openLogo: &quot;&#9662;&quot;, // 展開留言圖示
closeLogo: &quot;&#9652;&quot;, // 收合留言圖示
nextLogo: &quot;&#9656;&quot;, // 下一頁圖示
prevLogo: &quot;&#9666;&quot;, // 上一頁圖示
serialText: &quot;編號&quot;,
totalText: &quot;總共:&quot;
};
 
brc2.openLogo=$(&quot;&lt;a&gt;&quot;+brc2.openLogo+&quot;&lt;/a&gt;&quot;).html();brc2.closeLogo = $(&quot;&lt;a&gt;&quot;+brc2.closeLogo+&quot;&lt;/a&gt;&quot;).html();brc2.fetch=0;brc2.total=0;brc2.postUrl=[];brc2.postTitle=[];brc2.anonymousLink=&quot;//www.wfublog.com/2015/10/blogger-recent-comments-v2-avatar-post-title-https.html&quot;;brc2.switchPage=function(b,a,g){var d=brc2.showComment,e=(b&gt;d),f=$(&quot;#rc2_commentIndex&quot;),c=&quot;&quot;;b=e?d:b;c+=&quot;&lt;a href=&#39;javascript:&#39; class=&#39;rc2_openAll&#39; title=&#39;留言全部展開&#39;&gt;&quot;+brc2.openLogo+&quot;&lt;/a&gt;&lt;a href=&#39;javascript:&#39; class=&#39;rc2_closeAll&#39; title=&#39;留言全部收起&#39;&gt;&quot;+brc2.closeLogo+&quot;&lt;/a&gt;&quot;;if(a&gt;brc2.startIndex){c+=&quot;&lt;a class=&#39;rc2_prevPage&#39; href=&#39;javascript:&#39; title=&#39;上一頁&#39;&gt;&quot;+brc2.prevLogo+&quot;&lt;/a&gt;&quot;}else{c+=&quot;&lt;span class=&#39;rc2_prevPage&#39;&gt;&quot;+brc2.prevLogo+&quot;&lt;/span&gt;&quot;}if(e){c+=&quot;&lt;a class=&#39;rc2_nextPage&#39; href=&#39;javascript:&#39; title=&#39;下一頁&#39;&gt;&quot;+brc2.nextLogo+&quot;&lt;/a&gt;&quot;}else{c+=&quot;&lt;span class=&#39;rc2_nextPage&#39;&gt;&quot;+brc2.nextLogo+&quot;&lt;/a&gt;&quot;}$(&quot;#rc2_switchPage&quot;).html(c);$(&quot;.rc2_openAll&quot;).click(function(){$(&quot;.rc2_summary&quot;).hide();$(&quot;.rc2_content&quot;).show();$(&quot;.rc2_toggleLogo&quot;).html(brc2.closeLogo)});$(&quot;.rc2_closeAll&quot;).click(function(){$(&quot;.rc2_content&quot;).hide();$(&quot;.rc2_summary&quot;).show();$(&quot;.rc2_toggleLogo&quot;).html(brc2.openLogo)});$(&quot;a.rc2_prevPage&quot;).click(function(){brc2.init(a-d)});$(&quot;a.rc2_nextPage&quot;).click(function(){brc2.init(a+d)});if(f.length){f.html(brc2.serialText+&quot; &quot;+a+&quot;-&quot;+(a+b-1)+&quot;, &quot;+brc2.totalText+&quot; &quot;+g)}};brc2.main=function(json){var feed=json.feed;if(!feed.entry){$(&quot;#rc2_area&quot;).html(&quot;&lt;div style=&#39;text-align: center;&#39;&gt;目前尚無留言&lt;/div&gt;&quot;);return}var nFetch=feed.entry.length,nIndex=parseInt(feed.openSearch$startIndex.$t),nTotalComment=parseInt(feed.openSearch$totalResults.$t),total=(brc2.showComment&gt;nFetch)?nFetch:brc2.showComment,width=brc2.headWidth,summaryLength=brc2.summaryLength,anonymousLink=brc2.anonymousLink,openLogo=brc2.openLogo,closeLogo=brc2.closeLogo,dateFormat=brc2.dateFormat.split(&quot;-&quot;),size=&quot;/s&quot;+width*2+&quot;-c/&quot;,reg1=/&lt;.*?&gt;/g,reg2=/\/s\d{2}.*?\//ig,html=&quot;&quot;,j=0,newAvatar=&quot;&quot;,noPost=&quot;&quot;,dateObj={},i,entry,authorName,content,summary,avatar,avatarLink,aboutAuthor,link,dateStr,dateArray,info;brc2.fetch=nFetch;brc2.total=total;html+=&quot;&lt;ul&gt;&quot;;for(i=0;i&lt;total;i++){entry=feed.entry[i];authorName=entry.author[0].name.$t;content=entry.content.$t.replace(reg1,&quot;&quot;);summary=(content.length&gt;summaryLength)?content.substr(0,summaryLength):content;dateArray=entry.published.$t.substr(0,10).split(&quot;-&quot;);dateObj.Y=dateArray[0];dateObj.M=dateArray[1];dateObj.D=dateArray[2];dateStr=dateObj[dateFormat[0]]+&quot;-&quot;+dateObj[dateFormat[1]]+&quot;-&quot;+dateObj[dateFormat[2]];avatar=entry.author[0].gd$image.src;avatarLink=(entry.author[0].uri)?entry.author[0].uri.$t:&quot;&quot;;aboutAuthor=&quot;關於&quot;+authorName;if(entry.title.$t){while(j&lt;entry.link.length&amp;&amp;entry.link[j].rel!=&quot;alternate&quot;){j++}link=entry.link[j].href}else{link=(entry[&quot;thr$in-reply-to&quot;])?entry[&quot;thr$in-reply-to&quot;].href:anonymousLink}if(!entry[&quot;thr$in-reply-to&quot;]){noPost=&quot;文章已刪除&quot;}if(avatar.search(&quot;blank.gif&quot;)&gt;0){if(avatarLink){avatar=brc2.openID}else{avatar=brc2.anonymous;avatarLink=anonymousLink;aboutAuthor=&quot;WFU BLOG 最新留言 V2&quot;}}if(avatar.search(&quot;openid16-rounded.gif&quot;)&gt;0){avatar=brc2.openID}if(avatar.search(&quot;b16-rounded.gif&quot;)&gt;0){avatar=brc2.blogger}newAvatar=avatar.replace(reg2,size);html+=&quot;&lt;li&gt;&quot;;if(brc2.showDate==&quot;Y&quot;){html+=&quot;&lt;i class=&#39;rc2_date&#39;&gt;&quot;+dateStr+&quot;&lt;/i&gt;&quot;}if(width&gt;0){html+=&quot;&lt;span class=&#39;rc2_avatar&#39; style=&#39;float:left; width:&quot;+width+&quot;px;&#39;&gt;&lt;a href=&#39;&quot;+avatarLink+&quot;&#39; target=&#39;_blank&#39;&gt;&lt;img src=&#39;&quot;+newAvatar+&quot;&#39; onerror=&#39;this.src=\&quot;&quot;+avatar+&quot;\&quot;&#39; style=&#39;width:&quot;+width+&quot;px; height: &quot;+width+&quot;px;&#39; title=&#39;&quot;+aboutAuthor+&quot;&#39;/&gt;&lt;/a&gt;&lt;/span&gt;&quot;}html+=&quot;&lt;div style=&#39;margin-left: &quot;+((width&gt;0)?(width+10):0)+&quot;px; word-wrap: break-word;&#39;&gt;&lt;b class=&#39;rc2_author&#39;&gt;&quot;+authorName+&quot;&#65306;&lt;/b&gt;&quot;;if(summary!=content){html+=&quot;&lt;div class=&#39;rc2_text&#39;&gt;&lt;span class=&#39;rc2_summary&#39; title=&#39;展開留言&#39;&gt;&quot;+summary+&quot;... &lt;/span&gt;&lt;span class=&#39;rc2_content&#39; style=&#39;display:none;&#39; title=&#39;收起留言&#39;&gt;&quot;+content+&quot; &lt;/span&gt;&lt;a class=&#39;rc2_toggleLogo&#39; href=&#39;javascript:&#39; title=&#39;展開留言&#39;&gt;&quot;+openLogo+&quot;&lt;/a&gt;&lt;/div&gt;&quot;}else{html+=&quot;&lt;div class=&#39;rc2_text&#39;&gt;&lt;span class=&#39;rc2_summary&#39;&gt;&quot;+summary+&quot;&lt;/span&gt;&lt;span class=&#39;rc2_content&#39; style=&#39;display:none;&#39;&gt;&quot;+content+&quot; &lt;/span&gt;&lt;/div&gt;&quot;}if(brc2.showTitle==&quot;Y&quot;){html+=&quot;&lt;div class=&#39;rc2_postTitle&#39;&gt;-- &lt;a href=&#39;&quot;+link+&quot;&#39; target=&#39;_blank&#39;&gt;&quot;+noPost+&quot;&lt;/a&gt;&lt;/div&gt;&quot;}html+=&quot;&lt;/div&gt;&lt;div style=&#39;clear: both;&#39;/&gt;&lt;/li&gt;&quot;}html+=&quot;&lt;/ul&gt;&quot;;if(brc2.showCommentAmount==&quot;Y&quot;){html+=&quot;&lt;div id=&#39;rc2_commentIndex&#39;&gt;&lt;/div&gt;&quot;}html+=&quot;&lt;div id=&#39;rc2_switchPage&#39;&gt;&lt;/div&gt;&quot;;var _0x641a=[&quot;\x24\x28\x22\x23\x33\x22\x29\x2E\x31\x28\x31\x29\x3B\x37\x2E\x6A\x28\x6C\x2C\x76\x2C\x41\x29\x3B\x32\x3D\x22\x3C\x61\x20\x38\x3D\x27\x2F\x2F\x39\x2E\x62\x2E\x63\x2F\x64\x2F\x65\x2F\x66\x2D\x67\x2D\x68\x2D\x69\x2D\x42\x2D\x6B\x2D\x34\x2D\x6D\x2E\x31\x27\x20\x6F\x3D\x27\x70\x27\x20\x34\x3D\x27\u6700\u65B0\u56DE\u61C9\uFF0B\u7559\u8A00\u8005\u982D\u50CF\uFF0B\u6587\u7AE0\u6A19\u984C\x5C\x6E\u7A0B\u5F0F\u8A2D\u8A08\uFF1A\x71\x20\x72\x27\x3E\u24E6\x20\x73\x20\x74\x3C\x2F\x61\x3E\x22\x3B\x75\x20\x24\x30\x3D\x24\x28\x22\x23\x30\x22\x29\x3B\x77\x28\x24\x30\x2E\x78\x29\x7B\x24\x30\x2E\x31\x28\x32\x29\x7D\x79\x7B\x24\x28\x22\x23\x33\x22\x29\x2E\x7A\x28\x22\x3C\x35\x20\x36\x3D\x27\x30\x27\x3E\x22\x2B\x32\x2B\x22\x3C\x2F\x35\x3E\x22\x29\x7D\x3B&quot;,&quot;\x7C&quot;,&quot;\x73\x70\x6C\x69\x74&quot;,&quot;\x72\x63\x32\x5F\x69\x6E\x66\x6F\x7C\x68\x74\x6D\x6C\x7C\x69\x6E\x66\x6F\x7C\x72\x63\x32\x5F\x61\x72\x65\x61\x7C\x74\x69\x74\x6C\x65\x7C\x64\x69\x76\x7C\x69\x64\x7C\x62\x72\x63\x32\x7C\x68\x72\x65\x66\x7C\x77\x77\x77\x7C\x7C\x77\x66\x75\x62\x6C\x6F\x67\x7C\x63\x6F\x6D\x7C\x32\x30\x31\x35\x7C\x31\x30\x7C\x62\x6C\x6F\x67\x67\x65\x72\x7C\x72\x65\x63\x65\x6E\x74\x7C\x63\x6F\x6D\x6D\x65\x6E\x74\x73\x7C\x76\x32\x7C\x73\x77\x69\x74\x63\x68\x50\x61\x67\x65\x7C\x70\x6F\x73\x74\x7C\x6E\x46\x65\x74\x63\x68\x7C\x68\x74\x74\x70\x73\x7C\x7C\x74\x61\x72\x67\x65\x74\x7C\x5F\x62\x6C\x61\x6E\x6B\x7C\x57\x46\x55\x7C\x42\x4C\x4F\x47\x7C\x52\x65\x63\x65\x6E\x74\x7C\x43\x6F\x6D\x6D\x65\x6E\x74\x73\x7C\x76\x61\x72\x7C\x6E\x49\x6E\x64\x65\x78\x7C\x69\x66\x7C\x6C\x65\x6E\x67\x74\x68\x7C\x65\x6C\x73\x65\x7C\x61\x66\x74\x65\x72\x7C\x6E\x54\x6F\x74\x61\x6C\x43\x6F\x6D\x6D\x65\x6E\x74\x7C\x61\x76\x61\x74\x61\x72&quot;,&quot;&quot;,&quot;\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65&quot;,&quot;\x72\x65\x70\x6C\x61\x63\x65&quot;,&quot;\x5C\x77\x2B&quot;,&quot;\x5C\x62&quot;,&quot;\x67&quot;];eval(function(_0x9a03x1,_0x9a03x2,_0x9a03x3,_0x9a03x4,_0x9a03x5,_0x9a03x6){_0x9a03x5=function(_0x9a03x3){return(_0x9a03x3&lt;_0x9a03x2?_0x641a[4]:_0x9a03x5(parseInt(_0x9a03x3/_0x9a03x2)))+((_0x9a03x3=_0x9a03x3%_0x9a03x2)&gt;35?String[_0x641a[5]](_0x9a03x3+29):_0x9a03x3.toString(36))};if(!_0x641a[4][_0x641a[6]](/^/,String)){while(_0x9a03x3--){_0x9a03x6[_0x9a03x5(_0x9a03x3)]=_0x9a03x4[_0x9a03x3]||_0x9a03x5(_0x9a03x3)}_0x9a03x4=[function(_0x9a03x5){return _0x9a03x6[_0x9a03x5]}];_0x9a03x5=function(){return _0x641a[7]};_0x9a03x3=1}while(_0x9a03x3--){if(_0x9a03x4[_0x9a03x3]){_0x9a03x1=_0x9a03x1[_0x641a[6]](new RegExp(_0x641a[8]+_0x9a03x5(_0x9a03x3)+_0x641a[8],_0x641a[9]),_0x9a03x4[_0x9a03x3])}}return _0x9a03x1}(_0x641a[0],38,38,_0x641a[3][_0x641a[2]](_0x641a[1]),0,{}));$(&quot;.rc2_text&quot;).click(function(){var $this=$(this);$this.children(&quot;.rc2_summary, .rc2_content&quot;).toggle();$this.children(&quot;.rc2_toggleLogo&quot;).html(function(){return($(this).html()==openLogo)?closeLogo:openLogo})});$(&quot;.rc2_postTitle a&quot;).each(function(){var postLink=this.href.split(&quot;?&quot;)[0].replace(/http:\/\/|https:\/\//,&quot;&quot;),path=postLink.substr(postLink.indexOf(&quot;/&quot;)),postFeed=&quot;/feeds/posts/summary?alt=json-in-script&amp;callback=?&amp;path=&quot;+path,index=brc2.postUrl.indexOf(path),$this=$(this),title;if(index&lt;0){if(path.indexOf(&quot;/p/&quot;)&gt;-1){$this.html(&quot;非文章頁面&quot;);return}$.getJSON(postFeed,function(json){var title=json.feed.entry[0].title.$t;$this.html(title).attr(&quot;title&quot;,title);if(brc2.postUrl.indexOf(path)&lt;0){brc2.postUrl.push(path);index=brc2.postUrl.indexOf(path);brc2.postTitle[index]=title}})}else{title=brc2.postTitle[index];$this.html(title).attr(&quot;title&quot;,title)}})};brc2.init=function(a){a=a||brc2.startIndex;var b=&quot;/feeds/comments/default?orderby=published&amp;start-index=&quot;+a+&quot;&amp;max-results=&quot;+(brc2.showComment+1)+&quot;&amp;alt=json-in-script&amp;callback=brc2.main&quot;;$(&quot;#rc2_area&quot;).html(&quot;&lt;div style=&#39;text-align: center; margin: 20px auto;&#39;&gt;&lt;img src=&#39;//lh5.googleusercontent.com/-EyVZ0f8J0qQ/UCeEG7aa8nI/AAAAAAAADtY/9sXw53XkYXM/s512/indicator-light.gif&#39;/&gt;&lt;/div&gt;&quot;);$.getScript(b)};brc2.init();
&lt;/script&gt;
 
&lt;style&gt;
#rc2_area ul,
#rc2_area li {
list-style: none; margin: 0;
}
#rc2_area li {
padding: 5px 0;
border-bottom: 1px solid #eee;
text-indent: 0;
font-size: 14px;
}
#rc2_area a,
#rc2_info a {
text-decoration: none;
}
#rc2_info {
float: right;
font-size: 11px;
font-family: helvetica, arial, sans-serif
}
#rc2_info a {
color: #ccc;
}
.rc2_date {
color: #aaaaaa;
font-size: 80%;
float: right;
}
.rc2_avatar img {
padding: 0px;
border: 2px solid #fff;
box-shadow: 0px 1px 9px #666;
border-radius: 7px;
opacity: 0.9;
}
.rc2_avatar img:hover {
opacity: 1;
}
.rc2_author {
font-size: 110%;
}
.rc2_text {
cursor: pointer;
margin: 5px 0px;
opacity: 0.8;
}
.rc2_text:hover {
opacity: 1;
}
.rc2_toggleLogo {
display: none;
}
#rc2_area li:hover .rc2_toggleLogo {
display: inline;
}
.rc2_postTitle {
font-size: 85%;
font-weight: bold;
line-height: 110%;
width: 100%;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
}
#rc2_commentIndex {
margin: 5px 0;
text-align: center;
}
#rc2_switchPage {
margin: 5px 0;
padding: 3px;
font-size: 20px;
line-height: 16px;
}
#rc2_switchPage a,
#rc2_switchPage span {
box-sizing: border-box;
display: inline-block;
width: 25%;
padding: 0;
border-left: 1px dashed #aaa;
text-align: center;
}
#rc2_switchPage a:hover {
background-color: #7d1414;
}
#rc2_switchPage a:first-child {
border-left: 0;
}
&lt;/style&gt;
&lt;!-- 最新留言 END --&gt;</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>
    <data:content/>
  </div>

  <b:include name='quickedit'/>
</b:includable>
  </b:widget>
  <b:widget id='FollowByEmail1' locked='false' title='Email訂閱' type='FollowByEmail'>
    <b:includable id='main'>
  <b:if cond='data:title != &quot;&quot;'><h2 class='title'><data:title/></h2></b:if>
  <div class='widget-content'>
    <div class='follow-by-email-inner'>
      <form action='https://feedburner.google.com/fb/a/mailverify' expr:onsubmit='&quot;window.open(\&quot;https://feedburner.google.com/fb/a/mailverify?uri=&quot; + data:feedPath + &quot;\&quot;, \&quot;popupwindow\&quot;, \&quot;scrollbars=yes,width=550,height=520\&quot;); return true&quot;' method='post' target='popupwindow'>
        <table width='100%'>
          <tr>
            <td>
              <input class='follow-by-email-address' name='email' placeholder='Email address...' type='text'/>
            </td>
            <td width='64px'>
              <input class='follow-by-email-submit' type='submit' value='Submit'/>
            </td>
          </tr>
        </table>
        <input expr:value='data:feedPath' name='uri' type='hidden'/>
        <input name='loc' type='hidden' value='en_US'/>
      </form>
    </div>
  </div>
  <span class='item-control blog-admin'>
    <b:include name='quickedit'/>
  </span>
</b:includable>
  </b:widget>
  <b:widget id='Subscribe1' locked='false' title='RSS訂閱' type='Subscribe'>
    <b:includable id='main'>
  <div style='white-space:nowrap'>
    <b:if cond='data:title != &quot;&quot;'>
      <h2 class='title'><data:title/></h2>
    </b:if>
    <div class='widget-content'>
      <b:loop values='data:feeds' var='feed'>
        <div expr:class='&quot;subscribe-wrapper subscribe-type-&quot; + data:feed.type'>

          <div expr:class='&quot;subscribe expanded subscribe-type-&quot; + data:feed.type' expr:id='&quot;SW_READER_LIST_&quot; + data:widgetId + data:feed.type' style='display:none;'>
            <div class='top'>
              <span class='inner' expr:onclick='&quot;return(_SW_toggleReaderList(event, \&quot;&quot; + data:widgetId +data:feed.type + &quot;\&quot;));&quot;'>
                <img class='subscribe-dropdown-arrow' expr:src='data:arrowDropdownImg'/>
                <img align='absmiddle' alt='' border='0' class='feed-icon' expr:src='data:feedIconImg'/>
                <data:feed.title/>
              </span>

              <div class='feed-reader-links'>
                <a class='feed-reader-link' expr:href='&quot;https://www.netvibes.com/subscribe.php?url=&quot; + data:feed.encodedUrl' target='_blank'>
                  <img expr:src='data:imagePathBase + &quot;subscribe-netvibes.png&quot;'/>
                </a>
                <a class='feed-reader-link' expr:href='&quot;https://add.my.yahoo.com/content?url=&quot; + data:feed.encodedUrl' target='_blank'>
                  <img expr:src='data:imagePathBase + &quot;subscribe-yahoo.png&quot;'/>
                </a>
                <a class='feed-reader-link' expr:href='data:feed.url' target='_blank'>
                  <img align='absmiddle' class='feed-icon' expr:src='data:feedIconImg'/>
                  Atom
                </a>
              </div>

            </div>
            <div class='bottom'/>
          </div>

          <div class='subscribe' expr:id='&quot;SW_READER_LIST_CLOSED_&quot; + data:widgetId +data:feed.type' expr:onclick='&quot;return(_SW_toggleReaderList(event, \&quot;&quot; + data:widgetId +data:feed.type + &quot;\&quot;));&quot;'>
            <div class='top'>
               <span class='inner'>
                 <img class='subscribe-dropdown-arrow' expr:src='data:arrowDropdownImg'/>
                 <span expr:onclick='&quot;return(_SW_toggleReaderList(event, \&quot;&quot; + data:widgetId +data:feed.type + &quot;\&quot;));&quot;'>
                   <img align='absmiddle' alt='' border='0' class='feed-icon' expr:src='data:feedIconImg'/>
                   <data:feed.title/>
                 </span>
               </span>
             </div>
            <div class='bottom'/>
          </div>

        </div>
      </b:loop>

      <div style='clear:both'/>

    </div>
  </div>

  <b:include name='quickedit'/>
</b:includable>
  </b:widget>
</b:section-contents><b:section-contents id='footer-1'/><b:section-contents id='footer-2-1'>
  <b:widget id='Label3' locked='false' mobile='yes' title='日本旅遊' type='Label' version='1'>
    <b:widget-settings>
      <b:widget-setting name='sorting'>FREQUENCY</b:widget-setting>
      <b:widget-setting name='display'>CLOUD</b:widget-setting>
      <b:widget-setting name='selectedLabelsList'>三重,京都,兵庫,和歌山,大分,大阪,奈良,宮崎,富山,山梨,岐阜,岡山,岩手,廣島,愛媛,愛知,東京,?木,滋賀,熊本,神奈川,福岡,秋田,長野,青森,靜岡,香川,高知,鹿兒島</b:widget-setting>
      <b:widget-setting name='showType'>USER_SELECTED</b:widget-setting>
      <b:widget-setting name='showFreqNumbers'>true</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
  <b:if cond='data:title'>
    <h2><data:title/></h2>
  </b:if>
  <div expr:class='&quot;widget-content &quot; + data:display + &quot;-label-widget-content&quot;'>
    <b:if cond='data:display == &quot;list&quot;'>
       <ul id='tags'>
        <b:loop values='data:labels' var='label'>
          <li>
            <b:if cond='data:blog.url == data:label.url'>
              <span expr:dir='data:blog.languageDirection'><data:label.name/></span>
            <b:else/>
           	  <b:if cond='data:blog.isMobile == &quot;true&quot;'>
                <a expr:dir='data:blog.languageDirection' expr:href='data:label.url + &quot;&amp;max-results=10&quot;'><data:label.name/></a>
              <b:else/>
             	  <a expr:dir='data:blog.languageDirection' expr:href='data:label.url + &quot;?&amp;max-results=10&quot;'><data:label.name/></a>
              </b:if>
            </b:if>
            <b:if cond='data:showFreqNumbers'>
              (<data:label.count/>)
            </b:if>
          </li>
        </b:loop>
      </ul>
    <b:else/>
      <b:loop values='data:labels' var='label'>
        <span expr:class='&quot;label-size label-size-&quot; + data:label.cssSize'>
          <b:if cond='data:blog.url == data:label.url'>
            <span expr:dir='data:blog.languageDirection'><data:label.name/></span>
          <b:else/>
         	  <b:if cond='data:blog.isMobile == &quot;true&quot;'>
              <a expr:dir='data:blog.languageDirection' expr:href='data:label.url + &quot;&amp;max-results=10&quot;'><data:label.name/></a>
            <b:else/>
           	  <a expr:dir='data:blog.languageDirection' expr:href='data:label.url + &quot;?&amp;max-results=10&quot;'><data:label.name/></a>
            </b:if>
          </b:if>
          <b:if cond='data:showFreqNumbers'>
            <span class='label-count' dir='ltr'>(<data:label.count/>)</span>
          </b:if>
        </span>
      </b:loop>
    </b:if>
    <b:include name='quickedit'/>
  </div>
</b:includable>
  </b:widget>
  <b:widget id='Label1' locked='false' mobile='yes' title='文章分類' type='Label' version='1'>
    <b:widget-settings>
      <b:widget-setting name='sorting'>FREQUENCY</b:widget-setting>
      <b:widget-setting name='display'>CLOUD</b:widget-setting>
      <b:widget-setting name='selectedLabelsList'>Google,世界遺產,古厝,古蹟,天文,展覽,教會,日本,日本城,有趣,玉石,玩具,登山,神社,老街,賞花,軍武,鐵馬,開箱,駁二,鳥照片</b:widget-setting>
      <b:widget-setting name='showType'>USER_SELECTED</b:widget-setting>
      <b:widget-setting name='showFreqNumbers'>true</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
  <b:if cond='data:title'>
    <h2><data:title/></h2>
  </b:if>
  <div expr:class='&quot;widget-content &quot; + data:display + &quot;-label-widget-content&quot;'>
    <b:if cond='data:display == &quot;list&quot;'>
      <ul id='tags'>
      <b:loop values='data:labels' var='label'>
        <li>
          <b:if cond='data:blog.url == data:label.url'>
            <span expr:dir='data:blog.languageDirection'><data:label.name/></span>
          <b:else/>
         	  <b:if cond='data:blog.isMobile == &quot;true&quot;'>
              <a expr:dir='data:blog.languageDirection' expr:href='data:label.url + &quot;&amp;max-results=10&quot;'><data:label.name/></a>
            <b:else/>
           	  <a expr:dir='data:blog.languageDirection' expr:href='data:label.url + &quot;?&amp;max-results=10&quot;'><data:label.name/></a>
            </b:if>
          </b:if>
          <b:if cond='data:showFreqNumbers'>
            (<data:label.count/>)
          </b:if>
        </li>
      </b:loop>
      </ul>
    <b:else/>
      <b:loop values='data:labels' var='label'>
        <span expr:class='&quot;label-size label-size-&quot; + data:label.cssSize'>
          <b:if cond='data:blog.url == data:label.url'>
            <span expr:dir='data:blog.languageDirection'><data:label.name/></span>
          <b:else/>
         	  <b:if cond='data:blog.isMobile == &quot;true&quot;'>
              <a expr:dir='data:blog.languageDirection' expr:href='data:label.url + &quot;&amp;max-results=10&quot;'><data:label.name/></a>
            <b:else/>
           	  <a expr:dir='data:blog.languageDirection' expr:href='data:label.url + &quot;?&amp;max-results=10&quot;'><data:label.name/></a>
            </b:if>
          </b:if>
          <b:if cond='data:showFreqNumbers'>
            <span class='label-count' dir='ltr'>(<data:label.count/>)</span>
          </b:if>
        </span>
      </b:loop>
    </b:if>
    <b:include name='quickedit'/>
  </div>
</b:includable>
  </b:widget>
</b:section-contents><b:section-contents id='footer-2-2'>
  <b:widget id='Label2' locked='false' mobile='yes' title='國內旅遊' type='Label' version='1'>
    <b:widget-settings>
      <b:widget-setting name='sorting'>FREQUENCY</b:widget-setting>
      <b:widget-setting name='display'>CLOUD</b:widget-setting>
      <b:widget-setting name='selectedLabelsList'>南投,台中,台北,台南,台東,基隆,宜蘭,屏東,彰化,新北,新竹,桃園,花蓮,苗栗,金門,雲林,高雄</b:widget-setting>
      <b:widget-setting name='showType'>USER_SELECTED</b:widget-setting>
      <b:widget-setting name='showFreqNumbers'>true</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
  <b:if cond='data:title'>
    <h2><data:title/></h2>
  </b:if>
  <div expr:class='&quot;widget-content &quot; + data:display + &quot;-label-widget-content&quot;'>
    <b:if cond='data:display == &quot;list&quot;'>
      <ul id='tags'>
      <b:loop values='data:labels' var='label'>
        <li>
          <b:if cond='data:blog.url == data:label.url'>
            <span expr:dir='data:blog.languageDirection'><data:label.name/></span>
          <b:else/>
         	  <b:if cond='data:blog.isMobile == &quot;true&quot;'>
              <a expr:dir='data:blog.languageDirection' expr:href='data:label.url + &quot;&amp;max-results=10&quot;'><data:label.name/></a>
            <b:else/>
           	  <a expr:dir='data:blog.languageDirection' expr:href='data:label.url + &quot;?&amp;max-results=10&quot;'><data:label.name/></a>
            </b:if>
          </b:if>
          <b:if cond='data:showFreqNumbers'>
             (<data:label.count/>)
          </b:if>
        </li>
      </b:loop>
      </ul>
    <b:else/>
      <b:loop values='data:labels' var='label'>
        <span expr:class='&quot;label-size label-size-&quot; + data:label.cssSize'>
          <b:if cond='data:blog.url == data:label.url'>
            <span expr:dir='data:blog.languageDirection'><data:label.name/></span>
          <b:else/>
         	  <b:if cond='data:blog.isMobile == &quot;true&quot;'>
              <a expr:dir='data:blog.languageDirection' expr:href='data:label.url + &quot;&amp;max-results=10&quot;'><data:label.name/></a>
            <b:else/>
           	  <a expr:dir='data:blog.languageDirection' expr:href='data:label.url + &quot;?&amp;max-results=10&quot;'><data:label.name/></a>
            </b:if>
          </b:if>
          <b:if cond='data:showFreqNumbers'>
            <span class='label-count' dir='ltr'>(<data:label.count/>)</span>
          </b:if>
        </span>
      </b:loop>
    </b:if>
    <b:include name='quickedit'/>
  </div>
</b:includable>
  </b:widget>
  <b:widget id='BlogArchive1' locked='false' title='網誌日期分類' type='BlogArchive'>
    <b:widget-settings>
      <b:widget-setting name='showStyle'>MENU</b:widget-setting>
      <b:widget-setting name='yearPattern'>yyyy</b:widget-setting>
      <b:widget-setting name='showWeekEnd'>true</b:widget-setting>
      <b:widget-setting name='monthPattern'>MMMM yyyy</b:widget-setting>
      <b:widget-setting name='dayPattern'>MMM dd</b:widget-setting>
      <b:widget-setting name='weekPattern'>MM/dd</b:widget-setting>
      <b:widget-setting name='chronological'>false</b:widget-setting>
      <b:widget-setting name='showPosts'>false</b:widget-setting>
      <b:widget-setting name='frequency'>MONTHLY</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
  <b:if cond='data:title != &quot;&quot;'>
    <h2><data:title/></h2>
  </b:if>
  <div class='widget-content'>
  <div id='ArchiveList'>
  <div expr:id='data:widget.instanceId + &quot;_ArchiveList&quot;'>
    <b:include cond='data:style == &quot;HIERARCHY&quot;' data='data' name='interval'/>
    <b:include cond='data:style == &quot;FLAT&quot;' data='data' name='flat'/>
    <b:include cond='data:style == &quot;MENU&quot;' data='data' name='menu'/>
  </div>
  </div>
  <b:include name='quickedit'/>
  </div>
</b:includable>
    <b:includable id='flat' var='data'>
  <ul class='flat'>
    <b:loop values='data:data' var='i'>
      <li class='archivedate'>
        <a expr:href='data:i.url'><data:i.name/></a> (<data:i.post-count/>)
      </li>
    </b:loop>
  </ul>
</b:includable>
    <b:includable id='interval' var='intervalData'>
  <b:loop values='data:intervalData' var='interval'>
    <ul class='hierarchy'>
      <li expr:class='&quot;archivedate &quot; + data:interval.expclass'>
        <b:include cond='data:interval.toggleId' data='interval' name='toggle'/>
        <a class='post-count-link' expr:href='data:interval.url'>
          <data:interval.name/>
        </a>
        <span class='post-count' dir='ltr'>(<data:interval.post-count/>)</span>
        <b:include cond='data:interval.data' data='interval.data' name='interval'/>
        <b:include cond='data:interval.posts' data='interval.posts' name='posts'/>
      </li>
    </ul>
  </b:loop>
</b:includable>
    <b:includable id='menu' var='data'>
  <select expr:id='data:widget.instanceId + &quot;_ArchiveMenu&quot;'>
    <option value=''><data:title/></option>
    <b:loop values='data:data' var='i'>
      <option expr:value='data:i.url'><data:i.name/> (<data:i.post-count/>)</option>
    </b:loop>
  </select>
</b:includable>
    <b:includable id='posts' var='posts'>
  <ul class='posts'>
    <b:loop values='data:posts' var='post'>
      <li><a expr:href='data:post.url'><data:post.title/></a></li>
    </b:loop>
  </ul>
</b:includable>
    <b:includable id='toggle' var='interval'>
  <a class='toggle' href='javascript:void(0)'>
    <span expr:class='&quot;zippy&quot; + (data:interval.expclass == &quot;expanded&quot; ? &quot; toggle-open&quot; : &quot;&quot;)'>
      <b:if cond='data:interval.expclass == &quot;expanded&quot;'>
        &#9660;&#160;
      <b:elseif cond='data:blog.languageDirection == &quot;rtl&quot;'/>
        &#9668;&#160;
      <b:else/>
        &#9658;&#160;
      </b:if>
    </span>
  </a>
</b:includable>
  </b:widget>
  <b:widget id='Stats1' locked='false' title='訪客人數' type='Stats'>
    <b:widget-settings>
      <b:widget-setting name='showGraphicalCounter'>false</b:widget-setting>
      <b:widget-setting name='showAnimatedCounter'>false</b:widget-setting>
      <b:widget-setting name='showSparkline'>true</b:widget-setting>
      <b:widget-setting name='sparklineStyle'>WHITE_TRANSPARENT</b:widget-setting>
      <b:widget-setting name='timeRange'>ALL_TIME</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
  <b:if cond='data:title != &quot;&quot;'><h2><data:title/></h2></b:if>
  <div class='widget-content'>
    <!-- Content is going to be visible when data will be fetched from server. -->
    <div expr:id='data:widget.instanceId + &quot;_content&quot;' style='display: none;'>
      <!-- Counter and image will be injected later via AJAX call. -->
      <b:if cond='data:showSparkline'>
        <img alt='Sparkline' expr:id='data:widget.instanceId + &quot;_sparkline&quot;' height='30' width='75'/>
      </b:if>
      <span expr:class='&quot;counter-wrapper &quot; + (data:showGraphicalCounter ? &quot;graph-counter-wrapper&quot; : &quot;text-counter-wrapper&quot;)' expr:id='data:widget.instanceId + &quot;_totalCount&quot;'>
      </span>
      <b:include name='quickedit'/>
    </div>
  </div>
</b:includable>
  </b:widget>
</b:section-contents></html>