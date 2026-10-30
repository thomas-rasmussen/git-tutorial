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
     
  - "Commit" is used suddenly, when "snapshot" only used so far. Maybe add sentence that each snapshot is called a commit.

**"Getting started" chapter:"**

- Add a sentence or two the first time commit messages are introduced encouraging readers to write descriptive commit messages.

- introduce "git rm". This is a fundamental command that should be introduced in this chapter.

- Exercise 3: Should not be an optional exercise since it is important. Augment the exercise by adding commands to create a project that can be used if the reader does not have one of their own.

- Add sentence to "Accessing manual pages" section (or make a more general "Getting help" section ) on the alternatives to getting help:

 - Google it. In many case easy to find answers to common questions.
 
 - Use LLM as "advanced" google: Git is open source and the most popular VCS in the world. LLMs are trained on the source code of Git, all the official documentation + at least one metric fuckton of code from the internet. LLM's (at least ChatGPT) is excellent at answering questions related to Git. This  is particular true for complicated niche questions that no one else have ever though to ask on stackoverflow etc. The official documentation is also vast and can be hard to navigate/understand, and LLMs can make getting answers to questions much easier.



**"Inspecting the commit history" chapter:**

- Add a dedicated section explaining good commit message conventions, supported by example of informative an uninformative commit histories.

  - Add it near the end of the chapter
  
  - Draft title "Writing good commit messages"
  
  - Suggestions for recommendations:
  
    - Write a concise subject line (Summarize teh purpose of the commit clearly)
    
    - Use the imperative mood (Prefer "Add", "Fix", or "Update" over "Added" or "Fixed"
    
    - Describe what the commit accomplishes (Avoid vague messages such as "Changes" or "Update files")
    
    - Explain why when necessary (For more complex changes, provide additional context in the message body)
    
    - Keep messages consistent (Follow the conventions used by the project.)
    
    - 

**"Undoing changes" chapter:**

- git revert not introduced on purpose since it will rarely be used by the intended audience. But it is a useful command, and it might be relevant to introduce at some point. Maybe at an appropriate place in Part II or as a stand-lone chapter.

- Currently does not show how to "undo" a commit. This would require introducing git reset --hard <checksum>. Can this also be done with git restore? UPDATE: the chapter now includes this, but in an unfinished manner? Needs further work.

- Consider if it is better to merge the git reflog appendix into this chapter as a final section since it is a natural extension of this topic.

- Centralized VCS diagram: Expand diagram to illustrate that each developer has a local copy of "file.txt".

**Chapter 5-11:**

Only rough outlines / first draft of chapters so far. These chapters need a lot of work still.


**"GitHub" chapter:**

Consider in more detail how gh auth login -p https -cw works regarding storing of credentials. We are working under the assumption that readers have a credential manager installed/configured so that credentials are not stored as plain text which is a potential security risk. Figure out if a credential manager is always installed on a windows machine, and if not, if this is something that can be explained how to do.

**---TODO: technical stuff---**

- Use of CSS to colour terminal output has been streamlined. Currently using some of the default mintty colours, but they don't seem to correspond
  exactly with what is shown in Git BASH by default for some colours, even though they should be the same as the default mintty colours.
  Consider tweaking colours to match better.
  
- So far, the "git commit" flag "-m" is consistently used on the form "git commit-m"commit message". It is probably better to use "git commit -m "abc"" instead, since this is easier for beginners to understand.

- In some cases, simulated output from the terminal and notepad documents contains blank lines at the end. Figure out how to remove these. This has probably something to do with multiple nested div and pre tags, and/or making a new line after starting a pre tag or putting </pre> on a new line.

-Diagrams looks all wrong in browsers with dark background. Maybe it is necessary to make the background of all diagrams white instead of transparent?


