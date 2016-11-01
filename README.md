# drie starter app

Do the following:

1. `APP_NAME=$(curl -s http://m.rang.app.push.drieapp.co)`
2. `git clone git@github.com:drie/demo-starter-app.git`
3. `cd demo-starter-app`
4. `git remote add drie ${APP_NAME}.app@push.drieapp.co:code.git`
5. `git push drie master`
6. Visit `master.${APP_NAME}.app.push.drieapp.co` or `curl master.${APP_NAME}.app.push.drieapp.co`
