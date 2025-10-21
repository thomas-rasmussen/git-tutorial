# git-tutorial
Git tutorial

[Link to tutorial](https://thomas-rasmussen.github.io/git-tutorial/)

TODO
- "Getting started" chapter: Add exercise where reader is rewquested to do the basic configuration explained in the chapter.
- At an appropriate point, introduce .gitignore files. It is probably best to give a quick introduction on what they are and how to use them, and then put some more detailed information that is very relevant, but not basic use, into an appendix.
- introduction-to-git.qmd notes:
  - "Everything is checksummed" section: maybe add some more details and/or write an appendix?
  - "Screwing up" section: There will be a section somewhere at some point on how to undo stuff in Git.
    add a crossreference?
- Prerequisites listed in index.qmd. If the scope of the tutorial ends up covering how to use GitHub,
  update to include that you need to have setup a GitHub account.
- Work on making a rough outline on all the topics that are to be covered.
- Find more resources that are worth including int further-reading.qmd
- Add information in git-for-windows.qmd on
    - how to make comments with lines starting with "#".
    - Maybe add footnote with fun little story on why the home directory is called tilde?
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
- Include a Part II chapter on git stash? Look more into git worktree. If relevant
  maybe also talk about this in this chapter as an alternative to using git stash?
- Configuration of Git chapter: consider if it makes sense to include some info on formatting and whitespace issues, and how git has the core.autocrlf and core.whitespace options to help with them. core.autocrlf = true is very important when working on a Windows system, but since this is already the default value when using Git for Windows which we assume people are using, maybe this is too much to include?
- Configuration of Git appendix: needs to be proof-read, there are multiple grammar issues, and technical mistakes with paths in examples, eg in local level subsection the path to the config file should not start with a "/" which indicates that the path is an absolute path from the root directory.
- configuration of Git appendix: Consider if it would make sense to add some concrete examples and exercises. It would be easy and straight forward and might make the appendix a lot more useful?
- configuration of Git appendix: need to be more consistent with using "option" or "setting".
- git for windows chapter: Introduce some tips and tricks for the command line, like ctrl+l to clear the log, autocompletion using tab etc.
- GUI chapter: Have made a short draft with a "not a good idea" conclusion, but perhaps it is better to scrap this since it does not add anything of value to the tutorial. Maybe add a sentence or two in the preface explaining why we have chosen to focuse on learning Git on the command line instead.

Topics that should be included, but it is unclear where:
- .gitignore. Would probably make sense to include very early. Maybe in chapter with
  git add / git commit or in a chapter close after.
- git diff / diffs in general. Also feels like something that should be included early, m  maybe close after git commit / git log?
- git tag. Small subject, but useful. Maybe in chapter where refs and branches are introduced?
- git show. Usefull command that should probably be included somewhere.
- A part II chapter with some techincal information that is of interest, but did not fit into any other chapter naturally maybe. Or maybe if it was not important enough to introduce elsewhere, then maybe it is too technical for this tutorial?




