# Git tutorial

[Link to tutorial](https://thomas-rasmussen.github.io/git-tutorial/)

TODO: Rework of "Git for Windows" chapter:

- The entire chapter needs to be rewritten with a focus on introducing commands that are used ubiquitously in the tutorial, and with way less focus on the general capability/documentation of each command. Maybe structure with sections on how to do common task, e.g. a section for how to list files in a directory,
how to delete af file etc.

- Add information on how lines starting with "#" are comments.

- Introduce some tips and tricks for the command line, like ctrl+l to clear the log, autocompletion using tab etc.


**---TODO: content---**

**"Getting started" chapter:**

- Add exercise where reader is requested to do the basic configuration explained in the chapter.


- Using remotes as backups initiatedby git clone: by default the remote is probably not saving a hard copy of repo (to save space). Look at --no-hardlinks options for git clone to see how to circumvent this.

**"Undoing changes" chapter:**

- git revert not introduced on purpose since it will rarely be used by the intended audience. But it is a useful command, and it might be relevant to introduce at some point. Maybe at an appropriate place in Part II or as a stand-lone chapter.

- Currently does not show how to "undo" a commit. This would require introducing git reset --hard <checksum>. Can this also be done with git restore? UPDATE: the chapter now includes this, but in an unfinished manner? Needs further work.

- Consider if it is better to merge the git reflog appendix into this chapter as a final section since it is a natural extension of this topic.


**"Introduction to git" chapter:**

- "Everything is checksummed" section: maybe add some more details and/or write an appendix?


**"Configuration of Git" chapter:**

- Consider if it makes sense to include some info on formatting and whitespace issues, and how git has the core.autocrlf and core.whitespace options to help with them. core.autocrlf = true is very important when working on a Windows system, but since this is already the default value when using Git for Windows which we assume people are using, maybe this is too much to include? UPDATE: seems important to look more into this, since Git is constantly spamming the user about chaning line endings. Important to understand what is going on.

- Needs to be proof-read, there are multiple grammar issues, and technical mistakes with paths in examples, eg in local level subsection the path to the config file should not start with a "/" which indicates that the path is an absolute path from the root directory.

- Consider if it would make sense to add some concrete examples and exercises. It would be easy and straight forward and might make the appendix a lot more useful?

- Need to be more consistent with using "option" or "setting".


**---TODO: technical stuff---**

- use of CSS to colour (Git) terminal output has been streamlined. Currently using default mintty colours, but they don't seem to correspond exactly with what is shown in Git BASH by default for some colours, even though they should be the same as the default mintty colours. Consider tweaking colours to match better.


**---Topics that might be needed/interesting to include---**

- The concept of references is currently not properly introduced? In particular it is not explained what HEAD is anywhere? This needs to be remedied. 

- The current scope of the tutorial does not include an in-depth look at what the index is and how it works. But it is very relevant to include some information about this, since it helps shape the correct mental model of how Git works. This information could be put in a separate part II chapter, or maybe there is an appropriate place in on of the chapters.

- .gitignore. Would probably make sense to include very early. Maybe in chapter with git add / git commit or in a chapter close after.

- git tag. Small subject, but useful. Maybe in chapter where refs and branches are introduced?

- git show. Useful command that should probably be included somewhere.

- A part II chapter with some technical information that is of interest, but did not fit into any other chapter naturally maybe. Or maybe if it was not important enough to introduce elsewhere, then maybe it is too technical for this tutorial? 
- Consider restructuring some of the more technical content in the tutorial. Instead of going into depth with technical introductions all over the place when new concepts have to be introduced, give a very brief introduction instead, and refer to an appendix with more in-depth explanations. In connection with this, maybe some of the chapters should be more focused on showing how to use Git commands as fast as possible with briefer technical introductions, that are then explained in more details later in the chapter and/or in an appendix.

- GitHub CLI: there seems to be an issue where the GitHub CLI stores login credentials in plain text if the CLI is used by a user without admin privilies. This does not immidiately seem like a problem if the CLI was used through git BASH on Windows on a DCE work pc, since we (apparently) have admin privilies on these. But remember to test this on a fresh laptop later to make sure we do not use an approach that saves credentials in plain text.
