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

Draft of outline of tutorial:

Topics that should be included, but it is unclear where:
- .gitignore. Would probably make sense to include very early. Maybe in chapter with
  git add / git commit or in a chapter close after.
- git diff / diffs in general. Also feels like something that should be included early, m  maybe close after git commit / git log?
- git tag. Small subject, but useful. Maybe in chapter where refs and branches are introduced?
- git show. Usefull command that should probably be included somewhere.
- A part II chapter with some techincal information that is of interest, but did not fit into any other chapter naturally maybe. Or maybe if it was not important enough to introduce elsewhere, then maybe it is too technical for this tutorial?

PART I:
1) Preface
2) Introduction to version control and Git
   - Explain version control in general and what Git is, broadly speaking
3) "Getting started with Git chapter". Covers basic use of 
   - git init
   - git add
   - git commit
   - git help
   - git status
4) git log chapter
   - talk about the commit history of a project
   - introduce checksums

4.5) Chapter on "undoing" changes?
  - Is this the appropriate? Need to talk about reflogs first?
  - Need to introduce as early as possible so that people have the tools to undo stuff in exercises and real life.
  - introduce git revert / git reset git. Others? git clean git rm?

5) Branching chapter
   - At this point it probably makes sense to introduce branching
   - Introduce git branch, git switch and/or git checkout
   - Would probably make a lot of sense to talk about refs at the start of this chapter?

6) Merging chapter
   - Introduce merging.
   - Probably makes sense to introduce merging in general first, then talk about fast-forwards. This leads directly into rebasing. Might make sense to talk about rebasing here, instead of in part II.

7) Remotes chapter
  - Might not be esssential to daily use of Git, but very important to understand, and facilitates
    introducing GitHub later.
  - introduce git fetch/push/pull
  - Talk about making local backups using remotes.
  - Further notes on how refs works here?

8) Workflows
   - Could also be in Part II
   - Talking about workflows / how to use Git in projects, branching stratigies etc.
     This is not a tutorial for software developers, so talking about Gitflow,
     trunk-based development and whatever is probably not helpful at all. Probably better     to talk about it in the context of a much simpler setup, eg a single developer
     working on a simple project with a mostly linear history, and small team projects.
     Talk about maybe using a setup with a main/dev branch and feature branches. That
     workflow is very simple and covers pretty much every relevant scenario?

Part II:
- Github chapter
  - Currently at a stage where it feels like there might be ample amount of time to talk about Github.
    In any case it would not hurt to include the chapter, we can always prioritize other chapters at the
    seminar.
  - Short section on how to setup an account
  - We need to set up authentication. Installing gh CLI is proably the most straight forward and easy to
    use approach. We can skip all the technical details about how authentication works?
  - Talk about how GitHub can be though of / used as a remote branch, and how it might be a good tool
    for sharing code / documentation, making static websites etc. Maybe not too many actual details since
    it is out of scope?
  - Introduce issues and forking and other basic GitHub things. But probably don't go to much into
    details about this, this is a Git tutorial, not a GitHub tutorial.
- Git internals chapter
  - Probably way to dry to make a chatper like this as is done in Pro Git. Current plan is to instead
    spread relevant technical details and introduce them where relevant in other chapters.
- Chapter on git stash.
  - Not important enough to make it to Part I, but maybe useful enough to warrent adding a chapter on it
    in part II?
- git rebase chapter.
  - important enough to be part of part I, but is an isolated thing that fits into part II, so maybe put
    it here?

Appendixes:
- git for windows chapter
  - Info on installing git BASH
  - Introduce all the common commands that are used in the tutorial. Link to some documentation but keep
    information in chapter very light at focuses on how the commands are used here.
  - Introduce some tips and tricks for the command line, like ctrl+l to clear the log, autocompletion
    using tab etc.
- GUI chapter
  - Have made a short draft with a "not a good idea" conclusion, but perhaps it is better to scrap this
    since it does not add anything of value to the tutorial. Maybe add a sentence or two in the preface
    explaining why we have chosen to focuse on learning Git on the command line instead.
- Configuration of Git chapter
  - Only mention very basic configuration in one of the first chapters, then put everything else here?
    Information is important/relevant, but probably out of scope to make it to the main text.
  - Maybe move to part II instead and add some exercises to chapter?
- Resources
