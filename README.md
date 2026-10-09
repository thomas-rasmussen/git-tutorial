# Git tutorial

[Link to tutorial](https://thomas-rasmussen.github.io/git-tutorial/)


**---TODO: content---**

**"Getting started" chapter:**

- Mention in the start of the chapter that we are assuming the reader is familiar with basic Bash commands, and
  refer to the "Git Bash" appendix for readers who have missed this in the preface.

- Remove comments on basic Bash commands. It is assumed the reader is familiar with these at this point.

- Add exercise where reader is requested to do the basic configuration explained in the chapter.

- Introduce file terms "commited", "modified" and "staged" that have been removed from previous chapter introducing version control and Git. Incorporate in the "Lifecycle of files" section?

- Using remotes as backups initiatedby git clone: by default the remote is probably not saving a hard copy of repo (to save space). Look at --no-hardlinks options for git clone to see how to circumvent this.

- Consider adding a very short introductino to git diff in this chapter to show changes that are staged etc. Keep it very short, focused on how to use it, and then refer to the chapter concerned with git diff for more details.

- As above, illustrating basic uses of git log could be valuable.

- after creating a repo, there is a git message mentioning the branch name. Make a short comment on this name might be different depending on your setup / version of Git. But d not go into any details. maybe reference branch chapter.

- introduce git add . as the second example, not the first.

- Consider removing exercise 4 concerning .gitignore files. The reader is not equipped for this exercise at this point. 

- The first time an example is made staging changes to the staging area prompting Git to give a warning about changing line endings from LF to CRLF, Assure the reader that this message can be ignored, it is some technical stuff working as intended. This is a level of detail we will not cover in the tutorial, it seems to technical and not worth it to discuss since everything is working as intended by default?

- Change all uses of "index" to "staging area" to be consistent with previous chapter. Maybe once, at the start, mention that the staging area is also refered to as the index, especially in Git's internal documentation (at least sometimes). "staging area" is much easier to understand for beginners, is (the most?) common choice of term, and goes together with "staging" files etc.

scope outline:
1. Configure name and email; optionally editor.
2. git init and briefly git clone.
3. Explain working tree / staging area (index) / repository and tracked/untracked/modified/staged.
4. git status.
5. git add <file>, then mention git add ..
6. Optionally git diff.
7. git commit -m.
8. Optionally git log --oneline just to see the resulting commit.
9. git help <command> and git <command> -h.
10. Exercises reproducing that workflow.


**Introduction to version control and Git:**

- Review diagrams and images in chapter:

  - Would it be better to drop the two column design, and simply put diagrams in-between text? The current design does not look good on a mobile for example.

  - Does the terminology in the diagrams match the terminology in the text

  - Is the information in the diagrams correct and informative

  - centralized VCS diagram: should a server be included in the diagram? Should it be mentioned in the text that a server is still often used as a primary repository?


**"Undoing changes" chapter:**

- git revert not introduced on purpose since it will rarely be used by the intended audience. But it is a useful command, and it might be relevant to introduce at some point. Maybe at an appropriate place in Part II or as a stand-lone chapter.

- Currently does not show how to "undo" a commit. This would require introducing git reset --hard <checksum>. Can this also be done with git restore? UPDATE: the chapter now includes this, but in an unfinished manner? Needs further work.

- Consider if it is better to merge the git reflog appendix into this chapter as a final section since it is a natural extension of this topic.


**---TODO: technical stuff---**

- use of CSS to colour (Git) terminal output has been streamlined. Currently using default mintty colours, but they don't seem to correspond exactly with what is shown in Git BASH by default for some colours, even though they should be the same as the default mintty colours. Consider tweaking colours to match better.


**---Topics that might be needed/interesting to include---**

- The concept of references is currently not properly introduced? In particular it is not explained what HEAD is anywhere? This needs to be remedied. 

- The current scope of the tutorial does not include an in-depth look at what the index is and how it works. But it is very relevant to include some information about this, since it helps shape the correct mental model of how Git works. This information could be put in a separate part II chapter, or maybe there is an appropriate place in on of the chapters.

- .gitignore. Would probably make sense to include very early. Maybe in chapter with git add / git commit or in a chapter close after.

- git tag. Small subject, but useful. Maybe in chapter where refs and branches are introduced?

- git show. Useful command that should probably be included somewhere.

- git add -p. Too technical to add talk about early in the tutorial, but a very useful flag that should be discussed somewhere. Figure out where it would make most sense to include this. Could maybe also be as an exercise in a relevant chapter in the later part of the tutorial?

- A part II chapter with some technical information that is of interest, but did not fit into any other chapter naturally maybe. Or maybe if it was not important enough to introduce elsewhere, then maybe it is too technical for this tutorial? 
- Consider restructuring some of the more technical content in the tutorial. Instead of going into depth with technical introductions all over the place when new concepts have to be introduced, give a very brief introduction instead, and refer to an appendix with more in-depth explanations. In connection with this, maybe some of the chapters should be more focused on showing how to use Git commands as fast as possible with briefer technical introductions, that are then explained in more details later in the chapter and/or in an appendix.

- GitHub CLI: there seems to be an issue where the GitHub CLI stores login credentials in plain text if the CLI is used by a user without admin privilies. This does not immidiately seem like a problem if the CLI was used through git BASH on Windows on a DCE work pc, since we (apparently) have admin privilies on these. But remember to test this on a fresh laptop later to make sure we do not use an approach that saves credentials in plain text.
