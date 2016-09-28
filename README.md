# drie starter app

Do the following:

1. `APP_NAME=$(curl -s http://master.randomappname-generator.drieapp.co)`
2. `git clone git@github.com:drie/demo-starter-app.git`
3. `cd demo-starter-app`
4. `git remote add drie git@drieapp.co:${APP_NAME}`
5. `git push drie`
6. Visit master.${APP_NAME}.drieapp.co or `curl master.${APP_NAME}.drieapp.co`
