# RockPaperScisors_Odin
Rock Paper Scisors Game from the Odin Project

## Steps to implement
- Step 7: Buttons
In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.

    1. For now, remove the logic that plays exactly five rounds.
    2. Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
    3. Add a div for displaying results and change all of your console.logs into DOM methods.
    4. Display the running score, and announce a winner of the game once one player reaches 5 points.
    5. You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.
- Step 8: Commit changes to branch
Once UI is done ensure changes are committed to the rps-ui branch with git status before proceeding. 
- Step 9: Merge changes to main branch
Now let’s take a look at how we can merge the changes from our rps-ui branch back to our main branch.
    1. Checkout the branch we want to merge INTO i.e. main with the command git checkout main.
    2. Now let’s merge our rps-ui branch into main, our current branch, with git merge rps-ui.
    3. If everything goes fine, our rps-ui branch is now successfully merged with main! Use git log and you’ll see all the commits you’ve made to your feature branch on top of the commits you made to the main branch. Now for our final step!
    4. Let’s push our main branch into our remote repo by running git push origin main . Go to your GitHub repo and you’ll see that our main branch will have all the changes and commits you made to the rps-ui branch. Congratulations! You’ve successfully pushed your first feature into your production branch!
    5. Now that we have all our code in the main branch, we don’t really need our rps-ui branch anymore. Let’s do some cleanup, both locally and in the remote repo. Delete the branch from our local repo with git branch -d rps-ui and also delete it from the remote repo on GitHub with git push origin --delete rps-ui. Congrats, we’re all done with our cleanup!
- Step 10: Make sure to publish the project on GitHub Pages and add a live preview link in the project lesson.
## Previous Steps Completed
- Step 1: Setup the project structure and Github
- Step 2: Write the logic to get the computer choice
- Step 3: Write the logic to get the human choice
- Step 4: Declare the players score variables
- Step 5: Write the logic to play a single round
- Step 6: Write the logic to play the entire game
