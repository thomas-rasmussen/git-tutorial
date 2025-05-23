# git-tutorial
Git tutorial

[Link to tutorial](https://thomas-rasmussen.github.io/git-tutorial/)

TODO

- Consider how examples and exercises are to be presented in tutorial. Make some tests / template code.
- Read up on Quarto book documentation, pick a theme, set options for the book etc.
- Making a book for all the materials is definitely a good idea, but it is also necessary
  to make some slides for the presentation? Probably yes. It would be better to introduce concepts
  based on diagrams and keypoints on slides, than showing massive amounts of text from book?
  Should be easy to throw something together based on code from book?
  
- Try to figure out whyfont in the .svg diagrams are changed. The diagrams are
  exported to .svg and should have the helvetica font embedded, but when shown in
  quarto it is clearly some serif fonttype. This might be because the application/browser
  does not actually know how to handle embedded fonts? Even if they are actually available?
  Maybe it works in other browsers. Check chrome for example. If it is because of firefox, then
  meh, just leave it as is? Alternatively convert to .png files instead.
- For now, diagram title/captions are hardcoded into the diagram, but it would
  be nice if captions could be made in Quarto. Problem is that short captions are
  left aligned, possible to the left of the left edge of the image, which looks
  silly for short captions.
