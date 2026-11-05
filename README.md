# Git tutorial

Source code for a Git tutorial for beginners. The rendered tutorial can be found [here](https://thomas-rasmussen.github.io/git-tutorial/).

How to render tutorial and slides:

- To render the tutorial use the command "quarto render".

- To render the slides use the command "quarto render slides.qmd"

Note, that the slides are not hosted on GitHub Pages.

The tutorial was developed using Quarto and RStudio.

**---TODO: DCE seminar---**

- Slides currently just rendered in root of project with a separate "quarto render slides.qmd" command. This means that the rendered .html file is not published on GitHub pages. this is probably irrelevant. In any case it is not clear to me how to make a better solution. Could maybe manually move rendered slides to doc folder before making commits, but this does not seem feasible.

- Make slides for seminar. Focus on including slides with diagrams from tutorial, and reminders on when to do live-coding examples. Add notes on these slides for what to go through in example?

- How do I best remember what to do in examples without having to do excessive preparations for the seminar? Keep tutorial open on phone beside computer for help if I can't remember exact commands I want to illustrate?

- Keep switching between full-screen slides and a full-screen terminal? Have to test this before seminar, and maybe configure font-size in terminal.

- Have to prepare laptop for seminar. Make sure that the Git installation has not been configured, and is up to date. Remember to set core.editor to Vim if it has been changed. Maybe best to delete Git for Windows and make a fresh installation of everything needed for the seminar.

- Need to familiarize myself with the projector equipment. Pointer/slide changer often seems to not be working. Make sure to check this beforehand.

- Make a program for the day. Include information on each planned session and estimated start and end time. Include information on (lunch) breaks to get a timeline for the entire day.


**---TODO: content---**

**Chapter 5-11:**

Only rough outlines / first draft of chapters so far. These chapters need a lot of work still.

**"Git references" chapter:**

Outline of scope of chapter has been made, but wait with actually writing the chapter until it is clear what is covered in the "Branches and merging" and "Remote repositories" chapters.

**"GitHub" chapter:**

Consider in more detail how gh auth login -p https -cw works regarding storing of credentials. We are working under the assumption that readers have a credential manager installed/configured so that credentials are not stored as plain text which is a potential security risk. Figure out if a credential manager is always installed on a windows machine, and if not, if this is something that can be explained how to do.

**---TODO: technical stuff---**

- Use of CSS to colour terminal output has been streamlined. Currently using some of the default mintty colours, but they don't seem to correspond
  exactly with what is shown in Git BASH by default for some colours, even though they should be the same as the default mintty colours.
  Consider tweaking colours to match better.
  
- So far, the "git commit" flag "-m" is consistently used on the form "git commit-m"commit message". It is probably better to use "git commit -m "abc"" instead, since this is easier for beginners to understand.

- In some cases, simulated output from the terminal and notepad documents contains blank lines at the end. Figure out how to remove these. This has probably something to do with multiple nested div and pre tags, and/or making a new line after starting a pre tag or putting </pre> on a new line.

- Need to re-export all .drawio diagrams to .svg, and set "Appeareance" to "light" when exporting to make sure the diagrams are displayed correctly when viewed in a browser with a dark theme.

- So far, when colouring commit IDs in lines from git log output that includes eg "(HEAD -> main)", the opening "(" has been included in the colouring of the commit ID, since the same colour is (currently) used. This was originally a decision based on laziness. Fix this throughout the entire tutorial, giving the "() its own span using the .col-yellow CSS class.

- Many diagrams look a little crude. If time permits it, work on making them more visually polished.

**---TODO: potential topics that are not yet included---**

- "git add -p": seems important and relevant but does not really fit anywhere currently. Maybe in an appendix on the staging area?

- it could be useful to introduce "git revert" in the context of how to safely revert changes that have shared with collaborators. Consider adding in remotes chapter or another appropriate place.
