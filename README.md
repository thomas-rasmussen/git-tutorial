# git-tutorial
Git tutorial

[Link to tutorial](https://thomas-rasmussen.github.io/git-tutorial/)

TODO
- The current scope of the tutorial does not include an in-depth look at what the index is and how it works. But it is very relevant to include some information about this, since it helps shape the correct mental model of how Git works. This information could be put in a separate part II chapter, or maybe there is an appropriate place in on of the chapters.
- Preface diagram: arrows are pointing the wrong way. They should point backwards toward their parent commits.
- Branching and mgergin chapter todo:

3) Start writing first drafts of texts in each section. 

4) Begin making more serious first drafts of the text in the chapter.

- "Undoing changes" chapter: git revert not introduced on purpose since it will rarely be used by the intented audience. But it is a useful command, and it might be relevant to introduce at some point. Maybe at an appropriate place in Part II or as a stand-lone chapter.
- "Undoing changes" chapter: The chapter currently does not show how to "undo" a commit. This would require introducing git reset --hard <checksum>. Can this also be done with git restore?
- Consideration: It might make the tutorial a lot better, if it is stated upfront in the preface that the target audience is researchers/coders/statisticians whatever, and then reformulating all examples and exercises in that context. It might make it a lot easier for the audience to relate to the material, when they are presented with examples of problems/situations that occur for them too.
- "Getting started" chapter: Add exercise where reader is rewquested to do the basic configuration explained in the chapter.
- We should stick to using git switch to switch/create brances as is the sole purpose of that command. git checkout is intended to checkout commits, not branches. It makes for better mental model to separate these two things?
- introduction-to-git.qmd notes:
  - "Everything is checksummed" section: maybe add some more details and/or write an appendix?
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
- Configuration of Git chapter: consider if it makes sense to include some info on formatting and whitespace issues, and how git has the core.autocrlf and core.whitespace options to help with them. core.autocrlf = true is very important when working on a Windows system, but since this is already the default value when using Git for Windows which we assume people are using, maybe this is too much to include?
- Configuration of Git appendix: needs to be proof-read, there are multiple grammar issues, and technical mistakes with paths in examples, eg in local level subsection the path to the config file should not start with a "/" which indicates that the path is an absolute path from the root directory.
- configuration of Git appendix: Consider if it would make sense to add some concrete examples and exercises. It would be easy and straight forward and might make the appendix a lot more useful?
- configuration of Git appendix: need to be more consistent with using "option" or "setting".
- git for windows chapter: Introduce some tips and tricks for the command line, like ctrl+l to clear the log, autocompletion using tab etc.
- It currently feels like remotes should be introduced before branching, so that remotes can be used in examples regarding merging and rebasing.
- using remotes as backups initiatedby git cloen: by default the remote is probably not saving a hard copy of repo (to save space). Look at --no-hardlinks options for git clone
  to see how to circumvent this.
- terminal output in general: right now using (generic) output from BASH shell on Linux. The output from Git BASH is more geared toward Git use, with colours etc. Consider if it is worth it to
  match terminal output in tutorial exactly as it is in Git BASH. At least consider splitting terminal output up into segments when running multiple commands with a lot of output, so it is easier
  to see the commands and correpsonding output.
- ATM BASH commands have a "$" prefix reflecting how the terminal looks like. This is also to prevent people from copy+pasting commands from the tutorial directly to terminal to run them (this should work). The idea is that you need to learn by doing. But maybe this is too strict, and it would be handy to be able to copy + pasting commands. Especially when setting up repositories for examples and exercises, to avoid a lot of typing. Consider if it makes sense to remove the prefix from commands and add "copy to clipboard" buttons (if possible) to codeblocks in the tutorial, but still urge people to type the commands themselves.


Topics that should be included, but it is unclear where:
- .gitignore. Would probably make sense to include very early. Maybe in chapter with
  git add / git commit or in a chapter close after.
- git diff / diffs in general. Also feels like something that should be included early, m  maybe close after git commit / git log?
- git tag. Small subject, but useful. Maybe in chapter where refs and branches are introduced?
- git show. Usefull command that should probably be included somewhere.
- A part II chapter with some techincal information that is of interest, but did not fit into any other chapter naturally maybe. Or maybe if it was not important enough to introduce elsewhere, then maybe it is too technical for this tutorial?
- Might be worth it mention git gc somewhere? Already run automatically when using git commit / git rebase etc, so maybe this is not something that is relevant for this tutorial.
- GitHub CLI: there seems to be an issue where the GitHub CLI stores login credentials in plain text if the CLI is used by a user without admin privilies. This does not immidiately seem like a problem if the CLI was used through git BASH on Windows on a DCE work pc, since we (apparently) have admin privilies on these. But remember to test this on a fresh laptop later to make sure we do not use an approach that saves credentials in plain text.
- tags: something that is worth mentioning at some point. But where is it most appropriate? Short separate chapter in part II, where you could also immidiately show how tags can be useful in practice?
- Confusing Git terminology and unclear definitions:
Som people are less than happy:
https://commonjoe.gitlab.io/git-clarification/
Read more about this. His point about index/cache/staging area/etc is certainly true.
https://stevelosh.com/blog/2013/04/git-koans/ pure comedy gold!
- Consider adding a Git glossary as an appendix, or maybe just a link to one. Maybe links to cheatsheets?
- Along the way, or maybe as an appendix/part II chapter, the downsides of Git should be mentioned? Like, some terminology is confusing at best, inconsistencies, lack of clear definitions of terms etc.
- Consider if the tree command should be used to more clearly illustrate folder structures. Unfortunately, this command needs to be downloaded and installed, so it is not something that can/should be used in example code since users won't be able to use it themselves, especially not if they are using the Git for Widnows terminal. But maybe use to make diagrams to include alongside code to make it more clear how directories look like? But how do we do this in a good way then? Using screenshots of the terminal output from the tree command sounds awful. Maybe it would not be so bad manually constructing similar output in draw.io? Can the output from the terminal maybe simply be pasted into a text box in draw.io and formatted?
- Make a part II chapter briefly talking about the advantages of using touch typing, (Neo)Vim, lazygit, and CLI programs in general, eg install commands like tree etc. Just a short chapter meant as an inspiration to those who want to explore going in the direction of using the terminal in general. Maybe the chapter should be called something like "Switching to using the terminal".
- Add part II chapter on reflog. Mainly as a tool to recover "lost" commits?

Found this very old resource:
https://github.com/schacon/gitbook
Is this some form of early iteration of the Pro Git book? In any case, it seems like it might contain a lot
technical information about how Git works, that might not be explained in newer sources. But maybe this information
is outdated?

Look at this resource as well:
https://think-like-a-git.net
https://www.youtube.com/watch?v=xbLVvrb2-fY
might be of interest: https://gitfu.fyi/

Good resource for why to aviod merge commits?
https://gitfu.fyi/tips/avoid-merge-commits/
