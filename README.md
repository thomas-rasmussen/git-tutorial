# git-tutorial
Git tutorial

[Link to tutorial](https://thomas-rasmussen.github.io/git-tutorial/)

TODO
- introduction-to-git.qmd notes:
  - "Everything is checksummed" section: maybe add some more details and/or write an appendix?
  - "Screwing up" section: There will be a section somewhere at some point on how to undo stuff in Git.
    add a crossreference?
- Prerequisites listed in index.qmd. If the scope of the tutorial ends up covering how to use GitHub,
  update to include that you need to have setup a GitHub account.
- Work on making a rough outline on all the topics that are to be covered.
- Find more resources that are worth including int further-reading.qmd
- Add information in git-for-windows.qmd on how to make comments with lines starting with "#".
- git-for-windows: git BASH comes with a "diff" command that might be relevant to mention? We will use
  git diff when comparing two versions of a file in a repository, but if we want to compare to arbitrary files
  then the diff command is useful. Might also be relevant somewhere in tutorial?
- Consider how examples and exercises are to be presented in tutorial. Make some tests / template code.
- Read up on Quarto book documentation, pick a theme, set options for the book etc.  
- Try to figure out whyfont in the .svg diagrams are (sometimes?) changed. The diagrams are
  exported to .svg and should have the helvetica font embedded, but when shown in
  quarto it is clearly some serif fonttype. This might be because the application/browser
  does not actually know how to handle embedded fonts? Even if they are actually available?
  Maybe it works in other browsers. Check chrome for example. If it is because of firefox, then
  meh, just leave it as is? Alternatively convert diagrams to .png files instead.
- For now, diagram title/captions are hardcoded into the diagram, but it would
  be nice if captions could be made in Quarto. Problem is that short captions are
  left aligned, possible to the left of the left edge of the image, which looks
  silly for short captions.
- Work more on js code that colors words? It would be great if it could be made even more flexible.
  Is it possible to make it into a function with parameters, and then apply that function in an HTML
  tag attribute? This way the function to take arguments specifying what words to insert/color so
  that it can cover a greater range of command line texts that needs to be augmented / color coded.
