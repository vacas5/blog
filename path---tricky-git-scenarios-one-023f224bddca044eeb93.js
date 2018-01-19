webpackJsonp([5828291695771],{354:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Russell J. Anderson, Web Developer",author:"Russell J. Anderson"}},markdownRemark:{id:"/Users/russellanderson/Code/blog/src/pages/2018-01-06-tricky-git/index.md absPath of file >>> MarkdownRemark",html:'<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Being awesome at github is, by itself, probably worth $50k/year.</p>&mdash; kevin moore (@kevinMrr) <a href="https://twitter.com/kevinMrr/status/390629841961091072?ref_src=twsrc%5Etfw">October 17, 2013</a></blockquote>\n<h2>Moving work to another branch</h2>\n<p>Often times I find myself in the following scenario: I am working on a feature branch, deep down in the weeds, but I notice a separate bug. Usually this bug is minor and annoying, and would take me all of five minutes to resolve. Instinctively I fix such a minor thing that already has my attention and move on to continuing the primary task at hand.</p>\n<p>Later, maybe hours or maybe days, as I begin reviewing work to commit using <code>git add -p</code>, I remember “oh yeah I fixed that unrelated thing, and it doesn’t really belong in here”. I could just make an additional commit and keep going. But maybe my feature isn’t quite ready yet, and the bug is fixed and ready to be merged. Maybe someone else’s work could benefit from having that annoying bug fixed, too. I need to get it off of my branch and into it’s own branch and get a pull request ready.</p>\n<p>Here is how I handle, depending on the situation.</p>\n<h3>The work isn’t yet committed</h3>\n<p>This scenario is not too difficult, but you have to be disciplined. If the minor bug fix you want to move off this branch is not yet committed or staged, begin by committing all other work first. This probably rules out usage of <code>git add .</code> or adding entire files at a time.</p>\n<p>My colleague <a href="https://twitter.com/jacqueswoodcock">@jacqueswoodcock</a> trained me on how to use git, and some sage advice he passed along was to use the git add patch functionality:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>git add -p</code></pre>\n      </div>\n<p>If you’re unfamiliar with this command, go read <a href="https://dev.to/sharpshark28/self-code-review-with-git-add-patch">Self Code Review with Git Add Patch</a>. This command is paramount for me reviewing my code before it’s committed. It helps me remember “oh yeah I wanted to add some comments here”, or “there’s a leftover console.log” before I even open a pull request. It also can help one out of some very tricky situations in code, where you have made several changes in a single file but they really belong in separate commits (or in our case, separate branches).</p>\n<p>Using <code>git add -p</code> you should be able to commit everything <em>but</em> the bugfix you want to move. So do that.</p>\n<p>Next, stash it using:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>git stash</code></pre>\n      </div>\n<p>Git stash is a powerful, if somewhat mysterious command. Often it helps me in situations when I just need a complete do-over. Combined with <code>git add -p</code> it can save me from going through file by file and deleting lines I don’t need. In this particular case, stash will take all that work we <em>do</em> need and hold onto it for us in the ether. After stashing, let’s checkout our base branch, and then checkout a brand new branch for our simple bug fix. After this is done, run:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>git stash pop</code></pre>\n      </div>\n<p>This will take the latest stuff we stashed and pop it onto the new branch as unstaged changes. Now we can review, add and commit as usual, push this branch up and open a pull request. You can encounter merge conflicts after this command, perhaps if something on your base branch changed while you were at work elsewhere. In this case you’ll just need to fix them and immediately make a commit. Nicely done.</p>\n<h3>The work has already been committed</h3>\n<p>Conversely, we might encounter a situation in which we have already committed something that we want to introduce to the codebase independent of other commits in our branch. This can be a bit trickier but it is totally possible as long as we’re confident the commit we want to move is self-contained. But I’m sure you only ever make small, fully realized commits anyway, right?</p>\n<p>First, let’s use <code>git log</code> to show all our most recent commits.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/git-log-678487ac5b27247efb393c35341d8486-87449.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 118.61575178997614%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAYABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAECAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB4iEZitICgP/EABYQAAMAAAAAAAAAAAAAAAAAAAEQIP/aAAgBAQABBQKyv//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABcQAAMBAAAAAAAAAAAAAAAAAAAQMSD/2gAIAQEABj8CcJn/xAAcEAAABgMAAAAAAAAAAAAAAAAAARARIWFBUZH/2gAIAQEAAT8hmgb7LqjRFhjZT//aAAwDAQACAAMAAAAQoA8A/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPxAf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPxAf/8QAIBAAAQQBBAMAAAAAAAAAAAAAAQARITFBEFFhccHh8f/aAAgBAQABPxAWlz7+k8A4umeEYKAi3TpmZ8lG4QO45uZR5DHPzT//2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Sample Git Log"\n        title=""\n        src="/static/git-log-678487ac5b27247efb393c35341d8486-f8fb9.jpg"\n        srcset="/static/git-log-678487ac5b27247efb393c35341d8486-e8976.jpg 148w,\n/static/git-log-678487ac5b27247efb393c35341d8486-63df2.jpg 295w,\n/static/git-log-678487ac5b27247efb393c35341d8486-f8fb9.jpg 590w,\n/static/git-log-678487ac5b27247efb393c35341d8486-87449.jpg 838w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Now, let’s copy (or however you want to take note of) that commit that we want to move. Then, let’s move it. Check out your base branch again, and cut a new branch from it, similar to what we did with the stash. Instead of popping from the stash, run:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>git cherry-pick e4cf23729b1d3de3d86f90a29863711f09d6f9a4</code></pre>\n      </div>\n<p>Obviously, replace the hash with the one you copied. This will take that commit and add only it to your new branch. Voila, you can now push this upstream and open a pull request. Again, there may be conflicts here, so don’t freak out. Because your commits are so incremental they’ll be easy to fix, right?</p>\n<p>You can even pull over multiple commits this way if need be. There is one last thing to resolve, though. We need to get the commit we just cherry picked out of our original feature branch. To deal with this, the first thing we’ll do is go back to our base branch (for the sake of argument let’s just say it’s called <code>master</code>). Checkout <code>master</code> and then pull to make sure you’re up to date with the upstream. (Side note, if you’ve forked a repo, you may have set the original repo as upstream and your fork in this case would be “origin”.) You may need to push to get your remote “origin” up to date. Whatever you need to do, make sure that “origin/master” is up to date.</p>\n<p>Now check out that old feature branch with the commits you’ve already moved. Things are about to get weird so hold on. Run:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>git rebase -i origin/master</code></pre>\n      </div>\n<p>You’ll then see something that looks like the following image.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/git-rebase-9742ae32a70fc086880b2ea88c5f7184-7a78d.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 79.63272120200334%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAQABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAQAF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAcMBCpf/xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAEFAl//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAY/Al//xAAZEAACAwEAAAAAAAAAAAAAAAAAEQEQUSH/2gAIAQEAAT8h7pL2mOv/2gAMAwEAAgADAAAAEAAP/8QAFREBAQAAAAAAAAAAAAAAAAAAECH/2gAIAQMBAT8Qp//EABYRAAMAAAAAAAAAAAAAAAAAAAEQEf/aAAgBAgEBPxCBf//EAB4QAQABAwUBAAAAAAAAAAAAAAERABAhMUFRgaHh/9oACAEBAAE/EJhgYNynHR1ZK/KRx5b/2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Sample Git Rebase"\n        title=""\n        src="/static/git-rebase-9742ae32a70fc086880b2ea88c5f7184-f8fb9.jpg"\n        srcset="/static/git-rebase-9742ae32a70fc086880b2ea88c5f7184-e8976.jpg 148w,\n/static/git-rebase-9742ae32a70fc086880b2ea88c5f7184-63df2.jpg 295w,\n/static/git-rebase-9742ae32a70fc086880b2ea88c5f7184-f8fb9.jpg 590w,\n/static/git-rebase-9742ae32a70fc086880b2ea88c5f7184-85e3d.jpg 885w,\n/static/git-rebase-9742ae32a70fc086880b2ea88c5f7184-d1924.jpg 1180w,\n/static/git-rebase-9742ae32a70fc086880b2ea88c5f7184-7a78d.jpg 1198w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>So, if you’re scared of using rebase, I can appreciate that. A lot of folks are warned off of it as dangerous, and it certainly can have some pretty bad results if you don’t know what you’re doing. But I swear by it to help me maintain a clean git history with informative commits (for my future self). Using the interactive (<code>-i</code>) argument really helps me understand all that’s going on with it. In the screencap you can see that the instructions are always there if you forget what you’re doing.</p>\n<p>In our case, let’s say for the sake of argument that the top commit is the one that we’ve cherry picked over. All we need to do in this case is replace the work “pick” with “d” or “drop”, and then close our text editor. The rebase will do it’s thing, forgetting all about the commit we’ve cherry picked to another branch. You’ll have to force push your branch now, which may seem scary, but we know what we’ve done and we no longer need that commit.</p>\n<p>Time for a snack.</p>',frontmatter:{title:"Tricky Git Scenarios Volume One",date:"January 06, 2018",path:"/tricky-git-scenarios-one/"},excerpt:"Moving work to another branch Often times I find myself in the following scenario: I am working on a feature branch, deep down in the weeds…"},unsplashPhoto:{id:"geNNFqfvw48",description:"A child playing with a Jenga block tower",urls:{full:"https://images.unsplash.com/photo-1489850846882-35ef10a4b480?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=49e2f50940b67ef42bbd887b92fde05f",regular:"https://images.unsplash.com/photo-1489850846882-35ef10a4b480?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=fbeda974a6b42d0f8fb1483170fba55d",small:"https://images.unsplash.com/photo-1489850846882-35ef10a4b480?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=48a456a30aac887d40944db4bbad3479"},user:{name:"Michał Parzuchowski",links:{html:"https://unsplash.com/@mparzuchowski"}}}},pathContext:{path:"/tricky-git-scenarios-one/",unsplash:"geNNFqfvw48"}}}});
//# sourceMappingURL=path---tricky-git-scenarios-one-023f224bddca044eeb93.js.map