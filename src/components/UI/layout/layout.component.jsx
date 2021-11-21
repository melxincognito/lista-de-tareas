import React from "react";
import MainNavigation from "../../navigation/NavigationLayout.component";
import classes from './layout.module.css'

function ApplicationLayout(props) {
  return (
    <div>
      <MainNavigation>
          <main className={classes.main}>
            {props.children}
          </main>
      </MainNavigation>
    </div>
  );
}

export default ApplicationLayout;
