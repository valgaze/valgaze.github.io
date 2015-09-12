---
published: true
title: Deploy Your Damn Nodejs App to Amazon Web Services
---

**You should read this if:** You have built a nodejs application as a side/educational project and want to deploy it in the wild. Hopefully you’ve never touched AWS or dealt with deployment before and are curious about it.

**You should NOT read this (and instead skip the resources section) if:** You have a mission-critical nodejs application and have important security or scalability concerns on your mind. This guide is not for you-- skip to the resources section at the bottom helpful reading materials.

With that out of the way, let's briefly discuss the current state of play: These days if you have a Nodejs application and want to get it deployed , you have lots of choices--Heroku, Nodejitsu, Digital Ocean, Appfrog, Azure, and a whole host of others. Different providers compete on price, functionality, workflows, ease-of-use, security, control, and many other factors. For someone just looking to deploy their app to a reliable and competent provider, the sheer volume of choices can be a bit overwhelming. 

To help simplify things a bit, this is the first in a series of step-by-step guides of exactly how to deploy your site to nodejs to various providers. These will be bare-boned without any fancy configurations. 

At the bottom of this post are a ton of links/resources on AWS and other sources for hosting your node app. Stay tuned for more!


**Deploying a simple nodejs to AWS (no heroku/nodejitsu/etc 3rd-party organizations)**

1.  This assumes You have already an AWS account, have a copy of a functioning node app that runs locally and works correctly
2.  Log onto AWS and under “Deployment and Management” click Elastic Beanstalk

3. **DIRECT LINK:** **<u>[https://us-west-2.console.aws.<wbr>amazon.com/elasticbeanstalk/<wbr>home?region=us-west-2](https://us-west-2.console.aws.amazon.com/elasticbeanstalk/home?region=us-west-2)</u>**

4.  Click “Create New Application” (hard to see) top right corner
5.  Enter a unique application name and click **NEXT**
6.  On “New Environment” page click **CREAT**E WEB SERVER
7.  On “Permissions” modal popup box a profile should already be available, make sure the radio button next to it “checked” and click **NEXT**
8.  Note: IAM stands for Identity and Access Management and is kind of like setting up a user who has permissions to mess around with your services
9.  On "Environment Type" page select **Node.js** from the dropdown for "Predefined configuration" and click **NEXT**
10.  Go your nodejs application folder on your computer and select all the files INSIDE the folder and make it a zip file
11.  IMPORTANT: Zip everything **<u>inside</u>** your application folder but DO NOT just zip up the top level folder-- you have to go down one level where the guts of your application live
12.  On the “Application Version” page, select the “Upload and Deploy" option and upload the zipped version of your nodejs application from Step #10 then click **NEXT** (you’ll need a wait a bit while it uploads)
13.  On the “Environment Information” page, come up with a name for “Environment name” and name for “Environment URL” then click **NEXT**
14.  Note: Click the **Check Availability** button next after entering your environment URL and if it turns green that means it’s unique and you can proceed
15.  On the "Additional Resources" page, don't touch anything (both checkboxes should be blank) and click **NEXT**
16.  On the "Configuration Details" page, don't touch anything (leave all defaults) then scroll down and click **NEXT**
17.  On the "Environment Tags" page, don't touch anything and click **NEXT**
18.  On the “Review” page don’t touch anything, scroll down and click **<u>LAUNCH</u>**
19.  NOTE: It will take a few minutes to launch you’ll see your dashboard and once it’s ready the spinning icon under Overview will turn into a green checkbox
20.  Your URL is at the top of the page at <u>[http://XXXXXXXX.<wbr>elasticbeanstalk.com](http://XXXXXXXX.elasticbeanstalk.com)</u>

To update the app with new code, return to the application’s status page and under Running Version click **Upload and Deploy** and with your newly zipped application package, upload it on the box that comes up and it should deploy automatically to the same URL!

Whew! That's a lot of clicking. What you've just done is certainly not the best deployment strategy from a workflow perspective. But if you followed the steps above you now have your project hosted on a "real" provider. Take a few others for a test run and see which one best fits your needs.



# Resources & Links:


*   Master nodejs hosting list: <u>[https://github.com/joyent/<wbr>node/wiki/Node-Hosting](https://github.com/joyent/node/wiki/Node-Hosting)</u>

* Node on Heroku: [https://adamhedge.azurewebsites.net/2015/09/09/really-deploying-your-node-server-on-heroku/](https://adamhedge.azurewebsites.net/2015/09/09/really-deploying-your-node-server-on-heroku/)

*   [Comparison of providers](https://seroter.wordpress.com/2013/07/29/where-the-heck-do-i-host-my-node-js-app/)
*   [AWS Deployment 101](http://docs.aws.amazon.com/gettingstarted/latest/deploy/overview.html)
* [https://wblinks.com/notes/aws-tips-i-wish-id-known-before-i-started/](https://wblinks.com/notes/aws-tips-i-wish-id-known-before-i-started/)

Tools

*   [http://docs.aws.amazon.com/<wbr>elasticbeanstalk/latest/dg/eb-<wbr>cli3-install.html](http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html)

URLs & Domain Names:

*   [http://gregblogs.com/tlt-<wbr>associate-a-namecheap-domain-<wbr>with-an-amazon-ec2-instance/](http://gregblogs.com/tlt-associate-a-namecheap-domain-with-an-amazon-ec2-instance/)

