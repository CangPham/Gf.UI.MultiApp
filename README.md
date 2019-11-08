# Gf.UI.MultiApp

How to run the demo:

Go to folder ClientApp then open cmd command
Run "ng build"
Open the app in VS 2019 (Using dot net core 3.0)
Press F5 to run

## Architecture
![Single App Component](https://github.com/mikelunn/net-core-mvc-angular/blob/master/AngularMvc.png)

With this approach, the MVC framework handles the rendering of the app shell, and any other features that just display data to the user. Then I use Angular for features that involve a lot of partial page refreshing.
