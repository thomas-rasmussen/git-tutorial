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


**---TODO: content---**

**"Git Bash" appendix:**

- Currently uses "user-id" in terminal consistently, but chapters use "username" and "<username>" in commands. This needs to be streamlined. Probably by changing "user-id" to "username" in this appendix.

- Use "option" instead of "flag" throughout the chapter.

- Only the "-r" option has been introduced for "git rm", but often it is necessary to also use the "-f" option or you have to approve the deleting of each file in some cases. Probably best to also introduce this option and consistently use "-rf" in tutorial.


**Introduction to version control and Git:**

- Review diagrams and images in chapter:

  - Would it be better to drop the two column design, and simply put diagrams in-between text? The current design does not look good on a mobile for example.

  - Does the terminology in the diagrams match the terminology in the text?
  
  - Local VCS uses "Database" in diagram. Should be probably be "Repository".
    
  - Centralized and distributed VCS diagrams should have a repository box inside the server box.

  - Should maybe be mentioned (and depicted in diagram) that distributed VCS's often still use a server repository as a central repository. This could be mentioned a "pro" of CVCSs: they can be used in a centralized way, and often is.
  
  - Is the information in the diagrams correct and informative
  
  - "main part of Git project" diagram: maybe simplify diagram to show
     working directory -> staging area -> git directory
     and then an arrow back to working directory from git directory.
     This enforces the mental model of the cycle of working with git.
     
  - "Commit" is used suddenly, when "snapshot" only used so far. Maybe add sentence that eachsnapshot is called a commit.


**"Undoing changes" chapter:**

- git revert not introduced on purpose since it will rarely be used by the intended audience. But it is a useful command, and it might be relevant to introduce at some point. Maybe at an appropriate place in Part II or as a stand-lone chapter.

- Currently does not show how to "undo" a commit. This would require introducing git reset --hard <checksum>. Can this also be done with git restore? UPDATE: the chapter now includes this, but in an unfinished manner? Needs further work.

- Consider if it is better to merge the git reflog appendix into this chapter as a final section since it is a natural extension of this topic.

- Centralized VCS diagram: Expand diagram to illustrate that each developer has a local copy of "file.txt".

**Chapter 5-11:**

Only rough outlines / first draft of chapters so far. These chapters need a lot of work still.


**---TODO: technical stuff---**

- Use of CSS to colour terminal output has been streamlined. Currently using some of the default mintty colours, but they don't seem to correspond
  exactly with what is shown in Git BASH by default for some colours, even though they should be the same as the default mintty colours.
  Consider tweaking colours to match better.
  
- So far, the "git commit" flag "-m" is consistently used on the form "git commit-m"commit message". Is it more correct to use "git commit -m "commit message". The current reason for not including a space is that this does not generally work for bash commands?

- In some cases, simulated output from the terminal and notepad documents contains blank lines at the end. Figure out how to remove these. This has probably something to do with multiple nested div and pre tags, and/or making a new line after starting a pre tag or putting </pre> on a new line.


**---Topics that might be needed/interesting to include---**

- How to write a "good" commit message. Seems like a natural thing to include. But where? It feel wrong to include it in the "Configuration of Git" appendix together with the commit.template setting. Maybe in the "Inspecting the commit history chapter"? At this point the basic commands have been introduced, and after talking about git log, it becomes clear why you should write good commmit messages.

- The concept of references is currently not properly introduced? In particular it is not explained what HEAD is anywhere? This needs to be remedied. Briefly introducing the concept of references when needed seems appropriate. Maybe make appendix chapter with more details? The way forward will probably be more clear when more of the tutorial is getting closer to be done.

- The current scope of the tutorial does not include an in-depth look at what the index / staging area is and how it works. But it is very relevant to include some information about this, since it helps shape the correct mental model of how Git works. This information could be put in a separate part II chapter, or maybe there is an appropriate place in on of the chapters. Perhaps a short appendix would be most appropriate? The question is more where can I find more technical details about what the index is? Not really explained in any detalis many places?

- git tag. Small subject, but useful. Maybe in chapter where refs and branches are introduced? This is a subject that is not essential and might be a thing that can be introduced in an appendix.

- git add -p. Too technical to add talk about early in the tutorial, but a very useful flag that should be discussed somewhere. Figure out where it would make most sense to include this. Could maybe also be as an exercise in a relevant chapter in the later part of the tutorial?

- Consider restructuring some of the more technical content in the tutorial. Instead of going into depth with technical introductions all over the place when new concepts have to be introduced, give a very brief introduction instead, and refer to an appendix with more in-depth explanations. In connection with this, maybe some of the chapters should be more focused on showing how to use Git commands as fast as possible with briefer technical introductions, that are then explained in more details later in the chapter and/or in an appendix.

- GitHub CLI: there seems to be an issue where the GitHub CLI stores login credentials in plain text if the CLI is used by a user without admin privilies. This does not immidiately seem like a problem if the CLI was used through git BASH on Windows on a DCE work pc, since we (apparently) have admin privilies on these. But remember to test this on a fresh laptop later to make sure we do not use an approach that saves credentials in plain text.

- "git rm" is not discussed properly anywhere? This should properly be redemied. But it is unclear where it would be appropriate to do so. "git rm --cached" is currnelty used in exercise in "Ignoring files" appendix, and  is also mentioned in "Getting started" chapter, where it is currently just noted that we get back to that command later in the tutorial. If we do, there should be an explicit reference at some point.
