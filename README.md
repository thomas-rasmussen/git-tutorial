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

**"Merging and branching" and "Remotes" chapters**

Only rough outlines / first draft of chapters so far. These chapters need a lot of work still. A lot of the current content is now only explained in appendixes, so some topics can be removed/simplified to make the main chapters more focused on learning how to use Git without introducing too many technical details.


**---TODO: technical stuff---**

- Need to go through all the CSS classes defined in styles.css. Some are not used anymore, and it might be worth it to rename some of the existing classes to something more appropriate.

- Preface diagram: consider deleting this diagram. It does not add anything of values, and its design is fundamentally incompatible with the design that is going to be used for diagrams in the tutorial itself.

- Rerun all examples and exercises from a clean Git for Windows installation,
  to make sure everything works as intended.

- Use of CSS to colour terminal output has been streamlined. Currently using some of the default mintty colours, but they don't seem to correspond exactly with what is shown in Git BASH by default for some colours, even though they should be the same as the default mintty colours. Consider tweaking colours to match better.

- Make sure that "git commit -m 'message'" is consistently used instead of "git commit -m'message'".

- In some cases, simulated output from the terminal and notepad documents contains blank lines at the end. Figure out how to remove these. This has probably something to do with multiple nested div and pre tags, and/or making a new line after starting a pre tag or putting </pre> on a new line.

- When exporting .drawio diagrmas to .svg, remember to set "Appereance" to "light" to make sure diagrams are displayed correctly when viewed in a browser using a dark theme.

- So far, when colouring commit IDs in lines from git log output that includes eg "(HEAD -> main)", the opening "(" has been included in the colouring of the commit ID, since the same colour is (currently) used. This was originally a decision based on laziness. Fix this throughout the entire tutorial, giving the "() its own span using the .col-yellow CSS class.

- Align the style of all diagrams to the style used in the "The staging area" appendix. Also combine all .drawi diagrams for a chapter in single files, including the individual diagrams in tabs.

- Make a fresh installation of Git for Windows and check what the default branch name is using the newest
version of Git for Windows. If it is not "main", consider if "master" should be used in tutorial.

- Colouring git status output: it seems like the arrow after HEAD is sometimes blue
  instead of yellow. This is some colouring error in Git for Windows? Make sure that
  the arrow is consistently coloured yellow in output.

**---TODO: exercises---**

In some cases, the exercises are almost identical replications of examples in the corresponding chapters. Think about how the exercises can be modified to feel more unique. Maybe by trying to describe more realistic examples, or by introducing details and twists that separates them from the examples. At least for some exercises.

**---TODO: potential topics that are not yet included---**

- it could be useful to introduce "git revert" in the context of how to safely revert changes that have shared with collaborators. Consider adding in remotes chapter or another appropriate place.

- Scenarios where rewriting history is problematic is currently discussed in part2-git-rebase. Would it be more appropriate to move this to part1-ch07-remotes?
